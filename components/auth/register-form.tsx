'use client'

import { Input } from '@/design-system'
import { registerSchemaUser } from '@/lib/zod-schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TbLoader2 } from 'react-icons/tb'
import type { z } from 'zod'

type Inputs = z.infer<typeof registerSchemaUser>

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const supabase = createClientComponentClient()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchemaUser),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  })

  const onSubmit = async (data: Inputs) => {
    setIsSubmitting(true)

    const res = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
        data: {
          role: 'user',
          name: data.name,
        },
      },
    })
    setIsSubmitting(false)

    if (!res.error) {
      setIsSuccess(true)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-10 w-full'>
      <div className='space-y-4'>
        <Input
          type='text'
          placeholder='Your name'
          name='name'
          register={register}
          errors={errors}
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          register={register}
          errors={errors}
        />
        <Input
          type='password'
          name='password'
          placeholder='Your password'
          register={register}
          errors={errors}
        />
        <Input
          type='password'
          name='repeatPassword'
          placeholder='Repeat the password'
          register={register}
          errors={errors}
        />
      </div>
      <button
        disabled={isSubmitting}
        className='mt-8 flex w-full items-center justify-center gap-1 rounded-full bg-primary py-2.5 text-center text-white transition-colors hover:bg-primary/80'
      >
        {isSubmitting && (
          <TbLoader2 className='animate-spin text-xl duration-1000' />
        )}
        Register
      </button>

      {isSuccess && (
        <p className='mt-5 text-center text-lg text-white/80'>
          Please check your email, we send a verification email, check spam too.
        </p>
      )}
    </form>
  )
}

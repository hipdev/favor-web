'use client'

import { Input } from '@/design-system'
import { loginSchemaUser } from '@/lib/zod-schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TbLoader2 } from 'react-icons/tb'

import type { z } from 'zod'

type Inputs = z.infer<typeof loginSchemaUser>

export default function LoginForm() {
  const supabase = createClientComponentClient()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchemaUser),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: Inputs) => {
    setIsSubmitting(true)
    const res = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (res?.data.user) {
      router.refresh()
    }
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-10 w-full '>
      <div className='space-y-4'>
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
      </div>

      <button
        disabled={isSubmitting}
        className='mt-8 flex w-full items-center justify-center gap-1 rounded-full bg-primary py-2.5 text-center text-white transition-colors hover:bg-primary/80'
      >
        {isSubmitting && (
          <TbLoader2 className='animate-spin text-xl duration-1000' />
        )}
        Login
      </button>
    </form>
  )
}

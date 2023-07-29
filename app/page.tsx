export const dynamic = 'force-dynamic'

import { cookies } from 'next/headers'

import Image from 'next/image'
import Link from 'next/link'
import AuthPassword from '@/components/auth/auth-password'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'

export default async function Login() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log(user, 'user')
  if (user) {
    redirect('/dashboard/earnings')
  }

  return (
    <div className='min-h-screen bg-[#FFA53B]'>
      <div className='mx-auto flex max-w-6xl'>
        <div className='relative w-2/3 px-20'>
          <h3 className='pt-7 text-4xl font-bold text-black/90'>favor</h3>

          <h1 className='mt-32 text-7xl font-semibold'>Get Favor</h1>
          <p className='mt-10 text-3xl font-medium text-black/80'>
            The dating app that works in <br />
            <span>your favor</span>
          </p>
        </div>
        <div className='flex w-1/3 flex-col justify-center bg-secondary'>
          <div className='mx-auto flex max-w-md flex-col items-center justify-center'>
            <Image
              src='/logo.png'
              width={300}
              height={100}
              alt='Login Background'
              className='relative right-1 w-56'
            />

            <AuthPassword />

            <p className='mt-10 text-xs text-white/30'>
              Forgot your password?{' '}
              <Link href='/' className='text-primary hover:text-primary/80'>
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

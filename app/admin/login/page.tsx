import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import LoginGoogle from '@/components/auth/login-google'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/admin/users')
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-primary/70'>
      <div className='w-80 rounded-sm bg-white px-4 py-5 pb-10 shadow-sm shadow-black/40'>
        <h2 className='mb-2 text-center text-2xl font-bold text-black/80'>
          Enter <span className='font-extrabold'>Favor</span>
        </h2>
        <p className='mb-10 text-center'>Welcome to the favor admin.</p>
        <div className='flex justify-center'>
          <LoginGoogle />
        </div>
      </div>
    </div>
  )
}

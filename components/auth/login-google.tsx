'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { FcGoogle } from 'react-icons/fc'

export default function LoginGoogle() {
  const supabase = createClientComponentClient()
  const loginGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: '/admin/users' },
    })
  }

  return (
    <button
      onClick={loginGoogle}
      className='flex items-center gap-2 rounded-md border-2 border-primary px-4 py-2 text-center transition-colors hover:bg-primary hover:text-black/80'
    >
      <FcGoogle className='text-xl' />
      Enter with Google
    </button>
  )
}

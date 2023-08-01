'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { AiOutlineGoogle } from 'react-icons/ai'

export default function LoginGoogle() {
  const supabase = createClientComponentClient()

  const loginGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/admin/users` },
    })
  }

  return (
    <button
      onClick={loginGoogle}
      className='flex items-center gap-2 rounded-md border-2 border-primary bg-primary px-4 py-2 text-center text-white transition-colors hover:bg-primary/80'
    >
      <AiOutlineGoogle className='text-xl' />
      Enter with Google
    </button>
  )
}

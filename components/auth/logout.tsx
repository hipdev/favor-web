'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { AiOutlineLogout } from 'react-icons/ai'

export default function Logout() {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const logout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div>
      <button
        onClick={logout}
        className='flex items-center gap-2 text-lg font-semibold text-black/80 hover:text-black'
      >
        <AiOutlineLogout />
        Logout
      </button>
    </div>
  )
}

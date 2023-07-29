import { User } from '@supabase/supabase-js'
import Image from 'next/image'
import Navigation from './navigation'

export default async function Aside({ user }: { user: User }) {
  return (
    <aside className='fixed flex h-screen w-full max-w-[249px] flex-col bg-secondary'>
      <div className='mt-10 flex justify-center'>
        <Image
          src='/logo.png'
          width={150}
          height={34}
          alt='Login Background'
          className='relative right-1 w-36'
        />
      </div>
      <Navigation user={user} />
    </aside>
  )
}

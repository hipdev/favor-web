'use client'

import { User } from '@supabase/supabase-js'
import { BsSearch } from 'react-icons/bs'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/design-system/ui/dropdown-menu'
import { FiChevronDown } from 'react-icons/fi'
import { AiFillBell, AiOutlineLogout, AiOutlineUser } from 'react-icons/ai'
import Image from 'next/image'
import { BiHelpCircle } from 'react-icons/bi'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function Header({ user }: { user: User }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header className='flex h-20 items-center justify-between bg-white px-10 pr-11 shadow-sm shadow-black/5'>
      <div className='relative'>
        <BsSearch className='absolute left-4 top-3 text-black/60' />
        <input
          placeholder='Search...'
          className='w-80 rounded-full bg-light-white py-2 pl-11 text-black/80 placeholder-black/60 outline-black/30'
        />
      </div>
      <div className='flex gap-10'>
        <div className='relative flex items-center rounded-md bg-light-white px-3'>
          <AiFillBell className='text-2xl text-secondary/70' />
          <div className='absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary' />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex h-12 cursor-pointer items-center gap-4 overflow-hidden rounded-md bg-light-white outline-none hover:text-primary'>
            <div className='w-14'>
              <Image
                src='/login-cover.jpg'
                className='w-full object-cover'
                width={40}
                height={40}
                alt='user picture'
              />
            </div>
            <div className='flex items-center gap-2 pr-3'>
              <p className='font-bold text-secondary/70'>
                {user.user_metadata.name || 'Your profile'}
              </p>
              <FiChevronDown className='text-xl text-black/50' />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mb-3 w-[13rem] text-right'>
            <DropdownMenuItem className='flex items-center justify-start gap-2'>
              <AiOutlineUser />
              <p className=''>My profile</p>
            </DropdownMenuItem>
            <DropdownMenuItem className='flex items-center justify-start gap-2'>
              <BiHelpCircle />
              <p className=''>Help</p>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={signOut}
              className='flex items-center justify-start gap-2'
            >
              <AiOutlineLogout />
              <p className=''>Logout</p>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

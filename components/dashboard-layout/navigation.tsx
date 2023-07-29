'use client'
import { Icon } from '@iconify/react'

import { User } from '@supabase/supabase-js'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/design-system/ui/dropdown-menu'
import { BsGearFill } from 'react-icons/bs'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const links = [
  { value: 'Earnings', icon: 'iconoir:wallet' },
  { value: 'Clients', icon: 'clarity:users-solid' },
  { value: 'Payments', icon: 'ion:card-outline' },
  { value: 'Videos', icon: 'ph:video-fill' },
]

export default function Navigation({ user }: { user: User }) {
  const pathname = usePathname()

  const supabase = createClientComponentClient()
  const router = useRouter()

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <nav className='flex w-full flex-1 flex-col justify-between pb-14 pl-12 pt-16 text-[17px]'>
      <div className='flex flex-col '>
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              href='/earnings'
              className={clsx(
                'flex items-center gap-3 py-2.5',
                pathname.endsWith(`/${item.value.toLowerCase()}`)
                  ? 'border-r-4 border-r-primary text-primary'
                  : 'text-white/90 hover:bg-secondary/50 hover:text-primary',
              )}
            >
              <Icon icon={item.icon} className='text-lg' />

              {item.value}
            </Link>
          )
        })}
      </div>
      <div className=' text-white'>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex cursor-pointer items-center gap-2 outline-none hover:text-primary'>
            <BsGearFill />
            Settings
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mb-3 ml-10'>
            <DropdownMenuLabel>Config</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Privacy</DropdownMenuItem>
            <DropdownMenuItem>Terms</DropdownMenuItem>
            <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

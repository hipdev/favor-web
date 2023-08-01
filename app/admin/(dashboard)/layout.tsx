export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { PiPlayFill } from 'react-icons/pi'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import Logout from '@/components/auth/logout'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Favor Admin',
  description: 'The admin of Favor.',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <main className='flex min-h-screen bg-white'>
      <aside className='flex h-full min-h-screen w-72 flex-col bg-primary px-10 py-8'>
        <Link
          href='/'
          className='flex items-center gap-2  text-4xl font-bold text-black/90'
        >
          <PiPlayFill className='text-2xl text-black sm:text-3xl' />
          Admin
        </Link>
        <div className='flex flex-1 flex-col justify-between pb-5 pt-10'>
          <div className='flex flex-col'>
            <Link href='/admin/users' className=''>
              Users
            </Link>
            <Link href='/admin/users' className=''>
              Locations
            </Link>
          </div>
          <Logout />
        </div>
      </aside>
      <div className='flex-1 px-10 py-10'>{children}</div>
    </main>
  )
}

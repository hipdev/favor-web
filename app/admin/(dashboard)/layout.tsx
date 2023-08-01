import type { Metadata } from 'next'
import { PiPlayFill } from 'react-icons/pi'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Favor Admin',
  description: 'The admin of Favor.',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='min-h-screen px-6 sm:px-10'>
      <aside>
        <Link
          href='/'
          className='flex items-center gap-2  text-4xl font-bold text-black/90'
        >
          <PiPlayFill className='text-2xl text-black sm:text-3xl' />
          Admin
        </Link>
      </aside>
      <header className='mx-auto   pt-10 sm:max-w-6xl'></header>
      {children}
    </main>
  )
}

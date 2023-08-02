import '../globals.css'
import type { Metadata } from 'next'
import { PiPlayFill } from 'react-icons/pi'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Favor - The dating app that works in your favor',
  description: 'The new way to date.',
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='min-h-screen bg-gradient-to-br from-primary to-orange-600 px-6 sm:px-10'>
      <header className='mx-auto   pt-10 sm:max-w-6xl'>
        <Link
          href='/'
          className='flex items-center gap-2  text-4xl font-bold text-black/90'
        >
          <PiPlayFill className='text-2xl text-black sm:text-3xl' />
          favor
        </Link>
      </header>
      {children}
      <footer className='flex justify-center gap-8 pb-10 pt-10 font-medium sm:pt-14'>
        <Link href='/terms' className='hover:underline'>
          Terms of service
        </Link>
        <Link href='/privacy' className='hover:underline'>
          Privacy Policy
        </Link>
      </footer>
    </main>
  )
}

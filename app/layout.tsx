import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PiPlayFill } from 'react-icons/pi'
import Link from 'next/link'
import RootProviders from '@/components/common/root-providers'

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Favor - The dating app that works in your favor',
  description: 'The new way to date.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'bg-[#FFA53B]')}>
        <main className='min-h-screen px-6 sm:px-10'>
          <header className='mx-auto   pt-10 sm:max-w-6xl'>
            <Link
              href='/'
              className='flex items-center gap-2  text-4xl font-bold text-black/90'
            >
              <PiPlayFill className='text-2xl text-black sm:text-3xl' />
              favor
            </Link>
          </header>
          <RootProviders>{children}</RootProviders>
          <footer className='flex justify-center gap-8 pb-10 pt-10 font-medium sm:pt-14'>
            <Link href='/terms' className='hover:underline'>
              Terms of service
            </Link>
            <Link href='/privacy' className='hover:underline'>
              Privacy Policy
            </Link>
          </footer>
        </main>
      </body>
    </html>
  )
}

import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={clsx(inter.className, '')}>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  )
}

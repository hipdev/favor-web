'use client'

import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Toaster position='bottom-right' />
    </>
  )
}

export default RootProviders

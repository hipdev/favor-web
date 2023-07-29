'use client'

import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import LoginForm from './login-form'
import RegisterForm from './register-form'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'

export default function AuthPassword() {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)

  const tabsRef = useRef<any>([])

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex]
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
    }

    setTabPosition()
    window.addEventListener('resize', setTabPosition)

    return () => window.removeEventListener('resize', setTabPosition)
  }, [activeTabIndex])

  return (
    <>
      <div className='relative mt-14 h-12 w-2/3 overflow-hidden rounded-full bg-[#F3F5FB] p-1.5 text-sm md:w-80'>
        <span
          className='absolute bottom-1.5 top-1.5 block h-9 rounded-full bg-primary transition-all duration-300'
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
        <button
          ref={(el) => (tabsRef.current[0] = el)}
          onClick={() => setActiveTabIndex(0)}
          className={clsx(
            'relative z-10 h-full w-1/2 rounded-full transition-colors',
            activeTabIndex == 0 ? 'text-white' : 'text-black/60',
          )}
        >
          Login
        </button>
        <button
          ref={(el) => (tabsRef.current[1] = el)}
          onClick={() => setActiveTabIndex(1)}
          className={clsx(
            'relative z-10 h-full w-1/2 transition-colors',
            activeTabIndex == 1 ? 'text-white' : 'text-black/60',
          )}
        >
          Register
        </button>
      </div>

      <p className='mt-10 text-center text-[#707CA8]'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      {activeTabIndex == 0 ? <LoginForm /> : <RegisterForm />}

      <p className='mt-8 text-[#707CA8]'>Or</p>

      <div className='mt-5 flex'>
        <button className='flex items-center gap-2 rounded-md bg-light-white px-7 py-2.5 text-black/60 hover:bg-light-white/90'>
          <FcGoogle />
          {activeTabIndex == 0 ? 'Sign in' : 'Register'} with Google
        </button>
        <button className='ml-3 rounded-md bg-light-white px-4 py-2.5 text-black hover:bg-light-white/90'>
          <BsFacebook className='text-2xl text-blue-500' />
        </button>
      </div>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import AuthPassword from '@/components/auth/auth-password'
import { PiPlayFill } from 'react-icons/pi'

export default async function Login() {
  return (
    <div className='min-h-screen bg-[#FFA53B]'>
      <div className='mx-auto flex max-w-6xl'>
        <div className='relative w-2/3 px-20'>
          <h3 className='flex items-center gap-2 pt-14 text-4xl font-bold text-black/90'>
            <PiPlayFill className='text-3xl text-black' />
            favor
          </h3>

          <h1 className='mt-32 text-7xl font-semibold'>Get Favor</h1>
          <p className='mt-10 text-3xl font-medium text-black/80'>
            The dating app that works in <br />
            <span>your favor</span>
          </p>

          <h4 className='mb-7 mt-20 text-xl font-medium'>Stay tuned:</h4>
          <form>
            <div className='space-y-4'>
              <input
                type='email'
                placeholder='Your email*'
                className='w-full rounded-full px-6 py-3 shadow-sm shadow-black/50 outline-[#FFA53B] placeholder:text-black/70'
              />
              <input
                type='text'
                placeholder='Your city*'
                className='w-full rounded-full px-6 py-3 shadow-sm shadow-black/50 placeholder:text-black/70'
              />
            </div>

            <button className='hover mt-7 rounded-full bg-black/70 px-10 py-3 font-medium text-white transition-colors hover:bg-black/90'>
              Send
            </button>
          </form>

          <h3 className='mt-20 text-center text-xl font-medium text-black/80'>
            Available soon on:
          </h3>
          <div className='relative flex justify-center'>
            <Image
              src='/google-play.png'
              width={400}
              height={150}
              alt='Login Background'
              className='relative right-1 w-60'
            />
          </div>
        </div>
        <div className='flex w-1/3 flex-col justify-center bg-secondary'>
          <div className='mx-auto flex max-w-md flex-col items-center justify-center'>
            <Image
              src='/logo.png'
              width={300}
              height={100}
              alt='Login Background'
              className='relative right-1 w-56'
            />

            <AuthPassword />

            <p className='mt-10 text-xs text-white/30'>
              Forgot your password?{' '}
              <Link href='/' className='text-primary hover:text-primary/80'>
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

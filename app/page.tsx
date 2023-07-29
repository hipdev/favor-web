import Image from 'next/image'

import { PiPlayFill } from 'react-icons/pi'
import { MdPlayCircle } from 'react-icons/md'

export default async function Login() {
  return (
    <div className='min-h-screen bg-[#FFA53B]'>
      <div className='mx-auto flex flex-col pt-8 sm:max-w-6xl sm:flex-row sm:pt-14'>
        <div className='relative w-full px-6 sm:w-2/3 sm:px-20'>
          <h3 className='flex items-center gap-2  text-4xl font-bold text-black/90'>
            <PiPlayFill className='text-2xl text-black sm:text-3xl' />
            favor
          </h3>

          <h1 className='mt-16 text-5xl font-semibold sm:mt-32 sm:text-7xl'>
            Get Favor
          </h1>
          <p className='mt-4 text-2xl font-medium text-black/80 sm:mt-10 sm:text-3xl'>
            The dating app that works in <br />
            <span>your favor</span>
          </p>

          <h4 className='mb-5 mt-10 text-xl font-medium sm:mb-7 sm:mt-20'>
            Stay tuned:
          </h4>
          <form>
            <div className='space-y-3 sm:space-y-4'>
              <input
                type='email'
                placeholder='Your email*'
                className='w-full rounded-full px-6 py-2.5 shadow-sm shadow-black/50 outline-[#FFA53B] placeholder:text-black/70 sm:py-3'
              />
              <input
                type='text'
                placeholder='Your city*'
                className='w-full rounded-full px-6 py-2.5 shadow-sm shadow-black/50 placeholder:text-black/70 sm:py-3'
              />
            </div>

            <button className='hover mt-5 rounded-full bg-black/70 px-10 py-2.5 font-medium text-white transition-colors hover:bg-black/90 sm:mt-7 sm:py-3'>
              Send
            </button>
          </form>

          <h3 className='mt-10 text-center text-xl font-medium text-black/80'>
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
        <div className='mt-8 flex h-[28rem] w-full flex-col items-center sm:mt-0 sm:h-auto sm:w-1/3'>
          <h2 className='text-center text-xl font-bold sm:text-2xl'>
            Favor in 2 minutes:
          </h2>
          <a
            href='https://www.youtube.com/watch?v=cvfIR-hzVK8&ab_channel=favor'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative h-full w-full'
          >
            <Image
              src='/demo-preview.png'
              fill
              alt='Login Background'
              className='object-contain opacity-90 transition-opacity group-hover:opacity-100'
            />

            <MdPlayCircle className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-5xl text-white/80 transition-colors group-hover:text-white sm:text-7xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

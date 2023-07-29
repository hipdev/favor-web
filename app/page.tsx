import Image from 'next/image'

import { PiPlayFill } from 'react-icons/pi'
import { MdPlayCircle } from 'react-icons/md'

export default async function Login() {
  return (
    <div className='min-h-screen bg-[#FFA53B]'>
      <div className='mx-auto flex max-w-6xl pt-14'>
        <div className='relative w-2/3 px-20'>
          <h3 className='flex items-center gap-2  text-4xl font-bold text-black/90'>
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
        <div className='flex w-1/3 flex-col items-center'>
          <h2 className='pt-10 text-center text-2xl font-bold'>
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
              className='object-cover opacity-90 transition-opacity group-hover:opacity-100'
            />

            <MdPlayCircle className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-7xl text-white/80 transition-colors group-hover:text-white' />
          </a>
        </div>
      </div>
    </div>
  )
}

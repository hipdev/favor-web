import Image from 'next/image'
import Autocomplete from 'react-google-autocomplete'

import { MdPlayCircle } from 'react-icons/md'
import { performRequest } from '@/lib/dato'
import { HOMEPAGE_QUERY } from '@/lib/dato-queries'
import HomeForm from '@/components/home/form'

export default async function HomePage() {
  const { homepage } = await performRequest({ query: HOMEPAGE_QUERY })

  return (
    <div className=''>
      <div className='mx-auto flex flex-col pt-8 sm:max-w-6xl sm:flex-row sm:pt-14'>
        <div className='relative w-full sm:w-2/3'>
          <h1 className='pt-12 text-5xl font-semibold sm:pt-16 sm:text-7xl'>
            {homepage.title}
          </h1>
          <p className='mt-4 whitespace-pre text-2xl font-medium text-black/80 sm:mt-10 sm:text-3xl'>
            {homepage.subtitle}
          </p>

          <h4 className='mb-5 mt-10 text-xl font-medium sm:mb-7 sm:mt-20'>
            Stay tuned:
          </h4>
          <HomeForm content={homepage} />

          <h3 className='mt-10 text-center text-xl font-medium text-black/80'>
            {homepage.availableSoon}
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
        <div className='flex h-[28rem] w-full flex-col items-center pt-16 sm:mt-0 sm:h-auto sm:w-1/3'>
          <h2 className='text-center text-xl font-bold sm:text-2xl'>
            {homepage.appTitle}
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

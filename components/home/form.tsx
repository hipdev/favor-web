'use client'
import { addUserEmailAndLocation } from '@/lib/db/locations'
import { useState } from 'react'
import { usePlacesWidget } from 'react-google-autocomplete'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { TbLoader2 } from 'react-icons/tb'

export default function HomeForm({ content }: { content: any }) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { ref }: any = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    options: {
      componentRestrictions: { country: 'us' },
      types: ['(cities)'],
    },
    onPlaceSelected: (place) => {
      setValue('location', {
        formatted_address: place.formatted_address,
        place_id: place.place_id,
      })
    },
  })

  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    console.log(data, 'data')

    await toast.promise(
      addUserEmailAndLocation({ email: data.email, location: data.location }),
      {
        loading: 'Submitting...',
        success: () => {
          setIsSuccess(true)
          return 'Submitted successfully 🥳'
        },
        error: (err) => {
          setIsSubmitting(false)
          return `${err.toString()}`
        },
      },
    )

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-xl'>
      <div className='space-y-3 sm:space-y-4'>
        <input
          type='email'
          {...register('email', { required: true })}
          placeholder={content.email}
          className='w-full rounded-full px-6 py-2.5 shadow-sm shadow-black/50 outline-[#FFA53B] placeholder:text-black/70 sm:py-3'
          required
        />
        <input
          type='text'
          ref={ref}
          placeholder={content.city}
          className='w-full rounded-full px-6 py-2.5 shadow-sm shadow-black/50 outline-[#FFA53B] placeholder:text-black/70 sm:py-3'
          required
        />
      </div>

      <button
        disabled={isSubmitting}
        className='hover mt-5 flex items-center gap-2 rounded-full bg-black/70 px-10 py-2.5 font-medium text-white transition-colors hover:bg-black/90 sm:mt-7 sm:py-3'
      >
        {isSubmitting && (
          <TbLoader2 className='animate-spin text-xl duration-1000' />
        )}
        {content.send}
      </button>
    </form>
  )
}

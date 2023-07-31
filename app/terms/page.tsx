import ContentBlock from '@/components/common/content-block'
import { performRequest } from '@/lib/dato'
import { TERMS_QUERY } from '@/lib/queries'

export default async function TermsPage() {
  const { termsOfService } = await performRequest({ query: TERMS_QUERY })

  return (
    <div className='relative mx-auto w-full sm:max-w-6xl'>
      <h1 className='mb-5 pt-12 text-2xl font-semibold sm:mb-10 sm:pt-16 sm:text-4xl'>
        {termsOfService.title}
      </h1>

      <ContentBlock data={termsOfService.content} />
    </div>
  )
}

import ContentBlock from '@/components/common/content-block'
import { performRequest } from '@/lib/dato'
import { PRIVACY_QUERY } from '@/lib/queries'

export default async function PrivacyPage() {
  const { privacy } = await performRequest({ query: PRIVACY_QUERY })

  return (
    <div className='relative mx-auto w-full sm:max-w-6xl'>
      <h1 className='mb-5 pt-12 text-2xl font-semibold sm:mb-10 sm:pt-16 sm:text-4xl'>
        {privacy.title}
      </h1>

      <ContentBlock data={privacy.content} />
    </div>
  )
}

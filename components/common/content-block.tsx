'use client'

export default function ContentBlock({ data }: { data: string }) {
  return (
    <div>
      <div className='content' dangerouslySetInnerHTML={{ __html: data }} />

      <style jsx global>{`
        .content span,
        .content a,
        .content u,
        .content strong {
          background-color: transparent !important;
        }
      `}</style>
    </div>
  )
}

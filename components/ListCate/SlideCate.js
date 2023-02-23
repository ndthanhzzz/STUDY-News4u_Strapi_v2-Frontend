import React from 'react'
import Link from 'next/link'
import { Image } from 'antd'

function ImageCate({imgcate}){
  if(imgcate.attributes.cover.data==null){
    return(
      <Image height={100} width={150} className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy"/>
      )}
  const url = process.env.NEXT_PUBLIC_HOST_V2 + imgcate.attributes.cover.data.attributes.url
  return (
    <Image  height={100} width={150} className="rounded-xl" src={url} alt="cover" loading="lazy"/>
  )
}

function SlideCate({getcate}){
    return(
      <div className="w-auto mr-2 mb-2">
        <div>
          <ImageCate key={getcate.id} imgcate={getcate}/>
        </div>
        <Link href={`/categories/${getcate.attributes.slug}`} className="text-black text-sm hover:text-slate-400">
            <span className="border-l-4 border-red-600 mr-2"/>
            {getcate.attributes.title}
        </Link>
      </div>
    )
  }

  export default SlideCate
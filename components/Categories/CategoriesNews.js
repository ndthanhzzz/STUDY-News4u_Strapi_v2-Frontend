import React from 'react'
import Link from 'next/link'
import { ImagenewsCategories } from '../Module/CustomImage';

export default function CategoriesNews({cnews}) {
  const configTime = new Date(cnews.attributes.createdAt)
  const getTime = configTime.toLocaleTimeString(); //Time String
  const getDate = configTime.toLocaleDateString(); //Date String
  return (
    <div className='flex flex-row justify-between'>
      <div className='sm:w-auto w-3/5 bg-white m-2 '>
          <div className="text-lg text-justify font-bold leading-tight mb-2 hover:text-slate-400">
              <Link href={`/thread/${cnews.attributes.slug}`}>
                  {cnews.attributes.title}
              </Link>
          </div>
          <Link className="text-gray-500" href={`/thread/${cnews.attributes.slug}`}>
              <span className="h-3 border-l-2 border-red-600 mr-2"/>
              👁 {cnews.attributes.views} 
              <br/>
              <span className="h-3 border-l-2 border-red-600 mr-2"/>
              ⏱ {getDate}
          </Link>
      </div>
      <div className='sm:w-auto w-2/5 m-2'>
          <ImagenewsCategories imgnews={cnews} />
      </div>
    </div>
  )
}




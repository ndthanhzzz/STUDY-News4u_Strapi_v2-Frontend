import React from 'react'
import Link from 'next/link'
import { Image } from 'antd';

export default function CategoriesNews({cnews}) {
  const configTime = new Date(cnews.attributes.createdAt)
  const getTime = configTime.toLocaleTimeString(); //Time String
  const getDate = configTime.toLocaleDateString(); //Date String
  return (
    <div className='flex flex-row justify-between'>
      <div className='sm:w-auto w:3/5'>
        <ul className="bg-white py-3 px-6">  
          <h3 className="text-lg text-justify font-bold leading-tight mb-2 hover:text-slate-400">
              <Link href={`/thread/${cnews.attributes.slug}`}>
                  {cnews.attributes.title}
              </Link>
          </h3>
          <Link className="text-gray-500" href={`/thread/${cnews.attributes.slug}`}>
              <span className="h-3 border-l-2 border-red-600 mr-2"/>
              Views: {cnews.attributes.views} 
              <br/>
              <span className="h-3 border-l-2 border-red-600 mr-2"/>
              Ngày đăng: {getDate}
          </Link>
        </ul>
      </div>
      <div className='sm:w-auto w:2/5 py-3'>
        <Image className='rounded-xl' src="/news-cover.jpg" alt="ads" width={150} />
      </div>
    </div>
  )
}




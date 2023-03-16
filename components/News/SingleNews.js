import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Image } from 'antd'
import { SectionCate } from '@/pages'
import { SingleNewsTagCate } from '../Categories/SingleNewsTagCate'
import { DiscussionEmbed } from 'disqus-react';


function ShowNews ({detail,imglink,gcate}){
  const configTime = new Date(detail.attributes.createdAt)
  const getTime = configTime.toLocaleTimeString(); //Time String
  const getDate = configTime.toLocaleDateString(); //Date String
  const url = imglink;

  return(
    <div className='mx-auto sm:mx-40 flex flex-col sm:flex-row  my-10 '> 
      <div className='sm:w-2/3'>
          {/* Tag Cate */}
          <SingleNewsTagCate cate={detail}/>

          <h1 className='text-justify font-bold text-2xl my-3'>
            {detail.attributes.title}
          </h1>
          <h2 className='font-bold text-sm'>
            🕗 {getTime} - {getDate}
            <br/>
            👁 {detail.attributes.views}
          </h2>
          <br/>
          <ReactMarkdown className='text-justify px-10 indent-10 mb-10'>
            {detail.attributes.content}
          </ReactMarkdown>
    
          <DiscussionEmbed
              shortname='news4u-demo'
              config={
                  {
                    identifier: detail.attributes.slug,
                    title: detail.attributes.title,
                    language: 'vi_VN'
                  }
              }
          />
      </div>
      <div className='sm:w-1/3 flex flex-col mx-5 '>
          <div>
              <SectionCate key={gcate.id} cate={gcate}/>
               {/* Phàn chủ đề lấy từ trang chủ (gọi thêm api gcate trong thread) */}
          </div>
          <div className='my-10 md:block hidden'>
              <Image className='rounded-xl' src={url} alt="cover"  loading="lazy"/>
              🚩 Cover bài viết
          </div>
          <div className='my-5'>
              <Image className='rounded-xl' src="/news-cover.jpg" alt="ads" loading="lazy"/>
              🚩 ADS
          </div>
      </div>
    </div>
  )
}

export default function SingleNews({news,gcate}) {
  if(news.attributes.cover.data==null){
    return (
      <>
        <ShowNews detail={news} imglink={"/news-cover.jpg"} gcate={gcate}/>
      </>
    )
  }
  return (
    <>
      <ShowNews detail={news} gcate={gcate} imglink={process.env.NEXT_PUBLIC_HOST_V2 + news.attributes.cover.data.attributes.url} />
    </>
  )
}
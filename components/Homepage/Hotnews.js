import React from 'react'
import Link from 'next/link'
import { Image } from 'antd'
import { ShowTagCategories } from '../ShowTagCategories/ShowTagCategories'
import { NewsTagCate } from '../Categories/NewsTagCate'


function ImagenewsCustom({imgnews}){
    if(imgnews.attributes.cover.data==null){
      return(
        <Image height={200} width={300} className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy"/>
        )}
    const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
    return (
      <Image  height={200} width={300} className="rounded-xl" src={url} alt="cover" loading="lazy"/>
    )
}

function ImagenewsFill({imgnews}){
    if(imgnews.attributes.cover.data==null){
      return(
        <Image className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy"/>
        )}
    const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
    return (
      <Image className="rounded-xl" src={url} alt="cover" loading="lazy"/>
    )
}

const HotnewsLarge = (largenews) => {
    return(
        <div className='flex flex-col'>
            <ImagenewsFill imgnews={largenews.largenews}/>
            <div>
                <span className="border-l-4 border-red-600 mr-2"/>
                👁 {largenews.largenews.attributes.views} 
                <br/>
            </div>
            <div className="text-black text-sm">
                <Link href={`/thread/${largenews.largenews.attributes.slug}`}  className='font-bold hover:text-slate-400'>
                    {largenews.largenews.attributes.title}
                </Link>
                <div className='my-2'>
                    <NewsTagCate cate={largenews.largenews}/>
                </div>
                <Link href={`/thread/${largenews.largenews.attributes.slug}`}  className='my-5 hover:text-slate-400'>
                    {largenews.largenews.attributes.description}
                </Link>
            </div>
        </div>
    )
}

const SlideHotnews = (slidehot) => {
    return (
        <div className="w-auto mr-2 mb-2">
            <ImagenewsCustom imgnews={slidehot.slidehot}/>
            <div>
            <span className="border-l-4 border-red-600 mr-2"/>
            👁 {slidehot.slidehot.attributes.views} 
            <br/>
            </div>
            <div className="text-black text-sm">
                <Link href={`/thread/${slidehot.slidehot.attributes.slug}`}  className='font-bold hover:text-slate-400'>
                    {slidehot.slidehot.attributes.title}
                </Link>
                <div className='my-2'>
                    <NewsTagCate cate={slidehot.slidehot}/>
                </div>
            </div>
        </div>
    )
}

export {
    HotnewsLarge,
    SlideHotnews
}
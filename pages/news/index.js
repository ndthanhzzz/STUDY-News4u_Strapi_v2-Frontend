import Footer from '@/components/Layout/Footer/Footer'
import Header from '@/components/Layout/Header/Header'
import Allnews from '@/components/News/Allnews'
import React from 'react'
import Link from 'next/link'
import { fetcher } from '@/api/api'
import { SectionCate } from '@/pages'
import Head from 'next/head'


const News = ({allnews,cate}) => {
  console.log(allnews.meta.pagination.pageCount)
  return(
    <div className='bg-white font-arial'>
      <Head>
            <title> News4u - News </title>
      </Head>
      <Header/>
      <div className='sm:mx-40'>
        <div>
          <SectionCate cate={cate.data}/>
        </div>
        <div>
          <div className="text-black text-center text-xl py-2 mb-5 font-bold leading-10 sm:bg-white bg-blue-200 rounded-b-full"> 
              DANH SÁCH TIN TỨC
          </div>
          <div className="flex flex-row flex-shrink flex-wrap mx-3">
              {allnews.data.map((item)=>(
                <Allnews key={item.id} news={item}/>
              ))}
          </div>
        </div>
        <div className='flex justify-center'>
          <div className="pagination">
            <Link href='/news/'>&laquo;</Link>
            <Link href='/news/1'>1</Link>
            <Link href='/news/2'>2</Link>
            <Link href='/news/3'>3</Link>
            <Link href='/news/4'>4</Link>
            <Link href='/news/5'>5</Link>
            <Link href='/news/6'>6</Link>
            <Link href='/news/'>&raquo;</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default News


News.getInitialProps = async (ctx) => {
  const allnews = await fetcher(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?sort=createdAt%3Adesc&pagination[page]=1&pagination[pageSize]=6&populate=*`)
  const cate = await fetcher(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate=*`)
  return { 
    allnews,
    cate
  }
}
import React from 'react'
import Header from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer'
import axios from 'axios'
import NewsPagination from '@/components/News/NewsPagination'
import Link from 'next/link'
import Head from 'next/head'

import { SectionCate } from '@/pages'


export default function Pagination({news,gcate,number}) {
  return (
    <div className='bg-white font-arial'>
      <Head>
            <title> News4u - Page {number}</title>
      </Head>
      <Header/>
      <div className='sm:mx-40'>
        <div>
          <SectionCate key={gcate.id} cate={gcate}/>
        </div>
        <div className="text-black text-center text-xl py-2 mb-5 font-bold leading-10 sm:bg-white bg-blue-200 rounded-b-full"> 
            DANH SÁCH TIN TỨC
        </div>
        <div className="flex flex-row flex-shrink flex-wrap mx-3">
            {news.map((item)=>(
              <NewsPagination key={item.id} news={item}/>
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
      <Footer/>
    </div>
  )
}


export async function getServerSideProps(context) {
    const {page} = context.query
    const res = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?sort=createdAt%3Adesc&pagination[page]=${page}&pagination[pageSize]=6&populate=*`)
    const data = await res.data.data

    const rescate = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate=*`)
    const cate = await rescate.data.data
    
    const number = page;
    return{
      props: {
        news: data,
        gcate:cate,
        number: number,
      }
    }
}
import React from 'react'
import Header from '@/components/Layout/Header/Header'
import Footer from '@/components/Layout/Footer/Footer'
import axios from 'axios'
import NewsPagination from '@/components/NewsPagination/NewsPagination'
import Link from 'next/link'

export default function Pagination({news}) {
  console.log(news)
  return (
    <div className='bg-white'>
      <Header/>
      <div className='sm:mx-40'>
        <div className="text-black text-center text-xl py-2 font-bold leading-10"> 
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
    const res = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?pagination[page]=${page}&pagination[pageSize]=6&populate=*`)
    const data = await res.data.data
    return{
      props: {
        news: data,
      }
    }
}
import Footer from '@/components/Layout/Footer/Footer'
import Header from '@/components/Layout/Header/Header'
import Allnews from '@/components/News/Allnews'
import React from 'react'
import axios from 'axios'
import Link from 'next/link'

const News = ({allnews}) => {
  return(
    <div className='bg-white'>
      <Header/>
      <div className='sm:mx-40'>
        <div>
          <div className="text-black text-center text-xl py-2 font-bold leading-10"> 
              DANH SÁCH TIN TỨC
          </div>
          <div className="flex flex-row flex-shrink flex-wrap mx-3">
              {allnews.map((item)=>(
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
  const respost = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?pagination[page]=1&pagination[pageSize]=6&populate=*`)
  const allnews = await respost.data.data
  return { 
    allnews,
  }
}
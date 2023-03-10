import Latestnews from "@/components/Homepage/Latestnews"
import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"
import SlideCate from "@/components/ListCate/SlideCate"
import Listnews from "@/components/Homepage/Listnews"
import axios from "axios"
import Link from "next/link"
import { Button } from "antd"
import Head from "next/head"

import { HotnewsLarge,
         SlideHotnews
 } from "@/components/Homepage/Hotnews" 

 
 
function SectionCate(cate){
  return(
    <div className="mb-5">
      {/* Slide Categories */}
      <div className="flex flex-wrap justify-between">
        <Link href={`/categories`} className="text-black py-2 font-bold">       
              &#9734; Chủ đề
        </Link>
        <Link href={`/categories`} className="text-black py-2 pr-2 font-bold">       
              Xem chi tiết
        </Link>
      </div>
      <div className="flex flex-row overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded">
        {cate.cate.map((citem)=>(
            <SlideCate key={citem.id} getcate={citem}/>
        ))}
      </div>
    </div>
  )
}

function SectionHotNews(Hotnews){
  return (
      <div className="flex sm:flex-row flex-col-reverse justify-between h-auto">
         {/* List news */}
        <div className="sm:w-4/6 w-auto h-auto">
            <div className="text-black sm:text-left text-center py-2 mb-5 text-base  font-bold leading-10 sm:bg-white bg-blue-200 rounded-b-full">       
            🚩 TOP LƯỢT XEM
            </div>
            <div className="flex flex-col m-t-2 text-justify">
              <div className="flex sm:flex-row flex-col h-auto">
                <div className="w-auto sm:w-2/3 sm:mr-5 mr-auto mb-5">
                  {Hotnews.Hotnews.slice(0,1).map((item)=>(
                      <HotnewsLarge key={item.id} largenews={item}/>
                  ))} 
                </div>
                <div className="w-auto sm:w-1/3 mr-auto mb-5">
                  {Hotnews.Hotnews.slice(1,2).map((item)=>(
                      <HotnewsLarge key={item.id} largenews={item}/>
                  ))} 
                </div>
              </div>
              <div className="flex flex-row overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded">
                  {Hotnews.Hotnews.slice(2,10).map((item)=>(
                      <SlideHotnews key={item.id} slidehot={item}/>
                  ))} 
              </div>
            </div>
        </div>
         {/* Latest news */}
        <div className="sm:w-1/4 w-auto sm:mb-5 sm:bg-white bg-gray-200">
          <div className="text-black text-center text-base py-2 mb-5 font-bold text-shadow-black leading-10 sm:bg-white bg-blue-200 rounded-b-full">       
          ⏲ TIN TỨC MỚI CẬP NHẬT
          </div>
          <div className="inset-border p-4">
              {Hotnews.Hotnews.slice(0,7).map((item)=>(
                <Latestnews key={item.id} news={item}/>
              ))}
          </div>
        </div>
      </div>
  )
}

function SectionNews(latestPost){
  return(
    <div>
      <div className="flex sm:flex-wrap flex-wrap-reverse justify-between h-auto">
         {/* List news */}
        <div className="sm:w-4/6 w-auto h-auto">
          <div className="text-black text-center text-base py-2 mb-5 font-bold text-shadow-black leading-10 sm:bg-white bg-blue-200 rounded-b-full">       
          📄 TIN TỨC CHÍNH
          </div>
          <div className="sm:border-dashed sm:border-r-2 border-indigo-600">
            {latestPost.latestPost.slice(5,15).map((item)=>(
                <Listnews key={item.id} news={item}/>
            ))}
          </div>
          <div className="text-center my-5">
            <Link className="text-xl font-bold hover:text-blue-400" href={`/news`}>
            📚 Xem Thêm ...
            </Link>
          </div>
        </div>
         {/* Latest news */}
        <div className="sm:w-1/4 w-auto sm:mb-5 sm:bg-white bg-gray-200">
          <div className="text-black text-center text-base  py-2 mb-5  font-bold text-shadow-black leading-10 sm:bg-white bg-blue-200 rounded-b-full">       
            KHÁC
          </div>
          <div>
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </div>
        </div>
      </div>
    </div>
  )
}


const Page = ({latestPost,cate,getHot}) => {
  return (
    <div className="bg-white font-arial">
      <Head>
        <title>News4u - Home Page</title>
      </Head>
      <Header/>
      <div className="sm:mx-40">
        {/* Language */}
        <nav className="my-5">
          <span className="mr-2"><Button href="/location-vn">Vietnam</Button></span>
          <span className="ml-2"><Button href="/location-global">Global</Button></span>
        </nav>
        <div className="flex flex-col ">
        {/* Section 1 */}
          <SectionCate key={cate.id} cate={cate}/>
        {/* Section 2 */}
          <SectionHotNews key={getHot.id} Hotnews={getHot}/>
        {/* Section 3 */}
          <SectionNews key={latestPost.id} latestPost={latestPost}/>
        {/* ---------- */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Page


Page.getInitialProps = async (ctx) => {
  const rescate = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate=*`)
  const cate = await rescate.data.data
  // Sort by views
  const resHotnews = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?sort=views%3Adesc&populate=*`)
  const getHot = await resHotnews.data.data
  // Sort by time
  const respost = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?sort=createdAt%3Adesc&populate=*`)
  const latestPost = await respost.data.data
  return { 
    latestPost,
    cate,
    getHot,
  }
}

export {
  SectionCate,
}



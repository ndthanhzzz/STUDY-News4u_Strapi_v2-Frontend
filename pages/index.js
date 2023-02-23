import Latestnews from "@/components/News/Latestnews"
import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"
import SlideCate from "@/components/ListCate/SlideCate"
import axios from "axios"
import Link from "next/link"
import { Button } from "antd"


import { Hotnews1st,
         Hotnews2st,
         Hotnews3st,
         Hotnews4st,
         Hotnews5st
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
      <div className="flex flex-row overflow-x-auto">
        {cate.cate.map((citem)=>(
            <SlideCate key={citem.id} getcate={citem}/>
        ))}
      </div>
    </div>
  )
}

function SectionLates(latestPost){
  return(
    <div>
      {/* Latenews */}
      <div className="text-black text-left text-base py-2 font-bold text-shadow-black leading-10">       
      ⏲ LATEST NEWS
      </div>
      <div className="flex flex-row flex-wrap justify-around">
          {latestPost.latestPost.slice(0,6).map((item)=>(
            <Latestnews key={item.id} news={item}/>
          ))}
      </div>
      <div className="text-center my-5">
        <Link className="text-xl hover:text-blue-400" href={`/news`}>
        📚 XEM THÊM CÁC TIN TỨC KHÁC
        </Link>
      </div>
    </div>
  )
}

function SectionHotNews(Hotnews){
  return (
    <div>
      <div className="text-black text-left text-base py-2 font-bold text-shadow-black leading-10">       
      📈 HOT NEWS (🚩 Chia bố cục trước: hàng dưới cùng có thể show hot news theo danh sách dạng tượt giống chủ đề)
      </div>
      <div className="flex flex-col m-2">
        <div className="flex sm:flex-row flex-col sm:m-0 h-auto">
          <div className="w-auto sm:w-2/3">
            <Hotnews1st hot1st={Hotnews}/>
          </div>
          <div className="w-auto sm:w-1/3">
            <Hotnews2st hot1st={Hotnews}/>
          </div>
        </div>
        <div className="flex flex-row h-auto overflow-x-auto">
          <div className="w-auto sm:w-1/3">
            <Hotnews3st hot1st={Hotnews}/>
          </div>
          <div className="w-auto sm:w-1/3 mx-2">
            <Hotnews4st hot1st={Hotnews}/>
          </div>
          <div className="w-auto sm:w-1/3">
            <Hotnews5st hot1st={Hotnews}/>
          </div>
        </div>
      </div>
    </div>
  )
}


const Page = ({latestPost,cate}) => {
  return (
  <div className="bg-white">
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
      <SectionHotNews/>
    {/* Section 3 */}
      <SectionLates key={latestPost.id} latestPost={latestPost}/>
 
    {/* ---------- */}
    </div>
  </div>
  <Footer/>
  </div>
  )
}
export default Page


Page.getInitialProps = async (ctx) => {
  const respost = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?populate=*`)
  const latestPost = await respost.data.data
  const rescate = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate=*`)
  const cate = await rescate.data.data
  return { 
    latestPost,
    cate,
  }
}

export {
  SectionCate,
}



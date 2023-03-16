import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"
import ListCate from "@/components/ListCate/ListCate"
import Head from "next/head"
import { fetcher } from "@/api/api"

const Page = ({cate}) => {
  return (
  <div className="bg-white font-arial">
    <Head>
            <title> News4u - Chủ đề </title>
    </Head>
    <Header/>
    <div className="mx-auto sm:mx-40">
      <div className="text-black text-center text-xl sm:bg-white bg-blue-200 py-2 font-bold leading-10"> 
        TIN TỨC THEO CHỦ ĐỀ
      </div>
      {cate.data.map((citem)=>(
          <ListCate key={citem.id} getcate={citem}/>
      ))}
    </div>
    <Footer/>
  </div>
  )
}

Page.getInitialProps = async (ctx) => {
  const cate = await fetcher(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate[posts][populate]=*`)
  return { 
    cate,
  }
}
export default Page
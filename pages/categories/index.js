import Footer from "@/components/Layout/Footer/Footer"
import Header from "@/components/Layout/Header/Header"
import ListCate from "@/components/ListCate/ListCate"
import axios from "axios"

const Page = ({cate}) => {
  return (
  <div className="bg-white">
  <Header/>
  <div className="mx-auto sm:mx-40">
    <div className="text-black text-center text-xl sm:bg-white bg-blue-200 py-2 font-bold leading-10"> 
      TIN TỨC THEO CHỦ ĐỀ
    </div>
    {cate.map((citem)=>(
        <ListCate key={citem.id} getcate={citem}/>
    ))}
  </div>
  <Footer/>
  </div>
  )
}

Page.getInitialProps = async (ctx) => {
  const rescate = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate[posts][populate]=*`)
  const cate = await rescate.data.data
  return { 
    cate,
  }
}
export default Page
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import CategoriesNews from "@/components/Categories/CategoriesNews";
import { fetcher } from "@/api/api";
import Head from "next/head";

const Detail = ({cate,news}) => {
    // Check post categories
    if(cate.data.attributes.posts.data==0){
      return(
          <div className="bg-white font-arial">
              <Head>
                <title> News4u - {cate.data.attributes.title} </title>
              </Head>
              <Header/>
              <div className="sm:mx-40">
                <div className="text-black text-center text-xl py-2 font-bold leading-10 sm:bg-white bg-blue-200"> 
                  {cate.data.attributes.title}
                </div>
                <div className="bg-white py-6">
                    <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex-shrink max-w-full w-full">
                        <div className="p-10 text-center">
                            <div className="mb-4 text-center">
                            <h1 className="text-6xl text-gray-800 font-bold mb-2">404</h1>
                            <span className="inline-block h-0.5 w-20 bg-red-600" />
                            </div>
                            <h3 className="text-2xl mb-2">Oops! Tin tức đang được cập nhật.</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              <Footer/>
          </div>
    )}

    return (
      <div className="bg-white font-arial">
      <Head>
        <title> News4u - {cate.data.attributes.title} </title>
      </Head>
      <Header/>
      <div className="sm:mx-40">
        <div className="text-black text-center text-xl py-2 font-bold leading-10 sm:bg-white bg-blue-200"> 
          {cate.data.attributes.title}
        </div>
        {news.data.map((item)=>(
            <CategoriesNews key={item.id} cnews={item}/>
        ))}
      </div>
      <Footer/>
      </div>
    );
  }

export async function getServerSideProps(context) {
  const {slug} = context.query
  const datatitle = await fetcher(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories/${slug}`)
  // Get news cach 1 (Khong co anh)
        // const datanews = await res.data.data.attributes.posts.data
  // Get news cach 2
        const datanews = await fetcher(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?populate=*&sort=createdAt%3Adesc&filters[categories][slug][$eq]=${slug}`)
  return{
    props: {
      cate: datatitle,
      news: datanews
    }
  }
}

export default Detail;
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import CategoriesNews from "@/components/Categories/CategoriesNews";
import axios from "axios";

const Detail = ({cate,news}) => {
    // Check post categories
    if(cate.attributes.posts.data==0){
      return(
          <div className="bg-white font-arial">
              <Header/>
              <div className="sm:mx-40">
                <div className="text-black text-center text-xl py-2 font-bold leading-10 sm:bg-white bg-blue-200"> 
                  {cate.attributes.title}
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
      <Header/>
      <div className="sm:mx-40">
        <div className="text-black text-center text-xl py-2 font-bold leading-10 sm:bg-white bg-blue-200"> 
          {cate.attributes.title}
        </div>
        {news.map((item)=>(
            <CategoriesNews key={item.id} cnews={item}/>
        ))}
      </div>
      <Footer/>
      </div>
    );
  }

export async function getServerSideProps(context) {
  const {slug} = context.query
  const res = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories/${slug}`)
  const datatitle = await res.data.data

  // Get news cach 1 (Khong co anh)
        // const datanews = await res.data.data.attributes.posts.data

  // Get news cach 2
        const resPost = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts?populate=*&sort=createdAt%3Adesc&filters[categories][slug][$eq]=${slug}`)
        const datanews = await resPost.data.data

  return{
    props: {
      cate: datatitle,
      news: datanews
    }
  }
}

export default Detail;
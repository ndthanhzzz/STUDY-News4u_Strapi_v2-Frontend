import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import CategoriesNews from "@/components/Categories/CategoriesNews";
import axios from "axios";

const Detail = ({cate,news}) => {
    return (
      <div className="bg-white">
      <Header/>
      <div className="sm:mx-40">
        <div className="text-black text-center text-xl py-2 font-bold leading-10"> 
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
  const datanews = await res.data.data.attributes.posts.data
  return{
    props: {
      cate: datatitle,
      news: datanews
    }
  }
}

export default Detail;
import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import SingleNews from "@/components/News/SingleNews";
import axios from "axios";

const Detail = ({news,gcate}) => {
    return (
      <div className="bg-white font-arial">
        <Header/>
        <SingleNews news={news} gcate={gcate}/>
        <Footer/>
      </div>
    );
  }

export async function getServerSideProps(context) {
  const {slug} = context.query
  const res = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts/${slug}?populate=*`)
  const data = await res.data.data
  const rescate = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate=*`)
  const cate = await rescate.data.data
  return{
    props: {
      news: data,
      gcate: cate
    }
  }
}
export default Detail;


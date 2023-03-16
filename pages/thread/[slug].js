import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import SingleNews from "@/components/News/SingleNews";
import axios from "axios";
import Head from "next/head";
import { fetcher } from "@/api/api";

const Detail = ({news,gcate}) => {
    return (
      <div className="bg-white font-arial">
        <Head>
          <title>News4u - {news.data.attributes.title}</title>
        </Head>
        <Header/>
        <SingleNews news={news.data} gcate={gcate.data}/>
        <Footer/>
      </div>
    );
  }

export async function getServerSideProps(context) {
  const {slug} = context.query
  const data = await fetcher(process.env.NEXT_PUBLIC_API_HOST_V2+`/posts/${slug}?populate=*`)
  const cate = await fetcher(process.env.NEXT_PUBLIC_API_HOST_V2+`/categories?populate=*`)
  return{
    props: {
      news: data,
      gcate: cate
    }
  }
}
export default Detail;


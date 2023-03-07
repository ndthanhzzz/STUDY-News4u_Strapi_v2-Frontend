import Link from "next/link";
import { NewsTagCate } from "../Categories/NewsTagCate";
import { timeAgo } from "../Module/timeAgo";
import { ImagenewsFill } from "../Module/CustomImage";

export default function Latestnews({ news }) {
  const configTime = new Date(news.attributes.createdAt)
  // const getTime = configTime.toLocaleTimeString(); //Time String
  // const getDate = configTime.toLocaleDateString(); //Date String
  const ago = timeAgo(new Date(configTime));

  return (
    <div className="flex flex-col sm:w-auto p-1">
        <div className="sm:block hidden">
             <ImagenewsFill imgnews={news}/>
        </div>
        <div className="sm:h-1/6 font-bold leading-tight text-justify hover:text-slate-400">
            <Link href={`/thread/${news.attributes.slug}`}>{news.attributes.title}</Link>
        </div>
        <div className="sm:h-1/6 text-gray-500">
            <span className="h-1/2 border-l-2 border-red-600 mr-2"/> 
            <Link href={`/thread/${news.attributes.slug}`}> ⏱ {ago} </Link>
            <NewsTagCate cate={news}/>
        </div>
    </div>
  );
}

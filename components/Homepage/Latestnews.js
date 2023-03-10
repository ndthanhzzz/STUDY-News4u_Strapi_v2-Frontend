import Link from "next/link";
import { NewsTagCate } from "../Categories/NewsTagCate";
import { timeAgo } from "../Module/timeAgo";

export default function Latestnews({ news }) {
  const configTime = new Date(news.attributes.createdAt)
  // const getTime = configTime.toLocaleTimeString(); //Time String
  // const getDate = configTime.toLocaleDateString(); //Date String
  const ago = timeAgo(new Date(configTime));

  return (
    <div className="sm:w-auto mb-5">
        <div className="w-auto flex flex-col justify-between sm:ml-2">
          <div className=" font-bold leading-tight text-justify hover:text-slate-400 description-title">
              <Link href={`/thread/${news.attributes.slug}`}>{news.attributes.title}</Link>
          </div>
          <div className="text-gray-500">
              <span className="h-1/2 border-l-2 border-red-600 mr-2"/> 
              <Link href={`/thread/${news.attributes.slug}`}> ⏱ {ago} </Link>
              <NewsTagCate cate={news}/>
          </div>
        </div>
    </div>
  );
}

import Link from "next/link";
import { NewsTagCate } from "../Categories/NewsTagCate";
import { ImagenewsFill } from "../Module/CustomImage";

export default function NewsPagination({ news }) {
  const configTime = new Date(news.attributes.createdAt)
  const getTime = configTime.toLocaleTimeString(); //Time String
  const getDate = configTime.toLocaleDateString(); //Date String

  return (
    <div className="flex sm:flex-row flex-col justify-center sm:w-auto p-1">
        <div className="sm:w-1/4 w-auto mx-2">
             <ImagenewsFill imgnews={news}/>
        </div>
        <div className="sm:w-1/2 w-auto mx-2 flex sm:flex-col flex-col justify-around">
          <div className="sm:h-2/3 h-auto">
              <div className="font-bold leading-tight text-justify hover:text-slate-400 ">
                  <Link href={`/thread/${news.attributes.slug}`}>{news.attributes.title}</Link>
              </div>
              <div className="text-gray-600 my-2 text-justify description-page">
                  <Link href={`/thread/${news.attributes.slug}`}>
                    {news.attributes.description} 
                  </Link>
              </div>
          </div>
          <div className="sm:h-1/3 h-auto text-gray-500 flex flex-col justify-around">
              <NewsTagCate cate={news}/>
              <Link href={`/thread/${news.attributes.slug}`}> {getTime} - {getDate} </Link> 
          </div>
        </div>
    </div>
  );
}

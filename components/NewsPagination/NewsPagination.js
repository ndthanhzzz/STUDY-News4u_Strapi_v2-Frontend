import Link from "next/link";
import { Image } from "antd";

function TagCate({tagCate}){
  return(
    <span className="">
      <Link className="hover:text-blue-500" href={`/categories/${tagCate.attributes.slug}`}> {tagCate.attributes.title} </Link>
    </span>
  )
}

function ImageNews({imgnews}){
  if(imgnews.attributes.cover.data==null){
    return(
      <Image height={300} className='rounded-xl' src="/news-cover.jpg" alt="cover" loading="lazy" />
      )}
  const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
  return (
    <Image height={300} className="rounded-xl" src={url} alt="cover" loading="lazy"/>

  )
}

export default function NewsPagination({ news }) {
  const configTime = new Date(news.attributes.createdAt)
  const getTime = configTime.toLocaleTimeString(); //Time String
  const getDate = configTime.toLocaleDateString(); //Date String

  return (
    <div className="flex flex-col sm:w-1/3 p-1">
        <div className="">
             <ImageNews key={news.id} imgnews={news}/>
        </div>
        <div className="sm:h-1/6 font-bold leading-tight text-justify hover:text-slate-400">
            <Link href={`/thread/${news.attributes.slug}`}>{news.attributes.title}</Link>
        </div>
        <div className="sm:h-3/6 text-gray-600 my-2 text-justify">
            <Link href={`/thread/${news.attributes.slug}`}>
               {news.attributes.description} 
            </Link>
        </div>
        <div className="sm:h-1/6 text-gray-500">
            <span className="h-1/2 border-l-2 border-red-600 mr-2"/> 
            <Link href={`/thread/${news.attributes.slug}`}> Thời gian: {getTime} - {getDate} </Link>
            <br/>
            <span className="h-1/2 border-l-2 border-red-600 mr-2"/> 
              Tag:
              {news.attributes.categories.data.map((citem)=>(
                <TagCate key={citem.id} tagCate={citem}/>
              ))}
        </div>
    </div>
  );
}

export {
  TagCate,
}
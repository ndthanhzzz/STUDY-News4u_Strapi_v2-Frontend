import Link from "next/link";
import { ShowTagCategories } from "../Module/ShowTagCategories";
import { ImagenewsFill } from "../Module/CustomImage";

// Kiem tra chu de cua bai viet
function CheckCategories({cate}){
  if(cate.attributes.categories.data.length===0){
    return(
      <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
            {/* <Link className='hover:text-blue-500' href="/categories">  Chủ Đề  </Link> */}
            ➣  
            <span className="italic"> Chưa có chủ đề </span>
      </div>
    )
  }
  return(
    <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
          {/* <Link className='hover:text-blue-500' href="/categories">  Chủ Đề  </Link> */}
          ➣  
          {cate.attributes.categories.data.map((citem)=>(
              <ShowTagCategories key={citem.id} tagCate={citem}/>
          ))}
    </div>
  )
}



export default function Listnews({ news }) {
  const configTime = new Date(news.attributes.createdAt)
  const getTime = configTime.toLocaleTimeString(); //Time String
  const getDate = configTime.toLocaleDateString(); //Date String

  return (
    <>
    <div className="flex flex-row w-auto p-1 sm:mr-10 mb-5">
        <div className="sm:w-2/5 w-1/3">
             <ImagenewsFill imgnews={news}/>
        </div>
        <div className="sm:w-3/5 w-2/3 mx-2">
            {/* In ra chu de sau khi da kiem tra */}
            <CheckCategories cate={news}/>

            <div className="h-auto text-justify">
                <div className="font-bold leading-tight hover:text-slate-400">
                    <Link className="description-title" href={`/thread/${news.attributes.slug}`}>
                      {news.attributes.title}
                    </Link>
                </div>
                <div className="text-gray-600 mb-2 sm:block hidden">
                    <Link className="description-content" href={`/thread/${news.attributes.slug}`}>
                      {news.attributes.description} 
                    </Link>
                </div>
            </div>

            <div className="">
                  🕖 {getDate} - {getTime}
            </div>
        </div>
    </div>
    
    </>
  );
}

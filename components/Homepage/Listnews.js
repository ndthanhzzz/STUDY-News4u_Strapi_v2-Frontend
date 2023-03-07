import Link from "next/link";
import { ShowTagCategories } from "../Module/ShowTagCategories";
import { ImagenewsFill } from "../Module/CustomImage";

// Kiem tra chu de cua bai viet
function CheckCategories({cate}){
  if(cate.attributes.categories.data.length===0){
    return(
      <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
            <Link className='hover:text-blue-500' href="/categories">  Chủ Đề  </Link>
            ➣  
            <span className="italic"> Chưa có chủ đề </span>
      </div>
    )
  }
  return(
    <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
          <Link className='hover:text-blue-500' href="/categories">  Chủ Đề  </Link>
          ➣  
          {cate.attributes.categories.data.map((citem)=>(
              <ShowTagCategories key={citem.id} tagCate={citem}/>
          ))}
    </div>
  )
}



export default function Listnews({ news }) {
  // const configTime = new Date(news.attributes.createdAt)
  // const getTime = configTime.toLocaleTimeString(); //Time String
  // const getDate = configTime.toLocaleDateString(); //Date String

  return (
    <>
    <div className="flex sm:flex-row flex-col w-auto p-1 sm:mr-10 mb-5">
        <div className="sm:w-2/5 w-auto">
             <ImagenewsFill imgnews={news}/>
        </div>
        <div className="sm:w-4/5 w-auto flex sm:flex-col flex-col-reverse px-2">
            {/* In ra chu de sau khi da kiem tra */}
            <CheckCategories cate={news}/>

            <div className="sm:h-3/4 h-auto">
                <div className="font-bold leading-tight text-justify hover:text-slate-400 ">
                    <Link href={`/thread/${news.attributes.slug}`}>{news.attributes.title}</Link>
                </div>
                <div className=" text-gray-600 my-2 text-justify sm:description-home description-home-mobile">
                    <Link href={`/thread/${news.attributes.slug}`}>
                    {news.attributes.description} 
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}

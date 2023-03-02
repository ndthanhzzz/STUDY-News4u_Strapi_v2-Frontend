import Link from "next/link"
import { ShowTagCategories } from "../ShowTagCategories/ShowTagCategories"

function NewsTagCate({cate}){
    if(cate.attributes.categories.data.length===0){
      return(
        <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
              ➣  
              <span className="italic"> Chưa có chủ đề </span>
        </div>
      )
    }
    return(
      <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
            ➣
            {cate.attributes.categories.data.map((citem)=>(
                <ShowTagCategories key={citem.id} tagCate={citem}/>
            ))}
      </div>
    )
  }

  export {
    NewsTagCate,
}
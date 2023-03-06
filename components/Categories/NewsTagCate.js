import { ShowTagCategories } from "../Module/ShowTagCategories"

function NewsTagCate({cate}){
    if(cate.attributes.categories.data.length===0){
      return(
        <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
              <span className="h-1/2 border-l-2 border-red-600 mr-2"/>
              <span className="italic"> Chưa có chủ đề </span>
        </div>
      )
    }
    return(
      <div className="sm:h-1/4 h-auto text-gray-500 text-sm">
            <span className="h-1/2 border-l-2 border-red-600 mr-2"/>
            {cate.attributes.categories.data.map((citem)=>(
                <ShowTagCategories key={citem.id} tagCate={citem}/>
            ))}
      </div>
    )
}

function HotnewsTagCate({cate}){
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
    HotnewsTagCate,
}
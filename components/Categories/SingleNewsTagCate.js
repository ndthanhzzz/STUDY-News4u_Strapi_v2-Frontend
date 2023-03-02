import Link from "next/link"
import { TagCate } from "../News/Allnews"

// Kiem tra chu de cua bai viet
function SingleNewsTagCate({cate}){
    if(cate.attributes.categories.data.length===0){
      return(
        <h3 className='font-bold text-sm'>
        <Link className='hover:text-blue-500' href="/categories">  Chủ Đề  </Link>
        ➣  
        <span className="italic"> Chưa có chủ đề </span>
      </h3>
      )
    }
    return(
      <h3 className='font-bold text-sm'>
            <Link className='hover:text-blue-500' href="/categories">  Chủ Đề  </Link>
            ➣ 
            {cate.attributes.categories.data.map((citem)=>(
              <TagCate key={citem.id} tagCate={citem}/>
            ))}
      </h3>
    )
  }

  export{
    SingleNewsTagCate,
  }


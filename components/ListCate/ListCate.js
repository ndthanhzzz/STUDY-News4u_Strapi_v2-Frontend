import React from 'react'
import Link from 'next/link'
import CategoriesNews from '../Categories/CategoriesNews'

function ListCate({getcate}){
    // Check post categories
    if(getcate.attributes.posts.data==0){
      return(
        <div className="bg-black bg-opacity-70 sm:p-5">
            <div className="py-3">
                  <Link href={`/categories/${getcate.attributes.slug}`} className="text-orange-300 text-2xl font-bold">
                      <span className="h-5 border-l-2 border-red-600 mr-2"/>
                      {getcate.attributes.title}
                  </Link>
            </div>
            <div className="bg-white h-auto text-center font-bold p-10">
            ❗ Chủ đề chưa có tin tức
            </div>
        </div>
    )}

    return(
      <div className="bg-black bg-opacity-70 sm:p-5">
          <div className="py-3">
                <Link href={`/categories/${getcate.attributes.slug}`} className="text-orange-300 text-2xl font-bold">
                    <span className="h-5 border-l-2 border-red-600 mr-2"/>
                    {getcate.attributes.title}
                </Link>
          </div>
          <div className="bg-white h-auto">
            {getcate.attributes.posts.data.slice(0,5).map((item)=>(
              <CategoriesNews key={item.id} cnews={item}/>
            ))}
            <div className='text-right mr-5'>
              <Link className='font-bold hover:text-slate-400' href={`/categories/${getcate.attributes.slug}`}>
              ⟹ XEM THÊM...
              </Link>
            </div>
          </div>
      </div>
    )
  }

  export default ListCate


import React from 'react'
import Link from 'next/link'
import { ImageSlideCateHome } from '../Module/CustomImage'

function SlideCate({getcate}){
    return(
      <div className="w-auto mr-2 mb-2">
        <Link href={`/categories/${getcate.attributes.slug}`} className="text-black text-sm hover:text-slate-400">
            <div>
              <ImageSlideCateHome imgcate={getcate}/>
            </div>
            <span className="border-l-4 border-red-600 mr-2"/>
            {getcate.attributes.title}
        </Link>
      </div>
    )
  }

  export default SlideCate
import React from 'react'
import Link from 'next/link'
import { Image } from 'antd'

const Hotnews1st = (hot1st) => {
    return(
        <div className='flex flex-col'>
            <div className=''>
                <Image className='rounded-xl' src="/news-cover.jpg" alt='cover' loading='lazy'/>
            </div>
            <div>
                Đây là tin hot nhất
            </div>

        </div>
    )
}

const Hotnews2st = (hot2st) => {
    return(
        <div className='flex flex-col '>
            <div >
                <Image className='rounded-xl' src="/news-cover.jpg" alt='cover' loading='lazy'/>
            </div>
            <div>
                Đây là tin hot thứ 2
            </div>
    
        </div>
    )
}

const Hotnews3st = (hot3st) => {
    return (
        <div className=''>
            <div >
                <Image className='rounded-xl' src="/news-cover.jpg" alt='cover' loading='lazy'/>
            </div>
            <div>
                Danh sách tin hot theo view (tin hot thứ 3 đến 10)
            </div>
        </div>
    )
}

const Hotnews4st = (hot4st) => {
    return(
        <div className=''>
            <div >
                <Image className='rounded-xl' src="/news-cover.jpg" alt='cover' loading='lazy'/>
            </div>
            <div>
                Danh sách tin hot theo view (tin hot thứ 3 đến 10)
            </div>
        </div>
    )
}
const Hotnews5st = (hot5st) => {
    return(
        <div className=''>
            <div >
                <Image className='rounded-xl' src="/news-cover.jpg" alt='cover' loading='lazy'/>
            </div>
            <div>
                Danh sách tin hot theo view (tin hot thứ 3 đến 10)
            </div>
    
        </div>
    )
}


// const SlideHotnews = (slidehot) => {
//     return (
//         <div className=''>
//             <div >
//                 <Image className='rounded-xl' src="/news-cover.jpg" alt='cover' loading='lazy'/>
//             </div>
//         </div>
//     )
// }

export {
    Hotnews1st,
    Hotnews2st,
    Hotnews3st,
    Hotnews4st,
    Hotnews5st,
}
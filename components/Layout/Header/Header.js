import React, { Component } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { InstantSearch, SearchBox, Hits, Configure } from "react-instantsearch-dom";


export default class Header extends Component {
  render() {
    return (
        <>
        <header className='flex flex-row justify-between border-solid border-2 border-b-blue-700 bg-white font-arial'> 
            {/* Title */}
            <Link className=' flex flex-row my-1 p-2 w-auto text-black hover:text-slate-400 font-bold text-xl' href='/'>
                <Image src="/favicon.ico" height={20} width={50} alt='cover'/>
                <div className='lg:p-2 mx-2'> NEWS 4U </div>
            </Link>
       
            {/* Login */}
            <div className='lg:block hidden my-1 py-4 mx-12'>
                <div className='flex flex-row justify-center text-black w-auto'>
                        <Link href={'/search'} className="mx-3">
                                <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                        </Link>
                        <Link href='/sign-in' className='mx-3 hover:text-slate-400'>  Login </Link>
                        <Link href='/sign-up' className='mx-3 hover:text-slate-400'>  Sign Up </Link>
                </div>
            </div>
            <div className=" mb-5 mt-3 mr-12 relative dropdown inline-block lg:hidden w-auto">
                <div className='flex justify-center'>
                  <svg className="inline-block h-6 w-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg> 
                  Menu 
                </div>
                <ul className="dropdown-menu w-20 absolute hidden text-gray-700 pt-1">
                    <li className=""><Link className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block font-small" href={'/sign-in'}>Login</Link></li>
                    <li className=""><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block font-small" href={'/sign-up'}>Sign Up</Link></li>
                    <li className="">
                      <Link className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 flex justify-center" href={'/search'}>
                        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                      </Link>
                    </li>
                </ul>
            </div>
            
        </header>
        </>
    )
  }
}

const searchClient = instantMeiliSearch(
    "https://search.v2.wuys.me/",
    "masterKey"
  );
function Search(){
        return (
            <InstantSearch
             indexName= "post"
             searchClient={searchClient}>
              <div>
                <SearchBox
                  translations={{
                    placeholder: 'Search…',
                  }}
                />
                <Hits className="overflow-hidden h-20" hitComponent={Hit}/>
                <Configure hitsPerPage={5}/>
              </div>
            </InstantSearch>
            
 
        );
}

function Hit(props){
    return(
        <div >
            <div className='font-bold'>
                {props.hit.title}
            </div>
            <Link href={`thread/${props.hit.slug}`}>
                <div className="btn">Read More</div>
            </Link>
        </div>
    );
  }






// import React, { Component } from 'react'
// import Image from 'next/image';
// import Link from 'next/link';

// export default class Header extends Component {
   
//   render() {
//     return (
//         <>
//         <header className='flex flex-row justify-between border-solid border-2 border-b-blue-700 bg-white font-arial'> 
//             {/* Title */}
//             <Link className=' flex flex-row my-2 p-2 w-auto text-black hover:text-slate-400 font-bold text-xl' href='/'>
//                 <Image src="/favicon.ico" height={20} width={50} alt='cover'/>
//                 <div className='p-3'> NEWS 4U </div>
//             </Link>
//             {/* Search Box */}
//             <div className='w-auto sm:w-1/3 flex justify-center p-3'>
//                 <div className="my-2 relative lg:block hidden text-gray-600">
//                     <input className="border-2 border-gray-300 bg-white h-10 pl-2 pr-12 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Tìm kiếm bài viết,..." />
//                     <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
//                         <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" xmlSpace="preserve" width="512px" height="512px">
//                             <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//             {/* Login */}
//             <div className='flex flex-row justify-center text-black w-auto'>
//                 <Link href='/sign-in' className='pt-8 px-2 hover:text-slate-400'>  Login </Link>
//                 <Link href='/sign-up' className='pt-8 px-2 hover:text-slate-400'>  Sign Up </Link>
//             </div>
//         </header>
//         </>
//     )
//   }
// }


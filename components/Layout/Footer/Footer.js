import React, { Component } from 'react'
import Link from 'next/link';
import axios from 'axios';

export class ShowCategoryFooter extends Component {
    state = {
        listcate:[]
        };
    async componentDidMount() {
        let resCate = await axios.get(process.env.NEXT_PUBLIC_API_HOST_V2 + `/categories`);
        this.setState({
            listcate: resCate && resCate.data && resCate.data.data ? resCate.data.data.slice(0,5): []
        })
    }
    render() {
        let {listcate} = this.state;
        return (
            <>
            {/* slider news category*/}
            {listcate && listcate.length > 0 &&  
            listcate.map((icate) => {
            return (
              <div key={icate}>
                  {/* Category */}
                  <div className="hover:text-slate-400 hover:font-bold py-1">    
                    <Link href={`/categories/${icate.attributes.slug}`}>
                        {icate.attributes.title}
                    </Link>
                  </div>
              </div>
            )})
            }
            <div className='hover:text-slate-400 py-3'>
                <Link  href={`/categories/`}>
                    ...
                </Link>
            </div>
            </>
        );
    }
}
         
export default function Footer() {
  return (
   <>
     <footer className="text-black border-t-2 border-blue-700 font-arial">
        <div className="mx-auto flex flex-wrap ">
            {/* Title */}
            <div className="w-1/4 sm:w-auto mx-auto p-10 flex flex-col">
                <div className="text-black hover:text-slate-400 text-2xl flex font-bold ">
                    <Link href="/">📰 NEWS 4U</Link>
                </div>
                <div className="text-sm"> Hot News Everyday </div>
            </div>

            <div className="w-2/4 lg:block hidden p-10">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EhgWzvA3iWQ" title="LIVE: NBC News NOW - Feb. 14" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
            {/* Link category */}
            <div className="w-1/4 sm:w-auto flex-grow flex justify-center text-left p-5">
                <div className='text-black mx-auto'>
                    <Link className='text-blue-500 font-bold' href={`/categories/`}>
                        Categories
                    </Link>
                    <ShowCategoryFooter/>
                </div>
                <div className='text-black ml-auto'>
                    <div className='text-blue-500 font-bold'>
                        Theo dõi chúng tôi
                    </div>
                    <li className="hover:text-slate-400 hover:font-bold py-1">    
                        <Link className="hover:text-slate-400 hover:font-bold py-1" href={`https://facebook.com`}>
                            Facebook
                        </Link>
                    </li>
                    <li className="hover:text-slate-400 hover:font-bold py-1">    
                        <Link className="hover:text-slate-400 hover:font-bold py-1" href={`https://www.instagram.com/`}>
                            Instagram
                        </Link>
                    </li>
                    <li className="hover:text-slate-400 hover:font-bold py-1">    
                        <Link className="hover:text-slate-400 hover:font-bold py-1" href={`https://github.com/ndthanhzzz`}>
                            Github
                        </Link>
                    </li>
                    
                </div>
            </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 —
                    <Link href='/contact'> Contact </Link>
                    <span> — </span>
                    <Link href='/about'> About Us </Link>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                    <Link href='https://facebook.com'>
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </Link>
                    <Link href='https://twitter.com/?lang=vi' className='ml-3'>
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </Link>
                    <Link href='https://www.instagram.com/' className='ml-3'>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                    </Link>
                </span>
            </div>
        </div>
    </footer>
   </>
  )
}

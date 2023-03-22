import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

export default function index() {
  return (
    <>
    <Head>
        <title>News4u - Sign Up</title>
    </Head>
    <section className="bg-white dark:bg-gray-900 font-arial">
        <div className="flex justify-center min-h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")'}}>
            <div className="w-full  max-w-md z-10 mx-auto mt-64 text-white">
                    <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">   New4u </div>
                    <Link href="/"  className="max-lg:block hidden sm:text-sm xl:text-md text-gray-200 font-normal hover:font-bold"> 
                            Trang chủ
                    </Link>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                    <Link href="/"  className="sm:text-sm xl:text-md text-gray-500 font-normal hover:font-bold"> 
                                Trang chủ
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                        Tạo tài khoản miễn phí ngay.
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Điền đầy đủ thông tin bên dưới.
                    </p>
                    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Họ</label>
                            <input type="text" placeholder="Nguyễn Văn" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Tên</label>
                            <input type="text" placeholder="A" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Số điện thoại</label>
                            <input type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Địa chỉ email</label>
                            <input type="email" placeholder="a.nv@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mật khẩu</label>
                            <input type="password" placeholder="Password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nhập lại mật khẩu</label>
                            <input type="password" placeholder="Password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <button type="submit" className="w-full flex justify-center bg-gradient-to-r bg-blue-200  hover:bg-gradient-to-l hover:bg-blue-500 text-black-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                            <span>Đăng ký </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button type="submit" className="w-full flex justify-center bg-gradient-to-r bg-blue-200  hover:bg-gradient-to-l hover:bg-blue-500 text-black-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

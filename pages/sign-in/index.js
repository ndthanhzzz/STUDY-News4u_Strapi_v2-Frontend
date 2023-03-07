import React from 'react'
import Header from '../../components/Layout/Header/Header'
import Footer from '../../components/Layout/Footer/Footer'
import Link from 'next/link'


export default function index() {
  return (
    <div>
      <Header/>
      <div className="relative min-h-screen flex font-arial">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
            <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)'}}>
                <div className="absolute bg-gradient-to-b from-blue-400 to-blue-200 opacity-75 inset-0 z-0" />
                <div className="w-full  max-w-md z-10">
                    <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6"> Tiêu đề </div>
                    <div className="sm:text-sm xl:text-md text-gray-200 font-normal"> 
                            Giới thiệu ngắn
                    </div>
                </div>
            </div>
            <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-gray-900">
                            Welcom Back!
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <span className="h-px w-16 bg-gray-200" />
                        <span className="text-gray-300 font-normal">or continue with</span>
                        <span className="h-px w-16 bg-gray-200" />
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="relative">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                        <input className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"  placeholder="mail@gmail.com"/>
                    </div>
                    <div className="mt-8 content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                        Password
                        </label>
                        <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"  placeholder="Enter your password"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-orange-200 border-gray-300 rounded" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                        </div>
                        <div className="text-sm">
                        <Link href="/" className="text-indigo-400 hover:text-blue-500">
                            Forgot your password?
                        </Link>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center bg-gradient-to-r bg-blue-200  hover:bg-gradient-to-l hover:bg-blue-500 text-black-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                        Sign in
                        </button>
                    </div>
                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                        <span> Creat an account?</span>
                        <Link href="/sign-up" className="text-indigo-400 hover:text-blue-500 no-underline cursor-pointer transition ease-in duration-300">
                            Sign Up
                        </Link>
                    </p>
                    </form>
                </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

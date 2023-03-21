import Footer from "@/components/Layout/Footer/Footer";
import Header from "@/components/Layout/Header/Header";
import Link from "next/link";
import { Button } from "antd";
import { Image } from "antd"
import Head from "next/head";

export default function Home() {
  return (
      <div className="bg-white font-arial">
        <Head>
            <title> News4u - About </title>
        </Head>
        <Header/>
        <section className="sm:mx-40">
            {/* Language */}
            <nav className="my-5">
                <span className="mr-2"><Button href="/location-vn">Vietnam</Button></span>
                <span className="ml-2"><Button href="/location-global">Global</Button></span>
            </nav>
            {/* Welcome */}
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Chào mừng bạn đến với trang tin tức của chúng tôi
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Hãy cùng nhau cập nhật những tin tức mới nhất từ mọi nơi trên thế giới <br/>
                    Luôn luôn cập nhật, luôn luôn lắng nghe...
                </p>
                <Link href="/home" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:orange-blue-400 dark:focus:ring-orange-900">
                    Tiếp tục đọc tin tức
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </Link>
                <Link href="/sign-up" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Đăng ký
                </Link> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <Image className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy" preview={false}/>
            </div>                
            </div>
        </section>
        <Footer/>
      </div>
  )
}

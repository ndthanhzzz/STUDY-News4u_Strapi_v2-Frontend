import '@/styles/globals.css'
import '@/styles/style.css'
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return(
    <>
      <NextNProgress color='blue' />
      <Component {...pageProps} />
    </>
  )
}

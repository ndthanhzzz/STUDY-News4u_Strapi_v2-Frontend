import { Image } from "antd"

function ImagenewsCustom({imgnews}){
    if(imgnews.attributes.cover.data==null){
      return(
        <Image height={200} width={300} className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy" preview={false}/>
        )}
    const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
    return (
      <Image  height={200} width={300} className="rounded-xl" src={url} alt="cover" loading="lazy" preview={false}/>
    )
}

function ImagenewsFill({imgnews}){
    if(imgnews.attributes.cover.data==null){
      return(
        <Image className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy" preview={false}/>
        )}
    const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
    return (
      <Image className="rounded-xl" src={url} alt="cover" loading="lazy" preview={false}/>
    )
}


function ImagenewsCategories({imgnews}){
  if(imgnews.attributes.cover.data==null){
    return(
      <Image width={150} className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy" preview={false}/>
      )}
  const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
  return (
    <Image width={150} className="rounded-xl" src={url} alt="cover" loading="lazy" preview={false}/>
  )
}

function ImageSlideCateHome({imgcate}){
  if(imgcate.attributes.cover.data==null){
    return(
      <Image height={100} width={150} className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy" preview={false}/>
      )}
  const url = process.env.NEXT_PUBLIC_HOST_V2 + imgcate.attributes.cover.data.attributes.url
  return (
    <Image height={100} width={150} className="rounded-xl" src={url} alt="cover" loading="lazy" preview={false}/>
  )
}

export {
    ImagenewsCustom,
    ImagenewsFill,
    ImagenewsCategories,
    ImageSlideCateHome,
}
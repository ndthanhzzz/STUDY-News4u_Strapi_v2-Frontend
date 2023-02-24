import { Image } from "antd"

function ImagenewsCustom({imgnews}){
    console.log(imgnews)
    if(imgnews.attributes.cover.data==null){
      return(
        <Image height={200} width={300} className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy"/>
        )}
    const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
    return (
      <Image  height={200} width={300} className="rounded-xl" src={url} alt="cover" loading="lazy"/>
    )
}

function ImagenewsFill({imgnews}){
    console.log(imgnews)
    if(imgnews.attributes.cover.data==null){
      return(
        <Image className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy"/>
        )}
    const url = process.env.NEXT_PUBLIC_HOST_V2 + imgnews.attributes.cover.data.attributes.url
    return (
      <Image className="rounded-xl" src={url} alt="cover" loading="lazy"/>
    )
}

export {
    ImagenewsCustom,
    ImagenewsFill
}
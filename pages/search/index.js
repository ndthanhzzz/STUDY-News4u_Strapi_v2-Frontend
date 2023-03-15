import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { InstantSearch, SearchBox, Hits, Highlight, Configure } from "react-instantsearch-dom";
import Link from "next/link";
import { Image } from "antd";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import ShowTime from "@/components/Module/ShowTime"; 

const searchClient = instantMeiliSearch(
  "https://search.v2.wuys.me/",
  "23990cec61f86f8a77681f7ab4206ff5617198338bffabcd8589ff139f0f80e8"
);



export default function Search(){
  return(
    <div className="bg-white font-arial">
      <Header/>
      <InstantSearch
        indexName= "post"
        searchClient={searchClient}>
          <div className="mb-20 lg:mx-40 mx-auto">
            <SearchBox className='p-20 flex justify-center'/>
            <Hits hitComponent={Hit}/>
            <Configure hitsPerPage={5}/>
          </div>
      </InstantSearch>
      <Footer/>
    </div>
  );
}

function CustomImage(props){
  if(props.props.hit.cover==null){
    return(
      <Image height={200} width={300} className="rounded-xl" src="/news-cover.jpg" alt="cover" loading="lazy" preview={false}/>
      )}
  const url = process.env.NEXT_PUBLIC_HOST_V2 + props.props.hit.cover.url
  return (
      <Image height={200} width={300} className="rounded-xl" src={url} alt="cover" loading="lazy" preview={false}/>
  )
  
  
}

function Hit(props){
  return (
    <div className="flex flex-row justify-start p-2">
      <div className= "lg:block hidden">
        <CustomImage props={props} />
      </div>
      <Link className="w-3/4 lg:mx-2 mx-auto" href={`thread/${props.hit.slug}`}>
        <div className="text-justify">
            <h3 className='font-bold text-lg'>{props.hit.title}</h3>
            <h4>{props.hit.description}</h4>
            <h5 className="font-small"><ShowTime time={props.hit.createdAt}/></h5>
        </div>
      </Link>
    </div>
  )
}

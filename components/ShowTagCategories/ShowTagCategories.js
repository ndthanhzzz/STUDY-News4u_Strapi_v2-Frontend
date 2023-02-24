import Link from "next/link"

function ShowTagCategories({tagCate}){
    return(
      <span className="">
        <Link className="hover:text-blue-500" href={`/categories/${tagCate.attributes.slug}`}> {tagCate.attributes.title} ✔ </Link>
      </span>
    )
  }

export {
    ShowTagCategories,
}


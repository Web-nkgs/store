/*
Params are useful when we know the resource we want to obtain, ex. a product where you know info.
SearchParams are useful for adding page config, search token, even analytics and AB testing.

 */

import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

// Server component

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

const getProductInfo = async ({searchParams}: ProductPageProps): Promise<ProductType> => {
  const id = searchParams.id
  // this doesn't affect preformance thanks to NextJS memoization implemented in fetch (only the first request loads).
  const products = await getProducts(id)
  const product = products[0]
  return product
}

// to improve SEO in a dynamic page
export async function generateMetadata({searchParams}: ProductPageProps) {
  const product = await getProductInfo({searchParams})

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    // Image that show when you share an element (article for example in facebook, twitter).
    openGraph: {
      images: [product.image]
    }
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const product = await getProductInfo({searchParams})

  // if(!id){
  //   redirect('/')
  // }

  return <ProductView product={product} />
}

// ---------------------------------------------------

// Client component
// "use client"

// import { useParams, useSearchParams } from "next/navigation"

// interface ProductPageProps {
//     searchParams: {
//         id: string
//     }
// }

// export default function ProductPage(props: ProductPageProps) {
//     const params = useParams()
//     console.log("params: ", params);
//     const searchParams = useSearchParams()
//     const id = searchParams.get("id")
//     console.log("searchParams id: ", id);
    
//     return <h1>Product page</h1>
// }
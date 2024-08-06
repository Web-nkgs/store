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

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id
  const products = await getProducts(id)
  const product = products[0]

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
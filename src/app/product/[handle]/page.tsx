/*
Params are useful when we know the resource we want to obtain, ex. a product where you know info.
SearchParams are useful for adding page config, search token, even analytics and AB testing.

 */
// Server component
// interface ProductPageProps {
//     params: {
//         handle: string
//     },
//     searchParams: {
//         id: string
//     }
// }
// export default async function ProductPage(props: ProductPageProps) {
//     const { handle }  = props.params
//     console.log("server component params:", handle);
//     console.log("server component searchParams: ", props.searchParams.id);
    
//     return <h1>Product page</h1>
// }

// ---------------------------------------------------

// Client component
"use client"

import { useParams, useSearchParams } from "next/navigation"

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export default function ProductPage(props: ProductPageProps) {
    const params = useParams()
    console.log("params: ", params);
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    console.log("searchParams id: ", id);
    
    return <h1>Product page</h1>
}
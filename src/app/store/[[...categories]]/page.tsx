import { ProductsWrapper } from "app/components/Store/ProductsWrapper/ProductsWrapper";
import { getCollectionProducts, getCollections } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
    params: {
        categories: string[]
    },
    searchParams?: string
}

export default async function Category(props: CategoryProps) {
    const { categories } = props.params
    
    let products: ProductType[] | undefined
    const collections = await getCollections()
    if (categories) {
        const collectionId = collections.find((collection) => collection.handle === categories[0]).id
        const productsByCollection = await getCollectionProducts(collectionId)
        products = productsByCollection
    } else {
        products = await getProducts()
    }
    
    const search = props.searchParams
    
    // GlobalError gets activated.
    // throw new Error("Error: BOOM!")

    console.log("search: ", search);

    if (!products) {
        return null
    }
    
    return (
        <ProductsWrapper products={products}/>
    )
}
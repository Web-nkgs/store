import { ProductsWrapper } from "app/components/Store/ProductsWrapper/ProductsWrapper";
import { getProducts } from "app/services/shopify";

interface CategoryProps {
    params: {
        categories: string[]
    },
    searchParams: {
        search?: string;
    }
}

export default async function Category(props: CategoryProps) {
    const products = await getProducts()
    const { categories } = props.params
    const search = props.searchParams
    
    // GlobalError gets activated.
    // throw new Error("Error: BOOM!")

    console.log("categories: ", categories);
    console.log("search: ", search);

    if (!products) {
        return null
    }
    
    return (
        <ProductsWrapper products={products}/>
    )
}
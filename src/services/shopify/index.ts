import { env } from "app/config/env"
import { shopifyUrls } from "./urls"
import { Product } from "app/types/Product"

export const getProducts = async () => {
    try {
        const response = await fetch(shopifyUrls.products.all, {
            headers: new Headers({
                "X-Shopify-Access-Token": `${env.SHOPIFY_TOKEN}`
            })
        })
        const data = await response.json()
        // throw new Error('Error')
        const products: Product[] = data.products
        return products
    } catch (error) {
        console.log(error);
        return null
    }
}
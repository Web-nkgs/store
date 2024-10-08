import Chat from "app/components/chat/chat";
import { getProducts } from "app/services/shopify/products";
import { createAgent } from "app/utils/googleAi/createAgent";


export default async function ChatPage() {
    const products = await getProducts()
    const productTitles = products.map((product) => product.title)
    const flatProductTitles = productTitles.join('/n')
    const agent = createAgent(flatProductTitles)

    return <Chat agent={agent} />
}
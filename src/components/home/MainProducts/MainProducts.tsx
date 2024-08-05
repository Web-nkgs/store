import { getMainProducts } from "app/services/shopify/products";
import Image from "next/image";
import styles from "./MainProducts.module.sass";

// server components in Next.js can be async, ONLY IN NEXT-JS.
export const MainProducts = async () => {

    const products: ProductType[] | null = await getMainProducts()

    if (!products) {
        return null
    }
    
    return <section className={styles.MainProducts}>
        <h1>New Products released!</h1>
        <div className={styles.MainProducts__grid}>
            {
                products?.map((product) =>
                    <article key={product.id}>
                        <p>{product.title}</p>
                        <Image
                            fill
                            src={product.image}
                            alt={product.title}
                            loading="eager" />
                    </article>
                )
            }
        </div>

    </section>
}

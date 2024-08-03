import { Product } from "../../../types/Product";
import Image from "next/image";
import styles from "./MainProducts.module.sass"
import { getProducts } from "app/services/shopify";

// server components in Next.js can be async, ONLY IN NEXT-JS.
export const MainProducts = async () => {

    const products: Product[] | null = await getProducts()
    
    return <section className={styles.MainProducts}>
        <h1>New Products released!</h1>
        <div className={styles.MainProducts__grid}>
            {
                products?.map((product) =>
                    <article key={product.id}>
                        <p>{product.title}</p>
                        <Image
                            fill
                            src={product.image.src}
                            alt={product.title}
                            loading="eager" />
                    </article>
                )
            }
        </div>

    </section>
}

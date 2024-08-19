import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import { ReactNode } from "react"
import styles from './StoreLayout.module.sass'
import { ChatLink } from "app/components/Store/ChatLink"

export const runtime = "edge"

type Props = {
    children: ReactNode
}

/* Layout --> Is going to wrap the other components inside of it. It's hieriarchical. */
export default async function Layout({ children }: Props) {
    const collections: Collection[] = await getCollections()

    return (
        <main className={styles.StoreLayout}>
            <h1>Explore</h1>
            <nav>
                <ul className={styles.StoreLayout__list}>
                    {
                        collections.map((collection) => (
                            <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                                {collection.title}
                            </Link>
                        ))
                    }
                </ul>
                <ChatLink />
            </nav>
            {children}
        </main>
    )
}
import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

/* Layout --> Is going to wrap the other components inside of it. It's hieriarchical. */
export default async function Layout({ children }: Props) {
    const collections = await getCollections()

    return (
        <main>
            <nav>
                {
                    collections.map((collection: any) => (
                        <Link key={collection.id} href={'/store/' + collection.handle}>
                            {collection.title}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    )
}
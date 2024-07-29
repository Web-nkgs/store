import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

/* Layout --> Is going to wrap the other components inside of it. It's hieriarchical. */
export default function Layout({ children }: Props) {
    return (
        <main>
            <nav>Navegación de las categorías</nav>
            {children}
        </main>
    )
}
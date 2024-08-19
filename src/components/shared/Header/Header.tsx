import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import Link from 'next/link'
import styles from '../Header/Header.module.sass'
import ShoppingCart from '../ShoppingCart'
import dynamic from 'next/dynamic'

// Avoid passing to server side renedring.
const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false })

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          {/* Using Link allows us to reduce bandwidth cause it caches the files.
              Since Next.js renders on the server side we do less petitions 
              avoiding the reload (done with anchor <a>).
              And navigation is waymore fluid, since it doesn't reload.  
              Use link = internal app urls.
              Use anchor = for external url links ex.- google.com.
              */}
          <li>
            <Link href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/store"}>
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? <Link href="/my-account">Hola {customer.firstName}!</Link> : <Link href="/login">Login</Link>}
        <NoSSRShoppingCart />
      </div>
    </header>
  )
}


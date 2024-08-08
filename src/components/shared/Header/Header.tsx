import Link from 'next/link'
import React from 'react'
import styles from '../Header/Header.module.sass'
import { cookies } from 'next/headers'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header>
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
        {customer?.firstName ? <p>Hola {customer.firstName}!</p> : <Link href="/login">Login</Link>}
      </nav>
    </header>
  )
}


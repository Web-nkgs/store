import Link from 'next/link'
import React from 'react'

export const Header = () => {

  return (
    <header>
      <nav>
        <ul>
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
          <li>
            <Link href={"/test"}>
              Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


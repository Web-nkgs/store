import Link from 'next/link'
import React from 'react'

export const Header = () => {
    console.log("I'm the header!");
    
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
              <Link href={"/"}>
                <li>Home</li>
              </Link>

              <Link href={"/store"}>
                <li>Store</li>
              </Link>
            </ul>
          </nav>
        </header>
  )
}


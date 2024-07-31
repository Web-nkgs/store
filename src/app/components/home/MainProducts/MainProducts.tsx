"use client"
export const MainProducts = () => {
    console.log("env var: ", process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
    
    return <section>
        <h1>MainProducts!</h1>
    </section>
}

"use client"

import { useEffect } from "react"

// This Next.js Error file works through a React ErrorBoundary.
export default function Error({ error, reset }: ErrorProps) {

    useEffect(() => {
        // Tip: Don't show the error.message in the UI (cause the user shouldn't see technical issues). 
        // You could send the error to an external monitor service (sentry, honeycomb, etc.)
        console.log(error);
    }, [])

    return (
        <div style={{
            padding: '5rem'
        }}>
            <h1>:c</h1>
            <p>Ha ocurrido un error</p>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}
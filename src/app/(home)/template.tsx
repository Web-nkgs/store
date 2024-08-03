"use client"
import React, { useEffect } from "react";
import { Description } from "../components/home/Description";
import { Hero } from "../components/home/Hero";

type Props = {
    children: React.ReactNode
}

// Every component that's static should go in the layout | Only dynamic components should go in page.
export default function HomeTemplate({ children }: Props) {
    console.log("HomeTemplate re-mount");

    useEffect(() => {
        console.log('send google analytics, amplitud, etc. metrics');
        
    }, [])
    
    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}
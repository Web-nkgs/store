import React from "react";
import { Description } from "../../components/home/Description";
import { Hero } from "../../components/home/Hero";

type Props = {
    children: React.ReactNode
}

// Every component that's static should go in the layout | Only dynamic components should go in page.
export default function HomeLayout({ children }: Props) {

    return (
        <div>
            <Hero />
            <Description />
            {children}
        </div>
    )
}
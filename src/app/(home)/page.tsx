import { Metadata } from "next";
import { MainProducts } from "../../components/home/MainProducts";

// to improve SEO in a static page
export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to future World, an ecommerce",
  keywords: ["ecommerce", "future", "world", "technology"]
}

export default function Home() {

  return (
    // Principal page
    // suggestion: tha majority of things that goes in pages should be in components, like building legos!
    <main>
      <MainProducts />
    </main>
  );
}

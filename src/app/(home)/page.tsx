import { Description } from "../../components/home/Description";
import { Hero } from "../../components/home/Hero";
import { MainProducts } from "../../components/home/MainProducts";

export default function Home() {

  return (
    // Principal page
    // suggestion: tha majority of things that goes in pages should be in components, like building legos!
    <main>
      <MainProducts />
    </main>
  );
}

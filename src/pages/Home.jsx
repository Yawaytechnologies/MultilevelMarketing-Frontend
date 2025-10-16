// src/pages/Home.jsx
import Hero from "../components/home/Landing";
import Header from "../components/common/Header";
import Carousel from "../components/home/Carousel";
import AboutMlm from "../components/home/About";
import DiscoverProducts from "../components/home/DiscoverProducts";
import OurStory from "../components/home/OurStory";

export default function Home() {
  return (
    <>
    <title>Lakshra | Home </title>
      <meta
        name="description"
        content="Discover premium wellness, nutrition, beauty and home care products. Earn PV/BV on purchases, unlock distributor pricing, and grow with our direct selling opportunity."
      />
      <Hero />
      {/* attaches under hero; sticks to top when reached */}
      <Header mode="sticky" />

      <main id="content-start" className="scroll-mt-[72px] md:scroll-mt-[80px]"  >
       <Carousel />
       <AboutMlm />
       <DiscoverProducts />
      
        <OurStory />

        
      </main>
    </>
  );
}

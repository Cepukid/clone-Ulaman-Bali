import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import HeroText from "@/components/HeroText";
import Navbar from "@/components/Navbar";
import content from "@/data/content.json";

export default function Home() {
  return (
    <div className="bg-[#fdf7ec]">
      <Navbar />
      <main>
        <Hero {...content.hero} />
        <HeroText />
        <AboutSection />
        <GallerySection />
      </main>
    </div>
  );
}

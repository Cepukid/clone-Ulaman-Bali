import content, { Section } from "@/constants/content";
import Hero from "@/components/sections/Hero/Hero";
import HeroText from "@/components/sections/Hero/HeroText";
import AboutSection from "@/components/sections/About/AboutSection";
import GallerySection from "@/components/sections/Gallery/GallerySection";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  const renderSection = (section: Section, idx: number) => {
    switch (section.type) {
      case "hero":
        return <Hero key={idx} {...section.data} />;
      case "heroText":
        return <HeroText key={idx} {...section.data} />;
      case "about":
        return <AboutSection key={idx} {...section.data} />;
      case "gallery":
        return (
          <GallerySection
            key={idx}
            heading={section.data.heading}
            items={section.data.items}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#fdf7ec]">
      <Navbar />
      <main>{content.sections.map(renderSection)}</main>
    </div>
  );
}

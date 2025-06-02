"use client";
import content from "@/data/content.json";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HorizontalSliderGallery from "./HorizontalSliderGallery";

const GallerySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const handleScrollCheck = () => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;

    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -850 : 850,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    handleScrollCheck();
  }, []);
  return (
    <section id="gallery" className="w-full pl-20 pr-10 relative mt-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#9c7b3c]">
          Discover cozy elegance, where tranquility <br /> meets Bali’s serene beauty.
        </h2>
      </div>

      <div className="flex flex-row gap-5 items-start">
        <div className="flex flex-col gap-4 pt-40">
          <button
            onClick={() => scroll("left")}
            disabled={atStart}
            className={`border w-[70px] h-[70px] rounded transition  ${
              atStart
                ? 'border-[#c49a4f] text-[#c49a4f] opacity-50 cursor-not-allowed'
                : 'border-[#c49a4f] text-[#c49a4f] hover:bg-[#c49a4f] hover:text-white'
            }`}
          >
            <ArrowLeft size={20} className="mx-auto" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={atEnd}
            className={`border w-[70px] h-[70px] rounded transition ${
              atEnd
                ? 'border-[#c49a4f] text-[#c49a4f] opacity-50 cursor-not-allowed'
                : 'border-[#c49a4f] text-[#c49a4f] hover:bg-[#c49a4f] hover:text-white'
            }`}
          >
            <ArrowRight size={20} className="mx-auto" />
          </button>

        </div>

        <div
          ref={scrollRef}
           onScroll={handleScrollCheck}
          className="flex gap-6 overflow-x-auto px-2 scrollbar-hide scroll-smooth"
        >
          {content.gallery.map((item, index) => (
            <HorizontalSliderGallery
              key={index}
              title={item.title}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

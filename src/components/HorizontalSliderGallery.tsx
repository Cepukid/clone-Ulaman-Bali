'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryItemProps {
  title: string;
  description: string;
  images: string[];
}

export default function HorizontalSliderGallery({
  title,
  description,
  images,
}: GalleryItemProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNext = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[450px] h-[1200px] shrink-0 rounded-xl">
      <div className="relative w-full h-[60%] overflow-hidden rounded-xl">
        <Image
          src={images[imageIndex]}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handlePrev}
          disabled={imageIndex === 0}
          className={`absolute bottom-4 left-4 z-10 w-10 h-10 rounded-md border flex items-center justify-center transition ${
            imageIndex === 0
              ? 'bg-white/50 opacity-50 cursor-not-allowed'
              : 'bg-white/80 hover:bg-white'
          }`}
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={handleNext}
          disabled={imageIndex === images.length - 1}
          className={`absolute bottom-4 right-4 z-10 w-10 h-10 rounded-md border flex items-center justify-center transition ${
            imageIndex === images.length - 1
              ? 'bg-white/50 opacity-50 cursor-not-allowed'
              : 'bg-white/80 hover:bg-white'
          }`}
        >
          <ArrowRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setImageIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                imageIndex === i ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-[#b68938] font-americana">{title}</h3>
        <p className="italic text-sm text-[#1a1a1a] mt-2">{description}</p>
        <a
          href="#"
          className="inline-block mt-4 text-[#b68938] border-b border-[#b68938] hover:text-[#8f691c] transition"
        >
          DISCOVER
        </a>
      </div>
    </div>
  );
}

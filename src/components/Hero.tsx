"use client"
import { useState } from "react";
import Image from "next/image";

interface HeroProps {
  alt: string;
  image: string;
  video: string;
}

const Hero = ({alt,  image, video }: HeroProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {!videoLoaded && (
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500"
        />
      )}
      <iframe
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src={video}
        title={alt}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        onLoad={() => setVideoLoaded(true)}
      />
    </div>
  );
};

export default Hero;

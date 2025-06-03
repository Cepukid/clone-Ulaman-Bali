'use client';
import { useEffect, useState } from 'react';
import { FadeIn } from '@/components/common/FadeIn';

const HeroScrollText = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollPos(y);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundPosition = `center ${scrollPos * 0.2}px`;

  return (
    <section className="flex justify-center items-center py-24">
      <FadeIn>
        <h1
          className="w-3xl text-center text-3xl md:text-4xl lg:text-5xl font-americana leading-none text-transparent bg-clip-text transition-all duration-300"
          style={{
            backgroundImage:
              'linear-gradient(120deg, #d4af37, #e0c097, #d4af37)',
            backgroundSize: '200% 200%',
            backgroundPosition,
          }}
        >
          Nestled among the rice fields and coconut trees of Tabanan, Ulaman is
          only 20 minutes away from the vibrant town of Canggu.
        </h1>
      </FadeIn>
    </section>
  );
};

export default HeroScrollText;

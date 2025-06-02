"use client"
import Image from 'next/image';
import { FadeIn } from './FadeIn';

const AboutSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 px-6 py-16 max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2">
        <div className="rounded-xl w-lg overflow-hidden justify-self-start">
          <FadeIn>
            <Image
              src="/assets/about/ZjNFm0MTzAJOCfDW_best-spa-bali.jpg"
              alt="Ulaman Resort"
              width={800}
              height={100}
              className="h-auto object-cover"
            />
          </FadeIn>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-[#b68938] font-americana ">
        <FadeIn>
          <h2 className="text-xl md:text-2xl leading-relaxed font-americana ">
            An award-winning eco-luxury resort offering a unique hideaway experience. <br />
            Embrace authenticity, balance, and harmony with nature in a healing, luxurious environment.
          </h2>
        </FadeIn>

        <div className="text-base text-neutral-800 font-americana leading-relaxed">
          <FadeIn>
            <p>
              We believe nature and luxury can coexist. Ulaman Eco Luxury Resort offers
              <em> a secluded, lush haven with luxurious amenities and impeccable service.</em>
            </p>
          </FadeIn>
          <FadeIn>
            <p>
              Immerse yourself in traditional Balinese culture and leave feeling renewed, all while minimizing your
              ecological footprint. Recharge your mind, body, and soul in this unique holistic retreat.
            </p>
          </FadeIn>
          <FadeIn>
            <a
              href="#"
              className="inline-block mt-6 text-[#b68938] underline underline-offset-4 hover:text-[#8f691c] transition"
            >
              ABOUT US
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


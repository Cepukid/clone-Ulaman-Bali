"use client";
import Image from "next/image";
import { FadeIn } from "@/components/common/FadeIn";

export interface AboutContent {
  image: string;
  alt: string;
  heading: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
}

const AboutSection = ({ image, alt, heading, paragraphs, linkText, linkHref }: AboutContent) => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 px-6 py-16 max-w-7xl mx-auto">
      <div className="w-full lg:w-1/2">
        <div className="rounded-xl w-lg overflow-hidden justify-self-start">
          <FadeIn>
            <Image
              src={image}
              alt={alt}
              width={800}
              height={100}
              className="h-auto object-cover"
            />
          </FadeIn>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6 text-[#b68938] font-americana">
        <FadeIn>
          <h2 className="text-xl md:text-2xl leading-relaxed font-americana">
            {heading}
          </h2>
        </FadeIn>

        <div className="text-base text-neutral-800 font-americana leading-relaxed">
          {paragraphs.map((para, i) => (
            <FadeIn key={i}>
              <p dangerouslySetInnerHTML={{ __html: para.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
            </FadeIn>
          ))}

          <FadeIn>
            <a
              href={linkHref}
              className="inline-block mt-6 text-[#b68938] underline underline-offset-4 hover:text-[#8f691c] transition"
            >
              {linkText}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

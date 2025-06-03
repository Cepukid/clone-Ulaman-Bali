import raw from './content.json';

export interface HeroContent {
  alt: string;
  image: string;
  video: string;
}

export interface HeroTextContent {
  heading: string;
  subheading: string;
}

export interface AboutContent {
  image: string;
  alt: string;
  heading: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  images: string[];
}

export interface GallerySectionContent {
  heading: string;
  items: GalleryItem[];
}

export type Section =
  | { type: "hero"; data: HeroContent }
  | { type: "heroText"; data: HeroTextContent }
  | { type: "about"; data: AboutContent }
  | { type: "gallery"; data: GallerySectionContent };

export interface SiteContent {
  sections: Section[];
}
const content: SiteContent = raw as SiteContent;

export default content;

import type { Metadata } from "next";
import "./globals.css";
import { americana } from '@/styles/fonts';

export const metadata: Metadata = {
  title: "Welcome • Ulaman Eco Luxury Resort",
  description: "An Award-Winning Eco-Luxury Resort Offering A Unique Hideaway Experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${americana.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

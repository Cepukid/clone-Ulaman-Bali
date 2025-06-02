"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f5f0e9] text-[#a57b38]" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="relative">
            <span className="block w-6 h-[2px] bg-current mb-1"></span>
            <span className="block w-4 h-[2px] bg-current"></span>
          </button>
          <nav className="hidden md:flex gap-6 text-sm font-medium tracking-wide">
            <Link href="#villas">Villas</Link>
            <Link href="#spa">Spa</Link>
            <Link href="#dine">Dine</Link>
            <Link href="#retreats">Retreats</Link>
          </nav>
        </div>
        <div
          className={`transition-transform duration-300 ${
            scrolled ? "scale-75" : "scale-100"
          }`}
        >
          <Image
            src="/assets/aAMlsuvxEdbNPPas_logo-new.svg"
            alt="Ulaman Logo"
            width={100}
            height={50}
            className="mx-auto"
          />
        </div>
        <div>
          <button
            className={`px-6 py-2 rounded-lg border text-sm transition-colors duration-300 ${
              scrolled
                ? "border-[#a57b38] text-[#a57b38] hover:bg-[#a57b38] hover:text-white"
                : "border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Stay With Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

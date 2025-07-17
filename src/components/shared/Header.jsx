

// components/HeroWithHeader.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { PiBagSimpleThin } from "react-icons/pi";
import Banner from "../../../public/images/banner.webp"; // Adjust path as needed

const NAV_LINKS = [
  "SHOP ALL",
  "NEW IN",
  "BEST SELLERS",
  "SHOP GOLD",
  "SHOP SILVER",
  "PERLE",
  "MODERN RODEO",
];

export default function HeroWithHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const headerRef = useRef(null);
  const lastY = useRef(0);

  // toggle header bg/text on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // detect scroll direction for "scroll up" reveal
  useEffect(() => {
       const onScroll = () => {
    const y = window.scrollY;
     const isUp = y < lastY.current && y > 0;
     setScrollUp(isUp);
     lastY.current = y;
   };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // toggle nav visibility on mouse Y
  useEffect(() => {
    const onMouseMove = (e) => {
      const y = e.clientY;
      const h = headerRef.current?.offsetHeight ?? 0;
      // show nav when cursor is within header + 150px
      setShowNav(y <= h + 150);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  console.log('scrollUp',scrollUp)
  console.log('lastY',lastY)

  return (
    <section className="relative w-full h-screen ">
      {/* Full-screen banner */}
      <Image
        src={Banner}
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Hero overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 gap-5"
        style={{ paddingBottom: "30px" }}
      >
        <h2 className="text-white text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-serif mb-6">
          Modern Rodeo
        </h2>
        <a
          href="#"
          className="inline-block uppercase text-xs sm:text-xs border border-white text-white transition hover:bg-white hover:text-black"
          style={{ padding: "12px 25px" }}
        >
          Shop the Collection
        </a>
      </div>

      {/* Fixed header */}
      <header
        ref={headerRef}
        className={`
          fixed inset-x-0 top-6 z-20
          transition-colors duration-300
          ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-transparent text-white"
          }
        `}
        style={{ padding: "25px 16px" }}
      >
        <div className="flex items-center justify-between">
          {/* Hamburger */}
          <button>
            <CiMenuBurger size={24} />
          </button>

          <h1
            className="absolute left-1/2 transform -translate-x-1/2 text-xl font-sans font-bold tracking-wider"
            style={{ margin: 0 }}
          >
            SERGE DENIMES
          </h1>

          {/* Search & Bag */}
          <div className="flex items-center">
            <button>
              <CiSearch size={24} />
            </button>
            <button style={{ marginLeft: "16px" }}>
              <PiBagSimpleThin size={24} />
            </button>
          </div>
        </div>

        {/* Center nav—show if cursor in header OR user is scrolling up */}
        {(showNav || scrollUp) && (
          <nav
            className="hidden lg:flex gap-5 justify-center"
            style={{ marginTop: "18px" }}
          >
            {NAV_LINKS.map((label) => (
              <a
                key={label}
                href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-xs ${scrolled ? "text-black" : "text-white"}`}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </section>
  );
}

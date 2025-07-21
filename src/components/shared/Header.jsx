"use client";
import { useState, useEffect, useRef } from "react";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { PiBagSimpleThin } from "react-icons/pi";
import NavLinks from "./Navlinks";

export default function HeroWithHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const headerRef = useRef(null);
  const lastY = useRef(0);

  // Handle scroll behavior and visibility updates
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 400);
      setScrollUp(y < lastY.current && y > 0);
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle nav visibility based on mouse Y position
  useEffect(() => {
    const onMouseMove = (e) => {
      const y = e.clientY;
      const h = headerRef.current?.offsetHeight ?? 0;
      setShowNav(y <= h + 150);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section className='relative w-full h-screen '>
      <header
        ref={headerRef}
        className={`
          py-[25px] px-[16px]
          fixed inset-x-0 top-6 z-20
          transition-colors duration-300
          ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-transparent text-white"
          }
        `}
    
      >
        <div className='flex items-center justify-between'>
          <button aria-label='Open menu'>
            <CiMenuBurger size={24} />
          </button>

          <a href='#' aria-label='Go to homepage'>
            <h1
              className='absolute left-1/2 transform -translate-x-1/2 text-xl font-sans font-bold tracking-wider -mt-[10px]'
            >
              SERGE DENIMES
            </h1>
          </a>

          <div className='flex items-center gap-5'>
            <button aria-label='Search'>
              <CiSearch size={24} />
            </button>
            <button aria-label='Shopping bag'>
              <PiBagSimpleThin size={24} />
            </button>
          </div>
        </div>

        {(showNav || scrollUp) && <NavLinks scrolled={scrolled} />}
      </header>
    </section>
  );
}

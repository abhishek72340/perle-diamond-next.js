"use client";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import {testimonials } from "../data/testimonials";

export default function TestimonialsCarousel() {
  // ─── text carousel setup (unchanged) ────────────────────────
  const textSlides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];
  const textCount = textSlides.length;

  // ─── logo carousel setup (5 visible at once) ─────────────────
  const visibleCount = 5;
  const totalLogos = testimonials.length;
  // clone last 5 up front, first 5 at back
  const logoSlides = [
    ...testimonials.slice(-visibleCount),
    ...testimonials,
    ...testimonials.slice(0, visibleCount),
  ];
  const slideCount = logoSlides.length; // 15
  const stepVW = 100 / visibleCount; // 20vw per logo

  // ─── state & refs ───────────────────────────────────────────
  const [tIdx, setTIdx] = useState(1);
  const [lIdx, setLIdx] = useState(visibleCount);
  const [tMoving, setTMoving] = useState(true);
  const [lMoving, setLMoving] = useState(true);

  const tRef = useRef(null);
  const lRef = useRef(null);

  // ─── combined prev/next ─────────────────────────────────────
  const prevAll = () => {
    setTMoving(true);
    setTIdx((i) => (i - 1 + textCount) % textCount);
    setLMoving(true);
    setLIdx((i) => (i - 1 + slideCount) % slideCount);
  };
  const nextAll = () => {
    setTMoving(true);
    setTIdx((i) => (i + 1) % textCount);
    setLMoving(true);
    setLIdx((i) => (i + 1) % slideCount);
  };

  // ─── snap text off clones ────────────────────────────────────
  useEffect(() => {
    const el = tRef.current;
    if (!el) return;
    const onEnd = () => {
      if (tIdx === 0) {
        setTMoving(false);
        setTIdx(testimonials.length);
      } else if (tIdx === textCount - 1) {
        setTMoving(false);
        setTIdx(1);
      }
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [tIdx, textCount]);

  // ─── snap logos off clones ────────────────────────────────────
  useEffect(() => {
    const el = lRef.current;
    if (!el) return;
    const onEnd = () => {
      // if we've slid into the *front* cloned region (indexes 0…4)
      if (lIdx < visibleCount) {
        setLMoving(false);
        // jump to the matching real block at the *end* (indexes 5…9)
        setLIdx(totalLogos + lIdx);
      }
      // if we've slid into the *back* cloned region (indexes 10…14)
      else if (lIdx >= totalLogos + visibleCount) {
        setLMoving(false);
        // jump to the matching real block at the *start* (indexes 5…9)
        setLIdx(lIdx - totalLogos);
      }
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [lIdx, slideCount, totalLogos]);

  // ─── transforms & classes ───────────────────────────────────
  const tShift = `translateX(-${tIdx * 100}%)`;
  const lShift = `translateX(-${lIdx * stepVW}vw)`;
  const tClass = tMoving ? "transition-transform duration-700 ease-out" : "";
  const lClass = lMoving ? "transition-transform duration-700 ease-out" : "";

  // ─── highlight center logo ──────────────────────────────────
  // the logo that ends up in the middle of your 5‑wide viewport:
  const centerOffset = Math.floor(visibleCount / 2); // =2
  const realStart = lIdx - visibleCount;
  const centerRealIdx = (realStart + centerOffset + totalLogos) % totalLogos;

  return (
    <section className='w-full bg-[#f3f3f3]  border-b border-[#c1c1c1] h-100' style={{marginTop:'3rem'}}>
      {/* TEXT CAROUSEL */}
      <div
        className='relative w-full overflow-hidden'
        style={{ paddingTop: "5rem" }}
      >
        <button
          onClick={prevAll}
          className='absolute left-4 top-1/2 -translate-y-1/2 text-3xl text-gray-500 hover:text-gray-700 z-10'
        >
          <GrPrevious />
        </button>
        <div
          ref={tRef}
          className={`flex w-[${textCount * 100}vw] ${tClass}`}
          style={{ transform: tShift }}
        >
          {textSlides?.map(({ quote, author }, i) => (
            <div
              key={i}
              className='w-[100vw] flex-shrink-0 flex flex-col items-center justify-center px-6 py-12'
            >
              <p className='italic text-2xl md:text-3xl text-[#1b2735] leading-relaxed text-center max-w-3xl'>
                “{quote}”
              </p>
              <p className='mt-6 text-lg font-semibold text-[#1b2735]'>
                {author}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={nextAll}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-gray-500 hover:text-gray-700 z-10'
        >
          <GrNext />
        </button>
      </div>

      {/* LOGO CAROUSEL (5 VISIBLE) */}
      <div className='relative w-full overflow-hidden mt-8'>
        <div
          ref={lRef}
          className={`flex ${lClass}`}
          style={{
            width: `${slideCount * stepVW}vw`,
            transform: lShift,
          }}
        >
          {logoSlides.map(({ logo, author }, i) => (
            <div
              key={i}
              className='flex-shrink-0 flex justify-center'
              style={{ width: `${stepVW}vw` }}
            >
              <div
                className={
                  i === (lIdx + centerOffset) % slideCount
                    ? "grayscale-0 opacity-100"
                    : "grayscale opacity-30"
                }
              >
                {logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

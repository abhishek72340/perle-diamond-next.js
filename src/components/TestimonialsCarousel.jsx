"use client";
import { useEffect, useRef, useState } from "react";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { testimonials } from "../data/testimonials";

const VISIBLE_LOGOS = 5;
const COPIES = 5;
const FAST_THRESHOLD = 300;
const FAST_DURATION = 200;
const NORMAL_DURATION = 700;

export default function TestimonialsCarousel() {
  const length = testimonials.length;
  const textList = Array(COPIES).fill(testimonials).flat();
  const logoList = Array(COPIES).fill(testimonials).flat();
  const middleIndex = length * Math.floor(COPIES / 2);

  const [textStep, setTextStep] = useState(middleIndex);
  const [logoStep, setLogoStep] = useState(middleIndex);
  const [instant, setInstant] = useState(false);
  const [durationMs, setDurationMs] = useState(NORMAL_DURATION);
  const lastClick = useRef(Date.now());

  // Measure logo container
  const logoContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const [logoContainerWidth, setLogoContainerWidth] = useState(0);
  const [textContainerWidth, setTextContainerWidth] = useState(0);
  useEffect(() => {
    const measure = () => {
      setLogoContainerWidth(logoContainerRef.current?.clientWidth || 0);
      setTextContainerWidth(textContainerRef.current?.clientWidth || 0);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Reset when reaching end
  useEffect(() => {
    const reset = (step, setter, listLen) => {
      if (step <= length || step >= listLen - length) {
        const norm = ((step % length) + length) % length;
        setInstant(true);
        setter(middleIndex + norm);
      }
    };
    reset(textStep, setTextStep, textList.length);
    reset(logoStep, setLogoStep, logoList.length);
  }, [
    textStep,
    logoStep,
    length,
    middleIndex,
    textList.length,
    logoList.length,
  ]);

  useEffect(() => {
    if (instant) {
      const id = setTimeout(() => setInstant(false), 50);
      return () => clearTimeout(id);
    }
  }, [instant]);

  const slideBoth = (delta, isClick = false) => {
    let dur = NORMAL_DURATION;
    if (isClick) {
      const now = Date.now();
      const dt = now - lastClick.current;
      lastClick.current = now;
      dur = dt < FAST_THRESHOLD ? FAST_DURATION : NORMAL_DURATION;
    }
    setDurationMs(dur);
    setInstant(false);
    setTextStep((s) => s + delta);
    setLogoStep((s) => s + delta);
  };

  const handlePrev = () => slideBoth(-1, true);
  const handleNext = () => slideBoth(1, true);

  const handleLogoClick = (idx) => {
    const origIdx = idx % length;
    const currentOrig = ((logoStep % length) + length) % length;
    const diff = origIdx - currentOrig;
    if (diff !== 0) slideBoth(diff, true);
  };

  // Logo drag logic
  const logoDragStartX = useRef(0);
  const [logoDragOffset, setLogoDragOffset] = useState(0);
  const [logoDragging, setLogoDragging] = useState(false);

  const onLogoDragStart = (e) => {
    setLogoDragging(true);
    logoDragStartX.current = e.touches?.[0].clientX ?? e.clientX;
  };
  const onLogoDragMove = (e) => {
    if (!logoDragging) return;
    e.preventDefault();
    const x = e.touches?.[0].clientX ?? e.clientX;
    setLogoDragOffset(x - logoDragStartX.current);
  };
  const onLogoDragEnd = () => {
    if (!logoDragging) return setLogoDragging(false);
    const logoWidth = logoContainerWidth / VISIBLE_LOGOS;
    const steps = -Math.round(logoDragOffset / logoWidth);
    if (steps) {
      setDurationMs(NORMAL_DURATION);
      setInstant(false);
      setLogoStep((s) => s + steps);
    }
    setLogoDragOffset(0);
    setLogoDragging(false);
  };

  // Text drag logic
  const textDragStartX = useRef(0);
  const [textDragOffset, setTextDragOffset] = useState(0);
  const [textDragging, setTextDragging] = useState(false);

  const onTextDragStart = (e) => {
    setTextDragging(true);
    textDragStartX.current = e.touches?.[0].clientX ?? e.clientX;
  };
  const onTextDragMove = (e) => {
    if (!textDragging) return;
    e.preventDefault();
    const x = e.touches?.[0].clientX ?? e.clientX;
    setTextDragOffset(x - textDragStartX.current);
  };
  const onTextDragEnd = () => {
    if (!textDragging) return setTextDragging(false);
    const stepWidth = textContainerWidth / 1;
    const steps = -Math.round(textDragOffset / stepWidth);
    if (steps) {
      setDurationMs(NORMAL_DURATION);
      setInstant(false);
      setTextStep((s) => s + steps);
    }
    setTextDragOffset(0);
    setTextDragging(false);
  };

  const textPercent = 100 / textList.length;
  const logoWidthPx = logoContainerWidth / VISIBLE_LOGOS;
  const centerIndex = Math.floor(VISIBLE_LOGOS / 2);

  return (
    <div className='flex flex-col items-center justify-center h-[50vh] bg-[#f3f3f3] border-b border-[#c1c1c1] space-y-8'>
      <div className='flex items-center justify-center w-[65%] gap-[7rem] my-4'>
        <button onClick={handlePrev} className='p-4 opacity-30 cursor-pointer'>
          <TfiAngleLeft size={30} />
        </button>

        <div
          ref={textContainerRef}
          className='overflow-hidden w-2/3 mx-4 cursor-grab'
          onMouseDown={onTextDragStart}
          onTouchStart={onTextDragStart}
          onMouseMove={onTextDragMove}
          onTouchMove={onTextDragMove}
          onMouseUp={onTextDragEnd}
          onMouseLeave={onTextDragEnd}
          onTouchEnd={onTextDragEnd}
          style={{
            cursor: textDragging ? "grabbing" : "grab",
          }}
        >
          <div
            className='flex transition-transform ease-in-out'
            style={{
              width: `${textList.length * 100}%`,
              transform: `translateX(calc(-${
                textStep * textPercent
              }% + ${textDragOffset}px))`,
              transitionDuration:
                textDragging || instant ? "0ms" : `${durationMs}ms`,
            }}
          >
            {textList?.map((t, i) => (
              <div
                key={i}
                className='flex-shrink-0 flex flex-col items-center justify-center h-48 px-4'
                style={{ width: `${100 / textList.length}%` }}
              >
                <p className='text-2xl italic font-serif text-center'>
                  “{t.quote}”
                </p>
                <p className='mt-2 text-xs text-gray-600 text-center'>
                  {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className='p-4 opacity-30 cursor-pointer'>
          <TfiAngleRight size={30} />
        </button>
      </div>

      <div
        ref={logoContainerRef}
        className='overflow-hidden w-full'
        onMouseDown={onLogoDragStart}
        onTouchStart={onLogoDragStart}
        onMouseMove={onLogoDragMove}
        onTouchMove={onLogoDragMove}
        onMouseUp={onLogoDragEnd}
        onMouseLeave={onLogoDragEnd}
        onTouchEnd={onLogoDragEnd}
        className='my-[3rem]'
        style={{
          cursor: logoDragging ? "grabbing" : "grab",
        }}
      >
        <div
          className='flex transition-transform ease-in-out'
          style={{
            transform: `translateX(${
              -(logoStep - centerIndex) * logoWidthPx + logoDragOffset
            }px)`,
            transitionDuration:
              logoDragging || instant ? "0ms" : `${durationMs}ms`,
          }}
        >
          {logoList?.map((t, i) => {
            const orig = i % length;
            const currentOrig = ((logoStep % length) + length) % length;
            const isActive = orig === currentOrig;

            return (
              <div
                key={i}
                className={`flex-shrink-0 basis-[20%] p-2 flex justify-center items-center transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-30 grayscale"
                }`}
              >
                {t.logo}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

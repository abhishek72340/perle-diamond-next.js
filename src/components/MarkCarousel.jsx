"use client";
import { useRef, useLayoutEffect, useEffect } from "react";
import {marks} from '../data/markCarousel';
export default function MarksCarousel() {
  const containerRef = useRef(null);

  //Infinite‑loop & correct centering
  useLayoutEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    // 1. Clone once
    if (!c.dataset.cloned) {
      Array.from(c.children).forEach((child) => c.appendChild(child.cloneNode(true)));
      c.dataset.cloned = "true";
    }

    // 2. Compute the true scrollable width
    const scrollable = c.scrollWidth - c.clientWidth;
    // 3. Center ON that scrollable area
    c.scrollLeft = scrollable / 2;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        // wrap only at the edges of the scrollable area
        if (c.scrollLeft <= 0) {
          c.scrollLeft += scrollable;
        } else if (c.scrollLeft >= scrollable) {
          c.scrollLeft -= scrollable;
        }
        ticking = false;
      });
    };

    c.addEventListener("scroll", onScroll, { passive: true });
    return () => c.removeEventListener("scroll", onScroll);
  }, []);

  // 2️⃣ Pointer‑drag (no changes)
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    let isDown = false, startX = 0, scrollStart = 0;

    const onDown = (e) => {
      isDown = true; c.classList.add("active");
      startX = e.clientX - c.offsetLeft;
      scrollStart = c.scrollLeft;
    };
    const onUp = () => {
      isDown = false; c.classList.remove("active");
    };
    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      c.scrollLeft = scrollStart - (e.clientX - c.offsetLeft - startX);
    };

    c.addEventListener("pointerdown", onDown);
    c.addEventListener("pointerup", onUp);
    c.addEventListener("pointerleave", onUp);
    c.addEventListener("pointermove", onMove);
    return () => {
      c.removeEventListener("pointerdown", onDown);
      c.removeEventListener("pointerup", onUp);
      c.removeEventListener("pointerleave", onUp);
      c.removeEventListener("pointermove", onMove);
    };
  }, []);

  // 3️⃣ Wheel/trackpad flick (no changes)
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaX || e.deltaY;
      c.scrollLeft += delta;
    };

    c.addEventListener("wheel", onWheel, { passive: false });
    return () => c.removeEventListener("wheel", onWheel);
  }, []);

  // 4️⃣ Render with quarter‑card peeks + fades
  return (
    <div style={{ position: "relative", overflow: "hidden",padding:'5%' }}>
      {/* LEFT FADE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: "8.3333%",
          background: "linear-gradient(to right, #f3f3f3, transparent)",
          pointerEvents: "none",
          zIndex: 10,
          
        }}
      />
      {/* RIGHT FADE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: "8.3333%",
          background: "linear-gradient(to left, #f3f3f3, transparent)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        style={{
          paddingLeft: "8.3333%",
          paddingRight: "8.3333%",
          scrollBehavior: "auto",
        }}
      >
        {marks?.map(({ Icon, title, description }, idx) => (
          <div key={idx} className="flex-none w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow p-6 flex items-center gap-4 h-full">
              {Icon}
              <div className="flex flex-col gap-1">
                <h3 className="text-xs font-semibold">{title}</h3>
                <p className="text-xs">{description}</p>
                <a href="#" className="mt-2 inline-block text-xs underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

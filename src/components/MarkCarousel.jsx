"use client";
import { useRef, useEffect, useLayoutEffect } from "react";
import { marks } from "../data/markCarousel";

export default function MarksCarousel() {
  const containerRef = useRef(null);

  // Drag-to-scroll functionality
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const onDown = (e) => {
      isDragging = true;
      container.classList.add("active");
      startX = e.clientX - container.offsetLeft;
      scrollStart = container.scrollLeft;
    };

    const onUp = () => {
      isDragging = false;
      container.classList.remove("active");
    };

    const onMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.clientX - container.offsetLeft;
      container.scrollLeft = scrollStart - (x - startX);
    };

    container.addEventListener("pointerdown", onDown);
    container.addEventListener("pointerup", onUp);
    container.addEventListener("pointerleave", onUp);
    container.addEventListener("pointermove", onMove);

    return () => {
      container.removeEventListener("pointerdown", onDown);
      container.removeEventListener("pointerup", onUp);
      container.removeEventListener("pointerleave", onUp);
      container.removeEventListener("pointermove", onMove);
    };
  }, []);

  // Clone items for seamless infinite scroll
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || container.dataset.cloned === "true") return;

    const children = Array.from(container.children);
    children.forEach((child) => container.insertBefore(child.cloneNode(true), container.firstChild));
    children.forEach((child) => container.appendChild(child.cloneNode(true)));

    container.dataset.cloned = "true";
    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollWidth = container.scrollWidth;
        const singleSet = scrollWidth / 3;

        if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSet;
        } else if (container.scrollLeft >= singleSet * 2) {
          container.scrollLeft -= singleSet;
        }

        ticking = false;
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      role="region"
      aria-label="Carousel of brand highlights"
      className="relative overflow-hidden my-[6%] mx-[5%]"
      style={{ margin: "6% 5% 5% 2%" }}
    >
      <div
        ref={containerRef}
        role="list"
        aria-live="off"
        className="flex gap-[3rem] items-start whitespace-nowrap select-none overflow-x-auto"
        style={{
          padding: "1px",
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {marks?.map((mark, idx) => (
          <div
            key={idx}
            role="listitem"
            tabIndex={0}
            aria-roledescription="slide"
            aria-label={`${mark.title}: ${mark.description}`}
            className="inline-flex gap-4 items-center flex-shrink-0 mx-[5px] my-[10px] focus:outline-none"
          >
            <div className="mb-4">{mark.Icon}</div>
            <div className="flex flex-col gap-1 text-xs">
              <h3 className="font-semibold m-0">{mark.title}</h3>
              <p className="text-dark m-0">{mark.description}</p>
              <a
                href="#"
                className="underline font-medium"
                aria-label={`Learn more about ${mark.title}`}
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Left and right fade edges */}
      <div className="absolute inset-y-0 left-0 w-[80px] pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[80px] pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}

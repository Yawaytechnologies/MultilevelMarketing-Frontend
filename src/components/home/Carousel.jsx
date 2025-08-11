import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Local images (use your paths)
import Homecare from "../../assets/images/homecare.png";
import Skincare from "../../assets/images/Skincare.png";

export default function HeroCarousel() {
  // Slides live HERE (same file)
  const slides = [
    {
      image: Homecare,
      
    },
    {
      image: Skincare,
     
    },
  ];

  const [idx, setIdx] = useState(0);
  const AUTO_MS = 5000; // autoplay speed
  const TINT = "#FF6B2B7A"; // orange overlay—make "" to disable

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % slides.length),
      AUTO_MS
    );
    return () => clearInterval(t);
  }, [slides.length]);

  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[71svh] bg-white text-white overflow-hidden select-none">
      {/* Slides stacked on top of each other, fading */}
      {slides.map((s, i) => (
        <Slide
          key={i}
          active={i === idx}
          image={s.image}
          title={s.title}
          subtitle={s.subtitle}
          ctaLabel={s.ctaLabel}
          ctaHref={s.ctaHref}
          align={s.align}
          tintHex={TINT}
        />
      ))}

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 grid place-items-center
                       w-11 h-11 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur
                       border border-white/20"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 grid place-items-center
                       w-11 h-11 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur
                       border border-white/20"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === idx
                  ? "w-6 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

/** One slide (absolute, fades in/out) */
function Slide({
  active,
  image,

  
  
}) {
 

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                    ${
                      active ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
    >
      {/* Image: natural aspect, never stretched, centered */}
      <div className="absolute inset-0 grid place-items-center">
        <img
          src={image}
          alt=""
          className="max-w-full max-h-full w-auto h-auto object-contain"
          draggable="false"
          loading="eager"
        />
        <div className="absolute inset-0 pointer-events-none bg-black/30" />
      </div>
    </div>
  );
}

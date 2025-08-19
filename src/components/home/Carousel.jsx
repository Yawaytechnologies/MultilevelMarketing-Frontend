// src/components/home/HeroWithCategoryCardCarousel.jsx
import React, { useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Droplet, HeartPulse } from "lucide-react";

// your assets
import car from "../../assets/images/car1.png";
import carr from "../../assets/images/car2.png";
import Skincare from "../../assets/images/Skincare.png";
import Homecare from "../../assets/images/homecare.png";

const HERO = [
  {
    key: "skincare",
    image: car,
    card: {
      icon: Droplet,
      title: "Skincare",
      text: "Cleanser, serum & SPF routines.",
      img: Skincare,
      cta: { label: "Shop Skincare", href: "/products" },
    },
  },
  {
    key: "health",
    image: carr,
    card: {
      icon: HeartPulse,
      title: "Health Care",
      text: "Daily wellness & immunity support.",
      img: Homecare,
      cta: { label: "Shop Wellness", href: "/products" },
    },
  },
];

export default function HeroWithCategoryCardCarousel() {
  const [idx, setIdx] = useState(0);

  // autoplay
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO.length), 5000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIdx((i) => (i + 1) % HERO.length);
  const prev = () => setIdx((i) => (i - 1 + HERO.length) % HERO.length);

  const slide = useMemo(() => HERO[idx], [idx]);

  return (
    <div className="relative">
      {/* ---------- Background hero ---------- */}
      <section className="relative h-[64svh] sm:h-[72svh] overflow-hidden text-white">
        {HERO.map((s, i) => (
          <div
            key={s.key}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/25 to-black/0" />
          </div>
        ))}

        {/* bg arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 grid place-items-center
                     size-10 sm:size-11 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur
                     border border-white/20"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 grid place-items-center
                     size-10 sm:size-11 rounded-full bg-black/40 hover:bg-black/55 backdrop-blur
                     border border-white/20"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>

        {/* bg dots */}
        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO.map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === idx ? "w-6 bg-white" : "w-2.5 bg-white/65"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ---------- ONE overlay card (syncs with slide) ---------- */}
      <div
        className="
          absolute z-20 inset-x-0 top-2 sm:top-3 flex justify-center px-2
          md:inset-auto md:left-24 md:top-1/2 md:-translate-y-1/2 md:justify-start
        "
      >
        <SlideCard slide={slide.card} onPrev={prev} onNext={next} />
      </div>
    </div>
  );
}

/* Card sized for tiny phones, no shrinking image */
function SlideCard({ slide, onPrev, onNext }) {
  const Icon = slide.icon;

  return (
    <div
      className="
        pointer-events-auto rounded-2xl text-white backdrop-blur-md
        ring-1 ring-white/20 bg-white/12 shadow-[0_12px_28px_-12px_rgba(0,0,0,.55)]
        overflow-hidden
      "
      // fits viewport on 275–320–360px phones, caps at 420px on larger screens
      style={{ width: "min(92vw, 420px)" }}
    >
      {/* header row */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 pt-3 sm:pt-4">
        <div className="flex items-center gap-2 min-w-0">
          <span className="grid size-8 sm:size-9 place-items-center rounded-lg bg-white/18 shrink-0">
            <Icon className="w-4 h-4" />
          </span>
          <h3 className="truncate text-[15px] sm:text-lg font-semibold">
            {slide.title}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onPrev}
            aria-label="Previous"
            className="grid size-8 place-items-center rounded-md bg-white/12 hover:bg-white/20"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={onNext}
            aria-label="Next"
            className="grid size-8 place-items-center rounded-md bg-white/12 hover:bg-white/20"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

     {/* card body (image + veil) — no gaps */}
<div className="mt-3 relative overflow-hidden rounded-xl ring-1 ring-white/15">
  {/* Aspect lock ensures no letterboxing; change ratios if you like */}
  <div key={slide.key} className="relative w-full aspect-[16/9] sm:aspect-[5/3] animate-[fade_300ms_ease]">
    <img
      src={slide.img}
      alt={slide.title}
      className="absolute inset-0 h-full w-full object-contain block"  // 'block' kills baseline gap
      draggable="false"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
  </div>
</div>


      {/* caption + CTA */}
      <div className="px-3 sm:px-4 pb-3.5 sm:pb-4 pt-2.5">
        <p className="text-[12.5px] sm:text-sm text-white/90">
          {slide.text}
        </p>

        <div className="mt-3 flex items-center justify-end">
          <a
            href={slide.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900
                       px-3 py-1.5 text-[13px] sm:text-sm font-semibold hover:opacity-90"
            style={{ boxShadow: "0 2px 0 rgba(0,0,0,.08)" }}
          >
            {slide.cta.label}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 5l8 7-8 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

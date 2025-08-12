// src/components/products/Testimonials.jsx
import React, { useRef, useState, useEffect } from "react";

export default function Testimonials() {
  const items = [
    { n: "Aarav K.", q: "Protein tastes clean and mixes well. Better recovery after workouts." },
    { n: "Riya S.", q: "Radiance Day Cream feels light and non-sticky. SPF 30 is a bonus!" },
    { n: "Meera P.", q: "Herbal Immuno+ has become part of our family’s routine." },
    { n: "Ishaan V.", q: "Omega capsules feel premium. No aftertaste and great value." },
    { n: "Sneha L.", q: "Loved the lip color—comfortable wear, stays put through the day." },
    { n: "Devika N.", q: "Home care cleaner works great and smells fresh. Instant repurchase." },
  ];

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = items.length;

  const goTo = (idx) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-card]");
    const target = cards[idx];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setActive(idx);
    }
  };

  const next = () => goTo((active + 1) % count);
  const prev = () => goTo((active - 1 + count) % count);

  // Sync active dot when user scrolls/drag
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const cards = Array.from(el.querySelectorAll("[data-card]"));
        let bestIdx = 0;
        let bestDist = Infinity;
        cards.forEach((c, idx) => {
          const dist = Math.abs(c.offsetLeft - el.scrollLeft);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });
        setActive(bestIdx);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Centered heading + accent underline */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            What Customers Say
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,transparent,#FF6B2B,transparent)]" />
        </div>

        {/* Controls */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={prev}
            className="rounded-xl px-3 py-2 text-sm text-white/90 border border-white/20 hover:bg-white/10"
          >
            ‹ Prev
          </button>
          <button
            onClick={next}
            className="rounded-xl px-3 py-2 text-sm text-white/90 border border-white/20 hover:bg-white/10"
          >
            Next ›
          </button>
        </div>

        {/* Scroll-snap carousel */}
        <div
          ref={trackRef}
         className="mt-4 flex gap-6 overflow-x-auto overflow-y-visible py-2
         snap-x snap-mandatory no-scrollbar scroll-p-4 sm:scroll-p-6"
        >
          {items.map((t, i) => (
            <article
              key={t.n + i}
              data-card
              onClick={() => goTo(i)}
              onKeyDown={(e) => e.key === "Enter" && goTo(i)}
              role="button"
              tabIndex={0}
              className="
                group relative snap-start shrink-0 basis-[85%]
                sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]
                overflow-hidden rounded-2xl cursor-pointer
                border border-slate-400
                bg-[linear-gradient(180deg,#eeeeee,#e7e7e7)]
                shadow-[0_6px_24px_rgba(0,0,0,0.30)]
                transition-all duration-300 ease-out
                hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(255,107,43,0.5)]
                hover:border-[#FF6B2B] hover:ring-2 hover:ring-[#FF6B2B]/50
                focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40
              "
            >
              {/* Decorative quote */}
              <span
                aria-hidden
                className="absolute -top-4 -left-1 text-[110px] leading-none text-[#FF6B2B]/20 select-none"
              >
                “
              </span>

              <div className="p-6 relative">
                <p className="text-black/90 text-base leading-relaxed">“{t.q}”</p>
                <footer className="mt-4 text-sm font-medium text-black">— {t.n}</footer>
              </div>
            </article>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === active ? "w-6 bg-[#FF6B2B]" : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

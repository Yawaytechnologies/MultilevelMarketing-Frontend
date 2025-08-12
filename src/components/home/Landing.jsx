import React, { useEffect, useRef } from "react";
import Landing from "../../assets/images/landing.jpg";

export default function Hero() {
  const socials = ["Facebook", "Twitter", "Google+", "LinkedIn", "Instagram"];

  // refs for fade
  const heroRef = useRef(null);
  const panelRef = useRef(null);

  // smooth scroll below header
  const scrollToContent = () => {
    const target = document.getElementById("content-start");
    if (!target) return;
    const header = document.querySelector("[data-app-header]");
    const headerH = header?.offsetHeight ?? 72;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // fade on scroll: panel opacity 1 ➜ 0 as you scroll ~60% of viewport
  useEffect(() => {
    let rAF = 0;
    const FADE_DISTANCE = window.innerHeight * 0.9; // tweak to taste

    const onScroll = () => {
      if (rAF) return;
      rAF = requestAnimationFrame(() => {
        rAF = 0;
        const hero = heroRef.current;
        const panel = panelRef.current;
        if (!hero || !panel) return;

        // how far we've scrolled relative to the top of the hero
        const scrolled = Math.max(0, window.scrollY - hero.offsetTop);
        const t = Math.min(1, scrolled / FADE_DISTANCE); // 0..1
        const opacity = 1 - t;

        panel.style.opacity = String(opacity);
        // tiny drift for polish
        panel.style.transform = `translateY(${t * 16}px)`;
      });
    };

    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${Landing})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlays */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div
        className="absolute inset-0 pointer-events-none opacity-20
        [background-image:radial-gradient(white_1px,transparent_1px)]
        [background-size:24px_24px]"
      />

      {/* panel (this fades) */}
      <div
        ref={panelRef}
        className="relative z-10 w-[94%] sm:w-[92%] max-w-5xl px-5 sm:px-10 py-10 sm:py-16 bg-black/60
                   will-change-[opacity,transform]"
        style={{ opacity: 1, transform: "translateY(0px)" }}
      >
        {/* WE ARE + lines */}
        <div
          className="flex items-center justify-center gap-3 sm:gap-5 text-[0.75rem] sm:text-[0.85rem] tracking-[0.25em] sm:tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--hero-font)" }}
        >
          <span className="h-px w-10 sm:w-16 bg-white/40" />
          <span className="text-orange-500">We Are</span>
          <span className="h-px w-10 sm:w-16 bg-white/40" />
        </div>

        {/* Title */}
        <h1
          className="mt-4 font-black leading-[0.95] text-center select-none tracking-[0.02em] md:tracking-[0.05em]"
          style={{
            fontFamily: "var(--hero-font)",
            fontSize: "clamp(2.25rem, 12vw, 6rem)",
          }}
        >
          <span className="text-white">LAKSH</span>
          <span className="text-orange-500">RA</span>
        </h1>

        {/* separator */}
        <span className="block mx-auto my-5 h-[2px] w-20 sm:w-24 bg-white/35" />

        {/* Subtitle */}
        <div
          className="text-center text-orange-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] text-base sm:text-xl"
          style={{ fontFamily: "var(--hero-font)" }}
        >
          Multi Level Marketing
        </div>

        {/* Socials */}
        <ul
          className="
            mt-6 md:mt-8
            grid grid-cols-2 place-items-center gap-x-6 gap-y-3
            text-xs md:text-sm uppercase tracking-[0.12em] md:tracking-[0.15em]
            md:flex md:flex-nowrap md:justify-center md:gap-x-12
          "
          style={{ fontFamily: "var(--hero-font)" }}
        >
          {socials.map((label, i) => (
            <li
              key={label}
              className={`relative group justify-self-center ${
                i === socials.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <a
                href="#"
                aria-label={label}
                className="relative z-10 block px-2 py-2 md:px-4 md:py-3 transition-colors hover:text-orange-500 whitespace-nowrap"
              >
                {label}
              </a>
              {/* top line */}
              <span
                aria-hidden
                className="
                  pointer-events-none absolute left-1/2 top-1/2
                  block h-px w-10 md:w-12 bg-white/45
                  -translate-x-1/2 -translate-y-[10px] md:-translate-y-[14px]
                  transition-transform duration-300 ease-out
                  group-hover:translate-y-0 group-hover:rotate-45
                "
              />
              {/* bottom line */}
              <span
                aria-hidden
                className="
                  pointer-events-none absolute left-1/2 top-1/2
                  block h-px w-10 md:w-12 bg-white/45
                  -translate-x-1/2 translate-y-[10px] md:translate-y-[14px]
                  transition-transform duration-300 ease-out
                  group-hover:translate-y-0 group-hover:-rotate-45
                "
              />
            </li>
          ))}
        </ul>

        {/* down arrow */}
        <button
          onClick={scrollToContent}
          aria-label="Scroll down"
          className="mt-10 mx-auto block motion-safe:animate-bounce focus:outline-none"
        >
          <div className="w-9 h-9 border-b-2 border-r-2 rotate-45 border-white/90" />
        </button>
      </div>

      <div id="hero-edge" className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" />
    </section>
  );
}

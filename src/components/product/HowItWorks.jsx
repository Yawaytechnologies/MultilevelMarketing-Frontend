// src/components/products/HowItWorks.jsx
import React from "react";

export default function HowItWorks() {
  const steps = [
    { t: "Shop Quality Products", d: "Choose essentials across Wellness, Nutrition, Beauty & Home Care." },
    { t: "Earn PV/BV", d: "Every order adds PV/BV to your monthly totals for rewards & qualifications." },
    { t: "Share & Grow", d: "Refer customers or onboard distributors and build a sustainable network." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      {/* centered, larger title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          How It Works
        </h2>
        <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,transparent,#FF6B2B,transparent)]" />
      </div>

      {/* Desktop: horizontal stepper */}
      <div className="relative mt-10 hidden md:block">
        {/* Shimmering track */}
        <div className="pointer-events-none absolute left-0 right-0 top-5 h-[2px]
                        bg-[linear-gradient(90deg,transparent,#FF6B2B,transparent)]
                        gradient-shimmer opacity-60" />
        <div className="flex items-start justify-between">
          {steps.map((s, i) => (
            <div key={s.t} className="w-[31%] group">
              {/* Number badge with hover */}
              <div
                className="
                  relative z-10 inline-flex h-12 w-12 items-center justify-center
                  rounded-full bg-gradient-to-b from-[#FF6B2B] to-[#ff9b6b]
                  text-black font-extrabold
                  ring-4 ring-black/40
                  shadow-[0_6px_20px_rgba(255,107,43,0.35)]
                  transition-all duration-300
                  group-hover:scale-110 group-hover:-translate-y-0.5
                  group-hover:shadow-[0_10px_30px_rgba(255,107,43,0.6)]
                  group-hover:ring-[#FF6B2B]/70
                  focus:outline-none focus:ring-4 focus:ring-[#FF6B2B]/50
                "
                tabIndex={0}
                aria-label={`Step ${i + 1}`}
              >
                {i + 1}
              </div>

              <h3 className="mt-4 text-white font-semibold transition-colors duration-200 group-hover:text-white">
                {s.t}
              </h3>
              <p className="mt-1.5 text-white/70 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="relative mt-10 md:hidden">
        {/* Track */}
        <div className="pointer-events-none absolute left-6 top-0 bottom-0 w-[2px]
                        bg-[linear-gradient(180deg,transparent,#FF6B2B,transparent)]
                        gradient-shimmer opacity-60" />
        <ol className="space-y-8">
          {steps.map((s, i) => (
            <li key={s.t} className="relative pl-16">
              {/* Number badge with tap feedback */}
              <div
                className="
                  absolute left-0 top-0 inline-flex h-12 w-12 items-center justify-center
                  rounded-full bg-gradient-to-b from-[#FF6B2B] to-[#ff9b6b]
                  text-black font-extrabold
                  ring-4 ring-black/40
                  shadow-[0_6px_20px_rgba(255,107,43,0.35)]
                  transition-transform duration-200
                  active:scale-110
                "
                aria-hidden
              >
                {i + 1}
              </div>
              <h3 className="text-white font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-white/70 text-sm leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

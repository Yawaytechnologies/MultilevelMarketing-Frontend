// src/components/home/OurStory.jsx
import { MapPinned, Handshake, Factory, Smile } from "lucide-react";

const ACCENT = "#FF6B2B";

const ITEMS = [
  { icon: MapPinned, title: "20+ Years",
    desc: "Empowering people to live better, healthier lives with everyday essentials you can trust.",
    tint: "#FFE7DA" },
  { icon: Handshake, title: "Unleashing Entrepreneurship",
    desc: "A growing community of passionate distributors building sustainable, relationship-driven businesses.",
    tint: "#DFF3FF" },
  { icon: Factory, title: "Made in India",
    desc: "Quality-first manufacturing with rigorous standards and local sourcing wherever possible.",
    tint: "#EAF7E8" },
  { icon: Smile, title: "100% Satisfaction",
    desc: "Customer happiness is day-one priority — simple returns and a seamless product experience.",
    tint: "#FFF5D9" },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white text-neutral-900">
      {/* base wash */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #fffaf7 45%, #f8fbff 100%)",
        }}
      />

      {/* corner flares */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-28 h-[28rem] w-[28rem] rounded-full opacity-45"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,107,43,0.20), rgba(255,107,43,0.10) 55%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-[34rem] w-[34rem] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(115,155,255,0.18), rgba(115,155,255,0.08) 55%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* TOP vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-28"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0))",
          // alternative (softer): "radial-gradient(120% 80% at 50% 0%, rgba(0,0,0,.07), transparent 60%)"
        }}
      />

      {/* BOTTOM vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.08), rgba(0,0,0,0))",
        }}
      />

      {/* content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-8 sm:pt-10 pb-16 sm:pb-20">
        <h2
          className="text-center font-extrabold leading-tight tracking-tight"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
        >
          Our Story
        </h2>
        <div className="mx-auto mt-3 h-1.5 w-16 rounded-full" style={{ backgroundColor: ACCENT }} />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc, tint }, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-neutral-200 bg-white
                         px-6 py-8 shadow-[0_6px_20px_rgba(0,0,0,.05)]
                         hover:shadow-[0_14px_36px_rgba(0,0,0,.10)] hover:-translate-y-0.5
                         transition-all duration-300"
            >
              <div
                className="mb-5 inline-flex items-center justify-center rounded-2xl p-3 ring-1 ring-black/5"
                style={{ backgroundColor: tint }}
              >
                <Icon className="w-7 h-7" style={{ color: ACCENT }} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">{desc}</p>

              <span
                className="mt-6 block h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-16"
                style={{ backgroundColor: ACCENT }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

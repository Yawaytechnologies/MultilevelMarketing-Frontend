// Import necessary icons
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
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-8 sm:pt-10 pb-16 sm:pb-20">
        <h2
          className="text-center font-extrabold leading-tight tracking-tight"
          style={{ fontSize: "clamp(1.9rem, 4vw, 2.6rem)" }}
        >
          Our Story
        </h2>
        <div className="mx-auto mt-3 h-1.5 w-16 rounded-full" style={{ backgroundColor: ACCENT }} />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map((item, i) => (
            <article
              key={i}
              className="group relative rounded-2xl border border-neutral-200 bg-white
                         px-6 py-8 shadow-[0_6px_20px_rgba(0,0,0,.05)]
                         hover:shadow-[0_14px_36px_rgba(0,0,0,.10)] hover:-translate-y-0.5
                         transition-all duration-300"
            >
              <div
                className="mb-5 inline-flex items-center justify-center rounded-2xl p-3 ring-1 ring-black/5"
                style={{ backgroundColor: item.tint }}
              >
                {/* Directly using the icon */}
                <item.icon className="w-7 h-7" style={{ color: ACCENT }} />
              </div>

              <h3 className="text-xl font-extrabold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">{item.desc}</p>

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

// src/components/home/DiscoverProducts.jsx
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Droplet,
  Home,
  Apple,
  UserRound,
  ArrowRight,
} from "lucide-react";

const ACCENT = "#FF6B2B";

const CATEGORIES = [
  {
    key: "wellness",
    label: "Wellness",
    icon: HeartPulse,
    to: "/products?cat=wellness",
    img: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Supplements, immunity & daily health packs",
  },
  {
    key: "skincaree",
    label: "Skincare",
    icon: Droplet,
    to: "/products?cat=skincaree",
    img: "https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Cleanser, serum, moisturizer & SPF routines",
  },
  {
    key: "homecare",
    label: "Homecare",
    icon: Home,
    to: "/products?cat=homecare",
    img: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Laundry, kitchen & home hygiene essentials",
  },
  {
    key: "nutrition",
    label: "Nutrition",
    icon: Apple,
    to: "/products?cat=nutrition",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Protein, fiber, vitamins & balanced blends",
  },
  {
    key: "personal-care",
    label: "Personal Care",
    icon: UserRound,
    to: "/products?cat=personal-care",
    img: "https://images.pexels.com/photos/3738345/pexels-photo-3738345.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Body wash, shampoo, oral care & grooming",
  },
  {
    key: "all",
    label: "All Products",
    icon: ArrowRight,
    to: "/products",
    img: "", // no photo; use bubbles bg
    decor: "bubbles",
    desc: "Browse the complete catalog in one place",
  },
];

export default function DiscoverProducts() {
  return (
    <section id="discover" className="relative bg-white text-neutral-900">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-6 sm:pt-8 pb-16 sm:pb-24">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 uppercase tracking-[0.25em] text-xs sm:text-sm">
          <span className="h-px w-10 bg-neutral-300" />
          <span
            className="text-[color:var(--accent,theme(colors.orange.500))]"
            style={{ color: ACCENT }}
          >
            Discover our products
          </span>
          <span className="h-px w-10 bg-neutral-300" />
        </div>

        {/* Title */}
        <h2
          className="mt-4 text-center font-extrabold leading-tight"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Everyday essentials for wellness, skincare, home & more
        </h2>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryTile
              key={c.key}
              {...c}
              center={c.key === "all"} // center the bubbles card
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({
  to,
  label,
  icon: Icon,
  img,
  decor,
  desc,
  center = false,
}) {
  const isBubbles = decor === "bubbles";

  return (
    <Link
      to={to}
      className="group relative h-48 sm:h-56 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
      aria-label={label}
    >
      {/* ---------- BACKGROUND ---------- */}
      {isBubbles ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white" />
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-orange-500/25 to-pink-500/20 blur-xl" />
          <div className="absolute -left-20 bottom-[-28px] h-56 w-56 rounded-full bg-gradient-to-tr from-amber-500/25 to-orange-500/15 blur-xl" />
          <div className="absolute left-1/3 -bottom-10 h-28 w-28 rounded-full bg-gradient-to-tr from-rose-500/25 to-fuchsia-500/15 blur-lg" />
          <div className="absolute inset-0 bg-white/6" />
        </>
      ) : (
        <>
          {img ? (
            <img
              src={img}
              alt={label}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ) : null}

          {/* Full-card blur + subtle veil */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-xs
                       group-hover:bg-black/25 group-hover:backdrop-blur-xs
                       transition-[backdrop-filter,background-color] duration-300"
          />
          {/* gentle bottom lift if you ever add external CTA again */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/35 to-transparent" />
        </>
      )}

      {/* ---------- CONTENT (centered chip) ---------- */}
      {isBubbles ? (
  // Bubbles card — no white chip
  <div className="absolute inset-0 z-10 grid place-items-center p-6 text-center">
    <div className="max-w-xs">
      <div
        className="inline-grid size-11 place-items-center rounded-xl mb-2"
        style={{ backgroundColor: "#FF6B2B1A", color: ACCENT }}
      >
        <Icon className="w-5 h-5" />
      </div>

      <div className="text-2xl font-extrabold text-neutral-900">
        {label}
      </div>

      {desc && (
        <p className="mt-2 text-sm text-neutral-800">
          {desc}
        </p>
      )}

      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-1 rounded-md bg-neutral-900 text-white px-3 py-1.5 text-[13px] font-medium shadow-sm group-hover:opacity-95">
          Open
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  </div>
) : (
 
  <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
    <div className="max-w-[90%] sm:max-w-[75%] text-center">
      <div className="mx-auto mb-2 grid size-9 place-items-center rounded-lg bg-white/15 text-white">
        <Icon className="w-4 h-4" />
      </div>
      <div className="text-white text-xl sm:text-2xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,.6)]">
        {label}
      </div>
      {desc && (
        <p className="mt-1 text-sm leading-snug text-white/90 drop-shadow">
          {desc}
        </p>
      )}
      <div className="mt-3 flex justify-center">
        <span className="inline-flex items-center gap-1 rounded-md bg-white/95 text-neutral-900 px-3 py-1.5 text-[13px] font-medium shadow-sm group-hover:opacity-95">
          Shop
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  </div>
)}

    </Link>
  );
}

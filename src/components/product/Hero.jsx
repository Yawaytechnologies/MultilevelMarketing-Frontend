// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroMain from "../../../src/assets/heroMain.svg";
import wellness1 from "../../../src/assets/wellnessImg1.svg";
import sunscreen1 from "../../../src/assets/sunscreen1.svg";

export default function Home() {
    const rightRail = [
        {
            img: wellness1,
            title: "Wellness & Nutrition",
            caption: "Proteins • Omega • Herbal Support",
            to: "/category/wellness",
        },
        {
            img: sunscreen1,
            title: "Skin Care & Beauty",
            caption: "Day Cream • Serum • Lip Color",
            to: "/category/beauty",
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <section className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(1200px_600px_at_30%_-20%,#ffb781_0%,rgba(255,120,60,0.6)_30%,rgba(32,14,2,0.8)_70%),linear-gradient(180deg,#7a2a06_0%,#3a1506_100%)] ring-1 ring-white/10 mt-12">
                    {/* subtle grid overlay */}
                    <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(transparent,black)]">
                        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
                                    <path d="M64 0H0V64" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    {/* Content grid */}
                    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 px-6 md:px-10 pb-10">
                        {/* Left copy */}
                        <div className="lg:col-span-4 xl:col-span-3 py-6 md:py-10">
                            <p className="max-w-xs text-white/70 text-sm leading-relaxed md:text-left text-center md:text-inherit mx-auto md:mx-0">
                                From wellness and nutrition to beauty, personal and home care—shop
                                everyday essentials inspired by Modicare product families.
                            </p>
                        </div>

                        {/* Center hero */}
                        <div className="lg:col-span-5 xl:col-span-6 relative md:min-h-[500px] flex md:items-end md:justify-start">
                            <div className="relative w-full group">
                                {/* Headline */}
                                <h1
                                    className="
                    font-serif font-medium tracking-tight leading-tight
                    text-4xl sm:text-5xl md:text-7xl
                    text-white/90
                    text-center md:text-left
                    mx-auto md:mx-0
                    max-w-[14ch] md:max-w-[12ch]
                    pt-4
                    md:-ml-10 lg:-ml-16 xl:-ml-24
                    md:-translate-y-16
                  "
                                >
                                    <span className="block">Everyday</span>
                                    <span className="block">Essentials,</span>
                                    <span className="block">
                                        <span className="font-semibold" style={{ color: "#FF6B2B" }}>
                                            Elevated
                                        </span>
                                    </span>
                                </h1>

                                {/* Glow (desktop only matters) */}
                                <div
                                    className="
                    pointer-events-none md:absolute md:right-[6%] md:top-1/2 md:-translate-y-1/2
                    h-40 w-40 md:h-[65%] md:w-[65%]
                    mx-auto md:mx-0 mt-4 md:mt-0
                    rounded-full blur-3xl opacity-20
                    bg-[radial-gradient(closest-side,rgba(255,200,140,0.35),transparent)]
                    transition-opacity duration-500
                    group-hover:opacity-35
                  "
                                />

                                {/* Product hero image: static on mobile, absolute from md up */}
                                <div className="relative group">
                                    <img
                                        src={heroMain}
                                        alt="Assorted wellness, beauty, and home care products"
                                        className="
    select-none pointer-events-none
    relative mx-auto mt-0 -translate-y-45   /* ⬅️ moves image up on mobile */
    w-[78%] sm:w-[70%] max-w-[520px]
    object-contain
    drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
    transition-transform duration-700 ease-out
    group-hover:scale-[1.03]
    md:absolute md:right-[-3%] xl:md:right-[-4%]
    md:top-1/2 md:-translate-y-[75%]
    md:w-[72%] xl:md:w-[76%]
    md:max-w-[820px]
    md:group-hover:scale-[1.06] md:group-hover:-rotate-[1.2deg]
  "
                                    />
                                </div>

                                {/* CTAs: clean row on mobile; no negative offsets */}
                               <div
  className="
    mt-6                       /* keep normal spacing on mobile */
    md:mt-0 md:-translate-y-6  /* move UP a bit on desktop */
    lg:-translate-y-8          /* a touch higher on large screens */
    relative z-10
    transform
    flex flex-wrap items-center justify-center md:justify-start gap-3
  "
>
  <Link
    to="/"
    className="rounded-xl px-5 py-3 bg-white text-slate-900 font-medium hover:bg-[#FF6B2B] hover:text-white transition-colors duration-300"
  >
    Shop Now
  </Link>
  <Link
    to="/"
    className="rounded-xl px-5 py-3 border border-white/40 hover:bg-white/10"
  >
    Join &amp; Save
  </Link>
</div>


                            </div>
                        </div>

                        {/* Right rail */}
                        <aside
                            className="
    lg:col-span-3 xl:col-span-3
    py-6 md:py-10
    -mt-80 md:mt-0          /* ⬅️ move up on mobile ONLY */
  "
                        >
                            <p className="text-white/80 text-sm md:text-sm mb-4 md:mb-6 max-w-xs md:text-left text-center mx-auto md:mx-0">
                                Explore top categories and best-sellers picked by our community.
                            </p>

                            <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 text-sm">
                                <span>Next</span>
                                <span>›</span>
                            </div>

                            <div
                                className="
      mt-2 md:mt-3
      grid grid-cols-2 md:grid-cols-1
      gap-2 md:gap-3
    "
                            >
                                {rightRail.map((c) => (
                                    <Link
                                        key={c.title}
                                        to={c.to}
                                        className="
          group relative overflow-hidden rounded-xl
          bg-black/30 ring-1 ring-white/10
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]
          hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
        "
                                    >
                                        {/* SAME animation, just smaller height on mobile */}
                                        <img
                                            src={c.img}
                                            alt={c.title}
                                            className="
            h-28 md:h-40          /* ⬅️ shorter on mobile, original on desktop */
            w-full object-cover opacity-90
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06] group-hover:opacity-100
          "
                                        />

                                        <div
                                            className="
            pointer-events-none absolute inset-x-0 bottom-0 p-2
            bg-gradient-to-t from-black/70 via-black/20 to-transparent
            transition-opacity duration-300
            group-hover:from-black/80
          "
                                        >
                                            <div className="text-[11px] md:text-xs text-white/80">{c.caption}</div>
                                            <div className="text-sm md:text-sm font-medium text-white">{c.title}</div>
                                        </div>

                                        {/* keep the soft inset glow + sheen exactly the same */}
                                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
                                        <span className="pointer-events-none absolute -left-1/5 top-0 h-full w-1/3 translate-x-[-160%] rotate-6 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-out group-hover:translate-x-[260%]" />
                                    </Link>
                                ))}
                            </div>
                        </aside>
                    </div>

                    {/* Bottom info strip */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-10 py-5 text-white/80 text-xs border-t border-white/10">
                        <div>
                            <div className="opacity-90">Free Shipping over ₹999</div>
                            <div className="opacity-70">COD &amp; Prepaid Options</div>
                        </div>
                        <div className="hidden md:block">
                            <div className="opacity-90">Pan‑India Delivery</div>
                            <div className="opacity-70">GST Invoice • Genuine Products</div>
                        </div>
                        <div className="text-right md:text-left">
                            <div className="opacity-90">Wellness • Beauty • Home Care</div>
                            <div className="opacity-70">PV/BV eligible for members</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

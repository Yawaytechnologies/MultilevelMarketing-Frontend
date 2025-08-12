// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import heroMain from "../../../src/assets/heroMain.svg";
import wellness1 from "../../../src/assets/wellnessImg1.svg";
import sunscreen1 from "../../../src/assets/sunscreen1.svg";


/**
 * Note: This page is inspired by Modicare-style categories.
 * Do not use Modicare trademarks, logos, or copyrighted images without permission.
 */

export default function Home() {
    const rightRail = [
        {
            img: wellness1,
            title: "Wellness & Nutrition",
            caption: "Proteins • Omega • Herbal Support",
            to: "/category/wellness",
        }, {
            img: sunscreen1,
            title: "Skin Care & Beauty",
            caption: "Day Cream • Serum • Lip Color",
            to: "/category/beauty",
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Premium container */}
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
                            <p className="max-w-xs text-white/70 text-sm leading-relaxed">
                                From wellness and nutrition to beauty, personal and home care—shop
                                everyday essentials inspired by Modicare product families.
                            </p>
                        </div>

                        {/* Center hero */}
                        <div className="lg:col-span-5 xl:col-span-6 relative min-h-[380px] md:min-h-[500px] flex items-end justify-start">

                            {/* make the whole block a hover group */}
                            <div className="relative w-full group">
                                {/* Headline: pull further left into the dark zone */}
                                <h1
                                    className="
        font-serif leading-[0.95] font-medium tracking-tight
        text-5xl md:text-7xl text-white/90
        -ml-6 md:-ml-10 lg:-ml-16 xl:-ml-24 2xl:-ml-28   /* ← shift left */
        max-w-[12ch] 
         -translate-y-16 
      "
                                >
                                    <span className="block">Everyday</span>
                                    <span className="block">Essentials,</span>
                                    <span className="block">
                                        <span className="font-semibold" style={{ color: '#FF6B2B' }}>
                                            Elevated
                                        </span>

                                    </span>
                                </h1>

                                {/* Glow behind the product (animates on hover) */}
                                <div
                                    className="
        pointer-events-none absolute right-[6%] top-1/2 -translate-y-1/2
        h-[55%] w-[55%] md:h-[65%] md:w-[65%]
        rounded-full blur-3xl opacity-20
        bg-[radial-gradient(closest-side,rgba(255,200,140,0.35),transparent)]
        transition-opacity duration-500
        group-hover:opacity-35
      "
                                />



                                {/* Product hero image */}
                                <div className="relative group">
                                    <img
                                        src={heroMain}
                                        alt="Assorted wellness, beauty, and home care products"
                                        className="
      select-none pointer-events-none
      absolute right-[-2%] md:right-[-3%] xl:right-[-4%]
       top-1/2 -translate-y-[75%]
      w-[68%] md:w-[72%] xl:w-[76%]
      max-w-[820px]
      drop-shadow-[0_35px_50px_rgba(0,0,0,0.55)]
      object-contain
      transition-transform duration-700 ease-out will-change-transform
      group-hover:scale-[1.06] group-hover:-rotate-[1.2deg]
      
    "
                                    />
                                </div>




                                {/* CTAs (mobile-first) */}
                                <div className="mt-6 relative -top-14 -left-[17%] flex gap-3">

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
                                        Join & Save
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right rail: categories/products */}
                        {/* Right rail: categories/products */}
                        <aside className="lg:col-span-3 xl:col-span-3 py-6 md:py-10">
                            <p className="text-white/80 text-sm mb-6 max-w-xs">
                                Explore top categories and best-sellers picked by our community.
                            </p>

                            <div className="flex items-center gap-2 text-white/80 text-sm">
                                <span>Next</span>
                                <span>›</span>
                            </div>

                            <div className="mt-3 grid grid-cols-2 md:grid-cols-1 gap-3">
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
                                        {/* Image with gentle zoom */}
                                        <img
                                            src={c.img}
                                            alt={c.title}
                                            className="
            h-40 w-full object-cover opacity-90
            transition-transform duration-500 ease-out
            group-hover:scale-[1.06] group-hover:opacity-100
          "
                                        />

                                        {/* Bottom gradient & text */}
                                        <div className="
          pointer-events-none absolute inset-x-0 bottom-0 p-2
          bg-gradient-to-t from-black/70 via-black/20 to-transparent
          transition-opacity duration-300
          group-hover:from-black/80
        ">
                                            <div className="text-xs text-white/80">{c.caption}</div>
                                            <div className="text-sm font-medium text-white">{c.title}</div>
                                        </div>

                                        {/* Soft glow on hover */}
                                        <div
                                            className="
            pointer-events-none absolute inset-0 opacity-0
            group-hover:opacity-100 transition-opacity duration-300
            [box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)]
          "
                                        />

                                        {/* Subtle moving sheen */}
                                        <span
                                            className="
            pointer-events-none absolute -left-1/5 top-0 h-full w-1/3
            translate-x-[-160%] rotate-6
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            opacity-0 group-hover:opacity-100
            transition-transform duration-700 ease-out
            group-hover:translate-x-[260%]
          "
                                        />
                                    </Link>
                                ))}
                            </div>
                        </aside>

                    </div>

                    {/* Bottom info strip */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-10 py-5 text-white/80 text-xs border-t border-white/10">
                        <div>
                            <div className="opacity-90">Free Shipping over ₹999</div>
                            <div className="opacity-70">COD & Prepaid Options</div>
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

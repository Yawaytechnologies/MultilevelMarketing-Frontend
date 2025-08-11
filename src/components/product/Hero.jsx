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
  },{
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
                <section className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(1200px_600px_at_30%_-20%,#ffb781_0%,rgba(255,120,60,0.6)_30%,rgba(32,14,2,0.8)_70%),linear-gradient(180deg,#7a2a06_0%,#3a1506_100%)] ring-1 ring-white/10">
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

                    {/* Top bar */}
                    <header className="flex items-center justify-between gap-6 px-6 md:px-10 py-6">
                        <div className="flex items-center gap-3">
                            <div className="h-7 w-7 rounded-md bg-white/90 text-amber-900 grid place-items-center font-black">M</div>
                            <span className="font-semibold tracking-wide">ModernCare</span>
                        </div>

                        <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
                            <Link to="/category/wellness" className="hover:text-white">Wellness</Link>
                            <Link to="/category/nutrition" className="hover:text-white">Nutrition</Link>
                            <Link to="/category/beauty" className="hover:text-white">Skin Care & Beauty</Link>
                            <Link to="/category/homecare" className="hover:text-white">Home Care</Link>
                            <Link to="/category/personal" className="hover:text-white">Personal Care</Link>
                            <Link to="/category/hygiene" className="hover:text-white">Hygiene</Link>
                        </nav>

                        <div className="flex items-center gap-3">
                            <Link to="/catalog" className="rounded-lg border border-white/40 px-4 py-2 text-sm hover:bg-white/10">
                                View Catalogue
                            </Link>
                        </div>
                    </header>

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
                        <div className="lg:col-span-5 xl:col-span-6 relative min-h-[360px] md:min-h-[460px] flex items-center">
                            <div className="relative w-full">
                                <h1 className="font-serif leading-[0.95] font-medium tracking-tight text-5xl md:text-7xl text-white/90 -ml-4">
  <span className="block">Everyday</span>
  <span className="block">Essentials,</span>
  <span className="block">
    <span className="text-white font-semibold">Elevated</span>
  </span>
</h1>



                                {/* Product hero image */}
                                <img
                                    src={heroMain} // your imported PNG
                                    alt="Assorted wellness, beauty, and home care products"
                                    className="
  select-none pointer-events-none
  absolute right-[-4%] top-1/2 -translate-y-1/2
  w-[62%] max-w-[700px]
  hidden md:block
  drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]
  object-contain"
            />

                                {/* CTAs (mobile-first) */}
                                <div className="mt-6 flex gap-3">
                                    <Link
                                        to="/productpage"
                                        className="rounded-xl px-5 py-3 bg-white text-slate-900 font-medium hover:bg-white/90"
                                    >
                                        Shop Now
                                    </Link>
                                    <Link
                                        to="/join"
                                        className="rounded-xl px-5 py-3 border border-white/40 hover:bg-white/10"
                                    >
                                        Join & Save
                                    </Link>
                                </div>
                            </div>
                        </div>

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
                                        className="relative overflow-hidden rounded-xl bg-black/30 ring-1 ring-white/10 group"
                                    >
                                        <img
                                            src={c.img}
                                            alt={c.title}
                                            className="h-40 w-full object-cover opacity-90 group-hover:opacity-100 transition"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                                            <div className="text-xs">{c.caption}</div>
                                            <div className="text-sm font-medium">{c.title}</div>
                                        </div>
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

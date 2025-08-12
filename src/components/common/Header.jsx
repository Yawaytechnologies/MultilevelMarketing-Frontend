import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";


const NAV = [
  { label: "Home", href: "/home" },
  { label: "Products", href: "/products" },
  { label: "Join Us", href: "/joinus" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function HeaderKoyeb({ mode = "sticky" }) {
  const [open, setOpen] = useState(false);
  const wrapper =
    mode === "sticky" ? "sticky top-0 z-50" : "fixed inset-x-0 top-0 z-50";

  return (
    <header className={wrapper}>
      {/* page bg bar (light linen vibe) */}
      <div className="w-full bg-[#f3d7cbbf] text-white backdrop-blur-md border-b border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
          {/* left: brand */}
          <a href="#" className="flex items-center gap-2">
            {/* simple chevron-ish mark */}
            <div className="grid place-items-center size-9 rounded-md bg-orange-500 text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 10l8-6 8 6M4 16l8-6 8 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xl text-black font-extrabold tracking-tight">
              LAKSHRA
            </span>
          </a>

          {/* center: pill nav (desktop) */}
          <nav className="hidden lg:block flex-1">
            <ul
              className="mx-auto w-fit flex items-center gap-8
                         rounded-2xl bg-white px-5 py-3
                         ring-1 ring-neutral-500/20 shadow-inner
                          tracking-[0.18em] text-[15px] text-black/85 uppercase"
            >
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="hover:opacity-80 transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

<div className="flex items-center gap-3">

  {/* CART (separate button) */}
  <a
    href="/cart"
    className="relative inline-flex items-center justify-center
               rounded-md border border-neutral-300 bg-white/70 p-2
               text-neutral-800 hover:bg-white transition"
    aria-label="Cart"
  >
    <FiShoppingCart className="h-5 w-5" />
   
      <span
        className="absolute -top-1 -right-1 grid place-items-center
                   h-4 min-w-4 rounded-full bg-[#FF6B2B] text-white
                   text-[10px] font-bold leading-none px-1"
      >
        
      </span>
   
  </a>

 

  {/* mobile burger ... */}
</div>



          {/* right: login + sign up */}
          <div className="flex items-center gap-3">
            {/* SIGN UP button with slab drop shadow */}
            <a
              href="#"
              className="relative inline-flex items-center justify-center
             rounded-xl bg-[#FF6B2B] px-5 py-3 text-white font-mono
             uppercase tracking-[0.18em] text-[13px]
             shadow-[0_6px_0_0_#FF6B2BCC] hover:translate-y-[1px] hover:shadow-[0_5px_0_0_#FF6B2BBF]
             active:translate-y-[2px] active:shadow-[0_3px_0_0_#FF6B2B99]"
            >
              Account
            </a>

            {/* mobile burger */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden ml-1 rounded-md border border-neutral-300 bg-white/70 px-3 py-2 hover:bg-white"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile sheet */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-80" : "max-h-0"
          }`}
        >
          <ul className="px-4 pb-4 grid grid-cols-2 gap-2 text-sm uppercase tracking-[0.12em]">
            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="block rounded-lg bg-neutral-200/80 px-4 py-3 text-center hover:bg-neutral-300"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="col-span-2">
              <a
                href="#"
                className="block rounded-lg bg-neutral-900 text-white px-4 py-3 text-center"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

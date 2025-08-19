// src/components/common/Header.jsx
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Join Us", href: "/joinus" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const ACCENT = "#FF6B2B";

/* Small glowing pill */
function DemoDashCTA({ className = "" }) {
  return (
    <a
      href="/distributor/dashboard"
      aria-label="Open demo dashboard"
      className={`relative inline-flex items-center gap-2 rounded-full px-3.5 py-1.5
                  text-[12px] font-semibold text-white shadow-md ring-1 ring-white/10
                  hover:opacity-95 transition ${className}`}
      style={{ backgroundColor: ACCENT }}
    >
      {/* soft glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-md opacity-80 animate-pulse"
        style={{ backgroundColor: "rgba(255,107,43,.35)" }}
      />
      <span className="inline-block size-2 rounded-full bg-white/90 shadow-[0_0_0_2px_rgba(255,255,255,.25)]" />
      Demo&nbsp;Dashboard
    </a>
  );
}

export default function HeaderKoyeb({ mode = "sticky" }) {
  const [open, setOpen] = useState(false);
  const wrapper =
    mode === "sticky" ? "sticky top-0 z-50" : "fixed inset-x-0 top-0 z-50";

  return (
    <header data-app-header className={wrapper}>
      <div className="w-full bg-[#f3d7cbbf] text-white backdrop-blur-md border-b border-white/15">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-3">
          {/* left: brand */}
          <a href="/" className="flex items-center gap-2">
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

          {/* right: cart + account + demo + burger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CART */}
            <a
              href="/cart"
              className="relative inline-flex items-center justify-center
                         rounded-md border border-neutral-300 bg-white/80 p-2
                         text-neutral-800 hover:bg-white transition"
              aria-label="Cart"
            >
              <FiShoppingCart className="h-5 w-5" />
            </a>

            {/* Account */}
            <a
              href="/joinus"
              className="relative inline-flex items-center justify-center
                         rounded-xl bg-[#FF6B2B] px-5 py-2.5 text-white font-mono
                         uppercase tracking-[0.18em] text-[12px]
                         shadow-[0_6px_0_0_#FF6B2BCC] hover:translate-y-[1px] hover:shadow-[0_5px_0_0_#FF6B2BBF]
                         active:translate-y-[2px] active:shadow-[0_3px_0_0_#FF6B2B99]"
            >
              Account
            </a>

            {/* Desktop: small glowing demo pill */}
            <div className="hidden sm:block">
              <DemoDashCTA />
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden ml-1 rounded-md border border-neutral-300 bg-white/80 px-3 py-2 hover:bg-white"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile sheet */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="px-4 pb-4 grid grid-cols-2 gap-2 text-sm uppercase tracking-[0.12em]">
            {/* Demo pill at the top on mobile */}
            <li className="col-span-2 order-first">
              <DemoDashCTA className="w-full justify-center" />
            </li>

            {NAV.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="block rounded-lg bg-white text-neutral-900 px-4 py-3 text-center ring-1 ring-neutral-200 hover:bg-neutral-50"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              </li>
            ))}

            <li className="col-span-2">
              <a
                href="/signup"
                className="block rounded-lg bg-neutral-900 text-white px-4 py-3 text-center"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*
        Optional: floating mobile pill. Uncomment if you want it visible even
        when the sheet is closed.
        <DemoDashCTA className="lg:hidden fixed bottom-5 right-4 z-[70] shadow-lg" />
      */}
    </header>
  );
}

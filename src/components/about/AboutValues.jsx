// src/components/about/AboutValues.jsx
import React from "react";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#FF6B2B";
const ACCENT_GLOW = "rgba(255,107,43,0.35)";
const RING_BASE = "rgba(255,255,255,0.12)";
const CARD_BG = "rgba(18,18,20,0.70)";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Honest communication, ethical sourcing, and compliant claims.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    desc: "Rigor in formulation and production—consistency you can trust.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Customer-first and partner-friendly, with real support channels.",
  },
];

export default function AboutValues() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-5 md:grid-cols-3"
    >
      {values.map(({ icon: Icon, title, desc }, idx) => (
        <motion.article
          key={title}
          variants={item}
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent"
        >
          {/* inner card */}
          <div
            className="relative rounded-2xl p-6 ring-1"
            style={{ background: CARD_BG, borderColor: RING_BASE }}
          >
            {/* glow shadow */}
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: `0 0 40px ${ACCENT_GLOW}` }}
            />

            {/* top row: icon badge + index chip */}
            <div className="flex items-center justify-between">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-xl blur-md opacity-40"
                  style={{ background: ACCENT_GLOW }}
                />
                <div
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1"
                  style={{ background: "rgba(255,255,255,0.06)", borderColor: RING_BASE }}
                >
                  <Icon className="h-5 w-5" style={{ color: ACCENT }} />
                </div>
              </div>

              <span className="px-2 py-1 text-[11px] rounded-md bg-white/10 ring-1 ring-white/10 text-white/70">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            {/* title + copy */}
            <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>

            {/* accent underline */}
            <div className="mt-4 h-px w-16 rounded-full" style={{ background: ACCENT }} />

            {/* callout pill (optional) */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/60">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 10px ${ACCENT_GLOW}` }}
              />
              Core value
            </div>

            {/* sheen sweep */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/3 translate-x-[-160%] rotate-6
                         bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0
                         transition duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-[260%]"
            />
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
}

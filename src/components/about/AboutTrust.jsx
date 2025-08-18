import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const BADGES = [
  { k: "GMP", sub: "Good Manufacturing Practice", emoji: "🧪" },
  { k: "FSSAI", sub: "Food Safety (India)", emoji: "🍽️" },
  { k: "Cruelty-Free", sub: "No animal testing*", emoji: "🐰" },
  { k: "ISO 9001", sub: "Quality management", emoji: "✅" },
];

export default function AboutTrust() {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: reduce ? 0 : 0.08 } },
  };
  const badge = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-2xl ring-1 ring-white/10 p-6 md:p-8 bg-gradient-to-br from-neutral-900/60 to-black/60"
    >
      <h2 className="text-xl md:text-2xl font-semibold">Trust & Certifications</h2>
      <p className="text-white/70 text-sm mt-1">
        Indicators of our quality and compliance focus. <span className="text-white/50">*Replace with your official badges.</span>
      </p>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {BADGES.map((b) => (
          <motion.div
            key={b.k}
            variants={badge}
            whileHover={reduce ? {} : { y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="group relative overflow-hidden rounded-2xl p-4 bg-black/30 ring-1 ring-white/10 hover:ring-white/20"
          >
            {/* sheen */}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/3 translate-x-[-160%] rotate-6
                         bg-gradient-to-r from-transparent via-white/10 to-transparent
                         opacity-0 transition duration-700 ease-out
                         group-hover:opacity-100 group-hover:translate-x-[260%]"
            />
            <div className="text-2xl">{b.emoji}</div>
            <div className="mt-2 text-base sm:text-lg font-semibold tracking-tight">{b.k}</div>
            <div className="text-white/70 text-xs sm:text-sm">{b.sub}</div>
          </motion.div>
        ))}
      </div>

      <p className="text-white/50 text-[11px] mt-4">
        *Badges are placeholders for demo purposes. Replace with your verified certifications and links/policy documents.
      </p>
    </motion.section>
  );
}

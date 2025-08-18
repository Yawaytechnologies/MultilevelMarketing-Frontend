import React from "react";
// eslint-disable-next-line
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function AboutHero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden rounded-[28px] ring-1 ring-white/10
      bg-[radial-gradient(1200px_600px_at_30%_-20%,#ffb781_0%,rgba(255,120,60,0.6)_30%,rgba(32,14,2,0.85)_70%),linear-gradient(180deg,#7a2a06_0%,#3a1506_100%)]"
    >
      {/* subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(transparent,black)]" aria-hidden>
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M64 0H0V64" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* gentle animated glow orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-72 w-72 md:h-96 md:w-96 rounded-full blur-3xl
                   bg-[radial-gradient(closest-side,rgba(255,200,140,0.25),transparent)]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] bottom-[-8%] h-60 w-60 md:h-80 md:w-80 rounded-full blur-3xl
                   bg-[radial-gradient(closest-side,rgba(255,120,60,0.25),transparent)]"
        animate={{ scale: [1, 1.06, 1], opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={stagger}
        className="relative px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10"
      >
        {/* Left: copy */}
        <div className="lg:col-span-7 text-center md:text-left">
          <motion.p variants={fadeUp} className="text-white/70 text-sm">
            About
          </motion.p>

          <motion.h1
  variants={fadeUp}                          // keep your existing fadeUp if you have it
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  className="mt-2 text-4xl sm:text-5xl md:text-6xl font-serif leading-tight tracking-tight"
>
  The story of{" "}
  <motion.span
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
    }}
    className="inline-block font-semibold whitespace-nowrap"
  >
    {/* L a k s h */}
    {"Laksh".split("").map((ch, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
        }}
        className="inline-block"
      >
        {ch}
      </motion.span>
    ))}

    {/* r (accent, floats subtly) */}
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
      }}
      className="inline-block text-[#FF6B2B]"
      animate={{ y: [0, -1.5, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
    >
      r
    </motion.span>

    {/* a (accent, floats subtly with a tiny offset) */}
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
      }}
      className="inline-block text-[#FF6B2B]"
      animate={{ y: [0, -1.5, 0] }}
      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.12, repeatDelay: 0.6 }}
    >
      a
    </motion.span>
  </motion.span>
</motion.h1>


          <motion.p variants={fadeUp} className="mt-4 text-white/80 max-w-2xl mx-auto md:mx-0">
            We’re a community-first brand focused on everyday essentials—wellness, beauty, personal and home care.
            Our goal is simple: reliable products, transparent value, and an experience customers actually enjoy.
          </motion.p>
        </div>

        {/* Right: belief card (lifts on hover) */}
        <div className="lg:col-span-5">
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-6 h-full
                       backdrop-blur-[2px] hover:ring-white/20"
          >
            <h3 className="text-lg font-semibold">What we believe</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
              <li>Quality that’s consistent and tested</li>
              <li>Design that’s practical and delightful</li>
              <li>Long-term relationships over one-off sales</li>
            </ul>
            <p className="mt-4 text-white/70 text-xs">
              *This page is a demo—replace copy with your official brand story.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

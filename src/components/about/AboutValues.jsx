// src/components/about/AboutValues.jsx
import React from "react";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
// eslint-disable-next-line
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
      {values.map((val, idx) => {
   const Icon = val.icon;
   return (
     <motion.article key={val.title} variants={item} whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.99 }}
       className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent">
       <div
         className="relative rounded-2xl p-6 ring-1"
         style={{ background: CARD_BG, borderColor: RING_BASE }}
       >
         <div className="flex items-center justify-between">
           <div className="relative">
             <div className="absolute inset-0 rounded-xl blur-md opacity-40" style={{ background: ACCENT_GLOW }} />
             <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1"
                  style={{ background: "rgba(255,255,255,0.06)", borderColor: RING_BASE }}>
               <Icon className="h-5 w-5" style={{ color: ACCENT }} /> {/* ✅ now used */}
             </div>
           </div>
           <span className="px-2 py-1 text-[11px] rounded-md bg-white/10 ring-1 ring-white/10 text-white/70">
             {String(idx + 1).padStart(2, "0")}
           </span>
         </div>
         <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-tight">{val.title}</h3>
         <p className="mt-2 text-sm text-white/70 leading-relaxed">{val.desc}</p>
       </div>
     </motion.article>
   );
 })}
    </motion.section>
  );
}

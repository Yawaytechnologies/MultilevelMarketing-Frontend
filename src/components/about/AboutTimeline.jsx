// src/components/about/AboutTimeline.jsx

import React, { useRef } from "react";
// eslint-disable-next-line
import {motion,useReducedMotion,useScroll,useSpring,useTransform} from "framer-motion";
import { Rocket, Truck, ShieldCheck, Smartphone, MapPin } from "lucide-react";

/** ===== Brand tokens (tweak here) ===== */
const ACCENT = "#FF6B2B";
const ACCENT_GLOW = "rgba(255,107,43,0.35)";
const RING_BASE = "rgba(255,255,255,0.12)";
const CARD_BG = "rgba(18,18,20,0.70)";

/** Demo images — replace with your own assets */
const IMG = {
  launch:
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  fulfil:
    "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200",
  qa:
    "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200",
  training:
    "https://images.pexels.com/photos/5211438/pexels-photo-5211438.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

/** ===== MLM-focused milestones ===== */
const STEPS = [
  {
    year: "2019",
    title: "Brand Launch & PV/BV Engine",
    desc:
      "Opened with a curated product line and a transparent PV/BV plan focused on retail orders and customer value.",
    icon: Rocket,
    img: IMG.launch,
    bubble: "Launch • Plan Live",
  },
  {
    year: "2021",
    title: "Pan-India Fulfilment",
    desc:
      "Regional warehouses, COD + prepaid support, and improved SLAs to speed up deliveries for customers and consultants.",
    icon: Truck,
    img: IMG.fulfil,
    bubble: "Nationwide fulfilment",
  },
  {
    year: "2023",
    title: "Compliance & DSA-Aligned Policies",
    desc:
      "KYC for distributors, product claim controls, returns policy clarity, and training aligned with India’s Direct Selling Guidelines.",
    icon: ShieldCheck,
    img: IMG.qa,
    bubble: "Compliance first",
  },
  {
    year: "2025",
    title: "Digital Tools & Community",
    desc:
      "Mobile onboarding, replicated stores, rank recognition, and weekly webinars to build ethical, product-led growth.",
    icon: Smartphone,
    img: IMG.training,
    bubble: "Digital + Training",
  },
];

/** Semi-donut stat (e.g., training/compliance completion) */
function SemiDonut({ value = 0.9, label = "Compliance/Training Completion" }) {
  const radius = 48;
  const cx = 60;
  const cy = 60;
  const circumference = Math.PI * radius;
  const dash = circumference * value;
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 120 70" className="w-40 h-auto">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={ACCENT} stopOpacity="0.95" />
            <stop offset="100%" stopColor={ACCENT} stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {/* track */}
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* value */}
        <path
          d={`M ${cx - radius} ${cy} A ${radius} ${radius} 0 0 1 ${cx + radius} ${cy}`}
          fill="none"
          stroke="url(#grad)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>
      <div className="text-left">
        <div className="text-3xl md:text-4xl font-extrabold" style={{ color: ACCENT }}>
          {Math.round(value * 100)}%+
        </div>
        <div className="text-white/70 text-xs md:text-sm">{label}</div>
      </div>
    </div>
  );
}

export default function AboutTimeline() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  // Center line progress (mobile + desktop)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });
  const y = useTransform(progress, (v) => `calc(${v * 100}% - 8px)`);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.1,
      },
    },
  };
  const card = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -28 : 28,
      y: 12,
      scale: 0.98,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative rounded-2xl p-6 md:p-8 ring-1"
      style={{
        background:
          "linear-gradient(180deg, rgba(10,10,12,0.95), rgba(10,10,12,0.95)), radial-gradient(900px 500px at 20% -10%, rgba(34,34,40,0.45), transparent 60%)",
        borderColor: RING_BASE,
      }}
    >
      <h2 className="text-xl md:text-2xl font-semibold">Product-Led MLM Journey</h2>
      <p className="text-white/70 text-sm mt-1">
        Ethical growth milestones—operations, compliance, and community.
      </p>

      <div className="relative mt-6 md:mt-8">
        {/* Base center line */}
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-white/10 z-0" />

       {/* Glow + core fill + moving orb */}
{reduce ? (
  <div
    className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px]"
    style={{ background: ACCENT }}
  />
) : (
  <>
    <motion.div
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-full z-[5]"
      style={{
        width: 8,
        background: ACCENT_GLOW,
        filter: "blur(6px)",
        transformOrigin: "top",
        scaleY: progress,
      }}
    />
    <motion.div
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded z-10"
      style={{
        width: 3,
        background: ACCENT,
        transformOrigin: "top",
        scaleY: progress,
      }}
    />
    <motion.span
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 z-20 rounded-full ring-4"
      style={{
        y, // <-- merged here
        height: 12,
        width: 12,
        background: ACCENT,
        ringColor: "#0b0b0f",
        boxShadow: `0 0 18px ${ACCENT_GLOW}, 0 0 34px ${ACCENT_GLOW}`,
      }}
      animate={{
        boxShadow: [
          `0 0 14px ${ACCENT_GLOW}`,
          `0 0 28px ${ACCENT_GLOW}`,
          `0 0 14px ${ACCENT_GLOW}`,
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </>
)}

        {/* Collage grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-10"
        >
          {STEPS.map((s, i) => {
            const leftSide = i % 2 === 0;
            const Icon = s.icon;
            return (
              <motion.div
                key={s.year}
                custom={i}
                variants={card}
                className={`relative ${leftSide ? "md:pr-10 md:text-right" : "md:pl-10 md:order-2"}`}
              >
                {/* Dot on the center line */}
                <span
                  className="pointer-events-none absolute top-4 md:top-6 h-3 w-3 rounded-full ring-4 z-30 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0"
                  style={{
                    background: ACCENT,
                    ringColor: "#0b0b0f",
                    boxShadow: `0 0 12px ${ACCENT_GLOW}`,
                    [leftSide ? "right" : "left"]: "calc(50% + 0px)",
                  }}
                />

                {/* Image card (only the image clips; bubble can overflow) */}
                <article
                  className="group relative rounded-2xl ring-1 backdrop-blur-[2px]"
                  style={{ borderColor: RING_BASE, background: CARD_BG }}
                >
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-56 md:h-64 object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  </div>

                  {/* Speech-bubble label (now visible) */}
                  <div
                    className={`absolute ${leftSide ? "left-4" : "right-4"} top-3 z-20 text-neutral-900 font-semibold text-sm px-3 py-2 rounded-md`}
                    style={{ background: ACCENT, boxShadow: `0 8px 24px ${ACCENT_GLOW}` }}
                  >
                    {s.bubble}
                    <span
                      className={`absolute ${leftSide ? "left-3" : "right-3"} -bottom-2 z-20 block h-3 w-3 rotate-45`}
                      style={{ background: ACCENT }}
                    />
                  </div>

                  {/* Bottom band: icon + year + title */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className={`flex items-center ${leftSide ? "justify-end" : "justify-start"} gap-2`}>
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-xl bg-white/10 ring-1 ring-white/10">
                        <Icon className="h-4 w-4 text-white/90" />
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white/10 ring-1 ring-white/10 text-xs text-white/80">
                        {s.year}
                      </span>
                      <span className="hidden md:inline text-white/40 text-xs">•</span>
                      <h3 className="text-base md:text-lg font-semibold">{s.title}</h3>
                    </div>
                  </div>

                  {/* sheen sweep */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/3 translate-x-[-160%] rotate-6
                               bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0
                               transition duration-700 ease-out group-hover:opacity-100 group-hover:translate-x-[260%]"
                  />
                </article>

                {/* Stat block on fulfilment milestone */}
                {i === 1 && (
                  <div className={`mt-4 flex ${leftSide ? "justify-end" : "justify-start"} items-center gap-4`}>
                    <SemiDonut value={0.92} label="Orders dispatched within 24h" />
                  </div>
                )}

                {/* Network reach callout on last milestone */}
                {i === STEPS.length - 1 && (
                  <div className={`mt-4 flex ${leftSide ? "justify-end" : "justify-start"} items-center gap-3`}>
                    <span
                      className="inline-flex items-center justify-center h-9 w-9 rounded-xl ring-1"
                      style={{ background: "rgba(255,255,255,0.06)", borderColor: RING_BASE }}
                    >
                      <MapPin className="h-5 w-5" style={{ color: ACCENT }} />
                    </span>
                    <div className="text-sm">
                      <span className="font-semibold" style={{ color: ACCENT }}>
                        200+ cities
                      </span>{" "}
                      served via last-mile partners
                    </div>
                  </div>
                )}

                {/* Supporting copy */}
                <div className={`mt-3 text-white/70 text-sm ${leftSide ? "md:text-right" : "md:text-left"}`}>
                  {s.desc}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* gentle disclaimer (good practice for MLM) */}
      <p className="mt-6 text-[11px] text-white/50">
        Note: Growth is product-led. No income claims—earnings depend on retail sales, effort, and adherence to our Code
        of Ethics.
      </p>
    </section>
  );
}

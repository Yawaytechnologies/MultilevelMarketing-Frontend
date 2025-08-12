// src/components/products/JoinAndSaveCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ChevronRight } from "lucide-react";

export default function JoinAndSaveCTA() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Animated gradient border wrapper */}
        <div className="relative rounded-3xl p-[1px] bg-[linear-gradient(90deg,#FF6B2B,#ff9b6b,#FF6B2B)] gradient-shimmer">
          {/* Card */}
          <div className="group relative overflow-hidden rounded-[calc(theme(borderRadius.3xl)-1px)]
                          bg-[linear-gradient(180deg,#1a0d08,30%,#0c0704)]
                          ring-1 ring-white/10 text-white p-8 md:p-10
                          transition-shadow duration-300
                          shadow-[0_20px_60px_-20px_rgba(255,107,43,0.35)]
                          group-hover:shadow-[0_28px_70px_-18px_rgba(255,107,43,0.48)]">
            {/* soft glows (breathing) */}
            <div aria-hidden
                 className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full
                            bg-[#FF6B2B]/20 blur-3xl animate-pulse-soft" />
            <div aria-hidden
                 className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full
                            bg-white/5 blur-3xl animate-pulse-soft" />

            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Copy */}
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-semibold">Join &amp; Save More</h3>
                <p className="mt-2 text-white/80 max-w-xl">
                  Become a distributor to unlock DP pricing, earn PV/BV on every purchase, and qualify for bonuses.
                </p>

                <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-white/85">
                  {["DP member pricing","PV/BV on every order","Bonus eligibility","Early access to offers"].map((t,i)=>(
                    <li key={i} className="flex items-center gap-2 transition-transform duration-200 group-hover:-translate-y-[1px]">
                      <CheckCircle className="h-4 w-4 text-[#FF6B2B]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="md:col-span-2 flex flex-col sm:flex-row md:justify-end gap-3">
                <Link
                  to="/join"
                  className="btn-sheen inline-flex items-center justify-center gap-2
                             rounded-xl px-5 py-3
                             bg-[#FF6B2B] text-white font-medium
                             shadow-[0_10px_30px_rgba(255,107,43,0.35)]
                             transition-all duration-300
                             hover:shadow-[0_18px_40px_rgba(255,107,43,0.5)]
                             hover:scale-[1.02] active:scale-[0.99]
                             focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40">
                  Join Now <ChevronRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/plan"
                  className="inline-flex items-center justify-center
                             rounded-xl px-5 py-3
                             border border-white/30 text-white
                             hover:bg-white/10 transition
                             focus:outline-none focus:ring-2 focus:ring-white/20">
                  View Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/products/ComplianceNote.jsx
import React from "react";
import { AlertTriangle } from "lucide-react";

export default function ComplianceNote({
  title = "Compliance Notice",
}) {
  return (
    <section
      aria-labelledby="compliance-title"
      role="note"
      className="max-w-6xl mx-auto px-6 pb-16"
    >
      {/* Outer gradient rim + soft glow */}
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-[0_10px_30px_-10px_rgba(234,88,12,0.55)]">
        {/* Glassy dark card */}
        <div className="relative rounded-[calc(theme(borderRadius.3xl)-1px)] bg-[#0f0a07] ring-1 ring-white/10 text-white px-5 py-4 md:px-6 md:py-5 overflow-hidden">
          {/* subtle top sheen */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          {/* dotted texture fade */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.5) 45%, transparent 80%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.5) 45%, transparent 80%)",
            }}
          />
          {/* bottom orange glow */}
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-[40px] bg-[radial-gradient(50%_60%_at_50%_100%,rgba(234,88,12,0.85),rgba(234,88,12,0)_60%)] blur-[22px]" />

          {/* Content */}
          <div className="relative flex items-start gap-3">
            <div className="mt-0.5 shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 ring-1 ring-orange-500/30">
              <AlertTriangle className="h-4 w-4 text-orange-400" />
            </div>

            <div className="flex-1">
              <h3 id="compliance-title" className="font-semibold text-lg">
                {title}
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Products are the core of our business. Earnings are not guaranteed and depend on
                personal and team sales, adherence to our plan and Code of Ethics, and customer
                satisfaction. Avoid medical, income, or exaggerated claims.
              </p>

              <ul className="mt-2 text-sm text-white/75 list-disc pl-5 space-y-1">
                <li>No medical or disease-treatment claims.</li>
                <li>No income guarantees or implied returns.</li>
                <li>Use approved materials; follow the Code of Ethics.</li>
              </ul>

              <div className="mt-3">
                <a
                  href="/terms"
                  className="inline-block text-sm text-amber-300 hover:text-white hover:underline transition"
                >
                  Read Terms &amp; Code of Ethics →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

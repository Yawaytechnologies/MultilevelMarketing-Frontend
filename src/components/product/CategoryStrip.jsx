// src/components/products/CategoryStrip.jsx
import React from "react";

export default function CategoryStrip({
  categories = [],
  active = null,
  onCategory,
  showAll = true,
  sticky = true,
}) {
  const items = showAll ? ["All", ...categories.filter(Boolean)] : categories.filter((c) => c !== "All");

  return (
    <section
      className={`mx-auto px-4 sm:px-6 ${
        sticky ? "sticky top-0 z-30" : ""
      }`}
      aria-label="Category filters"
    >
      <div className="rounded-2xl border border-white/10 bg-[#0b0b0f]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0f]/60 shadow-lg">
        <div className="flex items-center gap-3 px-3 sm:px-4 py-3 sm:py-4">
          {/* Label (like Search Filters header) */}
          <span className="hidden md:inline text-sm font-medium text-slate-300">
            Filters
          </span>

          {/* Scrollable chip row */}
          <div
            className="flex-1 overflow-x-auto scrollbar-none"
            role="tablist"
            aria-label="Categories"
          >
            <div className="flex items-center gap-2 sm:gap-3 pr-2">
              {items.map((c) => {
                const isActive = active === c || (!active && c === "All");
                return (
                  <button
                    key={c}
                    onClick={() => onCategory?.(c)}
                    role="tab"
                    aria-pressed={isActive}
                    aria-selected={isActive}
                    className={[
                      // base chip
                      "whitespace-nowrap rounded-full px-3.5 sm:px-4 py-2 text-sm sm:text-[0.95rem] border transition",
                      "outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60",
                      // dark theme surface
                      "bg-slate-900/60 border-white/10 text-slate-200 hover:border-white/20",
                      // active state
                      isActive
                        ? "bg-violet-600 text-white border-violet-600 shadow-[0_0_0_3px_rgba(124,58,237,0.25)]"
                        : "",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clear button (aligns with search filter UIs) */}
          {active && active !== "All" ? (
            <button
              onClick={() => onCategory?.("All")}
              className="text-xs sm:text-sm rounded-full px-3 py-2 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition"
              title="Clear filters"
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

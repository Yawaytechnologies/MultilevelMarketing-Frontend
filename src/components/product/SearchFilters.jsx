// src/components/products/SearchFilters.jsx
import React, { useMemo } from "react";

const ICONS = {
  Wellness: "🥤",
  Beauty: "💄",
  "Skin Care": "🧖",
  "Home Care": "🧽",
  Nutrition: "🍎",
  "Personal Care": "🧴",
  All: "🏷️",
};

export default function SearchFilters({
  categories = [],
  active,
  onCategory,
  query,
  onQuery,
}) {
  // ✅ Remove duplicates and empty values
  const chips = useMemo(
    () => Array.from(new Set(["All", ...categories.filter(Boolean)])),
    [categories]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-black py-8">
      <div className="mx-auto mt-0 w-full max-w-6xl px-4">
        <div className="rounded-3xl bg-gradient-to-b from-[#4a1e10]/95 to-[#1e0c07]/95 p-5 md:p-8 border border-white/10 backdrop-blur-sm">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
            <span>✨</span>
            <span>Smart Search</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="relative flex-1">
              <svg
                aria-hidden
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>

              <input
                value={query}
                onChange={(e) => onQuery?.(e.target.value)}
                placeholder="Describe your needs"
                aria-label="Describe your needs"
                className="w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 py-4 text-[15px] text-slate-900 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:ring-4 focus:ring-sky-200/60 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="shrink-0 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3 text-white text-[15px] font-semibold shadow-lg hover:shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="Search"
            >
              <span className="inline-flex items-center gap-2">
                <svg
                  aria-hidden
                  className="h-[18px] w-[18px] opacity-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                Search
              </span>
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {chips.map((c) => {
              const isActive = active ? active === c : c === "All";
              return (
                <button
                  key={`chip-${c}`} // ✅ Safe key
                  onClick={() => onCategory?.(c)}
                  aria-pressed={isActive}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm transition
                    ${
                      isActive
                        ? "bg-white text-slate-900 border-sky-300 ring-2 ring-sky-200"
                        : "bg-white/90 text-slate-700 border-slate-200 hover:bg-white"
                    } shadow-sm`}
                >
                  <span className="text-base leading-none">
                    {ICONS[c] || "🏷️"}
                  </span>
                  <span className="whitespace-nowrap">{c}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function FAQ() {
  // Memoize the initialization of 'items'
  const items = useMemo(() => [
    { q: "What are PV and BV?", a: "PV (Point Value) and BV (Business Volume) are assigned to products and help compute qualifications and bonuses.", c: "Program" },
    { q: "Do I need to recruit to buy products?", a: "No. Retail customers can buy at MRP. Distributors get DP and can also earn PV/BV.", c: "Ordering" },
    { q: "Are there refunds/returns?", a: "Yes—refer to our return/refund policy in Terms & Conditions.", c: "Orders & Pricing" },
    { q: "Is this an investment or a job?", a: "No. Direct selling is product-based retail; earnings depend on sales volume, effort and plan compliance.", c: "Program" },
  ], []); // Empty array as dependency ensures it is only initialized once

  // Memoize categories based on the items list
  const categories = useMemo(() => ["All", ...new Set(items.map(i => i.c))], [items]);

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");
  const [openKey, setOpenKey] = useState(null); // guarantees one-at-a-time; clicking same closes it
  const contentRefs = useRef({}); // measure heights per panel

  // Memoize filtered results based on query, category, and items
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(i => {
      const inCat = cat === "All" || i.c === cat;
      const inText = !q || i.q.toLowerCase().includes(q) || i.a.toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [items, query, cat]); // Only re-run when 'items', 'query', or 'cat' change

  const toggle = (key) => setOpenKey(prev => (prev === key ? null : key));

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">FAQs</h2>
        <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,transparent,#FF6B2B,transparent)]" />
      </div>

      {/* Layout */}
      <div className="mt-8 grid gap-8 md:grid-cols-12">
        {/* Sidebar */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="rounded-2xl bg-[linear-gradient(180deg,#140a06,#0c0704)] border border-white/10 p-3">
            <div className="text-xs uppercase tracking-wider text-white/60 px-2 mb-2">Categories</div>
            <div className="flex flex-wrap md:flex-col gap-2">
              {categories.map((c) => {
                const active = cat === c;
                return (
                  <button
                    key={c}
                    onClick={() => { setCat(c); setOpenKey(null); }}
                    className={`text-sm px-3 py-2 rounded-full transition
                      ${active
                        ? "bg-[#FF6B2B] text-white shadow-[0_10px_20px_rgba(255,107,43,0.35)]"
                        : "bg-white/5 text-white/80 hover:bg-white/10"}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right: search + accordion */}
        <div className="md:col-span-8 lg:col-span-9 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 pointer-events-none" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpenKey(null); }}
              placeholder="Search questions (e.g., PV/BV, returns)…"
              className="w-full rounded-2xl border border-white/10 bg-white/5 text-white placeholder-white/40
                         pl-12 pr-4 py-3 outline-none focus:ring-4 focus:ring-[#FF6B2B]/20 focus:border-[#FF6B2B]/60"
            />
          </div>

          {/* Accordion */}
          <div className="grid gap-4">
            {filtered.map((f, idx) => {
              const key = `${f.c}-${f.q}-${idx}`;
              const isOpen = openKey === key;
              const h = contentRefs.current[key]?.scrollHeight ?? 0;

              return (
                <article
                  key={key}
                  className={`relative overflow-hidden rounded-2xl transition-colors
                              bg-[linear-gradient(180deg,#1a0d08,30%,#0c0704)]
                              border ${isOpen ? "border-[#FF6B2B] ring-2 ring-[#FF6B2B]/40" : "border-white/10 hover:border-white/20"}`}
                >
                  <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] bg-[linear-gradient(180deg,#FF6B2B,#ff9b6b)] opacity-80" />

                  <button
                    type="button"
                    onClick={() => toggle(key)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${idx}`}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  >
                    <span className="text-white font-medium">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180 text-[#FF6B2B]" : "text-white/70"}`} />
                  </button>

                  {/* Smooth height animation via measured max-height */}
                  <div
                    id={`faq-${idx}`}
                    ref={(el) => (contentRefs.current[key] = el)}
                    style={{ maxHeight: isOpen ? `${h}px` : 0 }}
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-80"}`}
                  >
                    <div className="px-5 pb-5 text-white/80 leading-relaxed">
                      {f.a}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

const items = [
  { k: "Customers Served", v: "50K+", sub: "across India" },
  { k: "Products", v: "120+", sub: "active catalogue" },
  { k: "Cities", v: "80+", sub: "and growing" },
  { k: "Satisfaction", v: "98%", sub: "CSAT last quarter" },
];

export default function AboutMetrics() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.k}
          className="rounded-2xl bg-black/30 ring-1 ring-white/10 p-5 hover:ring-white/20 transition"
        >
          <div className="text-white/60 text-xs">{it.k}</div>
          <div className="mt-2 text-3xl font-semibold">{it.v}</div>
          <div className="text-white/60 text-sm">{it.sub}</div>
        </div>
      ))}
    </section>
  );
}

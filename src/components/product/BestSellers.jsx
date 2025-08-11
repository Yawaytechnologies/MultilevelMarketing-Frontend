// src/components/products/BestSellers.jsx
import React, { useMemo } from "react";

const currency = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function BestSellers({ products, ids, onAdd }) {
  const best = useMemo(() => ids.map((id) => products.find((p) => p.id === id)).filter(Boolean), [ids, products]);

  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Best Sellers</h2>
        <p className="mt-1 text-slate-600">Customer favorites with high re‑order rates and strong PV/BV value.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {best.map((p) => (
            <div key={p.id} className="border rounded-2xl p-4 bg-white">
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden rounded-xl">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="text-sm text-slate-600">{p.category}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">PV/BV</div>
                  <div className="font-semibold">
                    {p.pv} / {p.bv}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-emerald-600 font-bold">{currency(p.dp)}</div>
                <button
                  onClick={() => onAdd?.(p)}
                  className="rounded-xl px-4 py-2 bg-violet-600 text-white hover:bg-violet-700"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/products/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const currency = (n) => `₹${n.toLocaleString("en-IN")}`;

export default function ProductCard({ product, onAdd }) {
  const p = product;
  return (
    <article className="group border rounded-2xl overflow-hidden hover:shadow-xl transition">
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={p.img}
          alt={p.title}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-1 text-sm text-slate-600">{p.desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags?.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm line-through text-slate-500">MRP {currency(p.mrp)}</div>
            <div className="text-xl font-bold text-emerald-600">DP {currency(p.dp)}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">PV</div>
            <div className="font-semibold">{p.pv}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">BV</div>
            <div className="font-semibold">{p.bv}</div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onAdd?.(p)}
            className="flex-1 rounded-xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800"
          >
            Add to Cart
          </button>
          <Link to={`/product/${p.id}`} className="rounded-xl px-4 py-2 border hover:bg-slate-50">
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

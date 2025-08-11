// src/components/products/ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items, onAdd }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">Shop Products</h2>
        <p className="text-sm text-slate-500">{items.length} item(s)</p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

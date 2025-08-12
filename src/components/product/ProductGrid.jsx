// src/components/products/ProductGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items = [], onAdd }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      {/* Centered, larger title + accent underline */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          Shop Products
        </h2>
        <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,transparent,#FF6B2B,transparent)]" />
        <p className="mt-2 text-white/70 text-sm">{items.length} item(s)</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

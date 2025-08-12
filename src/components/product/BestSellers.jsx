// src/components/products/BestSellers.jsx
import React, { useMemo } from "react";
import ProductCard from "./ProductCard";

export default function BestSellers({ products = [], ids = [], onAdd }) {
  const best = useMemo(
    () => ids.map((id) => products.find((p) => p?.id === id)).filter(Boolean),
    [ids, products]
  );

  return (
    <section className="bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Centered, larger title + accent underline */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Best Sellers
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-24 rounded-full bg-[linear-gradient(90deg,transparent,#FF6B2B,transparent)]" />
        </div>

        <p className="mt-2 text-white/70 text-center">
          Customer favorites with high re-order rates and strong PV/BV value.
        </p>

        {best.length === 0 ? (
          <div className="mt-8 text-sm text-white/60 text-center">
            No best sellers found. Check your <code>ids</code> or product data.
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {best.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={onAdd} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

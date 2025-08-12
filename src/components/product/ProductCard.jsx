// src/components/products/ProductCard.jsx
import React, { useState, useMemo } from "react";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  const {
    title,
    category,
    price,
    compareAt,
    images = [],
    badge,
  } = product;

  const [liked, setLiked] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const mainImage = useMemo(
    () => images[activeIdx] ?? images[0],
    [images, activeIdx]
  );

  const handleAdd = () => onAdd?.({ ...product, image: mainImage });

  return (
    <article
  className="
    group relative overflow-hidden rounded-2xl
    border border-slate-300 bg-[#f5f5f5]
    shadow-[0_6px_24px_rgba(0,0,0,0.25)]
    transition-all duration-300 ease-out
    hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(255,107,43,0.5)]
    hover:border-[#FF6B2B] hover:ring-2 hover:ring-[#FF6B2B]/50
  "
>
  {/* wishlist + badge */}
  <button
    aria-label="Add to wishlist"
    onClick={() => setLiked((v) => !v)}
    className="
      absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center
      rounded-full border border-slate-400 bg-white/80
      transition-transform duration-200 hover:scale-105 active:scale-95
    "
  >
    <Heart
      className={`h-4 w-4 transition-colors ${
        liked ? "fill-red-500 text-red-500" : "text-slate-600"
      }`}
    />
  </button>

  {badge && (
    <span className="absolute left-3 top-3 z-10 rounded-md bg-[#FF6B2B] px-2 py-1 text-[11px] font-semibold text-white">
      {badge}
    </span>
  )}

  {/* image area */}
  <div className="bg-[#e5e5e5]">
    <div
      className="
        h-56 sm:h-64 flex items-center justify-center
        will-change-transform
      "
    >
      {mainImage ? (
        <img
          src={mainImage}
          alt={title}
          className="
            h-full w-full object-contain p-6
            transition-transform duration-300 ease-out
            group-hover:scale-[1.05]
          "
          draggable="false"
        />
      ) : (
        <div className="h-full w-full" />
      )}
    </div>

    {/* thumbnails */}
    {images.length > 0 && (
      <div className="flex items-center gap-2 px-4 pb-4 -mt-2">
        {images.slice(0, 4).map((src, i) => {
          const active = activeIdx === i;
          return (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`
                h-10 w-12 rounded-md border transition-all duration-200
                ${
                  active
                    ? "border-black ring-2 ring-[#FF6B2B]/30"
                    : "border-slate-400 hover:border-[#FF6B2B] hover:-translate-y-0.5"
                }
              `}
            >
              <img
                src={src}
                alt=""
                className={`h-full w-full object-contain p-1.5 ${
                  active ? "" : "opacity-90 group-hover:opacity-100"
                }`}
              />
            </button>
          );
        })}
        {images.length > 4 && (
          <span className="ml-1 text-xs text-slate-500">
            +{images.length - 4}
          </span>
        )}
      </div>
    )}
  </div>

  {/* content */}
  <div className="px-4 pt-3 pb-4">
    {category && (
      <p className="text-[11px] uppercase tracking-wide text-slate-500">
        {category}
      </p>
    )}
    <h3 className="mt-1 text-base font-semibold text-black line-clamp-1">
      {title}
    </h3>

    <div className="mt-2 flex items-baseline gap-2">
      <span className="text-lg font-bold text-black">
        ${price?.toFixed?.(2) ?? price}
      </span>
      {compareAt && (
        <span className="text-sm text-slate-500 line-through">
          ${Number(compareAt).toFixed(2)}
        </span>
      )}
    </div>

    <button
      onClick={handleAdd}
      className="
        mt-3 inline-flex w-full items-center justify-center gap-2
        rounded-xl border border-slate-400 bg-white px-4 py-2.5
        text-sm font-semibold text-black
        transition-all duration-300
        hover:bg-[#FF6B2B] hover:text-white hover:border-[#FF6B2B]
        hover:shadow-[0_10px_20px_rgba(255,107,43,0.4)]
        group-hover:-translate-y-0.5 active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/30
      "
    >
      <ShoppingCart className="h-4 w-4" />
      ADD TO CART
    </button>
  </div>
</article>

  );
}

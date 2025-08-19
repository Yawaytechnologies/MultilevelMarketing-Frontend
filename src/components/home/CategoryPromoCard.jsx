// src/components/common/CategoryPromoCard.jsx
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/**
 * CategoryPromoCard
 * ---------------------------------------------
 * A glassy promo card with:
 *  - icon + title
 *  - responsive image with fixed aspect ratio (no top/bottom gaps)
 *  - caption text
 *  - CTA button
 *  - optional prev/next controls (only show if handlers are passed)
 *
 * Props:
 *  - icon: React component (e.g. from lucide-react)
 *  - title: string
 *  - text: string
 *  - img: string (image URL)
 *  - cta: { label: string, href?: string }
 *  - onCta?: () => void   // if provided, button will call this instead of href
 *  - onPrev?: () => void  // if provided, shows a "previous" arrow
 *  - onNext?: () => void  // if provided, shows a "next" arrow
 *  - className?: string   // extra classes for outer wrapper
 *  - width?: string       // CSS width (default: min(92vw, 420px))
 *  - ratioBase?: string   // tailwind aspect class for base (default: aspect-[16/9])
 *  - ratioSm?: string     // tailwind aspect class for sm+ (default: sm:aspect-[5/3])
 *  - fit?: 'cover' | 'contain' // how the image should fit (default: 'cover')
 */
export default function CategoryPromoCard({
  icon: Icon,
  title,
  text,
  img,
  cta,
  onCta,
  onPrev,
  onNext,
  className = "",
  width = "min(92vw, 420px)",
  ratioBase = "aspect-[16/9]",
  ratioSm = "sm:aspect-[5/3]",
  fit = "cover",
}) {
  return (
    <div
      className={[
        "pointer-events-auto rounded-2xl text-white backdrop-blur-md",
        "ring-1 ring-white/20 bg-white/12",
        "shadow-[0_12px_28px_-12px_rgba(0,0,0,.55)]",
        "overflow-hidden",
        className,
      ].join(" ")}
      style={{ width }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 px-3 sm:px-4 pt-3 sm:pt-4">
        <div className="flex items-center gap-2 min-w-0">
          {Icon && (
            <span className="grid size-8 sm:size-9 place-items-center rounded-lg bg-white/18 shrink-0">
              <Icon className="w-4 h-4" />
            </span>
          )}
          <h3 className="truncate text-[15px] sm:text-lg font-semibold">
            {title}
          </h3>
        </div>

        {(onPrev || onNext) && (
          <div className="flex items-center gap-1.5 shrink-0">
            {onPrev && (
              <button
                onClick={onPrev}
                aria-label="Previous"
                className="grid size-8 place-items-center rounded-md bg-white/12 hover:bg-white/20"
              >
                <FiChevronLeft />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                aria-label="Next"
                className="grid size-8 place-items-center rounded-md bg-white/12 hover:bg-white/20"
              >
                <FiChevronRight />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Image (no gaps) */}
      <div className="mt-3 relative overflow-hidden rounded-xl ring-1 ring-white/15">
        <div className={`relative w-full ${ratioBase} ${ratioSm}`}>
          <img
            src={img}
            alt={title}
            className={[
              "absolute inset-0 h-full w-full block",
              fit === "contain" ? "object-contain" : "object-cover",
            ].join(" ")}
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>

      {/* Text + CTA */}
      <div className="px-3 sm:px-4 pb-3.5 sm:pb-4 pt-2.5">
        {text && (
          <p className="text-[12.5px] sm:text-sm text-white/90">{text}</p>
        )}

        {cta?.label && (
          <div className="mt-3 flex items-center justify-end">
            {onCta ? (
              <button
                onClick={onCta}
                className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3 py-1.5 text-[13px] sm:text-sm font-semibold hover:opacity-90"
                style={{ boxShadow: "0 2px 0 rgba(0,0,0,.08)" }}
              >
                {cta.label}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 5l8 7-8 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <a
                href={cta.href || "#"}
                className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3 py-1.5 text-[13px] sm:text-sm font-semibold hover:opacity-90"
                style={{ boxShadow: "0 2px 0 rgba(0,0,0,.08)" }}
              >
                {cta.label}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 5l8 7-8 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import {
  ShoppingBag,
  Truck,
  Gift,
  BadgeCheck,
  Briefcase,
  Home,
  GraduationCap,
  ArrowRight,
  Info,
} from "lucide-react";

const ACCENT = "#FF6B2B";          // primary brand
const ACCENT_SOFT = "#FF8A50";     // lighter edge for gradients

export default function JoinUs() {
  return (
    <main className="text-neutral-900 mt-13 min-h-screen bg-gradient-to-b from-[#FFF2EC] via-white to-[#FFF8F5]">
      {/* Header band with brand-tinted wash */}
      <section className="relative" aria-label="Join Us Intro">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,107,43,0.12) 0%, rgba(255,107,43,0.06) 30%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-neutral-600">
              <span className="h-px w-10 bg-neutral-300" />
              Join Us
              <span className="h-px w-10 bg-neutral-300" />
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Choose how you want to be part of{" "}
              <span style={{ color: ACCENT }}>LAKSHRA</span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
              Whether you love great products and savings, or you want to build an income
              by sharing with friends and family—we’ve got a path for you.
            </p>
          </div>

          {/* action pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
            >
              Explore Products
            </a>
            <a
              href="/distributor/login"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A50]"
            >
              Join as a Distributor
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Two tracks: VIP Customer vs Brand Partner */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* VIP Customer */}
          <PlanCard
            id="vip"
            title="VIP Customer"
            tagline="Enjoy benefits"
            icon={<ShoppingBag className="h-5 w-5" />}
            features={[
              {
                icon: <Truck className="h-4 w-4" />,
                title: "Free delivery & Auto-Ship perks",
                desc:
                  "Get free delivery on select orders and extra savings when you subscribe with Auto-Ship.",
              },
              {
                icon: <Gift className="h-4 w-4" />,
                title: "Rewards for shopping",
                desc:
                  "Earn loyalty points, birthday treats, and tiered discounts as you shop regularly.",
              },
              {
                icon: <BadgeCheck className="h-4 w-4" />,
                title: "Beauty & wellness tips",
                desc:
                  "VIP-only content, routine guides, and seasonal picks curated by our community.",
              },
            ]}
            ctas={[
              {
                label: "Join Now",
                href: "/distributor/login",
                variant: "accent",
              },
              {
                label: "Learn More",
                href: "/contact",
                variant: "ghost",
              },
            ]}
          />

          {/* Brand Partner */}
          <PlanCard
            id="partner"
            title="Brand Partner"
            tagline="Enjoy success"
            icon={<Briefcase className="h-5 w-5" />}
            features={[
              {
                icon: <BadgeCheck className="h-4 w-4" />,
                title: "Make money now",
                desc:
                  "Share products you love. Earn on personal sales plus team bonuses where eligible.",
              },
              {
                icon: <Home className="h-4 w-4" />,
                title: "Work from anywhere",
                desc:
                  "Choose your hours and build at your own pace—part-time or full-time.",
              },
              {
                icon: <GraduationCap className="h-4 w-4" />,
                title: "Tools & training",
                desc:
                  "Get modern digital tools, onboarding, and ongoing training to help you succeed.",
              },
            ]}
            ctas={[
              {
                label: "Join Now",
                href: "/distributor/login",
                variant: "accent",
              },
              {
                label: "Learn More",
                href: "/contact",
                variant: "ghost",
              },
            ]}
          />
        </div>

        {/* Disclaimer */}
        <div className="mt-8 flex items-start gap-3 rounded-xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
          <div
            className="grid h-8 w-8 place-items-center rounded-lg"
            style={{ backgroundColor: "#FF6B2B1A", color: ACCENT }}
            aria-hidden
          >
            <Info className="h-5 w-5" />
          </div>
          <p className="text-sm text-neutral-600">
            Earnings vary and depend on factors such as customer sales, team volume, and consistent effort.
            We do not guarantee income. Always follow local regulations and company policies.
          </p>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------- helpers ------------------------------- */

function PlanCard({ id, title, tagline, icon, features, ctas }) {
  return (
    // gradient border wrapper
    <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#FF6B2B33] via-[#FF8A501A] to-transparent shadow-sm">
      <section
        id={id}
        className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-neutral-200"
      >
        {/* header */}
        <div className="flex items-start gap-3">
          <div
            className="grid h-10 w-10 place-items-center rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,107,43,0.15), rgba(255,138,80,0.15))",
              color: ACCENT,
            }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">{title}</h3>
            <p className="mt-1 text-sm font-medium text-neutral-600">{tagline}</p>
          </div>
        </div>

        {/* features */}
        <ul className="mt-5 space-y-4">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 grid h-7 w-7 place-items-center rounded-md bg-neutral-100 text-neutral-700">
                {f.icon}
              </span>
              <div>
                <div className="font-semibold">{f.title}</div>
                <p className="text-sm text-neutral-600">{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          {ctas.map((b) =>
            b.variant === "accent" ? (
              <a
                key={b.label}
                href={b.href}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 bg-gradient-to-r from-[#FF6B2B] to-[#FF8A50]"
              >
                {b.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <a
                key={b.label}
                href={b.href}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-neutral-50"
              >
                {b.label}
              </a>
            )
          )}
        </div>
      </section>
    </div>
  );
}

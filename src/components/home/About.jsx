import { FiUsers, FiLayers, FiShield, FiTrendingUp, FiPackage, FiBookOpen } from "react-icons/fi";

const ACCENT = "#FF6B2B";

export default function AboutMlm() {
  return (
    <section id="about" className="relative scroll-mt-[74px] bg-white text-neutral-900">
      {/* subtle background dots */}
      <div className="absolute inset-0 pointer-events-none opacity-10
        [background-image:radial-gradient(#000_1px,transparent_1px)]
        [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 uppercase tracking-[0.25em] text-xs sm:text-sm">
          <span className="h-px w-10 bg-neutral-300" />
          <span className="text-[color:var(--accent,theme(colors.orange.500))]" style={{ color: ACCENT }}>
            We Are
          </span>
          <span className="h-px w-10 bg-neutral-300" />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-center font-extrabold leading-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
          A modern direct-selling company built on real products, real customers, and responsible growth
        </h2>

        {/* Intro */}
        <p className="mt-4 max-w-3xl mx-auto text-center text-neutral-600">
          We operate in the <strong>multi-level marketing (MLM)</strong> / direct-selling model. Our focus:
          useful daily-use products, fair customer pricing, clear earnings for distributors, and training that helps
          people build steady, sustainable teams—without hype.
        </p>

        {/* Pill tags */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["Home Care", "Skin Care", "Wellness", "Personal Care"].map((t) => (
            <span key={t} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm">
              {t}
            </span>
          ))}
        </div>

        {/* 3-up cards */}
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Who we are */}
          <Card
            icon={<FiUsers className="w-6 h-6" />}
            title="Who we are"
            points={[
              "A product-first direct-selling company",
              "Community leadership & one-on-one mentorship",
              "Compliance-driven: customer value before recruitment",
            ]}
          />

          {/* What we do */}
          <Card
            icon={<FiLayers className="w-6 h-6" />}
            title="What we do"
            points={[
              "Curate everyday products with genuine repeat use",
              "Provide a transparent compensation plan",
              "Deliver sales, product, and team-building training",
            ]}
          />

          {/* How we work */}
          <Card
            icon={<FiShield className="w-6 h-6" />}
            title="How we work"
            points={[
              "Retail margins on personal sales",
              "Bonuses based on verified volume (PV/BV)",
              "No income claims; earnings require consistent effort",
            ]}
          />
        </div>

        {/* Steps row */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <Step
            icon={<FiBookOpen className="w-5 h-5" />}
            label="Learn"
            desc="Complete onboarding: products, plan, and policy basics"
          />
          <Step
            icon={<FiPackage className="w-5 h-5" />}
            label="Share"
            desc="Use the products, share reviews, build customer repeat orders"
          />
          <Step
            icon={<FiTrendingUp className="w-5 h-5" />}
            label="Grow"
            desc="Coach your team; build stable, ethical volume month over month"
          />
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/products"
            className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-neutral-50"
          >
            Explore Products
          </a>
          <a
            href="/joinus"
            className="rounded-xl px-5 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: ACCENT, boxShadow: "0 6px 0 0 #ff6b2bcc" }}
          >
            Join as a Distributor
          </a>
        </div>

        {/* Small disclaimer */}
        <p className="mt-6 text-center text-xs text-neutral-500">
          Earnings vary and depend on factors such as customer sales, team volume, and consistent effort.
          We do not guarantee income. Always follow local regulations and company policies.
        </p>
      </div>
    </section>
  );
}

function Card({ icon, title, points }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className="grid size-10 place-items-center rounded-lg"
          style={{ backgroundColor: "#FF6B2B1A", color: "#FF6B2B" }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-neutral-600">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 size-1.5 rounded-full" style={{ backgroundColor: "#FF6B2B" }} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ icon, label, desc }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
      <div className="flex items-center gap-3">
        <div
          className="grid size-9 place-items-center rounded-md"
          style={{ backgroundColor: "#FF6B2B1A", color: "#FF6B2B" }}
        >
          {icon}
        </div>
        <div className="font-semibold">{label}</div>
      </div>
      <p className="mt-2 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

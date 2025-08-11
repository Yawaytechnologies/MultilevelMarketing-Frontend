// src/components/products/HowItWorks.jsx
import React from "react";

export default function HowItWorks() {
  const steps = [
    { t: "Shop Quality Products", d: "Choose essentials across Wellness, Nutrition, Beauty & Home Care." },
    { t: "Earn PV/BV", d: "Every order adds PV/BV to your monthly totals for rewards & qualifications." },
    { t: "Share & Grow", d: "Refer customers or onboard distributors and build a sustainable network." },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.t} className="border rounded-2xl p-6">
            <h3 className="font-semibold">{s.t}</h3>
            <p className="mt-2 text-slate-600">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

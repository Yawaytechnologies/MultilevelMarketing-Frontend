// src/components/products/Testimonials.jsx
import React from "react";

export default function Testimonials() {
  const items = [
    { n: "Aarav K.", q: "Protein tastes clean and mixes well. Better recovery after workouts." },
    { n: "Riya S.", q: "Radiance Day Cream feels light and non‑sticky. SPF 30 is a bonus!" },
    { n: "Meera P.", q: "Herbal Immuno+ has become part of our family’s routine." },
  ];
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">What Customers Say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <blockquote key={t.n} className="border rounded-2xl p-6 bg-white">
              <p className="text-slate-700">“{t.q}”</p>
              <footer className="mt-3 text-sm text-slate-500">— {t.n}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/components/products/FAQ.jsx
import React from "react";

export default function FAQ() {
  const faqs = [
    { q: "What are PV and BV?", a: "PV (Point Value) and BV (Business Volume) are assigned to products and help compute qualifications and bonuses." },
    { q: "Do I need to recruit to buy products?", a: "No. Retail customers can buy at MRP. Distributors get DP and can also earn PV/BV." },
    { q: "Are there refunds/returns?", a: "Yes—refer to our return/refund policy in Terms & Conditions." },
    { q: "Is this an investment or a job?", a: "No. Direct selling is product‑based retail; earnings depend on sales volume, effort and plan compliance." },
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold">FAQs</h2>
      <div className="mt-6 grid gap-4">
        {faqs.map((f) => (
          <details key={f.q} className="border rounded-2xl p-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

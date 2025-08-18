import React from "react";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-neutral-900 to-black p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold">Want to explore more?</h3>
        <p className="text-white/70 text-sm mt-1">
          Browse products or learn about joining the community.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          to="/products"
          className="rounded-xl px-5 py-3 bg-white text-slate-900 font-medium hover:bg-[#FF6B2B] hover:text-white transition"
        >
          View Products
        </Link>
        <Link
          to="/join"
          className="rounded-xl px-5 py-3 border border-white/30 hover:bg-white/10 transition"
        >
          Join Us
        </Link>
      </div>
    </section>
  );
}

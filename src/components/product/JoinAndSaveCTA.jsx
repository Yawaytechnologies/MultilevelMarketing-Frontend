// src/components/products/JoinAndSaveCTA.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function JoinAndSaveCTA() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 md:p-10">
          <div className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3">
              <h3 className="text-2xl md:text-3xl font-semibold">Join & Save More</h3>
              <p className="mt-2 text-white/90">
                Become a distributor to unlock DP pricing, earn PV/BV on every purchase, and qualify for bonuses.
              </p>
            </div>
            <div className="md:col-span-2 flex gap-3 md:justify-end">
              <Link to="/join" className="rounded-xl px-5 py-3 bg-white text-slate-900 font-medium hover:bg-white/90">
                Join Now
              </Link>
              <Link to="/plan" className="rounded-xl px-5 py-3 border border-white/40 hover:bg-white/10">
                View Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

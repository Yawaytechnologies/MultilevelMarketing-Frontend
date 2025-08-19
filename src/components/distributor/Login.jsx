import React from "react";
import { Lock, Mail, ArrowRight, ChevronRight } from "lucide-react";

const ACCENT = "#FF6B2B";

export default function DistributorLogin() {
  return (
    <main className="min-h-[100svh] bg-neutral-50 mt-10 grid place-items-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-xl ring-1 ring-neutral-200">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-md bg-orange-500 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 10l8-6 8 6M4 16l8-6 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="text-xl font-extrabold">LAKSHRA</div>
        </div>

        <h1 className="mt-6 text-2xl font-bold">Distributor sign in</h1>
        <p className="mt-1 text-sm text-neutral-600">
          Access your dashboard to manage your team, orders, and payouts.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Email</span>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2">
              <Mail className="h-4 w-4 text-neutral-500" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium">Password</span>
            <div className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-3 py-2">
              <Lock className="h-4 w-4 text-neutral-500" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="size-4 rounded border-neutral-300" />
              Remember me
            </label>
            <a href="/distributor/forgot" className="text-neutral-700 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="button"
            onClick={() => (window.location.href = "/distributor/dashboard")}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-semibold"
            style={{ backgroundColor: ACCENT }}
          >
            Sign in <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <div className="mt-5 text-sm text-neutral-700">
          New here?{" "}
          <a href="/joinus" className="inline-flex items-center gap-1 font-semibold hover:underline">
            Create distributor account <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  );
}

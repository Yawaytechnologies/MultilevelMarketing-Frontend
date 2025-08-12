// src/components/common/Footer.jsx
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const ACCENT = "#FF6B2B";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-neutral-200">
      {/* top accent & soft vignette */}
      <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: ACCENT }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-8 h-24 opacity-30"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0))" }}
      />

      {/* subtle corner flares */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-72 w-72 rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(closest-side, rgba(255,107,43,.18), rgba(255,107,43,.06), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-[-5rem] h-96 w-96 rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(closest-side, rgba(110,140,255,.16), rgba(110,140,255,.06), transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14">
        {/* top row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand / mission (same logo style as header) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              {/* header-style logo */}
              <div className="grid size-9 place-items-center rounded-md bg-white text-black font-black">Λ</div>
              <span className="text-xl font-extrabold tracking-tight">LAKSHRA</span>
            </div>

            <p className="mt-4 text-sm/6 text-neutral-400">
              We help people build sustainable income through trustworthy multi-level
              marketing, backed by quality wellness, skincare, homecare and personal care products.
            </p>

            {/* contact */}
            <ul className="mt-5 space-y-2 text-sm text-neutral-300">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-neutral-400" />
                support@lakshra.example
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-neutral-400" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-neutral-400" />
                Chennai, India
              </li>
            </ul>

            {/* socials */}
            <div className="mt-6 flex items-center gap-3">
              <Social href="#" aria="Facebook"><Facebook className="h-5 w-5" /></Social>
              <Social href="#" aria="Twitter"><Twitter className="h-5 w-5" /></Social>
              <Social href="#" aria="Instagram"><Instagram className="h-5 w-5" /></Social>
              <Social href="#" aria="LinkedIn"><Linkedin className="h-5 w-5" /></Social>
            </div>
          </div>

          {/* Quick links */}
          <FooterCol title="Company">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/products">Products</FooterLink>
            <FooterLink to="/joinus">Join Us</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterCol>

          {/* Categories */}
          <FooterCol title="Categories">
            <FooterLink to="/products?cat=wellness">Wellness</FooterLink>
            <FooterLink to="/products?cat=skincaree">Skincare</FooterLink>
            <FooterLink to="/products?cat=homecare">Homecare</FooterLink>
            <FooterLink to="/products?cat=nutrition">Nutrition</FooterLink>
            <FooterLink to="/products?cat=personal-care">Personal Care</FooterLink>
          </FooterCol>

          {/* Newsletter (expanded, replaces Resources) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-wide text-neutral-200">Stay in the loop</h4>
            <p className="mt-2 text-sm text-neutral-400">
              Get product drops, promos, and distributor tips. No spam—ever.
            </p>
            <form
              className="mt-4 flex flex-col sm:flex-row items-stretch gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We’ll keep you posted.");
              }}
            >
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@example.com"
                className="min-w-0 w-full rounded-xl bg-neutral-900/70 border border-neutral-700 px-4 py-3 text-sm
                           placeholder:text-neutral-500 focus:outline-none focus:ring-2"
                style={{ outlineColor: ACCENT }}
              />
              <button
                type="submit"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold
                           text-neutral-900 shadow hover:opacity-95 transition"
                style={{ backgroundColor: ACCENT }}
              >
                Subscribe <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-2 text-xs text-neutral-500">By subscribing you agree to our Privacy Policy.</p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 border-t border-neutral-800 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Lakshra. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-400">
            <Link to="/privacy" className="hover:text-neutral-200">Privacy</Link>
            <Link to="/terms" className="hover:text-neutral-200">Terms</Link>
            <Link to="/refunds" className="hover:text-neutral-200">Refunds</Link>
            <Link to="/cookies" className="hover:text-neutral-200">Cookies</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

/* ---------- small helpers ---------- */
function FooterCol({ title, children }) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wide text-neutral-200">{title}</h4>
      <ul className="mt-3 space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-neutral-400 hover:text-neutral-200 transition"
      >
        {children}
      </Link>
    </li>
  );
}

function Social({ href, aria, children }) {
  return (
    <a
      href={href}
      aria-label={aria}
      className="grid place-items-center size-9 rounded-lg border border-neutral-800 bg-neutral-900/60
                 hover:bg-neutral-800 hover:border-neutral-700 transition"
    >
      {children}
    </a>
  );
}

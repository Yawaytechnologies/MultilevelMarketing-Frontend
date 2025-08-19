import { useState } from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoChevronBack, IoChevronForward, IoChevronDown } from "react-icons/io5";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    referral: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState("f1"); // only one open at a time

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // await fetch("/api/contact", { method:"POST", body: JSON.stringify(form) })
      await new Promise((r) => setTimeout(r, 800));
      alert("Message sent. Your upline/support team will reach out shortly ✉️");
      setForm({ name: "", email: "", message: "", referral: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (id) => setOpenFaq((prev) => (prev === id ? "" : id));

  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white selection:bg-orange-300/20 mt-15">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute right-[-8rem] top-10 h-[34rem] w-[34rem] rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute left-[-10rem] bottom-0 h-[28rem] w-[28rem] rounded-full bg-orange-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(transparent,transparent,rgba(18,20,26,0.7))]" />
      </div>

      {/* page container */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-10 md:pt-12 pb-16 relative">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-orange-400">
            We’re here to help
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">
            Whether you’re a <span className="text-white">prospect</span> exploring the opportunity
            or a <span className="text-white">leader</span> building your team, our MLM partner workspace
            connects you to the right upline and tools—fast.
          </p>
        </div>

        {/* Trust / stats strip */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { k: "Leads captured", v: "12,400+" },
            { k: "Avg. response time", v: "23 min" },
            { k: "Active leaders", v: "500+" },
          ].map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
            >
              <div className="text-xs uppercase tracking-wide text-white/60">{s.k}</div>
              <div className="mt-1 text-2xl font-semibold text-orange-400">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Grid: form + testimonial card */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left: Contact form */}
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur"
          >
            {/* animated gradient edge */}
            <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

            <div className="grid gap-6">
              <label className="block">
                <span className="text-sm text-white/70">Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="e.g. John Smith"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
                />
              </label>

              <label className="block">
                <span className="text-sm text-white/70">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="e.g. example@gmail.com"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
                />
              </label>

              <label className="block">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/70">Upline / Referral ID (optional)</span>
                  <span className="text-xs text-white/50">Helps auto-route your query</span>
                </div>
                <input
                  name="referral"
                  value={form.referral}
                  onChange={onChange}
                  placeholder="e.g. LKS-LEAD-9123"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
                />
              </label>

              <label className="block">
                <span className="text-sm text-white/70">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Tell us how we can help"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400/40"
                />
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 text-black px-5 py-3 font-medium hover:bg-orange-400 transition disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>

                {/* WhatsApp quick CTA */}
                <a
                  href="https://wa.me/0000000000?text=Hi%20Lakshra%2C%20I%27d%20like%20to%20know%20more%20about%20the%20MLM%20partner%20program."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-400/40 bg-orange-400/10 px-5 py-3 hover:bg-orange-400/20 transition"
                >
                  <FaWhatsapp />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Socials row */}
              <div className="flex items-center gap-4 text-white/70">
                <FaLinkedin className="hover:text-white cursor-pointer" />
                <FaFacebook className="hover:text-white cursor-pointer" />
                <FaInstagram className="hover:text-white cursor-pointer" />
                <FaXTwitter className="hover:text-white cursor-pointer" />
                <FaGithub className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </form>

          {/* Right: Testimonial / MLM blurb + FAQ */}
          <div className="space-y-6">
            <div className="relative rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 overflow-hidden">
              {/* spotlight */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-400/15 blur-3xl" />
              <div className="flex items-center justify-between">
                <div className="font-semibold">Lakshra</div>
                <div className="flex items-center gap-2 text-white/60">
                  <button className="rounded-full bg-white/10 p-1.5 hover:bg-white/20">
                    <IoChevronBack />
                  </button>
                  <button className="rounded-full bg-white/10 p-1.5 hover:bg-white/20">
                    <IoChevronForward />
                  </button>
                </div>
              </div>

              <p className="mt-6 leading-relaxed text-white/85">
                “With Lakshra’s <span className="text-white font-semibold">MLM partner workspace</span>,
                our team <span className="font-semibold">cut onboarding time by 30%</span> and brought
                new distributors live 2× faster. Duplication-ready assets, guided trainings, and
                compliance guardrails saved us hours every week.”
              </p>

              <div className="mt-6 text-sm text-white/60">
                <div className="opacity-80">Onboarding • Training • Compliance</div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-400/30 text-xs">
                    ☆
                  </span>
                  <span>Preferred by 500+ active leaders</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-400/20 to-orange-600/10 p-4">
                <ul className="space-y-2 text-sm text-white/85">
                  <li>• Smart lead capture & auto-routing to upline</li>
                  <li>• Duplicate landing pages for downline teams</li>
                  <li>• Fast payouts & volume tracking (API-ready)</li>
                  <li>• WhatsApp/Email follow-up templates</li>
                </ul>
              </div>
            </div>

            {/* FAQ (single-open accordion) */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
              <h3 className="text-lg font-semibold">FAQs</h3>
              <div className="mt-2 divide-y divide-white/10">
                {[
                  {
                    id: "f1",
                    q: "How do inquiries get routed to my upline?",
                    a: "If you provide a valid Referral ID, we auto-match to your upline. Otherwise, our system assigns the nearest active leader by region and product focus.",
                  },
                  {
                    id: "f2",
                    q: "Can I use these tools for my downline?",
                    a: "Yes. Leaders can spin up duplication-ready pages, share trackable links, and view team training progress inside the workspace.",
                  },
                  {
                    id: "f3",
                    q: "Do you provide income guarantees?",
                    a: "No. Earnings depend on personal and team sales, consistent effort, and compliance with our Code of Ethics.",
                  },
                ].map(({ id, q, a }) => {
                  const active = openFaq === id;
                  return (
                    <button
                      key={id}
                      onClick={() => toggleFaq(id)}
                      className="w-full py-3 text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${active ? "text-orange-300" : ""}`}>{q}</span>
                        <IoChevronDown
                          className={`transition-transform ${active ? "rotate-180 text-orange-300" : "text-white/70"}`}
                        />
                      </div>
                      <div
                        className={`grid transition-all duration-300 ${
                          active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pt-2 text-sm text-white/70">{a}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

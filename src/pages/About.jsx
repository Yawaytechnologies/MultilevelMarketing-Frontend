// src/pages/AboutPage.jsx
import React from "react";
import AboutHero from "../components/about/AboutHero";
import AboutMetrics from "../components/about/AboutMetrics";
import AboutValues from "../components/about/AboutValues";
import AboutTimeline from "../components/about/AboutTimeline";   // ← new
import AboutTrust from "../components/about/AboutTrust";         // ← new
import AboutCTA from "../components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <AboutHero />
        <AboutMetrics />
        <AboutValues />
        <AboutTimeline />   {/* new */}
        <AboutTrust />      {/* new */}
        <AboutCTA />
      </main>
    </div>
  );
}

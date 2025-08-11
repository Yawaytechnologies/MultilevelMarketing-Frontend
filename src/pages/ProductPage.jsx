// src/pages/ProductPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/product/Hero";
import SearchFilters from "../components/product/SearchFilters";
import CategoryStrip from "../components/product/CategoryStrip";
import ProductGrid from "../components/product/ProductGrid";
import BestSellers from "../components/product/BestSellers";
import JoinAndSaveCTA from "../components/product/JoinAndSaveCTA";
import HowItWorks from "../components/product/HowItWorks";
import Testimonials from "../components/product/Testimonials";
import FAQ from "../components/product/FAQ";
import ComplianceNote from "../components/product/ComplianceNote";
import { CATEGORIES, PRODUCTS, BEST_SELLER_IDS } from "../data/catalog";

export default function ProductPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [activeCat, setActiveCat] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const base = activeCat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCat);
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.join(" ").toLowerCase().includes(q)
    );
  }, [activeCat, query]);

  const addToCart = (prod) => {
    // TODO: replace with Redux/Context or API call
    alert(`Added to cart: ${prod.title}`);
  };

  return (
    <div className="bg-white text-slate-900">
      <title>Products | Direct Selling • Wellness • Beauty • Home Care</title>
      <meta
        name="description"
        content="Discover premium wellness, nutrition, beauty and home care products. Earn PV/BV on purchases, unlock distributor pricing, and grow with our direct selling opportunity."
      />

      <Hero />

      {/* Search + Filter Buttons */}
      <SearchFilters
        categories={CATEGORIES}
        active={activeCat}
        onCategory={setActiveCat}
        query={query}
        onQuery={setQuery}
      />

      {/* Breadcrumbs (kept simple, optional to extract) */}
      <nav className="mt-6 text-sm text-slate-500 px-6 max-w-6xl mx-auto" aria-label="Breadcrumb">
        <ol className="inline-flex gap-2">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li className="text-slate-700">Products</li>
        </ol>
      </nav>

      <CategoryStrip categories={CATEGORIES} active={activeCat} onCategory={setActiveCat} />
      <ProductGrid items={filtered} onAdd={addToCart} />
      <BestSellers products={PRODUCTS} ids={BEST_SELLER_IDS} onAdd={addToCart} />
      <JoinAndSaveCTA />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ComplianceNote />
    </div>
  );
}

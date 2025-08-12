// src/data/catalog.js
import proteinImg from "../assets/protien.jpg";
import herbalImg from "../assets/Herball.jpg";
import skincareImg from "../assets/skincare.jpg";
import laundryImg from "../assets/cleaner.jpg";
import vedhaImg from "../assets/vedha.jpg";
import omega3Img from "../assets/omega3.jpg";



export const CATEGORIES = ["All", "Wellness", "Beauty", "Home Care", "Nutrition", "Personal Care"];

export const PRODUCTS = [
  {
    id: "p1",
    title: "Plant Protein Blend",
    category: "Nutrition",
    images: [proteinImg],
    mrp: 2499,
    dp: 1999,
    pv: 40,
    bv: 600,
    tags: ["Vegan", "Sugar-free"],
    desc: "Complete amino acid profile with added BCAAs for daily muscle recovery.",
  },
  {
  id: "p2",
  title: "Herbal Immuno+",
  category: "Wellness",
  images: [herbalImg], // ✅ matches p1 and ProductCard expectations
  mrp: 1499,
  dp: 1199,
  pv: 28,
  bv: 360,
  tags: ["Ashwagandha", "Tulsi"],
  desc: "Daily immunity support with botanicals, Vitamin C & Zinc.",
},
  {
  id: "p3",
  title: "Radiance Day Cream SPF 30",
  category: "Beauty",
  images: [skincareImg], // ✅ changed to match others
  mrp: 999,
  dp: 799,
  pv: 16,
  bv: 220,
  tags: ["SPF 30", "Paraben-free"],
  desc: "Lightweight moisturizer with UVA/UVB protection for daily glow.",
},
  {
  id: "p4",
  title: "Deep Clean Laundry Liquid",
  category: "Home Care",
  images: [laundryImg], // ✅ from assets
  mrp: 799,
  dp: 620,
  pv: 12,
  bv: 150,
  tags: ["Enzyme-boosted", "Low foam"],
  desc: "Powerful stain removal with eco-friendly surfactants.",
},
  {
  id: "p5",
  title: "Ayur Hair & Scalp Oil",
  category: "Personal Care",
  images: [vedhaImg], // ✅ from assets
  mrp: 699,
  dp: 560,
  pv: 10,
  bv: 130,
  tags: ["Bhringraj", "Amla"],
  desc: "Nourishing hair tonic that strengthens roots and reduces dryness.",
},
  {
  id: "p6",
  title: "Omega-3 Softgels",
  category: "Wellness",
  images: [omega3Img],
  mrp: 1699,
  dp: 1349,
  pv: 30,
  bv: 420,
  tags: ["180/120 EPA-DHA"],
  desc: "Purified fish oil for heart, joints and cognitive wellness.",
},
];

export const BEST_SELLER_IDS = ["p1", "p2", "p6"];

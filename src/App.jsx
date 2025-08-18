// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import Test from "./pages/Test";
import JoinUs from "./pages/JoinUs";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      {/* Show the fixed header on all pages (simplest) */}
      <Header mode="fixed" />

      {/* If your header is fixed, add top padding so content isn't hidden */}
      <div className="pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/joinus" element={<JoinUs />} />
           <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

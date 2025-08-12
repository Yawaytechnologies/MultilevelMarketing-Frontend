// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Header from "./components/common/Header";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={
          <>

            <Header mode="fixed" />

            <ProductPage />
          </>} />        {/* for non-home pages you can still use a fixed header in the page layout */}
        <Route
          path="/test"
          element={
            <>
              {/* fixed header for inner pages (optional) */}
              <Header mode="fixed" />
              <Test />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

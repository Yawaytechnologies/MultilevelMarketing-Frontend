// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import JoinUs from "./pages/JoinUs";
import DistributorLogin from "../src/components/distributor/Login";
import DistributorDashboard from "./pages/Distributor";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <>
              <Header mode="fixed" />
              <ProductPage />
            </>
          }
        />{" "}
        {/* for non-home pages you can still use a fixed header in the page layout */}
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
        {/* for non-home pages you can still use a fixed header in the page layout */}
        <Route
          path="/test"
          element={
            <>
              {" "}
              <Header mode="fixed" /> <Test />
            </>
          }
        />
        <Route
          path="/joinus"
          element={
            <>
              {" "}
              <Header mode="fixed" /> <JoinUs />
            </>
          }
        />
          <Route path="/distributor/login" element={<DistributorLogin />} />
        <Route path="/distributor/dashboard" element={<DistributorDashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

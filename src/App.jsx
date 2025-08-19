// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact"
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
       
        {/* for non-home pages you can still use a fixed header in the page layout */}
       
        <Route
          path="/joinus"
          element={
            <>
              {" "}
              <Header mode="fixed" /> <JoinUs />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {" "}
              <Header mode="fixed" /> <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              {" "}
              <Header mode="fixed" /> <Contact />
            </>
          }
        />
        <Route
          path="/distributor/dashboard"
          element={
            <>
              {" "}
              <Header mode="fixed" /> <DistributorDashboard />
            </>
          }
        />
        <Route
          path="/distributor/login"
          element={
            <>
              {" "}
              <Header mode="fixed" /> <DistributorLogin />
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

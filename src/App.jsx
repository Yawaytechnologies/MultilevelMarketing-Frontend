// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Header from "./components/common/Header";
import JoinUs from "./pages/JoinUs"; 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* for non-home pages you can still use a fixed header in the page layout */}
        <Route path="/test" element={<> <Header mode="fixed" /> <Test /></>}/>
        <Route path="/joinus" element={<> <Header mode="fixed" /> <JoinUs /></>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

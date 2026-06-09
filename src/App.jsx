
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";


import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Machinework from "./pages/Machinework";
import Aariwork from "./pages/Aariwork";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable smooth scrolling temporarily for instant jump
    document.documentElement.style.scrollBehavior = "auto";
    
    // Force a synchronous jump to top
    window.scrollTo({ top: 0, behavior: "instant" });
    
    // Restore smooth scrolling on the next frame so it doesn't batch
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 10);
  }, [pathname]);

  return null;
}

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
  
<div>
    
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#14091d]">
  

  <div className="absolute inset-0 bg-black/45" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-[#14091d]/90" />
</div>
       


   <div className="fixed inset-0 -z-40 bg-gradient-to-b from-black/30 via-black/30 to-black/30" />
       {/* Main App */}

      <div className=" relative z-10 min-h-screen">
        <ScrollToTopOnRouteChange />
 <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

           <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/category/:categoryName"
            element={<Collection />}
          />

          <Route
            path="/products"
            element={<ProductPage />}
          />

 <Route
            path="/machineWork"
            element={<Machinework />}
          />

           <Route
            path="/aari"
            element={<Aariwork />}
          />

        </Routes>

        

        <Footer />

        {/* Scroll To Top Button */}

        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-purple-700 shadow-xl transition-all duration-300 hover:scale-110 ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <ArrowUp size={22} />
        </button>
      </div>
   </div>
    </>
  );
}

export default App;

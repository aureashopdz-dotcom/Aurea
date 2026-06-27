import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const { pathname } = useLocation();
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);



  return (
    <div id="app-root-container" className="relative min-h-screen bg-white">
      {/* Main Responsive Header Wordmark */}
      <Header lang={lang} setLang={setLang} />

      {/* Page Routes with key to trigger page transition animation */}
      <main key={pathname} className="animate-pageFade">
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/shop" element={<ShopPage lang={lang} />} />
          <Route path="/shop/:productId" element={<ProductDetailPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
        </Routes>
      </main>

      {/* Footer Category Lists & Newsletters */}
      <Footer lang={lang} />

      {/* Quick Mobile sticky buy footer tab */}
      <StickyCTA lang={lang} />
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { trackPageView } from "./utils/metaPixel";

export default function App() {
  const { pathname } = useLocation();
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // Track route changes — skip the very first mount because
  // the base code in index.html already fires fbq('track', 'PageView').
  // This fires on every subsequent client-side navigation.
  const isFirstRender = useRef(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // HTML base code already fired PageView for this load
    }
    // SPA route change — fire a fresh PageView
    trackPageView();
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

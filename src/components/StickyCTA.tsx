import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import hummingbirdImg from "../assets/hummingbird-product-1.jpg";

interface StickyCTAProps {
  lang: "ar" | "en";
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show sticky CTA on the /shop/hummingbird-necklace page or similar, after scrolling past the main hero/details
    const isProductPage = location.pathname.includes("/shop/");
    if (!isProductPage) {
      setVisible(false);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById("product-hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.bottom < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-100 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] py-3 px-4 z-40 sm:py-4 sm:px-6 transition-all duration-300 animate-fadeInUp">
      <div className={`max-w-5xl mx-auto flex items-center justify-between gap-4 ${lang === 'ar' ? 'flex-row-reverse' : ''}`}>
        
        {/* Left Side: Label */}
        <div className={`flex items-center gap-3 ${lang === 'ar' ? 'flex-row-reverse text-right' : 'text-left'}`}>
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-100 bg-off-white/40 shrink-0 hidden sm:block">
            <img 
              src={hummingbirdImg}
              alt="AUREA Hummingbird Necklace" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-none">
              {lang === "ar" ? "أوريا للمجوهرات الراقية" : "AUREA Fine Jewelry"}
            </span>
            <span className="text-[10px] text-[#FF6C84] font-black uppercase mt-1 tracking-wide flex items-center gap-0.5">
              <Sparkles className="w-3 h-3 text-[#FF6C84] fill-current animate-pulse" />
              <span>{lang === "ar" ? "سارعي بالطلب الآن" : "Order Yours Now"}</span>
            </span>
          </div>
        </div>

        {/* Right Side: CTA Button */}
        <button
          onClick={() => {
            const purchaseSection = document.getElementById("checkout-form-container");
            if (purchaseSection) {
              purchaseSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-black hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 sm:py-3.5 rounded-full shadow transition-all duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <span>{lang === "ar" ? "أطلبي الآن" : "ORDER NOW"}</span>
          <ArrowRight className={`w-4 h-4 font-bold ${lang === 'ar' ? 'rotate-180' : ''}`} />
        </button>

      </div>
    </div>
  );
};

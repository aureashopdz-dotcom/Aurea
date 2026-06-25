import React, { useState } from "react";
import { Star, CheckCircle, Sparkles, ShoppingBag, Gift, Leaf, Droplet, Package, Shield } from "lucide-react";
import img1 from "../assets/hummingbird-product-1.jpg";
import img2 from "../assets/hummingbird-product-2.jpg";
import img3 from "../assets/hummingbird-product-3.jpg";

export const HeroSection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [selectedChain, setSelectedChain] = useState<"silver" | "gold">("silver");

  const productImages = [
    { url: img1, alt: "Cute Acrylic Hummingbird Pendant Necklace — Flat lay product shot" },
    { url: img2, alt: "Hummingbird Necklace worn on neck — close-up lifestyle shot" },
    { url: img3, alt: "Hummingbird Necklace styled outdoors on model" },
  ];

  return (
    <section id="product-purchase" className="w-full bg-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 2-Column Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Interactive Product Gallery */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-4">

            {/* Image Stage Container */}
            <div className="relative bg-[#FFF9F0] border border-amber-100 rounded-2xl overflow-hidden aspect-square group shadow-sm">
              <img
                src={productImages[activeImageIndex].url}
                alt={productImages[activeImageIndex].alt}
                className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-[1.03]"
              />
              {/* Product Badge */}
              <div className="absolute top-4 left-4 bg-[#FF6C84] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                <span>Best Seller</span>
              </div>
              {/* Nature-inspired label */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 shadow flex items-center gap-1">
                <Leaf className="w-3 h-3 text-emerald-500" />
                <span>Nature-Inspired Design</span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-3 gap-3">
              {productImages.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-[#FFF9F0] border-2 transition-all duration-200 ${
                    activeImageIndex === idx
                      ? "border-[#FF6C84] ring-2 ring-[#FF6C84]/20 scale-[0.97]"
                      : "border-transparent hover:border-amber-200"
                  }`}
                  aria-label={`View product image ${idx + 1}`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Rating Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-1 bg-[#FFF4F3]/60 p-3 rounded-xl border border-[#FF6C84]/10">
              <div className="flex text-[#FFD700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">4.9 / 5 stars</span>
              <span className="text-xs text-slate-400 font-medium">· 2,847 verified buyers</span>
            </div>
          </div>

          {/* Right Column: Product Detail */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-5">

            {/* Breadcrumb / category */}
            <p className="text-xs font-bold text-[#FF6C84] uppercase tracking-[0.2em]">
              Hummingbird Collection · Pendant Necklace
            </p>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight font-heading">
                Colorful Hummingbird<br />Pendant Necklace
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A vibrant, hand-detailed acrylic hummingbird pendant — lightweight, playful, and perfect as an everyday accessory or a charming gift for women, girls & bird lovers.
              </p>
            </div>

            {/* Chain Color Selector */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Chain Color: <span className="text-slate-900 capitalize">{selectedChain}</span>
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedChain("silver")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-xs font-bold transition-all duration-200 ${
                    selectedChain === "silver"
                      ? "border-slate-700 bg-slate-50 text-slate-900"
                      : "border-slate-200 text-slate-500 hover:border-slate-400"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 border border-slate-400 inline-block" />
                  Silver Chain
                </button>
                <button
                  onClick={() => setSelectedChain("gold")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-xs font-bold transition-all duration-200 ${
                    selectedChain === "gold"
                      ? "border-amber-500 bg-amber-50 text-amber-800"
                      : "border-slate-200 text-slate-500 hover:border-amber-300"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 border border-amber-400 inline-block" />
                  Gold Chain
                </button>
              </div>
            </div>

            {/* Quick Spec Checklist */}
            <div className="grid grid-cols-2 gap-2.5 p-4 bg-slate-50 rounded-xl border border-slate-100">
              {[
                "Lightweight (20g) — easy to ship & wear",
                "Vibrant acrylic pendant, highly detailed",
                "Unisex — perfect gift for any age",
                "Gentle wipe-clean care — no hassle",
                "Available in Gold & Silver chain",
                "Nature-inspired, stained-glass style art",
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[11px] font-semibold text-slate-700 leading-snug">{feat}</span>
                </div>
              ))}
            </div>

            {/* Care Instructions Callout */}
            <div className="bg-gradient-to-br from-[#FFF4F3] to-amber-50 border border-[#FFD6DD] rounded-xl p-4 flex flex-col gap-2">
              <p className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-[#FF6C84]" />
                Jewelry Care Tips
              </p>
              <ul className="flex flex-col gap-1.5 text-[11px] text-slate-600">
                <li className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#FF6C84] shrink-0" /> <span><b>Avoid friction</b> — keep away from abrasive surfaces.</span></li>
                <li className="flex items-center gap-1.5"><Droplet className="w-3.5 h-3.5 text-[#FF6C84] shrink-0" /> <span><b>Keep dry</b> — wipe gently with a microfiber cloth if wet.</span></li>
                <li className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5 text-[#FF6C84] shrink-0" /> <span><b>Store separately</b> — prevents tangling & surface wear.</span></li>
              </ul>
            </div>

            {/* Add to Cart placeholder — wired to real cart via App.tsx variants */}
            <div className="flex flex-col gap-3 mt-1">
              <a
                href="#bundle-picker"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("bundle-picker")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-[#FF6C84] hover:bg-[#FF5A73] text-white font-black text-sm py-4 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6C84]/20 active:scale-[0.98] flex items-center justify-center gap-2.5"
              >
                <ShoppingBag className="w-5 h-5" />
                CHOOSE YOUR BUNDLE & SAVE
              </a>
              <p className="text-center text-xs text-slate-400 font-medium">
                Free shipping · Buy 2 save 55% · Buy 4 save 72%
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

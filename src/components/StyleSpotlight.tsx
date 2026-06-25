import React, { useState } from "react";
import { Sparkles, Star, Gift, Truck, RotateCcw } from "lucide-react";
import { CherryBlossomParticles } from "./CherryBlossomParticles";
import img1 from "../assets/hummingbird-product-1.jpg";
import img2 from "../assets/hummingbird-product-2.jpg";
import img3 from "../assets/hummingbird-product-3.jpg";

const highlights = [
  {
    image: img1,
    label: "Stained-Glass Detail",
    caption: "Each petal is individually painted with vivid, translucent acrylic — like wearing a tiny piece of stained-glass art.",
    tag: "✦ Artisan Crafted",
    color: "#FF6C84",
  },
  {
    image: img2,
    label: "Everyday Wear",
    caption: "Feather-light at just 20g — it sits so delicately you'll forget it's there until someone asks where you got it.",
    tag: "✦ All-Day Comfort",
    color: "#9B6DFF",
  },
  {
    image: img3,
    label: "Styled to Impress",
    caption: "From casual summer looks to elegant evenings — this vibrant hummingbird adds the perfect pop of colour.",
    tag: "✦ Conversation Starter",
    color: "#FF9A3C",
  },
];

export const StyleSpotlight: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="style-spotlight" className="relative w-full bg-gradient-to-b from-[#FFF9FB] to-white py-16 sm:py-24 overflow-hidden">
      <CherryBlossomParticles count={14} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-3">
          <span className="text-xs font-black text-[#FF6C84] uppercase tracking-[0.3em]">
            ✦ Style Spotlight
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            Every Angle, A Work of Art
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] mx-auto rounded-full" />
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            The Hummingbird Necklace isn't just jewelry — it's a mood, a statement, a moment of beauty.
          </p>
        </div>

        {/* Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Large Hero Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border border-[#FFD6DD]/40">
              <img
                key={active}
                src={highlights[active].image}
                alt={highlights[active].label}
                className="w-full h-full object-cover object-center transition-all duration-700"
                style={{ animation: "scaleIn 0.6s ease-out forwards" }}
              />

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Label badge */}
              <div
                className="absolute bottom-6 left-6 text-white font-black text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full"
                style={{ background: highlights[active].color }}
              >
                {highlights[active].tag}
              </div>

              {/* Floating stars */}
              <div className="absolute top-5 right-5 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700] drop-shadow" />
                ))}
              </div>
            </div>

            {/* Decorative blob behind image */}
            <div
              className="absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl transition-all duration-700"
              style={{ background: `radial-gradient(circle at center, ${highlights[active].color}, transparent 70%)` }}
            />
          </div>

          {/* Right: Cards + Navigation */}
          <div className="flex flex-col gap-6">
            {highlights.map((h, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group flex gap-5 items-center p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                  active === i
                    ? "border-[#FF6C84] bg-white shadow-lg shadow-[#FF6C84]/10"
                    : "border-slate-100 bg-white/60 hover:border-[#FFD6DD] hover:bg-white"
                }`}
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                  <img
                    src={h.image}
                    alt={h.label}
                    className={`w-full h-full object-cover transition-transform duration-500 ${active === i ? "scale-110" : "group-hover:scale-105"}`}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full shrink-0 transition-all duration-300"
                      style={{ background: active === i ? h.color : "#CBD5E1" }}
                    />
                    <span
                      className="text-sm font-black tracking-wide transition-colors duration-300"
                      style={{ color: active === i ? h.color : "#1e293b" }}
                    >
                      {h.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{h.caption}</p>
                </div>
              </button>
            ))}

            {/* Trust badge row */}
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { icon: <Gift className="w-3.5 h-3.5 text-[#FF6C84]" />, text: "Free Gifts With Bundle" },
                { icon: <Truck className="w-3.5 h-3.5 text-[#FF6C84]" />, text: "Fast Delivery" },
                { icon: <RotateCcw className="w-3.5 h-3.5 text-[#FF6C84]" />, text: "30-Day Returns" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#FFF4F3] border border-[#FFD6DD] px-3.5 py-2 rounded-full text-xs font-bold text-slate-700"
                >
                  <span className="flex items-center justify-center">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

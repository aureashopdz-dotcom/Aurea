import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Bird } from "lucide-react";
import { Link } from "react-router-dom";
import { CherryBlossomParticles } from "./CherryBlossomParticles";

export const FinalCTA: React.FC = () => {
  return (
    <section id="final-cta" className="relative w-full bg-gradient-to-b from-[#FFF4F3] to-white py-16 sm:py-24 overflow-hidden">
      <CherryBlossomParticles count={16} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2d1a1f] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#FF6C84]/20 flex flex-col items-center text-center gap-6">

          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6C84]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF8FAB]/10 rounded-full blur-3xl" />

          {/* Badge */}
          <div className="bg-[#FF6C84] text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-1.5 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <Bird className="w-3.5 h-3.5 text-white" />
            <span>HUMMINGBIRD COLLECTION — LIVE NOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-2xl font-heading">
            Wear a Piece of<br />
            <span className="bg-gradient-to-r from-[#FFB7C5] to-[#FF6C84] bg-clip-text text-transparent">
              Nature's Magic
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            Colourful. Lightweight. Conversation-starting. The Hummingbird Necklace is more than jewelry — it's a mood. Buy 2+ and save up to 72%.
          </p>

          <Link
            to="/shop"
            className="group bg-gradient-to-r from-[#FF6C84] to-[#FF8FAB] hover:from-[#FF5A73] hover:to-[#FF7B99] text-white font-bold text-base sm:text-lg px-11 py-4.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#FF6C84]/35 hover:scale-[1.03] hover:ring-4 hover:ring-[#FF6C84]/25 transition-all duration-300 flex items-center gap-3 active:scale-95 mt-2 cursor-pointer"
          >
            <span>SHOP THE COLLECTION</span>
            <ArrowRight className="w-5 h-5 font-bold group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2 text-slate-400 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>30-Day Easy Returns</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Free Bundle Gifts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Fast Nationwide Delivery</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

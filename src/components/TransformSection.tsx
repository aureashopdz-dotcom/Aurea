import React from "react";
import { CheckCircle, Sparkles, AlertCircle } from "lucide-react";
import img3 from "../assets/hummingbird-product-3.jpg";

export const TransformSection: React.FC = () => {
  return (
    <section id="transform-section" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            Ordinary vs. The Hummingbird
          </h2>
          <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mt-2">
            Tired of boring, generic jewelry? See why this piece stands out from the crowd.
          </p>
        </div>

        {/* Before vs After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Before Card */}
          <div className="bg-[#FAF9F9] rounded-2xl p-6 sm:p-10 border border-slate-200 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-sm font-black uppercase tracking-widest text-slate-400">BEFORE</span>
              <span className="flex items-center gap-1.5 text-slate-500 font-bold text-xs uppercase bg-slate-200/50 px-3 py-1 rounded-full">
                <AlertCircle className="w-4 h-4 text-slate-500" />
                Generic Jewelry
              </span>
            </div>

            {/* Before Visual */}
            <div className="relative aspect-[16/10] bg-slate-200 rounded-xl overflow-hidden shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800"
                alt="Plain, boring generic jewelry"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
            </div>

            <ul className="flex flex-col gap-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Plain, forgettable designs that blend into the background.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Heavy metals that cause neck fatigue after just an hour of wear.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Zero personality — no story, no soul, no conversation starter.</span>
              </li>
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-[#FFF4F3] border border-[#FF6C84]/20 rounded-2xl p-6 sm:p-10 flex flex-col gap-6 relative shadow-md">

            {/* Badge */}
            <div className="absolute -top-3.5 right-6 bg-[#FF6C84] text-white text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Elevated Style</span>
            </div>

            <div className="flex items-center justify-between pb-4 border-b border-[#FF6C84]/10">
              <span className="text-sm font-black uppercase tracking-widest text-[#FF6C84]">AFTER</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs uppercase bg-emerald-50 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                The Hummingbird
              </span>
            </div>

            <div className="relative bg-white rounded-xl overflow-hidden aspect-[16/10] shadow-sm">
              <img
                src={img3}
                alt="Vibrant hummingbird pendant necklace worn beautifully outdoors"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-base font-bold text-black flex items-center gap-1.5">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>The Hummingbird Difference</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">
                {[
                  "Eye-catching stained-glass rainbow design",
                  "Featherlight 20g — all-day comfort",
                  "Vibrant acrylic — won't fade or chip easily",
                  "Instant conversation starter wherever you go",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF6C84] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

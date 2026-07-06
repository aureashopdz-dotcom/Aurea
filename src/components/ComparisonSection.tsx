import React from "react";
import { Check, X, ShieldAlert } from "lucide-react";

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Base Metals",
      aura: "Premium hypoallergenic metal base with durable finish",
      others: "Low-grade brass, zinc alloy or copper that oxidizes",
      isAuraPositive: true,
      isOthersPositive: false
    },
    {
      feature: "Tarnish Proofing",
      aura: "Lifetime waterproof and tarnish-resistant protective barrier",
      others: "Tarnishes, peels or turns skin green within weeks",
      isAuraPositive: true,
      isOthersPositive: false
    },
    {
      feature: "Skin Sensitivity",
      aura: "100% hypoallergenic, zero nickel, lead or cobalt",
      others: "Frequent allergic reactions, rashes and itchy skin",
      isAuraPositive: true,
      isOthersPositive: false
    },
    {
      feature: "Unboxing & Gifts",
      aura: "Luxury drawer keepsake box, plush velvet pouch, custom greeting cards",
      others: "Shipped in plain clear plastic bags",
      isAuraPositive: true,
      isOthersPositive: false
    },
    {
      feature: "Craftsmanship & Detail",
      aura: "Handcrafted fine details, secure lobster claw, AAA+ CZ settings",
      others: "Coarse machine cutouts, easily loose gemstones and weak chains",
      isAuraPositive: true,
      isOthersPositive: false
    },
    {
      feature: "Warranty",
      aura: "Lifetime Wear & Color replacement guarantee",
      others: "30-day window or zero post-purchase support",
      isAuraPositive: true,
      isOthersPositive: false
    }
  ];

  return (
    <section id="comparison" className="w-full bg-[#FFE3CA]/25 py-16 sm:py-24 border-y border-[#FFE3CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            How We Compare
          </h2>
          <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mt-2">
            The future of jewelry is tarnish-free, hypoallergenic, and ethically handcrafted. See how we stand against the rest.
          </p>
        </div>

        {/* Premium Table Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-slate-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase text-center py-4 px-4 sm:px-6 items-center">
            <div className="col-span-4 text-left">Feature</div>
            <div className="col-span-4 bg-[#FF6C84]/10 text-[#FF6C84] py-1 rounded-lg">AUREA FINE</div>
            <div className="col-span-4 text-slate-400">OTHERS</div>
          </div>

          {/* Table Content Rows */}
          <div className="flex flex-col">
            {comparisonRows.map((row, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-12 py-5 px-4 sm:px-6 items-center text-center gap-x-2 sm:gap-x-4 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-4 text-left text-xs sm:text-sm font-bold text-slate-900 pr-1">
                  {row.feature}
                </div>

                {/* Aura Column */}
                <div className="col-span-4 flex flex-col items-center justify-center gap-1.5 px-1 bg-[#FFF4F3]/30 py-2 rounded-xl border border-primary/10">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-800 font-semibold leading-relaxed">
                    {row.aura}
                  </span>
                </div>

                {/* Others Column */}
                <div className="col-span-4 flex flex-col items-center justify-center gap-1.5 px-1">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-rose-600 font-bold" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium leading-relaxed">
                    {row.others}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

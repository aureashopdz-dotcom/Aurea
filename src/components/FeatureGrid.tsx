import React from "react";
import { Feather, Gift, ShieldCheck } from "lucide-react";

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Feather className="w-6 h-6 text-primary" />,
      title: "Lightweight & Comfortable",
      desc: "At just 20 grams, the hummingbird pendant is virtually weightless — you'll forget you're wearing it until someone compliments it."
    },
    {
      icon: <Gift className="w-6 h-6 text-primary" />,
      title: "The Ideal Thoughtful Gift",
      desc: "Perfect for birthdays, Mother's Day, holidays & more. A joyful, nature-inspired piece every woman and bird lover will treasure."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Simple, Fuss-Free Care",
      desc: "If it gets dirty, a gentle wipe with a dry microfiber cloth restores its vibrancy instantly. Store separately to keep it pristine."
    }
  ];

  return (
    <section id="features-grid" className="w-full bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            Designed To Delight
          </h2>
          <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mt-2">
            A necklace that's as practical as it is beautiful — lightweight, easy to care for, and a joy to gift.
          </p>
        </div>

        {/* Bento/Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="bg-[#FFF4F3]/30 border border-[#FF6C84]/5 hover:border-[#FF6C84]/20 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF4F3] flex items-center justify-center shrink-0 shadow-sm">
                {f.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from "react";
import { Leaf } from "lucide-react";
import { TRANSLATIONS } from "../data/translations";

// Dark color of the "Wear Nature. Wear Joy." section below — exact match
const DARK_BG = "rgb(28, 28, 28)";
const DARK_MID = "rgb(45, 26, 31)";

interface BrandStoryProps {
  lang: "ar" | "en";
}

export const BrandStory: React.FC<BrandStoryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="brand-story"
      className="w-full relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FFF4F3 0%, #FFFDFD 100%)",
      }}
    >
      {/* Subtle ambient glow in the middle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 70% 60%, rgba(255,108,132,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Text content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col gap-5">
            <span className="text-xs font-extrabold text-[#FF6C84] tracking-widest uppercase flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5" /> {t.ourStory}
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              <span className="text-black">{t.brandStoryTitle}</span>
            </h2>
            <div className="w-20 h-1 bg-[#FF6C84] rounded-full" />

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
              {t.brandStoryText}
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {lang === "ar"
                ? "مجوهراتنا مصممة خصيصاً لكل امرأة وفتاة تعشق الطبيعة وتهوى التألق بكل ثقة وجاذبية. كل تفصيلة فيها صُنعت بحب وعناية لتكون حديث الجميع أينما ذهبت."
                : "Each necklace is a hand-detailed acrylic pendant inspired by stained-glass art, crafted for women and girls who love colour, nature, and standing out gracefully."}
            </p>
            <div className={`flex flex-col gap-1 italic font-semibold text-sm py-1 ${lang === 'ar' ? 'border-r-4 border-[#FF6C84] pr-4' : 'border-l-4 border-[#FF6C84] pl-4'}`}
              style={{ color: "#c0788a" }}
            >
              <span>
                {lang === "ar"
                  ? "«كانت ترتدي بهجتها كقلادة — ملونة، خفيفة الوزن، ودائمة الحركة.»"
                  : '"She wore her joy like a necklace — colourful, light, and always in motion."'}
              </span>
              <span className="text-[#FF6C84] font-bold text-xs uppercase tracking-wider not-italic mt-1">
                {lang === "ar" ? "— فريق تصميم أوريا" : "— The AUREA Design Team"}
              </span>
            </div>
          </div>

          {/* Image — beautiful rounded card with shadow */}
          <div className="col-span-1 lg:col-span-6">
            <div className="relative overflow-hidden aspect-[4/5] rounded-3xl shadow-xl border border-[#FFD6DD]/50">
              <img
                src="/Images/pictureforus.png"
                alt="AUREA Fine Jewelry brand flatlay with cherry blossoms"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

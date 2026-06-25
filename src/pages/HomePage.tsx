import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck, Heart, Star, Bird, Gift, Truck } from "lucide-react";
import { CherryBlossomParticles } from "../components/CherryBlossomParticles";
import { BrandStory } from "../components/BrandStory";
import { TRANSLATIONS } from "../data/translations";
import heroImage from "../assets/hero-image.jpg";
import hummingbirdImg from "../assets/hummingbird-product-1.jpg";
import necklacesCollectionImg from "../../Images/3882680f8e41c1dce1edcc7ca77aa3f8.jpg";

interface HomePageProps {
  lang: "ar" | "en";
}

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const categories = [
    {
      id: "necklaces",
      name: lang === "ar" ? "القلادات" : "Necklaces",
      description: lang === "ar" ? "قلادات راقية وأنيقة لكل مناسبة" : "Elegant necklaces for every occasion",
      image: necklacesCollectionImg,
      tag: lang === "ar" ? "الأكثر طلباً" : "Featured",
      color: "#FF6C84",
      linkTo: "/shop",
    },
    {
      id: "bracelets",
      name: lang === "ar" ? "الأساور" : "Bracelets",
      description: lang === "ar" ? "قطع أنيقة للمعصم قادمة قريباً" : "Elegant wrist pieces coming soon",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600",
      tag: t.comingSoon,
      color: "#C084FC",
    },
    {
      id: "rings",
      name: lang === "ar" ? "الخواتم" : "Rings",
      description: lang === "ar" ? "تصاميم بسيطة وراقية تناسب كل مناسبة" : "Statement & minimalist rings for every occasion",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600",
      tag: t.comingSoon,
      color: "#FB923C",
    },
    {
      id: "earrings",
      name: lang === "ar" ? "الأقراط" : "Earrings",
      description: lang === "ar" ? "تصاميم متدلية ناعمة تضفي لمسة ساحرة" : "Delicate drops & playful stud designs",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600",
      tag: t.comingSoon,
      color: "#34D399",
    },
  ];

  return (
    <div>
      {/* ============================================ */}
      {/* HERO SECTION                                 */}
      {/* ============================================ */}
      <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Cherry blossom particles over hero */}
        <CherryBlossomParticles count={20} />

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="AUREA Fine Jewelry — curated collection of feminine luxury jewelry"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6 sm:gap-8 py-24 sm:py-32">
          {/* Brand Badge */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] px-5 py-2.5 rounded-full border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD6DD]" />
              <span>{lang === "ar" ? "أوريا للمجوهرات الراقية" : "AUREA FINE JEWELRY"}</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-fadeInUp font-heading" style={{ animationDelay: "0.25s", opacity: 0 }}>
            {lang === "ar" ? "جمال الطبيعة،" : "Nature's Beauty,"}
            <br />
            <span className="bg-gradient-to-r from-[#FFD6DD] to-[#FF6C84] bg-clip-text text-transparent">
              {lang === "ar" ? "ترتدينه بكل حب وبهجة" : "Worn With Joy"}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-medium animate-fadeInUp" style={{ animationDelay: "0.4s", opacity: 0 }}>
            {lang === "ar" 
              ? "اكتشفي مجوهراتنا النابضة بالحياة والمستوحاة من سحر الطبيعة — من قلادة طائر الطنان المفضلة إلى الأساور الفريدة. خفيفة، ملونة، ومصممة لتمنحك البهجة والتألق اليومي." 
              : "Discover vibrant, nature-inspired jewelry — from our beloved Hummingbird Necklace to handcrafted charms. Lightweight, colourful, and made to delight."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 animate-fadeInUp" style={{ animationDelay: "0.55s", opacity: 0 }}>
            <Link
              to="/shop"
              className="group bg-gradient-to-r from-[#FF6C84] to-[#FF8FAB] hover:from-[#FF5A73] hover:to-[#FF7B99] text-white font-bold text-sm sm:text-base px-9 py-4.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#FF6C84]/30 hover:scale-[1.03] hover:ring-4 hover:ring-[#FF6C84]/20 transition-all duration-300 flex items-center gap-3 active:scale-95 cursor-pointer"
            >
              <span>{lang === "ar" ? "تسوقي التشكيلة الآن" : "SHOP THE COLLECTION"}</span>
              <ArrowRight className={`w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-300 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </Link>
            <a
              href="#brand-story"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#brand-story")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white hover:text-[#FF6C84] font-bold text-sm sm:text-base px-7 py-4.5 rounded-full border border-white/30 hover:border-[#FF6C84]/60 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] active:scale-95 flex items-center justify-center"
            >
              {lang === "ar" ? "قصتنا" : "OUR STORY"}
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-white/60 text-xs font-semibold animate-fadeInUp" style={{ animationDelay: "0.7s", opacity: 0 }}>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FFD6DD]" />
              <span>{lang === "ar" ? "إرجاع سهل خلال 30 يوم" : "30-Day Returns"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#FFD6DD]" />
              <span>{lang === "ar" ? "مستوحاة من الطبيعة" : "Nature-Inspired"}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
              <span>{lang === "ar" ? "تقييم 4.9 / 5 نجوم" : "4.9 / 5 Stars"}</span>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================ */}
      {/* VALUE BAR                                    */}
      {/* ============================================ */}
      <section className="w-full bg-white py-10 sm:py-14 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { 
                icon: <Bird className="w-5 h-5 text-[#FF6C84]" />, 
                title: lang === "ar" ? "فن مستوحى من الطبيعة" : "Nature-Inspired Art", 
                desc: lang === "ar" ? "قلادات أكريليك فريدة من نوعها تحاكي جمال ونقاء الطبيعة" : "Stained-glass style acrylic pendants that are tiny works of art" 
              },
              { 
                icon: <Gift className="w-5 h-5 text-[#FF6C84]" />, 
                title: lang === "ar" ? "تقديم جاهز للهدايا" : "Perfect Gift-Ready", 
                desc: lang === "ar" ? "تأتي بعلبة إهداء فاخرة ومميزة لتهديها مباشرة لمن تحب" : "Beautifully presented — ready to give to anyone you love" 
              },
              { 
                icon: <Truck className="w-5 h-5 text-[#FF6C84]" />, 
                title: lang === "ar" ? "توصيل سريع لكل الولايات" : "Fast Nationwide Delivery", 
                desc: lang === "ar" ? "نوفر خدمة الشحن لجميع الولايات الجزائرية مباشرة لباب منزلك" : "Delivered to all 58 Algerian Wilayas, tracked and swift" 
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2.5">
                <div className="w-12 h-12 rounded-full bg-[#FFF4F3] flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EXPLORE OUR COLLECTIONS GRID                 */}
      {/* ============================================ */}
      <section className="relative w-full bg-gradient-to-b from-[#FFF4F3]/60 to-white py-16 sm:py-24 overflow-hidden">
        <CherryBlossomParticles count={12} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
            <span className="text-xs font-black text-[#FF6C84] uppercase tracking-[0.3em]">✦ {lang === "ar" ? "تصفحي" : "Explore"}</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black font-heading">
              {t.exploreCollections}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] mx-auto rounded-full" />
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mt-1">
              {t.exploreDesc}
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, idx) => {
              const isComingSoon = cat.tag === t.comingSoon;
              const linkTarget = (cat as any).linkTo ?? `/shop/${cat.id}`;
              return (
                <div
                  key={idx}
                  className={`group relative bg-white rounded-2xl overflow-hidden border border-[#FFD6DD]/40 shadow-sm transition-all duration-500 ${isComingSoon ? 'cursor-default' : 'hover:shadow-xl hover:border-[#FF6C84]/30 cursor-pointer'}`}
                >
                  {/* Image */}
                  <Link to={isComingSoon ? "#" : linkTarget} className="block" onClick={e => isComingSoon && e.preventDefault()}>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={cat.image}
                        alt={`${cat.name} — AUREA Jewelry collection`}
                        className={`w-full h-full object-cover transition-transform duration-700 ${isComingSoon ? 'blur-sm scale-110 brightness-50' : 'group-hover:scale-110'}`}
                        referrerPolicy="no-referrer"
                      />
                      {/* Coming soon overlay */}
                      {isComingSoon && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex flex-col items-center gap-1.5 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span className="text-xs font-black text-slate-700 uppercase tracking-wider">{t.comingSoon}</span>
                          </div>
                        </div>
                      )}
                      {!isComingSoon && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6C84]/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      )}
                      
                      {/* Tag Badge */}
                      <div
                        className="absolute top-3 left-3 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow"
                        style={{ background: isComingSoon ? '#94a3b8' : cat.color }}
                      >
                        {cat.tag}
                      </div>

                      {/* Category name on hover (active only) */}
                      {!isComingSoon && (
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="text-white font-black text-sm tracking-wide drop-shadow">{cat.name}</span>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex flex-col gap-2">
                    <h3 className={`text-sm sm:text-base font-bold ${isComingSoon ? 'text-slate-400' : 'text-slate-900'}`}>{cat.name}</h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{cat.description}</p>
                    {!isComingSoon ? (
                      <Link
                        to={linkTarget}
                        className="mt-1 text-[10px] sm:text-[11px] font-black text-[#FF6C84] hover:text-[#FF5A73] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        {t.viewDetails} <ArrowRight className={`w-3 h-3 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                      </Link>
                    ) : (
                      <span className="mt-1 text-[10px] font-bold text-slate-400 italic">
                        {lang === "ar" ? "ترقبي المزيد قريباً..." : "Stay tuned — coming soon..."}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory lang={lang} />

      {/* ============================================ */}
      {/* BOTTOM CTA                                   */}
      {/* ============================================ */}
      <section className="relative w-full overflow-hidden py-16 sm:py-20"
        style={{
          background: "linear-gradient(135deg, #1C1C1C 0%, #2d1a1f 50%, #1C1C1C 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[#FF6C84]/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-5 relative z-10">
          <span className="text-[10px] font-black text-[#FF6C84] uppercase tracking-[0.3em]">{lang === "ar" ? "انضمي لمجتمع أورا" : "JOIN THE COMMUNITY"}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight font-heading">
            {lang === "ar" ? "ارتدي جمال الطبيعة وتألقي بالبهجة." : "Wear Nature. Wear Joy."}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
            {lang === "ar"
              ? "من قلادة طائر الطنان الشهيرة إلى تشكيلاتنا الساحرة الجديدة القادمة — كوني أول من يكتشف روائع أورا الجديدة."
              : "From our Hummingbird Necklace to new collections arriving soon — be the first to discover what's new at AUREA."}
          </p>
          <Link
            to="/shop/hummingbird-necklace"
            className="mt-2 bg-[#FF6C84] hover:bg-[#FF5A73] text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-300 active:scale-95 hover:shadow-xl hover:shadow-[#FF6C84]/20 flex items-center gap-2 cursor-pointer"
          >
            {lang === "ar" ? "اشتري الآن" : "SHOP NOW"} <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </section>
    </div>
  );
};

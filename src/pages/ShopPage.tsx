import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Sparkles, Filter, SlidersHorizontal, Check, X } from "lucide-react";
import { CherryBlossomParticles } from "../components/CherryBlossomParticles";
import { PRODUCTS } from "../data/products";
import { TRANSLATIONS } from "../data/translations";

interface ShopPageProps {
  lang: "ar" | "en";
}

export const ShopPage: React.FC<ShopPageProps> = ({ lang }) => {
  const products = Object.values(PRODUCTS);
  const t = TRANSLATIONS[lang];

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStyle, setSelectedStyle] = useState<string>("All");
  const [maxPrice, setMaxPrice] = useState<number>(4000);
  const [sortBy, setSortBy] = useState<string>("default");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  const formatPrice = (amount: number) => {
    return lang === "ar" ? `${amount} د.ج` : `${amount} DA`;
  };

  const categories = ["All", "Necklaces"];
  const styles = [
    { value: "All", labelEn: "All Themes", labelAr: "كل الأشكال" },
    { value: "Nature", labelEn: "Nature-Inspired", labelAr: "مستوحى من الطبيعة" },
    { value: "Gothic", labelEn: "Gothic / Dark", labelAr: "غوطي / غامض" }
  ];

  // Filter and Sort Logic
  const filteredProducts = products.filter(product => {
    // Category Filter
    if (selectedCategory !== "All") {
      const matchCat = product.category === selectedCategory || product.categoryAr === selectedCategory;
      if (!matchCat) return false;
    }

    // Style/Theme Filter
    if (selectedStyle !== "All") {
      const isGothic = product.id.includes("bat");
      const isNature = product.id.includes("hummingbird");
      if (selectedStyle === "Gothic" && !isGothic) return false;
      if (selectedStyle === "Nature" && !isNature) return false;
    }

    // Price Filter
    if (product.price > maxPrice) return false;

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedStyle("All");
    setMaxPrice(4000);
    setSortBy("default");
  };

  return (
    <section id="shop-catalogue" className="relative w-full min-h-screen bg-gradient-to-b from-[#FFF4F3] to-white py-14 sm:py-20 overflow-hidden">
      <CherryBlossomParticles count={16} />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${lang === 'ar' ? 'text-right' : 'text-left'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>

        {/* Header */}
        <div className="text-center mb-10 flex flex-col gap-2">
          <span className="inline-flex items-center justify-center gap-2 text-xs font-black text-[#FF6C84] uppercase tracking-[0.3em]">
            <Sparkles className="w-4 h-4" />
            {lang === "ar" ? "تشكيلة أورا" : "Our Collection"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            {lang === "ar" ? "مجوهراتنا الراقية" : "Shop All Jewelry"}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] mx-auto rounded-full" />
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mt-1">
            {lang === "ar"
              ? "قطع فاخرة ومميزة مستوحاة من سحر الطبيعة. انقري على أي قطعة لتصفح كامل التفاصيل، المراجعات والطلب."
              : "Curated pieces inspired by nature. Click any item to explore full details, reviews, and more."}
          </p>
        </div>

        {/* Mobile Filter Toggle & Active Summary */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-white border border-[#FFD6DD] rounded-2xl text-xs font-bold text-slate-800 shadow-sm cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#FF6C84]" />
            <span>{lang === "ar" ? "الفلاتر والفرز" : "Filters & Sort"}</span>
          </button>

          <span className="text-xs font-semibold text-slate-500">
            {lang === "ar"
              ? `تم العثور على ${sortedProducts.length} منتجات`
              : `Found ${sortedProducts.length} items`}
          </span>
        </div>

        {/* Main Content Area: Sidebar + Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start w-full justify-center" dir="ltr">

          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:flex flex-col gap-6 w-64 bg-white border border-[#FFD6DD]/50 rounded-3xl p-6 shadow-sm shrink-0" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <div className="flex items-center justify-between pb-4 border-b border-[#FFD6DD]/25">
              <span className="font-extrabold text-sm text-slate-900 tracking-tight flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FF6C84]" />
                {lang === "ar" ? "فلاتر المنتجات" : "Filters"}
              </span>
              <button
                onClick={resetFilters}
                className="text-[10px] font-bold text-[#FF6C84] hover:underline cursor-pointer"
              >
                {lang === "ar" ? "إعادة تعيين" : "Reset All"}
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                {lang === "ar" ? "التصنيف" : "Category"}
              </span>
              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex items-center justify-between text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#FFF4F3] text-[#FF6C84] border border-[#FFD6DD]"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <span>{cat === "All" ? (lang === "ar" ? "كل المنتجات" : "All Products") : (lang === "ar" ? "قلادات" : cat)}</span>
                    {selectedCategory === cat && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Style / Theme Filter */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                {lang === "ar" ? "النمط" : "Style / Theme"}
              </span>
              <div className="flex flex-col gap-1.5">
                {styles.map((style) => (
                  <button
                    key={style.value}
                    onClick={() => setSelectedStyle(style.value)}
                    className={`flex items-center justify-between text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer ${
                      selectedStyle === style.value
                        ? "bg-[#FFF4F3] text-[#FF6C84] border border-[#FFD6DD]"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <span>{lang === "ar" ? style.labelAr : style.labelEn}</span>
                    {selectedStyle === style.value && <Check className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                {lang === "ar" ? "السعر الأقصى" : "Max Price"}
              </span>
              <div className="px-1">
                <input
                  type="range"
                  min="1000"
                  max="4000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#FF6C84] bg-slate-100 rounded-lg appearance-none cursor-pointer h-2"
                />
                <div className="flex justify-between items-center text-xs font-bold text-slate-600 mt-2">
                  <span>1000 DA</span>
                  <span className="text-[#FF6C84]">{formatPrice(maxPrice)}</span>
                </div>
              </div>
            </div>

            {/* Sorting */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-[#FFD6DD]/20">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                {lang === "ar" ? "الترتيب حسب" : "Sort By"}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 bg-slate-50/50 focus:outline-none focus:border-[#FF6C84]"
              >
                <option value="default">{lang === "ar" ? "الافتراضي" : "Default"}</option>
                <option value="price-low">{lang === "ar" ? "السعر: من الأقل للأعلى" : "Price: Low to High"}</option>
                <option value="price-high">{lang === "ar" ? "السعر: من الأعلى للأقل" : "Price: High to Low"}</option>
              </select>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-grow w-full max-w-3xl mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20 bg-white border border-[#FFD6DD]/40 rounded-3xl flex flex-col items-center justify-center gap-3">
                <X className="w-12 h-12 text-[#FF6C84]" />
                <span className="font-extrabold text-slate-800 text-lg">{lang === "ar" ? "لم يتم العثور على أي منتج" : "No Products Found"}</span>
                <p className="text-slate-400 text-xs sm:text-sm max-w-xs">{lang === "ar" ? "يرجى تغيير خيارات الفلاتر لإظهار نتائج أخرى." : "Try adjusting your filters or resetting to view all items."}</p>
                <button
                  onClick={resetFilters}
                  className="bg-[#FF6C84] text-white font-bold text-xs px-6 py-3 rounded-full hover:bg-[#FF5A73] transition-colors mt-2 cursor-pointer"
                >
                  {lang === "ar" ? "إعادة تعيين الفلاتر" : "Reset Filters"}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {sortedProducts.map((product) => {
                  const savings = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);
                  const name = lang === "ar" ? product.nameAr : product.name;
                  const subtitle = lang === "ar" ? product.subtitleAr : product.subtitle;
                  const badge = lang === "ar" ? product.badgeAr : product.badge;
                  const category = lang === "ar" ? product.categoryAr : product.category;

                  return (
                    <div
                      key={product.id}
                      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#FFD6DD]/40 hover:border-[#FF6C84]/30 transition-all duration-500 flex flex-col"
                    >
                      {/* Image Container */}
                      <Link to={`/shop/${product.id}`} className="relative aspect-square overflow-hidden bg-[#FFF9F0] block cursor-pointer">
                        <img
                          src={product.images[0]}
                          alt={name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6C84]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                        {/* Badge */}
                        <div className={`absolute top-3 ${lang === 'ar' ? 'right-3' : 'left-3'} bg-white/90 backdrop-blur-sm text-[10px] font-black text-slate-700 px-3 py-1.5 rounded-full shadow-sm border border-slate-100 flex items-center gap-1.5 z-10`}>
                          <Sparkles className="w-3 h-3 text-[#FF6C84]" />
                          {badge}
                        </div>
                      </Link>

                      {/* Info */}
                      <div className="p-5 flex flex-col gap-3 flex-grow">
                        <div>
                          <span className="text-[10px] font-black text-[#FF6C84] uppercase tracking-wider justify-start flex">{category}</span>
                          <Link to={`/shop/${product.id}`} className="hover:text-[#FF6C84] transition-colors">
                            <h2 className="text-base font-extrabold text-slate-900 font-heading leading-tight mt-0.5 justify-start flex hover:text-[#FF6C84] transition-colors">
                              {name}
                            </h2>
                          </Link>
                          <p className="text-xs text-slate-500 mt-0.5 justify-start flex">{subtitle}</p>
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-1.5 justify-start">
                          <div className="flex text-[#FFD700]">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                          </div>
                          <span className="text-[10px] text-slate-500 font-semibold">4.9 · {lang === "ar" ? "أكثر من 2800 مراجعة" : `${product.reviews.length * 450}+ reviews`}</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-2 justify-start mb-2">
                          <span className="text-2xl font-black text-[#FF6C84]">{formatPrice(product.price)}</span>
                          <span className="text-sm text-slate-400 line-through">{formatPrice(product.comparePrice)}</span>
                          <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                            -{savings}%
                          </span>
                        </div>

                        {/* CTAs */}
                        <div className="mt-auto flex flex-col sm:flex-row gap-2.5">
                          <Link
                            to={`/shop/${product.id}`}
                            className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-800 font-extrabold text-xs py-3.5 rounded-2xl border border-slate-200 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer text-center"
                          >
                            <span>{lang === "ar" ? "عرض التفاصيل" : "View Details"}</span>
                          </Link>
                          <Link
                            to={`/shop/${product.id}`}
                            className="flex-1 bg-gradient-to-r from-[#FF6C84] to-[#FF8FAB] hover:from-[#FF5A73] hover:to-[#FF6C84] text-white font-extrabold text-xs py-3.5 rounded-2xl shadow-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>{lang === "ar" ? "اشتري الآن" : "Buy Now"}</span>
                            <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Drawer Filter Dialog */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden md:hidden" role="dialog" aria-modal="true">
          <div onClick={() => setMobileFiltersOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-xs bg-white flex flex-col shadow-2xl h-full relative animate-fadeInRight border-l border-slate-100 p-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <span className="font-extrabold text-sm text-slate-900 tracking-tight flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#FF6C84]" />
                  {lang === "ar" ? "فلاتر المنتجات" : "Filters"}
                </span>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-slate-500 hover:text-black cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto flex flex-col gap-6">
                {/* Category Filter */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                    {lang === "ar" ? "التصنيف" : "Category"}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex items-center justify-between text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-[#FFF4F3] text-[#FF6C84] border border-[#FFD6DD]"
                            : "text-slate-600 hover:bg-slate-50 border border-transparent"
                        }`}
                      >
                        <span>{cat === "All" ? (lang === "ar" ? "كل المنتجات" : "All Products") : (lang === "ar" ? "قلادات" : cat)}</span>
                        {selectedCategory === cat && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style / Theme Filter */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                    {lang === "ar" ? "النمط" : "Style / Theme"}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {styles.map((style) => (
                      <button
                        key={style.value}
                        onClick={() => setSelectedStyle(style.value)}
                        className={`flex items-center justify-between text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer ${
                          selectedStyle === style.value
                            ? "bg-[#FFF4F3] text-[#FF6C84] border border-[#FFD6DD]"
                            : "text-slate-600 hover:bg-slate-50 border border-transparent"
                        }`}
                      >
                        <span>{lang === "ar" ? style.labelAr : style.labelEn}</span>
                        {selectedStyle === style.value && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                    {lang === "ar" ? "السعر الأقصى" : "Max Price"}
                  </span>
                  <div className="px-1">
                    <input
                      type="range"
                      min="1000"
                      max="4000"
                      step="100"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-[#FF6C84] bg-slate-100 rounded-lg appearance-none cursor-pointer h-2"
                    />
                    <div className="flex justify-between items-center text-xs font-bold text-slate-600 mt-2">
                      <span>1000 DA</span>
                      <span className="text-[#FF6C84]">{formatPrice(maxPrice)}</span>
                    </div>
                  </div>
                </div>

                {/* Sorting */}
                <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-wider justify-start flex">
                    {lang === "ar" ? "الترتيب حسب" : "Sort By"}
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 bg-slate-50/50 focus:outline-none focus:border-[#FF6C84]"
                  >
                    <option value="default">{lang === "ar" ? "الافتراضي" : "Default"}</option>
                    <option value="price-low">{lang === "ar" ? "السعر: من الأقل للأعلى" : "Price: Low to High"}</option>
                    <option value="price-high">{lang === "ar" ? "السعر: من الأعلى للأقل" : "Price: High to Low"}</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6 flex gap-3">
                <button
                  onClick={resetFilters}
                  className="flex-1 border border-slate-200 text-slate-600 font-bold py-3 rounded-2xl text-xs cursor-pointer"
                >
                  {lang === "ar" ? "إعادة تعيين" : "Reset"}
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 bg-[#FF6C84] text-white font-bold py-3 rounded-2xl text-xs cursor-pointer"
                >
                  {lang === "ar" ? "تطبيق" : "Apply"}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

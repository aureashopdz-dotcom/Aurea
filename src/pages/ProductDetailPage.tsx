import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star, CheckCircle, ShoppingBag, CreditCard, Feather, Gift, Palette,
  Sparkles, ShieldCheck, ArrowRight, HelpCircle, Plus, Minus, Check, X,
  ThumbsUp, Layers, Ruler, Package, Phone, Leaf, Bird, Truck, Lock, Globe, ChevronDown,
  Heart, Gem
} from "lucide-react";
import { PRODUCTS } from "../data/products";
import { CherryBlossomParticles } from "../components/CherryBlossomParticles";
import { TRANSLATIONS } from "../data/translations";

// Map icon names to components
const ICON_MAP: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-7 h-7 text-[#FF6C84]" />,
  Feather: <Feather className="w-7 h-7 text-[#FF6C84]" />,
  Gift: <Gift className="w-7 h-7 text-[#FF6C84]" />,
  Sparkles: <Sparkles className="w-7 h-7 text-[#FF6C84]" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-[#FF6C84]" />,
  Ruler: <Ruler className="w-7 h-7 text-[#FF6C84]" />,
  Layers: <Layers className="w-7 h-7 text-[#FF6C84]" />,
  Heart: <Heart className="w-7 h-7 text-[#FF6C84]" />,
  Gem: <Gem className="w-7 h-7 text-[#FF6C84]" />,
};

const FEATURE_ICON_MAP: Record<string, React.ReactNode> = {
  Feather: <Feather className="w-5 h-5 text-[#FF6C84]" />,
  Gift: <Gift className="w-5 h-5 text-[#FF6C84]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#FF6C84]" />,
  Ruler: <Ruler className="w-5 h-5 text-[#FF6C84]" />,
  Layers: <Layers className="w-5 h-5 text-[#FF6C84]" />,
  Heart: <Heart className="w-5 h-5 text-[#FF6C84]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#FF6C84]" />,
};

import wilayasData from "../data/wilayas.json";
import communesData from "../data/communes.json";

interface WilayaItem {
  id: string;
  code: string;
  name: string;
  ar_name: string;
}

interface CommuneItem {
  id: string;
  post_code: string;
  name: string;
  wilaya_id: string;
  ar_name: string;
}

const WILAYAS = wilayasData as WilayaItem[];
const COMMUNES = communesData as CommuneItem[];

interface ProductDetailPageProps {
  lang: "ar" | "en";
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ lang }) => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? PRODUCTS[productId] : null;

  const t = TRANSLATIONS[lang];

  const [activeImg, setActiveImg] = useState(0);
  const [selectedChain, setSelectedChain] = useState("Silver");
  const [selectedBundle, setSelectedBundle] = useState<"1" | "2" | "3">("2");
  const [spotlightActive, setSpotlightActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeReviewFilter, setActiveReviewFilter] = useState("all");

  // Form State
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedWilayaCode, setSelectedWilayaCode] = useState("");
  const [commune, setCommune] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setActiveImg(0);
    setSubmitted(false);
    setErrorMsg("");
    setFullName("");
    setPhoneNumber("");
    setSelectedWilayaCode("");
    setCommune("");
  }, [product?.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-3xl font-black text-slate-900">{lang === "ar" ? "المنتج غير موجود" : "Product Not Found"}</h1>
        <p className="text-slate-500">{lang === "ar" ? "هذا المنتج غير متوفر حالياً." : "This product doesn't exist or has been removed."}</p>
        <Link to="/" className="bg-[#FF6C84] text-white font-bold px-6 py-3 rounded-full hover:bg-[#FF5A73] transition-all">
          {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
        </Link>
      </div>
    );
  }

  // Cost Calculations
  const formatPrice = (amount: number) => {
    return lang === "ar" ? `${amount} د.ج` : `${amount} DA`;
  };

  const getBundleInfo = () => {
    const baseVal = product.price;
    const compVal = product.comparePrice;

    if (selectedBundle === "1") {
      return {
        qty: 1,
        title: lang === "ar" ? "قلادة واحدة" : "1 Piece",
        subtotal: baseVal,
        compareSubtotal: compVal,
        shipping: 600,
        total: baseVal + 600
      };
    } else if (selectedBundle === "2") {
      return {
        qty: 2,
        title: lang === "ar" ? "قلادتين (خصم 50% على الثانية)" : "2 Pieces (50% Off 2nd)",
        subtotal: Math.round(baseVal * 1.5),
        compareSubtotal: compVal * 2,
        shipping: 300,
        total: Math.round(baseVal * 1.5) + 300
      };
    } else {
      return {
        qty: 3,
        title: lang === "ar" ? "3 قلادات (الثالثة مجانية)" : "3 Pieces (Buy 2 Get 1 Free)",
        subtotal: baseVal * 2,
        compareSubtotal: compVal * 3,
        shipping: 0,
        total: baseVal * 2
      };
    }
  };

  const currentBundle = getBundleInfo();

  // Handlers
  const handleWhatsAppSupport = () => {
    const messageText = lang === "ar"
      ? `مرحباً أوريا، لدي استفسار بخصوص ${product.nameAr}...`
      : `Hello Aurea, I have a question regarding the ${product.name}...`;

    const encodedMessage = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/213560684042?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  const handleWebsiteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const activeWilayaObj = WILAYAS.find(w => w.code === selectedWilayaCode);
    const wilayaString = activeWilayaObj 
      ? `${activeWilayaObj.code} - ${lang === 'ar' ? activeWilayaObj.ar_name : activeWilayaObj.name}`
      : "";

    const payload = {
      name: fullName,
      phone: phoneNumber,
      wilaya: wilayaString,
      commune,
      productName: lang === "ar" ? product.nameAr : product.name,
      chain: selectedChain,
      bundle: currentBundle.title,
      totalPrice: lang === "ar" ? `${currentBundle.total} د.ج` : `${currentBundle.total} DA`,
      lang,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(lang === "ar" ? "حدث خطأ أثناء إرسال طلبك، يرجى المحاولة لاحقاً." : "Error sending your order, please try again.");
      }
    } catch (err) {
      setErrorMsg(lang === "ar" ? "تعذّر الاتصال بالخادم، يرجى المحاولة لاحقاً." : "Could not reach the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredReviews = activeReviewFilter === "all"
    ? product.reviews
    : product.reviews.filter(r => r.rating.toString() === activeReviewFilter);

  return (
    <div className={`relative ${lang === "ar" ? "text-right" : "text-left"}`}>
      <CherryBlossomParticles count={24} />
      {/* ─── PRODUCT HERO ─── */}
      <section id="product-hero" className="w-full bg-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Gallery */}
            <div className="col-span-1 lg:col-span-6 flex flex-col gap-4">
              <div className="relative bg-[#FFF9F0] border border-amber-100 rounded-2xl overflow-hidden aspect-square group shadow-sm">
                <img
                  src={product.images[activeImg]}
                  alt={lang === "ar" ? product.nameAr : product.name}
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-[1.03]"
                />
                <div className={`absolute top-4 ${lang === 'ar' ? 'right-4' : 'left-4'} bg-[#FF6C84] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 z-10`}>
                  <Sparkles className="w-3 h-3" />
                  {lang === "ar" ? product.badgeAr : product.badge}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImg(idx)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${activeImg === idx ? "border-[#FF6C84] ring-2 ring-[#FF6C84]/20 scale-[0.97]" : "border-transparent hover:border-amber-200"}`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 bg-[#FFF4F3]/60 p-3 rounded-xl border border-[#FF6C84]/10">
                <div className="flex text-[#FFD700]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-sm font-bold text-slate-800">4.9 / 5</span>
                <span className="text-xs text-slate-400 font-medium">· {lang === "ar" ? "أكثر من 2800 تقييم من مشترين موثقين" : "2800+ verified buyers"}</span>
              </div>
            </div>

            {/* Info and Embedded Checkout Panel */}
            <div id="checkout-form-container" className="col-span-1 lg:col-span-6 flex flex-col gap-6">
              <div>
                <p className="text-xs font-bold text-[#FF6C84] uppercase tracking-[0.2em] flex items-center gap-1.5 mb-2 justify-start">
                  <Bird className="w-3.5 h-3.5" /> {lang === "ar" ? product.categoryAr : product.category}
                </p>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black leading-tight font-heading">
                  {lang === "ar" ? product.nameAr : product.name}
                </h1>
                <p className="text-slate-500 text-sm mt-1">{lang === "ar" ? product.subtitleAr : product.subtitle}</p>
              </div>

              {/* Embedded Checkout Form Box */}
              <div className="bg-white rounded-3xl border-2 border-[#FF6C84]/15 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] p-5 text-white">
                  <div className="flex items-center gap-3 justify-start">
                    <Package className="w-5.5 h-5.5 text-white" />
                    <div>
                      <h3 className="font-black text-base sm:text-lg font-heading">{lang === "ar" ? "أطلب مباشرة الآن من هنا" : "Order Directly from Here"}</h3>
                      <p className="text-white/90 text-xs">{lang === "ar" ? "أدخل معلومات التوصيل وسنتصل بك فوراً" : "Enter delivery details for immediate dispatch"}</p>
                    </div>
                  </div>
                </div>

                {submitted ? (
                  /* Success State Receipt */
                  <div className="p-6 flex flex-col items-center justify-center gap-5 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-black font-heading">{t.orderSuccessTitle}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                      {t.orderSuccessDesc.replace("{name}", fullName).replace("{phone}", phoneNumber).replace("{commune}", commune).replace("{wilaya}", wilaya)}
                    </p>
                    <div className="w-full bg-[#FFF4F3] border border-[#FFD6DD] rounded-2xl p-4 text-sm flex flex-col gap-2 mt-2">
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>{lang === "ar" ? "العرض المطلوب" : "Package"}</span>
                        <span>{currentBundle.title}</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-700">
                        <span>{lang === "ar" ? "السلسلة" : "Chain"}</span>
                        <span>{selectedChain === "Gold" ? (lang === "ar" ? "ذهب" : "Gold") : (lang === "ar" ? "فضة" : "Silver")}</span>
                      </div>
                      <div className="border-t border-[#FFD6DD] pt-2 flex justify-between font-black text-[#FF6C84] text-base">
                        <span>{t.total}</span>
                        <span>{formatPrice(currentBundle.total)}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 bg-[#FF6C84] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#FF5A73] transition-all cursor-pointer"
                    >
                      {lang === "ar" ? "طلب جديد" : "New Order"}
                    </button>
                  </div>
                ) : (
                  <div>
                    <form onSubmit={handleWebsiteSubmit} className="p-6 flex flex-col gap-4 text-xs sm:text-sm">
                      {errorMsg && (
                        <div className="bg-rose-50 border border-rose-200 text-rose-700 font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 justify-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      {/* Chain Selection */}
                      <div className="flex flex-col gap-2">
                        <label className="font-bold text-slate-700 uppercase tracking-wider justify-start flex">
                          {t.chain}: <span className="text-slate-900 mx-1">{selectedChain === "Gold" ? (lang === "ar" ? "ذهب" : "Gold") : (lang === "ar" ? "فضة" : "Silver")}</span>
                        </label>
                        <div className="flex gap-3">
                        {(lang === "ar" ? product.chainOptionsAr : product.chainOptions)?.map((chain, i) => {
                          const engVal = product.chainOptions ? product.chainOptions[i] : chain;
                          return (
                            <button
                              type="button"
                              key={chain}
                              onClick={() => setSelectedChain(engVal)}
                              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-bold transition-all duration-200 cursor-pointer ${
                                selectedChain === engVal
                                  ? engVal === "Gold" ? "border-amber-500 bg-amber-50 text-amber-800" : "border-slate-700 bg-slate-50 text-slate-900"
                                  : "border-slate-200 text-slate-500 hover:border-slate-300"
                              }`}
                            >
                              <span className={`w-4 h-4 rounded-full inline-block border ${engVal === "Gold" ? "bg-gradient-to-br from-yellow-300 to-amber-500 border-amber-400" : "bg-gradient-to-br from-slate-300 to-slate-500 border-slate-400"}`} />
                              {chain}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bundle Selection */}
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-slate-700 uppercase tracking-wider flex justify-start">{t.selectBundle}</label>
                      <div className="flex flex-col gap-2">
                        {/* Option 1 */}
                        <button
                          type="button"
                          onClick={() => setSelectedBundle("1")}
                          className={`flex items-center justify-between p-4 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 ${
                            selectedBundle === "1" ? "border-[#FF6C84] bg-[#FFF4F3]/40" : "border-slate-100 hover:border-slate-200"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="bundle"
                              checked={selectedBundle === "1"}
                              onChange={() => setSelectedBundle("1")}
                              className="accent-[#FF6C84] w-4 h-4 cursor-pointer"
                            />
                            <div className="text-right">
                              <p className="font-extrabold text-slate-900">{lang === "ar" ? "1 قلادة" : "1 Necklace"}</p>
                              <p className="text-[10px] text-slate-500">{lang === "ar" ? "+ 600 د.ج الشحن" : "+ 600 DA Shipping"}</p>
                            </div>
                          </div>
                          <div className="text-left font-black text-slate-800">
                            <p className="text-base text-[#FF6C84]">{formatPrice(product.price)}</p>
                            <p className="text-[10px] text-slate-400 line-through">{formatPrice(product.comparePrice)}</p>
                          </div>
                        </button>

                        {/* Option 2 */}
                        <button
                          type="button"
                          onClick={() => setSelectedBundle("2")}
                          className={`flex items-center justify-between p-4 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 relative overflow-hidden ${
                            selectedBundle === "2" ? "border-[#FF6C84] bg-[#FFF4F3]/40" : "border-slate-100 hover:border-slate-200"
                          }`}
                        >
                          <div className="absolute top-0 left-0 bg-emerald-500 text-white font-black text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-br-lg">
                            {lang === "ar" ? "خصم التوصيل + الثانية بنصف السعر!" : "Half Delivery + 50% Off 2nd!"}
                          </div>
                          <div className="flex items-center gap-3 mt-1.5">
                            <input
                              type="radio"
                              name="bundle"
                              checked={selectedBundle === "2"}
                              onChange={() => setSelectedBundle("2")}
                              className="accent-[#FF6C84] w-4 h-4 cursor-pointer"
                            />
                            <div className="text-right">
                              <p className="font-extrabold text-slate-900">{lang === "ar" ? "2 قلادة (عرض التوفير)" : "2 Necklaces (Savings Bundle)"}</p>
                              <p className="text-[10px] text-slate-500">{lang === "ar" ? "+ 300 د.ج التوصيل (مخفض للنصف!)" : "+ 300 DA Shipping (Cut in half!)"}</p>
                            </div>
                          </div>
                          <div className="text-left font-black text-slate-800 mt-1.5">
                            <p className="text-base text-[#FF6C84]">{formatPrice(Math.round(product.price * 1.5))}</p>
                            <p className="text-[10px] text-slate-400 line-through">{formatPrice(product.comparePrice * 2)}</p>
                          </div>
                        </button>

                        {/* Option 3 */}
                        <button
                          type="button"
                          onClick={() => setSelectedBundle("3")}
                          className={`flex items-center justify-between p-4 rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 relative overflow-hidden ${
                            selectedBundle === "3" ? "border-[#FF6C84] bg-[#FFF4F3]/40" : "border-slate-100 hover:border-slate-200"
                          }`}
                        >
                          <div className="absolute top-0 left-0 bg-[#FF6C84] text-white font-black text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-br-lg">
                            {lang === "ar" ? "الأفضل قيمة + شحن مجاني!" : "Best Value + Free Shipping!"}
                          </div>
                          <div className="flex items-center gap-3 mt-1.5">
                            <input
                              type="radio"
                              name="bundle"
                              checked={selectedBundle === "3"}
                              onChange={() => setSelectedBundle("3")}
                              className="accent-[#FF6C84] w-4 h-4 cursor-pointer"
                            />
                            <div className="text-right">
                              <p className="font-extrabold text-slate-900">{lang === "ar" ? "3 قلادات (اشتري 2 واحصل على 1 مجاناً)" : "3 Necklaces (Buy 2 Get 1 Free)"}</p>
                              <p className="text-[10px] text-emerald-600 font-bold">{lang === "ar" ? "شحن مجاني!" : "FREE SHIPPING!"}</p>
                            </div>
                          </div>
                          <div className="text-left font-black text-slate-800 mt-1.5">
                            <p className="text-base text-[#FF6C84]">{formatPrice(product.price * 2)}</p>
                            <p className="text-[10px] text-slate-400 line-through">{formatPrice(product.comparePrice * 3)}</p>
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Delivery Form inputs */}
                    <div className="flex flex-col gap-3.5 border-t border-slate-100 pt-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-slate-700 flex justify-start">{t.fullName}</label>
                        <input
                          required
                          type="text"
                          placeholder={lang === "ar" ? "الاسم الثلاثي بالكامل" : "e.g. Amira Boudiaf"}
                          value={fullName}
                          onChange={e => setFullName(e.target.value)}
                          className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-slate-700 flex justify-start">{t.phoneNumber}</label>
                        <div className="flex gap-2">
                          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 font-bold text-slate-600 shrink-0 select-none">
                            🇩🇿 +213
                          </div>
                          <input
                            required
                            type="tel"
                            placeholder={lang === "ar" ? "مثال: 0551 23 45 67" : "0551 234 567"}
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                            className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all"
                          />
                        </div>
                      </div>

                      {/* Wilaya dropdown */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-slate-700 flex justify-start">{t.wilaya}</label>
                        <div className="relative">
                          <select
                            required
                            value={selectedWilayaCode}
                            onChange={e => {
                              setSelectedWilayaCode(e.target.value);
                              setCommune("");
                            }}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all appearance-none pr-10"
                          >
                            <option value="">{t.chooseWilaya}</option>
                            {WILAYAS.slice().sort((a, b) => parseInt(a.code) - parseInt(b.code)).map(w => (
                              <option key={w.code} value={w.code}>
                                {w.code} - {lang === "ar" ? w.ar_name : w.name}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Commune */}
                      <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-slate-700 flex justify-start">{t.commune}</label>
                        <div className="relative">
                          <select
                            required
                            disabled={!selectedWilayaCode}
                            value={commune}
                            onChange={e => setCommune(e.target.value)}
                            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all appearance-none pr-10 disabled:bg-slate-50 disabled:text-slate-400"
                          >
                            <option value="">{lang === "ar" ? "اختر البلدية" : "-- Choose Commune --"}</option>
                            {COMMUNES.filter(c => c.wilaya_id === selectedWilayaCode).map(c => (
                              <option key={c.id} value={lang === "ar" ? c.ar_name : c.name}>
                                {lang === "ar" ? c.ar_name : c.name}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="bg-[#FFF4F3] rounded-2xl p-4 border border-[#FFD6DD] flex flex-col gap-2 mt-2">
                      <p className="font-bold text-slate-800 border-b border-[#FFD6DD] pb-1.5 justify-start flex">{t.orderSummary}</p>
                      <div className="flex justify-between text-slate-700 font-semibold">
                        <span>{t.productTotal}</span>
                        <span>{formatPrice(currentBundle.subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-slate-700 font-semibold">
                        <span>{t.deliveryFee}</span>
                        <span>{currentBundle.shipping === 0 ? (lang === "ar" ? "مجاني" : "FREE") : formatPrice(currentBundle.shipping)}</span>
                      </div>
                      <div className="flex justify-between font-black text-[#FF6C84] text-base border-t border-[#FFD6DD]/60 pt-1.5">
                        <span>{t.total}</span>
                        <span>{formatPrice(currentBundle.total)}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-3 mt-2">
                      {/* Website submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF6C84] hover:bg-[#FF5A73] disabled:bg-slate-300 text-white font-black text-sm py-4.5 rounded-2xl shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        ) : (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>{t.orderViaWebsite}</span>
                          </>
                        )}
                      </button>

                      {/* WhatsApp Support button */}
                      <button
                        type="button"
                        onClick={handleWhatsAppSupport}
                        className="w-full bg-transparent hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs py-3.5 rounded-2xl transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5 fill-slate-700 text-slate-700" />
                        <span>{t.orderViaWhatsApp}</span>
                      </button>
                    </div>

                    {/* Trust line */}
                    <p className="text-center text-[10px] text-slate-400 font-medium mt-1">
                      🔒 {lang === "ar" ? "معلوماتك مشفرة تماماً وتستخدم للتوصيل فقط. الدفع كاش عند الاستلام." : "Your information is secure and only used for shipping. Cash on delivery."}
                    </p>
                  </form>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT DESCRIPTION & SPECS ─── */}
      <section className="w-full bg-white py-12 sm:py-16 border-b border-[#FFD6DD]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Description */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#FF6C84] to-[#FFB7C5]" />
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight font-heading">
                  {lang === "ar" ? "عن هذا المنتج" : "About This Piece"}
                </h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === "ar" ? product.descriptionAr : product.description}
              </p>
            </div>

            {/* Specs */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1 h-6 rounded-full bg-gradient-to-b from-[#FF6C84] to-[#FFB7C5]" />
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight font-heading">
                  {lang === "ar" ? "المواصفات" : "Specifications"}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(lang === "ar" ? product.specsAr : product.specs).map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-[#FFF4F3]/60 border border-[#FFD6DD]/50 rounded-xl px-3.5 py-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF6C84] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUE PROPS ─── */}
      <section id="value-props" className="relative w-full bg-[#FFF4F3] py-16 sm:py-24 border-y border-[#FF6C84]/5 overflow-hidden">
        <CherryBlossomParticles count={10} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
              {lang === "ar" ? product.valuePropHeadingAr : product.valuePropHeading}
            </h2>
            <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed mt-2">
              {lang === "ar" ? product.valuePropSubheadingAr : product.valuePropSubheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.valueProps.map((vp, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF6C84]/20 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start ${lang === 'ar' ? 'sm:text-right' : 'sm:text-left'}`}>
                <div className="p-3 bg-[#FFF4F3] rounded-xl shrink-0 mx-auto sm:mx-0">{ICON_MAP[vp.iconName]}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">{lang === "ar" ? vp.titleAr : vp.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1">{lang === "ar" ? vp.descAr : vp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STYLE SPOTLIGHT ─── */}
      <section id="style-spotlight" className="relative w-full bg-gradient-to-b from-[#FFF9FB] to-white py-16 sm:py-24 overflow-hidden">
        <CherryBlossomParticles count={12} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
              {lang === "ar" ? product.spotlightHeadingAr : product.spotlightHeading}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] mx-auto rounded-full" />
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              {lang === "ar" ? product.spotlightSubheadingAr : product.spotlightSubheading}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border border-[#FFD6DD]/40">
                <img key={spotlightActive} src={product.spotlightPanels[spotlightActive].image} alt={product.spotlightPanels[spotlightActive].label} className="w-full h-full object-cover object-center" style={{ animation: "scaleIn 0.6s ease-out forwards" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className={`absolute bottom-6 ${lang === 'ar' ? 'right-6' : 'left-6'} text-white font-black text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full`} style={{ background: product.spotlightPanels[spotlightActive].color }}>
                  {lang === "ar" ? product.spotlightPanels[spotlightActive].tagAr : product.spotlightPanels[spotlightActive].tag}
                </div>
                <div className={`absolute top-5 ${lang === 'ar' ? 'left-5' : 'right-5'} flex gap-0.5`}>
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700] drop-shadow" />)}
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl transition-all duration-700" style={{ background: `radial-gradient(circle at center, ${product.spotlightPanels[spotlightActive].color}, transparent 70%)` }} />
            </div>
            <div className="flex flex-col gap-5">
              {product.spotlightPanels.map((panel, i) => (
                <button key={i} onClick={() => setSpotlightActive(i)} className={`flex gap-5 items-center p-5 rounded-2xl border-2 text-right transition-all duration-300 cursor-pointer ${i === spotlightActive ? "border-[#FF6C84] bg-white shadow-lg" : "border-slate-100 bg-white/60 hover:border-[#FFD6DD] hover:bg-white"}`}>
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                    <img src={panel.image} alt={panel.label} className={`w-full h-full object-cover transition-transform duration-500 ${i === spotlightActive ? "scale-110" : ""}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 justify-start">
                      <div className="w-2 h-2 rounded-full shrink-0 animate-pulse" style={{ background: i === spotlightActive ? panel.color : "#CBD5E1" }} />
                      <span className="text-sm font-black" style={{ color: i === spotlightActive ? panel.color : "#1e293b" }}>{lang === "ar" ? panel.labelAr : panel.label}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{lang === "ar" ? panel.captionAr : panel.caption}</p>
                  </div>
                </button>
              ))}
              <div className="flex flex-wrap gap-3 mt-1 justify-center lg:justify-start">
                {[
                  { icon: <Gift className="w-3.5 h-3.5" />, text: lang === "ar" ? "هدايا مجانية مميزة" : "Free Bundle Gifts" },
                  { icon: <Truck className="w-3.5 h-3.5" />, text: lang === "ar" ? "شحن سريع وآمن" : "Fast Delivery" },
                  { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: lang === "ar" ? "ضمان إرجاع خلال 30 يوم" : "30-Day Returns" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#FFF4F3] border border-[#FFD6DD] px-3.5 py-2 rounded-full text-xs font-bold text-slate-700">
                    <span className="text-[#FF6C84]">{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section id="comparison" className="w-full bg-[#FFE3CA]/25 py-16 sm:py-24 border-y border-[#FFE3CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
              {lang === "ar" ? product.comparisonHeadingAr : product.comparisonHeading}
            </h2>
            <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
            <div className="grid grid-cols-12 bg-slate-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase text-center py-4 px-4 sm:px-6 items-center">
              <div className={`col-span-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{lang === "ar" ? "الميزة" : "Feature"}</div>
              <div className="col-span-4 bg-[#FF6C84]/10 text-[#FF6C84] py-1 rounded-lg">AUREA {lang === "ar" ? product.shortNameAr : product.shortName}</div>
              <div className="col-span-4 text-slate-400">{lang === "ar" ? "الأنواع الأخرى" : "Others"}</div>
            </div>
            {product.comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 py-5 px-4 sm:px-6 items-center text-center gap-x-2 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                <div className={`col-span-4 ${lang === 'ar' ? 'text-right' : 'text-left'} text-xs sm:text-sm font-bold text-slate-900`}>{lang === "ar" ? row.featureAr : row.feature}</div>
                <div className="col-span-4 flex flex-col items-center gap-1.5 px-1 bg-[#FFF4F3]/30 py-2 rounded-xl border border-[#FF6C84]/10">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-800 font-semibold leading-relaxed">{lang === "ar" ? row.oursAr : row.ours}</span>
                </div>
                <div className="col-span-4 flex flex-col items-center gap-1.5 px-1">
                  <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                    <X className="w-3.5 h-3.5 text-rose-600" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-medium leading-relaxed">{lang === "ar" ? row.othersAr : row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section id="reviews" className="relative w-full bg-[#F8F8F8] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
              {lang === "ar" ? product.reviewsHeadingAr : product.reviewsHeading}
            </h2>
            <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full" />
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-5 md:sticky md:top-36">
              <div className="text-center flex flex-col gap-1">
                <span className="text-5xl font-black text-black">4.9</span>
                <div className="flex justify-center text-[#FFD700] my-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-slate-700">{lang === "ar" ? `مستند إلى ${product.reviews.length} تقييم` : `Out of ${product.reviews.length} reviews`}</span>
              </div>
              <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-wider mb-1 flex justify-start">{lang === "ar" ? "تصفية التقييمات:" : "Filter:"}</span>
                {["all", "5", "4"].map(f => (
                  <button key={f} onClick={() => setActiveReviewFilter(f)} className={`w-full text-right px-4 py-2.5 rounded-lg transition-all cursor-pointer ${lang === 'ar' ? 'text-right' : 'text-left'} ${activeReviewFilter === f ? "bg-[#FF6C84] text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"}`}>
                    {f === "all" ? (lang === "ar" ? `كل التقييمات (${product.reviews.length})` : `All Reviews (${product.reviews.length})`) : (lang === "ar" ? `${f} نجوم` : `${f} Stars`)}
                  </button>
                ))}
              </div>
            </div>
            {/* Review cards */}
            <div className="w-full md:w-2/3 flex flex-col gap-5">
              {filteredReviews.map(r => (
                <div key={r.id} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFF4F3] text-[#FF6C84] flex items-center justify-center font-bold text-sm border border-[#FF6C84]/10">
                        {r.name[0]}
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-slate-900">{r.name}</p>
                        <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                          <Check className="w-3 h-3" /> {lang === "ar" ? "مشتري موثق" : "Verified Buyer"}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">{lang === "ar" ? r.dateAr : r.date}</span>
                  </div>
                  <div className="flex text-[#FFD700] gap-0.5 justify-start">{[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                  <h4 className="text-base font-bold text-slate-900 font-heading justify-start flex">{lang === "ar" ? r.titleAr : r.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed justify-start flex">{lang === "ar" ? r.reviewAr : r.review}</p>
                  {r.image && (
                    <div className="mt-2 max-w-xs rounded-xl overflow-hidden border border-slate-100 bg-slate-50 self-start">
                      <img src={r.image} alt={r.title} className="w-full max-h-48 object-cover" />
                    </div>
                  )}
                  <div className="border-t border-slate-50 pt-3 text-xs text-slate-400 font-semibold flex items-center gap-2 justify-start">
                    <ThumbsUp className="w-3.5 h-3.5" /> {lang === "ar" ? `مفيد (${r.helpfulCount})` : `Helpful (${r.helpfulCount})`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="w-full bg-white py-16 sm:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
              {lang === "ar" ? product.featuresHeadingAr : product.featuresHeading}
            </h2>
            <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((f, idx) => (
              <div key={idx} className="bg-[#FFF4F3]/30 border border-[#FF6C84]/5 hover:border-[#FF6C84]/20 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[#FFF4F3] flex items-center justify-center shadow-sm">
                  {FEATURE_ICON_MAP[f.iconName]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading justify-start flex">{lang === "ar" ? f.titleAr : f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1 justify-start flex">{lang === "ar" ? f.descAr : f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="w-full bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 flex flex-col gap-3">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">{lang === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</h2>
            <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed mt-2">{lang === "ar" ? `كل ما تحتاجين لمعرفته عن ${product.shortNameAr}.` : `Everything you need to know about the ${product.shortName}.`}</p>
          </div>
          <div className="flex flex-col gap-4">
            {product.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`border rounded-2xl transition-all duration-300 ${isOpen ? "border-[#FF6C84] bg-[#FFF4F3]/30 shadow-sm" : "border-slate-200 bg-white hover:border-slate-300"}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none cursor-pointer" aria-expanded={isOpen}>
                    <span className="text-sm sm:text-base font-heading flex items-center gap-2.5">
                      <HelpCircle className="w-5 h-5 text-slate-400 shrink-0" />
                      {lang === "ar" ? faq.questionAr : faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full shrink-0 transition-all duration-300 ${isOpen ? "bg-[#FF6C84] text-white" : "bg-slate-100 text-slate-600"}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64 border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
                    <p className="px-6 py-5 text-slate-600 text-sm leading-relaxed">{lang === "ar" ? faq.answerAr : faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section id="final-cta" className="relative w-full bg-gradient-to-b from-[#FFF4F3] to-white py-16 sm:py-24 overflow-hidden">
        <CherryBlossomParticles count={14} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2d1a1f] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#FF6C84]/20 flex flex-col items-center text-center gap-6">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF6C84]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FF8FAB]/10 rounded-full blur-3xl" />
            <div className="bg-[#FF6C84] text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest flex items-center gap-1.5 animate-bounce">
              <Sparkles className="w-3.5 h-3.5" />
              {t.limitedTimeOffer}
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-2xl font-heading">
              {lang === "ar" ? product.ctaHeadingAr : product.ctaHeading}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">{lang === "ar" ? product.ctaSubheadingAr : product.ctaSubheading}</p>
            <button
              onClick={() => {
                document.getElementById("checkout-form-container")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#FF6C84] hover:bg-[#FF5A73] text-white font-bold text-base sm:text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center gap-3 mt-2 cursor-pointer"
            >
              <span>{lang === "ar" ? "أطلبي الآن مباشرة من هنا" : "Order Directly Now"}</span>
              <ArrowRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-400 text-xs font-semibold">
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> {lang === "ar" ? "إرجاع خلال 30 يوم" : "30-Day Returns"}</div>
              <div className="flex items-center gap-1.5"><Gift className="w-4 h-4 text-emerald-500" /> {lang === "ar" ? "هدايا مميزة متضمنة" : "Free Bundle Gifts"}</div>
              <div className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-emerald-500" /> {lang === "ar" ? "توصيل سريع لكل الولايات" : "Fast Nationwide Delivery"}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

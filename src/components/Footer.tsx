import React, { useState } from "react";
import { Mail, Heart, Sparkles, Phone, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { TRANSLATIONS } from "../data/translations";

interface FooterProps {
  lang: "ar" | "en";
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="main-footer" className="w-full relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-0"
        style={{
          background: "linear-gradient(135deg, #fff0f3, #ffe4ee, #ffd6dd, #ffb7c5, #ff8fab, #ffd6dd, #fff0f3)",
          backgroundSize: "300% 300%",
          animation: "gradientShift 8s ease infinite",
        }}
      />

      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Subtle white overlay for readability */}
      <div className="absolute inset-0 bg-white/30 -z-0" />

      <div className="relative z-10 pt-16 pb-8">
        {/* Newsletter Block */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#FF6C84]/15 shadow-lg">
            <div className="flex flex-col gap-2 max-w-md">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF6C84]" />
                <span className="text-xs font-black text-[#FF6C84] uppercase tracking-[0.25em]">{t.newsletterTitle}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-heading leading-tight">
                {t.newsletterSub}
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {t.newsletterDesc}
              </p>
            </div>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold px-6 py-4 rounded-2xl text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>{t.couponSent}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full md:w-auto max-w-md flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.enterEmail}
                  className="bg-white text-slate-900 placeholder-slate-400 text-sm font-semibold rounded-full px-5 py-3.5 border border-[#FFD6DD] focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] min-w-[15rem] shadow-sm"
                />
                <button
                  type="submit"
                  className="bg-[#FF6C84] hover:bg-[#FF5A73] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full active:scale-95 transition-all shadow-md shrink-0 uppercase tracking-wider cursor-pointer"
                >
                  {t.getCoupon}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
              <Link to="/" className="flex flex-col group w-fit">
                <span className="text-2xl font-black tracking-[0.25em] text-slate-900 group-hover:text-[#FF6C84] transition-colors font-heading">AUREA</span>
                <span className="text-[8px] font-bold tracking-[0.4em] text-slate-500 uppercase -mt-0.5">{lang === "ar" ? "للمجوهرات الراقية" : "fine jewelry"}</span>
              </Link>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                {lang === "ar" ? "مجوهرات راقية مستوحاة من سحر الطبيعة لتبرز جمالك الطبيعي وتألقك اليومي." : "Nature-inspired jewelry designed to celebrate your beauty. Vibrant, lightweight, and crafted for every woman."}
              </p>
            </div>

            {/* Collections */}
            <div className="col-span-1 md:col-span-2 flex flex-col gap-3">
              <span className="text-xs font-black text-slate-800 tracking-widest uppercase">{lang === "ar" ? "التشكيلات" : "Collections"}</span>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                {["hummingbird-necklace", "bat-heart-necklace"].map(id => (
                  <li key={id}>
                    <Link to={`/shop/${id}`} className="hover:text-[#FF6C84] transition-colors">
                      {lang === "ar" ? (id === "hummingbird-necklace" ? "قلادة طائر الطنان" : "قلادة قلب الخفاش") : (id === "hummingbird-necklace" ? "Hummingbird Necklace" : "Bat Heart Necklace")}
                    </Link>
                  </li>
                ))}
                <li><span className="text-slate-400">{lang === "ar" ? "قريباً: خواتم" : "Coming Soon: Rings"}</span></li>
                <li><span className="text-slate-400">{lang === "ar" ? "قريباً: أقراط" : "Coming Soon: Earrings"}</span></li>
              </ul>
            </div>

            {/* Customer Care */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-3">
              <span className="text-xs font-black text-slate-800 tracking-widest uppercase">{t.customerCare}</span>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                <li><a href="#faq" className="hover:text-[#FF6C84] transition-colors">{lang === "ar" ? "إرجاع سهل خلال 30 يوم" : "30-Day Easy Returns"}</a></li>
                <li><a href="#faq" className="hover:text-[#FF6C84] transition-colors">{lang === "ar" ? "تتبع طلبيتك" : "Track Your Order"}</a></li>
                <li><a href="#faq" className="hover:text-[#FF6C84] transition-colors">{lang === "ar" ? "التوصيل والشحن" : "Shipping & Delivery"}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-3">
              <span className="text-xs font-black text-slate-800 tracking-widest uppercase">{t.contactUs}</span>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#FF6C84] shrink-0" />
                  <span>care@aureajewelry.co</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#FF6C84] shrink-0" />
                  <a href="tel:+213560684042" className="hover:text-[#FF6C84] transition-colors">+213 560 684 042</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#FF6C84] shrink-0" />
                  <span>{lang === "ar" ? "السبت–الخميس، 9 صباحاً–6 مساءً" : "Sat–Thu, 9AM–6PM"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6C84] shrink-0" />
                  <span>{lang === "ar" ? "الجزائر العاصمة، الجزائر" : "Algiers, Algeria"}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#FF6C84]/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 font-medium text-center sm:text-left flex items-center gap-1.5">
              {t.allRightsReserved}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 opacity-80">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{lang === "ar" ? "طرق الدفع المتوفرة" : "Payment"}</span>
              {["CIB", "Dahabia", "Cash on Delivery / الدفع عند الاستلام"].map(p => (
                <div key={p} className="bg-white/80 border border-[#FFD6DD] px-2.5 py-1 rounded-lg text-[10px] font-black text-slate-700">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

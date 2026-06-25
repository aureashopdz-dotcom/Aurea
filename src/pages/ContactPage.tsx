import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Heart } from "lucide-react";
import { CherryBlossomParticles } from "../components/CherryBlossomParticles";

interface ContactPageProps {
  lang: "ar" | "en";
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isAr = lang === "ar";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          message,
          lang,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert(isAr ? "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة لاحقاً." : "An error occurred. Please try again.");
      }
    } catch {
      alert(isAr ? "تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً." : "Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative min-h-screen ${isAr ? "text-right" : "text-left"}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <CherryBlossomParticles count={20} />

      {/* ── FULL-BLEED HERO BANNER ── */}
      <section className="relative w-full h-[52vh] min-h-[360px] max-h-[520px] overflow-hidden">
        {/* Background image */}
        <img
          src="/Images/pictureforus.png"
          alt="AUREA Fine Jewelry"
          className="absolute inset-0 w-full h-full object-cover object-top scale-[1.06]"
        />
        {/* Gradient overlay — heavy at bottom, light at top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0812]/30 via-[#1a0812]/20 to-[#fff4f3] pointer-events-none" />
        {/* Side fades */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(255,244,243,0.4) 0%, transparent 18%, transparent 82%, rgba(255,244,243,0.4) 100%)" }}
        />

        {/* Hero text centred on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-4 pb-12">
          <span className="text-xs font-black text-white/80 uppercase tracking-[0.4em] drop-shadow">
            ✦ {isAr ? "تواصلي معنا" : "Get In Touch"}
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-heading drop-shadow-lg leading-tight">
            {isAr ? "نحن هنا لمساعدتك" : "We're Here\nFor You"}
          </h1>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] rounded-full" />
          <p className="text-white text-sm sm:text-base leading-relaxed max-w-xl mx-auto drop-shadow-lg mt-1 font-medium px-4">
            {isAr
              ? "هل لديك سؤال عن طلبك أو منتجاتنا؟ تواصلي معنا وسنرد عليك في أقرب وقت ممكن."
              : "Have a question about your order or our products? Reach out — we reply within 24 hours."}
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT AREA ── */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-28">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

          {/* ── LEFT COLUMN: Contact Info (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
              {isAr ? "معلومات التواصل" : "Reach Us Directly"}
            </h2>

            {/* Email card */}
            <a
              href="mailto:aurea.shop.dz@gmail.com"
              className="group flex items-center gap-4 bg-white rounded-2xl border border-[#FFD6DD]/60 shadow-md hover:shadow-xl hover:border-[#FF6C84]/40 transition-all duration-300 p-5 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6C84] to-[#FFB7C5] flex items-center justify-center shrink-0 shadow-sm">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {isAr ? "البريد الإلكتروني" : "Email Us"}
                </span>
                <span className="text-sm font-extrabold text-slate-800 group-hover:text-[#FF6C84] transition-colors truncate">
                  aurea.shop.dz@gmail.com
                </span>
                <span className="text-xs text-slate-400">
                  {isAr ? "للاستفسارات والدعم" : "Inquiries & support"}
                </span>
              </div>
            </a>

            {/* WhatsApp card */}
            <a
              href="https://wa.me/213XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white rounded-2xl border border-[#FFD6DD]/60 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 p-5 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">WhatsApp</span>
                <span className="text-sm font-extrabold text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {isAr ? "تواصل عبر واتساب" : "Message on WhatsApp"}
                </span>
                <span className="text-xs text-slate-400">
                  {isAr ? "دعم فقط · الطلبات عبر الموقع" : "Support only · Orders via website"}
                </span>
              </div>
            </a>

            {/* Location card */}
            <div className="flex items-center gap-4 bg-white rounded-2xl border border-[#FFD6DD]/60 shadow-md p-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB7C5] to-[#FF6C84] flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {isAr ? "موقعنا" : "Location"}
                </span>
                <span className="text-sm font-extrabold text-slate-800">
                  {isAr ? "الجزائر" : "Algeria 🇩🇿"}
                </span>
                <span className="text-xs text-slate-400">
                  {isAr ? "توصيل لجميع الولايات · الدفع عند الاستلام" : "Nationwide · Cash on delivery"}
                </span>
              </div>
            </div>

            {/* Brand promise */}
            <div className="mt-2 bg-gradient-to-br from-[#FFF4F3] to-[#FFE8EC] rounded-2xl border border-[#FFD6DD]/60 p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#FF6C84] fill-[#FF6C84]" />
                <span className="text-xs font-black text-[#FF6C84] uppercase tracking-widest">
                  {isAr ? "وعدنا لك" : "Our Promise"}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isAr
                  ? "كل رسالة تصلنا تُعامَل بأولوية واهتمام. أنتِ تستحقين أفضل تجربة مع أوريا."
                  : "Every message you send is read with care. You deserve the best AUREA experience, always."}
              </p>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Message Form (3 cols) ── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-[#FFD6DD]/50 shadow-2xl overflow-hidden">

              {/* Form header */}
              <div className="relative bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] px-8 py-7 overflow-hidden">
                {/* Decorative rings */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl font-heading text-white">
                      {isAr ? "أرسلي رسالتك" : "Send Your Message"}
                    </h3>
                    <p className="text-white/85 text-sm mt-0.5">
                      {isAr ? "سنرد عليك خلال 24 ساعة 💌" : "We'll reply within 24 hours 💌"}
                    </p>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div className="p-10 flex flex-col items-center gap-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-md">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black font-heading mb-2">
                      {isAr ? "تم الإرسال بنجاح! ✓" : "Message Sent! ✓"}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                      {isAr
                        ? "شكراً لتواصلك معنا. سيرد فريق أوريا عليك في أقرب وقت."
                        : "Thank you for reaching out. The AUREA team will get back to you shortly."}
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setName(""); setPhone(""); setEmail(""); setMessage(""); }}
                    className="bg-[#FF6C84] text-white font-bold px-8 py-3 rounded-2xl hover:bg-[#FF5A73] transition-all cursor-pointer text-sm shadow-md"
                  >
                    {isAr ? "إرسال رسالة أخرى" : "Send Another"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 py-7 flex flex-col gap-5">

                  {/* Name + Phone side by side on md+ */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">
                        {isAr ? "الاسم" : "Your Name"} <span className="text-[#FF6C84]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={isAr ? "أدخلي اسمك..." : "Your full name"}
                        className="w-full border-2 border-slate-100 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FF6C84]/60 focus:ring-4 focus:ring-[#FF6C84]/8 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">
                        {isAr ? "رقم الهاتف" : "Phone Number"} <span className="text-[#FF6C84]">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-xs font-bold text-slate-400 select-none pointer-events-none" dir="ltr">+213</span>
                        <input
                          type="tel"
                          required
                          pattern="[567][0-9]{8}"
                          value={phone}
                          onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                          placeholder={isAr ? "رقم الهاتف (مثال: 555123456)" : "Phone number (e.g. 555123456)"}
                          className="w-full border-2 border-slate-100 rounded-xl pl-16 pr-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FF6C84]/60 focus:ring-4 focus:ring-[#FF6C84]/8 transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email (Optional) */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">
                      {isAr ? "البريد الإلكتروني (اختياري)" : "Email Address (Optional)"}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder={isAr ? "بريدك الإلكتروني (اختياري)" : "you@example.com (optional)"}
                      className="w-full border-2 border-slate-100 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FF6C84]/60 focus:ring-4 focus:ring-[#FF6C84]/8 transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">
                      {isAr ? "رسالتك" : "Your Message"}
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder={isAr ? "اكتبي رسالتك هنا... سؤال عن منتج، طلب، أو أي استفسار." : "Tell us about your order, product question, or anything on your mind..."}
                      className="w-full border-2 border-slate-100 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-[#FF6C84]/60 focus:ring-4 focus:ring-[#FF6C84]/8 transition-all resize-none bg-slate-50/50"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#FF6C84] to-[#FF8FA3] hover:from-[#FF5A73] hover:to-[#FF7A95] disabled:from-slate-300 disabled:to-slate-300 text-white font-black text-sm py-4.5 rounded-2xl shadow-lg shadow-[#FF6C84]/30 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{isAr ? "إرسال الرسالة" : "Send Message"}</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    {isAr ? "معلوماتك محفوظة بأمان تام." : "Your information is 100% private & secure."}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { X, ShoppingBag, CreditCard, Star, CheckCircle, ChevronDown, Package } from "lucide-react";

interface ProductModalProps {
  product: {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    comparePrice: number;
    images: string[];
    badge?: string;
    description: string;
    specs: string[];
  } | null;
  onClose: () => void;
}

// Full list of Algerian Wilayas
const WILAYAS = [
  "Adrar","Chlef","Laghouat","Oum El Bouaghi","Batna","Béjaïa","Biskra","Béchar","Blida",
  "Bouira","Tamanrasset","Tébessa","Tlemcen","Tiaret","Tizi Ouzou","Alger","Djelfa",
  "Jijel","Sétif","Saïda","Skikda","Sidi Bel Abbès","Annaba","Guelma","Constantine",
  "Médéa","Mostaganem","M'Sila","Mascara","Ouargla","Oran","El Bayadh","Illizi",
  "Bordj Bou Arréridj","Boumerdès","El Tarf","Tindouf","Tissemsilt","El Oued","Khenchela",
  "Souk Ahras","Tipaza","Mila","Aïn Defla","Naâma","Aïn Témouchent","Ghardaïa","Relizane",
  "Timimoun","Bordj Badji Mokhtar","Ouled Djellal","Béni Abbès","In Salah","In Guezzam",
  "Touggourt","Djanet","El M'Ghair","El Meniaa"
];

type FormMode = "choose" | "cart" | "buy";

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [mode, setMode] = useState<FormMode>("choose");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    wilaya: "",
    commune: "",
  });

  // Reset on product change
  useEffect(() => {
    setActiveImg(0);
    setMode("choose");
    setSubmitted(false);
  }, [product?.id]);

  // Trap scroll
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [product]);

  if (!product) return null;

  const savings = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeInUp z-10">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 rounded-full shadow text-slate-600 hover:text-[#FF6C84] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {mode === "choose" || mode === "cart" ? (
          <div className="flex flex-col">
            {/* Image Gallery */}
            <div className="relative aspect-[4/3] bg-[#FFF9F0] overflow-hidden rounded-t-3xl">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#FF6C84] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {product.badge}
                </div>
              )}
              {/* Thumb strip */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === activeImg ? "bg-[#FF6C84] scale-125" : "bg-white/60"}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              {/* Name & Price */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-extrabold text-black font-heading leading-tight">{product.name}</h2>
                  <p className="text-slate-500 text-sm mt-0.5">{product.subtitle}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-black text-[#FF6C84]">${product.price.toFixed(2)}</div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="text-xs text-slate-400 line-through">${product.comparePrice.toFixed(2)}</span>
                    <span className="text-[10px] font-black bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">-{savings}%</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex text-[#FFD700]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
                <span className="text-xs font-semibold text-slate-600">4.9 · 2,847 reviews</span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-2">
                {product.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-700">{spec}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2.5 mt-2">
                <button
                  onClick={() => setMode("buy")}
                  className="w-full bg-[#FF6C84] hover:bg-[#FF5A73] text-white font-black text-sm py-4 rounded-2xl shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2.5"
                >
                  <CreditCard className="w-5 h-5" />
                  ORDER NOW — FAST DELIVERY
                </button>
                <button
                  onClick={() => setMode("cart")}
                  className="w-full bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-[#FF6C84] text-slate-800 font-bold text-sm py-3.5 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>

              {/* Trust line */}
              <p className="text-center text-[10px] text-slate-400 font-medium">
                🚚 Free delivery · 30-day easy returns · Secure order
              </p>
            </div>
          </div>
        ) : submitted ? (
          /* Success State */
          <div className="flex flex-col items-center justify-center py-20 px-8 gap-5 text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-black text-black font-heading">Order Received! 🎉</h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Thank you, <strong>{form.name}</strong>! We received your order and will contact you on <strong>{form.phone}</strong> to confirm delivery to <strong>{form.commune}, {form.wilaya}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-[#FF6C84] text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-[#FF5A73] transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          /* Order Form */
          <div className="flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] p-6 rounded-t-3xl">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-white" />
                <div>
                  <h3 className="text-white font-black text-lg font-heading">Confirm Your Order</h3>
                  <p className="text-white/80 text-xs">{product.name} · ${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              <p className="text-xs text-slate-500 font-semibold">
                Fill in your delivery details and we'll contact you to confirm.
              </p>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Amira Boudiaf"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-bold text-slate-600 shrink-0">
                    🇩🇿 +213
                  </div>
                  <input
                    required
                    type="tel"
                    placeholder="0551 234 567"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all"
                  />
                </div>
              </div>

              {/* Wilaya */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Wilaya (State)</label>
                <div className="relative">
                  <select
                    required
                    value={form.wilaya}
                    onChange={e => setForm(f => ({ ...f, wilaya: e.target.value, commune: "" }))}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all appearance-none pr-10"
                  >
                    <option value="">— Choisir votre Wilaya —</option>
                    {WILAYAS.map(w => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Commune */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Commune</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Bab El Oued"
                  value={form.commune}
                  onChange={e => setForm(f => ({ ...f, commune: e.target.value }))}
                  className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FF6C84]/30 focus:border-[#FF6C84] transition-all"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-[#FFF4F3] rounded-2xl p-4 border border-[#FFD6DD] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-700">{product.name}</p>
                  <p className="text-[10px] text-slate-500">Free delivery included</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-[#FF6C84]">${product.price.toFixed(2)}</p>
                  <p className="text-[10px] text-slate-400 line-through">${product.comparePrice.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => setMode("choose")}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm py-3.5 rounded-2xl transition-all"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#FF6C84] hover:bg-[#FF5A73] text-white font-black text-sm py-3.5 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
                >
                  Confirm Order ✓
                </button>
              </div>

              <p className="text-center text-[10px] text-slate-400">
                🔒 Your information is safe and will only be used for order delivery.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

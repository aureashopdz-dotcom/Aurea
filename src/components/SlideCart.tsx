import React, { useState, useRef, useEffect } from "react";
import { X, Plus, Minus, Lock, ShoppingBag, CheckCircle, HelpCircle, ChevronDown } from "lucide-react";
import { CartItem, ProductVariant, FreeGift } from "../types";
import wilayasData from "../data/wilayas.json";
import communesData from "../data/communes.json";
import { generateEventId, trackInitiateCheckout, trackPurchase } from "../utils/metaPixel";

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

interface SlideCartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  variants: ProductVariant[];
  gifts: FreeGift[];
  onUpdateQuantity: (productId: string, chain: string, qty: number) => void;
  onRemove: (productId: string, chain: string) => void;
  lang: "ar" | "en";
}
export const SlideCart: React.FC<SlideCartProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  lang,
}) => {
  if (!isOpen) return null;

  const isAr = lang === "ar";

  // Form states for local COD checkout
  const [showCheckout, setShowCheckout] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedWilayaCode, setSelectedWilayaCode] = useState("");
  const [commune, setCommune] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ── Meta Pixel event IDs ──
  const initiateCheckoutEventId = useRef(generateEventId());
  const purchaseEventId = useRef(generateEventId());
  const checkoutTouched = useRef(false);

  // Regenerate event IDs on mount or when cart changes
  useEffect(() => {
    initiateCheckoutEventId.current = generateEventId();
    purchaseEventId.current = generateEventId();
    checkoutTouched.current = false;
  }, [cart.length]);

  const itemsPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingFee = itemsPrice > 3000 ? 0 : 450;
  const grandTotal = itemsPrice + shippingFee;

  const formatPrice = (amount: number) => {
    return isAr ? `${amount} د.ج` : `${amount} DA`;
  };

  // ── Algerian Phone Validator ───────────────────────────────────────────────
  const validateAlgerianPhone = (raw: string): { valid: boolean; reason: string } => {
    let n = raw.replace(/[\s\-\.]/g, "");
    if (n.startsWith("+213")) n = "0" + n.slice(4);
    else if (n.startsWith("00213")) n = "0" + n.slice(5);
    else if (n.startsWith("213") && n.length === 12) n = "0" + n.slice(3);

    if (!/^\d{10}$/.test(n)) {
      return { valid: false, reason: isAr
        ? "رقم الهاتف يجب أن يتكون من 10 أرقام (مثال: 0551 234 567)"
        : "Phone number must be 10 digits (e.g. 0551 234 567)" };
    }

    // Must start with a valid Algerian prefix:
    // Mobile: 05 (Ooredoo), 06 (Mobilis/Djezzy), 07 (Mobilis/Ooredoo)
    // Landline: 02 (Centre), 03 (East), 04 (West)
    const prefix2 = n.slice(0, 2);
    if (!["02", "03", "04", "05", "06", "07"].includes(prefix2)) {
      return { valid: false, reason: isAr
        ? "رقم غير صالح. يجب أن يبدأ بـ 02 أو 03 أو 04 (ثابت) أو 05 أو 06 أو 07 (جوال)"
        : "Invalid number. Must start with 02–04 (landline) or 05–07 (mobile)" };
    }

    if (/^.(.)\1{8}$/.test(n)) {
      return { valid: false, reason: isAr
        ? "يبدو أن الرقم مزيف. يرجى إدخال رقم هاتف حقيقي."
        : "This looks like a fake number. Please enter a real phone number." };
    }

    const digits = n.slice(2);
    let ascending = 0; let descending = 0;
    for (let i = 1; i < digits.length; i++) {
      if (Number(digits[i]) === Number(digits[i - 1]) + 1) ascending++;
      else ascending = 0;
      if (Number(digits[i]) === Number(digits[i - 1]) - 1) descending++;
      else descending = 0;
      if (ascending >= 6 || descending >= 6) {
        return { valid: false, reason: isAr
          ? "يبدو أن الرقم مزيف. يرجى إدخال رقم هاتف حقيقي."
          : "This looks like a fake number. Please enter a real phone number." };
      }
    }

    return { valid: true, reason: "" };
  };

  const handleCODOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // ── Phone validation ───────────────────────────────────────────────────
    const phoneCheck = validateAlgerianPhone(phoneNumber);
    if (!phoneCheck.valid) {
      setErrorMsg(phoneCheck.reason);
      return;
    }

    setIsSubmitting(true);

    const activeWilayaObj = WILAYAS.find(w => w.code === selectedWilayaCode);
    const wilayaString = activeWilayaObj 
      ? `${activeWilayaObj.code} - ${isAr ? activeWilayaObj.ar_name : activeWilayaObj.name}`
      : "";

    // Create a summarized item string
    const itemSummary = cart.map(
      (item) => `${item.quantity}x ${isAr ? item.nameAr : item.name} (${item.chain === "Gold" ? (isAr ? "ذهب" : "Gold") : (isAr ? "فضة" : "Silver")})`
    ).join(", ");

    const payload = {
      name: fullName,
      phone: phoneNumber,
      wilaya: wilayaString,
      commune,
      productName: itemSummary,
      chain: "Multiple / Mixed",
      bundle: "Shopping Cart Checkout",
      totalPrice: formatPrice(grandTotal),
      lang,
      purchaseEventId: purchaseEventId.current,
    };


    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        // browser Purchase event matching CAPI
        trackPurchase({
          productId: cart.map(i => i.productId).join(","),
          productName: itemSummary,
          value: grandTotal,
          eventId: purchaseEventId.current,
        });
        setSubmitted(true);
        // Clear inputs
        setFullName("");
        setPhoneNumber("");
        setSelectedWilayaCode("");
        setCommune("");
      } else {
        setErrorMsg(isAr ? "حدث خطأ أثناء إرسال طلبك. يرجى المحاولة لاحقاً." : "An error occurred. Please try again.");
      }
    } catch {
      setErrorMsg(isAr ? "تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً." : "Could not reach the server. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Drawer Overlay */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      <div className={`absolute inset-y-0 ${isAr ? 'left-0' : 'right-0'} max-w-full flex`} dir={isAr ? 'rtl' : 'ltr'}>
        {/* Drawer Stage Panel */}
        <div className="w-screen max-w-md bg-white flex flex-col shadow-2xl h-full relative animate-fadeInRight border-l border-gray-100">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <span className="font-extrabold text-xl text-black font-heading tracking-tight">
              {isAr ? "سلة التسوق" : "Shopping Cart"}
            </span>
            <button
              onClick={onClose}
              className="p-1 text-slate-900 hover:text-black hover:bg-slate-50 rounded-full transition-all cursor-pointer"
              aria-label="Close Cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-grow overflow-y-auto divide-y divide-gray-100">
            {submitted ? (
              <div className="p-8 flex flex-col items-center gap-6 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-md">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black font-heading mb-2">
                    {isAr ? "تم تسجيل طلبك بنجاح! ✓" : "Order Placed Successfully! ✓"}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {isAr
                      ? "شكراً لطلبك من أوريا. سنتصل بك لتأكيد الشحن قريباً جداً."
                      : "Thank you for shopping at AUREA. We will call you shortly to confirm shipping."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setShowCheckout(false);
                    // Reset cart locally via close
                    onClose();
                    window.location.reload(); // Reload to refresh state
                  }}
                  className="bg-[#FF6C84] text-white font-bold px-8 py-3.5 rounded-2xl hover:bg-[#FF5A73] transition-all cursor-pointer text-sm shadow-md"
                >
                  {isAr ? "مواصلة التسوق" : "Continue Shopping"}
                </button>
              </div>
            ) : cart.length > 0 ? (
              <div className="flex flex-col">
                
                {/* Dynamic Free Shipping Progress Bar */}
                <div className="px-6 py-5 border-b border-gray-100 flex flex-col items-center gap-2 bg-white">
                  <span className="text-sm font-bold text-[#FF6C84] text-center">
                    {isAr ? "اختيار رائع! منتجاتك في السلة:" : "Excellent choice! Here are your products:"}
                  </span>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full rounded-full transition-all duration-300"
                      style={{ 
                        backgroundImage: "repeating-linear-gradient(-45deg, #FF6C84, #FF6C84 10px, #FFB0BD 10px, #FFB0BD 20px)",
                        width: itemsPrice > 3000 ? "100%" : `${(itemsPrice / 3000) * 100}%` 
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-900 text-center">
                    {itemsPrice >= 3000 
                      ? (isAr ? "تهانينا! لقد حصلت على شحن مجاني 🚚" : "Congrats! You've unlocked FREE Shipping 🚚")
                      : (isAr 
                          ? `أضف ${3000 - itemsPrice} د.ج للحصول على شحن مجاني!` 
                          : `Add ${3000 - itemsPrice} DA for FREE Shipping!`)}
                  </span>
                </div>

                {/* Cart Items List */}
                <div className="divide-y divide-gray-100">
                  {cart.map((item) => (
                    <div key={`${item.productId}-${item.chain}`} className="p-6 flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-200 bg-[#FFF4F3]/30 shrink-0">
                        <img 
                          src={item.image} 
                          alt={isAr ? item.nameAr : item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="font-bold text-sm text-slate-900 leading-tight justify-start flex">
                              {isAr ? item.nameAr : item.name}
                            </span>
                            <span className="text-[#FF6C84] font-extrabold text-sm shrink-0">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 mt-1 justify-start flex gap-2">
                            <span>{isAr ? `السلسلة: ${item.chain === "Gold" ? "ذهب 🟡" : "فضة ⚪"}` : `Chain: ${item.chain}`}</span>
                          </div>
                        </div>

                        {/* Counter Buttons & Remove Link */}
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center border border-slate-200 rounded-md bg-white">
                            <button
                              onClick={() => onUpdateQuantity(item.productId, item.chain, item.quantity - 1)}
                              className="px-2.5 py-1 text-slate-500 hover:text-black hover:bg-slate-50 transition-all cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-xs font-bold text-black font-mono">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.productId, item.chain, item.quantity + 1)}
                              className="px-2.5 py-1 text-slate-500 hover:text-black hover:bg-slate-50 transition-all cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemove(item.productId, item.chain)}
                            className="text-xs font-semibold text-[#FF6C84] underline hover:text-[#FF5A73] transition-colors cursor-pointer"
                          >
                            {isAr ? "إزالة" : "Remove"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* COD Form Overlay or Slide panel inside Drawer */}
                {showCheckout && (
                  <div className="p-6 bg-slate-50 border-t border-gray-200 flex flex-col gap-4">
                    <h3 className="font-extrabold text-sm text-slate-900 border-b pb-2 mb-2 flex items-center justify-between">
                      <span>{isAr ? "معلومات الشحن (الدفع عند الاستلام)" : "Shipping Details (Cash on Delivery)"}</span>
                      <button onClick={() => setShowCheckout(false)} className="text-xs font-bold text-[#FF6C84] underline">
                        {isAr ? "الرجوع للسلة" : "Back"}
                      </button>
                    </h3>

                    {errorMsg && (
                      <div className="p-3 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold rounded-xl">
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleCODOrder} className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider justify-start flex">
                          {isAr ? "الاسم الكامل" : "Full Name"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          onFocus={() => {
                            if (!checkoutTouched.current) {
                              checkoutTouched.current = true;
                              trackInitiateCheckout({
                                productId: cart.map(i => i.productId).join(","),
                                productName: cart.map(i => i.name).join(", "),
                                value: grandTotal,
                                eventId: initiateCheckoutEventId.current,
                              });
                            }
                          }}
                          placeholder={isAr ? "الاسم واللقب..." : "Your name"}
                          className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FF6C84] bg-white"
                        />
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider justify-start flex">
                          {isAr ? "رقم الهاتف" : "Phone Number"} *
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute left-3 text-xs font-bold text-slate-400 select-none" dir="ltr">+213</span>
                          <input
                            type="tel"
                            required
                            pattern="[567][0-9]{8}"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                            placeholder={isAr ? "رقم الهاتف (مثل: 555123456)" : "e.g. 555123456"}
                            className="w-full border border-slate-200 rounded-xl pl-14 pr-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FF6C84] bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider justify-start flex">
                            {isAr ? "الولاية" : "Wilaya"} *
                          </label>
                          <select
                            required
                            value={selectedWilayaCode}
                            onChange={(e) => {
                              setSelectedWilayaCode(e.target.value);
                              setCommune("");
                            }}
                            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FF6C84] bg-white"
                          >
                            <option value="">{isAr ? "اختر الولاية" : "-- Wilaya --"}</option>
                            {WILAYAS.slice().sort((a, b) => parseInt(a.code) - parseInt(b.code)).map((w) => (
                              <option key={w.code} value={w.code}>
                                {w.code} - {isAr ? w.ar_name : w.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider justify-start flex">
                            {isAr ? "البلدية" : "Commune"} *
                          </label>
                          <select
                            required
                            disabled={!selectedWilayaCode}
                            value={commune}
                            onChange={(e) => setCommune(e.target.value)}
                            className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#FF6C84] bg-white disabled:bg-slate-50 disabled:text-slate-400"
                          >
                            <option value="">{isAr ? "البلدية..." : "Commune..."}</option>
                            {COMMUNES.filter(c => c.wilaya_id === selectedWilayaCode).map((c) => (
                              <option key={c.id} value={isAr ? c.ar_name : c.name}>
                                {isAr ? c.ar_name : c.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FF6C84] hover:bg-[#FF5A73] disabled:bg-slate-300 text-white font-black text-xs py-3.5 rounded-xl shadow-md transition-all mt-2 cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
                        ) : (
                          <>
                            <Lock className="w-3.5 h-3.5" />
                            <span>{isAr ? "تأكيد الطلب (الدفع عند الاستلام)" : "Confirm Order (Cash on Delivery)"}</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-12 text-center h-80">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-4 border">
                  <ShoppingBag className="w-7 h-7 text-[#FF6C84]" />
                </div>
                <span className="font-extrabold text-slate-900 font-heading">
                  {isAr ? "سلتك فارغة" : "Your cart is empty"}
                </span>
                <p className="text-slate-400 text-xs sm:text-sm max-w-[220px] mt-1.5 leading-relaxed">
                  {isAr 
                    ? "قومي بإضافة قطع مجوهرات مميزة من تشكيلتنا الرائعة اليوم!"
                    : "Treat yourself to our waterproof premium interlocking necklace today!"}
                </p>
                <button
                  onClick={onClose}
                  className="bg-black text-white font-bold text-xs px-6 py-3 rounded-full mt-5 hover:bg-[#303030] transition-colors cursor-pointer"
                >
                  {isAr ? "ابدأ التسوق" : "Start Shopping"}
                </button>
              </div>
            )}
          </div>

          {/* Drawer Footer Checkout Summary Section */}
          {cart.length > 0 && !submitted && !showCheckout && (
            <div className="p-6 bg-white border-t border-gray-100 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-500">
                  <span>{isAr ? "الشحن" : "Shipping"}</span>
                  <span className={shippingFee === 0 ? "text-emerald-500 font-extrabold" : "text-slate-700"}>
                    {shippingFee === 0 ? (isAr ? "ميجاني" : "Free") : formatPrice(shippingFee)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-base font-black text-slate-900 border-t pt-2 mt-1">
                  <span>{isAr ? "المجموع الإجمالي" : "Total"}</span>
                  <span className="text-slate-900 font-black text-lg">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>

              {/* Secure Checkout Button */}
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-[#1C1C1C] hover:bg-[#303030] text-white font-black text-xs py-4 rounded-xl active:scale-98 transition-all flex items-center justify-center gap-2 tracking-wide shadow-sm cursor-pointer"
              >
                <Lock className="w-4 h-4 fill-current" />
                <span>{isAr ? "طلب عبر الدفع عند الاستلام" : "ORDER VIA CASH ON DELIVERY"}</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

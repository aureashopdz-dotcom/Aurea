import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQSectionProps {
  lang?: "ar" | "en";
}

interface BilingualFAQ {
  questionEn: string;
  answerEn: string;
  questionAr: string;
  answerAr: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang = "ar" }) => {
  const isAr = lang === "ar";

  const faqs: BilingualFAQ[] = [
    {
      questionEn: "What is the pendant made of?",
      answerEn: "The hummingbird pendant is made from high-quality acrylic with vibrant, stained-glass inspired detailing. It hangs on a durable metal ball chain available in your choice of silver or gold tone. The total gross weight is approximately 20 grams — extremely lightweight and comfortable for all-day wear.",
      questionAr: "من ماذا صنعت المعلقة؟",
      answerAr: "قلادة طائر الطنان مصنوعة من أكريليك عالي الجودة بتفاصيل ملونة تشبه الزجاج المعشق الرائع. تتدلى على سلسلة معدنية متينة متوفرة بالفضة أو الذهب. يبلغ وزنها حوالي 20 غراماً — خفيفة جداً ومريحة طوال اليوم.",
    },
    {
      questionEn: "How do I care for the necklace?",
      answerEn: "Caring for your hummingbird necklace is simple! Avoid rubbing it against hard or abrasive surfaces to prevent scratching. If it gets wet or dirty, gently wipe the pendant with a dry microfiber cloth and let it air dry completely. Store it separately from other jewelry to prevent tangling or surface wear.",
      questionAr: "كيف أعتني بالقلادة؟",
      answerAr: "العناية بقلادة طائر الطنان بسيطة! تجنبي احتكاكها بالأسطح الخشنة لمنع الخدوش. إذا تعرضت للماء أو الاتساخ، امسحيها برفق بقطعة قماش ميكروفايبر جافة ودعيها تجف في الهواء. خزنيها منفصلة عن باقي المجوهرات لتفادي التشابك.",
    },
    {
      questionEn: "Is it suitable as a gift?",
      answerEn: "Absolutely — this necklace is one of our most popular gift choices. Its vibrant, nature-inspired design and charming hummingbird motif make it a memorable and heartfelt gift for women, girls, mothers, bird lovers, or anyone who appreciates playful, unique accessories. It arrives beautifully presented, ready to gift.",
      questionAr: "هل هي مناسبة كهدية؟",
      answerAr: "بالتأكيد — هذه القلادة من أكثر هداياي اختياراً. تصميمها الملون المستوحى من الطبيعة وشكل طائر الطنان الساحر يجعلانها هدية لا تُنسى للنساء والبنات والأمهات ومحبات الطبيعة وكل من تقدر الإكسسوارات الفريدة. تصل معبأة بشكل جميل جاهزة للتقديم.",
    },
    {
      questionEn: "How do the free bundle gifts work?",
      answerEn: "Gifts are unlocked automatically based on your bundle size! 1 Necklace gets the Digital Styling Guide. 2 Necklaces unlock the Plush Velvet Pouch. 3 Necklaces unlock the Magnetic Keepsake Box. All gifts ship together with your order in one parcel.",
      questionAr: "كيف تعمل هدايا الحزم المجانية؟",
      answerAr: "تُفتح الهدايا تلقائياً بحسب حجم الطلب! قلادة واحدة تمنحك دليل الأناقة الرقمي. قلادتان تفتحان حقيبة المخمل الفاخرة. 3 قلادات تفتح علبة الذكريات المغناطيسية. تُشحن جميع الهدايا مع طلبك في طرد واحد.",
    },
    {
      questionEn: "How long does shipping take?",
      answerEn: "All orders are processed and shipped within 24 hours. Standard delivery takes 3–7 business days across all 58 Algerian wilayas. You will be contacted on the phone number you provided to confirm delivery details before dispatch.",
      questionAr: "كم يستغرق الشحن؟",
      answerAr: "تُعالج جميع الطلبات وتُشحن خلال 24 ساعة. يستغرق التوصيل من 3 إلى 7 أيام عمل لجميع ولايات الجزائر الـ58. سيتم الاتصال بك على الرقم الذي أدخلته لتأكيد تفاصيل التوصيل قبل الإرسال.",
    },
    {
      questionEn: "What if I'm not satisfied with my order?",
      answerEn: "Your satisfaction is our priority. If for any reason you are not happy with your purchase, please reach out to our customer support team within 30 days of receiving your order and we will make it right — whether that's a replacement, exchange, or refund. No hassle, no questions asked.",
      questionAr: "ماذا لو لم أكن راضية عن طلبي؟",
      answerAr: "رضاك أولويتنا. إذا لم تكوني راضية لأي سبب عن مشترياتك، تواصلي مع فريق دعم العملاء خلال 30 يوماً من استلام طلبك وسنعالج الأمر — سواء كان استبدالاً أو تبديلاً أو استرداداً للمبلغ. بدون تعقيد أو أسئلة.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-24" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h2>
          <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mt-2">
            {isAr ? "كل ما تودين معرفته، في مكان واحد." : "You've got questions. We've got answers."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            const question = isAr ? faq.questionAr : faq.questionEn;
            const answer   = isAr ? faq.answerAr   : faq.answerEn;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "border-[#FF6C84] bg-[#FFF4F3]/30 shadow-sm" 
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className={`w-full px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none cursor-pointer ${isAr ? "text-right flex-row-reverse" : "text-left"}`}
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-heading flex items-center gap-2.5 ${isAr ? "flex-row-reverse" : ""}`}>
                    <HelpCircle className="w-5 h-5 text-slate-400 shrink-0" />
                    <span>{question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-[#FF6C84] text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Body Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-72 border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className={`px-6 py-5 text-slate-600 text-sm leading-relaxed bg-white rounded-b-2xl ${isAr ? "text-right" : "text-left"}`}>
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

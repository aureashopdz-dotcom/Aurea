import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export const FAQSection: React.FC = () => {

  const faqs: FAQItem[] = [
    {
      question: "What is the pendant made of?",
      answer: "The hummingbird pendant is made from high-quality acrylic with vibrant, stained-glass inspired detailing. It hangs on a durable metal ball chain available in your choice of silver or gold tone. The total gross weight is approximately 20 grams — extremely lightweight and comfortable for all-day wear."
    },
    {
      question: "How do I care for the necklace?",
      answer: "Caring for your hummingbird necklace is simple! Avoid rubbing it against hard or abrasive surfaces to prevent scratching. If it gets wet or dirty, gently wipe the pendant with a dry microfiber cloth and let it air dry completely. Store it separately from other jewelry to prevent tangling or surface wear."
    },
    {
      question: "Is it suitable as a gift?",
      answer: "Absolutely — this necklace is one of our most popular gift choices. Its vibrant, nature-inspired design and charming hummingbird motif make it a memorable and heartfelt gift for women, girls, mothers, bird lovers, or anyone who appreciates playful, unique accessories. It arrives beautifully presented, ready to gift."
    },
    {
      question: "How do the free bundle gifts work?",
      answer: "Gifts are unlocked automatically based on your bundle size! 1 Necklace gets the Digital Styling Guide. 2 Necklaces unlock the Plush Velvet Pouch. 3 Necklaces unlock the Magnetic Keepsake Box. 4 Necklaces unlock the Silver Pearl Earrings! All gifts ship together with your order in one parcel."
    },
    {
      question: "How long does shipping take?",
      answer: "All orders are processed and shipped within 24 hours. Standard delivery takes 3-7 business days. You will receive a tracking number via email as soon as your order is dispatched so you can follow it every step of the way."
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer: "Your satisfaction is our priority. If for any reason you are not happy with your purchase, please reach out to our customer support team within 30 days of receiving your order and we will make it right — whether that's a replacement, exchange, or refund. No hassle, no questions asked."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mt-2">
            You've got questions. We've got answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "border-primary bg-[#FFF4F3]/30 shadow-sm" 
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-heading flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-slate-400" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-all duration-300 ${
                    isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Body Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-56 border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="px-6 py-5 text-slate-600 text-sm leading-relaxed bg-white rounded-b-2xl">
                    {faq.answer}
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

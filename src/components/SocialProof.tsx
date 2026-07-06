import React, { useState } from "react";
import { Star, Check, ThumbsUp } from "lucide-react";
import { Testimonial } from "../types";
import { CherryBlossomParticles } from "./CherryBlossomParticles";
import img1 from "../assets/hummingbird-product-1.jpg";
import img2 from "../assets/hummingbird-product-2.jpg";
import img3 from "../assets/hummingbird-product-3.jpg";

export const SocialProof: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const ugcImages = [
    { url: img1, caption: "@amira.style" },
    { url: img2, caption: "@hana_chic" },
    { url: img3, caption: "@nour_bijoux" },
    { url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=300", caption: "@lina_glow" },
    { url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=300", caption: "@sara_loves" },
    { url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=300", caption: "@radiance_dz" }
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Emma S.",
      title: "Skeptical at first, but absolutely blown away!",
      review: "I was skeptical about the anti-tarnish guarantee, but I have worn this necklace in the shower, the pool, and during high-intensity workouts for 3 weeks straight and it still looks as radiant as day one! No green marks, no dullness. Absolute perfection.",
      rating: 5,
      date: "June 15, 2026",
      isVerified: true,
      helpfulCount: 42
    },
    {
      id: "2",
      name: "Sophia L.",
      title: "The perfect emotional gift!",
      review: "I bought the interlocking hearts bundle as a graduation gift for my daughter and sister. They both cried when reading the message card. The luxury box styling and velvet pouches are so elegant. Highly recommend ordering the bundle, savings are huge!",
      rating: 5,
      date: "June 12, 2026",
      isVerified: true,
      helpfulCount: 28
    },
    {
      id: "3",
      name: "Ava J.",
      title: "Highly sensitive skin approved!",
      review: "I have severe nickel allergies and almost all fashion jewelry gives me instant red hives. This hypoallergenic metal chain has caused zero reactions. It's so lightweight and comfortable I forget I even have it on. Stunning detailing too.",
      rating: 5,
      date: "June 08, 2026",
      isVerified: true,
      helpfulCount: 56
    },
    {
      id: "4",
      name: "Isabella K.",
      title: "Exquisite details and sparkly crystal settings",
      review: "The cubic zirconia crystals shine beautifully when they hit the light. They are set tightly and don't look loose at all. The lobster claw clasp is very secure. I've gotten so many compliments on this piece already!",
      rating: 5,
      date: "June 04, 2026",
      isVerified: true,
      helpfulCount: 19
    },
    {
      id: "5",
      name: "Chloe M.",
      title: "The pearl earrings are gorgeous too!",
      review: "I went with the 4 Necklaces deal to unlock the FREE Pearl Stud earrings and let me tell you, they are amazing! Real luxury weight and style. I gave the other necklaces to my best friends and kept the pearls for myself. Best DTC deal online.",
      rating: 5,
      date: "May 28, 2026",
      isVerified: true,
      helpfulCount: 31
    },
    {
      id: "6",
      name: "Mia T.",
      title: "Great chain length and adjustability",
      review: "It comes with a robust extender which is perfect because I can adjust the hanging position depending on my top neckline. Extremely comfortable and sits perfectly flat against the chest. The rose gold is beautiful.",
      rating: 5,
      date: "May 25, 2026",
      isVerified: true,
      helpfulCount: 14
    },
    {
      id: "7",
      name: "Harper P.",
      title: "Extremely high tarnish proof performance",
      review: "I live on the beach and spend a lot of time in saltwater. Normally, my necklaces turn black in a week. The Aurea necklace has been exposed to salt water and sand and it STILL shines like new. The protective coating is real science!",
      rating: 5,
      date: "May 20, 2026",
      isVerified: true,
      helpfulCount: 67
    },
    {
      id: "8",
      name: "Evelyn B.",
      title: "Highly recommended for gifts",
      review: "Bought this for my mother's birthday. The packaging is absolutely exquisite! It feels like opening a luxury Cartier box. The magnetic closing clasp and velvet interior are so high-end. 10/10 unboxing experience.",
      rating: 5,
      date: "May 18, 2026",
      isVerified: true,
      helpfulCount: 22
    },
    {
      id: "9",
      name: "Abigail R.",
      title: "Very chic and luxurious design",
      review: "Looks extremely high-end. People think I paid hundreds of dollars for this at an upscale boutique. The interlocking hearts have such a beautiful meaning. A lovely daily reminder of connection.",
      rating: 5,
      date: "May 12, 2026",
      isVerified: true,
      helpfulCount: 11
    },
    {
      id: "10",
      name: "Charlotte W.",
      title: "Amazing customer support and delivery",
      review: "My package was shipped from the US warehouse and arrived in just 2 days. The tracking updates were very helpful. When I emailed customer service about care tips, they replied within 10 minutes. Premium company!",
      rating: 5,
      date: "May 09, 2026",
      isVerified: true,
      helpfulCount: 8
    },
    {
      id: "11",
      name: "Amelia D.",
      title: "Sturdy yet delicate appearance",
      review: "I love that the chain doesn't tangle in my hair. It's delicate enough to look very feminine but sturdy enough that I don't worry about breaking it when dressing. Very well-designed piece.",
      rating: 4,
      date: "May 05, 2026",
      isVerified: true,
      helpfulCount: 15
    },
    {
      id: "12",
      name: "Ella H.",
      title: "Elegant daily wear necklace",
      review: "A bit smaller than I originally thought from the photos but actually, it's the perfect dainty size. It looks very sophisticated and doesn't overpower other jewelry. Perfect for layering with gold chains!",
      rating: 4,
      date: "April 29, 2026",
      isVerified: true,
      helpfulCount: 24
    }
  ];

  const filteredTestimonials = activeFilter === "all"
    ? testimonials
    : testimonials.filter(t => t.rating.toString() === activeFilter);

  return (
    <section id="reviews" className="relative w-full bg-gradient-to-b from-[#F8F8F8] to-white py-16 sm:py-24 overflow-hidden">
      <CherryBlossomParticles count={8} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            Loved By 450+ Happy Customers
          </h2>
          <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mt-2">
            Real feedback from verified buyers who experienced the L'Amour Aurea luxury style transformation.
          </p>
        </div>

        {/* UGC Customer Styling Gallery */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-extrabold text-slate-400 tracking-wider uppercase">Style Feed on Instagram</h3>
            <span className="text-xs font-bold text-primary">#AureaBabes</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {ugcImages.map((image, idx) => (
              <div key={idx} className="relative group rounded-xl overflow-hidden shadow-sm aspect-square">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2.5 text-white text-xs font-semibold">
                  {image.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Reviews Filter Selector */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Reviews Dashboard Metrics */}
          <div className="w-full md:w-1/3 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-6 sticky top-36">
            <div className="text-center md:text-left flex flex-col gap-1">
              <span className="text-5xl font-black text-black">4.92</span>
              <div className="flex justify-center md:justify-start text-[#FFD700] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">Out of 458 verified reviews</span>
            </div>

            {/* Split Distribution */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-600 min-w-[3rem]">5 Stars</span>
                <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF6C84] rounded-full" style={{ width: "92%" }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500 min-w-[2rem] text-right">92%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-600 min-w-[3rem]">4 Stars</span>
                <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FF6C84] rounded-full" style={{ width: "8%" }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500 min-w-[2rem] text-right">8%</span>
              </div>
              <div className="flex items-center gap-3 opacity-40">
                <span className="text-xs font-bold text-slate-600 min-w-[3rem]">3 Stars</span>
                <div className="flex-grow h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-200 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <span className="text-xs font-bold text-slate-500 min-w-[2rem] text-right">0%</span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-col gap-2 border-t border-slate-100 pt-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Filter Reviews:</span>
              <button
                onClick={() => setActiveFilter("all")}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  activeFilter === "all" ? "bg-[#FF6C84] text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                Show All Reviews ({testimonials.length})
              </button>
              <button
                onClick={() => setActiveFilter("5")}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  activeFilter === "5" ? "bg-[#FF6C84] text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                5 Stars Only (10)
              </button>
              <button
                onClick={() => setActiveFilter("4")}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  activeFilter === "4" ? "bg-[#FF6C84] text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                4 Stars Only (2)
              </button>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {filteredTestimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4 animate-scale"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* User profile picture placeholder */}
                    <div className="w-10 h-10 rounded-full bg-[#FFF4F3] text-primary flex items-center justify-center font-bold text-sm border border-primary/10">
                      {t.name.split(" ")[0][0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{t.name}</span>
                      <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 bg-emerald-100 text-emerald-600 rounded-full p-0.5" />
                        <span>Verified Buyer</span>
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{t.date}</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex text-[#FFD700] gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-heading leading-tight">{t.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{t.review}</p>
                </div>

                {/* Helpful Count */}
                <div className="flex items-center gap-3 border-t border-slate-50 pt-3 text-xs text-slate-400 font-semibold mt-1">
                  <span>Was this review helpful?</span>
                  <button className="flex items-center gap-1 text-slate-500 hover:text-primary transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Yes ({t.helpfulCount})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

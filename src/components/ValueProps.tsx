import React from "react";
import { Feather, Palette, Gift, Heart } from "lucide-react";
import { CherryBlossomParticles } from "./CherryBlossomParticles";

export const ValueProps: React.FC = () => {
  const cards = [
    {
      icon: <Palette className="w-8 h-8 text-[#FF6C84]" />,
      title: "Vivid Stained-Glass Art",
      desc: "Every pendant features hand-detailed acrylic panels inspired by stained-glass art — a stunning mosaic of blues, greens, oranges, and reds that catches every light."
    },
    {
      icon: <Feather className="w-8 h-8 text-[#FF6C84]" />,
      title: "Feather-Light at 20g",
      desc: "Weighing just 20 grams, the hummingbird pendant sits effortlessly all day without neck strain. Ideal for everyday wear from morning to evening."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#FF6C84]" />,
      title: "Perfect Gift for Bird Lovers",
      desc: "Beautifully packaged and ready to gift — this charming necklace is a heartfelt present for women, girls, mothers, and anyone who loves nature."
    },
    {
      icon: <Gift className="w-8 h-8 text-[#FF6C84]" />,
      title: "Gold & Silver Chain Options",
      desc: "Choose between a shining silver or a warm gold-toned metal ball chain — both beautifully complement the vibrant multi-color hummingbird pendant."
    }
  ];

  return (
    <section id="value-props" className="relative w-full bg-[#FFF4F3] py-16 sm:py-24 border-y border-[#FF6C84]/5 overflow-hidden">
      <CherryBlossomParticles count={10} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black font-heading">
            Why Everyone Loves This Necklace
          </h2>
          <div className="w-20 h-1 bg-[#FF6C84] mx-auto rounded-full"></div>
          <p className="text-slate-600 text-lg leading-relaxed mt-2">
            More than just a necklace — it's a wearable piece of nature's art. Playful, vibrant, and totally unique.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF6C84]/20 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="p-3 bg-[#FFF4F3] rounded-xl shrink-0">
                {card.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

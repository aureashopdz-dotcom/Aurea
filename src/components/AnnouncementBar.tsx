import React, { useState, useEffect } from "react";
import { Bird, Truck, Heart, ArrowRight } from "lucide-react";
import { TRANSLATIONS } from "../data/translations";

interface AnnouncementBarProps {
  lang: "ar" | "en";
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const t = TRANSLATIONS[lang];

  const messages = [
    {
      icon: <Bird className="w-3.5 h-3.5 text-[#FF6C84]" />,
      text: t.announcement1,
    },
    {
      icon: <Truck className="w-3.5 h-3.5 text-[#FF6C84]" />,
      text: t.announcement2,
    },
    {
      icon: <Heart className="w-3.5 h-3.5 text-[#FF6C84] fill-[#FF6C84]" />,
      text: t.announcement3,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div
      id="announcement-bar"
      className="w-full bg-black text-white py-2 sm:py-2.5 px-4 sticky top-0 z-50 overflow-hidden flex items-center justify-center h-9 sm:h-10"
    >
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center text-center">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`absolute w-full flex items-center justify-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.15em] transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            {msg.icon}
            <span>{msg.text}</span>
            <ArrowRight className={`w-3 h-3 text-[#FF6C84] transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

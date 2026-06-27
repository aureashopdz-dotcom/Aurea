import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { TRANSLATIONS } from "../data/translations";

interface HeaderProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const t = TRANSLATIONS[lang];

  const navLinks = [
    { label: lang === "ar" ? "الرئيسية" : "Home", to: "/" },
    { label: lang === "ar" ? "المتجر" : "Shop", to: "/shop" },
    { label: lang === "ar" ? "تواصل معنا" : "Contact", to: "/contact" },
  ];

  const handleNavClick = (to: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);

    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (location.pathname === path || (path === "" && location.pathname === "/")) {
        if (hash) {
          e?.preventDefault();
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
        return;
      }
    }

    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      navigate(path || "/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to === "/contact") return location.pathname === "/contact";
    if (to === "/shop") return location.pathname === "/shop" || location.pathname.startsWith("/shop/");
    return false;
  };

  return (
    <header
      id="main-header"
      className="w-full bg-white/97 backdrop-blur-md border-b border-[#FFD6DD]/40 sticky top-0 z-40 shadow-sm transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 sm:h-24">

        {/* Left: Mobile Hamburger / Desktop Nav */}
        <div className="flex-1 flex items-center justify-start gap-6">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-50 lg:hidden transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleNavClick(link.to, e)}
                className={`text-[13px] font-extrabold tracking-[0.12em] uppercase py-1.5 transition-all duration-200 relative group ${
                  isActive(link.to)
                    ? "text-[#FF6C84]"
                    : "text-slate-600 hover:text-[#FF6C84]"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6C84] to-[#FFB7C5] rounded-full transition-transform duration-300 origin-left ${
                  isActive(link.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Center: Brand Logo — bigger & prominent */}
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="flex items-center group">
            <img
              src="/Images/Logo.png"
              alt="AUREA Fine Jewelry"
              className="h-20 sm:h-24 w-auto object-contain drop-shadow-sm transition-all duration-300 group-hover:scale-[1.04] group-hover:drop-shadow-md"
              draggable={false}
            />
          </Link>
        </div>

        {/* Right: Language Switcher */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-50 border border-slate-200 text-[11px] font-extrabold rounded-full hover:bg-[#FFF4F3] hover:border-[#FF6C84]/40 hover:text-[#FF6C84] transition-all cursor-pointer tracking-wide"
            title={lang === "ar" ? "Switch to English" : "تغيير للعربية"}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "ar" ? "EN" : "عربي"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#FFD6DD]/40 shadow-2xl py-5 px-4 z-50 animate-fadeInUp">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={(e) => handleNavClick(link.to, e)}
                className={`text-sm font-extrabold tracking-[0.08em] uppercase px-4 py-4 rounded-xl transition-all ${
                  isActive(link.to)
                    ? "text-[#FF6C84] bg-[#FFF4F3]"
                    : "text-slate-700 hover:text-[#FF6C84] hover:bg-[#FFF4F3]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

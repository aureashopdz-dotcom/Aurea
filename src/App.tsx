import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SlideCart } from "./components/SlideCart";
import { StickyCTA } from "./components/StickyCTA";
import { HomePage } from "./pages/HomePage";
import { ShopPage } from "./pages/ShopPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ContactPage } from "./pages/ContactPage";
import { ProductVariant, FreeGift, CartItem } from "./types";

export default function App() {
  const { pathname } = useLocation();
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState<boolean>(false);

  // Define premium variants matching ForChics structure but tailored to our Necklace
  const variants: ProductVariant[] = [
    {
      id: "1-necklace",
      name: "1 Hummingbird Necklace",
      bottles: 1,
      pricePerUnit: 49.99,
      compareAtPricePerUnit: 89.00,
      savings: 44
    },
    {
      id: "2-necklaces",
      name: "2 Hummingbird Necklaces (Save 55%)",
      bottles: 2,
      pricePerUnit: 39.99,
      compareAtPricePerUnit: 89.00,
      savings: 55
    },
    {
      id: "3-necklaces",
      name: "3 Hummingbird Necklaces (Best Value)",
      bottles: 3,
      pricePerUnit: 29.99,
      compareAtPricePerUnit: 89.00,
      savings: 66
    },
    {
      id: "4-necklaces",
      name: "4 Hummingbird Necklaces (Highest Discount)",
      bottles: 4,
      pricePerUnit: 24.99,
      compareAtPricePerUnit: 89.00,
      savings: 72,
      isBestDeal: true
    }
  ];

  // Define luxurious gifts unlocking progressively based on selected items
  const gifts: FreeGift[] = [
    {
      id: "gift-style-guide",
      name: "Styling eBook Guide",
      value: 9.95,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=150",
      minItemsRequired: 1
    },
    {
      id: "gift-velvet-pouch",
      name: "Plush Velvet Pouch",
      value: 15.00,
      image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=150",
      minItemsRequired: 2
    },
    {
      id: "gift-magnetic-box",
      name: "Magnetic Keepsake Box",
      value: 25.00,
      image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=150",
      minItemsRequired: 3
    },
    {
      id: "gift-pearl-earrings",
      name: "Silver Pearl Earrings",
      value: 45.00,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=150",
      minItemsRequired: 4
    }
  ];

  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.productId === item.productId && i.chain === item.chain
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      }
      return [...prev, item];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, chain: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId, chain);
      return;
    }
    setCart((prev) =>
      prev.map((i) =>
        i.productId === productId && i.chain === chain
          ? { ...i, quantity: newQty }
          : i
      )
    );
  };

  const handleRemoveFromCart = (productId: string, chain: string) => {
    setCart((prev) =>
      prev.filter((i) => !(i.productId === productId && i.chain === chain))
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div id="app-root-container" className="relative min-h-screen bg-white">
      {/* Dynamic Announcement Bar */}
      <AnnouncementBar lang={lang} />

      {/* Main Responsive Header Wordmark */}
      <Header lang={lang} setLang={setLang} cartCount={cartCount} onCartToggle={() => setCartDrawerOpen(true)} />

      {/* Page Routes with key to trigger page transition animation */}
      <main key={pathname} className="animate-pageFade">
        <Routes>
          <Route path="/" element={<HomePage lang={lang} />} />
          <Route path="/shop" element={<ShopPage lang={lang} onAddToCart={handleAddToCart} />} />
          <Route path="/shop/:productId" element={<ProductDetailPage lang={lang} />} />
          <Route path="/contact" element={<ContactPage lang={lang} />} />
        </Routes>
      </main>

      {/* Footer Category Lists & Newsletters */}
      <Footer lang={lang} />

      {/* Sliding shopping cart drawer */}
      <SlideCart
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        variants={variants}
        gifts={gifts}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemove={handleRemoveFromCart}
        lang={lang}
      />

      {/* Quick Mobile sticky buy footer tab */}
      <StickyCTA lang={lang} />
    </div>
  );
}

export interface TranslationSet {
  announcement1: string;
  announcement2: string;
  announcement3: string;
  home: string;
  shop: string;
  whyAura: string;
  reviews: string;
  compare: string;
  faq: string;
  exploreCollections: string;
  exploreDesc: string;
  ourStory: string;
  brandStoryTitle: string;
  brandStoryText: string;
  viewDetails: string;
  orderNow: string;
  addToCart: string;
  freeDelivery: string;
  easyReturns: string;
  secureOrder: string;
  chain: string;
  silver: string;
  gold: string;
  selectBundle: string;
  oneNecklace: string;
  twoNecklaces: string;
  threeNecklaces: string;
  fullName: string;
  phoneNumber: string;
  wilaya: string;
  commune: string;
  chooseWilaya: string;
  orderSummary: string;
  productTotal: string;
  deliveryFee: string;
  total: string;
  orderViaWhatsApp: string;
  orderViaWebsite: string;
  orderSuccessTitle: string;
  orderSuccessDesc: string;
  close: string;
  limitedTimeOffer: string;
  customerCare: string;
  contactUs: string;
  allRightsReserved: string;
  comingSoon: string;
  featured: string;
  newArrival: string;
  bestSeller: string;
  newsletterTitle: string;
  newsletterSub: string;
  newsletterDesc: string;
  enterEmail: string;
  getCoupon: string;
  couponSent: string;
}

export const TRANSLATIONS: Record<"ar" | "en", TranslationSet> = {
  ar: {
    announcement1: "خصم: يصل إلى 72% على قلادة طائر الطنان — لفترة محدودة",
    announcement2: "توصيل سريع + هدية فاخرة مجانية مع كل طلب باقة",
    announcement3: "اشتري 2 ووفر 55% | اشتري 3 ووفر 66% — يطبق الخصم تلقائياً",
    home: "الرئيسية",
    shop: "المتجر",
    whyAura: "لماذا أوريا",
    reviews: "الآراء",
    compare: "المقارنة",
    faq: "الأسئلة الشائعة",
    exploreCollections: "مجموعاتنا",
    exploreDesc: "كل قطعة مستوحاة من ألوان وطاقة الطبيعة — مصممة لتجعلك تتألقين.",
    ourStory: "قصتنا",
    brandStoryTitle: "قصة أوريا",
    brandStoryText: "ولدت أوريا من شغف الجمال الطبيعي والأناقة البسيطة. نؤمن بأن المجوهرات لا يجب أن تكون مجرد إكسسوار بل تعبير عن هويتك ومشاعرك. قلادة طائر الطنان الخاصة بنا مصنوعة بدقة وعناية لتجلب البهجة والألوان إلى إطلالتك اليومية.",
    viewDetails: "عرض التفاصيل",
    orderNow: "أطلب الآن — دفع عند الاستلام",
    addToCart: "إضافة إلى السلة",
    freeDelivery: "توصيل سريع",
    easyReturns: "إرجاع سهل خلال 30 يوم",
    secureOrder: "طلب آمن 100%",
    chain: "السلسلة",
    silver: "فضة",
    gold: "ذهب",
    selectBundle: "اختر العرض المناسب",
    oneNecklace: "قلادة واحدة (1900 د.ج + 450 د.ج التوصيل)",
    twoNecklaces: "قلادتين - خصم 50% على الثانية! (2850 د.ج + 300 د.ج التوصيل)",
    threeNecklaces: "3 قلادات - الثالثة مجاناً! (3800 د.ج + توصيل مجاني)",
    fullName: "الاسم الكامل",
    phoneNumber: "رقم الهاتف",
    wilaya: "الولاية",
    commune: "البلدية",
    chooseWilaya: "— اختر ولايتك —",
    orderSummary: "ملخص الطلب",
    productTotal: "سعر المنتجات",
    deliveryFee: "تكلفة التوصيل",
    total: "المجموع الكلي",
    orderViaWhatsApp: "تواصل معنا عبر واتساب 💬",
    orderViaWebsite: "تأكيد طلبك الآن ✓",
    orderSuccessTitle: "تم استلام طلبك بنجاح! 🎉",
    orderSuccessDesc: "شكراً لك، {name}! لقد استلمنا طلبك وسنتصل بك على الرقم {phone} لتأكيد التوصيل إلى {commune}، {wilaya}.",
    close: "إغلاق",
    limitedTimeOffer: "عرض لفترة محدودة",
    customerCare: "خدمة العملاء",
    contactUs: "اتصل بنا",
    allRightsReserved: "جميع الحقوق محفوظة أوريا 2026. صنع بحب لعشاق الطبيعة.",
    comingSoon: "قريباً",
    featured: "مميز",
    newArrival: "وصل حديثاً",
    bestSeller: "الأكثر مبيعاً",
    newsletterTitle: "انضم إلى عالمنا الفاخر",
    newsletterSub: "احصل على خصم 10% على طلبك الأول",
    newsletterDesc: "تحديثات حصرية، نصائح تنسيق المظهر، وعروض خاصة للأعضاء فقط.",
    enterEmail: "أدخل بريدك الإلكتروني",
    getCoupon: "احصل على الكوبون",
    couponSent: "كوبون الخصم الخاص بك في طريقه إليك! تفقد بريدك 💌",
  },
  en: {
    announcement1: "SALE: UP TO 72% OFF THE HUMMINGBIRD NECKLACE — LIMITED TIME",
    announcement2: "FREE SHIPPING + FREE LUXURY GIFT WITH EVERY BUNDLE ORDER",
    announcement3: "BUY 2 SAVE 55% | BUY 3 SAVE 66% — DISCOUNT APPLIED AUTOMATICALLY",
    home: "HOME",
    shop: "SHOP",
    whyAura: "WHY AUREA",
    reviews: "REVIEWS",
    compare: "COMPARE",
    faq: "FAQ",
    exploreCollections: "Our Collections",
    exploreDesc: "Each piece is inspired by the colours and energy of the natural world — designed to make you feel radiant.",
    ourStory: "OUR STORY",
    brandStoryTitle: "The AUREA Story",
    brandStoryText: "AUREA was born out of a passion for natural beauty and effortless elegance. We believe jewelry shouldn't just be an accessory, but a wearable expression of your unique joy. Our signature Hummingbird Necklace is meticulously detailed to catch the light and start conversations wherever you go.",
    viewDetails: "View Details",
    orderNow: "ORDER NOW — CASH ON DELIVERY",
    addToCart: "Add to Cart",
    freeDelivery: "Fast delivery",
    easyReturns: "30-day easy returns",
    secureOrder: "Secure order",
    chain: "Chain",
    silver: "Silver",
    gold: "Gold",
    selectBundle: "Select Bundle Offer",
    oneNecklace: "1 Necklace (1900 DA + 450 DA Shipping)",
    twoNecklaces: "2 Necklaces - 50% Off 2nd! (2850 DA + 300 DA Shipping)",
    threeNecklaces: "3 Necklaces - Buy 2 Get 1 Free! (3800 DA + FREE Shipping)",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    wilaya: "Wilaya (State)",
    commune: "Commune (City)",
    chooseWilaya: "— Choose Wilaya —",
    orderSummary: "Order Summary",
    productTotal: "Product Subtotal",
    deliveryFee: "Delivery Fee",
    total: "Grand Total",
    orderViaWhatsApp: "Contact Us via WhatsApp 💬",
    orderViaWebsite: "Confirm Your Order ✓",
    orderSuccessTitle: "Order Received! 🎉",
    orderSuccessDesc: "Thank you, {name}! We received your order and will contact you on {phone} to confirm delivery to {commune}, {wilaya}.",
    close: "Close",
    limitedTimeOffer: "LIMITED TIME OFFER",
    customerCare: "Customer Care",
    contactUs: "Contact Us",
    allRightsReserved: "© 2026 AUREA Fine Jewelry. Made with love for nature lovers.",
    comingSoon: "Coming Soon",
    featured: "Featured",
    newArrival: "New Arrival",
    bestSeller: "Best Seller",
    newsletterTitle: "Join The Inner Circle",
    newsletterSub: "Get 10% Off Your First Order",
    newsletterDesc: "Exclusive drops, styling tips, and special member-only offers — delivered with love.",
    enterEmail: "Your email address",
    getCoupon: "Get Coupon",
    couponSent: "Your 10% code is on its way! Check your inbox 💌",
  }
};

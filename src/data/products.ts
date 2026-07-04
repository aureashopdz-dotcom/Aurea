import img1 from "../assets/hummingbird-product-1.jpg";
import img2 from "../assets/hummingbird-product-2.jpg";
import img3 from "../assets/hummingbird-product-3.jpg";
import batImg1 from "../../Images/730620721_2517454658726725_8868282425921152749_n.jpg";
import batImg2 from "../../Images/728744240_2358611457882079_326585741473672331_n.jpg";
import batImg3 from "../../Images/729566830_1598360015191540_8285010084839496162_n.jpg";
import batImgBack from "../../Images/bat-heart-back.png";
import revHeart1 from "../../Images/REVIEWS (1).jpg";
import revHeart2 from "../../Images/REVIEWS (2).jpg";
import revHeart3 from "../../Images/REVIEWS (3).jpg";
import revHum1 from "../../Images/REVIEWS (4).jpg";
import revHum2 from "../../Images/REVIEWS (5).jpg";
import revHum3 from "../../Images/REVIEWS (6).jpg";

export interface ProductFAQ {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface ProductReview {
  id: string;
  name: string;
  title: string;
  titleAr: string;
  review: string;
  reviewAr: string;
  rating: number;
  date: string;
  dateAr: string;
  helpfulCount: number;
  image?: string;
}

export interface ProductValueProp {
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
  iconName: string;
}

export interface ProductFeature {
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
  iconName: string;
}

export interface ProductData {
  id: string;
  name: string;
  nameAr: string;
  shortName: string;
  shortNameAr: string;
  subtitle: string;
  subtitleAr: string;
  price: number;
  comparePrice: number;
  images: string[];
  badge: string;
  badgeAr: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  specs: string[];
  specsAr: string[];
  chainOptions?: string[];
  chainOptionsAr?: string[];
  valuePropHeading: string;
  valuePropHeadingAr: string;
  valuePropSubheading: string;
  valuePropSubheadingAr: string;
  valueProps: ProductValueProp[];
  spotlightHeading: string;
  spotlightHeadingAr: string;
  spotlightSubheading: string;
  spotlightSubheadingAr: string;
  spotlightPanels: {
    image: string;
    label: string;
    labelAr: string;
    caption: string;
    captionAr: string;
    tag: string;
    tagAr: string;
    color: string;
  }[];
  comparisonHeading: string;
  comparisonHeadingAr: string;
  comparisonRows: {
    feature: string;
    featureAr: string;
    ours: string;
    oursAr: string;
    others: string;
    othersAr: string;
  }[];
  reviewsHeading: string;
  reviewsHeadingAr: string;
  reviews: ProductReview[];
  featuresHeading: string;
  featuresHeadingAr: string;
  features: ProductFeature[];
  faqs: ProductFAQ[];
  ctaHeading: string;
  ctaHeadingAr: string;
  ctaSubheading: string;
  ctaSubheadingAr: string;
}

export const PRODUCTS: Record<string, ProductData> = {
  "hummingbird-necklace": {
    id: "hummingbird-necklace",
    name: "Colorful Hummingbird Pendant Necklace",
    nameAr: "قلادة طائر الطنان الملونة الأنيقة",
    shortName: "Hummingbird Necklace",
    shortNameAr: "قلادة طائر الطنان",
    subtitle: "Vibrant acrylic pendant · Silver chain",
    subtitleAr: "قلادة أكريليك نابضة بالحياة · سلسلة فضية",
    price: 1900,
    comparePrice: 3800,
    images: [img1, img2, img3],
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    category: "Necklaces",
    categoryAr: "قلادات",
    description:
      "A nature-inspired masterpiece — a stained-glass style hummingbird in vivid multi-colour acrylic. Feather-light at 20g, perfect for everyday wear or as a charming gift.",
    descriptionAr:
      "تحفة فنية مستوحاة من الطبيعة — قلادة على شكل طائر الطنان بأسلوب الزجاج الملون مصنوعة من الأكريليك النابض بالحياة ومتعدد الألوان. خفيفة الوزن للغاية (20 غرام فقط)، مثالية للارتداء اليومي أو كهدية ساحرة لمن تحب.",
    specs: [
      "Acrylic pendant, highly detailed",
      "Silver ball chain",
      "Ultra-lightweight — 20g",
      "Unisex & Gift-ready",
      "Wipe-clean care",
      "Nature-inspired design",
    ],
    specsAr: [
      "قلادة أكريليك، تفاصيل دقيقة للغاية",
      "سلسلة كروية بلون فضي",
      "خفيفة الوزن للغاية — 20 غرام فقط",
      "مناسبة للجنسين وجاهزة للتقديم كهدية",
      "سهلة التنظيف بمسحة واحدة",
      "تصميم مستوحى من جمال الطبيعة",
    ],
    chainOptions: ["Silver"],
    chainOptionsAr: ["فضة"],

    valuePropHeading: "Why Everyone Loves This Necklace",
    valuePropHeadingAr: "لماذا يعشق الجميع هذه القلادة",
    valuePropSubheading:
      "More than just a necklace — it's a wearable piece of nature's art. Playful, vibrant, and totally unique.",
    valuePropSubheadingAr:
      "أكثر من مجرد قلادة عادية — إنها قطعة فنية ترتدينها من وحي الطبيعة. مبهجة، نابضة بالحياة، وفريدة من نوعها تماماً.",
    valueProps: [
      {
        title: "Vivid Stained-Glass Art",
        titleAr: "فن الزجاج الملون النابض بالحياة",
        desc: "Every petal is individually detailed with vivid translucent acrylic — like wearing a tiny stained-glass masterpiece.",
        descAr: "كل جزء مزخرف بشكل منفرد بألوان أكريليك شبه شفافة ونابضة بالحياة — كأنك ترتدين تحفة صغيرة من الزجاج الملون.",
        iconName: "Palette",
      },
      {
        title: "Feather-Light at 20g",
        titleAr: "خفيفة كالريشة بوزن 20 غرام",
        desc: "Weighing just 20 grams, the pendant sits effortlessly all day without neck strain. Ideal for everyday wear.",
        descAr: "تزن 20 غراماً فقط، تستقر القلادة بجمال وخفة طوال اليوم دون أي إجهاد للرقبة. مثالية للاستخدام اليومي.",
        iconName: "Feather",
      },
      {
        title: "The Perfect Gift",
        titleAr: "الهدية المثالية لمن تحب",
        desc: "Beautifully presented and ready to gift — a heartfelt present for women, girls, mothers, and bird lovers everywhere.",
        descAr: "تأتي بتقديم راقٍ وجاهز للإهداء — هدية نابعة من القلب للنساء والفتيات والأمهات ومحبي الطبيعة في كل مكان.",
        iconName: "Gift",
      },
      {
        title: "Silver Chain Option",
        titleAr: "خيار السلسلة الفضية اللامعة",
        desc: "A shining silver ball chain complements the vibrant hummingbird pendant beautifully.",
        descAr: "تأتي السلسلة الفضية اللامعة لتبرز جمال وألوان القلادة بشكل رائع.",
        iconName: "Sparkles",
      },
    ],

    spotlightHeading: "Every Angle, A Work of Art",
    spotlightHeadingAr: "عمل فني راقٍ من كل زاوية",
    spotlightSubheading:
      "The Hummingbird Necklace isn't just jewelry — it's a mood, a statement, a moment of beauty.",
    spotlightSubheadingAr:
      "قلادة طائر الطنان ليست مجرد قطعة مجوهرات عادية — بل تعبر عن حالتك المزاجية، تميزك، ولحظة من الجمال.",
    spotlightPanels: [
      {
        image: img1,
        label: "Stained-Glass Detail",
        labelAr: "تفاصيل الزجاج الملون",
        caption: "Each petal is individually painted with vivid, translucent acrylic — like wearing a tiny piece of stained-glass art.",
        captionAr: "كل جزء ملون بشكل فردي بأكريليك شفاف ونابض بالحياة — كأنك ترتدين قطعة فنية أثرية.",
        tag: "Artisan Crafted",
        tagAr: "صناعة يدوية متقنة",
        color: "#FF6C84",
      },
      {
        image: img2,
        label: "Everyday Wear",
        labelAr: "مناسبة للاستخدام اليومي",
        caption: "Feather-light at just 20g — it sits so delicately you'll forget it's there until someone asks where you got it.",
        captionAr: "خفيفة الوزن تماماً بوزن 20 غرام فقط — تستقر بنعومة فائقة تجعلك تنسينها حتى يسألك أحدهم عنها وعن سر جمالها.",
        tag: "All-Day Comfort",
        tagAr: "راحة تامة طوال اليوم",
        color: "#9B6DFF",
      },
      {
        image: img3,
        label: "Styled to Impress",
        labelAr: "أناقة تخطف الأنظار",
        caption: "From casual summer looks to elegant evenings — this vibrant hummingbird adds the perfect pop of colour.",
        captionAr: "من المظهر الصيفي اليومي البسيط إلى السهرات الفاخرة والأنيقة — تضيف هذه القلادة لمسة الألوان المثالية لإطلالتك.",
        tag: "Conversation Starter",
        tagAr: "تخطف الأنظار والاهتمام",
        color: "#FF9A3C",
      },
    ],

    comparisonHeading: "Hummingbird vs. Generic Jewelry",
    comparisonHeadingAr: "مقارنة بين قلادتنا والمجوهرات التقليدية الأخرى",
    comparisonRows: [
      {
        feature: "Design",
        featureAr: "التصميم",
        ours: "Unique stained-glass art style, hand-detailed hummingbird",
        oursAr: "طراز زجاج ملون فريد، مصنوع يدوياً بكل دقة وعناية",
        others: "Generic plain pendants with no character",
        othersAr: "قلادات عادية سادة بدون أي هوية أو تميز",
      },
      {
        feature: "Weight",
        featureAr: "الوزن",
        ours: "Ultra-light 20g — all-day comfortable wear",
        oursAr: "خفيف للغاية 20 غرام — مريح لدرجة الارتداء طوال اليوم",
        others: "Heavy metals cause neck fatigue after hours",
        othersAr: "معادن ثقيلة ورخيصة تسبب ألماً وتعباً للرقبة",
      },
      {
        feature: "Material",
        featureAr: "المادة المصنوعة",
        ours: "Premium acrylic with vivid colour-fast pigments",
        oursAr: "أكريليك عالي الجودة مع أصباغ ثابتة ونابضة بالحياة",
        others: "Cheap resin that fades or chips quickly",
        othersAr: "راتنج رخيص يتلاشى لونه أو يتشقق بسرعة وسهولة",
      },
      {
        feature: "Chain",
        featureAr: "السلسلة",
        ours: "Gold or Silver ball chain — your choice",
        oursAr: "سلسلة كروية ذهبية أو فضية — حسب ذوقك واختيارك",
        others: "One style only, no personalisation",
        othersAr: "شكل ونوع واحد فقط متوفر، لا توجد خيارات تناسبك",
      },
      {
        feature: "Gift Appeal",
        featureAr: "العرض والتقديم",
        ours: "Beautifully presented, ready to gift immediately",
        oursAr: "مقدمة بشكل جذاب وأنيق، جاهزة للإهداء والتقديم فوراً",
        others: "Arrives in plain plastic bag, no packaging",
        othersAr: "تصل في كيس بلاستيكي عادي، بدون أي لمسة أو اهتمام",
      },
    ],

    reviewsHeading: "Loved by 2,800+ Happy Customers",
    reviewsHeadingAr: "نالت إعجاب أكثر من 2,800 عميل سعيد",
    reviews: [
      {
        id: "r1",
        name: "أميرة ب.",
        title: "Absolutely stunning — got so many compliments!",
        titleAr: "بزاف هبال — قاع عجباتهم وسقساوني عليها!",
        review: "I wore this to a family gathering and everyone wanted to know where I bought it. The colours are even more vibrant in person. It's so light I forget I'm wearing it. A perfect purchase!",
        reviewAr: "لبستها في لمة عائلية وقاع عجباتهم وحبو يعرفو منين شريتها. الألوان تاعها في الحقيقة خرجت بزاف شابة وحية كثر من التصاور. خفيفة بزاف لدرجة ننسى بلي راني لابسها. شريتها وعجبتني بزاااف!",
        rating: 5,
        date: "June 18, 2026",
        dateAr: "18 جوان 2026",
        helpfulCount: 47,
        image: revHum1,
      },
      {
        id: "r2",
        name: "سونيا م.",
        title: "Perfect gift for my daughter",
        titleAr: "كادو هايل لبنتي",
        review: "Bought this for my daughter's birthday and she absolutely loves it. The hummingbird design is so detailed and the colours are gorgeous. It arrived quickly and was beautifully presented.",
        reviewAr: "شريتها لبنتي في عيد ميلادها وعجبتها بزااف. لاديتان تاع طائر الطنان مفصلين بزاف والألوان بزاف شابين. وصلتني بالخف والتغليف تاعها كان روعة وراقي.",
        rating: 5,
        date: "June 14, 2026",
        dateAr: "14 جوان 2026",
        helpfulCount: 32,
        image: revHum2,
      },
      {
        id: "r3",
        name: "نور ك.",
        title: "A true conversation starter",
        titleAr: "تخطف العين وقاع يهدروا عليها",
        review: "I get stopped at least once a week by someone asking about this necklace. The rainbow colours catch every light beautifully. Lightweight and comfortable for all day wear.",
        reviewAr: "كل سمانة يوقفني كاش واحد يسقسيني على هاد السلسلة. الألوان تاعها تعكس الضوء بطريقة بزاف شابة. خفيفة ومريحة نلبسها قاع النهار بلا ما تقلقني.",
        rating: 5,
        date: "June 10, 2026",
        dateAr: "10 جوان 2026",
        helpfulCount: 28,
        image: revHum3,
      },
    ],

    featuresHeading: "Designed To Delight",
    featuresHeadingAr: "مصممة خصيصاً لتمنحك البهجة والسرور",
    features: [
      {
        title: "Lightweight & Comfortable",
        titleAr: "خفيفة الوزن ومريحة جداً",
        desc: "At just 20g, the hummingbird pendant is virtually weightless — you'll forget you're wearing it until someone compliments it.",
        descAr: "بوزن 20 غرام فقط، تعتبر القلادة خفيفة للغاية ولن تشعري بها إلا عندما يبدأ الناس في التعبير عن إعجابهم بها وبجمالها.",
        iconName: "Feather",
      },
      {
        title: "The Ideal Thoughtful Gift",
        titleAr: "الهدية المثالية والراقية",
        desc: "Perfect for birthdays, Eid, Mother's Day & more. A joyful nature-inspired piece every woman and bird lover will treasure.",
        descAr: "مثالية لأعياد الميلاد، العيد، عيد الأم وغيرها. قطعة مبهجة مستوحاة من الطبيعة ستعتز بها كل امرأة.",
        iconName: "Gift",
      },
      {
        title: "Simple, Fuss-Free Care",
        titleAr: "عناية سهلة وبسيطة",
        desc: "A gentle wipe with a dry microfiber cloth restores its vibrancy instantly. Store separately to keep it pristine.",
        descAr: "مسحة لطيفة بقطعة قماش ناعمة وجافة تعيد لها بريقها وجاذبيتها فوراً. احفظيها بشكل منفصل لتبقى نقية وجديدة دائماً.",
        iconName: "ShieldCheck",
      },
    ],

    faqs: [
      {
        question: "What is the pendant made of?",
        questionAr: "مما تتكون القلادة؟",
        answer: "The hummingbird pendant is made from high-quality acrylic with vivid, stained-glass inspired detailing. It hangs on a durable metal ball chain available in your choice of silver or gold tone. The total gross weight is approximately 20 grams — extremely lightweight and comfortable for all-day wear.",
        answerAr: "القلادة مصنوعة من الأكريليك عالي الجودة مع تفاصيل حية مستوحاة من طراز الزجاج الملون. وهي معلقة على سلسلة كروية معدنية متينة ومتوفرة باختيارك باللون الفضي أو الذهبي. الوزن الإجمالي حوالي 20 غرامًا فقط — خفيفة الوزن للغاية ومريحة للارتداء طوال اليوم.",
      },
      {
        question: "How do I care for the necklace?",
        questionAr: "كيف يمكنني العناية بالقلادة والمحافظة عليها؟",
        answer: "Caring for your hummingbird necklace is simple! Avoid rubbing it against hard or abrasive surfaces to prevent scratching. If it gets wet or dirty, gently wipe the pendant with a dry microfiber cloth and let it air dry completely. Store it separately from other jewelry to prevent tangling or surface wear.",
        answerAr: "العناية بقلادة طائر الطنان سهلة للغاية! تجنبي حكها بالأسطح الصلبة أو الخشنة لحمايتها من الخدوش. إذا تعرضت للبلل أو الاتساخ، امسحيها بلطف بقطعة قماش ناعمة وجافة ودعيها تجف تماماً. ويُفضل حفظها بشكل منفصل عن باقي المجوهرات لمنع تشابك السلاسل أو تآكل أسطحها.",
      },
      {
        question: "How long does shipping take?",
        questionAr: "ما هي المدة التي يستغرقها الشحن والتوصيل؟",
        answer: "All orders are processed and shipped within 24 hours. Standard delivery takes 2-5 business days across Algeria depending on your wilaya.",
        answerAr: "يتم معالجة جميع الطلبات وشحنها في غضون 24 ساعة. يستغرق التوصيل العادي من يومين إلى 5 أيام عمل في جميع أنحاء الجزائر حسب ولايتك.",
      },
    ],

    ctaHeading: "Wear a Piece of Nature's Magic",
    ctaHeadingAr: "ارتدي قطعة ساحرة من وحي الطبيعة الخلابة",
    ctaSubheading: "Colourful, lightweight, and conversation-starting. Buy 2+ and save up to 55%.",
    ctaSubheadingAr: "ملونة، خفيفة الوزن، وتخطف الأنظار في كل مكان. اشتري قطعتين أو أكثر ووفري حتى 55% مع توصيل مخفض.",
  },

  "bat-heart-necklace": {
    id: "bat-heart-necklace",
    name: "Bat Heart Pendant Necklace",
    nameAr: "قلادة قلب الخفاش الغوطية",
    shortName: "Bat Heart Necklace",
    shortNameAr: "قلادة قلب الخفاش",
    subtitle: "Gothic anatomical heart · Silver ball chain · 50 cm",
    subtitleAr: "قلب تشريحي غوطي · سلسلة كروية فضية · 50 سم",
    price: 1900,
    comparePrice: 3800,
    images: [batImg1, batImg2, batImg3, batImgBack],
    badge: "Dark Edition",
    badgeAr: "إصدار مظلم",
    category: "Necklaces",
    categoryAr: "قلادات",
    description:
      "A hauntingly beautiful statement piece — a deep crimson anatomical heart pendant adorned with silver bat wings and a miniature skull, suspended on a 50 cm silver ball chain. Silver-plated zinc alloy with rich red enamel detailing. For the bold, the dark, and the unapologetically unique.",
    descriptionAr:
      "قطعة بيان ساحرة ومذهلة — قلادة قلب تشريحي قرمزي عميق مزينة بأجنحة خفاش فضية وجمجمة مصغرة، معلقة على سلسلة كروية فضية بطول 50 سم. مطلية بالفضة مع تفاصيل مينا حمراء غنية. للجريئة، العاشقة للغموض، والفريدة في أسلوبها.",
    specs: [
      "Zinc alloy pendant, silver-plated & enameled",
      "Deep red enamel anatomical heart",
      "Silver bat wings & skull detail",
      "50 cm silver ball chain",
      "Unisex — Women's choker style",
      "Gothic / Dark Academia aesthetic",
    ],
    specsAr: [
      "قلادة زنك مطلية بالفضة ومطلية بالمينا",
      "قلب تشريحي بمينا حمراء غامقة",
      "أجنحة خفاش فضية وتفصيل جمجمة مصغرة",
      "سلسلة كروية فضية بطول 50 سم",
      "للجنسين — بأسلوب الشوكر النسائي",
      "طراز غوطي / Dark Academia",
    ],

    valuePropHeading: "Dark Beauty, Unapologetically You",
    valuePropHeadingAr: "جمال غامض لا يعتذر عن تميزه",
    valuePropSubheading:
      "Where gothic art meets fine jewelry — a piece that speaks for those who wear their heart on the outside.",
    valuePropSubheadingAr:
      "حيث يلتقي الفن الغوطي بالمجوهرات الراقية — قطعة تعبر عمن يرتدون قلوبهم للعالم.",
    valueProps: [
      {
        title: "Rich Red Enamel Heart",
        titleAr: "قلب مينا أحمر زاهٍ",
        desc: "The anatomical heart is flooded with deep crimson enamel and layered with intricate silver veining — striking from every angle.",
        descAr: "القلب التشريحي مغمور بمينا قرمزية عميقة ومغطى بشبكة دقيقة من العروق الفضية — يخطف الأنظار من كل زاوية.",
        iconName: "Heart",
      },
      {
        title: "Bat Wings & Skull Charm",
        titleAr: "أجنحة الخفاش وتميمة الجمجمة",
        desc: "A miniature skull clutched between silver bat wings tops the pendant — a gothic symbol of rebirth, mystery, and raw elegance.",
        descAr: "جمجمة مصغرة محاطة بأجنحة خفاش فضية تعلو القلادة — رمز غوطي للولادة من جديد والغموض والأناقة الجريئة.",
        iconName: "Sparkles",
      },
      {
        title: "Statement Silver Chain",
        titleAr: "سلسلة فضية جريئة",
        desc: "The 50 cm silver ball chain balances the bold pendant perfectly — long enough for a choker look or layered styling.",
        descAr: "سلسلة كروية فضية بطول 50 سم تكمل القلادة بشكل مثالي — طويلة بما يكفي لأسلوب الشوكر أو التنسيق المتعدد.",
        iconName: "Gem",
      },
      {
        title: "Zinc Alloy Durability",
        titleAr: "قلادة زنك مطلية بالفضة",
        desc: "Cast from premium zinc alloy then silver-plated and polished — built to hold its lustre through years of wear.",
        descAr: "مصنوعة من سبيكة زنك عالية الجودة ثم مطلية بالفضة ومصقولة — مصممة لتحافظ على بريقها لسنوات من الاستخدام.",
        iconName: "ShieldCheck",
      },
    ],

    spotlightHeading: "Wear the Darkness, Own the Room",
    spotlightHeadingAr: "ارتدي الغموض، وامتلكي المكان",
    spotlightSubheading:
      "The Bat Heart Necklace isn't just an accessory — it's a declaration of identity.",
    spotlightSubheadingAr:
      "قلادة قلب الخفاش ليست مجرد إكسسوار — إنها إعلان عن هويتك وأسلوبك الفريد.",
    spotlightPanels: [
      {
        image: batImg1,
        label: "Pendant Close-Up",
        labelAr: "تفاصيل القلادة عن قرب",
        caption: "Every vein of the silver overlay catches the light — the crimson enamel glows like a dark jewel.",
        captionAr: "كل عرق من الطلاء الفضي يعكس الضوء — والمينا القرمزية تتوهج كجوهرة مظلمة.",
        tag: "Handcrafted Detail",
        tagAr: "حرفة يدوية دقيقة",
        color: "#8B0000",
      },
      {
        image: batImg2,
        label: "Worn Look",
        labelAr: "مظهر الارتداء",
        caption: "Elegant on the collarbone — a dark statement that pairs beautifully with minimal outfits.",
        captionAr: "أنيقة على الترقوة — بيان مظلم يتناسق بجمال مع الملابس البسيطة.",
        tag: "All-Day Wear",
        tagAr: "مناسبة لطوال اليوم",
        color: "#4B0082",
      },
      {
        image: batImg3,
        label: "Dark Academia Mood",
        labelAr: "أجواء الغوطية الأكاديمية",
        caption: "Inspired by the aesthetic of gothic literature, candlelit libraries, and things that haunt beautifully.",
        captionAr: "مستوحاة من جماليات الأدب الغوطي والمكتبات المضاءة بالشموع — تلك الأشياء التي تسكن الخيال بجمال غامض.",
        tag: "Gothic Aesthetic",
        tagAr: "الستيل الغوطي",
        color: "#2D2D2D",
      },
    ],

    comparisonHeading: "Bat Heart vs. Generic Gothic Jewelry",
    comparisonHeadingAr: "قلادتنا مقابل مجوهرات غوطية عشوائية",
    comparisonRows: [
      {
        feature: "Design",
        featureAr: "التصميم",
        ours: "Intricate anatomical heart with bat wings & skull — a true art piece",
        oursAr: "قلب تشريحي دقيق مع أجنحة خفاش وجمجمة — تحفة فنية حقيقية",
        others: "Generic skull or bat charms with no layered detail",
        othersAr: "تعليقات جماجم أو خفافيش عادية بدون أي تفاصيل طبقية",
      },
      {
        feature: "Finish",
        featureAr: "الإنهاء والطلاء",
        ours: "Silver-plated, polished & hand-enameled in deep red",
        oursAr: "مطلية بالفضة، مصقولة، ومطلية يدوياً بالمينا الحمراء العميقة",
        others: "Painted plastic or unpolished raw metal — fades quickly",
        othersAr: "بلاستيك مطلي أو معدن خام غير مصقول — يتلاشى سريعاً",
      },
      {
        feature: "Chain",
        featureAr: "السلسلة",
        ours: "50 cm silver ball chain — perfect choker/layering length",
        oursAr: "سلسلة كروية فضية 50 سم — الطول المثالي للشوكر أو التنسيق المتعدد",
        others: "Thin, cheap chain that snaps easily",
        othersAr: "سلسلة رفيعة ورخيصة تنكسر بسهولة",
      },
      {
        feature: "Material",
        featureAr: "المادة",
        ours: "Zinc alloy, silver-plated — durable, detailed, and skin-safe",
        oursAr: "زنك مطلي بالفضة — متين، مفصل، وآمن على البشرة",
        others: "Unknown alloys that cause skin reactions",
        othersAr: "سبائك مجهولة تسبب تفاعلات جلدية وحساسية",
      },
    ],

    reviewsHeading: "Loved by the Dark & the Daring",
    reviewsHeadingAr: "أحبها الجريئون وعشاق الغموض",
    reviews: [
      {
        id: "bh1",
        name: "ليلى ع.",
        title: "Absolutely gothic perfection!",
        titleAr: "ستيل غوطي يهبل وقاع عجبهم!",
        review: "I've been searching for a piece like this for years. The red enamel heart is so richly detailed and the bat wings are perfectly sculpted. It arrived beautifully and got endless compliments at a concert.",
        reviewAr: "عندي شحال وأنا نحوس على قطعة كيما هادي. هاد القلب الحمر الميت تفاصيلو بزاف دقيقة والأجنحة تاع الخفاش مخدومين باتقان. وصلت مغلفة شابة بزاف وقاع سقساوني عليها في الحفلة.",
        rating: 5,
        date: "June 21, 2026",
        dateAr: "21 جوان 2026",
        helpfulCount: 38,
        image: revHeart1,
      },
      {
        id: "bh2",
        name: "سارة خ.",
        title: "Even more stunning in person",
        titleAr: "في الحقيقة خرجت بزاف شابة كثر من التصاور",
        review: "The photos don't do it justice — in real life the crimson enamel glows and the silver details are incredibly fine. Heavy enough to feel premium, light enough to wear all day. Love it.",
        reviewAr: "التصاور ما يعطوهاش حقها كامل — في الحقيقة الألوان تبرق بزااف وديكور الفضة بزاف دقيق. شادة روحها تحسها كاليتي بصح خفيفة تلبسها قاع النهار. عجبتني بزااف.",
        rating: 5,
        date: "June 19, 2026",
        dateAr: "19 جوان 2026",
        helpfulCount: 24,
        image: revHeart2,
      },
      {
        id: "bh3",
        name: "إيمان ط.",
        title: "The perfect dark academia accessory",
        titleAr: "اكسسوار هبال ويخرج مع قاع اللبسة",
        review: "I pair this with dark academia outfits and it is simply perfect. The gothic aesthetic is exactly what I was looking for — detailed, dramatic, and beautifully made. Will order again.",
        reviewAr: "نلبسها مع الحوايج كلاسيك تخرج روعة. الستيل تاعها هاداك واش كنت نحوس — شابة، غامضة ومخدومة باتقان. أكيد نزيد نطلب منها!",
        rating: 5,
        date: "June 17, 2026",
        dateAr: "17 جوان 2026",
        helpfulCount: 19,
        image: revHeart3,
      },
    ],

    featuresHeading: "Crafted for the Darkly Beautiful",
    featuresHeadingAr: "مصنوعة للجمال الغامض",
    features: [
      {
        title: "Anatomical Heart Pendant",
        titleAr: "قلادة القلب التشريحية",
        desc: "A precisely detailed anatomical heart overflowing with deep red enamel — every vein and chamber rendered in silver overlay.",
        descAr: "قلب تشريحي مفصل بدقة مليء بالمينا الحمراء العميقة — كل وريد وحجرة مجسدة بطلاء فضي.",
        iconName: "Heart",
      },
      {
        title: "Gothic Bat Wings & Skull",
        titleAr: "أجنحة خفاش غوطية وجمجمة",
        desc: "A sculpted bat clutches a tiny skull above the heart — iconic gothic symbolism executed with premium silver-plated zinc alloy craftsmanship.",
        descAr: "خفاش منحوت يمسك جمجمة صغيرة فوق القلب — رمزية غوطية أيقونية منفذة بحرفة زنك مطلي بالفضة.",
        iconName: "Sparkles",
      },
      {
        title: "Silver-Plated & Polished",
        titleAr: "مطلية بالفضة ومصقولة",
        desc: "Electroplated in bright silver and then hand-polished — maintains its lustrous finish through daily wear.",
        descAr: "مطلية كهربائياً بالفضة اللامعة ثم مصقولة يدوياً — تحافظ على لمعانها مع الاستخدام اليومي.",
        iconName: "ShieldCheck",
      },
    ],

    faqs: [
      {
        question: "What is the pendant made of?",
        questionAr: "مما تصنع القلادة؟",
        answer: "The Bat Heart pendant is cast from zinc alloy, then silver-plated, polished, and finished with deep red enamel on the anatomical heart. The bat wings and skull details are all part of the same cast — no separate glued pieces. The chain is a 50 cm silver ball chain.",
        answerAr: "قلادة قلب الخفاش مصنوعة من سبيكة زنك مطلية بالفضة ومصقولة، ومزينة بمينا حمراء عميقة على القلب التشريحي. أجنحة الخفاش وتفاصيل الجمجمة كلها جزء من نفس القالب — لا توجد قطع منفصلة ملصقة. السلسلة عبارة عن سلسلة كروية فضية بطول 50 سم.",
      },
      {
        question: "How do I care for it?",
        questionAr: "كيف أعتني بالقلادة؟",
        answer: "Avoid prolonged exposure to water, perfume, and harsh chemicals. When not wearing it, store it in a dry pouch or box to preserve the silver plating and enamel finish. Gently wipe with a soft dry cloth to restore shine.",
        answerAr: "تجنب التعرض المطول للماء والعطر والمواد الكيميائية القاسية. عند عدم ارتدائها، احتفظ بها في كيس أو علبة جافة للحفاظ على الطلاء الفضي وتشطيب المينا. امسحها برفق بقطعة قماش ناعمة وجافة لاستعادة اللمعان.",
      },
      {
        question: "How long does shipping take?",
        questionAr: "كم يستغرق الشحن؟",
        answer: "All orders are processed and shipped within 24 hours. Standard delivery takes 2–5 business days across Algeria depending on your wilaya.",
        answerAr: "تتم معالجة جميع الطلبات وشحنها خلال 24 ساعة. يستغرق التوصيل العادي من يومين إلى 5 أيام عمل في جميع أنحاء الجزائر حسب ولايتك.",
      },
      {
        question: "Is this suitable as a gift?",
        questionAr: "هل هي مناسبة كهدية؟",
        answer: "Absolutely. The Bat Heart Necklace makes a stunning gift for lovers of gothic, dark academia, punk, or alternative aesthetics. It arrives gift-ready and is sure to make a dramatic impression.",
        answerAr: "بالتأكيد. تُعدّ قلادة قلب الخفاش هدية مذهلة لمحبي الجمالية الغوطية والأكاديمية المظلمة والبانك والأساليب البديلة. تصل جاهزة للإهداء ومضمون أنها ستترك انطباعاً دراماتيكياً.",
      },
    ],

    ctaHeading: "Wear the Heart That Beats Differently",
    ctaHeadingAr: "ارتدي القلب الذي ينبض بشكل مختلف",
    ctaSubheading: "Bold, gothic, and undeniably beautiful. Own yours today.",
    ctaSubheadingAr: "جريئة، غوطية، وجميلة بشكل لا يُنكر. اطلبي قطعتك اليوم.",
  },
};

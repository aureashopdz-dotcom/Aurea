import img1 from "../assets/hummingbird-product-1.jpg";
import img2 from "../assets/hummingbird-product-2.jpg";
import img3 from "../assets/hummingbird-product-3.jpg";
import batImg1 from "../../Images/730620721_2517454658726725_8868282425921152749_n.jpg";
import batImg2 from "../../Images/728744240_2358611457882079_326585741473672331_n.jpg";
import batImg3 from "../../Images/729566830_1598360015191540_8285010084839496162_n.jpg";
import batImgBack from "../../Images/bat-heart-back.png";
import batImgAd from "../../Images/image-ad.png";
import revHeart1 from "../../Images/REVIEWS (1).jpg";
import revHeart2 from "../../Images/REVIEWS (2).jpg";
import revHeart3 from "../../Images/REVIEWS (3).jpg";
import revHum1 from "../../Images/REVIEWS (4).jpg";
import revHum2 from "../../Images/REVIEWS (5).jpg";
import revHum3 from "../../Images/REVIEWS (6).jpg";
// Butterfly Necklace images
import butterflyImg1 from "../../Images/attachments/5988.png"; // Blue
import butterflyImg2 from "../../Images/attachments/5987.png"; // Purple
import butterflyImg3 from "../../Images/attachments/5986.png"; // Pink
import butterflyImg4 from "../../Images/attachments/6021.png"; // Aurora/Dark
import butterflyImgBack from "../../Images/attachments/6022.png";
import butterflySpot1 from "../../Images/attachments/7259.png";
import butterflySpot2 from "../../Images/attachments/6009.png";
import butterflySpot3 from "../../Images/attachments/6011.png";
import revButterfly1 from "../../Images/attachments/5993.jpg";
import revButterfly2 from "../../Images/attachments/5996.jpg";
import revButterfly3 from "../../Images/attachments/5997.jpg";

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
  backImage?: string;
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
    nameAr: "قلادة قلب الخفاش",
    shortName: "Bat Heart Necklace",
    shortNameAr: "قلادة قلب الخفاش",
    subtitle: "Anatomical heart · Matching chain · 50 cm",
    subtitleAr: "قلب تشريحي · سلسلة مطابقة · 50 سم",
    price: 1900,
    comparePrice: 3800,
    images: [batImg2, batImg1, batImg3, batImgAd],
    backImage: batImgBack,
    badge: "Dark Edition",
    badgeAr: "إصدار مظلم",
    category: "Necklaces",
    categoryAr: "قلادات",
    description:
      "A hauntingly beautiful statement piece — a deep crimson anatomical heart pendant adorned with wings and a miniature skull, suspended on a 50 cm matching chain. Features rich red enamel detailing. For the bold, the dark, and the unapologetically unique.",
    descriptionAr:
      "قطعة بيان ساحرة ومذهلة — قلادة قلب تشريحي قرمزي عميق مزينة بأجنحة خفاش وجمجمة مصغرة، معلقة على سلسلة بطول 50 سم، مع تفاصيل مينا حمراء غنية. للجريئة، العاشقة للغموض، والفريدة في أسلوبها.",
    specs: [
      "Unique enameled statement pendant",
      "Deep red enamel anatomical heart",
      "Bat wings & skull detail",
      "50 cm matching chain",
      "Unisex — Women's choker style",
      "Dark Academia aesthetic",
    ],
    specsAr: [
      "قلادة مميزة مطلية بالمينا",
      "قلب تشريحي بمينا حمراء غامقة",
      "أجنحة خفاش وتفصيل جمجمة مصغرة",
      "سلسلة بطول 50 سم",
      "للجنسين — بأسلوب الشوكر النسائي",
      "طراز Dark Academia",
    ],

    valuePropHeading: "Dark Beauty, Unapologetically You",
    valuePropHeadingAr: "جمال غامض لا يعتذر عن تميزه",
    valuePropSubheading:
      "Fine jewelry with a touch of mystery — a piece that speaks for those who wear their heart on the outside.",
    valuePropSubheadingAr:
      "مجوهرات راقية بلمسة من الغموض — قطعة تعبر عمن يرتدون قلوبهم للعالم.",
    valueProps: [
      {
        title: "Rich Red Enamel Heart",
        titleAr: "قلب مينا أحمر زاهٍ",
        desc: "The anatomical heart is flooded with deep crimson enamel and layered with intricate veining — striking from every angle.",
        descAr: "القلب التشريحي مغمور بمينا قرمزية عميقة ومغطى بشبكة دقيقة من العروق — يخطف الأنظار من كل زاوية.",
        iconName: "Heart",
      },
      {
        title: "Bat Wings & Skull Charm",
        titleAr: "أجنحة الخفاش وتميمة الجمجمة",
        desc: "A miniature skull clutched between bat wings tops the pendant — a symbol of rebirth, mystery, and raw elegance.",
        descAr: "جمجمة مصغرة محاطة بأجنحة خفاش تعلو القلادة — رمز للولادة من جديد والغموض والأناقة الجريئة.",
        iconName: "Sparkles",
      },
      {
        title: "Statement Matching Chain",
        titleAr: "سلسلة مطابقة مميزة",
        desc: "The 50 cm matching chain balances the bold pendant perfectly — long enough for a choker look or layered styling.",
        descAr: "سلسلة مطابقة بطول 50 سم تكمل القلادة بشكل مثالي — طويلة بما يكفي لأسلوب الشوكر أو التنسيق المتعدد.",
        iconName: "Gem",
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
        caption: "Every vein of the overlay catches the light — the crimson enamel glows like a dark jewel.",
        captionAr: "كل عرق من الطلاء يعكس الضوء — والمينا القرمزية تتوهج كجوهرة مظلمة.",
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
        labelAr: "أجواء الأكاديمية المظلمة",
        caption: "Inspired by the aesthetic of classic literature, candlelit libraries, and things that haunt beautifully.",
        captionAr: "مستوحاة من جماليات الأدب الكلاسيكي والمكتبات المضاءة بالشموع — تلك الأشياء التي تسكن الخيال بجمال غامض.",
        tag: "Alternative Aesthetic",
        tagAr: "الستايل البديل",
        color: "#2D2D2D",
      },
    ],

    comparisonHeading: "Bat Heart vs. Generic Jewelry",
    comparisonHeadingAr: "قلادتنا مقابل مجوهرات عشوائية",
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
        ours: "Polished & hand-enameled in deep red",
        oursAr: "مصقولة، ومطلية يدوياً بالمينا الحمراء العميقة",
        others: "Painted plastic or unpolished raw metal — fades quickly",
        othersAr: "بلاستيك مطلي أو معدن خام غير مصقول — يتلاشى سريعاً",
      },
      {
        feature: "Chain",
        featureAr: "السلسلة",
        ours: "50 cm matching chain — perfect choker/layering length",
        oursAr: "سلسلة مطابقة 50 سم — الطول المثالي للشوكر أو التنسيق المتعدد",
        others: "Thin, cheap chain that snaps easily",
        othersAr: "سلسلة رفيعة ورخيصة تنكسر بسهولة",
      },
      {
        feature: "Material",
        featureAr: "المادة",
        ours: "High-quality enameled alloy — durable, detailed, and skin-safe",
        oursAr: "سبيكة عالية الجودة مطلية بالمينا — متينة، مفصلة، وآمنة على البشرة",
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
        title: "Absolutely stunning!",
        titleAr: "تصميم يهبل وقاع عجبهم!",
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
        desc: "A sculpted bat clutches a tiny skull above the heart — iconic gothic symbolism executed with premium craftsmanship.",
        descAr: "خفاش منحوت يمسك جمجمة صغيرة فوق القلب — رمزية غوطية أيقونية منفذة بحرفية واتقان عالي.",
        iconName: "Sparkles",
      },
      {
        title: "Polished Finish",
        titleAr: "مصقولة ولامعة",
        desc: "Electroplated with a bright lustrous finish and hand-polished — maintains its shine through daily wear.",
        descAr: "مطلية بطلاء لامع ومصقولة يدوياً — تحافظ على لمعانها وجمالها مع الاستخدام اليومي.",
        iconName: "ShieldCheck",
      },
    ],

    faqs: [
      {
        question: "What is the pendant made of?",
        questionAr: "مما تصنع القلادة؟",
        answer: "The Bat Heart pendant is cast from a durable alloy, polished, and finished with deep red enamel on the anatomical heart. The wings and skull details are all part of the same cast — no separate glued pieces. The chain is a matching 50 cm ball chain.",
        answerAr: "قلادة قلب الخفاش مصنوعة من سبيكة معدنية متينة ومصقولة، ومزينة بمينا حمراء عميقة على القلب التشريحي. أجنحة الخفاش وتفاصيل الجمجمة كلها جزء من نفس القالب — لا توجد قطع منفصلة ملصقة. السلسلة عبارة عن سلسلة كروية بطول 50 سم.",
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

  "butterfly-necklace": {
    id: "butterfly-necklace",
    name: "Crystal Butterfly Pendant Necklace",
    nameAr: "قلادة الفراشة الكريستالية اللامعة",
    shortName: "Butterfly Necklace",
    shortNameAr: "قلادة الفراشة",
    subtitle: "Zircon crystal butterfly · Gold-plated link chain · 45 cm",
    subtitleAr: "فراشة زركون كريستالية · سلسلة مطلية بالذهب · 45 سم",
    price: 1900,
    comparePrice: 3800,
    images: [butterflyImg1, butterflyImg2, butterflyImg3, butterflyImg4],
    backImage: butterflyImgBack,
    badge: "Y2K Aesthetic",
    badgeAr: "ستايل Y2K",
    category: "Necklaces",
    categoryAr: "قلادات",
    description:
      "A breathtaking Y2K-inspired clavicle necklace featuring a delicate butterfly pendant adorned with radiant zircon crystals. Micro-pave set stones capture light from every angle, delivering luxury shine that elevates any outfit — from everyday casual to special occasions.",
    descriptionAr:
      "قلادة ترقوة مستوحاة من أسلوب Y2K الساحر، تتصدرها فراشة رقيقة مزينة بأحجار الزركون البراقة. تلتقط أحجار الزركون الصغيرة الضوء من كل زاوية، لتمنحك لمعاناً فاخراً يرفع مستوى أي إطلالة — من ملابس يومية بسيطة إلى المناسبات الخاصة.",
    specs: [
      "Zinc alloy base, gold-plated finish",
      "Zircon crystal micro-pave butterfly pendant",
      "18-inch (45 cm) link chain — sits right on the collarbone",
      "Pendant size: 2 × 2 cm",
      "Lightweight — only 15g",
      "Available in: Blue, Purple & Pink",
    ],
    specsAr: [
      "قاعدة سبيكة زنك مطلية بالذهب",
      "قلادة فراشة بأحجار زركون بتقنية ميكرو بافي",
      "سلسلة حلقات 45 سم — تستقر بشكل مثالي على الترقوة",
      "حجم القلادة: 2 × 2 سم",
      "خفيفة الوزن — 15 غرام فقط",
      "متوفرة بألوان: أزرق، بنفسجي وردي",
    ],
    chainOptions: ["Blue", "Purple", "Pink"],
    chainOptionsAr: ["أزرق", "بنفسجي", "وردي"],

    valuePropHeading: "Why Every Girl Needs This Necklace",
    valuePropHeadingAr: "لماذا تحتاجين هذه القلادة؟",
    valuePropSubheading:
      "More than an accessory — it's a symbol of transformation, hope, and effortless beauty. Perfect alone or layered.",
    valuePropSubheadingAr:
      "أكثر من مجرد إكسسوار — إنها رمز للتحول والأمل والجمال الطبيعي. مثالية وحدها أو منسقة مع قطع أخرى.",
    valueProps: [
      {
        title: "Irresistible Crystal Radiance",
        titleAr: "بريق كريستالي لا يُقاوَم",
        desc: "Micro-pave zircon crystals catch light from every angle, delivering a luxury look that rivals fine jewelry at a fraction of the cost.",
        descAr: "أحجار الزركون الدقيقة تلتقط الضوء من كل الاتجاهات، لتمنحك مظهر المجوهرات الفاخرة بسعر في متناول الجميع.",
        iconName: "Sparkles",
      },
      {
        title: "The Perfect Meaningful Gift",
        titleAr: "الهدية المعبرة والمميزة",
        desc: "Butterflies symbolise transformation, hope, and rebirth — a deeply personal and popular gift for birthdays, Eid, and anniversaries.",
        descAr: "الفراشة رمز للتحول والأمل والولادة من جديد — هدية شخصية ومحببة لأعياد الميلاد والعيد وذكريات الزواج.",
        iconName: "Gift",
      },
      {
        title: "Collarbone-Perfect Length",
        titleAr: "طول مثالي لخط الترقوة",
        desc: "The 45 cm chain is designed specifically to sit right on the collarbone — effortlessly elegant and easy to layer with other pieces.",
        descAr: "السلسلة 45 سم مصممة خصيصاً لتستقر على خط الترقوة بشكل مثالي — أناقة عفوية وسهلة التنسيق مع أي قطعة أخرى.",
        iconName: "Gem",
      },
      {
        title: "Featherlight at 15g",
        titleAr: "خفيفة كالريشة بوزن 15 غرام",
        desc: "At only 15 grams, the butterfly pendant rests comfortably all day without any neck strain. Wear it from morning to midnight.",
        descAr: "بوزن 15 غرام فقط، تستقر القلادة براحة تامة طوال اليوم دون أي ثقل على الرقبة. تلبسيها من الصباح للمساء.",
        iconName: "Feather",
      },
    ],

    spotlightHeading: "A Wing of Light on Every Look",
    spotlightHeadingAr: "جناح من الضوء على كل إطلالة",
    spotlightSubheading:
      "The Crystal Butterfly isn't just jewelry — it's a mood, a memory, and a moment frozen in light.",
    spotlightSubheadingAr:
      "قلادة الفراشة الكريستالية ليست مجرد مجوهرات — إنها حالة مزاجية وذكرى ولحظة مجمدة في الضوء.",
    spotlightPanels: [
      {
        image: butterflySpot1,
        label: "Made for Algeria",
        labelAr: "صُنعت من أجل الجزائر",
        caption: "Delivered to all 58 wilayas across Algeria — your butterfly is only an order away.",
        captionAr: "توصيل لجميع ولايات الجزائر الـ58 — فراشتك على بعد طلب واحد فقط.",
        tag: "Nationwide Delivery",
        tagAr: "توصيل لجميع الولايات",
        color: "#FF6C84",
      },
      {
        image: butterflySpot2,
        label: "Everyday Elegance",
        labelAr: "أناقة يومية",
        caption: "Lightweight at just 15g — it sits so delicately on your collarbone you'll forget it's there until the compliments start.",
        captionAr: "خفيفة 15 غرام فقط — تستقر على ترقوتك بنعومة ستنسينها حتى تبدأ المديح.",
        tag: "All-Day Comfort",
        tagAr: "راحة طوال اليوم",
        color: "#9B6DFF",
      },
      {
        image: butterflySpot3,
        label: "A Gift Worth Giving",
        labelAr: "هدية تستحق أن تُقدَّم",
        caption: "Butterflies symbolise hope, transformation, and new beginnings — a gift that carries meaning beyond the beautiful packaging.",
        captionAr: "الفراشة رمز الأمل والتحول والبداية الجديدة — هدية تحمل معنى يتجاوز تغليفها الجميل.",
        tag: "Gift-Ready",
        tagAr: "جاهزة للإهداء",
        color: "#FD8935",
      },
    ],

    comparisonHeading: "Crystal Butterfly vs. Generic Jewelry",
    comparisonHeadingAr: "قلادتنا مقابل المجوهرات العادية",
    comparisonRows: [
      {
        feature: "Crystal Quality",
        featureAr: "جودة الكريستال",
        ours: "High-grade zircon with micro-pave setting — maximum brilliance",
        oursAr: "زركون عالي الجودة بإعداد ميكرو بافي — لمعان استثنائي",
        others: "Cheap glass stones that dull after days",
        othersAr: "حجارة زجاجية رخيصة تفقد بريقها بسرعة",
      },
      {
        feature: "Chain",
        featureAr: "السلسلة",
        ours: "Gold-plated link chain, 45 cm — perfect collarbone length",
        oursAr: "سلسلة حلقات مطلية بالذهب، 45 سم — طول مثالي للترقوة",
        others: "Thin, tarnishing chain with no standard length",
        othersAr: "سلسلة رفيعة تتآكل ولا طول محدد لها",
      },
      {
        feature: "Weight",
        featureAr: "الوزن",
        ours: "Only 15g — comfortable all day, every day",
        oursAr: "15 غرام فقط — مريحة طوال اليوم وكل يوم",
        others: "Heavy metals cause neck strain and discomfort",
        othersAr: "معادن ثقيلة تسبب ألم وتعب للرقبة",
      },
      {
        feature: "Design",
        featureAr: "التصميم",
        ours: "Detailed butterfly with gold-plated setting — luxurious Y2K aesthetic",
        oursAr: "فراشة مفصلة بإطار ذهبي — جمالية Y2K فاخرة",
        others: "Generic flat pendants with no detail or character",
        othersAr: "قلادات مستوية عادية بلا تفاصيل أو طابع مميز",
      },
      {
        feature: "Color Options",
        featureAr: "خيارات الألوان",
        ours: "Blue, Purple & Pink — choose your vibe",
        oursAr: "أزرق، بنفسجي وردي — اختاري لونك المفضل",
        others: "One colour only, no personalisation",
        othersAr: "لون واحد فقط، لا خيارات تناسبك",
      },
    ],

    reviewsHeading: "Loved by Jewellery Fans Across Algeria",
    reviewsHeadingAr: "أحبتها عاشقات المجوهرات في كل الجزائر",
    reviews: [
      {
        id: "bf1",
        name: "هناء ب.",
        title: "Wore it and got stopped twice in one day!",
        titleAr: "لبستها وقفوني مرتين في يوم واحد!",
        review: "I ordered the purple one and it's absolutely magical. The crystals sparkle so much in sunlight — everyone at work kept asking where I got it. Lightweight, comfortable, and looks way more expensive than it is. Will be ordering the blue one next!",
        reviewAr: "طلبت البنفسجية وراهي سحرية بصح. الكريستال تبرق بزاف في ضوء الشمس — قاع الناس في الخدمة سقساوني منين شريتها. خفيفة ومريحة وتبان بزاف غالية كثر ما هي. غادي نطلب الزرقاء كيف كيف!",
        rating: 5,
        date: "July 12, 2026",
        dateAr: "12 جويلية 2026",
        helpfulCount: 52,
        image: revButterfly1,
      },
      {
        id: "bf2",
        name: "إيمان ر.",
        title: "The perfect birthday gift for my sister",
        titleAr: "كادو عيد ميلاد مثالي لأختي",
        review: "Bought the blue butterfly for my sister's birthday and she absolutely loved it. The packaging was beautiful and she cried when she opened it. The crystals are incredibly shiny and the gold chain is elegant. Highly recommend!",
        reviewAr: "شريت الفراشة الزرقاء لأختي في عيد ميلادها وعجبتها بزاااف. التغليف كان روعة وبكات ملي فتحتها. الكريستالات بزاف بزاف تلمع والسلسلة الذهبية أنيقة. نوصي بيها بزاف!",
        rating: 5,
        date: "July 8, 2026",
        dateAr: "8 جويلية 2026",
        helpfulCount: 41,
        image: revButterfly2,
      },
      {
        id: "bf3",
        name: "سلمى ح.",
        title: "Exactly as shown, fast delivery!",
        titleAr: "بالضبط كما في الصور، توصيل سريع!",
        review: "Ordered the pink version and it arrived in 3 days to Oran. The butterfly is even prettier in person — the crystals catch every ray of light. Perfect for layering with other necklaces. I've been wearing it every single day since it arrived!",
        reviewAr: "طلبت النسخة الوردية ووصلت في 3 أيام لوهران. الفراشة بزاف شابة في الحقيقة أكثر من التصاور — الكريستالات تعكس كل ضوء. مثالية للتنسيق مع سلاسل أخرى. نلبسها كل يوم من يوم ما وصلت!",
        rating: 5,
        date: "July 5, 2026",
        dateAr: "5 جويلية 2026",
        helpfulCount: 35,
        image: revButterfly3,
      },
    ],

    featuresHeading: "Designed to Dazzle",
    featuresHeadingAr: "مصممة لتبهر وتخطف الأنظار",
    features: [
      {
        title: "Micro-Pave Zircon Crystals",
        titleAr: "كريستال زركون بتقنية ميكرو بافي",
        desc: "High-grade zircon crystals set with precision micro-pave technique deliver maximum sparkle and a luxury finish that catches every light.",
        descAr: "أحجار زركون عالية الجودة مثبتة بتقنية ميكرو بافي الدقيقة، تمنحك أقصى قدر من اللمعان وإنهاء فاخر يلتقط كل ضوء.",
        iconName: "Sparkles",
      },
      {
        title: "Symbol of Hope & Transformation",
        titleAr: "رمز الأمل والتحول والبداية الجديدة",
        desc: "Butterflies carry deep meaning — transformation, hope, and rebirth. A gift that says far more than words ever could.",
        descAr: "الفراشة تحمل معاني عميقة — التحول والأمل والولادة من جديد. هدية تقول أكثر بكثير مما تستطيع الكلمات قوله.",
        iconName: "Gift",
      },
      {
        title: "Gold-Plated, Skin-Safe",
        titleAr: "مطلية بالذهب وآمنة للبشرة",
        desc: "Zinc alloy base with a premium gold-plated finish. Hypoallergenic and safe for sensitive skin — wear worry-free every day.",
        descAr: "قاعدة سبيكة زنك مع طلاء ذهبي فاخر. مضادة للحساسية وآمنة للبشرة الحساسة — تلبسيها كل يوم بلا أي قلق.",
        iconName: "ShieldCheck",
      },
    ],

    faqs: [
      {
        question: "What is the pendant made of?",
        questionAr: "مما تصنع القلادة؟",
        answer: "The butterfly pendant is made from a zinc alloy base with a premium gold-plated finish. The wings are set with high-quality zircon crystals using a micro-pave technique that maximises brilliance and sparkle. The body of the butterfly features additional small zircon accents. Total gross weight is just 15g, making it ultra-comfortable for all-day wear.",
        answerAr: "القلادة مصنوعة من قاعدة سبيكة زنك مع طلاء ذهبي فاخر. أجنحة الفراشة مرصعة بأحجار زركون عالية الجودة بتقنية ميكرو بافي التي تعظم البريق واللمعان. جسم الفراشة يحتوي على تفاصيل زركون إضافية. الوزن الإجمالي 15 غرام فقط، مما يجعلها مريحة للغاية طوال اليوم.",
      },
      {
        question: "What colour options are available?",
        questionAr: "ما هي خيارات الألوان المتاحة؟",
        answer: "The Crystal Butterfly Necklace is available in three stunning crystal colours: Blue (ocean-inspired, vibrant teal-to-navy gradient), Purple (romantic violet-to-magenta shimmer), and Pink (soft blush aurora with light-catching iridescence). All variants come on the same elegant gold-plated chain.",
        answerAr: "قلادة الفراشة الكريستالية متوفرة بثلاثة ألوان مذهلة: أزرق (مستوحى من المحيط، تدرج من الأزرق المائي إلى الأزرق الداكن)، بنفسجي (توهج رومانسي من البنفسجي إلى الفوشيا)، وردي (لمعان أورورا ناعم مع بريق قزحي). جميع الألوان تأتي على نفس السلسلة الذهبية الأنيقة.",
      },
      {
        question: "How do I care for this necklace?",
        questionAr: "كيف أعتني بهذه القلادة؟",
        answer: "To maintain the brilliance of the crystals and the gold finish: avoid exposing the necklace to perfume, hairspray, water, and harsh chemicals. When not wearing it, store it in a dry pouch or box. Gently wipe the pendant with a soft, dry cloth to restore its sparkle. Avoid rubbing the crystals against abrasive surfaces.",
        answerAr: "للحفاظ على بريق الكريستالات والطلاء الذهبي: تجنبي تعريض القلادة للعطر، ورذاذ الشعر، والماء، والمواد الكيميائية القاسية. عند عدم ارتدائها، احفظيها في كيس أو علبة جافة. امسحي القلادة برفق بقطعة قماش ناعمة وجافة لاستعادة بريقها. تجنبي حك الكريستالات بالأسطح الخشنة.",
      },
      {
        question: "How long does shipping take?",
        questionAr: "ما هي مدة الشحن؟",
        answer: "All orders are processed and shipped within 24 hours. Standard delivery takes 2–5 business days across all 58 wilayas in Algeria. Cash on delivery — you pay when you receive your order.",
        answerAr: "تتم معالجة جميع الطلبات وشحنها خلال 24 ساعة. يستغرق التوصيل العادي من يومين إلى 5 أيام عمل في جميع ولايات الجزائر الـ58. الدفع عند الاستلام — تدفعين عندما تستلمين طلبك.",
      },
    ],

    ctaHeading: "Wear Your Wings, Own Your Story",
    ctaHeadingAr: "ارتدي أجنحتك واكتبي قصتك",
    ctaSubheading: "Crystal-bright, feather-light, and endlessly beautiful. Buy 2+ and save up to 55%.",
    ctaSubheadingAr: "بريق الكريستال، خفة الريشة، وجمال لا ينتهي. اشتري قطعتين أو أكثر ووفري حتى 55%.",
  },
};

export interface ProductVariant {
  id: string;
  name: string;
  bottles: number; // corresponds to quantity of necklaces
  pricePerUnit: number;
  compareAtPricePerUnit: number;
  savings: number;
  isBestDeal?: boolean;
}

export interface FreeGift {
  id: string;
  name: string;
  value: number;
  image: string;
  minItemsRequired: number;
}

export interface CartItem {
  productId: string;
  name: string;
  nameAr: string;
  price: number;
  image: string;
  quantity: number;
  chain: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  review: string;
  rating: number;
  date: string;
  isVerified: boolean;
  avatar?: string;
  image?: string;
  helpfulCount: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

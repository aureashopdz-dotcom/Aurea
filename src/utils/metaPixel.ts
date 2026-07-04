/**
 * Meta Pixel + CAPI browser-side utility for AUREA
 * Pixel ID: 2149341695632178
 */

export const PIXEL_ID = "2149341695632178";

/** Generate a UUID v4 for event deduplication */
export const generateEventId = (): string => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // fallback
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/** Type-safe fbq caller — only fires if pixel has loaded */
const fbq = (...args: unknown[]): void => {
  if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
    (window as any).fbq(...args);
  }
};

// ─── Standard Events ────────────────────────────────────────────────────────

/** Call on every page / route change */
export const trackPageView = (): void => {
  fbq("track", "PageView");
};

/** Call when a product detail page is loaded */
export const trackViewContent = (params: {
  productId: string;
  productName: string;
  value: number;
  currency?: string;
  eventId: string;
}): void => {
  fbq("track", "ViewContent", {
    content_ids: [params.productId],
    content_name: params.productName,
    content_type: "product",
    value: params.value,
    currency: params.currency ?? "DZD",
  }, { eventID: params.eventId });
};

/** Call when the user first interacts with the checkout form */
export const trackInitiateCheckout = (params: {
  productId: string;
  productName: string;
  value: number;
  currency?: string;
  eventId: string;
}): void => {
  fbq("track", "InitiateCheckout", {
    content_ids: [params.productId],
    content_name: params.productName,
    content_type: "product",
    value: params.value,
    currency: params.currency ?? "DZD",
    num_items: 1,
  }, { eventID: params.eventId });
};

/** Call ONLY after the order is confirmed (success screen shown) */
export const trackPurchase = (params: {
  productId: string;
  productName: string;
  value: number;
  currency?: string;
  eventId: string;
}): void => {
  fbq("track", "Purchase", {
    content_ids: [params.productId],
    content_name: params.productName,
    content_type: "product",
    value: params.value,
    currency: params.currency ?? "DZD",
    num_items: 1,
  }, { eventID: params.eventId });
};

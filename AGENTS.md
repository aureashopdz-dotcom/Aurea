# AGENTS.md — AI Agent Instructions for AUREA Fine Jewelry

> This file is the single source of truth for any AI agent working on this project.
> Read this fully before making any changes.

---

## 1. Project Overview

**AUREA Fine Jewelry** is a bilingual (Arabic / English) e-commerce landing-page web app selling acrylic pendant necklaces (Hummingbird collection, Bat Heart collection) to customers in **Algeria**.

- **Market**: Algeria (DZD currency, Algerian wilayas/communes for shipping)
- **Payment**: Cash on Delivery only — no payment gateway
- **Order flow**: Customer fills a checkout form → API sends an order email via Resend → Meta Conversion API (CAPI) fires a `Purchase` event for ad attribution
- **Deployment**: Vercel (serverless functions via `api/` directory + static frontend)

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | React 19 + Vite 6 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite` plugin — NOT PostCSS) |
| Animations | `motion` (Framer Motion v12) + custom CSS keyframes |
| Language | TypeScript 5.8 (`strict` mode) |
| Backend | Express.js (`server.ts` for local dev) |
| Serverless API | Vercel serverless functions (`api/` directory) |
| Email | Resend SDK |
| Analytics | Meta Pixel (browser) + Meta Conversions API / CAPI (server-side) |
| Icons | `lucide-react` |

---

## 3. Repository Structure

```
ladingpagehummingbird/
├── api/                    # Vercel serverless function handlers
│   ├── order.ts            # POST /api/order — sends order email + CAPI Purchase event
│   ├── contact.ts          # POST /api/contact — sends contact form email
│   └── health.ts           # GET /api/health — health check
├── Images/                 # Product & review images (raw, referenced in products.ts)
├── src/
│   ├── assets/             # Hummingbird product images imported directly
│   ├── components/         # Shared UI components (see Section 5)
│   ├── data/
│   │   ├── products.ts     # All product catalog data (bilingual), types, and reviews
│   │   ├── translations.ts # UI string translations for AR / EN
│   │   ├── wilayas.json    # List of 58 Algerian wilayas
│   │   └── communes.json   # List of all Algerian communes keyed by wilaya code
│   ├── pages/              # Route-level page components (see Section 6)
│   ├── utils/
│   │   └── metaPixel.ts    # Type-safe fbq() wrapper + event helpers
│   ├── types.ts            # Shared TypeScript interfaces
│   ├── App.tsx             # Root: routing, lang state, Meta Pixel PageView tracking
│   ├── index.css           # Global styles, Tailwind theme tokens, keyframes
│   └── main.tsx            # React entry point
├── server.ts               # Local Express server (mirrors api/ handlers) for npm run server
├── index.html              # HTML shell — Meta Pixel base code lives here
├── vite.config.ts          # Vite config: React plugin, Tailwind plugin, /api proxy
├── vercel.json             # Vercel routing config
├── tsconfig.json           # TypeScript config
├── package.json
└── .env                    # Secret keys (never commit)
```

---

## 4. Environment Variables

These must exist in `.env` (local) and in the Vercel project settings (production).

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key for sending emails |
| `ORDER_EMAIL` | Optional | Recipient email for orders (defaults to `aurea.shop.dz@gmail.com`) |
| `META_PIXEL_ID` | Optional | Meta Pixel ID (defaults to `27809311165361767`) |
| `META_ACCESS_TOKEN` | Optional | Meta CAPI access token — CAPI is silently skipped if missing |
| `META_TEST_EVENT_CODE` | Dev only | Set in dev to use the Meta Test Events tool; NEVER set in production |
| `GEMINI_API_KEY` | Optional | For any AI/Gemini features |
| `APP_URL` | Optional | Deployed URL for self-referential links |

---

## 5. Components (src/components/)

| File | Purpose |
|---|---|
| `AnnouncementBar.tsx` | Top sticky banner with scrolling promotional text |
| `Header.tsx` | Sticky nav with logo, lang switcher (AR/EN), cart icon |
| `HeroSection.tsx` | Product image gallery + chain colour picker + buy CTA (homepage only) |
| `FeatureGrid.tsx` | Icon grid listing product features/value props |
| `BrandStory.tsx` | Brand narrative section |
| `SocialProof.tsx` | Customer review carousel / testimonials |
| `ComparisonSection.tsx` | Comparison table (AUREA vs. generic) |
| `FAQSection.tsx` | Accordion FAQ |
| `StyleSpotlight.tsx` | Lifestyle imagery grid |
| `TransformSection.tsx` | Before/after or transformation messaging |
| `ValueProps.tsx` | Trust badges (free delivery, easy returns, secure order) |
| `FinalCTA.tsx` | Bottom conversion call-to-action section |
| `StickyCTA.tsx` | Mobile-only sticky buy footer bar |
| `SlideCart.tsx` | Side-drawer cart with checkout form (name, phone, wilaya, commune) |
| `ProductModal.tsx` | Quick-view product modal (used on ShopPage) |
| `Footer.tsx` | Full footer with links, newsletter signup |
| `CherryBlossomParticles.tsx` | CSS particle animation for decorative use |

---

## 6. Pages (src/pages/)

| File | Route | Description |
|---|---|---|
| `HomePage.tsx` | `/` | Full landing page: HeroSection + all sections stacked |
| `ShopPage.tsx` | `/shop` | Product grid with filtering + ProductModal quick-view |
| `ProductDetailPage.tsx` | `/shop/:productId` | Full product detail page (the most complex page) |
| `ContactPage.tsx` | `/contact` | Contact form that calls POST /api/contact |

---

## 7. Bilingual / i18n System

The entire UI supports **Arabic (AR)** and **English (EN)**. Arabic uses RTL layout.

### How it works

- `lang` state (`"ar" | "en"`) lives in `App.tsx` and is passed down as a prop to all pages and most components.
- `document.documentElement.dir` is set to `"rtl"` for Arabic and `"ltr"` for English.
- UI strings come from `src/data/translations.ts` via `TRANSLATIONS[lang].someKey`.
- Product content (names, descriptions, specs, FAQs, reviews) is bilingual directly inside `src/data/products.ts` — each field has an `...Ar` sibling (e.g., `name` / `nameAr`).

### Rules when adding new content

1. Always add BOTH `en` and `ar` versions of any UI string to `translations.ts`.
2. Always add BOTH `field` and `fieldAr` properties to any product data object.
3. Render the correct value with: `lang === "ar" ? item.fieldAr : item.field`
4. Never hardcode Arabic or English text directly in JSX — use translations or product data fields.

---

## 8. Design System & Styling

### Tailwind v4 setup
- Tailwind is loaded via `@tailwindcss/vite` plugin — do NOT add a `tailwind.config.js` file.
- Custom tokens are declared inside `@theme { }` in `src/index.css`.

### Design tokens (from src/index.css)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#FF6C84` | Brand pink — buttons, highlights, badges |
| `--color-primary-light` | `#FFD6DD` | Light pink — borders, soft backgrounds |
| `--color-peach` | `#FD8935` | Accent orange |
| `--color-off-white` | `#FFF4F3` | Warm white backgrounds |
| `--font-sans` | Open Sans | Body text |
| `--font-heading` | Playfair Display | Headings, product names |

### Animation classes (defined in index.css)

| Class | Keyframe | Use |
|---|---|---|
| `animate-fadeInUp` | `fadeInUp` | Sections fading in upward |
| `animate-fadeInRight` | `fadeInRight` | Slide-in from right |
| `animate-scale` | `scaleIn` | Modal/popup entrance |
| `animate-pageFade` | `pageFade` | Route transition (applied on main element) |
| `.pulse-circle` | `pulse-custom` | Pulsing CTA indicator |

### Design philosophy

- Use `#FF6C84` (primary pink) for all primary buttons and CTAs.
- Prefer `rounded-2xl` or `rounded-xl` for cards and buttons.
- Use soft shadows: `shadow-sm`, `shadow-lg` — avoid hard `shadow-black`.
- Gradients should use the brand palette: `from-[#FF6C84] to-[#FFB7C5]`.
- Keep the aesthetic warm, feminine, and premium — not clinical.

---

## 9. API Endpoints

All endpoints are implemented twice:
1. As Vercel serverless functions in `api/` (production)
2. As Express routes in `server.ts` (local dev)

The Vite dev server proxies `/api/*` to `http://localhost:3001`.

### POST /api/order

Submits a customer order.

**Required body fields:** `name`, `phone`, `wilaya`, `commune`, `productName`

**Full body schema:**
```json
{
  "name": "string",
  "phone": "string (Algerian number, no country code)",
  "wilaya": "string",
  "commune": "string",
  "productName": "string",
  "chain": "Gold | Silver",
  "bundle": "string (e.g. '2 Necklaces')",
  "totalPrice": "string (e.g. '2700 DZD')",
  "lang": "ar | en",
  "purchaseEventId": "string (UUID for Meta event deduplication)"
}
```

**What it does:**
1. Sends a branded HTML order email to `ORDER_EMAIL` via Resend.
2. Fires a `Purchase` event to Meta CAPI with a SHA-256 hashed phone number.

---

### POST /api/contact

Submits a contact form message.

**Required body fields:** `name`, `phone`, `message`

**Full body schema:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string (optional)",
  "message": "string",
  "lang": "ar | en"
}
```

**What it does:** Sends a branded HTML contact email to `ORDER_EMAIL` via Resend.

---

### GET /api/health

Returns `{ "status": "ok", "service": "AUREA Order API" }`. Used for uptime checks.

---

## 10. Meta Pixel & Conversions API

### Browser (Pixel)

The Meta Pixel base code is embedded in `index.html`. It fires `PageView` on initial load.

For SPA route changes, `trackPageView()` from `src/utils/metaPixel.ts` is called in `App.tsx` on `pathname` change (skipping the very first render to avoid double-firing).

**Event helpers in metaPixel.ts:**

| Function | Pixel Event | When to call |
|---|---|---|
| `trackPageView()` | `PageView` | On every client-side route change |
| `trackViewContent(params)` | `ViewContent` | When a product detail page loads |
| `trackInitiateCheckout(params)` | `InitiateCheckout` | When user first interacts with checkout form |
| `trackPurchase(params)` | `Purchase` | Only after order is confirmed (success state shown) |

### Server-side (CAPI)

Called from `api/order.ts` after a successful order email send.

- Phone numbers are normalised to E.164 format (`213XXXXXXXXX`) before SHA-256 hashing.
- Event deduplication: the `purchaseEventId` from the frontend is passed as `event_id` to both the browser Pixel and CAPI.
- `META_TEST_EVENT_CODE` env var is injected into the CAPI payload only when explicitly set — never hardcode it.

---

## 11. Product Data (src/data/products.ts)

All products are defined in a single exported array. Each `ProductData` object contains:

- Bilingual text fields: `name`/`nameAr`, `description`/`descriptionAr`, `specs`/`specsAr`, `badge`/`badgeAr`, etc.
- `id`: slug used as the URL param in `/shop/:productId`
- `price`: number in DZD
- `comparePrice`: original price before discount, in DZD
- `images`: array of imported image paths
- `backImage`: optional back-of-product image
- `chainOptions` / `chainOptionsAr`: available chain colour names
- `valueProps`: array of `{ iconName, title, titleAr, desc, descAr }` for the value prop grid
- `faqs`: array of `{ question, questionAr, answer, answerAr }`
- `reviews`: array of `{ id, name, title, titleAr, review, reviewAr, rating, date, dateAr, helpfulCount, image? }`

**Current products:**
1. `hummingbird-necklace` — Colorful Hummingbird Pendant Necklace
2. `bat-heart-necklace` — Bat Heart Pendant Necklace

---

## 12. Local Development Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts Vite frontend on http://localhost:3000 |
| `npm run server` | Starts Express API server on http://localhost:3001 |
| `npm run lint` | Type-checks with `tsc --noEmit` (no build output) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run clean` | Removes `dist/` and `server.js` |

Both `npm run dev` and `npm run server` must run simultaneously for order and contact forms to work locally.

---

## 13. Key Conventions

### Component props

All page components and most section components accept a `lang` prop:
```tsx
interface Props {
  lang: "ar" | "en";
}
```

### Translations pattern

```tsx
import { TRANSLATIONS } from "../data/translations";

// In component:
const t = TRANSLATIONS[lang];
// Then use: t.orderNow, t.freeDelivery, etc.
```

### Bilingual product data pattern

```tsx
const displayName = lang === "ar" ? product.nameAr : product.name;
```

### Image imports

Always import images at the top of the file — never use raw string paths for images inside `src/` or `Images/`.

```ts
// src/assets images:
import img1 from "../assets/hummingbird-product-1.jpg";

// Images/ folder (from src/data/products.ts):
import batImg1 from "../../Images/730620721_....jpg";
```

### API calls from frontend

Always use the relative path `/api/order` — never hardcode `localhost`:
```ts
fetch("/api/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) })
```

### Scroll anchors

Scroll-targeted sections define an `id` on their outermost element (e.g., `id="bundle-picker"`, `id="product-purchase"`). Scroll-margin-top is set globally in `index.css` to account for the sticky header.

---

## 14. What NOT to Do

- Do NOT add a `tailwind.config.js` — Tailwind v4 is configured entirely via `@theme {}` in `index.css`.
- Do NOT add a `postcss.config.js` — the Vite Tailwind plugin handles everything.
- Do NOT commit `.env` — it contains live API keys.
- Do NOT hardcode `META_TEST_EVENT_CODE` anywhere in source — environment variable only, dev only.
- Do NOT fire `trackPurchase()` before the order API call succeeds — this inflates Meta conversion data.
- Do NOT use `react-scripts` or Create React App — this is a Vite project.
- Do NOT hardcode Arabic or English strings directly in JSX — always use the translations system.
- Do NOT use `window.location.href` for in-app navigation — use React Router `useNavigate` or `<Link>`.
- Do NOT use string paths for images — always import them as modules.
- Do NOT modify `vite.config.ts` HMR settings — they are intentionally managed by the environment.

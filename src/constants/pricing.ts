/**
 * AMANAH ISLAMIC STORE — Bundle Pricing & Configuration
 * v0.1 | SINGLE SOURCE OF TRUTH
 *
 * RULES:
 * 1. All pricing, weights, and bundle configs defined here only.
 * 2. No price numbers hardcoded in any component.
 * 3. All bundles MUST stay under 500g — Steadfast lowest delivery cost tier.
 * 4. Import: import { BUNDLES, PRICING } from "@/constants/pricing"
 */

export type BundleOption = {
  id: 1 | 2 | 3; // Radio group value
  qty: number; // Number of packs
  stickers: number; // Total sticker count
  price: number; // Price in BDT (integer, no decimals)
  originalPrice: number; // Price without discount (used to show savings)
  savings: number; // Amount saved in BDT (0 if no savings)
  weightGrams: number; // MUST remain under 500g per Steadfast tier rules
  labelBengali: string; // e.g. "১ প্যাক"
  unitBengali: string; // e.g. "৩০ স্টিকার" or "হোম বান্ডেল"
  descBengali: string; // Spiritual/emotional framing — from copy.ts keys
  isPopular: boolean; // Highlights recommended bundle in UI
};

export const BUNDLES: BundleOption[] = [
  {
    id: 1,
    qty: 1,
    stickers: 30,
    price: 320,
    originalPrice: 320,
    savings: 0,
    weightGrams: 150, // Single pack — well under 500g limit
    labelBengali: "১ প্যাক",
    unitBengali: "৩০ স্টিকার",
    descBengali: "নিজের ঘরের জন্য",
    isPopular: false,
  },
  {
    id: 2,
    qty: 2,
    stickers: 60,
    price: 580,
    originalPrice: 640, // 2 × ৳320
    savings: 60,
    weightGrams: 290, // 2 packs — under 500g limit
    labelBengali: "২ প্যাক",
    unitBengali: "৬০ স্টিকার",
    descBengali: "নিজের ঘর + পরিবারের জন্য উপহার",
    isPopular: true, // Recommended — highest AOV driver
  },
  {
    id: 3,
    qty: 3,
    stickers: 90,
    price: 799,
    originalPrice: 960, // 3 × ৳320
    savings: 161,
    weightGrams: 430, // 3 packs — under 500g limit (CRITICAL — do not increase)
    labelBengali: "৩ প্যাক",
    unitBengali: "হোম বান্ডেল",
    descBengali: "সদকায়ে জারিয়া — মসজিদ/এতিমখানায় দান করুন",
    isPopular: false,
  },
];

// Derived lookup map — use when you have a bundle ID and need its config
export const BUNDLE_BY_ID: Record<number, BundleOption> = Object.fromEntries(
  BUNDLES.map((b) => [b.id, b]),
);

// Default bundle selected on page load
export const DEFAULT_BUNDLE_ID: 1 | 2 | 3 = 2; // 2-pack selected by default (AOV optimization)

// Pricing constants
export const PRICING = {
  CURRENCY_SYMBOL: "৳",
  CURRENCY_CODE: "BDT",
  DELIVERY_CHARGE: 0, // Free delivery — never show a delivery fee
  MAX_WEIGHT_GRAMS: 500, // Steadfast lowest tier hard limit — never exceed

  // Helpers — use these to build dynamic button labels
  formatPrice: (amount: number): string => `৳${amount}`,
  formatSavings: (amount: number): string => `৳${amount} বাঁচবে`,
  formatSubmitLabel: (price: number): string => `অর্ডার করুন — ৳${price}`,
} as const;

// Verify at module load that no bundle exceeds the 500g Steadfast limit.
// This will throw a build-time error if someone accidentally increases a weight.
BUNDLES.forEach((bundle) => {
  if (bundle.weightGrams >= PRICING.MAX_WEIGHT_GRAMS) {
    throw new Error(
      `Bundle ${bundle.id} (${bundle.labelBengali}) weighs ${bundle.weightGrams}g — ` +
        `exceeds or meets Steadfast 500g limit. Adjust weight or price tier.`,
    );
  }
});

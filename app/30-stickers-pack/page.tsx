import type { Metadata } from "next";
import Hero from "@/src/components/landing/Hero";
import TrustBadges from "@/src/components/landing/TrustBadges";
import ProductFeatures from "@/src/components/landing/ProductFeatures";
import DuaListPreview from "@/src/components/landing/DuaListPreview";
import BundlePricing from "@/src/components/landing/BundlePricing";
import OrderForm from "@/src/components/landing/OrderForm";
import ViewContentTracker from "@/src/components/landing/ViewContentTracker";

export const metadata: Metadata = {
  title: "৩০টি ইসলামিক দোয়া স্টিকার | Amanah Islamic Store",
  description:
    "কুরআন ও সহীহ হাদিস যাচাইকৃত ৩০টি দোয়া স্টিকার। ১২০ GSM ওয়াটারপ্রুফ। সারা বাংলাদেশে ফ্রি ডেলিভারি। ক্যাশ অন ডেলিভারি।",
  openGraph: {
    title: "৩০টি ইসলামিক দোয়া স্টিকার | Amanah Islamic Store",
    description:
      "কুরআন ও সহীহ হাদিস যাচাইকৃত। ফ্রি ডেলিভারি। ক্যাশ অন ডেলিভারি।",
    images: ["/og-image.jpg"],
    locale: "bn_BD",
    type: "website",
  },
};

export default function StickersPackPage() {
  return (
    <>
      {/* Client component — fires ViewContent Meta Pixel on mount */}
      <ViewContentTracker />

      {/* STRICT SECTION ORDER — do not reorder */}
      <main className="min-h-screen bg-white max-w-lg mx-auto">
        <Hero />
        <TrustBadges />
        <ProductFeatures />
        <DuaListPreview />
        <BundlePricing />
        <OrderForm />
      </main>
    </>
  );
}

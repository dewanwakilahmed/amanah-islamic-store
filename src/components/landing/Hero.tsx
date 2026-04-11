import { COPY } from "@/src/constants/copy";

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 pt-6 pb-8 flex flex-col items-center text-center">
      {/* Green pill badge — authenticity signal above fold */}
      <span className="inline-block bg-[#1B5E20] text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
        {COPY.HERO_BADGE}
      </span>

      {/* H1 — primary headline */}
      <h1 className="text-2xl sm:text-3xl font-bold text-[#1B5E20] leading-snug mb-3 max-w-sm">
        {COPY.HERO_HEADLINE}
      </h1>

      {/* Sub-headline — emotional/spiritual hook */}
      <p className="text-[18px] text-[#333333] leading-relaxed mb-4 max-w-sm">
        {COPY.HERO_SUBTITLE}
      </p>

      {/* Red promo strip — urgency banner */}
      <div className="w-full max-w-sm bg-[#E31E24] text-white font-bold text-[15px] text-center px-3 py-2 rounded mb-5">
        {COPY.PROMO_STRIP}
      </div>

      {/* Product image placeholder — replace with real Cloudinary WebP when available */}
      <div
        className="w-full max-w-sm rounded-xl bg-gray-100 flex items-center justify-center mb-3"
        style={{ aspectRatio: "4/3", minHeight: "240px" }}
        aria-label="Product image placeholder"
      >
        <span className="text-gray-400 text-sm">
          {/* TODO: Replace with Cloudinary WebP image via next/image */}
          {/* <Image src={getOptimizedUrl('product-30-stickers')} alt="৩০টি দোয়া স্টিকার" fill /> */}
          Product image coming soon
        </span>
      </div>

      {/* Social proof micro-line — below image */}
      <p className="text-[#1B5E20] font-semibold text-[15px] mb-5">
        {COPY.TRUST_CUSTOMERS}
      </p>

      {/* Primary CTA button → anchors to order form */}
      <a
        href="#order-form"
        className="w-full max-w-sm block bg-[#1B5E20] text-white text-[18px] font-bold text-center py-4 rounded-xl shadow-md active:scale-95 transition-transform"
      >
        {COPY.HERO_CTA}
      </a>
    </section>
  );
}

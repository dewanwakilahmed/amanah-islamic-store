import { COPY } from "@/src/constants/copy";

// Badge data — exact order from spec. Do not reorder.
const badges = [
  {
    id: "social-proof",
    icon: "✅",
    text: COPY.TRUST_CUSTOMERS,
    sub: "বাস্তব ডেলিভারি ফটো সহ", // "with real delivery photo"
  },
  {
    id: "cod",
    icon: "💵",
    text: COPY.TRUST_COD,
    sub: null,
  },
  {
    id: "delivery",
    icon: "🚚",
    text: COPY.TRUST_DELIVERY,
    sub: "Steadfast Courier",
  },
  {
    id: "verified",
    icon: "📖",
    text: COPY.TRUST_VERIFIED,
    sub: null,
  },
  {
    id: "founder",
    icon: "👤",
    text: COPY.FOUNDER_STORY,
    sub: null, // TODO: Replace icon with real founder photo via Cloudinary
  },
];

export default function TrustBadges() {
  return (
    <section
      aria-label="Trust signals"
      className="w-full bg-[#f9f9f6] px-4 py-7 flex flex-col gap-3"
    >
      <h2 className="sr-only">আমরা কেন বিশ্বস্ত</h2>

      {badges.map((badge) => (
        <div
          key={badge.id}
          className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
        >
          {/* Icon / founder photo placeholder */}
          <div className="text-2xl flex-shrink-0 mt-0.5">
            {badge.id === "founder" ? (
              // TODO: Replace with real founder photo
              // <Image src={founderPhotoUrl} alt="Founder" width={40} height={40} className="rounded-full" />
              <span aria-hidden="true">👤</span>
            ) : (
              <span aria-hidden="true">{badge.icon}</span>
            )}
          </div>

          {/* Badge text */}
          <div className="flex flex-col">
            <p className="text-[#1B5E20] font-bold text-[16px] leading-snug">
              {badge.text}
            </p>
            {badge.sub && (
              <p className="text-gray-500 text-[14px] mt-0.5">{badge.sub}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}

import { COPY } from "@/src/constants/copy";
import "@/styles/landing/hero.css";

// ── Cloudinary config ─────────────────────────────────────────────────────────
// Replace CLOUD_NAME and FILE_NAME with your actual Cloudinary values.
// Example video URL: https://res.cloudinary.com/amanah/video/upload/q_auto/stickers-pack.mp4
// Example poster URL: https://res.cloudinary.com/amanah/video/upload/so_0/stickers-pack.jpg
//   (so_0 = grab first frame as poster image, no extra upload needed)

const CLOUD_NAME = "YOUR_CLOUD_NAME";
const VIDEO_FILE = "YOUR_VIDEO_FILE_NAME"; // without extension

const VIDEO_SRC = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${VIDEO_FILE}.mp4`;
const VIDEO_POSTER = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0/${VIDEO_FILE}.jpg`;

export default function Hero() {
  return (
    <section className="hero">
      {/* ── PROMO STRIP — full-width urgency bar, sits at very top of section ── */}
      <div className="hero__promo-strip">{COPY.PROMO_STRIP}</div>

      {/* ── MAIN BODY — centered column, all core content stacked vertically ── */}
      <div className="hero__body">
        {/* Authenticity badge — first thing eyes land on, above headline */}
        <span className="hero__badge">{COPY.HERO_BADGE}</span>

        {/* Primary headline */}
        <h1 className="hero__headline">{COPY.HERO_HEADLINE}</h1>

        {/* Emotional subtitle */}
        <p className="hero__subtitle">{COPY.HERO_SUBTITLE}</p>

        {/* ── Product video ────────────────────────────────────────────────────
            - poster        : first frame from Cloudinary (so_0), shown instantly
            - preload="none": browser downloads zero video bytes until user taps play
            - playsInline   : prevents iOS from hijacking to fullscreen on tap
            - controls      : native controls, no JS required
            ─────────────────────────────────────────────────────────────────── */}
        <div className="hero__video-wrapper">
          <video
            className="hero__video"
            poster={VIDEO_POSTER}
            controls
            playsInline
            preload="none"
            aria-label="৩০টি দোয়া স্টিকার প্যাক — পণ্য ভিডিও"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            {/* Fallback text for very old browsers */}
            আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
          </video>
        </div>

        {/* Social proof — sits between video and CTA */}
        <p className="hero__social-proof">{COPY.SOCIAL_PROOF}</p>

        {/* Primary CTA — anchors down to order form */}
        <a href="#order-form" className="hero__cta">
          {COPY.HERO_CTA}
        </a>
      </div>
      {/* END hero__body */}
    </section>
  );
}

import { COPY } from "@/src/constants/copy";
import "@/styles/landing/hero.css";

const CLOUD_NAME = "YOUR_CLOUD_NAME";
const VIDEO_FILE = "YOUR_VIDEO_FILE_NAME";

const VIDEO_SRC = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_auto,f_auto/${VIDEO_FILE}.mp4`;
const VIDEO_POSTER = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0/${VIDEO_FILE}.jpg`;

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__promo-strip">{COPY.PROMO_STRIP}</div>

      <div className="hero__body">
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
            আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
          </video>
        </div>

        <div className="hero__text-col">
          <span className="hero__badge">{COPY.HERO_BADGE}</span>
          <h1 className="hero__headline">{COPY.HERO_HEADLINE}</h1>
          <p className="hero__subtitle">{COPY.HERO_SUBTITLE}</p>
          <p className="hero__social-proof">{COPY.SOCIAL_PROOF}</p>
          <a href="#order-form" className="hero__cta">
            {COPY.HERO_CTA}
          </a>
        </div>
      </div>
    </section>
  );
}

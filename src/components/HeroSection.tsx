"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

const gridPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(statusRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(0,0,0,0.98)), url('/xauusd-chart-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ backgroundImage: gridPattern }}
      />

      <div className="relative max-w-6xl mx-auto w-full section-glow">
        <div
          ref={contentRef}
          className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-center"
        >
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/60 px-4 py-1.5 text-xs sm:text-sm text-yellow-200 shadow-[0_0_30px_rgba(250,204,21,0.35)]">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Live XAUUSD &amp; BTC signals</span>
              <span className="hidden sm:inline text-[var(--text-muted)]">
                Focused on GOLD first
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4 leading-tight text-glow">
                Making{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
                  Gold
                </span>{" "}
                Trading Simple.
              </h1>
              <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-xl">
                Forex Rocket is a data-driven signal channel focused on{" "}
                <span className="font-semibold text-yellow-300">XAUUSD</span> and{" "}
                <span className="font-semibold text-red-300">BTC</span>. Clear levels,
                strict risk, and market breakdowns you can actually follow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/your-telegram-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 text-black font-semibold shadow-xl shadow-yellow-500/30 hover:shadow-yellow-400/40 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.99991 15.1701L9.83391 19.1681C10.1679 19.1681 10.3129 19.0241 10.4879 18.8501L12.1679 17.2441L16.1239 20.1481C16.8479 20.5501 17.3599 20.3441 17.5559 19.4461L19.9479 8.18212L19.9489 8.18112C20.1799 7.10812 19.5559 6.69012 18.8479 6.95612L4.22691 12.5461C3.18091 12.9541 3.19691 13.5541 4.04991 13.8201L7.79691 14.9931L16.3839 9.59512C16.7879 9.32812 17.1559 9.47612 16.8529 9.74312L9.99991 15.1701Z" />
                </svg>
                Join Free Telegram
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-black/30 text-sm sm:text-base text-white hover:bg-white/5 transition-colors"
              >
                How VIP works
              </a>
            </div>

            <div
              ref={statusRef}
              className="flex flex-wrap items-center gap-4 text-[var(--text-muted)] text-xs sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                500+ members following GOLD
              </span>
              <span className="hidden sm:inline">•</span>
              <span>Weekly Sunday webinar &amp; outlook</span>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex justify-end relative z-10">
            <Image
              src="/hero-image.png"
              alt="Forex Rocket hero"
              width={460}
              height={480}
              className="object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

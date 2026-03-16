 "use client";

import { useRef, useEffect } from "react";
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
            "linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('/xauusd-chart-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ backgroundImage: gridPattern }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div
          ref={contentRef}
          className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-black/40 px-4 py-1 text-xs sm:text-sm text-yellow-200">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Live XAUUSD &amp; BTC signals</span>
              <span className="hidden sm:inline text-[var(--text-muted)]">
                Focused on GOLD first
              </span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
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

          <div className="hidden lg:flex justify-end">
            <div className="relative w-80 h-[430px] rounded-[2.5rem] border border-yellow-400/60 bg-black/60 shadow-[0_0_60px_rgba(250,204,21,0.45)] overflow-hidden">
              {/* subtle inner glow frame */}
              <div className="pointer-events-none absolute inset-[1px] rounded-[2.4rem] bg-gradient-to-b from-yellow-500/20 via-black/80 to-black/95" />

              {/* pill header */}
              <div className="relative z-10 flex items-center justify-center mx-8 mt-6 h-7 rounded-full bg-black/70 border border-yellow-400/40 text-[10px] tracking-[0.28em] uppercase text-[var(--text-muted)]">
                XAUUSD Focus
              </div>

              {/* bottom stats block */}
              <div className="relative z-10 absolute inset-x-4 bottom-4 h-44 rounded-3xl bg-black/80 border border-yellow-400/40 px-4 py-4 flex flex-col justify-between">
                <div className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-300 font-semibold">XAUUSD</span>
                    <span className="text-green-400 font-medium">+2.1% week</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-red-300 font-semibold">BTCUSD</span>
                    <span className="text-green-400 font-medium">+4.5% week</span>
                  </div>
                </div>

                <div className="relative h-16 rounded-2xl bg-gradient-to-tr from-yellow-400/35 via-amber-400/18 to-red-500/35 overflow-hidden">
                  <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_0_100%,rgba(250,204,21,0.45),transparent_55%),radial-gradient(circle_at_100%_0,rgba(248,113,113,0.5),transparent_55%)]" />
                  <div className="absolute inset-[6px] rounded-2xl border border-yellow-200/50" />
                </div>

                <div className="flex justify-between items-center text-[10px] text-[var(--text-muted)]">
                  <span>Member results</span>
                  <span>For illustration only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

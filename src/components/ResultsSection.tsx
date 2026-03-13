"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const TELEGRAM_URL = "https://t.me/your-telegram-channel";

const sampleResults = [
  { pair: "XAUUSD", result: "+2.1%", period: "this week", type: "Gold" },
  { pair: "XAUUSD", result: "+1.8%", period: "last week", type: "Gold" },
  { pair: "BTCUSD", result: "+4.5%", period: "this week", type: "BTC" },
  { pair: "XAUUSD", result: "+3.2%", period: "month", type: "Gold" },
];

export default function ResultsSection() {
  const [rocketImgError, setRocketImgError] = useState(false);

  return (
    <section id="results" className="relative w-full py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedSection
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
          staggerChildren=".result-el"
          stagger={0.1}
          animation="fadeUp"
        >
          <div className="result-el flex-1 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Member Results
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg mb-8">
              Our community trades <span className="text-yellow-300 font-semibold">XAUUSD</span> and{" "}
              <span className="text-red-300 font-semibold">BTC</span> with clear risk. Results vary—past performance does not guarantee future results.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold hover:opacity-90 transition-opacity"
            >
              See live on Telegram
            </a>
          </div>

          <div className="result-el relative flex-shrink-0">
            <div className="relative w-[280px] sm:w-[320px]">
              <div className="absolute -left-8 -top-8 sm:-left-12 sm:-top-12 w-24 h-24 sm:w-32 sm:h-32 z-10 flex items-center justify-center">
                {!rocketImgError ? (
                  <Image
                    src="/rocket.png"
                    alt="Forex Rocket"
                    width={128}
                    height={128}
                    className="object-contain drop-shadow-2xl"
                    unoptimized
                    onError={() => setRocketImgError(true)}
                  />
                ) : (
                  <span className="text-6xl sm:text-7xl drop-shadow-2xl">🚀</span>
                )}
              </div>
              <div className="rounded-[2.5rem] border-2 border-yellow-400/40 bg-gradient-to-b from-black/90 to-black/70 p-4 shadow-[0_0_60px_rgba(250,204,21,0.2)]">
                <div className="rounded-t-2xl bg-black/60 h-8 flex items-center justify-center border-b border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-yellow-200/80">
                    Results
                  </span>
                </div>
                <div className="rounded-b-2xl bg-black/40 p-4 space-y-3 mt-2">
                  {sampleResults.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0"
                    >
                      <span className={r.type === "Gold" ? "text-yellow-300 font-medium" : "text-red-300 font-medium"}>
                        {r.pair}
                      </span>
                      <span className="text-green-400 font-semibold">{r.result}</span>
                      <span className="text-[var(--text-muted)] text-xs">{r.period}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-[var(--text-muted)] text-center mt-3">
                  Illustrative. Join Telegram for live updates.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

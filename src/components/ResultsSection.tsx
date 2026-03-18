"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const TELEGRAM_URL = "https://t.me/+sH66bNiMugEwZTE8";

const resultImages = Array.from({ length: 10 }, (_, i) => ({
  src: `/${i + 1}.png`,
  label: `Result ${i + 1}`,
}));

export default function ResultsSection() {
  const VISIBLE_COUNT = 3;
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(resultImages.length - VISIBLE_COUNT, 0);

  const goTo = (index: number) => {
    if (index < 0) index = maxIndex;
    if (index > maxIndex) index = 0;
    setActiveIndex(index);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => {
        const next = current + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(id);
  }, [maxIndex]);

  return (
    <section id="results" className="relative w-full py-20 px-6 overflow-hidden">
      <AnimatedSection
        className="max-w-6xl mx-auto w-full"
        staggerChildren=".result-card"
        stagger={0.06}
        animation="fadeUp"
      >
        <div className="text-center mb-12 flex flex-col items-center gap-6">
          <div className="w-full max-w-4xl overflow-hidden">
            <div className="relative w-full aspect-[16/9] rounded-3xl">
              <Image
                src="/rocket-club.png"
                alt="Forex Rocket Club"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 768px, 100vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Member Results</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              These screenshots are examples of recent results shared in our Telegram channel. Past performance does not
              guarantee future results.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto w-full mt-2">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${(activeIndex * 100) / VISIBLE_COUNT}%)` }}
            >
              {resultImages.map((img) => (
                <div
                  key={img.src}
                  className="result-card flex-shrink-0 flex flex-col items-center text-center px-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{ width: `${100 / VISIBLE_COUNT}%` }}
                >
                  <div className="w-full max-w-[260px] sm:max-w-[320px] rounded-2xl bg-black/70 overflow-hidden">
                    <div className="relative w-full aspect-[9/16]">
                      <Image
                        src={img.src}
                        alt={img.label}
                        fill
                        className="object-contain"
                        sizes="(min-width: 1024px) 320px, 80vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              className="rounded-full border border-white/15 bg-black/40 w-9 h-9 flex items-center justify-center text-sm hover:bg-white/10 transition-colors"
            >
              ‹
            </button>
            <div className="flex items-center gap-2 flex-1 justify-center">
              {resultImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goTo(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === activeIndex
                      ? "w-6 bg-yellow-400"
                      : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`Go to result ${idx + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              className="rounded-full border border-white/15 bg-black/40 w-9 h-9 flex items-center justify-center text-sm hover:bg-white/10 transition-colors"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold hover:opacity-90 transition-opacity"
          >
            See more results on Telegram
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

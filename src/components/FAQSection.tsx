"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    question: "How do I join Forex Rocket?",
    answer:
      "Click the 'Join Discord' button anywhere on this page. You'll get an invite link to our Discord server. You need a Discord account to join.",
  },
  {
    question: "Are the signals free?",
    answer:
      "We offer both free and premium tiers. Free members get limited daily signals. Premium ($29/mo) includes unlimited signals, priority analysis, voice sessions, and 1-on-1 support.",
  },
  {
    question: "What pairs do you cover?",
    answer:
      "We focus on major Forex pairs (EUR/USD, GBP/USD, USD/JPY, AUD/USD, etc.), plus XAU/USD (gold) and BTC/USD. Check the Pairs section for the full list.",
  },
  {
    question: "What does each signal include?",
    answer:
      "Every signal has: pair, direction (BUY/SELL), entry price, stop-loss, take-profit, and risk-reward ratio. Lot size is based on your account and risk tolerance.",
  },
  {
    question: "Do you offer copy trading?",
    answer:
      "We post signals for you to copy manually or via your broker's copy service. We don't run a proprietary copy-trading platform.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. All signals and analysis are for educational purposes only. Always do your own research and never risk more than you can afford to lose.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 px-6 section-glow overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18,18,26,0.7), rgba(18,18,26,0.9)), url('/bg-image2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <AnimatedSection className="max-w-2xl mx-auto" staggerChildren=".faq-item" stagger={0.06}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item glass rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg glass-subtle flex items-center justify-center transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-[var(--accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

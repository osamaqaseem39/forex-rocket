"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
const faqs = [
  {
    question: "How do I join Forex Rocket?",
    answer:
      "Click 'Join Telegram' anywhere on this page to open our free Telegram channel. No payment required. For VIP access, open a Vantage trading account and/or move your IB—see How to Join.",
  },
  {
    question: "Are the signals free?",
    answer:
      "Yes. The free Telegram channel gives you limited signals and basic info. VIP access (unlimited signals, priority analysis, webinars) is free of charge—you get it by opening a Vantage account or moving your Introducing Broker (IB) to us. There is no paid plan or monthly fee.",
  },
  {
    question: "What pairs do you cover?",
    answer:
      "We only trade XAUUSD (Gold) and BTC (Bitcoin). Our main focus is Gold (XAUUSD). We don't cover other Forex pairs.",
  },
  {
    question: "What does each signal include?",
    answer:
      "Every signal has: pair (XAUUSD or BTC), direction (BUY/SELL), entry, stop-loss, take-profit, and risk-reward. Lot size is based on your account and risk tolerance.",
  },
  {
    question: "When are the webinars?",
    answer:
      "We run weekly webinars on Sunday. Join the Telegram channel and check the Schedule section for the exact time and link.",
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
    <section id="faq" className="relative w-full py-24 px-6 section-glow section-divider section-alt overflow-hidden">
      <AnimatedSection className="max-w-2xl mx-auto w-full" staggerChildren=".faq-item" stagger={0.06}>
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

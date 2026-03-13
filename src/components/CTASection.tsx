import AnimatedSection from "@/components/AnimatedSection";
export default function CTASection() {
  return (
    <section className="relative w-full py-24 px-6 section-glow section-divider overflow-hidden">
      <AnimatedSection className="max-w-3xl mx-auto w-full text-center" animation="scale" duration={1}>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-12 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Trade Gold &amp; BTC?
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-xl mx-auto">
            Join our free Telegram channel for XAUUSD &amp; BTC signals. Get VIP access by opening a Vantage account or moving your IB—no monthly fee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/your-telegram-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 text-black font-semibold shadow-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.99991 15.1701L9.83391 19.1681C10.1679 19.1681 10.3129 19.0241 10.4879 18.8501L12.1679 17.2441L16.1239 20.1481C16.8479 20.5501 17.3599 20.3441 17.5559 19.4461L19.9479 8.18212L19.9489 8.18112C20.1799 7.10812 19.5559 6.69012 18.8479 6.95612L4.22691 12.5461C3.18091 12.9541 3.19691 13.5541 4.04991 13.8201L7.79691 14.9931L16.3839 9.59512C16.7879 9.32812 17.1559 9.47612 16.8529 9.74312L9.99991 15.1701Z" />
              </svg>
              Join Telegram Now
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold transition-colors"
            >
              How to Get VIP
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

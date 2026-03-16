import AnimatedSection from "@/components/AnimatedSection";

export default function AboutSection() {
  const topRow = [
    {
      title: "Live Signals",
      subtitle: "Forex & Crypto",
      description: "Real-time signals with entry, stop-loss, and take-profit levels.",
    },
    {
      title: "Market Analysis",
      subtitle: "Daily Breakdown",
      description: "Technical and fundamental outlooks from experienced traders.",
    },
    {
      title: "Trade Ideas",
      subtitle: "High-Conviction",
      description: "Curated setups across XAUUSD, BTC and majors with clear R:R.",
    },
    {
      title: "Trader Community",
      subtitle: "Learn Together",
      description: "Private Telegram chat to share charts, ideas, and progress.",
    },
  ];

  const bottomRow = [
    {
      title: "Daily",
      subtitle: "Signals",
    },
    {
      title: "XAUUSD & BTC",
      subtitle: "Pairs",
    },
    {
      title: "Sunday",
      subtitle: "Webinars",
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url('/bg-image2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <AnimatedSection
        className="max-w-6xl mx-auto w-full section-glow"
        staggerChildren=".value-card"
        stagger={0.12}
      >
        <div className="mb-14 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--text-muted)] mb-3">
            How Forex Rocket Helps
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-glow">
            Everything You Need To Trade With Clarity
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
            From live XAUUSD &amp; BTC signals to weekly education, Forex Rocket gives you structure,
            risk management, and a community around every trade.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {/* Top row – four feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {topRow.map((item) => (
              <div
                key={item.title}
                className="value-card glass-subtle rounded-3xl px-6 py-7 flex flex-col justify-between bg-black/40"
              >
                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)] mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                </div>
                <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row – three highlight tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {bottomRow.map((item) => (
              <div
                key={item.title}
                className="value-card rounded-3xl px-6 py-8 bg-black/60 border border-white/8 flex flex-col items-start justify-between"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)] mb-2">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-yellow-300">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

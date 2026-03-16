import AnimatedSection from "@/components/AnimatedSection";
export default function Features() {
  const features = [
    {
      icon: "📊",
      title: "Live Signals",
      description: "Real-time Forex signals with entry, stop-loss, and take-profit levels.",
    },
    {
      icon: "📈",
      title: "Market Analysis",
      description: "Daily technical and fundamental analysis from experienced traders.",
    },
    {
      icon: "🎯",
      title: "Trade Ideas",
      description: "Curated setups across major pairs with clear risk-reward ratios.",
    },
    {
      icon: "💬",
      title: "Trader Community",
      description: "Connect with fellow traders, share strategies, and grow together.",
    },
  ];

  return (
    <section id="features" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection className="max-w-6xl mx-auto w-full" staggerChildren=".feature-card" stagger={0.1} animation="fadeUp">
        <div className="feature-card text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Join Forex Rocket?
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Gold (XAUUSD) &amp; BTC signals on Telegram. Free channel + VIP via Vantage or IB—no monthly fee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="px-6 py-8 flex flex-col text-left group rounded-2xl bg-transparent hover:bg-white/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-100">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

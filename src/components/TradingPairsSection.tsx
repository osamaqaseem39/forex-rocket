import AnimatedSection from "@/components/AnimatedSection";

export default function TradingPairsSection() {
  const pairs = [
    { symbol: "EUR/USD", name: "Euro / US Dollar", volatility: "Medium" },
    { symbol: "GBP/USD", name: "British Pound / US Dollar", volatility: "High" },
    { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", volatility: "Medium" },
    { symbol: "AUD/USD", name: "Australian Dollar / US Dollar", volatility: "Medium" },
    { symbol: "USD/CHF", name: "US Dollar / Swiss Franc", volatility: "Low" },
    { symbol: "EUR/GBP", name: "Euro / British Pound", volatility: "Medium" },
    { symbol: "XAU/USD", name: "Gold / US Dollar", volatility: "High" },
    { symbol: "BTC/USD", name: "Bitcoin / US Dollar", volatility: "High" },
  ];

  return (
    <section id="pairs" className="relative py-24 px-6 section-glow overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18,18,26,0.7), rgba(18,18,26,0.9)), url('/bg-bear.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <AnimatedSection className="max-w-6xl mx-auto" staggerChildren=".pair-card" stagger={0.05} animation="scale">
        <div className="pair-card text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Trading Pairs We Cover
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            We focus on the most liquid and tradeable Forex pairs, plus gold and crypto.
            Clear setups with defined risk on every signal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {pairs.map((pair) => (
            <div
              key={pair.symbol}
              className="pair-card glass rounded-2xl p-5 hover:border-white/15 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-[var(--accent)] mb-1">
                {pair.symbol}
              </div>
              <div className="text-[var(--text-secondary)] text-sm mb-2">
                {pair.name}
              </div>
              <span className="inline-block px-2 py-0.5 rounded-lg glass-subtle text-xs text-[var(--text-muted)]">
                {pair.volatility} volatility
              </span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

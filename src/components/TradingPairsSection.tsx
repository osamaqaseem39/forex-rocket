import AnimatedSection from "@/components/AnimatedSection";
export default function TradingPairsSection() {
  const pairs = [
    { symbol: "XAUUSD", name: "Gold / US Dollar", volatility: "High", focus: "Primary focus" },
    { symbol: "BTCUSD", name: "Bitcoin / US Dollar", volatility: "High", focus: "Also traded" },
  ];

  return (
    <section id="pairs" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto w-full" staggerChildren=".pair-card" stagger={0.08} animation="fadeUp">
        <div className="pair-card text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What We Trade
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Forex Rocket is laser-focused on{" "}
            <span className="font-semibold text-yellow-300">Gold (XAUUSD)</span> and{" "}
            <span className="font-semibold text-red-300">Bitcoin (BTCUSD)</span>.
            No random pairs – just the markets we know best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pairs.map((pair) => (
            <div
              key={pair.symbol}
              className="pair-card flex flex-col gap-3 rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/10 via-black/60 to-red-500/10 p-6 hover:border-yellow-400/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-yellow-300">{pair.symbol}</div>
                  <div className="text-[var(--text-secondary)] text-sm">{pair.name}</div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-wide bg-black/60 border border-yellow-400/40 text-yellow-200">
                  {pair.focus}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mt-1">
                <span>{pair.volatility} volatility</span>
                <span>Clear SL / TP on every setup</span>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

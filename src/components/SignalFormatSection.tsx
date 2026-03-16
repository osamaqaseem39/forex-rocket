import AnimatedSection from "@/components/AnimatedSection";
export default function SignalFormatSection() {
  const formatItems = [
    { label: "Pair", value: "XAUUSD / BTCUSD", example: "We only signal Gold & Bitcoin" },
    { label: "Direction", value: "BUY / SELL", example: "Long or short position" },
    { label: "Entry", value: "e.g. 2650.00", example: "Recommended entry price" },
    { label: "Stop Loss", value: "SL level", example: "Where to cut losses" },
    { label: "Take Profit", value: "TP level(s)", example: "Target profit level(s)" },
    { label: "Risk:Reward", value: "1:2", example: "Risk-reward ratio" },
  ];

  return (
    <section id="signal-format" className="relative w-full py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url('/bg-bull.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <AnimatedSection className="max-w-4xl mx-auto w-full" staggerChildren=".format-item" stagger={0.08}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Each Signal Includes
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            XAUUSD &amp; BTC signals follow a clear format so you know exactly what to trade and where.
          </p>
        </div>

        <div className="rounded-3xl bg-black/30 p-8 sm:p-10 overflow-hidden">
          <div className="grid gap-4 sm:grid-cols-2 justify-items-center">
            {formatItems.map((item) => (
              <div
                key={item.label}
                className="format-item flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-xl w-full sm:max-w-sm text-center sm:text-left transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-24">
                  <span className="text-[var(--text-muted)] text-sm">{item.label}</span>
                </div>
                <div className="flex-1">
                  <span className="font-mono font-semibold text-yellow-300">
                    {item.value}
                  </span>
                  <p className="text-[var(--text-secondary)] text-sm mt-1">
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[var(--text-muted)] text-sm">
            Lot size and position sizing are based on your account balance and risk tolerance.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}

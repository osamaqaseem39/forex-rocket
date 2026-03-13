import AnimatedSection from "@/components/AnimatedSection";
export default function AboutSection() {
  const values = [
    {
      icon: "📊",
      title: "Quality Signals",
      description: "Curated setups with clear entry and exit levels.",
    },
    {
      icon: "🛡️",
      title: "Risk Management",
      description: "Every signal includes stop-loss and take-profit.",
    },
    {
      icon: "📈",
      title: "Transparency",
      description: "Track performance and learn from every trade.",
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `url('/bg-image2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <AnimatedSection className="max-w-6xl mx-auto w-full" staggerChildren=".value-card" stagger={0.15}>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8 sm:p-12 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Forex Rocket</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-2xl mx-auto">
            Forex Rocket is a Telegram-based signal channel focused on{" "}
            <span className="font-semibold text-yellow-300">Gold (XAUUSD)</span> and{" "}
            <span className="font-semibold text-red-300">Bitcoin (BTC)</span>. We deliver
            clear levels, strict risk, and a community for serious traders—all on Telegram.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-2xl mx-auto">
            Our main focus is <strong className="text-yellow-200">XAUUSD</strong>. Signals are based on
            technical analysis and price action. We focus on quality over quantity—fewer setups with
            defined risk-reward. No monthly fee; VIP access via Vantage account or IB move.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Join the free channel for limited signals, or get VIP for full access. We run weekly
            webinars every Sunday. Whether you&apos;re new or experienced, our structure and support
            help you trade with clarity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
            {values.map((value) => (
              <div
                key={value.title}
                className="value-card rounded-2xl p-6 border border-white/10 bg-black/30 hover:border-yellow-400/30 transition-colors"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

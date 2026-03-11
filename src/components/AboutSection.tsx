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
    <section id="about" className="relative py-24 px-6 section-glow overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18,18,26,0.7), rgba(18,18,26,0.9)), url('/bg-image2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <AnimatedSection className="max-w-6xl mx-auto" staggerChildren=".value-card" stagger={0.15}>
        <div className="glass rounded-3xl p-8 sm:p-12 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Forex Rocket</h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-2xl mx-auto">
            Forex Rocket is a premium Discord server for Forex traders. We deliver
            high-quality trading signals, market analysis, and a supportive
            community for traders of all levels.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-2xl mx-auto">
            Our signals are based on technical analysis, price action, and strict risk management.
            We focus on quality over quantity – fewer setups with clearer risk-reward.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you&apos;re new to Forex or an experienced trader, our community and resources
            provide the structure and support to improve your trading.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
            {values.map((value) => (
              <div
                key={value.title}
                className="value-card glass-subtle rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors"
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

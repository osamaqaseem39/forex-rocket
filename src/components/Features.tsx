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
    <section id="features" className="relative py-24 px-6 section-glow overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.7), rgba(10,10,15,0.9)), url('/bg-bull.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-dark opacity-80" />
      <AnimatedSection className="max-w-6xl mx-auto" staggerChildren=".feature-card" stagger={0.1} animation="fadeUp">
        <div className="feature-card text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Join Forex Rocket?
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Premium signals and a community built for serious Forex traders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card glass rounded-2xl p-6 hover:border-white/15 transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
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

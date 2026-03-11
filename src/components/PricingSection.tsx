import AnimatedSection from "@/components/AnimatedSection";
export default function PricingSection() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Get started and see what we offer",
      features: [
        "Access to Discord server",
        "Limited daily signals",
        "Community chat",
        "Basic market updates",
      ],
      cta: "Join Free",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$29",
      period: "/month",
      description: "Full access for serious traders",
      features: [
        "All Free features",
        "Unlimited signals",
        "Priority analysis",
        "Voice sessions",
        "Trade alerts",
        "1-on-1 support",
      ],
      cta: "Go Premium",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="relative w-full py-24 px-6 section-glow section-divider section-alt overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto w-full" staggerChildren=".pricing-card" stagger={0.15}>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Start free or unlock the full experience with Premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card glass rounded-3xl p-8 text-center w-full max-w-md ${
                tier.highlighted
                  ? "border-2 border-[var(--accent)] ring-2 ring-[var(--accent)]/20"
                  : ""
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-[var(--accent)]">
                    {tier.price}
                  </span>
                  <span className="text-[var(--text-muted)]">{tier.period}</span>
                </div>
                <p className="text-[var(--text-secondary)] text-sm mt-2">
                  {tier.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8 flex flex-col items-center">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center justify-center gap-2 text-[var(--text-secondary)] text-sm"
                  >
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://discord.gg/your-invite"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-xl text-center font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white"
                    : "glass-subtle hover:bg-white/10 text-[var(--text-primary)]"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

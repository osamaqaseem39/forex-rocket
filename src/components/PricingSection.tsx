import AnimatedSection from "@/components/AnimatedSection";

const TELEGRAM_URL = "https://t.me/+sH66bNiMugEwZTE8";
const VIP_ADMIN_URL = "https://t.me/Forexrocketadminn";

export default function PricingSection() {
  const tiers = [
    {
      name: "Free",
      price: "FREE",
      period: "",
      description: "Access the free Telegram channel with limited signals and basic info",
      features: [
        "Join our free Telegram channel",
        "Limited daily signals (XAUUSD & BTC)",
        "Basic market updates and levels",
        "Community updates",
      ],
      cta: "Join Free Channel",
      ctaHref: TELEGRAM_URL,
      highlighted: false,
    },
    {
      name: "VIP",
      price: "VIP",
      period: "— no monthly fee",
      description: "Full VIP access via Vantage account or IB move",
      features: [
        "All free channel content",
        "Unlimited signals & priority analysis",
        "Open a Vantage trading account and/or move your IB",
        "Weekly Sunday webinars & outlook",
        "Full trade alerts and support",
      ],
      cta: "Get VIP Access",
      ctaHref: VIP_ADMIN_URL,
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto w-full" staggerChildren=".pricing-card" stagger={0.15}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Free Channel & VIP Access
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            There is no paid plan. Join free for limited signals, or get VIP by opening a Vantage account or moving your IB.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card w-full max-w-md rounded-3xl p-8 text-center bg-black/30 transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 ${
                tier.highlighted ? "shadow-[0_0_40px_rgba(250,204,21,0.35)]" : ""
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-200">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1 flex-wrap">
                  <span className="text-3xl font-bold text-yellow-400">
                    {tier.price}
                  </span>
                  <span className="text-[var(--text-muted)] text-sm">{tier.period}</span>
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
                    <span className="text-yellow-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaHref}
                target={tier.ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={tier.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`block w-full py-3 rounded-xl text-center font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:opacity-90"
                    : "bg-white/5 hover:bg-white/10 text-white"
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

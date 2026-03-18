import AnimatedSection from "@/components/AnimatedSection";

const TELEGRAM_URL = "https://t.me/+sH66bNiMugEwZTE8";

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: "📱",
      title: "Open the free Telegram channel",
      description:
        "Click 'Join Telegram' anywhere on this page to open our free Telegram channel. It stays free—no card, no payment—just limited signals and basic info.",
    },
    {
      step: 2,
      icon: "📊",
      title: "Get XAUUSD & BTC signals",
      description: "Signals are posted in the channel with entry, stop-loss, take-profit, and context. We focus on Gold (XAUUSD) and Bitcoin (BTC).",
    },
    {
      step: 3,
      icon: "⭐",
      title: "Get VIP access (optional)",
      description: "For full VIP access: open a Vantage trading account and/or move your Introducing Broker (IB) to us. No monthly fee—VIP is granted when you trade with Vantage or refer via IB.",
    },
    {
      step: 4,
      icon: "🛡️",
      title: "Manage risk & join webinars",
      description: "Never risk more than 1–2% per trade. We run weekly webinars on Sunday—join for outlook and Q&A.",
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto w-full" staggerChildren=".step-card" stagger={0.12} animation="fadeUp">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            How to Join
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Join the free Telegram channel, then unlock VIP by opening a Vantage account or moving your IB.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="step-card flex flex-col sm:flex-row sm:items-center gap-6 rounded-2xl bg-black/30 p-6 text-center sm:text-left transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-400/30 flex items-center justify-center text-3xl mx-auto sm:mx-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg border border-yellow-400/40 flex items-center justify-center text-sm font-bold text-yellow-300">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 text-black font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            Open Telegram Channel
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

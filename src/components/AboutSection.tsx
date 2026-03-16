import AnimatedSection from "@/components/AnimatedSection";

export default function AboutSection() {
  const topRow = [
    {
      icon: "📊",
      title: "Structured Approach",
      description: "Clear trading plans with predefined levels instead of random entries.",
    },
    {
      icon: "🛡️",
      title: "Risk First",
      description: "Defined risk per trade, realistic targets, and focus on account protection.",
    },
    {
      icon: "📚",
      title: "Education",
      description: "Breakdowns, notes and recaps so you understand why a trade makes sense.",
    },
    {
      icon: "🤝",
      title: "Support",
      description: "A tighter group of traders focused on improvement, not signals spam.",
    },
  ];

  const bottomRow = [
    {
      title: "Free",
      subtitle: "Channel",
    },
    {
      title: "Daily",
      subtitle: "Signals",
    },
    {
      title: "XAUUSD & BTC",
      subtitle: "Pairs",
    },
    {
      title: "Sunday",
      subtitle: "Webinars",
    },
  ];

  return (
    <section id="about" className="relative w-full py-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url('/bg-image2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <AnimatedSection className="max-w-6xl mx-auto w-full section-glow">
        <div className="mb-14 text-center value-card">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--text-muted)] mb-3">
            How Forex Rocket Helps
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-glow">
            Everything You Need To Trade With Clarity
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-sm sm:text-base">
            From live XAUUSD &amp; BTC signals to weekly education, Forex Rocket gives you structure,
            risk management, and a community around every trade.
          </p>
        </div>

        <div className="grid gap-10 lg:gap-12">
          {/* Story / philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-sm sm:text-base">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most signal channels focus on hype and screenshots. Forex Rocket is built around{" "}
                <span className="text-yellow-300 font-semibold">process first</span>: clear plans, defined risk,
                and trades you actually understand.
              </p>
              <p>
                Every week we slow things down, review what worked, what did not, and how to improve execution.
                The goal is that you can eventually trade with or without any channel.
              </p>
            </div>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Inside the group you will see the reasoning behind levels, not just entries. We focus heavily on{" "}
                <span className="text-yellow-300 font-semibold">risk management</span>, realistic expectations,
                and protecting your capital.
              </p>
              <p>
                If you want a smaller community that treats trading like a craft instead of a lottery ticket,
                this is where that work happens.
              </p>
            </div>
          </div>

          {/* Bottom row – highlight cards, borderless with hover */}
          <div className="value-card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bottomRow.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-between gap-1 rounded-3xl bg-black/40 px-8 py-10 text-center shadow-none transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  {item.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-yellow-300">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

import AnimatedSection from "@/components/AnimatedSection";
export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Members", icon: "👥" },
    { value: "Daily", label: "Signals", icon: "📊" },
    { value: "XAUUSD & BTC", label: "Pairs", icon: "💱" },
    { value: "Sunday", label: "Webinars", icon: "📅" },
  ];

  return (
    <section id="stats" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection className="max-w-6xl mx-auto w-full" staggerChildren=".stat-card" stagger={0.1} animation="scale">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card rounded-2xl p-8 text-center border border-white/10 bg-black/30 hover:border-yellow-400/30 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-[var(--text-secondary)] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

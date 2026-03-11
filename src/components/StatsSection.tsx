import AnimatedSection from "@/components/AnimatedSection";
export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Traders", icon: "👥" },
    { value: "Daily", label: "Signals", icon: "📊" },
    { value: "24/7", label: "Market Coverage", icon: "🌍" },
    { value: "10+", label: "Pairs Covered", icon: "💱" },
  ];

  return (
    <section id="stats" className="relative w-full py-24 px-6 section-glow section-divider section-alt overflow-hidden">
      <AnimatedSection className="max-w-6xl mx-auto w-full" staggerChildren=".stat-card" stagger={0.1} animation="scale">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card glass rounded-2xl p-8 text-center hover:border-white/15 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[var(--accent)] mb-2">
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

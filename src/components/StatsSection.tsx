import AnimatedSection from "@/components/AnimatedSection";

export default function StatsSection() {
  const stats = [
    { value: "500+", label: "Traders", icon: "👥" },
    { value: "Daily", label: "Signals", icon: "📊" },
    { value: "24/7", label: "Market Coverage", icon: "🌍" },
    { value: "10+", label: "Pairs Covered", icon: "💱" },
  ];

  return (
    <section id="stats" className="relative py-24 px-6">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.7), rgba(10,10,15,0.9)), url('/bg-bear.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-dark opacity-80" />
      <AnimatedSection className="max-w-6xl mx-auto" staggerChildren=".stat-card" stagger={0.1} animation="scale">
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

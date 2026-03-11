import AnimatedSection from "@/components/AnimatedSection";

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: "🚀",
      title: "Join Discord",
      description: "Click Join Discord and get instant access to our server. Free to join.",
    },
    {
      step: 2,
      icon: "📱",
      title: "Get Signals",
      description: "Signals are posted in dedicated channels with entry, SL, TP, and lot size.",
    },
    {
      step: 3,
      icon: "📋",
      title: "Copy or Follow",
      description: "Copy trades to your broker or follow manually. Use your own risk parameters.",
    },
    {
      step: 4,
      icon: "🛡️",
      title: "Manage Risk",
      description: "Never risk more than 1–2% per trade. Use stop-loss on every position.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 section-glow overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.7), rgba(10,10,15,0.9)), url('/bg-image1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-dark opacity-80" />
      <AnimatedSection className="max-w-4xl mx-auto" staggerChildren=".step-card" stagger={0.12} animation="fadeUp">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Four simple steps to start receiving and trading our signals.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="step-card glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-6 text-center sm:text-left"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[var(--accent)]/20 flex items-center justify-center text-3xl mx-auto sm:mx-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-lg glass-subtle flex items-center justify-center text-sm font-bold text-[var(--accent)]">
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
      </AnimatedSection>
    </section>
  );
}

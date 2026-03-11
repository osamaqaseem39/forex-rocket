import AnimatedSection from "@/components/AnimatedSection";

export default function DisclaimerSection() {
  return (
    <section id="disclaimer" className="relative py-16 px-6">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(18,18,26,0.75), rgba(18,18,26,0.92)), url('/bg-bear.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <AnimatedSection className="max-w-3xl mx-auto" animation="fadeIn">
        <div className="glass rounded-2xl p-8 border border-red-500/20 text-center">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
            <span>⚠️</span> Risk Disclaimer
          </h2>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
            Trading Forex and CFDs involves substantial risk of loss and is not suitable for all investors.
            The high degree of leverage can work against you as well as for you. Before deciding to trade,
            you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
            Our signals and analysis are for educational purposes only and do not constitute financial advice.
            Past performance is not indicative of future results. Always do your own research and never risk
            more than you can afford to lose.
          </p>
          <p className="text-[var(--text-muted)] text-xs">
            By using our signals, you acknowledge that you understand these risks and accept full responsibility for your trading decisions.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}

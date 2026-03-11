import AnimatedSection from "@/components/AnimatedSection";
export default function RulesSection() {
  const rules = [
    "No financial advice – signals are for education only",
    "Respect other traders and their strategies",
    "No spam, promo, or unsolicited DMs",
    "Use the correct channels for signals vs. discussion",
    "Follow risk management guidelines",
  ];

  return (
    <section id="rules" className="relative w-full py-24 px-6 section-glow section-divider section-alt overflow-hidden">
      <AnimatedSection className="max-w-2xl mx-auto w-full" staggerChildren=".rule-item" stagger={0.1}>
        <div className="glass rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Server Rules</h2>
          <ul className="space-y-4 flex flex-col items-center">
            {rules.map((rule, i) => (
              <li
                key={i}
                className="rule-item flex items-center justify-center gap-3 text-[var(--text-secondary)] max-w-lg"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg glass-subtle flex items-center justify-center text-sm font-medium text-[var(--accent)]">
                  {i + 1}
                </span>
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </section>
  );
}

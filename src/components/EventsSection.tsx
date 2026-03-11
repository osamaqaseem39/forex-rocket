import AnimatedSection from "@/components/AnimatedSection";

export default function EventsSection() {
  const events = [
    {
      date: "Mon–Fri",
      time: "Session Open",
      title: "Daily Market Analysis",
      description: "Live analysis and signal updates as London, NY, and Asian sessions open.",
      icon: "📊",
    },
    {
      date: "Wed",
      time: "8:00 PM",
      title: "Weekly Strategy Session",
      description: "Voice chat with the team. Q&A, trade review, and market outlook.",
      icon: "🎯",
    },
    {
      date: "Sun",
      time: "6:00 PM",
      title: "Week Ahead Outlook",
      description: "Preview key levels, support/resistance, and setups for the coming week.",
      icon: "📈",
    },
    {
      date: "Daily",
      time: "24/7",
      title: "Signal Alerts",
      description: "Signals posted whenever setups meet our criteria. No fixed schedule.",
      icon: "🔔",
    },
  ];

  return (
    <section id="events" className="relative py-24 px-6">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-image2.png')" }}
      />
      <div className="absolute inset-0 -z-10 bg-[var(--bg-secondary)]/70" />
      <AnimatedSection className="max-w-4xl mx-auto" staggerChildren=".animate-reveal" stagger={0.08} animation="slideLeft">
        <div className="animate-reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Schedule
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Regular analysis sessions and community events for traders.
          </p>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="animate-reveal glass rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-white/15 transition-all duration-300 text-center sm:text-left"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl glass-subtle flex items-center justify-center text-2xl mx-auto sm:mx-0">
                {event.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--accent)] mb-1">
                  <span>{event.date}</span>
                  <span className="text-[var(--text-muted)]">•</span>
                  <span>{event.time}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {event.description}
                </p>
              </div>
              <a
                href="https://discord.gg/your-invite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors text-center"
              >
                Join
              </a>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

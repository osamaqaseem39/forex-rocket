import AnimatedSection from "@/components/AnimatedSection";
export default function EventsSection() {
  const events = [
    {
      date: "Sunday",
      time: "Weekly",
      title: "Weekly Webinar",
      description: "Weekly webinars every Sunday—outlook, key levels for XAUUSD & BTC, and Q&A. Join via Telegram.",
      icon: "📅",
    },
    {
      date: "Mon–Fri",
      time: "Session Open",
      title: "Daily Market Analysis",
      description: "Live analysis and signal updates as London, NY, and Asian sessions open. Posted on Telegram.",
      icon: "📊",
    },
    {
      date: "Daily",
      time: "24/7",
      title: "Signal Alerts",
      description: "XAUUSD & BTC signals posted whenever setups meet our criteria. No fixed schedule.",
      icon: "🔔",
    },
  ];

  return (
    <section id="events" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto w-full" staggerChildren=".animate-reveal" stagger={0.08} animation="slideLeft">
        <div className="animate-reveal text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Schedule
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Weekly Sunday webinars plus daily analysis and signals on Telegram.
          </p>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="animate-reveal rounded-2xl border border-white/10 bg-black/30 p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-yellow-400/30 transition-all duration-300 text-center sm:text-left"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl border border-yellow-400/30 flex items-center justify-center text-2xl mx-auto sm:mx-0 bg-yellow-500/10">
                {event.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-sm text-yellow-300 mb-1">
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
                href="https://t.me/your-telegram-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-semibold hover:opacity-90 transition-opacity text-center"
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

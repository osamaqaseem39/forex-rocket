import AnimatedSection from "@/components/AnimatedSection";
export default function EventsSection() {
  const events = [
    {
      date: "Sunday",
      time: "Weekly",
      title: "Weekly Webinar",
      description:
        "Deep-dive session every Sunday: outlook, key GOLD & BTC levels, and open Q&A before the week starts.",
      icon: "📅",
      tag: "Webinar",
    },
    {
      date: "Mon–Fri",
      time: "Session Open",
      title: "Daily Market Windows",
      description:
        "London, NY, and Asian sessions highlighted with fresh context and levels so you know when to focus.",
      icon: "📊",
      tag: "Sessions",
    },
    {
      date: "Daily",
      time: "24/7",
      title: "Signal Alerts",
      description:
        "XAUUSD & BTC signals pushed whenever setups meet our criteria—no forced trades, quality over quantity.",
      icon: "🔔",
      tag: "Signals",
    },
  ];

  return (
    <section id="events" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection
        className="max-w-4xl mx-auto w-full section-glow"
        staggerChildren=".animate-reveal"
        stagger={0.1}
        animation="slideLeft"
      >
        <div className="animate-reveal text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[var(--text-muted)] mb-3">
            Weekly Rhythm
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-glow">Schedule</h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
            A simple weekly rhythm so you always know when education, analysis, and signals are most active.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative mt-4 space-y-6 before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
          {events.map((event) => (
            <div
              key={event.title}
              className="animate-reveal relative flex flex-col sm:flex-row gap-5 sm:gap-6"
            >
              {/* timeline dot */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_18px_rgba(250,204,21,0.8)]" />

              {/* card */}
              <div className="sm:w-1/2 sm:ml-auto rounded-2xl bg-black/40 border border-white/5 px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-yellow-400/50 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-yellow-500/15 border border-yellow-400/40 flex items-center justify-center text-2xl">
                      {event.icon}
                    </div>
                    <div className="text-xs text-yellow-200/90 space-x-1">
                      <span className="font-semibold uppercase tracking-[0.22em]">
                        {event.date}
                      </span>
                      <span className="text-[var(--text-muted)]">•</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-yellow-500/10 text-yellow-300 border border-yellow-400/40">
                    {event.tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{event.description}</p>
                <a
                  href="https://t.me/+sH66bNiMugEwZTE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-yellow-300 hover:text-yellow-200 transition-colors"
                >
                  Join via Telegram
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { href: "#features", label: "Features" },
    { href: "#pairs", label: "Pairs" },
    { href: "#results", label: "Results" },
    { href: "#how-it-works", label: "How to Join" },
    { href: "#signal-format", label: "Signal Format" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Schedule" },
    { href: "#rules", label: "Rules" },
    { href: "#faq", label: "FAQ" },
    { href: "#videos", label: "Videos" },
    { href: "#disclaimer", label: "Disclaimer" },
  ];

  return (
    <footer className="relative w-full py-16 px-6 border-t border-white/10">
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="text-lg font-semibold">Forex Rocket</span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 max-w-xs">
              XAUUSD &amp; BTC signals on Telegram. Gold-focused, no monthly fee.
            </p>
            <a
              href="https://t.me/your-telegram-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.99991 15.1701L9.83391 19.1681C10.1679 19.1681 10.3129 19.0241 10.4879 18.8501L12.1679 17.2441L16.1239 20.1481C16.8479 20.5501 17.3599 20.3441 17.5559 19.4461L19.9479 8.18212L19.9489 8.18112C20.1799 7.10812 19.5559 6.69012 18.8479 6.95612L4.22691 12.5461C3.18091 12.9541 3.19691 13.5541 4.04991 13.8201L7.79691 14.9931L16.3839 9.59512C16.7879 9.32812 17.1559 9.47612 16.8529 9.74312L9.99991 15.1701Z" />
              </svg>
              Join Telegram
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-yellow-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channel */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">
              Channel
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/your-telegram-channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-secondary)] hover:text-yellow-300 text-sm transition-colors"
                >
                  Telegram Channel
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[var(--text-secondary)] hover:text-yellow-300 text-sm transition-colors">
                  VIP (Vantage / IB)
                </a>
              </li>
              <li>
                <a href="#events" className="text-[var(--text-secondary)] hover:text-yellow-300 text-sm transition-colors">
                  Sunday Webinars
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--text-muted)]">
              Connect
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-4">
              Join our Telegram for XAUUSD &amp; BTC signals and updates.
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/your-telegram-channel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[var(--text-secondary)] hover:text-yellow-300 hover:border-yellow-400/50 transition-all"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.99991 15.1701L9.83391 19.1681C10.1679 19.1681 10.3129 19.0241 10.4879 18.8501L12.1679 17.2441L16.1239 20.1481C16.8479 20.5501 17.3599 20.3441 17.5559 19.4461L19.9479 8.18212L19.9489 8.18112C20.1799 7.10812 19.5559 6.69012 18.8479 6.95612L4.22691 12.5461C3.18091 12.9541 3.19691 13.5541 4.04991 13.8201L7.79691 14.9931L16.3839 9.59512C16.7879 9.32812 17.1559 9.47612 16.8529 9.74312L9.99991 15.1701Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} Forex Rocket. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-xs">
            Trading involves risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
}

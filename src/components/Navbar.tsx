"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pairs", label: "Pairs" },
    { href: "#results", label: "Results" },
    { href: "#how-it-works", label: "How to Join" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Schedule" },
    { href: "#faq", label: "FAQ" },
    { href: "#videos", label: "Videos" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <span className="text-2xl">🚀</span>
            <span className="hidden sm:inline tracking-tight">Forex Rocket</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/your-telegram-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 text-black text-sm font-semibold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/40 transition-all"
            >
              Join Telegram
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pt-4">
            <ul className="flex flex-col gap-4 pb-4 border-t border-white/10 mt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-[var(--text-secondary)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://t.me/your-telegram-channel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-red-500 text-black text-sm font-semibold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/40 transition-all"
                >
                  Join Telegram
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

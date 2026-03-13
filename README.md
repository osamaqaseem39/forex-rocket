# Forex Rocket

A modern landing page for Forex Rocket – a **Telegram-first group** for XAUUSD (Gold) and BTC trading signals. Gold, white, and red theme. Built with Next.js 16 and Tailwind CSS.

## Features

- **Telegram-first** – All community access and signals via Telegram (no Discord)
- **Gold / white / red theme** – Brand colours with unboxed, clean layout
- **Responsive** – Mobile-first layout with breakpoints
- **Sections** – Hero, Features, Pairs (XAUUSD & BTC), Results, How to Join, Pricing (Free + VIP), Events, Rules, FAQ, Videos, Footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

Replace `https://t.me/your-telegram-channel` with your Telegram channel or group link in:

- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/Footer.tsx`
- `src/components/HowItWorksSection.tsx`
- `src/components/PricingSection.tsx`
- `src/components/CTASection.tsx`
- `src/components/EventsSection.tsx`
- `src/components/ResultsSection.tsx`

Replace `https://www.youtube.com/@your-channel` in `src/components/VideosSection.tsx` with your YouTube channel URL.

## Tech Stack

- Next.js 16 (Turbopack)
- React 19
- Tailwind CSS 3
- TypeScript

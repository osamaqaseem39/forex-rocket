import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Forex Rocket | XAUUSD & BTC Signals on Telegram",
  description: "Gold (XAUUSD) and Bitcoin (BTC) trading signals on Telegram. Free channel + VIP via Vantage or IB. Weekly Sunday webinars. No monthly fee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased font-sans">
        <div className="ambient-glow ambient-glow--a" aria-hidden="true" />
        <div className="ambient-glow ambient-glow--b" aria-hidden="true" />
        <div className="ambient-glow ambient-glow--c" aria-hidden="true" />
        <ScrollTriggerRefresh />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

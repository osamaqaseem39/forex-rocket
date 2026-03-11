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
  title: "Forex Rocket | Trading Signals",
  description: "Join Forex Rocket Discord for premium Forex trading signals, analysis, and a community of serious traders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased font-sans">
        <ScrollTriggerRefresh />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import StatsSection from "@/components/StatsSection";
import TradingPairsSection from "@/components/TradingPairsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SignalFormatSection from "@/components/SignalFormatSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import RulesSection from "@/components/RulesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <Features />
      <StatsSection />
      <TradingPairsSection />
      <HowItWorksSection />
      <SignalFormatSection />
      <PricingSection />
      <AboutSection />
      <EventsSection />
      <RulesSection />
      <FAQSection />
      <CTASection />
      <DisclaimerSection />
      <Footer />
    </main>
  );
}

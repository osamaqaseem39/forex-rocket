import Features from "@/components/Features";
import StatsSection from "@/components/StatsSection";
import TradingPairsSection from "@/components/TradingPairsSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SignalFormatSection from "@/components/SignalFormatSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import RulesSection from "@/components/RulesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import VideosSection from "@/components/VideosSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <HeroSection />
      <Features />
      <StatsSection />
      <TradingPairsSection />
      <ResultsSection />
      <HowItWorksSection />
      <SignalFormatSection />
      <PricingSection />
      <AboutSection />
      <EventsSection />
      <RulesSection />
      <FAQSection />
      <CTASection />
      <VideosSection />
      <DisclaimerSection />
      <Footer />
    </main>
  );
}

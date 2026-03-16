import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const TELEGRAM_URL = "https://t.me/your-telegram-channel";

const resultImages = Array.from({ length: 10 }, (_, i) => ({
  src: `/${i + 1}.png`,
  label: `Result ${i + 1}`,
}));

export default function ResultsSection() {
  return (
    <section id="results" className="relative w-full py-24 px-6 overflow-hidden">
      <AnimatedSection
        className="max-w-6xl mx-auto w-full"
        staggerChildren=".result-card"
        stagger={0.06}
        animation="fadeUp"
      >
        <div className="text-center mb-12 flex flex-col items-center gap-6">
          <div className="w-full max-w-4xl overflow-hidden">
            <div className="relative w-full aspect-[16/9] rounded-3xl">
              <Image
                src="/rocket-club.png"
                alt="Forex Rocket Club"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 768px, 100vw"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Recent Results</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              These screenshots are examples of recent results shared in our Telegram channel. Past performance does not
              guarantee future results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
          {resultImages.map((img) => (
            <div
              key={img.src}
              className="result-card w-full max-w-[180px] rounded-2xl bg-black/40 overflow-hidden flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 180px, 50vw"
                />
              </div>
              <div className="px-3 py-2">
                <span className="text-xs text-[var(--text-muted)]">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold hover:opacity-90 transition-opacity"
          >
            See more results on Telegram
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

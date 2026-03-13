"use client";

import AnimatedSection from "@/components/AnimatedSection";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@your-channel";

const videos = [
  {
    id: "1",
    title: "XAUUSD Weekly Breakdown",
    description: "Gold levels, support/resistance, and setups for the week.",
    url: YOUTUBE_CHANNEL_URL,
    comingSoon: true,
  },
  {
    id: "2",
    title: "Sunday Webinar Replay",
    description: "Weekly outlook and Q&A—XAUUSD & BTC focus.",
    url: YOUTUBE_CHANNEL_URL,
    comingSoon: true,
  },
  {
    id: "3",
    title: "BTC & Gold Signal Review",
    description: "Review of recent signals and market context.",
    url: YOUTUBE_CHANNEL_URL,
    comingSoon: true,
  },
];

export default function VideosSection() {
  return (
    <section id="videos" className="relative w-full py-24 px-6 overflow-hidden border-t border-white/10">
      <AnimatedSection className="max-w-6xl mx-auto w-full" staggerChildren=".video-card" stagger={0.12} animation="fadeUp">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Videos on YouTube
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
            Weekly breakdowns, webinar replays, and signal reviews. Subscribe for XAUUSD & BTC content.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card group block rounded-2xl overflow-hidden border border-white/10 bg-black/40 hover:border-yellow-400/40 transition-all duration-300"
            >
              <div className="relative aspect-video bg-gradient-to-br from-yellow-900/40 via-black/90 to-red-900/40 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/50">
                  <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-yellow-200 bg-black/60 px-2 py-1 rounded">
                    {video.comingSoon ? "Coming soon" : "Watch"}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-yellow-100 mb-1 group-hover:text-yellow-300 transition-colors">
                  {video.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  {video.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit our YouTube channel
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}

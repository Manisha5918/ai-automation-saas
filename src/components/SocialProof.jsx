import { useState } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';

const testimonials = [
  {
    quote: "AIFlow reduced our team's manual operations by nearly 80%. Moving from ad-hoc scripts to structured agentic workflows saved us roughly 30 engineering hours every week.",
    author: "Elena Rostova",
    role: "VP of Engineering at TechNova",
    rating: "★★★★★",
  },
  {
    quote: "The workflow automation tool is incredible. Syncing our database, webhook listeners, and communication pipelines took under ten minutes. The Slack alert triggers are flawless.",
    author: "Marcus Chen",
    role: "Co-Founder & CTO at CloudSync",
    rating: "★★★★★",
  },
  {
    quote: "The ML analytics platform gave us predictive insight into throughput latency. We can now proactively scale server resources before our customers notice any delay.",
    author: "Sarah Jenkins",
    role: "Head of Operations at DataWorks",
    rating: "★★★★★",
  },
];

function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-28 md:py-36 bg-gradient-to-b from-noir via-nocturnal/10 to-noir px-6 md:px-8 border-b border-nocturnal/20 relative">
      {/* Soft gradient divider at top to decongest */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-nocturnal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold font-jetbrains text-transparent bg-clip-text bg-gradient-to-r from-arctic to-mint mb-4">
            Trusted by Teams
          </h2>
          <p className="text-mint/70 font-inter text-sm sm:text-base">
            See how enterprise leaders build efficiency with AIFlow.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto w-full relative">
          
          {/* Slider Navigation Buttons (Absolute at left/right on md+) */}
          <button
            onClick={handlePrev}
            className="absolute -left-20 top-1/2 -translate-y-1/2 p-3.5 rounded-xl bg-nocturnal/45 text-mint hover:bg-forsythia hover:text-noir transition-all duration-200 shadow-xl border border-nocturnal/50 focus:outline-none cursor-pointer hidden md:flex items-center justify-center hover:-translate-x-1"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-20 top-1/2 -translate-y-1/2 p-3.5 rounded-xl bg-nocturnal/45 text-mint hover:bg-forsythia hover:text-noir transition-all duration-200 shadow-xl border border-nocturnal/50 focus:outline-none cursor-pointer hidden md:flex items-center justify-center hover:translate-x-1"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial slider window */}
          <div className="overflow-hidden relative w-full rounded-3xl bg-gradient-to-b from-nocturnal/15 to-noir/40 border border-nocturnal/30 p-8 sm:p-12 md:p-14 shadow-2xl">
            {/* Glowing inner decorative background */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-forsythia/5 rounded-full blur-3xl pointer-events-none" />
            {/* Giant quote sign background */}
            <span className="absolute top-4 right-10 text-9xl font-serif text-nocturnal/20 pointer-events-none select-none font-bold">“</span>

            <div
              className="flex transition-transform duration-300 ease-in-out w-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="w-full min-w-full shrink-0 flex-none select-none flex flex-col justify-between relative z-10">
                  <div className="mb-8">
                    <span className="text-saffron text-xs tracking-widest block mb-4 font-jetbrains font-bold uppercase">
                      {t.rating}
                    </span>
                    <blockquote className="text-arctic font-inter text-lg sm:text-xl lg:text-2xl font-light leading-relaxed italic">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="pt-4 border-t border-nocturnal/20">
                    <h4 className="font-bold font-jetbrains text-forsythia text-base">
                      {t.author}
                    </h4>
                    <p className="text-mint/60 text-xs sm:text-sm font-medium font-inter mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls Row at bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 px-4">
            {/* Indicators (Centered) */}
            <div className="flex gap-2.5 mx-auto">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeIndex === idx ? 'w-8 bg-forsythia' : 'w-2 bg-nocturnal/60 hover:bg-nocturnal'
                  }`}
                  aria-label={`Jump to review slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slider Navigation Buttons (Mobile only row) */}
            <div className="flex gap-3 md:hidden">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-nocturnal/45 text-mint hover:bg-forsythia hover:text-noir transition duration-150 shadow border border-nocturnal/50 focus:outline-none cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-nocturnal/45 text-mint hover:bg-forsythia hover:text-noir transition duration-150 shadow border border-nocturnal/50 focus:outline-none cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SocialProof;
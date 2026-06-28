import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';
import useInView from '../hooks/useInView';

const AUTOPLAY_INTERVAL = 5000;

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
  {
    quote: "Managing distributed system webhooks used to be a nightmare of race conditions. AIFlow's atomic queue handling solved it overnight. Our webhook error rate dropped to absolute zero.",
    author: "Liam Gallagher",
    role: "Lead Platform Architect at Nexus Corp",
    rating: "★★★★★",
  },
  {
    quote: "The self-healing features in AIFlow are game-changing. When a third-party API goes down, AIFlow automatically routes traffic through secondary nodes without any service disruption.",
    author: "Priya Sharma",
    role: "Director of Automation at FinQuest",
    rating: "★★★★★",
  },
  {
    quote: "We sync hundreds of thousands of e-commerce events daily. AIFlow handles the throughput latency with absolute ease. Our data warehouse sync is now faster than ever before.",
    author: "James O'Connor",
    role: "CTO at Apex Commerce",
    rating: "★★★★★",
  },
];

function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const autoplayTimer = useRef(null);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.15 });

  const goTo = useCallback((index) => {
    setActiveIndex(index);
    setProgressKey((k) => k + 1); // restart progress bar animation
  }, []);

  const handlePrev = useCallback(() => {
    goTo(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
  }, [activeIndex, goTo]);

  const handleNext = useCallback(() => {
    goTo(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused || !sectionInView) return;

    autoplayTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setProgressKey((k) => k + 1);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(autoplayTimer.current);
  }, [isPaused, sectionInView, activeIndex]);

  // Touch / Swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = Math.abs(touchStartY.current - e.changedTouches[0].clientY);

    // Only trigger swipe if horizontal movement > 50px and > vertical movement
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > diffY) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-28 md:py-36 bg-gradient-to-b from-noir via-nocturnal/10 to-noir px-6 md:px-8 border-b border-nocturnal/20 relative"
    >
      {/* Soft gradient divider at top to decongest */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-nocturnal/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">

        <div className={`text-center max-w-2xl mx-auto mb-20 animate-on-scroll ${sectionInView ? 'in-view' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold font-jetbrains text-transparent bg-clip-text bg-gradient-to-r from-arctic to-mint mb-4">
            Trusted by Teams
          </h2>
          <p className="text-mint/70 font-inter text-sm sm:text-base">
            See how enterprise leaders build efficiency with AIFlow.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className={`max-w-3xl mx-auto w-full relative animate-on-scroll stagger-2 ${sectionInView ? 'in-view' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

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
          <div
            className="overflow-hidden relative w-full rounded-3xl bg-gradient-to-b from-nocturnal/15 to-noir/40 border border-nocturnal/30 p-8 sm:p-12 md:p-14 shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Glowing inner decorative background */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-forsythia/5 rounded-full blur-3xl pointer-events-none" />
            {/* Giant quote sign background */}
            <span className="absolute top-4 right-10 text-9xl font-serif text-nocturnal/20 pointer-events-none select-none font-bold">"</span>

            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full"
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

            {/* Auto-play progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-nocturnal/20">
              <div
                key={progressKey}
                className={`h-full bg-gradient-to-r from-forsythia to-saffron ${
                  isPaused ? '' : 'animate-carousel-progress'
                }`}
                style={{
                  '--carousel-duration': `${AUTOPLAY_INTERVAL}ms`,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              />
            </div>
          </div>

          {/* Controls Row at bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4 px-4">
            {/* Indicators (Centered) */}
            <div className="flex gap-2.5 mx-auto">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
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
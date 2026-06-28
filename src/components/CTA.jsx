import { useState } from 'react';
import { Cube16Solid, LinkSolid } from './Icons';
import useInView from '../hooks/useInView';

function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error'
  const [shaking, setShaking] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state
  const [sectionRef, sectionInView] = useInView({ threshold: 0.15 });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enhanced email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      return;
    }

    setIsSubmitting(true); // Start loading

    try {
      // Mock API call to submit form
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API delay

      setStatus('success');
      setEmail('');
      // Auto-clear success after 5s
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <section id="cta" className="py-28 md:py-36 bg-noir text-arctic relative overflow-hidden">
      {/* Subtle top fade divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-nocturnal/30 to-transparent" />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-nocturnal/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-forsythia/5 rounded-full blur-3xl -z-10" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className={`max-w-4xl mx-auto bg-gradient-to-b from-nocturnal/25 to-noir/80 border border-nocturnal/45 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden group animate-on-scroll ${sectionInView ? 'in-view' : ''}`}>
          {/* Inner Glowing Decorative Ring */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-saffron/10 rounded-full blur-2xl group-hover:bg-saffron/15 transition-all duration-500" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* CTA Copy */}
            <div className="flex-1 text-left">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forsythia/10 border border-forsythia/25 text-forsythia text-xs font-semibold uppercase tracking-wider mb-5 font-jetbrains animate-on-scroll stagger-1 ${sectionInView ? 'in-view' : ''}`}>
                <Cube16Solid className="w-3.5 h-3.5" />
                <span>Instant Deployment</span>
              </div>
              <h2 className={`text-3xl sm:text-4xl font-bold font-jetbrains text-arctic mb-4 tracking-tight leading-tight animate-on-scroll stagger-2 ${sectionInView ? 'in-view' : ''}`}>
                Supercharge Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">
                  Automation Engine
                </span>
              </h2>
              <p className={`text-mint/70 font-inter text-sm sm:text-base leading-relaxed max-w-xl animate-on-scroll stagger-3 ${sectionInView ? 'in-view' : ''}`}>
                Deploy self-healing AI workflows, establish robust database connections, and latency-optimize your operations. Connect your tools in under ten minutes.
              </p>
            </div>

            {/* Interactive Registration Card */}
            <div className={`w-full lg:w-96 shrink-0 bg-noir/70 border border-nocturnal/40 rounded-2xl p-6 shadow-xl relative z-10 animate-slide-right stagger-4 ${sectionInView ? 'in-view' : ''}`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-forsythia font-jetbrains block mb-4">
                Join the Private Beta
              </span>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status) setStatus('');
                    }}
                    className={`w-full bg-nocturnal/20 border focus:outline-none text-arctic text-xs px-3.5 py-3 rounded-xl transition-all duration-200 font-inter placeholder-mint/30 ${
                      shaking ? 'animate-shake' : ''
                    } ${
                      status === 'error'
                        ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30'
                        : 'border-nocturnal/50 focus:border-forsythia focus:ring-1 focus:ring-forsythia'
                    }`}
                    aria-label="Email address for beta program"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-forsythia hover:bg-saffron disabled:opacity-70 disabled:cursor-not-allowed text-noir font-bold py-3.5 rounded-xl transition duration-200 shadow cursor-pointer font-inter text-xs hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Requesting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Access</span>
                      <LinkSolid className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Notifications */}
              {status === 'success' && (
                <div role="status" aria-live="polite" className="mt-4 p-3 bg-nocturnal/40 border border-mint/20 rounded-xl flex items-center gap-2 text-xs text-mint font-inter animate-slide-in-up">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-forsythia/20 text-forsythia font-bold">✓</span>
                  Access requested! Check your inbox soon.
                </div>
              )}

              {status === 'error' && (
                <div role="status" aria-live="polite" className="mt-4 p-3 bg-red-950/30 border border-red-800/40 rounded-xl flex items-center gap-2 text-xs text-red-400 font-inter animate-slide-in-up">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 font-bold text-[10px]">✗</span>
                  Please enter a valid email address.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;

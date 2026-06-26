import { useState } from 'react';
import { Cube16Solid, LinkSolid } from './Icons';

function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="cta" className="py-28 md:py-36 bg-noir text-arctic relative overflow-hidden">
      {/* Subtle top fade divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-nocturnal/30 to-transparent" />

      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-nocturnal/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-forsythia/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-nocturnal/25 to-noir/80 border border-nocturnal/45 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden group">
          {/* Inner Glowing Decorative Ring */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-saffron/10 rounded-full blur-2xl group-hover:bg-saffron/15 transition-all duration-500" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* CTA Copy */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forsythia/10 border border-forsythia/25 text-forsythia text-xs font-semibold uppercase tracking-wider mb-5 font-jetbrains">
                <Cube16Solid className="w-3.5 h-3.5" />
                <span>Instant Deployment</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-jetbrains text-arctic mb-4 tracking-tight leading-tight">
                Supercharge Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron">
                  Automation Engine
                </span>
              </h2>
              <p className="text-mint/70 font-inter text-sm sm:text-base leading-relaxed max-w-xl">
                Deploy self-healing AI workflows, establish robust database connections, and latency-optimize your operations. Connect your tools in under ten minutes.
              </p>
            </div>

            {/* Interactive Registration Card */}
            <div className="w-full lg:w-96 shrink-0 bg-noir/70 border border-nocturnal/40 rounded-2xl p-6 shadow-xl relative z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-forsythia font-jetbrains block mb-4">
                Join the Private Beta
              </span>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status) setStatus('');
                    }}
                    className="w-full bg-nocturnal/20 border border-nocturnal/50 focus:border-forsythia focus:ring-1 focus:ring-forsythia focus:outline-none text-arctic text-xs px-3.5 py-3 rounded-xl transition duration-150 font-inter placeholder-mint/30"
                    aria-label="Email address for beta program"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-forsythia hover:bg-saffron text-noir font-bold py-3.5 rounded-xl transition duration-200 shadow cursor-pointer font-inter text-xs"
                >
                  <span>Request Access</span>
                  <LinkSolid className="w-4 h-4" />
                </button>
              </form>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="mt-4 p-3 bg-nocturnal/40 border border-mint/20 rounded-xl flex items-center gap-2 text-xs text-mint font-inter animate-pulse">
                  <span className="text-forsythia">✓</span> Access requested! Check your inbox soon.
                </div>
              )}

              {status === 'error' && (
                <div className="mt-4 p-3 bg-red-950/20 border border-red-800/30 rounded-xl flex items-center gap-2 text-xs text-red-400 font-inter">
                  <span>✗</span> Please enter a valid email address.
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

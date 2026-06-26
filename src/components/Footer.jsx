import { useState } from 'react';
import { Cube16Solid } from './Icons';

function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <footer className="bg-noir border-t border-nocturnal/20 text-mint/60 py-20 font-inter relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-nocturnal/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Logo & Mission (Spans 2 cols on md+) */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Cube16Solid className="w-8 h-8 text-forsythia" />
              <h2 className="text-xl font-bold font-jetbrains text-arctic tracking-tight">
                AIFlow
              </h2>
            </div>
            <p className="text-sm text-mint/70 max-w-sm leading-relaxed">
              Empowering global teams with production-grade agentic workflows, multi-app database synchronization, and predictive artificial intelligence pipelines.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider font-jetbrains text-forsythia mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#features" className="hover:text-forsythia transition-colors duration-150">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-forsythia transition-colors duration-150">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors duration-150">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors duration-150">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider font-jetbrains text-forsythia mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-forsythia transition-colors duration-150">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors duration-150">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors duration-150">
                  Security Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors duration-150">
                  Support Ticket
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Interactive Newsletter Subscription */}
          <div className="flex flex-col items-start w-full">
            <h4 className="text-sm font-semibold uppercase tracking-wider font-jetbrains text-forsythia mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-mint/60 leading-relaxed mb-4">
              Subscribe to get release logs for AI nodes and database connectors.
            </p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-nocturnal/20 border border-nocturnal/50 focus:border-forsythia focus:outline-none text-arctic text-xs px-3 py-2.5 rounded-lg transition placeholder-mint/30"
                required
              />
              <button
                type="submit"
                className="w-full bg-nocturnal/45 text-forsythia border border-forsythia/20 hover:bg-forsythia hover:text-noir font-bold text-xs py-2 rounded-lg transition duration-150 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {success && (
              <span className="text-[10px] text-mint font-semibold mt-2.5 flex items-center gap-1.5 animate-pulse">
                <span className="text-forsythia">✓</span> Subscription success!
              </span>
            )}
          </div>

        </div>

        {/* Footer Bottom copyright area */}
        <div className="border-t border-nocturnal/20 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p>© 2026 AIFlow Inc. All rights reserved.</p>
          <div className="flex gap-6 text-mint/40">
            <a href="#" className="hover:text-forsythia transition-colors duration-150">
              System Uptime: 99.98%
            </a>
            <span>•</span>
            <a href="#" className="hover:text-forsythia transition-colors duration-150">
              AWS Partner Network
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
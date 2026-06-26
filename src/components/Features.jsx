import { useState } from 'react';
import {
  ChartPie,
  Cog8Tooth,
  Link,
  Search,
  ArrowPath,
  ChevronDown,
  ChevronUp,
  ChevronUpSolid,
  Cube16Solid,
} from './Icons';

const featuresData = [
  {
    title: 'AI Analytics',
    description: 'Real-time business intelligence powered by machine learning. Track data pipelines and forecast system loads with predictive algorithms.',
    badge: 'Analytics',
    icon: ChartPie,
    desktopClass: 'bg-nocturnal/20 text-arctic border border-nocturnal/30 hover:bg-nocturnal/25',
    iconClass: 'bg-nocturnal/30 text-forsythia',
  },
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive operations with intelligent, self-correcting agentic pipelines. Deploy complex triggers on isolated secure threads.',
    badge: 'Automation',
    icon: Cog8Tooth,
    desktopClass: 'bg-nocturnal/25 text-arctic border-2 border-forsythia/40 hover:bg-nocturnal/35',
    iconClass: 'bg-forsythia text-noir',
  },
  {
    title: 'Integrations',
    description: 'Connect email, databases, HubSpot, Slack, and hundreds of web services. Robust OAuth handshakes ensure zero sync delay.',
    badge: 'Sync Link',
    icon: Link,
    desktopClass: 'bg-nocturnal/20 text-arctic border border-nocturnal/30 hover:bg-nocturnal/25',
    iconClass: 'bg-nocturnal/30 text-forsythia',
  },
  {
    title: 'Smart Search',
    description: 'Search across your entire document, logs, and workflow context instantly using semantic natural language queries. AIFlow maps user intent dynamically.',
    badge: 'Semantic Search',
    icon: Search,
    desktopClass: 'bg-nocturnal/20 text-arctic md:col-span-2 border border-nocturnal/30 hover:bg-nocturnal/25',
    iconClass: 'bg-nocturnal/30 text-forsythia',
  },
  {
    title: 'Auto Sync',
    description: 'Keep all databases, caches, and user endpoints synchronized in real time with high-efficiency differential sync and atomic webhook handlers.',
    badge: 'Real-time Sync',
    icon: ArrowPath,
    desktopClass: 'bg-nocturnal/20 text-arctic border border-nocturnal/30 hover:bg-nocturnal/25',
    iconClass: 'bg-nocturnal/30 text-forsythia',
  },
];

function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" className="py-28 md:py-36 bg-gradient-to-b from-noir via-nocturnal/10 to-noir px-6 md:px-8 border-b border-nocturnal/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-jetbrains text-transparent bg-clip-text bg-gradient-to-r from-arctic via-mint to-forsythia mb-4">
            Powerful Features
          </h2>
          <p className="text-mint/75 font-inter text-sm sm:text-base">
            Configure pipelines, sync nodes, and monitor analytics with the ultimate automated control panel.
          </p>
        </div>

        {/* Desktop Bento Grid (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-fr">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeIndex === index;
            const isFirst = index === 0;
            const isSecond = index === 1;
            const isThird = index === 2;
            const isDouble = index === 3;
            const isFifth = index === 4;

            return (
              <article
                key={feature.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative rounded-3xl p-8 transition-all duration-300 transform hover:-translate-y-1 select-none flex flex-col justify-between overflow-hidden cursor-pointer min-h-[350px] ${
                  feature.desktopClass
                } ${isActive ? 'ring-2 ring-forsythia/50 shadow-2xl shadow-forsythia/5' : 'shadow-md'}`}
              >
                {/* Visual Glow for Active Card */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-forsythia/5 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Header line */}
                    <div className="flex justify-between items-center mb-6">
                      <div className={`p-3 rounded-2xl ${feature.iconClass}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-semibold px-2.5 py-1 bg-nocturnal/40 text-mint rounded-full uppercase tracking-wider font-jetbrains border border-mint/5">
                        {feature.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-jetbrains mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-inter leading-relaxed text-mint/80">
                      {feature.description}
                    </p>
                  </div>

                  {/* Graphical SaaS mockups integrated directly inside bento cards */}
                  <div className="mt-6 flex-1 flex items-end w-full">
                    
                    {/* Visual 1: AI Analytics (Bar Chart Mockup) */}
                    {isFirst && (
                      <div className="w-full bg-noir/40 rounded-2xl border border-nocturnal/45 p-4 mt-4 font-inter shadow-inner">
                        {/* Graph Header Metrics */}
                        <div className="flex justify-between items-center mb-3">
                          <div>
                            <span className="text-[9px] text-mint/40 uppercase tracking-wider block">Throughput</span>
                            <span className="text-xs font-bold text-arctic font-mono">1,482/s</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[9px] text-mint/40 uppercase tracking-wider block">Accuracy</span>
                            <span className="text-xs font-bold text-forsythia font-mono">99.98%</span>
                          </div>
                        </div>
                        
                        {/* Bar Grid Visual */}
                        <div className="flex items-end justify-between h-16 gap-1.5 relative pt-4">
                          {/* Background Grid Lines */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                            <div className="border-b border-mint w-full" />
                            <div className="border-b border-mint w-full" />
                            <div className="border-b border-mint w-full" />
                          </div>
                          
                          <div className="w-full bg-nocturnal/30 rounded-t h-[35%] transition-all hover:bg-forsythia/50" />
                          <div className="w-full bg-forsythia/80 rounded-t h-[65%] transition-all hover:bg-forsythia" />
                          <div className="w-full bg-nocturnal/30 rounded-t h-[45%] transition-all hover:bg-forsythia/50" />
                          <div className="w-full bg-saffron/80 rounded-t h-[85%] relative transition-all hover:bg-saffron">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[7px] font-mono font-bold text-saffron">Peak</span>
                          </div>
                          <div className="w-full bg-nocturnal/30 rounded-t h-[50%] transition-all hover:bg-forsythia/50" />
                          <div className="w-full bg-forsythia/80 rounded-t h-[75%] transition-all hover:bg-forsythia" />
                          <div className="w-full bg-nocturnal/30 rounded-t h-[40%] transition-all hover:bg-forsythia/50" />
                        </div>
                      </div>
                    )}

                    {/* Visual 2: Workflow Automation (Node Connection Mockup) */}
                    {isSecond && (
                      <div className="w-full bg-noir/40 rounded-2xl border border-nocturnal/45 p-4 mt-4 flex flex-col gap-2.5 font-sans shadow-inner">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-mint/40 font-mono uppercase">PIPELINE: SALES_ALERT</span>
                          <span className="text-[8px] px-1.5 py-0.5 bg-saffron/10 text-saffron border border-saffron/20 rounded-full font-bold uppercase">Active</span>
                        </div>
                        
                        <div className="flex flex-col gap-2 relative">
                          {/* Glowing vertical connector lines */}
                          <div className="absolute left-[13px] top-[14px] bottom-[14px] w-0.5 bg-gradient-to-b from-forsythia via-saffron to-mint opacity-40" />
                          
                          {/* Node 1 */}
                          <div className="flex items-center gap-2 bg-nocturnal/45 border border-nocturnal/35 p-1.5 rounded-xl pl-3 shadow-sm hover:border-forsythia/35 transition">
                            <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-ping shrink-0" />
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-arctic leading-tight">Stripe Webhook</span>
                              <span className="text-[8px] text-mint/50 font-mono mt-0.5">charge.succeeded</span>
                            </div>
                          </div>

                          {/* Node 2 */}
                          <div className="flex items-center gap-2 bg-nocturnal/45 border border-nocturnal/35 p-1.5 rounded-xl pl-3 shadow-sm hover:border-saffron/35 transition">
                            <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-arctic leading-tight">AI Parser Agent</span>
                              <span className="text-[8px] text-mint/50 font-mono mt-0.5">Extract payload details</span>
                            </div>
                          </div>

                          {/* Node 3 */}
                          <div className="flex items-center gap-2 bg-nocturnal/45 border border-nocturnal/35 p-1.5 rounded-xl pl-3 shadow-sm hover:border-mint/35 transition">
                            <span className="w-1.5 h-1.5 rounded-full bg-mint shrink-0" />
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-arctic leading-tight">Slack Dispatch</span>
                              <span className="text-[8px] text-mint/50 font-mono mt-0.5">Post notification</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: Integrations (Logo connection hubs) */}
                    {isThird && (
                      <div className="w-full bg-noir/40 rounded-2xl border border-nocturnal/45 p-4 mt-4 relative h-[180px] overflow-hidden flex items-center justify-center shadow-inner">
                        {/* Grid background inside */}
                        <div className="absolute inset-0 bg-[radial-gradient(#114C5A_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-20" />
                        
                        {/* Radiating rings */}
                        <div className="absolute w-28 h-28 rounded-full border border-nocturnal/35 animate-pulse" />
                        <div className="absolute w-40 h-40 rounded-full border border-nocturnal/20" />
                        
                        {/* Connector SVG lines to make it look like a network */}
                        <svg className="absolute inset-0 w-full h-full text-nocturnal/40" xmlns="http://www.w3.org/2000/svg">
                          <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                          <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                          <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                          <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
                        </svg>

                        {/* Central AI Flow Hub */}
                        <div className="absolute z-10 w-10 h-10 rounded-full bg-nocturnal border border-forsythia flex items-center justify-center shadow shadow-forsythia/30 animate-pulse">
                          <Cube16Solid className="w-5 h-5 text-forsythia" />
                        </div>
                        
                        {/* Slack Node */}
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-nocturnal/60 border border-nocturnal/40 px-2 py-0.5 rounded-lg shadow text-[9px] text-mint">
                          <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                          <span>Slack</span>
                        </div>

                        {/* AWS Postgres Node */}
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-nocturnal/60 border border-nocturnal/40 px-2 py-0.5 rounded-lg shadow text-[9px] text-mint">
                          <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                          <span>Postgres</span>
                        </div>

                        {/* Webhook Node */}
                        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1 bg-nocturnal/60 border border-nocturnal/40 px-2 py-0.5 rounded-lg shadow text-[9px] text-mint">
                          <span className="w-1.5 h-1.5 rounded-full bg-forsythia" />
                          <span>Webhooks</span>
                        </div>

                        {/* HubSpot Node */}
                        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 bg-nocturnal/60 border border-nocturnal/40 px-2 py-0.5 rounded-lg shadow text-[9px] text-mint">
                          <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                          <span>HubSpot</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 4: Smart Search (Mock Semantic Query with tag results) */}
                    {isDouble && (
                      <div className="hidden lg:flex flex-col gap-2.5 w-full bg-noir/40 rounded-2xl border border-nocturnal/45 p-4 mt-4 font-sans shadow-inner">
                        {/* Search Bar Input */}
                        <div className="flex items-center gap-2.5 bg-nocturnal/50 px-3 py-2 rounded-xl border border-nocturnal/65 shadow-inner">
                          <Search className="w-3.5 h-3.5 text-forsythia shrink-0" />
                          <span className="text-[10px] text-mint/80 font-mono">search logs for error 500</span>
                          <span className="ml-auto text-[8px] bg-noir/80 px-1 py-0.5 rounded text-mint/30 border border-nocturnal/60">ESC</span>
                        </div>

                        {/* Search Results List */}
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[8px] text-mint/40 font-jetbrains uppercase tracking-wider mb-0.5">Semantic Results</span>
                          
                          <div className="flex items-center justify-between bg-nocturnal/40 border border-nocturnal/35 p-1.5 rounded-lg hover:border-forsythia/35 transition">
                            <div className="flex flex-col">
                              <span className="text-[10px] text-arctic font-mono leading-tight">Webhook failed: stripe_dispatch (line 42)</span>
                              <span className="text-[8px] text-mint/50 mt-0.5 font-sans">stripe payment retry...</span>
                            </div>
                            <span className="text-[8px] font-bold text-forsythia bg-forsythia/10 px-1.5 py-0.5 rounded border border-forsythia/20 font-mono">98% match</span>
                          </div>

                          <div className="flex items-center justify-between bg-nocturnal/20 border border-nocturnal/20 p-1.5 rounded-lg hover:border-nocturnal/40 transition">
                            <div className="flex flex-col">
                              <span className="text-[10px] text-arctic/85 font-mono leading-tight">Timeout error on database reconnect</span>
                              <span className="text-[8px] text-mint/40 mt-0.5 font-sans">database sync retry...</span>
                            </div>
                            <span className="text-[8px] font-bold text-mint bg-nocturnal/40 px-1.5 py-0.5 rounded border border-nocturnal/30 font-mono">84% match</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Visual 5: Auto Sync (Status progress panel) */}
                    {isFifth && (
                      <div className="w-full bg-noir/40 rounded-2xl border border-nocturnal/45 p-4 mt-4 flex flex-col gap-3 font-mono shadow-inner">
                        <div className="flex justify-between items-center text-[9px]">
                          <span className="text-mint/40">SYNCING STATE</span>
                          <span className="text-forsythia animate-pulse flex items-center gap-1">
                            <span className="w-1 h-1 bg-forsythia rounded-full inline-block animate-ping" />
                            LIVE SYNCING
                          </span>
                        </div>

                        {/* Sync Metrics */}
                        <div className="grid grid-cols-2 gap-2 text-left bg-nocturnal/35 border border-nocturnal/35 p-2 rounded-lg">
                          <div>
                            <span className="text-[7px] text-mint/30 uppercase block">Speed</span>
                            <span className="text-[10px] font-bold text-arctic font-mono">4.2 MB/s</span>
                          </div>
                          <div>
                            <span className="text-[7px] text-mint/30 uppercase block">Latency</span>
                            <span className="text-[10px] font-bold text-mint font-mono">0.04s</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between text-[9px] text-mint/60">
                            <span>postgres_prod ─&gt; elastic</span>
                            <span className="text-forsythia font-bold">98.2%</span>
                          </div>
                          <div className="w-full h-1.5 bg-noir/65 rounded-full overflow-hidden border border-nocturnal/50">
                            <div className="h-full bg-gradient-to-r from-forsythia via-saffron to-forsythia rounded-full w-[98%] animate-pulse" />
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Micro-interaction indicator */}
                  <div className="mt-4 flex items-center justify-end">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider transition-opacity duration-200 font-jetbrains ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      } text-forsythia`}
                    >
                      Active Card <ChevronUpSolid className="w-3.5 h-3.5 rotate-90" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile Accordion (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col gap-4">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            const isOpen = activeIndex === index;

            return (
              <div
                key={feature.title}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-nocturnal/30 border-nocturnal/50 shadow-lg shadow-forsythia/5'
                    : 'bg-nocturnal/15 border-nocturnal/30 hover:bg-nocturnal/20'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isOpen ? 'bg-forsythia text-noir' : 'bg-nocturnal/40 text-mint'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold font-jetbrains text-base text-arctic">
                      {feature.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-forsythia animate-pulse" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-mint/50" />
                    )}
                  </div>
                </button>

                {/* Accordion Content via CSS Grid transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 border-t border-mint/10 mt-1">
                      <p className="text-sm font-inter text-mint/80 leading-relaxed mb-3">
                        {feature.description}
                      </p>
                      <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-nocturnal/50 text-mint font-jetbrains border border-mint/5">
                        {feature.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
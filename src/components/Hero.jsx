import { useEffect, useState, useRef, useCallback } from 'react';
import { Cube16Solid, ArrowTrendingUp, LinkSolid, Link, Cog8Tooth } from './Icons';
import useInView from '../hooks/useInView';
import useCountUp from '../hooks/useCountUp';
import useTypewriter from '../hooks/useTypewriter';
import ParticleField from './ParticleField';

/** Live activity feed messages */
const activityFeed = [
  { icon: '✓', text: 'Webhook received', time: '0.3s ago', color: 'text-mint' },
  { icon: '⚡', text: 'Agent parsed payload', time: '1.2s ago', color: 'text-forsythia' },
  { icon: '↻', text: 'Database sync complete', time: '2.1s ago', color: 'text-saffron' },
  { icon: '◉', text: 'Slack notification sent', time: '3.8s ago', color: 'text-mint' },
  { icon: '✓', text: 'Pipeline health: OK', time: '5.0s ago', color: 'text-forsythia' },
];

function Hero() {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [dashboardRef, dashboardInView] = useInView({ threshold: 0.2 });
  const [activeActivity, setActiveActivity] = useState(0);
  const dashboardCardRef = useRef(null);

  const efficiency = useCountUp(98, { duration: 2000, inView: dashboardInView });
  const integrations = useCountUp(120, { duration: 2000, inView: dashboardInView });
  const [simStatus, setSimStatus] = useState('idle');

  const triggerSimulation = () => {
    if (simStatus !== 'idle') return;
    setSimStatus('webhook');
    setTimeout(() => {
      setSimStatus('parsing');
      setTimeout(() => {
        setSimStatus('dispatching');
        setTimeout(() => {
          setSimStatus('done');
          setTimeout(() => {
            setSimStatus('idle');
          }, 1500);
        }, 1200);
      }, 1200);
    }, 1200);
  };

  // Typewriter for headline
  const { displayText, cursor } = useTypewriter(
    ['Automate Your Business Using Agentic AI'],
    { typeSpeed: 50, pauseTime: 3000, inView: sectionInView }
  );

  // Cycle activity feed
  useEffect(() => {
    if (!dashboardInView) return;
    const interval = setInterval(() => {
      setActiveActivity((prev) => (prev + 1) % activityFeed.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [dashboardInView]);

  // 3D tilt effect for dashboard card
  const handleTilt = useCallback((e) => {
    const el = dashboardCardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleTiltLeave = useCallback(() => {
    const el = dashboardCardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center bg-noir py-16 md:py-24 overflow-hidden">
      {/* Particle Field Canvas Background */}
      <div className="absolute inset-0 -z-20">
        <ParticleField />
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-nocturnal/10 rounded-full blur-3xl -z-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-forsythia/5 rounded-full blur-3xl -z-10 animate-float-delayed" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center px-6 md:px-8 w-full relative z-10">

        {/* Left Side: Content (Spans 5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nocturnal/30 text-mint text-xs font-semibold uppercase tracking-wider mb-6 border border-nocturnal/50 animate-on-scroll animate-glow-pulse ${sectionInView ? 'in-view' : ''}`}>
            <Cube16Solid className="w-4 h-4 text-forsythia animate-pulse" />
            <span className="font-jetbrains">AIFlow Systems</span>
          </div>

          {/* Typewriter Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-jetbrains leading-[1.1] text-arctic tracking-tight min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]">
            <span className={`animate-on-scroll stagger-1 ${sectionInView ? 'in-view' : ''}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint via-saffron to-forsythia">
                {displayText}
              </span>
              <span className="text-forsythia/80 animate-pulse ml-0.5">{cursor}</span>
            </span>
          </h1>

          <p className={`text-mint/80 mt-6 text-base sm:text-lg font-inter max-w-lg leading-relaxed animate-on-scroll stagger-4 ${sectionInView ? 'in-view' : ''}`}>
            Unleash enterprise efficiency with AIFlow. Automate complex pipelines, sync multi-app data, and gain real-time predictive analytics instantly.
          </p>

          <div className={`flex flex-wrap gap-4 mt-8 font-inter w-full sm:w-auto animate-on-scroll stagger-5 ${sectionInView ? 'in-view' : ''}`}>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-forsythia text-noir font-bold px-6 py-4 rounded-xl hover:bg-saffron hover:shadow-lg hover:shadow-forsythia/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-200 holographic-shimmer"
            >
              <span>Start Free</span>
              <LinkSolid className="w-4 h-4" />
            </a>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-mint/20 text-arctic hover:bg-mint/10 hover:border-mint/40 font-semibold px-6 py-4 rounded-xl transition-all duration-200"
            >
              <span>Live Demo</span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual Workflow Builder Dashboard (Spans 7 cols on desktop) */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <div className={`relative w-full max-w-2xl group animate-on-scroll-scale stagger-3 ${sectionInView ? 'in-view' : ''}`}>
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-forsythia to-saffron rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />

            {/* Visual SaaS App Canvas with 3D Tilt */}
            <div
              ref={(el) => {
                dashboardRef.current = el;
                dashboardCardRef.current = el;
              }}
              onMouseMove={handleTilt}
              onMouseLeave={handleTiltLeave}
              className="relative bg-noir rounded-3xl shadow-2xl p-6 sm:p-8 border border-nocturnal/30 text-arctic overflow-hidden w-full holographic-shimmer"
              style={{
                transition: 'transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)',
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
            >

              {/* Window Controls & Tab Bar */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-nocturnal/20">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-saffron hover:brightness-125 transition-all cursor-pointer" />
                  <span className="w-3 h-3 rounded-full bg-forsythia hover:brightness-125 transition-all cursor-pointer" />
                  <span className="w-3 h-3 rounded-full bg-mint hover:brightness-125 transition-all cursor-pointer" />
                </div>
                <div className="flex gap-4 text-xs font-jetbrains text-mint/60">
                  <span className="text-forsythia border-b-2 border-forsythia pb-4 px-1">Flowchart</span>
                  <span className="pb-4 px-1 cursor-pointer hover:text-arctic transition-colors">Logs</span>
                  <span className="pb-4 px-1 cursor-pointer hover:text-arctic transition-colors">Variables</span>
                </div>
                <div className="text-[10px] font-mono text-mint/40">aiflow_builder.exe</div>
              </div>

              {/* Simulator Action Row */}
              <div className="flex justify-between items-center mb-6 bg-nocturnal/15 border border-nocturnal/30 px-4 py-2.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${
                    simStatus === 'idle' ? 'bg-mint/40' :
                    simStatus === 'done' ? 'bg-mint animate-pulse' :
                    'bg-forsythia animate-ping'
                  }`} />
                  <span className="text-[10px] font-jetbrains font-bold uppercase tracking-wider text-arctic/85">
                    {simStatus === 'idle' && 'Pipeline Simulator: Idle'}
                    {simStatus === 'webhook' && 'Step 1: Webhook payload received'}
                    {simStatus === 'parsing' && 'Step 2: AI Parsing data structures'}
                    {simStatus === 'dispatching' && 'Step 3: Database dispatch & sync'}
                    {simStatus === 'done' && 'Pipeline Run: Success (0.4s)'}
                  </span>
                </div>
                <button
                  onClick={triggerSimulation}
                  disabled={simStatus !== 'idle'}
                  className={`px-3 py-1 rounded-lg border text-[9px] font-jetbrains font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    simStatus !== 'idle'
                      ? 'bg-nocturnal/25 border-nocturnal/20 text-mint/30 cursor-not-allowed'
                      : 'bg-forsythia/15 border-forsythia/40 text-forsythia hover:bg-forsythia hover:text-noir'
                  }`}
                >
                  {simStatus === 'idle' ? '⚡ Trigger Run' : 'Simulating...'}
                </button>
              </div>

              {/* Dynamic Flowchart Nodes */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative py-6">

                {/* Node 1: Webhook Trigger */}
                <div className={`flex flex-col items-center p-4 rounded-2xl w-44 shadow-md z-10 hover:border-mint/40 hover:shadow-lg transition-all duration-500 ${
                  simStatus === 'webhook'
                    ? 'bg-nocturnal/45 border-2 border-mint shadow-[0_0_15px_rgba(217,232,226,0.6)] scale-105'
                    : simStatus === 'done'
                    ? 'bg-nocturnal/20 border-2 border-mint shadow-md'
                    : 'bg-nocturnal/20 border border-mint/20'
                } ${dashboardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.3s' }}>
                  <div className="p-2.5 bg-nocturnal text-mint rounded-xl mb-3">
                    <Link className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-jetbrains text-arctic text-center">Incoming Webhook</span>
                  <span className="text-[9px] text-mint/50 font-mono mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-mint animate-pulse" />
                    Status: Listening
                  </span>
                </div>

                {/* Connector Line 1 — animated SVG dash */}
                <div className="h-8 w-0.5 md:h-0.5 md:w-16 relative shrink-0 overflow-visible">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <line x1="50%" y1="0" x2="50%" y2="100%" className="md:hidden"
                      stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 3">
                      {dashboardInView && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />}
                    </line>
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="hidden md:inline"
                      stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 3">
                      {dashboardInView && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />}
                    </line>
                    <defs>
                      <linearGradient id="lineGrad1">
                        <stop offset="0%" stopColor="rgba(217,232,226,0.3)" />
                        <stop offset="100%" stopColor="rgba(255,200,1,0.5)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Node 2: Agentic Engine */}
                <div className={`flex flex-col items-center p-4 rounded-2xl w-44 shadow-lg z-10 hover:shadow-forsythia/20 transition-all duration-500 ${
                  simStatus === 'parsing'
                    ? 'bg-nocturnal/50 border-2 border-forsythia shadow-[0_0_20px_rgba(255,200,1,0.7)] scale-105'
                    : simStatus === 'done'
                    ? 'bg-nocturnal/30 border-2 border-forsythia shadow-lg'
                    : 'bg-nocturnal/30 border border-forsythia/40'
                } ${dashboardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.5s' }}>
                  <div className="p-2.5 bg-forsythia text-noir rounded-xl mb-3">
                    <Cube16Solid className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-jetbrains text-forsythia text-center">AI Agent Parser</span>
                  <span className="text-[9px] text-mint/70 font-mono mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-forsythia animate-ping" />
                    Prompt Token: active
                  </span>
                </div>

                {/* Connector Line 2 */}
                <div className="h-8 w-0.5 md:h-0.5 md:w-16 relative shrink-0 overflow-visible">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <line x1="50%" y1="0" x2="50%" y2="100%" className="md:hidden"
                      stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 3">
                      {dashboardInView && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />}
                    </line>
                    <line x1="0" y1="50%" x2="100%" y2="50%" className="hidden md:inline"
                      stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 3">
                      {dashboardInView && <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.5s" repeatCount="indefinite" />}
                    </line>
                    <defs>
                      <linearGradient id="lineGrad2">
                        <stop offset="0%" stopColor="rgba(255,200,1,0.5)" />
                        <stop offset="100%" stopColor="rgba(255,153,50,0.5)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Node 3: Sync Actions */}
                <div className={`flex flex-col items-center p-4 rounded-2xl w-44 shadow-md z-10 hover:border-mint/40 hover:shadow-lg transition-all duration-500 ${
                  simStatus === 'dispatching'
                    ? 'bg-nocturnal/45 border-2 border-saffron shadow-[0_0_15px_rgba(255,153,50,0.6)] scale-105'
                    : simStatus === 'done'
                    ? 'bg-nocturnal/20 border-2 border-saffron shadow-md'
                    : 'bg-nocturnal/20 border border-mint/20'
                } ${dashboardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.7s' }}>
                  <div className="p-2.5 bg-saffron text-noir rounded-xl mb-3">
                    <Cog8Tooth className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-jetbrains text-arctic text-center">Database Dispatch</span>
                  <span className="text-[9px] text-mint/50 font-mono mt-1">Write Rate: 1.2s</span>
                </div>

              </div>

              {/* Live Activity Feed Ticker */}
              <div className={`mt-4 mb-2 transition-all duration-700 ${dashboardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.8s' }}>
                <div className="flex items-center gap-2 bg-nocturnal/20 border border-nocturnal/30 px-3 py-2 rounded-xl overflow-hidden">
                  <span className="w-1.5 h-1.5 rounded-full bg-forsythia animate-ping shrink-0" />
                  <div className="relative h-5 flex-1 overflow-hidden">
                    {activityFeed.map((item, i) => (
                      <div
                        key={i}
                        className={`absolute inset-0 flex items-center gap-2 text-[10px] font-mono transition-all duration-500 ${
                          i === activeActivity
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-3'
                        }`}
                      >
                        <span className={item.color}>{item.icon}</span>
                        <span className="text-arctic/80">{item.text}</span>
                        <span className="text-mint/30 ml-auto">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Real-time Analytics Preview Widget */}
              <div className={`mt-4 pt-6 border-t border-nocturnal/20 grid grid-cols-2 gap-6 items-center transition-all duration-700 ${dashboardInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.9s' }}>
                <div className="flex items-center gap-3 bg-nocturnal/15 border border-mint/10 p-3 rounded-xl hover:border-mint/20 transition-all">
                  <div className="p-2 bg-nocturnal text-saffron rounded-lg">
                    <ArrowTrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mint/50 font-jetbrains uppercase tracking-wider">Speedup</div>
                    <div className="text-sm font-bold text-arctic font-mono">{efficiency}% Auto-Efficiency</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-nocturnal/15 border border-mint/10 p-3 rounded-xl hover:border-mint/20 transition-all">
                  <div className="p-2 bg-nocturnal text-forsythia rounded-lg">
                    <LinkSolid className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mint/50 font-jetbrains uppercase tracking-wider">Integrations</div>
                    <div className="text-sm font-bold text-arctic font-mono">{integrations}+ Active Hubs</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
import { Cube16Solid, ArrowTrendingUp, LinkSolid, Link, Cog8Tooth } from './Icons';

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-noir py-16 md:py-24 overflow-hidden">
      {/* Decorative Grid and Dot Backgrounds using palette colors */}
      <div className="absolute inset-0 bg-[radial-gradient(#114C5A_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 -z-20" />
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-nocturnal/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-forsythia/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center px-6 md:px-8 w-full relative z-10">
        
        {/* Left Side: Content (Spans 5 cols on desktop) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nocturnal/30 text-mint text-xs font-semibold uppercase tracking-wider mb-6 border border-nocturnal/50">
            <Cube16Solid className="w-4 h-4 text-forsythia animate-pulse" />
            <span className="font-jetbrains">AIFlow Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-jetbrains leading-[1.1] text-arctic tracking-tight">
            Automate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint via-saffron to-forsythia">
              Your Business
            </span> <br />
            Using Agentic AI
          </h1>

          <p className="text-mint/80 mt-6 text-base sm:text-lg font-inter max-w-lg leading-relaxed">
            Unleash enterprise efficiency with AIFlow. Automate complex pipelines, sync multi-app data, and gain real-time predictive analytics instantly.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 font-inter w-full sm:w-auto">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-forsythia text-noir font-bold px-6 py-4 rounded-xl hover:bg-saffron hover:shadow-lg hover:shadow-forsythia/20 hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm transition-all duration-200"
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
          <div className="relative w-full max-w-2xl group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-forsythia to-saffron rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
            
            {/* Visual SaaS App Canvas */}
            <div className="relative bg-noir rounded-3xl shadow-2xl p-6 sm:p-8 border border-nocturnal/30 text-arctic overflow-hidden w-full">
              
              {/* Window Controls & Tab Bar */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-nocturnal/20">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-saffron" />
                  <span className="w-3 h-3 rounded-full bg-forsythia" />
                  <span className="w-3 h-3 rounded-full bg-mint" />
                </div>
                <div className="flex gap-4 text-xs font-jetbrains text-mint/60">
                  <span className="text-forsythia border-b-2 border-forsythia pb-4 px-1">Flowchart</span>
                  <span className="pb-4 px-1 cursor-pointer hover:text-arctic transition-colors">Logs</span>
                  <span className="pb-4 px-1 cursor-pointer hover:text-arctic transition-colors">Variables</span>
                </div>
                <div className="text-[10px] font-mono text-mint/40">aiflow_builder.exe</div>
              </div>

              {/* Dynamic Flowchart Nodes */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 relative py-6">
                
                {/* Node 1: Webhook Trigger */}
                <div className="flex flex-col items-center bg-nocturnal/20 border border-mint/20 p-4 rounded-2xl w-44 shadow-md z-10 hover:border-mint/40 transition">
                  <div className="p-2.5 bg-nocturnal text-mint rounded-xl mb-3">
                    <Link className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-jetbrains text-arctic text-center">Incoming Webhook</span>
                  <span className="text-[9px] text-mint/50 font-mono mt-1">Status: Listening</span>
                </div>

                {/* Connector Line 1 */}
                <div className="h-8 w-0.5 md:h-0.5 md:w-12 bg-gradient-to-r from-mint/30 to-forsythia/30 relative flex items-center justify-center shrink-0">
                  <span className="absolute w-2 h-2 rounded-full bg-forsythia animate-ping" />
                </div>

                {/* Node 2: Agentic Engine */}
                <div className="flex flex-col items-center bg-nocturnal/30 border-2 border-forsythia p-4 rounded-2xl w-44 shadow-lg z-10 hover:shadow-forsythia/10 transition">
                  <div className="p-2.5 bg-forsythia text-noir rounded-xl mb-3">
                    <Cube16Solid className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-jetbrains text-forsythia text-center">AI Agent Parser</span>
                  <span className="text-[9px] text-mint/70 font-mono mt-1">Prompt Token: active</span>
                </div>

                {/* Connector Line 2 */}
                <div className="h-8 w-0.5 md:h-0.5 md:w-12 bg-gradient-to-r from-forsythia/30 to-saffron/30 relative flex items-center justify-center shrink-0">
                  <span className="absolute w-2 h-2 rounded-full bg-saffron animate-ping" />
                </div>

                {/* Node 3: Sync Actions */}
                <div className="flex flex-col items-center bg-nocturnal/20 border border-mint/20 p-4 rounded-2xl w-44 shadow-md z-10 hover:border-mint/40 transition">
                  <div className="p-2.5 bg-saffron text-noir rounded-xl mb-3">
                    <Cog8Tooth className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold font-jetbrains text-arctic text-center">Database Dispatch</span>
                  <span className="text-[9px] text-mint/50 font-mono mt-1">Write Rate: 1.2s</span>
                </div>

              </div>

              {/* Bottom Real-time Analytics Preview Widget */}
              <div className="mt-8 pt-6 border-t border-nocturnal/20 grid grid-cols-2 gap-6 items-center">
                <div className="flex items-center gap-3 bg-nocturnal/15 border border-mint/10 p-3 rounded-xl">
                  <div className="p-2 bg-nocturnal text-saffron rounded-lg">
                    <ArrowTrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mint/50 font-jetbrains uppercase tracking-wider">Speedup</div>
                    <div className="text-sm font-bold text-arctic font-mono">98% Auto-Efficiency</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-nocturnal/15 border border-mint/10 p-3 rounded-xl">
                  <div className="p-2 bg-nocturnal text-forsythia rounded-lg">
                    <LinkSolid className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-mint/50 font-jetbrains uppercase tracking-wider">Integrations</div>
                    <div className="text-sm font-bold text-arctic font-mono">120+ Active Hubs</div>
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
import { useEffect } from 'react';
import { pricing, tariffs } from '../data/pricing';
import { LinkSolid } from './Icons';

const currencySymbols = {
  USD: '$',
  INR: '₹',
  EUR: '€',
};

function Pricing() {
  console.log('Pricing component rendered (mount/update).');

  useEffect(() => {
    let currentCurrency = 'USD';
    let currentAnnual = false;

    const btnMonthly = document.getElementById('pricing-btn-monthly');
    const btnAnnual = document.getElementById('pricing-btn-annual');
    const currencyButtons = {
      USD: document.getElementById('pricing-btn-usd'),
      INR: document.getElementById('pricing-btn-inr'),
      EUR: document.getElementById('pricing-btn-eur'),
    };

    const priceElements = {
      Free: document.getElementById('price-Free'),
      Pro: document.getElementById('price-Pro'),
      Enterprise: document.getElementById('price-Enterprise'),
    };

    const periodElements = document.querySelectorAll('.pricing-period-label');

    const updatePrices = () => {
      const symbol = currencySymbols[currentCurrency];
      const discount = currentAnnual ? 0.8 : 1.0;

      Object.keys(pricing).forEach((tier) => {
        const baseRate = pricing[tier];
        const tariff = tariffs[currentCurrency];
        const finalPrice = Math.round(baseRate * tariff * discount);
        
        const priceEl = priceElements[tier];
        if (priceEl) {
          priceEl.textContent = `${symbol}${finalPrice}`;
        }
      });

      periodElements.forEach((el) => {
        el.textContent = currentAnnual ? 'per year' : 'per month';
      });
    };

    const updateBillingUI = () => {
      if (currentAnnual) {
        btnAnnual.classList.remove('bg-arctic/5', 'text-mint/60');
        btnAnnual.classList.add('bg-forsythia', 'text-noir');
        btnMonthly.classList.remove('bg-forsythia', 'text-noir');
        btnMonthly.classList.add('bg-arctic/5', 'text-mint/60');
      } else {
        btnMonthly.classList.remove('bg-arctic/5', 'text-mint/60');
        btnMonthly.classList.add('bg-forsythia', 'text-noir');
        btnAnnual.classList.remove('bg-forsythia', 'text-noir');
        btnAnnual.classList.add('bg-arctic/5', 'text-mint/60');
      }
    };

    const updateCurrencyUI = () => {
      Object.keys(currencyButtons).forEach((currency) => {
        const btn = currencyButtons[currency];
        if (!btn) return;
        if (currency === currentCurrency) {
          btn.classList.remove('border-mint/15', 'text-mint/60', 'bg-transparent');
          btn.classList.add('border-forsythia', 'text-forsythia', 'bg-nocturnal/20');
        } else {
          btn.classList.remove('border-forsythia', 'text-forsythia', 'bg-nocturnal/20');
          btn.classList.add('border-mint/15', 'text-mint/60', 'bg-transparent');
        }
      });
    };

    const handleMonthlyClick = () => {
      if (currentAnnual === false) return;
      currentAnnual = false;
      updateBillingUI();
      updatePrices();
    };

    const handleAnnualClick = () => {
      if (currentAnnual === true) return;
      currentAnnual = true;
      updateBillingUI();
      updatePrices();
    };

    const handleCurrencyClick = (currency) => {
      if (currentCurrency === currency) return;
      currentCurrency = currency;
      updateCurrencyUI();
      updatePrices();
    };

    btnMonthly?.addEventListener('click', handleMonthlyClick);
    btnAnnual?.addEventListener('click', handleAnnualClick);

    const currencyCleanups = Object.keys(currencyButtons).map((currency) => {
      const btn = currencyButtons[currency];
      const handler = () => handleCurrencyClick(currency);
      btn?.addEventListener('click', handler);
      return { btn, handler };
    });

    updateBillingUI();
    updateCurrencyUI();
    updatePrices();

    return () => {
      btnMonthly?.removeEventListener('click', handleMonthlyClick);
      btnAnnual?.removeEventListener('click', handleAnnualClick);
      currencyCleanups.forEach(({ btn, handler }) => {
        btn?.removeEventListener('click', handler);
      });
    };
  }, []);

  return (
    <section id="pricing" className="py-28 md:py-36 bg-noir text-arctic relative overflow-hidden border-b border-nocturnal/30">
      {/* Soft gradient divider at top to decongest */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-nocturnal/30 to-transparent" />

      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nocturnal/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-jetbrains text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron mb-4">
            Pricing Plans
          </h2>
          <p className="text-mint/70 font-inter text-sm sm:text-base">
            Select a plan tailored to your execution scale. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Billing & Currency Control Panel (Designed to not trigger state reflows) */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 w-full">
          
          {/* Billing Cycle Toggle */}
          <div className="bg-nocturnal/30 p-1.5 rounded-2xl border border-nocturnal/45 flex items-center shrink-0">
            <button
              id="pricing-btn-monthly"
              className="px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-150 cursor-pointer font-inter"
            >
              Monthly
            </button>
            <button
              id="pricing-btn-annual"
              className="px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-150 flex items-center gap-1.5 cursor-pointer font-inter"
            >
              <span>Annual</span>
              <span className="text-[10px] bg-saffron text-noir font-bold px-1.5 py-0.5 rounded">
                -20%
              </span>
            </button>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="pricing-btn-usd"
              className="border border-mint/15 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer font-inter"
            >
              USD ($)
            </button>
            <button
              id="pricing-btn-inr"
              className="border border-mint/15 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer font-inter"
            >
              INR (₹)
            </button>
            <button
              id="pricing-btn-eur"
              className="border border-mint/15 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer font-inter"
            >
              EUR (€)
            </button>
          </div>

        </div>

        {/* Prevent overlap margin gap */}
        <div className="h-4" />

        {/* Pricing Cards Grid */}
        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-stretch auto-rows-fr w-full">
          
          {/* Free Tier Card */}
          <article className="bg-nocturnal/15 rounded-3xl border border-nocturnal/30 p-8 flex flex-col justify-between hover:border-forsythia/30 hover:shadow-2xl hover:shadow-forsythia/5 transition duration-300 relative min-h-[460px]">
            <div>
              <span className="text-xs font-semibold px-3 py-1 bg-nocturnal/45 text-mint rounded-full uppercase tracking-wider font-jetbrains border border-mint/5">
                Explorer
              </span>
              <h3 className="text-2xl font-bold font-jetbrains text-arctic mt-4">Free</h3>
              <p className="text-mint/60 text-sm mt-2 leading-relaxed font-inter">
                Perfect for developers exploring automated task scheduling and API triggers.
              </p>
              
              <div className="my-8 flex flex-col justify-start">
                <span id="price-Free" className="text-4xl sm:text-5xl font-bold font-jetbrains text-arctic">
                  $0
                </span>
                <span className="pricing-period-label text-[10px] uppercase tracking-wider text-mint/40 font-jetbrains mt-1">
                  per month
                </span>
              </div>

              <ul className="space-y-3.5 border-t border-nocturnal/30 pt-6 text-sm font-inter text-mint/80">
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> 5 automated execution flows
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> Basic execution logs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> 2 live app connectors
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full flex items-center justify-center gap-2 bg-nocturnal/40 hover:bg-nocturnal/60 text-arctic border border-nocturnal/50 font-semibold py-3.5 rounded-xl transition duration-200 cursor-pointer font-inter">
                <span>Start Free</span>
                <LinkSolid className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Pro Tier Card (Featured) */}
          <article className="bg-nocturnal/25 rounded-3xl border-2 border-forsythia p-8 flex flex-col justify-between hover:shadow-3xl hover:shadow-forsythia/10 transition duration-300 relative min-h-[460px] transform md:-translate-y-2">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-forsythia text-noir font-bold font-mono text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-semibold px-3 py-1 bg-forsythia/25 text-forsythia rounded-full uppercase tracking-wider font-jetbrains">
                Growth
              </span>
              <h3 className="text-2xl font-bold font-jetbrains text-arctic mt-4">Pro</h3>
              <p className="text-mint/80 text-sm mt-2 leading-relaxed font-inter">
                Ideal for growing startups and teams that require production-grade performance.
              </p>

              <div className="my-8 flex flex-col justify-start">
                <span id="price-Pro" className="text-4xl sm:text-5xl font-bold font-jetbrains text-forsythia">
                  $29
                </span>
                <span className="pricing-period-label text-[10px] uppercase tracking-wider text-mint/50 font-jetbrains mt-1">
                  per month
                </span>
              </div>

              <ul className="space-y-3.5 border-t border-forsythia/10 pt-6 text-sm font-inter text-arctic/90">
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> Unlimited workflow triggers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> Predictive ML analytics
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> 120+ active integration hooks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> Custom multi-agent structures
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full flex items-center justify-center gap-2 bg-forsythia hover:bg-saffron text-noir font-bold py-3.5 rounded-xl transition duration-200 shadow-lg cursor-pointer font-inter">
                <span>Go Pro</span>
                <LinkSolid className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* Enterprise Tier Card */}
          <article className="bg-nocturnal/15 rounded-3xl border border-nocturnal/30 p-8 flex flex-col justify-between hover:border-forsythia/30 hover:shadow-2xl hover:shadow-forsythia/5 transition duration-300 relative min-h-[460px]">
            <div>
              <span className="text-xs font-semibold px-3 py-1 bg-nocturnal/45 text-mint rounded-full uppercase tracking-wider font-jetbrains border border-mint/5">
                Enterprise
              </span>
              <h3 className="text-2xl font-bold font-jetbrains text-arctic mt-4">Enterprise</h3>
              <p className="text-mint/60 text-sm mt-2 leading-relaxed font-inter">
                Configured for large-scale operations requiring customized pipelines and security locks.
              </p>

              <div className="my-8 flex flex-col justify-start">
                <span id="price-Enterprise" className="text-4xl sm:text-5xl font-bold font-jetbrains text-arctic">
                  $99
                </span>
                <span className="pricing-period-label text-[10px] uppercase tracking-wider text-mint/40 font-jetbrains mt-1">
                  per month
                </span>
              </div>

              <ul className="space-y-3.5 border-t border-nocturnal/30 pt-6 text-sm font-inter text-mint/80">
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> Dedicated execution threads
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> Self-hosted database connectors
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> SLA response times &lt; 15 mins
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forsythia font-bold">✓</span> Custom compliance auditing
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full flex items-center justify-center gap-2 bg-nocturnal/40 hover:bg-nocturnal/60 text-arctic border border-nocturnal/50 font-semibold py-3.5 rounded-xl transition duration-200 cursor-pointer font-inter">
                <span>Contact Sales</span>
                <LinkSolid className="w-4 h-4" />
              </button>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}

export default Pricing;
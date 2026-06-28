import { useState, useEffect } from 'react';
import { pricing, tariffs } from '../data/pricing';
import { LinkSolid } from './Icons';
import useInView from '../hooks/useInView';

const currencySymbols = {
  USD: '$',
  INR: '₹',
  EUR: '€',
};

const currencies = ['USD', 'INR', 'EUR'];

function Pricing() {
  const [currency, setCurrency] = useState('USD');
  const [isAnnual, setIsAnnual] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });

  // Smooth price transition
  const triggerPriceAnimation = (callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  };

  const getPrice = (tier) => {
    const baseRate = pricing[tier];
    const tariff = tariffs[currency];
    const discount = isAnnual ? 0.8 : 1.0;
    return Math.round(baseRate * tariff * discount);
  };

  const symbol = currencySymbols[currency];
  const periodLabel = isAnnual ? 'per year' : 'per month';

  const tiers = [
    {
      name: 'Free',
      badge: 'Explorer',
      description: 'Perfect for developers exploring automated task scheduling and API triggers.',
      features: [
        '5 automated execution flows',
        'Basic execution logs',
        '2 live app connectors',
      ],
      cta: 'Start Free',
      featured: false,
      priceColor: 'text-arctic',
      badgeClass: 'bg-nocturnal/45 text-mint border border-mint/5',
      cardClass: 'bg-nocturnal/15 border border-nocturnal/30 hover:border-forsythia/30 hover:shadow-2xl hover:shadow-forsythia/5',
      btnClass: 'bg-nocturnal/40 hover:bg-nocturnal/60 text-arctic border border-nocturnal/50',
      featureTextClass: 'text-mint/80',
      descClass: 'text-mint/60',
    },
    {
      name: 'Pro',
      badge: 'Growth',
      description: 'Ideal for growing startups and teams that require production-grade performance.',
      features: [
        'Unlimited workflow triggers',
        'Predictive ML analytics',
        '120+ active integration hooks',
        'Custom multi-agent structures',
      ],
      cta: 'Go Pro',
      featured: true,
      priceColor: 'text-forsythia',
      badgeClass: 'bg-forsythia/25 text-forsythia',
      cardClass: 'bg-nocturnal/25 border-2 border-forsythia hover:shadow-3xl hover:shadow-forsythia/10 transform md:-translate-y-2',
      btnClass: 'bg-forsythia hover:bg-saffron text-noir font-bold shadow-lg',
      featureTextClass: 'text-arctic/90',
      descClass: 'text-mint/80',
    },
    {
      name: 'Enterprise',
      badge: 'Enterprise',
      description: 'Configured for large-scale operations requiring customized pipelines and security locks.',
      features: [
        'Dedicated execution threads',
        'Self-hosted database connectors',
        'SLA response times < 15 mins',
        'Custom compliance auditing',
      ],
      cta: 'Contact Sales',
      featured: false,
      priceColor: 'text-arctic',
      badgeClass: 'bg-nocturnal/45 text-mint border border-mint/5',
      cardClass: 'bg-nocturnal/15 border border-nocturnal/30 hover:border-forsythia/30 hover:shadow-2xl hover:shadow-forsythia/5',
      btnClass: 'bg-nocturnal/40 hover:bg-nocturnal/60 text-arctic border border-nocturnal/50',
      featureTextClass: 'text-mint/80',
      descClass: 'text-mint/60',
    },
  ];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-28 md:py-36 bg-noir text-arctic relative overflow-hidden border-b border-nocturnal/30"
    >
      {/* Soft gradient divider at top to decongest */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-nocturnal/30 to-transparent" />

      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nocturnal/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">

        <div className={`text-center max-w-2xl mx-auto mb-16 animate-on-scroll ${sectionInView ? 'in-view' : ''}`}>
          <h2 className="text-3xl sm:text-4xl font-bold font-jetbrains text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-saffron mb-4">
            Pricing Plans
          </h2>
          <p className="text-mint/70 font-inter text-sm sm:text-base">
            Select a plan tailored to your execution scale. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Billing & Currency Control Panel */}
        <div className={`relative z-10 flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 w-full animate-on-scroll stagger-2 ${sectionInView ? 'in-view' : ''}`}>

          {/* Billing Cycle Toggle */}
          <div className="bg-nocturnal/30 p-1.5 rounded-2xl border border-nocturnal/45 flex items-center shrink-0">
            <button
              onClick={() => {
                if (isAnnual) triggerPriceAnimation(() => setIsAnnual(false));
              }}
              className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer font-inter ${
                !isAnnual
                  ? 'bg-forsythia text-noir'
                  : 'bg-transparent text-mint/60 hover:text-arctic'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => {
                if (!isAnnual) triggerPriceAnimation(() => setIsAnnual(true));
              }}
              className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer font-inter ${
                isAnnual
                  ? 'bg-forsythia text-noir'
                  : 'bg-transparent text-mint/60 hover:text-arctic'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] bg-saffron text-noir font-bold px-1.5 py-0.5 rounded">
                -20%
              </span>
            </button>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            {currencies.map((cur) => (
              <button
                key={cur}
                onClick={() => {
                  if (currency !== cur) triggerPriceAnimation(() => setCurrency(cur));
                }}
                className={`border px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer font-inter ${
                  currency === cur
                    ? 'border-forsythia text-forsythia bg-nocturnal/20'
                    : 'border-mint/15 text-mint/60 bg-transparent hover:border-mint/30 hover:text-arctic'
                }`}
              >
                {cur} ({currencySymbols[cur]})
              </button>
            ))}
          </div>

        </div>

        {/* Prevent overlap margin gap */}
        <div className="h-4" />

        {/* Pricing Cards Grid */}
        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-stretch auto-rows-fr w-full">

          {tiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`rounded-3xl p-6 flex flex-col justify-between transition duration-300 relative min-h-[380px] animate-on-scroll stagger-${index + 3} ${sectionInView ? 'in-view' : ''} ${tier.cardClass}`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-forsythia text-noir font-bold font-mono text-[10px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  Most Popular
                </div>
              )}

              <div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-jetbrains ${tier.badgeClass}`}>
                  {tier.badge}
                </span>
                <h3 className="text-xl font-bold font-jetbrains text-arctic mt-3">{tier.name}</h3>
                <p className={`text-xs mt-1.5 leading-relaxed font-inter ${tier.descClass}`}>
                  {tier.description}
                </p>

                <div className="my-4 flex flex-col justify-start">
                  <span
                    className={`text-3xl sm:text-4xl font-bold font-jetbrains price-transition ${
                      isAnimating ? 'changing' : ''
                    } ${tier.priceColor}`}
                  >
                    {symbol}{getPrice(tier.name)}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-mint/40 font-jetbrains mt-0.5">
                    {periodLabel}
                  </span>
                </div>

                <ul className={`space-y-1.5 border-t pt-4 text-xs font-inter ${
                  tier.featured ? 'border-forsythia/10' : 'border-nocturnal/30'
                } ${tier.featureTextClass}`}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-forsythia font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <button className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition duration-200 cursor-pointer font-inter ${tier.btnClass}`}>
                  <span>{tier.cta}</span>
                  <LinkSolid className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;
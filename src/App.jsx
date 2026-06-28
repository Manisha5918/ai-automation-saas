import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import GradientSpotlight from './components/GradientSpotlight';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-xl bg-forsythia text-noir shadow-lg shadow-forsythia/20 hover:bg-saffron hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer animate-gentle-bounce ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

function App() {
  return (
    <>
      <ScrollProgress />
      <GradientSpotlight />
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Pricing />
        <SocialProof />
        <CTA />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
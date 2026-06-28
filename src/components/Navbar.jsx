import { useState, useEffect, useCallback, useRef } from 'react';
import { Cube16Solid, Search, XMark } from './Icons';

const navLinks = [
  { label: 'Home', href: '#', sectionId: null },
  { label: 'Features', href: '#features', sectionId: 'features' },
  { label: 'Pricing', href: '#pricing', sectionId: 'pricing' },
  { label: 'Reviews', href: '#reviews', sectionId: 'reviews' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['features', 'pricing', 'reviews', 'cta'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Track scroll for navbar background enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Reset to "Home" when at top
      if (window.scrollY < 100) {
        setActiveSection(null);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut: Ctrl/Cmd + K to toggle search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  const isActive = useCallback(
    (sectionId) => {
      if (sectionId === null) return activeSection === null;
      return activeSection === sectionId;
    },
    [activeSection]
  );

  // Magnetic link hover handler
  const handleMagneticMove = useCallback((e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    target.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }, []);

  const handleMagneticLeave = useCallback((e) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  }, []);

  // Search suggestion entries
  const searchSuggestions = [
    { category: 'Pages', items: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing Plans', href: '#pricing' },
      { label: 'Customer Reviews', href: '#reviews' },
    ]},
    { category: 'Quick Actions', items: [
      { label: 'Start Free Trial', href: '#pricing' },
      { label: 'Request Beta Access', href: '#cta' },
      { label: 'Contact Sales', href: '#pricing' },
    ]},
  ];

  const filteredSuggestions = searchQuery.trim()
    ? searchSuggestions.map(group => ({
        ...group,
        items: group.items.filter(item =>
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(group => group.items.length > 0)
    : searchSuggestions;

  return (
    <>
      <nav
        className={`sticky top-[3px] z-50 w-full border-b text-arctic h-20 flex items-center transition-all duration-500 ${
          scrolled
            ? 'glass-card-strong border-nocturnal/30 shadow-lg shadow-noir/50'
            : 'bg-noir/80 backdrop-blur-sm border-nocturnal/20'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 md:px-8">

          {/* Brand Logo with animated cube */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Cube16Solid className="w-8 h-8 text-forsythia transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
              {/* Subtle glow behind logo */}
              <div className="absolute inset-0 w-8 h-8 bg-forsythia/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold font-jetbrains tracking-tight text-arctic group-hover:text-forsythia transition-colors duration-200">
              AIFlow
            </span>
          </a>

          {/* Desktop Navigation Links with magnetic hover */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide font-inter">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onMouseMove={handleMagneticMove}
                  onMouseLeave={handleMagneticLeave}
                  className={`relative py-1 transition-colors duration-200 magnetic-hover inline-block ${
                    isActive(link.sectionId)
                      ? 'text-forsythia'
                      : 'text-arctic/80 hover:text-forsythia'
                  }`}
                >
                  {link.label}
                  {/* Active indicator dot */}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-forsythia to-saffron transition-all duration-300 ${
                      isActive(link.sectionId)
                        ? 'w-full opacity-100'
                        : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-mint hover:text-forsythia transition-all duration-150 relative group hover:scale-110"
              aria-label="Search site (Ctrl+K)"
              title="Search (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-mint/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ⌘K
              </span>
            </button>

            <a
              href="#pricing"
              className="hidden sm:inline-block bg-forsythia text-noir font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-saffron hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-inter hover:shadow-lg hover:shadow-forsythia/20"
            >
              Get Started
            </a>

            {/* Hamburger Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-mint hover:text-forsythia transition-colors duration-150"
              aria-label="Open mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Command Palette Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center pt-[15vh]"
          onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-noir/70 backdrop-blur-sm" />

          {/* Command Palette */}
          <div
            className="relative w-full max-w-xl mx-4 glass-card-strong rounded-2xl shadow-2xl shadow-noir/80 border border-nocturnal/40 overflow-hidden animate-slide-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-nocturnal/30">
              <Search className="w-5 h-5 text-forsythia shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, actions, docs..."
                className="w-full bg-transparent focus:outline-none text-arctic text-sm font-inter placeholder-mint/30"
              />
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[9px] font-mono text-mint/30 border border-nocturnal/40 px-1.5 py-0.5 rounded bg-noir/50">ESC</span>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-[320px] overflow-y-auto py-2">
              {filteredSuggestions.map((group) => (
                <div key={group.category} className="px-3 py-2">
                  <span className="text-[10px] font-jetbrains uppercase tracking-wider text-mint/40 px-2 block mb-1.5">
                    {group.category}
                  </span>
                  {group.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-inter text-arctic/80 hover:bg-nocturnal/30 hover:text-forsythia transition-colors duration-150 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-nocturnal group-hover:bg-forsythia transition-colors shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}

              {filteredSuggestions.length === 0 && (
                <div className="px-5 py-8 text-center">
                  <p className="text-sm text-mint/40 font-inter">No results for "{searchQuery}"</p>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-nocturnal/20 text-[10px] font-mono text-mint/30">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="border border-nocturnal/40 px-1.5 py-0.5 rounded bg-noir/50">↑</span>
                  <span className="border border-nocturnal/40 px-1.5 py-0.5 rounded bg-noir/50">↓</span>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <span className="border border-nocturnal/40 px-1.5 py-0.5 rounded bg-noir/50">↵</span>
                  Open
                </span>
              </div>
              <span className="text-forsythia/50">AIFlow Command Palette</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Slide-over Menu */}
      <div
        className={`fixed inset-0 z-50 bg-noir/70 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-noir p-6 border-l border-nocturnal/30 flex flex-col gap-6 shadow-2xl transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold font-jetbrains text-forsythia">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-mint hover:text-forsythia transition-colors duration-150"
              aria-label="Close menu"
            >
              <XMark className="w-6 h-6" />
            </button>
          </div>

          <ul className="flex flex-col gap-4 text-lg font-medium font-inter">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 border-b border-nocturnal/10 transition-colors ${
                    isActive(link.sectionId) ? 'text-forsythia' : 'hover:text-forsythia'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-forsythia text-noir font-semibold py-3 rounded-lg hover:bg-saffron transition-colors font-inter"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
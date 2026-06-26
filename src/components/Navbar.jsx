import { useState } from 'react';
import { Cube16Solid, Search, XMark } from './Icons';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-noir border-b border-nocturnal/20 text-arctic backdrop-blur-md bg-opacity-95 h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 md:px-8">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Cube16Solid className="w-8 h-8 text-forsythia transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-xl font-bold font-jetbrains tracking-tight text-arctic group-hover:text-forsythia transition-colors duration-200">
            AIFlow
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide font-inter">
          <li>
            <a href="#" className="hover:text-forsythia transition-colors duration-150">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-forsythia transition-colors duration-150">Features</a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-forsythia transition-colors duration-150">Pricing</a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-forsythia transition-colors duration-150">Reviews</a>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-mint hover:text-forsythia transition-colors duration-150"
            aria-label="Search site"
          >
            <Search className="w-5 h-5" />
          </button>

          <a
            href="#pricing"
            className="hidden sm:inline-block bg-forsythia text-noir font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-saffron hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 font-inter"
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

      {/* Floating Interactive Search Bar */}
      <div
        className={`absolute top-full left-0 w-full bg-noir border-b border-nocturnal/30 transition-all duration-300 ease-in-out origin-top ${
          searchOpen ? 'scale-y-100 opacity-100 py-4 px-6' : 'scale-y-0 opacity-0 h-0 overflow-hidden'
        }`}
      >
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <Search className="w-5 h-5 text-nocturnal" />
          <input
            type="text"
            placeholder="Search docs, integrations, workflows..."
            className="w-full bg-transparent border-b border-nocturnal/45 focus:border-forsythia focus:outline-none text-arctic text-sm py-1 font-jetbrains"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="text-mint hover:text-forsythia transition-colors duration-150"
          >
            <XMark className="w-5 h-5" />
          </button>
        </div>
      </div>

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
            <li>
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-nocturnal/10 hover:text-forsythia transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-nocturnal/10 hover:text-forsythia transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-nocturnal/10 hover:text-forsythia transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-nocturnal/10 hover:text-forsythia transition-colors"
              >
                Reviews
              </a>
            </li>
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
    </nav>
  );
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../data/companyData';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Saanjh', path: '/projects/saanjh', highlight: true },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLightHero = false; // We use rich midnight navy aesthetic for luxury header

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-navy-800 shadow-luxury py-3.5'
          : 'bg-navy-950/80 backdrop-blur-sm border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo light={true} />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 ${
                  isActive
                    ? 'text-gold-400 font-semibold'
                    : 'text-ivory-200/80 hover:text-white'
                } ${link.highlight ? 'text-gold-300' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {link.highlight && (
                    <span className="ml-1 text-[9px] px-1.5 py-0.2 bg-gold-500/20 text-gold-300 rounded font-normal uppercase tracking-wider border border-gold-500/30">
                      Flagship
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold-400 animate-pulse" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${siteConfig.company.contactNumbers[0].raw}`}
            className="flex items-center gap-2 text-xs text-ivory-200/90 hover:text-gold-300 transition-colors"
            title="Reference Desk Line"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span className="tracking-wider">{siteConfig.company.contactNumbers[0].display}</span>
          </a>

          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('General Enquiry')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-sm hover:shadow-gold-glow active:scale-95"
          >
            <span>Enquire Now</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('General Enquiry')}
            className="px-3 py-1.5 rounded-sm bg-gold-500 text-navy-950 font-semibold text-[11px] uppercase tracking-wider"
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ivory-100 hover:text-gold-400 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-navy-950 border-b border-navy-800 shadow-2xl p-6 transition-all duration-300 z-50">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.2em] py-2 px-3 rounded flex items-center justify-between ${
                    isActive
                      ? 'bg-navy-900 text-gold-400 font-semibold border-l-2 border-gold-500'
                      : 'text-ivory-200 hover:bg-navy-900/60'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.highlight && (
                  <span className="text-[10px] px-2 py-0.5 bg-gold-500/20 text-gold-300 rounded border border-gold-500/30">
                    Flagship Project
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-4 mt-2 border-t border-navy-850 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.company.contactNumbers[0].raw}`}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded border border-navy-700 text-ivory-200 text-xs tracking-wider"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {siteConfig.company.contactNumbers[0].display}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry && onOpenEnquiry('General Enquiry');
                }}
                className="w-full py-3 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-colors"
              >
                Request a Site Visit
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

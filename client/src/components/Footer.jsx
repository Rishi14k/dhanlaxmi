import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, ShieldCheck, ExternalLink, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { siteConfig } from '../data/companyData';

export default function Footer({ onOpenPrivacy, onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-ivory-200 border-t border-navy-850 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-850">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo light={true} />
            <p className="font-serif italic text-gold-400 text-lg">
              "Quiet Luxury. Thoughtful Living."
            </p>
            <p className="text-ivory-300/80 text-xs leading-relaxed max-w-sm">
              Dhanlaxmi Buildwell LLP is committed to curating refined residential environments in prime Ahmedabad neighborhoods. Designed for multigenerational families who value peace, architectural balance, and community harmony.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-navy-900 border border-navy-750 flex items-center justify-center text-gold-400 hover:text-white hover:border-gold-500 transition-colors"
                aria-label="Dhanlaxmi Group on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-ivory-300/70">
                Official Instagram: <a href={siteConfig.company.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">@dhanlaxmi.group</a>
              </span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-ivory-300/80">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-gold-300 transition-colors">Projects Overview</Link>
              </li>
              <li>
                <Link to="/projects/saanjh" className="hover:text-gold-300 text-gold-400 font-medium transition-colors">
                  Saanjh Residences
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors">About Dhanlaxmi</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Project Facts & RERA */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
              RERA Compliance
            </h4>
            <div className="text-xs text-ivory-300/80 space-y-2">
              <p className="font-medium text-ivory-100">Saanjh Luxury Homes</p>
              <div className="p-2.5 rounded bg-navy-900 border border-navy-800 text-[11px] space-y-1">
                <span className="block text-gold-400 font-mono text-[10px] break-all leading-tight">
                  {siteConfig.flagshipProject.reraRegistration}
                </span>
                <a
                  href={siteConfig.flagshipProject.reraPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-gold-400/90 hover:text-gold-300 hover:underline mt-1"
                >
                  <span>Verify on GujRERA Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[10px] text-ivory-300/60 leading-normal">
                Promoted by Dhanlaxmi Buildwell LLP. Verification of details recommended prior to purchase.
              </p>
            </div>
          </div>

          {/* Col 5: Reference Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
              Sales Desk
            </h4>
            <div className="space-y-2.5 text-xs text-ivory-300/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Paldi, Ahmedabad, Gujarat 380007 (Exact landmark to be confirmed)
                </span>
              </div>
              {siteConfig.company.contactNumbers.map((num, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <a href={`tel:${num.raw}`} className="text-[11px] hover:text-gold-300">
                    {num.display}
                  </a>
                  <span className="text-[9px] px-1 py-0.2 bg-navy-900 text-ivory-300/60 rounded">
                    Ref
                  </span>
                </div>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Site Visit')}
                  className="w-full py-2 px-3 text-center rounded bg-navy-900 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-navy-950 font-medium text-[11px] tracking-wider uppercase transition-all duration-200"
                >
                  Request Site Visit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-ivory-300/60">
          <div className="space-y-1 text-center md:text-left">
            <p>
              &copy; {currentYear} Dhanlaxmi Buildwell LLP / Dhanlaxmi Group. All rights reserved.
            </p>
            <p className="text-[10px] text-ivory-300/50 max-w-2xl">
              Disclaimer: This website is an independent digital concept prototype prepared for business presentation. Architectural renders, images, and configuration specifications are illustrative and subject to final formal confirmation by the developer.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenPrivacy && onOpenPrivacy()}
              className="text-ivory-300/70 hover:text-gold-400 underline transition-colors"
            >
              Privacy & Legal Notice
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-navy-900 border border-navy-800 text-gold-400 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

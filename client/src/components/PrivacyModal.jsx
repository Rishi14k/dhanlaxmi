import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/companyData';

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="bg-ivory-100 border border-ivory-300 w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[88vh]">
        <div className="bg-navy-950 px-6 py-4 text-ivory-100 flex items-center justify-between border-b border-navy-850">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold-400" />
            <h2 id="privacy-modal-title" className="font-serif text-xl text-ivory-100">
              Legal Disclosure & Privacy Policy
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-ivory-300/70 hover:text-white p-1.5 rounded transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-xs text-charcoal/80 space-y-4 leading-relaxed">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded text-amber-900">
            <p className="font-semibold text-xs mb-1">Independent Website Concept Status</p>
            <p className="text-[11px]">
              This website is an independently created digital presentation concept developed for Dhanlaxmi Group / Dhanlaxmi Buildwell LLP to illustrate digital branding and customer enquiry potential. It does not represent an official marketing release until formally authorized by the developer.
            </p>
          </div>

          <h3 className="font-serif text-base text-navy-950 font-semibold pt-2">
            1. Information Collection & Use
          </h3>
          <p>
            Any contact details (name, telephone number, email) submitted through the website forms in this demonstration environment are handled solely for the purpose of demonstrating the MERN stack lead management workflow. No personally identifiable data is sold, traded, or rented to third-party commercial marketing entities.
          </p>

          <h3 className="font-serif text-base text-navy-950 font-semibold pt-2">
            2. RERA Compliance & Project Accuracy
          </h3>
          <p>
            Dhanlaxmi Saanjh is registered with Gujarat Real Estate Regulatory Authority (GujRERA) under Registration No: <strong className="font-mono text-navy-900">{siteConfig.flagshipProject.reraRegistration}</strong>. Prospective homebuyers are advised to cross-examine and verify all official project details, carpet areas, sanctioned blueprints, and statutory approvals directly on the official GujRERA portal at <a href="https://gujrera.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold-700 underline font-medium">gujrera.gujarat.gov.in</a>.
          </p>

          <h3 className="font-serif text-base text-navy-950 font-semibold pt-2">
            3. Disclaimer on Visuals & Architectural Plans
          </h3>
          <p>
            All architectural renderings, interior mockups, lifestyle images, and CAD diagrams featured on this concept portal are representative artistic impressions meant to convey design aesthetics. Actual materials, fittings, fixtures, structural layouts, and unit dimensions will be as specified in the formal agreement for sale executed with Dhanlaxmi Buildwell LLP.
          </p>

          <h3 className="font-serif text-base text-navy-950 font-semibold pt-2">
            4. Contact and Authorization
          </h3>
          <p>
            For official project queries, verified bookings, and corporate communications, please liaise with the authorized representatives of Dhanlaxmi Buildwell LLP, Paldi, Ahmedabad, Gujarat.
          </p>

          <div className="pt-4 border-t border-ivory-300 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded bg-navy-950 text-gold-400 font-semibold text-xs uppercase tracking-wider hover:bg-navy-900 transition-colors"
            >
              I Understand & Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

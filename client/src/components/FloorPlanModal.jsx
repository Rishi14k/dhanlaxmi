import React, { useEffect } from 'react';
import { X, Check, ShieldAlert, Download, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/companyData';

export default function FloorPlanModal({ isOpen, onClose, configuration, onOpenEnquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !configuration) return null;

  const is3Bhk = configuration.id === '3bhk';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="floorplan-modal-title"
    >
      <div className="bg-ivory-100 border border-ivory-300 w-full max-w-4xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="bg-navy-950 px-6 py-4 text-ivory-100 flex items-center justify-between border-b border-navy-850">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold block">
              Dhanlaxmi Saanjh &bull; Floor Layout Preview
            </span>
            <h2 id="floorplan-modal-title" className="font-serif text-2xl text-ivory-100">
              {configuration.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-ivory-300/70 hover:text-white p-2 rounded transition-colors"
            aria-label="Close layout modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Disclaimer Banner */}
          <div className="p-4 bg-amber-500/10 border border-gold-500/30 rounded text-xs text-charcoal flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-navy-950">
                Official Architectural Blueprint to be provided by Dhanlaxmi Buildwell LLP
              </p>
              <p className="text-[11px] text-mutedGray">
                {configuration.carpetNote}. The schematic below illustrates spatial circulation and zoning principles. Final dimensions, room sizes, and structural specifications are subject to developer approval and Gujarat RERA filings.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Visual Schematic Diagram */}
            <div className="lg:col-span-7 bg-navy-950 p-6 rounded border border-navy-850 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
              
              {/* Luxury Schematic CAD Simulation */}
              <div className="w-full aspect-[4/3] border border-gold-500/30 rounded p-4 relative bg-[#0B101E] flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-gold-400/80 border-b border-gold-500/20 pb-2">
                  <span>SCALE: CONCEPT SCHEMATIC</span>
                  <span className="px-2 py-0.5 bg-navy-900 border border-gold-500/30 rounded text-gold-300">
                    {is3Bhk ? '3 BEDROOM + 3 BATH' : '4 BEDROOM + 4 BATH + FOYER'}
                  </span>
                </div>

                {/* Architectural Blueprint Room Layout */}
                <div className="grid grid-cols-3 gap-2 my-auto p-2 border border-dashed border-gold-500/30 rounded text-[11px] text-ivory-200">
                  <div className="p-2 border border-navy-700 bg-navy-900/80 rounded text-center">
                    <span className="block font-semibold text-gold-400">Living Salon</span>
                    <span className="text-[9px] text-ivory-300/70">Balcony Walkout</span>
                  </div>
                  <div className="p-2 border border-navy-700 bg-navy-900/80 rounded text-center">
                    <span className="block font-semibold text-gold-400">Dining & Foyer</span>
                    <span className="text-[9px] text-ivory-300/70">Central Hub</span>
                  </div>
                  <div className="p-2 border border-navy-700 bg-navy-900/80 rounded text-center">
                    <span className="block font-semibold text-gold-400">Culinary Yard</span>
                    <span className="text-[9px] text-ivory-300/70">Dry Utility</span>
                  </div>
                  <div className="p-2 border border-navy-700 bg-navy-900/80 rounded text-center">
                    <span className="block font-semibold text-gold-400">Master Retreat</span>
                    <span className="text-[9px] text-ivory-300/70">Dresser + En-Suite</span>
                  </div>
                  <div className="p-2 border border-navy-700 bg-navy-900/80 rounded text-center">
                    <span className="block font-semibold text-gold-400">Bedroom 2</span>
                    <span className="text-[9px] text-ivory-300/70">Attached Bath</span>
                  </div>
                  <div className="p-2 border border-navy-700 bg-navy-900/80 rounded text-center">
                    <span className="block font-semibold text-gold-400">{is3Bhk ? 'Bedroom 3' : 'Suite 3 & 4'}</span>
                    <span className="text-[9px] text-ivory-300/70">Generous Light</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-ivory-300/60 pt-2 border-t border-gold-500/20">
                  <span>NORTH ORIENTATION &bull; VAASTU COMPLIANT</span>
                  <span className="font-mono text-gold-400">{configuration.carpetArea}</span>
                </div>
              </div>

              <div className="mt-3 text-[11px] text-ivory-300/70 italic">
                * Concept layout representation. Official blueprints provided upon formal enquiry.
              </div>
            </div>

            {/* Key Specifications Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600">
                  Spatial Specifications
                </span>
                <h3 className="font-serif text-2xl text-navy-950">
                  {configuration.carpetArea}
                </h3>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  {configuration.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-ivory-300">
                {configuration.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <div>
                      <span className="font-semibold text-navy-950">{spec.label}: </span>
                      <span className="text-charcoal/80">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-2.5">
                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiry && onOpenEnquiry('Floor Plan Request', configuration.name);
                  }}
                  className="w-full py-3 px-4 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Request Official PDF Floor Plan</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenEnquiry && onOpenEnquiry('Site Visit', configuration.name);
                  }}
                  className="w-full py-2.5 px-4 rounded border border-navy-900 text-navy-950 hover:bg-navy-950 hover:text-white font-medium text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>Schedule Site Inspection</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

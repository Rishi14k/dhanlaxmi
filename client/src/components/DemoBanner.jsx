import React, { useState } from 'react';
import { siteConfig } from '../data/companyData';
import { Info, X } from 'lucide-react';

export default function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!siteConfig.demoMode.enabled || !visible) return null;

  return (
    <aside 
      aria-label="Independent Concept Disclosure"
      className="bg-navy-950 text-gold-300 border-b border-navy-800 text-xs py-2 px-4 relative z-50 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-gold-500 shrink-0" />
          <p className="tracking-wide">
            <span className="font-semibold text-gold-400 uppercase tracking-widest text-[10px] mr-1.5 px-1.5 py-0.5 bg-navy-900 border border-gold-500/30 rounded">
              Concept Demo
            </span>
            {siteConfig.demoMode.bannerText}
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-ivory-300/70 hover:text-white p-1 transition-colors"
          title="Dismiss notice"
          aria-label="Dismiss demo notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}

import React from 'react';
import { ShieldCheck, ExternalLink, FileCheck, Building2, MapPin } from 'lucide-react';
import { siteConfig } from '../data/companyData';

export default function ReraCard({ className = '' }) {
  const project = siteConfig.flagshipProject;

  return (
    <div className={`bg-white border border-ivory-300 rounded-sm p-6 sm:p-8 shadow-subtle ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ivory-200 pb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded bg-navy-950 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-600">
              Government Registered
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-navy-950 font-bold">
              Gujarat RERA Verified Information
            </h3>
          </div>
        </div>

        <a
          href={project.reraPortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-navy-950 hover:bg-navy-900 text-gold-400 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 self-start sm:self-auto"
        >
          <span>Verify on GujRERA</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Facts Table Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-mutedGray block">
            Promoter & Developer
          </span>
          <p className="font-serif text-base text-navy-950 font-semibold">
            {project.developer}
          </p>
          <span className="text-[11px] text-mutedGray">
            Associated with {project.associatedGroup}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-mutedGray block">
            Flagship Project
          </span>
          <p className="font-serif text-base text-navy-950 font-semibold">
            {project.name}
          </p>
          <span className="text-[11px] text-mutedGray">
            {project.configurations}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-mutedGray block">
            Location & Micro-market
          </span>
          <p className="font-serif text-base text-navy-950 font-semibold">
            Paldi, Ahmedabad
          </p>
          <span className="text-[11px] text-mutedGray">
            Shantivan / Jain Nagar Area
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider text-mutedGray block">
            Reported Possession
          </span>
          <p className="font-serif text-base text-navy-950 font-semibold">
            {project.proposedPossession}
          </p>
          <span className="text-[11px] text-mutedGray">
            Low-density (15 total residences)
          </span>
        </div>
      </div>

      {/* Registration number box */}
      <div className="mt-6 p-3.5 bg-ivory-100 rounded border border-ivory-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <FileCheck className="w-4 h-4 text-gold-600 shrink-0" />
          <span className="text-xs font-semibold text-navy-950">Registration Number:</span>
          <span className="font-mono text-xs text-navy-900 bg-white px-2 py-0.5 rounded border border-ivory-300 break-all select-all">
            {project.reraRegistration}
          </span>
        </div>
        <span className="text-[10px] text-mutedGray italic">
          * Public regulatory filing record
        </span>
      </div>
    </div>
  );
}

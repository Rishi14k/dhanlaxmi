import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sparkles, Building, ShieldCheck, CheckCircle, Maximize2 } from 'lucide-react';
import { siteConfig, projectAssets } from '../data/companyData';
import ReraCard from '../components/ReraCard';

export default function ProjectsPage({ onOpenEnquiry }) {
  const project = siteConfig.flagshipProject;

  return (
    <div className="space-y-0 text-charcoal">
      
      {/* Hero Header with Twilight Building Silhouette */}
      <section className="relative bg-navy-950 text-ivory-100 py-20 border-b border-navy-850 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={projectAssets.img11}
            alt="Paldi holds a secret"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 block mb-3">
            Dhanlaxmi Residential Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory-100 font-light">
            Curated Living <span className="italic font-normal text-gold-300">Environments</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ivory-300/80 leading-relaxed">
            We focus exclusively on low-density, bespoke residential projects in Ahmedabad's prime enclaves, ensuring uncompromising privacy, architectural distinction, and enduring multigenerational value.
          </p>
        </div>
      </section>

      {/* Featured Flagship Project: Saanjh */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block">
              Current Active Development
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 font-bold">
              Flagship Residence
            </h2>
          </div>

          <div className="bg-white border border-ivory-300 rounded-sm overflow-hidden shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual with Authentic 3D Night Facade */}
            <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto overflow-hidden bg-navy-950">
              <img
                src={projectAssets.img21}
                alt="Saanjh Luxury Homes Facade at Night with Dhanlaxmi Group Crest"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-sm text-gold-400 text-xs uppercase tracking-widest px-3 py-1 rounded border border-gold-500/30">
                Under Active Development &bull; Paldi
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-sm p-3 rounded text-xs text-ivory-100 font-serif italic">
                "Parents instantly say: 'Haan aa Jagya Sari che'"
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-gold-700 font-medium">
                  <MapPin className="w-4 h-4 text-gold-600" />
                  <span>Jain Nagar / Shantivan Area, Paldi</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-navy-950 font-bold">
                  Saanjh Luxury Homes
                </h3>

                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                  A private collection of 15 exclusive 3 & 4 BHK residences designed around natural light, rooftop sky amenities, 19x10 ft master suites, and an on-premise consecrated Jain Derasar.
                </p>

                <div className="pt-2 space-y-2 text-xs border-t border-ivory-200">
                  <div className="flex justify-between py-1 border-b border-ivory-200">
                    <span className="text-mutedGray">Typologies</span>
                    <span className="font-semibold text-navy-950">3 & 4 BHK Luxury Residences</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ivory-200">
                    <span className="text-mutedGray">Super Built-Up Area</span>
                    <span className="font-semibold text-gold-700 font-mono">3 BHK: 2430 & 2700 | 4 BHK: 3330 SQFT</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ivory-200">
                    <span className="text-mutedGray">Community Size</span>
                    <span className="font-semibold text-navy-950">Only 15 Exclusive Residences</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ivory-200">
                    <span className="text-mutedGray">Target Possession</span>
                    <span className="font-semibold text-navy-950">In ~2 Years (Dec 2028 RERA Target)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-ivory-200">
                    <span className="text-mutedGray">Promoter Entity</span>
                    <span className="font-semibold text-navy-950">Dhanlaxmi Buildwell LLP</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/projects/saanjh"
                  className="flex-1 py-3 px-6 rounded-sm bg-navy-950 hover:bg-navy-900 text-gold-400 hover:text-gold-300 font-semibold text-xs uppercase tracking-widest text-center transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Saanjh</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Site Visit', 'Saanjh')}
                  className="py-3 px-6 rounded-sm border border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white font-semibold text-xs uppercase tracking-widest text-center transition-colors"
                >
                  Request Site Visit
                </button>
              </div>

            </div>

          </div>

          {/* 4-Image Architectural Spotlight Grid */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded overflow-hidden bg-navy-950 shadow group">
              <img 
                src={projectAssets.main} 
                alt="Terrace amenities"
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-2.5 text-[11px] font-mono text-charcoal bg-white border border-ivory-300">
                Terrace Sky Lounge
              </div>
            </div>

            <div className="rounded overflow-hidden bg-navy-950 shadow group">
              <img 
                src={projectAssets.img3} 
                alt="On-premise Derasar"
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-2.5 text-[11px] font-mono text-charcoal bg-white border border-ivory-300">
                On-Premise Derasar
              </div>
            </div>

            <div className="rounded overflow-hidden bg-navy-950 shadow group">
              <img 
                src={projectAssets.img6} 
                alt="19x10 FT Master Suite"
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-2.5 text-[11px] font-mono text-charcoal bg-white border border-ivory-300">
                19x10 FT Master Suites
              </div>
            </div>

            <div className="rounded overflow-hidden bg-navy-950 shadow group">
              <img 
                src={projectAssets.img17} 
                alt="Open Living Salon"
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="p-2.5 text-[11px] font-mono text-charcoal bg-white border border-ivory-300">
                Open-Plan Salons
              </div>
            </div>
          </div>

          <div className="mt-4 text-right">
            <span className="text-[11px] text-mutedGray italic">
              * Specifications subject to unit-specific schedule & developer verification.
            </span>
          </div>

        </div>
      </section>

      {/* Honest Portfolio Philosophy Notice */}
      <section className="py-20 bg-ivory-200/50 border-t border-ivory-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center mx-auto">
            <Building className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 font-bold">
            Deliberate Curation Over Mass Production
          </h3>
          <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Dhanlaxmi Group believes that true craftsmanship requires undivided attention. Rather than developing dozens of concurrent generic towers, each project is planned with singular focus on location, architectural longevity, and resident well-being.
          </p>
          <p className="text-xs text-mutedGray">
            Upcoming residential concepts are currently in architectural planning for select prime micro-markets in Ahmedabad. Announcements will be made upon Gujarat RERA approval.
          </p>
        </div>
      </section>

      {/* RERA Card */}
      <section className="py-16 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReraCard />
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { ShieldCheck, Heart, Sparkles, Building2, Eye, Compass, Users, Check } from 'lucide-react';
import { siteConfig, projectAssets } from '../data/companyData';
import ReraCard from '../components/ReraCard';

export default function AboutPage({ onOpenEnquiry }) {
  const pillars = [
    {
      icon: Eye,
      title: "Low-Density Privacy",
      description: "We believe privacy is the ultimate luxury. By limiting Saanjh to just 15 exclusive residences, we preserve personal space, serenity, and true exclusivity."
    },
    {
      icon: Heart,
      title: "Cultural & Spiritual Resonance",
      description: "Deeply rooted in Ahmedabad's cultural ethos, our projects incorporate sacred spaces like on-premise Jain Derasars, honoring traditions of peaceful, contemplative living."
    },
    {
      icon: Compass,
      title: "Natural Light & Cross-Breeze",
      description: "Architecture shaped by sunlight, ventilation, and Vaastu principles, ensuring homes that feel naturally bright, airy, and restorative year-round."
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Transparency",
      description: "Complete adherence to Gujarat RERA norms (RAA17162). We uphold honest communication with transparent disclosures regarding carpet areas, schedules, and approvals."
    }
  ];

  return (
    <div className="space-y-0 text-charcoal">
      
      {/* Hero with Authentic Twilight Asset Background */}
      <section className="relative bg-navy-950 text-ivory-100 py-20 sm:py-28 border-b border-navy-850 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={projectAssets.img12}
            alt="In the heart of the city peace stands still"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 block">
            About Dhanlaxmi Group
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory-100 font-light leading-tight">
            Building with Intention. <br />
            <span className="italic font-normal text-gold-300">Living with Peace.</span>
          </h1>
          <p className="text-sm sm:text-base text-ivory-300/80 max-w-2xl mx-auto leading-relaxed pt-2">
            Dhanlaxmi Buildwell LLP is an Ahmedabad-based real estate developer dedicated to creating thoughtful, low-density residences that celebrate family, heritage, and quiet luxury.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600 block">
                The Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-navy-950 leading-tight">
                "Quiet Luxury. <br />
                <span className="italic font-normal text-gold-600">Thoughtful Living."</span>
              </h2>
              <p className="text-sm text-charcoal/85 leading-relaxed">
                In an era dominated by rapid commercialization and overcrowded high-rises, Dhanlaxmi Group takes a deliberately different path. We believe a home is not simply square footage; it is an intimate family sanctuary where memories are nurtured and generations connect.
              </p>
              <p className="text-sm text-charcoal/85 leading-relaxed">
                Our flagship development, <strong className="text-navy-950">Saanjh Luxury Homes</strong> in Paldi, embodies this conviction. Offering just 15 curated 3 & 4 BHK residences with 19x10 ft master bedrooms and an on-premise Jain Derasar, Saanjh represents our vision of understated elegance and enduring family harmony.
              </p>

              <div className="p-4 bg-white border-l-2 border-gold-500 rounded-r shadow-subtle text-xs text-charcoal/80 italic">
                "Our measure of success is not how many towers we build, but the quiet satisfaction of the families who call our developments home."
              </div>
            </div>

            <div className="lg:col-span-6 rounded overflow-hidden shadow-luxury">
              <img
                src={projectAssets.img15}
                alt="Where Your Values Have a Home - Dhanlaxmi Group"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Visual Triad: Campaign Themes */}
      <section className="py-16 bg-navy-900 border-y border-navy-800 text-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="rounded overflow-hidden bg-navy-950 border border-navy-800 group">
              <img 
                src={projectAssets.img7} 
                alt="Paldi's Peaceful Secret"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 space-y-1">
                <span className="text-[10px] uppercase font-mono text-gold-400">Low-Density Sanctum</span>
                <h4 className="font-serif text-lg font-semibold">Paldi's Peaceful Secret</h4>
                <p className="text-xs text-ivory-300/80">Because true peace is beautifully private.</p>
              </div>
            </div>

            <div className="rounded overflow-hidden bg-navy-950 border border-navy-800 group">
              <img 
                src={projectAssets.img8} 
                alt="Spiritual Sanctuary Within the Community"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 space-y-1">
                <span className="text-[10px] uppercase font-mono text-gold-400">Devotion on Grounds</span>
                <h4 className="font-serif text-lg font-semibold">Consecrated Jain Derasar</h4>
                <p className="text-xs text-ivory-300/80">Spiritual sanctuary right within the residential premises.</p>
              </div>
            </div>

            <div className="rounded overflow-hidden bg-navy-950 border border-navy-800 group">
              <img 
                src={projectAssets.img18} 
                alt="Everyday Moments Deserve Grandeur"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-4 space-y-1">
                <span className="text-[10px] uppercase font-mono text-gold-400">Living Verandas</span>
                <h4 className="font-serif text-lg font-semibold">Moments of Grandeur</h4>
                <p className="text-xs text-ivory-300/80">Balconies and terraces designed for everyday calm.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-20 bg-navy-950 text-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-100">
              What Defines Every Dhanlaxmi Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-navy-900 border border-navy-800 p-8 rounded-sm space-y-4 hover:border-gold-500/40 transition-colors">
                  <div className="w-12 h-12 rounded bg-navy-950 text-gold-400 flex items-center justify-center border border-gold-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-ivory-100 font-semibold">{item.title}</h3>
                  <p className="text-xs text-ivory-300/80 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Location Commitment: Paldi, Ahmedabad */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-ivory-300 rounded-sm p-8 sm:p-12 shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                Roots in Ahmedabad
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-navy-950 font-bold">
                Honoring the Character of Paldi
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Paldi has long been synonymous with high culture, intellectual heritage, esteemed educational institutions, and prominent Jain Upashrays. We approach building in this storied neighborhood with deep humility and architectural sensitivity, ensuring that our projects enhance the community fabric.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('General Enquiry')}
                className="px-8 py-3.5 rounded-sm bg-navy-950 hover:bg-navy-900 text-gold-400 font-semibold text-xs uppercase tracking-widest transition-colors shadow-md"
              >
                Connect With Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RERA Card */}
      <section className="py-16 bg-ivory-200/50 border-t border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReraCard />
        </div>
      </section>

    </div>
  );
}

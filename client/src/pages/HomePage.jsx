import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Maximize2, 
  Check, 
  Building, 
  ShieldCheck, 
  ExternalLink,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { siteConfig, projectAssets } from '../data/companyData';
import ReraCard from '../components/ReraCard';

export default function HomePage({ onOpenEnquiry, onOpenFloorPlan, onOpenLightbox }) {
  const project = siteConfig.flagshipProject;
  const [selectedConfigId, setSelectedConfigId] = useState('3bhk');
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All');
  
  // Interactive Hero visual switcher
  const heroOptions = [
    { label: "Twilight Facade", src: projectAssets.img21, title: "Illuminated Facade at Twilight" },
    { label: "Aerial Terrace", src: projectAssets.main, title: "Rooftop Lawn & Paldi Skyline" },
    { label: "Derasar Sanctuary", src: projectAssets.img8, title: "Residences with Jain Derasar" },
    { label: "Living Salon", src: projectAssets.img1, title: "Morning Darshan Living Room" },
  ];
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);

  const selectedConfig = project.configurationsList.find(c => c.id === selectedConfigId) || project.configurationsList[0];

  // Filter gallery
  const filteredGallery = activeGalleryFilter === 'All'
    ? project.gallery
    : activeGalleryFilter === 'Official Campaign Creatives'
      ? project.gallery.filter(item => item.isOfficialAsset)
      : project.gallery.filter(item => item.filterCategory === activeGalleryFilter || item.category === activeGalleryFilter);

  return (
    <div className="space-y-0 text-charcoal">
      
      {/* ========================================================
          SECTION C: CINEMATIC HERO
         ======================================================== */}
      <section className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-navy-950 text-ivory-100">
        
        {/* Background Architectural Visual with Deep Luxury Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroOptions[selectedHeroIndex].src}
            alt={heroOptions[selectedHeroIndex].title}
            className="w-full h-full object-cover object-center scale-105 transform transition-all duration-1000 brightness-[0.42] contrast-[1.1]"
          />
          {/* Refined Vignette Overlays for Maximum Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950/40 to-navy-950" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 text-gold-300 text-[11px] uppercase tracking-[0.25em] font-medium mb-6 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Dhanlaxmi Group Presents</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory-100 font-light tracking-tight leading-[1.05] max-w-4xl">
            A quieter kind <br />
            <span className="italic font-normal text-gold-300">of luxury.</span>
          </h1>

          {/* Authentic Campaign Tagline in Gujarati & English */}
          <div className="mt-4 px-4 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 font-serif italic text-sm sm:text-base tracking-wide">
            "Haan aa Jagya Sari che" &bull; 3 & 4 BHK Luxury Residences in Paldi
          </div>

          {/* Supporting Copy */}
          <p className="mt-4 text-xs sm:text-base md:text-lg text-ivory-200/90 max-w-2xl font-light tracking-wide leading-relaxed">
            A boutique collection of 15 private residences in Jain Nagar / Shantivan, Paldi, featuring an on-premise Jain Derasar, rooftop sky amenities, and 19x10 ft master suites.
          </p>

          {/* Key Facts Pill */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-gold-400/90 border border-gold-500/25 bg-navy-900/75 backdrop-blur-md px-5 py-2.5 rounded-sm shadow-luxury">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-500" />
              <span>Jain Nagar, Paldi</span>
            </span>
            <span className="text-gold-500/40">&bull;</span>
            <span>3 BHK (2,430 & 2,700 SQFT)</span>
            <span className="text-gold-500/40">&bull;</span>
            <span>4 BHK (3,330 SQFT)</span>
            <span className="text-gold-500/40">&bull;</span>
            <span>Only 15 Exclusive Units</span>
          </div>

          {/* Primary & Secondary CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/projects/saanjh"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-luxury hover:shadow-gold-glow active:scale-95"
            >
              <span>Discover Saanjh</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Site Visit')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-sm border border-gold-500/50 hover:border-gold-300 text-ivory-100 hover:bg-gold-500/10 font-medium text-xs uppercase tracking-[0.2em] transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Request a Site Visit</span>
            </button>
          </div>

          {/* Interactive Backdrop Switcher */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-gold-400/70 mr-2 flex items-center gap-1">
              <Layers className="w-3 h-3" />
              <span>Perspective:</span>
            </span>
            {heroOptions.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHeroIndex(idx)}
                className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-1 rounded transition-all ${
                  selectedHeroIndex === idx
                    ? 'bg-gold-500 text-navy-950 font-bold shadow-sm'
                    : 'bg-navy-900/60 text-ivory-300/80 hover:text-white border border-navy-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Discreet Architectural Sub-label */}
          <span className="mt-6 text-[10px] text-ivory-300/50 uppercase tracking-widest">
            * Official Dhanlaxmi Group Project Visuals &bull; Gujarat RERA: RAA17162
          </span>
        </div>

      </section>


      {/* ========================================================
          SECTION D: BRAND INTRODUCTION
         ======================================================== */}
      <section className="py-24 sm:py-32 bg-ivory-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600 block">
                The Dhanlaxmi Ethos
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy-950 leading-[1.1]">
                More than a home. <br />
                <span className="italic font-normal text-gold-600">A place to belong.</span>
              </h2>
              <div className="w-16 h-[2px] bg-gold-500 mt-4" />
            </div>

            {/* Right Editorial Copy & Image Accent */}
            <div className="lg:col-span-7 space-y-6 text-charcoal/85 text-sm sm:text-base leading-relaxed">
              <p className="font-serif text-xl sm:text-2xl text-navy-950 leading-snug">
                True luxury is never loud. It is found in expansive morning daylight, calm neighborhood breezes, and spaces intuitively crafted for family warmth.
              </p>
              
              <p>
                In the historic, dignified heart of Paldi, Ahmedabad, Dhanlaxmi Buildwell LLP is creating a rare boutique residential enclave. Here, low density is not a luxury upgrade — it is the very foundation. With just 15 privileged residences, Saanjh offers the privacy of an independent estate and the warmth of a close-knit, culturally aligned community with an on-premise consecrated Jain Derasar.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-ivory-300">
                <div>
                  <span className="font-serif text-3xl text-navy-950 font-bold block">15</span>
                  <span className="text-xs text-mutedGray uppercase tracking-wider">Curated Residences</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-navy-950 font-bold block">Paldi</span>
                  <span className="text-xs text-mutedGray uppercase tracking-wider">Jain Nagar Enclave</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-navy-950 font-bold block">3 & 4</span>
                  <span className="text-xs text-mutedGray uppercase tracking-wider">BHK (2,430 – 3,330 SQFT)</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION E: FEATURED PROJECT — SAANJH (WITH AUTHENTIC ASSET)
         ======================================================== */}
      <section className="py-24 bg-navy-950 text-ivory-100 relative overflow-hidden">
        
        {/* Subtle decorative background line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 block mb-2">
                Flagship Residential Offering
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-ivory-100">
                Saanjh Luxury Homes
              </h2>
              <p className="text-xs text-ivory-300/80 font-mono mt-1">
                Jain Nagar / Shantivan, Paldi &bull; Promoted by Dhanlaxmi Buildwell LLP
              </p>
            </div>

            <Link
              to="/projects/saanjh"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-400 hover:text-gold-300 font-semibold group self-start md:self-auto"
            >
              <span>Explore The Residence</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Editorial Feature Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-navy-900 border border-navy-800 rounded-sm overflow-hidden p-6 sm:p-10 shadow-2xl">
            
            {/* Visual Column featuring Official 3D Render */}
            <div className="lg:col-span-7 relative group overflow-hidden rounded bg-black">
              <img
                src={projectAssets.img8}
                alt="Saanjh Luxury Homes with Jain Derasar 3D Render"
                className="w-full h-[380px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-navy-950/90 backdrop-blur-md px-3 py-1.5 rounded text-[11px] text-gold-400 font-mono border border-gold-500/30">
                Official 3D Render &bull; Building & Consecrated Jain Derasar
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-ivory-200">
                <span className="text-xs text-ivory-100 font-medium">
                  "Your spiritual sanctuary right within the community"
                </span>
                <button
                  onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-8"))}
                  className="p-2 bg-navy-950/85 hover:bg-gold-500 hover:text-navy-950 rounded text-ivory-200 transition-colors shadow"
                  title="Expand visualization"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 px-2 py-0.5 bg-navy-950 border border-gold-500/30 rounded inline-block">
                  Verified RERA: RAA17162
                </span>
                <h3 className="font-serif text-3xl text-ivory-100">
                  Paldi's New Signature of Calm
                </h3>
                <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed">
                  Conceived for discerning homeowners who desire uncluttered living without compromising on central location. Saanjh brings together warm natural materials, rooftop terrace amenities, deep garden balconies, and only two residences per floor.
                </p>
              </div>

              {/* Verified Facts Summary */}
              <div className="space-y-2.5 border-t border-navy-800 pt-4 text-xs">
                <div className="flex justify-between py-1 border-b border-navy-850">
                  <span className="text-ivory-300/60">Typologies</span>
                  <span className="text-ivory-100 font-medium">3 BHK & 4 BHK Luxury Suites</span>
                </div>
                <div className="flex justify-between py-1 border-b border-navy-850">
                  <span className="text-ivory-300/60">Super Built-Up Area</span>
                  <span className="text-gold-400 font-medium">3 BHK: 2430 & 2700 | 4 BHK: 3330 SQFT</span>
                </div>
                <div className="flex justify-between py-1 border-b border-navy-850">
                  <span className="text-ivory-300/60">Master Bedroom</span>
                  <span className="text-ivory-100 font-medium">Spacious 19 x 10 FT Master Suite</span>
                </div>
                <div className="flex justify-between py-1 border-b border-navy-850">
                  <span className="text-ivory-300/60">Total Community</span>
                  <span className="text-ivory-100 font-medium">15 Private Units Only</span>
                </div>
                <div className="flex justify-between py-1 border-b border-navy-850">
                  <span className="text-ivory-300/60">Spiritual Heart</span>
                  <span className="text-gold-300 font-medium">On-Premise Jain Derasar</span>
                </div>
                <div className="flex justify-between py-1 border-b border-navy-850">
                  <span className="text-ivory-300/60">Proposed Possession</span>
                  <span className="text-ivory-100 font-medium">In ~2 Years (Dec 2028 RERA target)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/projects/saanjh"
                  className="w-full sm:w-auto px-6 py-3 rounded-sm bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest text-center transition-colors"
                >
                  View Full Project Details
                </Link>
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Brochure & Floor Plans')}
                  className="w-full sm:w-auto px-6 py-3 rounded-sm border border-gold-500/40 text-gold-300 hover:bg-navy-950 text-xs uppercase tracking-widest text-center transition-colors"
                >
                  Request Brochure
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION F: A HOME DESIGNED AROUND LIVING
         ======================================================== */}
      <section className="py-24 sm:py-32 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600">
              Human-Centered Design
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy-950">
              A Home Designed Around Living
            </h2>
            <p className="text-sm text-charcoal/80">
              Every detail is calibrated to enhance daily peace, family bonding, and restorative rest.
            </p>
          </div>

          <div className="space-y-20">
            
            {/* Story 1: Living Sanctuaries with Authentic img1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-mono">01 &bull; Living Sanctuaries</span>
                <h3 className="font-serif text-3xl sm:text-4xl text-navy-950">
                  Where spiritual connections meet contemporary living.
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Generous window apertures capture the gentle morning sunlight, framing serene vistas of the on-premise Jain Derasar while keeping the living and formal dining salons naturally illuminated and ventilated.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-charcoal/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Double-height ceiling volume encouraging gentle air circulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Direct visual connection to sacred Derasar morning darshan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Deep covered verandas for quiet evening tea</span>
                  </li>
                </ul>
              </div>
              <div 
                onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-1"))}
                className="lg:col-span-6 rounded overflow-hidden shadow-luxury group cursor-pointer relative"
              >
                <img
                  src={projectAssets.img1}
                  alt="Where spiritual connections meet contemporary living room morning view"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-gold-300 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge Visual</span>
                </div>
              </div>
            </div>

            {/* Story 2: Master Suite Proportions with Authentic img6 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-mono">02 &bull; Master Bedroom Sanctuary</span>
                <h3 className="font-serif text-3xl sm:text-4xl text-navy-950">
                  Not just a bedroom. Spacious master suites from 19x10 FT.
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Because your dreams also need space to stretch. Saanjh’s master suites are designed as independent wellness retreats with designated wardrobe corridors, en-suite baths, and expansive floor-to-ceiling horizon views across Paldi.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-charcoal/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Grand 19x10 FT master bedroom dimensions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Acoustic buffering ensuring quiet, restorative night sleep</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Warm wood fluting & ambient indirect lighting design</span>
                  </li>
                </ul>
              </div>
              <div 
                onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-6"))}
                className="lg:col-span-6 lg:order-1 rounded overflow-hidden shadow-luxury group cursor-pointer relative"
              >
                <img
                  src={projectAssets.img6}
                  alt="Spacious Master Bedrooms from 19x10 FT"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-gold-300 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge Visual</span>
                </div>
              </div>
            </div>

            {/* Story 3: Multigenerational Harmony with Authentic img15 & img13 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-gold-600 font-mono">03 &bull; Family Values</span>
                <h3 className="font-serif text-3xl sm:text-4xl text-navy-950">
                  Where your values have a home.
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Honoring the cultural fabric of Ahmedabad, each residence balances communal family warmth with respectful privacy. Children study in naturally illuminated alcoves, elders experience peaceful morning darshan, and families celebrate milestones together.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-charcoal/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>On-premise Derasar and peaceful community gardens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Low density of just 15 residences for quiet, dignified living</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Close to renowned Paldi schools, libraries & Upashrays</span>
                  </li>
                </ul>
              </div>
              <div 
                onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-15"))}
                className="lg:col-span-6 rounded overflow-hidden shadow-luxury group cursor-pointer relative"
              >
                <img
                  src={projectAssets.img15}
                  alt="Where Your Values Have a Home"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-gold-300 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge Visual</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION G: RESIDENCES & FLOOR PLANS (WITH OFFICIAL SIZING)
         ======================================================== */}
      <section className="py-24 bg-navy-950 text-ivory-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              Curated Typologies
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ivory-100">
              Residences & Floor Layouts
            </h2>
            <p className="text-xs sm:text-sm text-ivory-300/80">
              "Finally, a home where sq.ft. means more space, not more furniture."
            </p>
          </div>

          {/* Interactive Configuration Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-sm bg-navy-900 border border-navy-800">
              {project.configurationsList.map((cfg) => (
                <button
                  key={cfg.id}
                  onClick={() => setSelectedConfigId(cfg.id)}
                  className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                    selectedConfigId === cfg.id
                      ? 'bg-gold-500 text-navy-950 shadow-md'
                      : 'text-ivory-300 hover:text-white'
                  }`}
                >
                  {cfg.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Configuration Card */}
          <div className="bg-navy-900 border border-navy-800 rounded-sm p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest bg-navy-950 px-2.5 py-1 rounded border border-gold-500/30">
                    {selectedConfig.badge}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-ivory-100 mt-3">
                    {selectedConfig.name}
                  </h3>
                  <p className="text-lg text-gold-300 font-mono mt-1">
                    {selectedConfig.superBuiltUp}
                  </p>
                  <p className="text-xs text-gold-400/90 font-mono">
                    {selectedConfig.carpetArea}
                  </p>
                  <p className="text-xs text-ivory-300/70 mt-2">
                    {selectedConfig.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="space-y-2.5 pt-4 border-t border-navy-800 text-xs">
                  {selectedConfig.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between py-1 border-b border-navy-850">
                      <span className="text-ivory-300/70">{item.label}</span>
                      <span className="text-ivory-100 font-medium text-right max-w-xs">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onOpenFloorPlan && onOpenFloorPlan(selectedConfig)}
                    className="px-6 py-3 rounded-sm bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Floor Plan Preview</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Floor Plan Request', selectedConfig.name)}
                    className="px-6 py-3 rounded-sm border border-navy-700 hover:border-gold-500 text-ivory-200 text-xs uppercase tracking-widest transition-colors text-center"
                  >
                    Request Brochure PDF
                  </button>
                </div>
              </div>

              {/* Right: Authentic Sizing Graphic / Blueprint Preview */}
              <div 
                onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-19"))}
                className="lg:col-span-6 bg-navy-950 p-4 sm:p-6 rounded border border-navy-800 cursor-pointer group hover:border-gold-500/50 transition-all text-center relative overflow-hidden"
              >
                <div className="relative rounded overflow-hidden">
                  <img
                    src={selectedConfig.image}
                    alt={selectedConfig.name}
                    className="w-full h-80 sm:h-96 object-cover rounded group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent flex flex-col justify-end p-6 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">
                      Authentic Project Sizing Creative
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-ivory-100 mt-1 font-semibold">
                      {selectedConfig.name}
                    </h4>
                    <p className="text-xs text-gold-300 font-mono mt-1">
                      {selectedConfig.superBuiltUp}
                    </p>
                    <span className="text-[11px] text-ivory-300/80 mt-2 flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-gold-400" />
                      <span>Click to view in high-resolution lightbox</span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION H: LIFESTYLE AMENITIES (FEATURING PROJECT ASSETS)
         ======================================================== */}
      <section className="py-24 sm:py-32 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600 block mb-2">
                Thoughtful Living & 30+ Amenities
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-navy-950">
                Curated Amenities for Everyday Serenity
              </h2>
            </div>
            <p className="text-xs text-mutedGray max-w-sm md:text-right">
              * Showcasing authentic 3D renders and project campaign assets for Saanjh, Paldi.
            </p>
          </div>

          {/* Asymmetric 6-Tile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.amenities.map((amenity) => (
              <div 
                key={amenity.id}
                className="bg-white border border-ivory-300 rounded-sm overflow-hidden shadow-subtle group hover:shadow-luxury hover:border-gold-500/40 transition-all duration-300 flex flex-col"
              >
                <div 
                  className="h-56 overflow-hidden relative cursor-pointer"
                  onClick={() => {
                    const idx = project.gallery.findIndex(g => g.url === amenity.image);
                    if (idx !== -1 && onOpenLightbox) onOpenLightbox(idx);
                  }}
                >
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-sm text-gold-400 text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded border border-gold-500/20">
                    {amenity.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-navy-950/70 p-1.5 rounded text-gold-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl text-navy-950 font-semibold group-hover:text-gold-700 transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-xs text-charcoal/80 leading-relaxed mt-2">
                      {amenity.description}
                    </p>
                  </div>

                  <span className="text-[10px] text-mutedGray/80 italic pt-2 border-t border-ivory-200 block">
                    {amenity.verificationNote}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION I: LOCATION & CONNECTIVITY (WITH AUTHENTIC MAP & GUJARATI ASSET)
         ======================================================== */}
      <section className="py-24 bg-navy-950 text-ivory-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Location Story */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 block">
                Prestigious Neighborhood
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-ivory-100">
                Paldi, Ahmedabad. <br />
                <span className="italic font-normal text-gold-300">Where Heritage Meets Ease.</span>
              </h2>
              
              <div className="p-4 rounded bg-navy-900 border border-gold-500/30 font-serif italic text-sm text-gold-300">
                "શહેર સુધી પહોંચવાના રસ્તા સરળ, કારણ કે CONNECTIVITY છે Paldi ના Prime Address સાથે."
              </div>

              <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
                {project.locationDetails.description}
              </p>

              {/* Neighborhood Qualities */}
              <div className="space-y-3 pt-2">
                {project.locationDetails.neighborhoodQualities.map((item, i) => (
                  <div key={i} className="p-3.5 rounded bg-navy-900 border border-navy-850 space-y-1">
                    <h4 className="font-serif text-base text-gold-300 font-semibold">{item.title}</h4>
                    <p className="text-xs text-ivory-300/80">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Site Visit')}
                  className="px-6 py-3 rounded-sm bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-colors text-center"
                >
                  Request Exact Location Guide
                </button>
              </div>
            </div>

            {/* Right Location Card featuring Authentic Campaign Creatives */}
            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Visual 1: img4 Connectivity */}
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-4"))}
                  className="rounded overflow-hidden border border-navy-800 shadow-2xl group cursor-pointer relative bg-black"
                >
                  <img
                    src={projectAssets.img4}
                    alt="Quick Access to Hospitals, Shopping, Transit - 30+ Amenities"
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-mono text-gold-400">CONNECTIVITY GUIDE</span>
                    <span className="text-xs font-semibold text-ivory-100">30+ Amenities & Hospitals</span>
                  </div>
                </div>

                {/* Visual 2: img20 Gujarati Aerial */}
                <div 
                  onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-20"))}
                  className="rounded overflow-hidden border border-navy-800 shadow-2xl group cursor-pointer relative bg-black"
                >
                  <img
                    src={projectAssets.img20}
                    alt="Paldi Prime Address Master Aerial View"
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] font-mono text-gold-400">PALDI AERIAL VIEW</span>
                    <span className="text-xs font-semibold text-ivory-100">Connectivity & Environs</span>
                  </div>
                </div>

              </div>

              <div className="p-4 bg-navy-900 border border-navy-800 rounded text-xs text-ivory-300/80 leading-relaxed">
                <span className="text-gold-400 font-semibold block mb-1">Paldi Micro-Market Advantage:</span>
                Located in Jain Nagar / Shantivan vicinity, offering smooth transit to Ashram Road, Riverfront, CG Road, and SG Highway with zero traffic bottlenecks.
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION J: COMPREHENSIVE PROJECT GALLERY
          Featuring BOTH Official Campaign Creatives AND Curated Architectural Photography
         ======================================================== */}
      <section className="py-24 sm:py-32 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600 block mb-2">
                Complete Visual Archive ({project.gallery.length} Images)
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-navy-950">
                Architectural & Campaign Gallery
              </h2>
              <p className="text-xs text-charcoal/70 mt-1">
                Featuring official Dhanlaxmi Group campaign creatives and architectural concept photography.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                'All',
                'Official Campaign Creatives',
                'Architecture',
                'Interiors & Master Suites',
                'Derasar & Spiritual',
                'Location & Paldi'
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveGalleryFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeGalleryFilter === cat
                      ? 'bg-navy-950 text-gold-400 shadow-sm'
                      : 'bg-white border border-ivory-300 text-charcoal/80 hover:bg-ivory-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((item) => {
              const galleryIndex = project.gallery.findIndex(g => g.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox && onOpenLightbox(galleryIndex !== -1 ? galleryIndex : 0)}
                  className="group relative cursor-pointer overflow-hidden rounded-sm bg-navy-950 aspect-[4/3] shadow-subtle hover:shadow-luxury transition-all"
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-navy-950/85 backdrop-blur-sm text-gold-400 text-[9px] uppercase tracking-wider font-mono px-2 py-0.5 rounded border border-gold-500/25">
                    {item.badge || item.category}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-ivory-100">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-base leading-tight font-semibold line-clamp-2">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-[11px] text-ivory-300/80 line-clamp-1 mt-0.5">
                        {item.subtitle}
                      </p>
                    )}
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-gold-300">
                      <Maximize2 className="w-3 h-3" />
                      <span>View in Fullscreen Lightbox</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <span className="text-[11px] text-mutedGray">
              Showing {filteredGallery.length} of {project.gallery.length} visual assets &bull; Click any image to launch full-resolution lightbox viewer with descriptions
            </span>
          </div>

        </div>
      </section>


      {/* ========================================================
          SECTION K: PROJECT FACTS & RERA TRANSPARENCY
         ======================================================== */}
      <section className="py-20 bg-ivory-200/60 border-y border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReraCard />
        </div>
      </section>


      {/* ========================================================
          SECTION L: FINAL CONVERSION SECTION
         ======================================================== */}
      <section className="py-24 sm:py-32 bg-navy-950 text-ivory-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={projectAssets.img11}
            alt="Saanjh Facade Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 block">
            Private Consultations
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-ivory-100 font-light leading-tight">
            Your next chapter begins <br />
            <span className="italic font-normal text-gold-300">with a conversation.</span>
          </h2>
          <p className="text-xs sm:text-base text-ivory-200/80 max-w-xl mx-auto leading-relaxed">
            Discover the residences at Saanjh and speak with the team about your family's bespoke requirements in Paldi, Ahmedabad.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Site Visit')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-[0.18em] transition-all shadow-luxury hover:shadow-gold-glow"
            >
              Request a Site Visit
            </button>

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('General Enquiry')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-sm border border-gold-500/50 hover:border-gold-300 text-ivory-100 hover:bg-gold-500/10 text-xs uppercase tracking-[0.18em] transition-colors"
            >
              Speak to the Advisory Team
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-ivory-300/70">
            <a
              href={`tel:${siteConfig.company.contactNumbers[0].raw}`}
              className="hover:text-gold-300 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Sales Reference: {siteConfig.company.contactNumbers[0].display}</span>
            </a>
            <span className="text-gold-500/40">&bull;</span>
            <a
              href={`https://wa.me/${siteConfig.company.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

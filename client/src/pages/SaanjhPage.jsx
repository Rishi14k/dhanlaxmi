import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Calendar, 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  Sparkles, 
  Maximize2, 
  Download, 
  ShieldCheck, 
  ExternalLink,
  Send,
  HelpCircle,
  Sun,
  HeartPulse
} from 'lucide-react';
import { siteConfig, projectAssets } from '../data/companyData';
import ReraCard from '../components/ReraCard';

export default function SaanjhPage({ onOpenEnquiry, onOpenFloorPlan, onOpenLightbox }) {
  const project = siteConfig.flagshipProject;
  const [selectedConfigId, setSelectedConfigId] = useState('3bhk');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const selectedConfig = project.configurationsList.find(c => c.id === selectedConfigId) || project.configurationsList[0];

  // Inline form state
  const [inlineForm, setInlineForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    configuration: '3 BHK',
    enquiryType: 'Site Visit',
    preferredVisitDate: '',
    message: ''
  });
  const [inlineSubmitted, setInlineSubmitted] = useState(false);
  const [inlineLoading, setInlineLoading] = useState(false);

  const handleInlineSubmit = async (e) => {
    e.preventDefault();
    if (!inlineForm.fullName || !inlineForm.phone) return;
    setInlineLoading(true);

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inlineForm)
      });
      setInlineSubmitted(true);
    } catch (err) {
      setInlineSubmitted(true);
    } finally {
      setInlineLoading(false);
    }
  };

  return (
    <div className="space-y-0 text-charcoal">
      
      {/* ========================================================
          PROJECT HERO
         ======================================================== */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center bg-navy-950 text-ivory-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={projectAssets.main}
            alt="Saanjh Luxury Homes Paldi - Rooftop & Facade 3D Render"
            className="w-full h-full object-cover brightness-[0.38] contrast-[1.1] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-block px-4 py-1 rounded bg-gold-500/20 text-gold-300 border border-gold-500/40 text-[11px] uppercase tracking-[0.25em] font-mono mb-4">
            Flagship Residential Microsite &bull; Dhanlaxmi Group
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-100 font-light">
            Saanjh <span className="italic font-normal text-gold-300">Luxury Homes</span>
          </h1>
          <p className="mt-3 font-serif italic text-gold-300 text-lg sm:text-xl">
            "Terrace Amenities That Bring Paldi's Skyline to You"
          </p>
          <p className="mt-3 text-sm sm:text-lg text-ivory-200/90 font-light max-w-2xl mx-auto">
            Jain Nagar / Shantivan, Paldi, Ahmedabad &bull; 3 & 4 BHK Bespoke Residences (2,430 – 3,330 SQFT)
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-gold-300">
            <span className="px-3.5 py-1.5 bg-navy-900/80 border border-navy-700 rounded shadow">
              Only 15 Exclusive Residences
            </span>
            <span className="px-3.5 py-1.5 bg-navy-900/80 border border-navy-700 rounded shadow">
              19x10 FT Master Suites
            </span>
            <span className="px-3.5 py-1.5 bg-navy-900/80 border border-navy-700 rounded shadow">
              On-Premise Jain Derasar
            </span>
            <span className="px-3.5 py-1.5 bg-navy-900/80 border border-navy-700 rounded shadow">
              GujRERA: RAA17162
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('Site Visit', 'Saanjh')}
              className="px-8 py-3.5 rounded-sm bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-luxury hover:shadow-gold-glow"
            >
              Request Private Tour
            </button>
            <button
              onClick={() => onOpenFloorPlan && onOpenFloorPlan(selectedConfig)}
              className="px-8 py-3.5 rounded-sm border border-gold-500/50 hover:border-gold-300 text-ivory-100 text-xs uppercase tracking-widest transition-colors"
            >
              Explore 3 & 4 BHK Floor Plans
            </button>
          </div>
        </div>
      </section>


      {/* ========================================================
          PROJECT ARCHITECTURAL OVERVIEW
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600">
                Architectural Vision
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-navy-950 leading-tight">
                Crafted for calm. <br />
                <span className="italic font-normal text-gold-600">Built to endure.</span>
              </h2>
              <p className="text-sm text-charcoal/85 leading-relaxed">
                Saanjh is conceived as a serene sanctuary within Ahmedabad's beloved Paldi neighborhood. Developed by Dhanlaxmi Buildwell LLP, the development balances contemporary architectural clean lines with timeless Indian residential sensibilities.
              </p>
              <p className="text-sm text-charcoal/85 leading-relaxed">
                Every residence is designed with expansive dual-orientation facades, welcoming the morning sunrise and facilitating breezy cross-ventilation. With only two private units per floor and a total of 15 residences, homeowners enjoy unmatched discretion, security, and tranquility.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-ivory-300">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-navy-950 uppercase tracking-wider">Promoter Entity</span>
                  <p className="text-xs text-charcoal/80">Dhanlaxmi Buildwell LLP</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-navy-950 uppercase tracking-wider">Target Possession</span>
                  <p className="text-xs text-charcoal/80">Possession in ~2 Years (Dec 2028)</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-16"))}
              className="lg:col-span-6 space-y-3 cursor-pointer group"
            >
              <div className="rounded overflow-hidden shadow-luxury relative">
                <img
                  src={projectAssets.img16}
                  alt="Saanjh Architectural Elevation - Feel the rhythm of complete living"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 bg-navy-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-gold-300 flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge Render</span>
                </div>
              </div>
              <p className="text-[11px] text-mutedGray italic text-center">
                * Official 3D architectural elevation: "Feel the Rhythm of Complete Living - Health, Happiness, Harmony"
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          SPECIAL HIGHLIGHT: ON-PREMISE JAIN DERASAR
         ======================================================== */}
      <section className="py-20 bg-navy-950 text-ivory-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div 
              onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-3"))}
              className="lg:col-span-6 cursor-pointer group relative rounded overflow-hidden shadow-2xl border border-navy-800"
            >
              <img
                src={projectAssets.img3}
                alt="A Dedicated Jain Derasar within the Premises"
                className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">
                  SACRED ARCHITECTURE
                </span>
                <h4 className="font-serif text-2xl text-ivory-100 font-semibold mt-1">
                  A Dedicated Jain Derasar within the Premises
                </h4>
                <p className="text-xs text-ivory-300/80 mt-1">
                  Intimate consecrated temple courtyard for peaceful daily darshan
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Spiritual Centerpiece</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-ivory-100 leading-tight">
                Devotion seamlessly woven <br />
                <span className="italic font-normal text-gold-300">into everyday life.</span>
              </h2>
              <p className="text-xs sm:text-sm text-ivory-200/90 leading-relaxed">
                At Saanjh, faith and family harmony are not secondary considerations — they are at the center of the site plan. The consecrated on-premise Jain Derasar offers an authentic marble sanctuary where elders and children can perform daily rituals without stepping into city traffic.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded bg-navy-900 border border-navy-850">
                  <h4 className="font-serif text-lg text-gold-300 font-semibold">Morning Darshan View</h4>
                  <p className="text-xs text-ivory-300/80 mt-1">
                    Direct picture window perspectives from living and dining salons towards the Derasar courtyard.
                  </p>
                </div>
                <div className="p-4 rounded bg-navy-900 border border-navy-850">
                  <h4 className="font-serif text-lg text-gold-300 font-semibold">Peaceful Microclimate</h4>
                  <p className="text-xs text-ivory-300/80 mt-1">
                    Surrounded by flowering native trees and natural stone walkways for meditative pradakshina.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================================
          CONFIGURATIONS SELECTOR & FLOOR PLANS (OFFICIAL SIZING)
         ======================================================== */}
      <section className="py-20 bg-ivory-100 text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600">
              Floor Plan Typologies
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-navy-950">
              3 BHK & 4 BHK Residences
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/80">
              Official Campaign Specifications: 3 BHK (2,430 & 2,700 SQFT) & 4 BHK (3,330 SQFT)
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-white border border-ivory-300 rounded shadow-sm">
              {project.configurationsList.map((cfg) => (
                <button
                  key={cfg.id}
                  onClick={() => setSelectedConfigId(cfg.id)}
                  className={`px-8 py-3 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
                    selectedConfigId === cfg.id
                      ? 'bg-navy-950 text-gold-400 shadow-md'
                      : 'text-charcoal/70 hover:text-navy-950'
                  }`}
                >
                  {cfg.name}
                </button>
              ))}
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-white border border-ivory-300 rounded-sm p-6 sm:p-10 shadow-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-gold-700 uppercase tracking-widest bg-ivory-100 px-2.5 py-1 rounded border border-gold-500/30">
                    {selectedConfig.badge}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-navy-950 mt-2">
                    {selectedConfig.name}
                  </h3>
                  <p className="text-xl text-gold-700 font-mono mt-1 font-semibold">
                    {selectedConfig.superBuiltUp}
                  </p>
                  <p className="text-xs text-charcoal/70 mt-1 font-mono">
                    {selectedConfig.carpetArea}
                  </p>
                  <p className="text-xs text-charcoal/80 mt-2 leading-relaxed">
                    {selectedConfig.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-ivory-200 text-xs">
                  {selectedConfig.specs.map((item, idx) => (
                    <div key={idx} className="p-3 bg-ivory-50 rounded border border-ivory-200">
                      <span className="text-[11px] text-gold-700 block font-semibold">{item.label}</span>
                      <span className="text-charcoal/90 text-xs">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => onOpenFloorPlan && onOpenFloorPlan(selectedConfig)}
                    className="px-6 py-3 rounded-sm bg-navy-950 hover:bg-navy-900 text-gold-400 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 shadow"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Open Interactive Blueprint</span>
                  </button>
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry('Floor Plan Request', selectedConfig.name)}
                    className="px-6 py-3 rounded-sm border border-navy-900 hover:border-gold-600 text-navy-950 text-xs uppercase tracking-widest transition-colors"
                  >
                    Request Brochure PDF
                  </button>
                </div>
              </div>

              {/* Schematic / Campaign Asset Preview */}
              <div 
                onClick={() => onOpenLightbox && onOpenLightbox(project.gallery.findIndex(g => g.id === "asset-19"))}
                className="lg:col-span-5 rounded overflow-hidden border border-ivory-300 shadow-md group cursor-pointer relative bg-navy-950"
              >
                <img
                  src={selectedConfig.image}
                  alt={selectedConfig.name}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent flex flex-col justify-end p-6 text-ivory-100">
                  <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                    Campaign Sizing Breakdown
                  </span>
                  <span className="font-serif text-xl font-bold mt-1">
                    {selectedConfig.name}
                  </span>
                  <span className="text-xs text-gold-300 font-mono">
                    {selectedConfig.superBuiltUp}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ========================================================
          VERIFIED AMENITIES (WITH PROJECT ASSETS)
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-navy-950 text-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              Community Privileges
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-ivory-100">
              Amenities Designed for Quiet Living
            </h2>
            <p className="text-xs text-ivory-300/80">
              Featuring 30+ amenities including on-premise Derasar, rooftop terrace garden, and spacious 19x10 ft suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.amenities.map((amenity) => (
              <div 
                key={amenity.id} 
                className="bg-navy-900 border border-navy-800 rounded overflow-hidden shadow-2xl flex flex-col group hover:border-gold-500/40 transition-colors"
              >
                <div 
                  className="h-52 overflow-hidden cursor-pointer relative"
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
                  <div className="absolute top-3 left-3 bg-navy-950/90 text-gold-400 text-[10px] font-mono uppercase px-2.5 py-1 rounded border border-gold-500/20">
                    {amenity.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-serif text-2xl text-ivory-100 font-semibold group-hover:text-gold-300 transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-xs text-ivory-300/80 leading-relaxed mt-2">
                      {amenity.description}
                    </p>
                  </div>
                  <span className="text-[10px] text-gold-400/80 italic pt-2 border-t border-navy-800">
                    {amenity.verificationNote}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================================
          RERA & STATUTORY TRANSPARENCY
         ======================================================== */}
      <section className="py-16 bg-ivory-200/70 border-y border-ivory-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReraCard />
        </div>
      </section>


      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS (ACCORDION)
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-navy-950 text-ivory-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              Clear & Honest Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ivory-100">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-ivory-300/80">
              Everything prospective homebuyers should know about Saanjh in Paldi, Ahmedabad.
            </p>
          </div>

          <div className="space-y-4">
            {project.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-navy-900 border border-navy-800 rounded-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-ivory-100 font-medium">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-navy-950 text-gold-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-ivory-300/85 leading-relaxed border-t border-navy-850">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ========================================================
          INLINE SITE VISIT & ENQUIRY FORM
         ======================================================== */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-ivory-300 rounded-sm p-8 sm:p-12 shadow-luxury">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600">
                Private Consultation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy-950 font-bold">
                Schedule a Private Site Visit to Saanjh
              </h2>
              <p className="text-xs text-charcoal/80">
                Register your interest to receive official architectural drawings and coordinate an in-person site walkthrough in Paldi.
              </p>
            </div>

            {inlineSubmitted ? (
              <div className="p-6 bg-ivory-100 rounded border border-gold-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-navy-950">Thank You, {inlineForm.fullName}</h3>
                <p className="text-xs text-charcoal/80">
                  Your site visit request has been logged. Our advisory desk will reach out to confirm your preferred slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInlineSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={inlineForm.fullName}
                      onChange={(e) => setInlineForm({ ...inlineForm, fullName: e.target.value })}
                      placeholder="e.g. Mukesh Patel"
                      className="w-full px-3.5 py-2.5 text-xs bg-ivory-50 border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={inlineForm.phone}
                      onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full px-3.5 py-2.5 text-xs bg-ivory-50 border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                      Configuration Interest
                    </label>
                    <select
                      value={inlineForm.configuration}
                      onChange={(e) => setInlineForm({ ...inlineForm, configuration: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-ivory-50 border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                    >
                      <option value="3 BHK (2,430 & 2,700 SQFT)">3 BHK (2,430 & 2,700 SQFT)</option>
                      <option value="4 BHK (3,330 SQFT)">4 BHK (3,330 SQFT)</option>
                      <option value="Not sure / Both">Both / Exploring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={inlineForm.preferredVisitDate}
                      onChange={(e) => setInlineForm({ ...inlineForm, preferredVisitDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-ivory-50 border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={inlineLoading}
                    className="w-full py-3.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>{inlineLoading ? 'Submitting...' : 'Confirm Site Visit Request'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

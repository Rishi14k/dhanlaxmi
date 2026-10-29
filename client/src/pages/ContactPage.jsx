import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Info,
  ExternalLink 
} from 'lucide-react';
import { siteConfig, projectAssets } from '../data/companyData';
import ReraCard from '../components/ReraCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    configuration: '3 BHK',
    enquiryType: 'Site Visit',
    preferredVisitDate: '',
    preferredTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registeredLeadId, setRegisteredLeadId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (minimum 2 characters)';
    }
    if (!formData.phone.trim() || !/^[0-9+() -]{8,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid telephone number';
    }
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        const data = await res.json();
        setRegisteredLeadId(data.data?.id || 'DEMO-' + Date.now().toString(36).toUpperCase());
      } else {
        setRegisteredLeadId('DEMO-' + Date.now().toString(36).toUpperCase());
      }
      setIsSuccess(true);
    } catch (err) {
      setRegisteredLeadId('DEMO-' + Date.now().toString(36).toUpperCase());
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Dhanlaxmi Group Sales Team, I would like to enquire about Saanjh Luxury Homes in Paldi, Ahmedabad.\n\n` +
      `Configuration: ${formData.configuration}\n` +
      `Enquiry Type: ${formData.enquiryType}\n` +
      `Name: ${formData.fullName || 'Prospective Buyer'}`
    );
    return `https://wa.me/${siteConfig.company.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="space-y-0 text-charcoal">
      
      {/* Header */}
      <section className="bg-navy-950 text-ivory-100 py-20 border-b border-navy-850">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 block">
            Direct Coordination Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory-100 font-light">
            Contact & Private Consultations
          </h1>
          <p className="text-sm sm:text-base text-ivory-300/80 max-w-xl mx-auto">
            Schedule a confidential site walkthrough or speak directly with the sales advisory team for Saanjh Residences, Paldi.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Reference Details & WhatsApp */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold block mb-1">
                  Connect Directly
                </span>
                <h2 className="font-serif text-3xl text-navy-950 font-bold">
                  Sales Reference & Project Desk
                </h2>
                <p className="text-xs text-charcoal/80 mt-2 leading-relaxed">
                  Our representatives are available for personalized walkthroughs and answering all questions regarding carpet area, floor specifications, and booking schedules.
                </p>
              </div>

              {/* Reference Phone Numbers Box */}
              <div className="bg-white border border-ivory-300 rounded-sm p-6 space-y-4 shadow-subtle">
                <span className="text-[11px] uppercase tracking-wider text-mutedGray block font-medium">
                  Telephone Inquiries
                </span>
                {siteConfig.company.contactNumbers.map((num, i) => (
                  <div key={i} className="flex items-center justify-between pb-3 border-b border-ivory-200 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-navy-950 text-gold-400 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <a href={`tel:${num.raw}`} className="text-sm font-semibold text-navy-950 hover:text-gold-600 transition-colors">
                          {num.display}
                        </a>
                        <span className="text-[10px] text-mutedGray block">{num.label}</span>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-ivory-200 text-charcoal/70">
                      Unverified Ref
                    </span>
                  </div>
                ))}
              </div>

              {/* Instant WhatsApp Quick Connect */}
              <div className="bg-navy-950 text-ivory-100 rounded-sm p-6 space-y-4 border border-navy-850 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ivory-100">WhatsApp Sales Desk</h3>
                    <span className="text-[11px] text-gold-400">Direct message coordination</span>
                  </div>
                </div>
                <p className="text-xs text-ivory-300/80 leading-relaxed">
                  Prefer messaging? Start an instant chat on WhatsApp to receive the Saanjh presentation brochure and floor configurations directly on your phone.
                </p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp Consultation</span>
                </a>
              </div>

              {/* Location Card with Authentic Asset */}
              <div className="bg-white border border-ivory-300 rounded-sm overflow-hidden shadow-subtle">
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={projectAssets.img4}
                    alt="Quick Access to Hospitals, Shopping & Smooth Travel - Shantivan Paldi"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[10px] font-mono text-gold-300 uppercase tracking-widest">
                      Shantivan, Paldi &bull; 30+ Amenities
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-navy-950 font-bold">Project & Site Office</h4>
                      <span className="text-[11px] text-mutedGray">Jain Nagar / Shantivan Area, Paldi, Ahmedabad 380007</span>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal/75 leading-relaxed">
                    Located in the serene Shantivan / Jain Nagar neighborhood in Paldi. Site appointments are scheduled prior to arrival to ensure personalized guidance.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Registration & Site Visit Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-ivory-300 rounded-sm p-8 sm:p-12 shadow-luxury">
                
                <div className="mb-6 space-y-2">
                  <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                    Confidential Registration
                  </span>
                  <h3 className="font-serif text-3xl text-navy-950 font-bold">
                    Schedule a Visit or Submit an Enquiry
                  </h3>
                  <p className="text-xs text-charcoal/80">
                    Please provide your contact details. A sales director from Dhanlaxmi Group will coordinate your appointment.
                  </p>
                </div>

                {isSuccess ? (
                  <div className="p-8 bg-ivory-100 rounded border border-gold-500/30 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl text-navy-950 font-bold">
                      Registration Confirmed
                    </h4>
                    <p className="text-xs text-charcoal/80 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-navy-950">{formData.fullName}</strong>. Your enquiry has been received in this concept demo portal with Reference ID <span className="font-mono font-bold text-navy-900 bg-ivory-200 px-2 py-0.5 rounded">{registeredLeadId}</span>.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setIsSuccess(false);
                          setFormData({
                            fullName: '',
                            phone: '',
                            email: '',
                            configuration: '3 BHK',
                            enquiryType: 'Site Visit',
                            preferredVisitDate: '',
                            preferredTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
                            message: ''
                          });
                        }}
                        className="px-6 py-2 rounded bg-navy-950 text-gold-400 font-medium text-xs uppercase tracking-wider hover:bg-navy-900"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Enquiry Type Selector */}
                    <div className="grid grid-cols-2 gap-2 p-1 bg-ivory-200 rounded border border-ivory-300">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, enquiryType: 'Site Visit' })}
                        className={`py-2 text-xs font-semibold rounded transition-all ${
                          formData.enquiryType === 'Site Visit'
                            ? 'bg-navy-950 text-gold-400 shadow-sm'
                            : 'text-charcoal/80 hover:text-navy-950'
                        }`}
                      >
                        Request Site Visit
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, enquiryType: 'General Enquiry' })}
                        className={`py-2 text-xs font-semibold rounded transition-all ${
                          formData.enquiryType === 'General Enquiry'
                            ? 'bg-navy-950 text-gold-400 shadow-sm'
                            : 'text-charcoal/80 hover:text-navy-950'
                        }`}
                      >
                        General Project Enquiry
                      </button>
                    </div>

                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Anand Shah"
                          className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded focus:outline-none focus:ring-1 focus:ring-gold-500 ${
                            errors.fullName ? 'border-red-500' : 'border-ivory-300'
                          }`}
                        />
                        {errors.fullName && <p className="text-[10px] text-red-600 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                          Telephone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98XXX XXXXX"
                          className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded focus:outline-none focus:ring-1 focus:ring-gold-500 ${
                            errors.phone ? 'border-red-500' : 'border-ivory-300'
                          }`}
                        />
                        {errors.phone && <p className="text-[10px] text-red-600 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email & Configuration */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                          Email Address <span className="text-mutedGray text-[10px] lowercase">(optional)</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="anand@example.com"
                          className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded focus:outline-none focus:ring-1 focus:ring-gold-500 ${
                            errors.email ? 'border-red-500' : 'border-ivory-300'
                          }`}
                        />
                        {errors.email && <p className="text-[10px] text-red-600 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                          Preferred Configuration
                        </label>
                        <select
                          value={formData.configuration}
                          onChange={(e) => setFormData({ ...formData, configuration: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-white border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                        >
                          <option value="3 BHK">3 BHK Luxury Residence</option>
                          <option value="4 BHK">4 BHK Grand Residence</option>
                          <option value="Not sure / Both">Both / Undecided</option>
                        </select>
                      </div>
                    </div>

                    {/* Date & Time if Site Visit */}
                    {formData.enquiryType === 'Site Visit' && (
                      <div className="p-4 bg-ivory-100 rounded border border-ivory-300 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-charcoal/80 mb-1">
                            Preferred Inspection Date
                          </label>
                          <input
                            type="date"
                            value={formData.preferredVisitDate}
                            onChange={(e) => setFormData({ ...formData, preferredVisitDate: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-white border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-charcoal/80 mb-1">
                            Preferred Time Window
                          </label>
                          <select
                            value={formData.preferredTimeSlot}
                            onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                            className="w-full px-3 py-2 text-xs bg-white border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                          >
                            <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                            <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                            <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                        Specific Questions or Remarks <span className="text-mutedGray text-[10px] lowercase">(optional)</span>
                      </label>
                      <textarea
                        rows="3"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please mention any specific inquiries regarding floor plans, parking slots, or handover timeline..."
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                      ></textarea>
                    </div>

                    <p className="text-[10px] text-mutedGray">
                      Your details will be used solely for scheduling your consultation with Dhanlaxmi Group. We respect your complete privacy.
                    </p>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-luxury flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Submitting Registration...' : 'Submit Consultation Request'}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </form>
                )}

              </div>
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

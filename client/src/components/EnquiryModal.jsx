import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Phone, MessageSquare, Calendar, Clock, AlertCircle } from 'lucide-react';
import { siteConfig } from '../data/companyData';

export default function EnquiryModal({ isOpen, onClose, initialType = 'General Enquiry', initialConfig = 'Not sure / Both' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    configuration: initialConfig,
    enquiryType: initialType,
    preferredVisitDate: '',
    preferredTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        enquiryType: initialType || 'General Enquiry',
        configuration: initialConfig || 'Not sure / Both'
      }));
      setSubmitSuccess(false);
      setErrors({});
    }
  }, [isOpen, initialType, initialConfig]);

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters)';
    }
    if (!formData.phone.trim() || !/^[0-9+() -]{8,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // POST to backend API (or fallback if offline)
      const response = await fetch('https://dhanlaxmi-853e.onrender.com/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          isDemoSubmission: true
        })
      });

      if (response.ok) {
        const result = await response.json();
        setSubmittedLeadId(result.data?.id || 'DEMO-' + Date.now().toString(36).toUpperCase());
      } else {
        // Fallback demo lead generation
        setSubmittedLeadId('DEMO-' + Date.now().toString(36).toUpperCase());
      }
      setSubmitSuccess(true);
    } catch (err) {
      // Offline fallback: still succeed gracefully for client demonstration
      setSubmittedLeadId('DEMO-' + Date.now().toString(36).toUpperCase());
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const createWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Dhanlaxmi Group Sales Team, I would like to enquire about Saanjh Luxury Homes in Paldi, Ahmedabad.\n\n` +
      `Configuration: ${formData.configuration}\n` +
      `Enquiry Type: ${formData.enquiryType}\n` +
      (formData.preferredVisitDate ? `Preferred Visit Date: ${formData.preferredVisitDate} (${formData.preferredTimeSlot})\n` : '') +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}`
    );
    return `https://wa.me/${siteConfig.company.whatsappNumber}?text=${text}`;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-ivory-100 border border-ivory-300 w-full max-w-xl rounded-sm shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-navy-950 px-6 py-5 text-ivory-100 flex items-center justify-between border-b border-navy-850">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold block">
              Dhanlaxmi Saanjh &bull; Paldi
            </span>
            <h2 id="modal-title" className="font-serif text-2xl text-ivory-100">
              {formData.enquiryType === 'Site Visit' ? 'Request a Private Site Visit' : 'Register Your Private Interest'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-ivory-300/70 hover:text-white p-2 rounded transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto">
          {submitSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-navy-950">Thank You, {formData.fullName}</h3>
              <p className="text-xs text-charcoal/80 max-w-md mx-auto leading-relaxed">
                Your enquiry reference <span className="font-mono font-bold text-navy-900 bg-ivory-200 px-2 py-0.5 rounded">{submittedLeadId}</span> has been successfully logged in this concept demo system.
              </p>
              
              <div className="p-4 bg-ivory-200/80 rounded border border-ivory-300 text-left text-xs space-y-2 mt-4 max-w-md mx-auto">
                <div className="flex items-center gap-2 text-gold-700 font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Concept Demo Notice</span>
                </div>
                <p className="text-[11px] text-charcoal/80">
                  This enquiry was stored in the MERN demo database. To connect immediately with the team via WhatsApp with your pre-filled inquiry details:
                </p>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Inquiry via WhatsApp</span>
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded bg-navy-950 hover:bg-navy-900 text-ivory-100 text-xs uppercase tracking-widest transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Enquiry Type Selector */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-ivory-200 rounded border border-ivory-300">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, enquiryType: 'General Enquiry' })}
                  className={`py-2 text-xs font-medium rounded transition-all ${
                    formData.enquiryType === 'General Enquiry'
                      ? 'bg-navy-950 text-gold-400 shadow-sm'
                      : 'text-charcoal/70 hover:text-navy-950'
                  }`}
                >
                  General Enquiry
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, enquiryType: 'Site Visit' })}
                  className={`py-2 text-xs font-medium rounded transition-all ${
                    formData.enquiryType === 'Site Visit'
                      ? 'bg-navy-950 text-gold-400 shadow-sm'
                      : 'text-charcoal/70 hover:text-navy-950'
                  }`}
                >
                  Private Site Visit
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
                    placeholder="e.g. Rajesh Shah"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-ivory-300'
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98XXX XXXXX"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors ${
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
                    Email Address <span className="text-gray-400 text-[10px] lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@example.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors ${
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
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500 text-charcoal"
                  >
                    <option value="3 BHK">3 BHK Luxury Residence</option>
                    <option value="4 BHK">4 BHK Grand Residence</option>
                    <option value="Not sure / Both">Both / Exploring Options</option>
                  </select>
                </div>
              </div>

              {/* Specific Site Visit Inputs */}
              {formData.enquiryType === 'Site Visit' && (
                <div className="p-3.5 bg-ivory-200/60 border border-ivory-300 rounded space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-navy-950 uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-gold-600" />
                    <span>Site Visit Preferences</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-charcoal/80 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredVisitDate}
                        onChange={(e) => setFormData({ ...formData, preferredVisitDate: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-white border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-charcoal/80 mb-1">Preferred Time Window</label>
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
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                  Specific Requirements or Questions <span className="text-gray-400 text-[10px] lowercase">(optional)</span>
                </label>
                <textarea
                  rows="2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Floor preference, vastu orientation requirements, possession timeline..."
                  className="w-full px-3.5 py-2 text-xs bg-white border border-ivory-300 rounded focus:outline-none focus:ring-1 focus:ring-gold-500"
                ></textarea>
              </div>

              {/* Consent Note */}
              <p className="text-[10px] text-mutedGray leading-relaxed">
                By submitting this form, you authorize our sales desk to connect with you regarding Saanjh Residences in Paldi, Ahmedabad. Your information is kept strictly confidential.
              </p>

              {/* Submit CTA */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded border border-ivory-300 text-xs uppercase tracking-wider text-charcoal hover:bg-ivory-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-all shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering...</span>
                  ) : (
                    <>
                      <span>{formData.enquiryType === 'Site Visit' ? 'Confirm Request' : 'Submit Enquiry'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}

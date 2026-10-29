import React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/companyData';

export default function WhatsAppButton({ 
  className = '', 
  label = 'Chat on WhatsApp',
  context = 'General Enquiry',
  variant = 'floating' // 'floating' | 'button'
}) {
  const whatsappNumber = siteConfig.company.whatsappNumber;
  
  const encodedText = encodeURIComponent(
    `Hello Dhanlaxmi Group, I am interested in knowing more about Saanjh Residences (Paldi, Ahmedabad). Context: ${context}. Please share the project details.`
  );
  
  const href = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  if (variant === 'button') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md ${className}`}
        aria-label="Connect on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>{label}</span>
      </a>
    );
  }

  // Floating variant for seamless mobile conversion
  return (
    <aside aria-label="WhatsApp Quick Connect" className={`fixed bottom-6 right-6 z-40 ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-navy-950 text-gold-300 hover:text-white border border-gold-500/40 hover:border-gold-400 px-4 py-3 rounded-full shadow-luxury hover:shadow-gold-glow transition-all duration-300 group"
        aria-label="Direct WhatsApp Inquiry"
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm shrink-0">
          <MessageSquare className="w-4 h-4 text-white fill-white" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[10px] text-ivory-300/70 uppercase tracking-widest font-mono">Instant Connect</span>
          <span className="text-xs font-semibold text-ivory-100 group-hover:text-gold-300">WhatsApp Sales Desk</span>
        </div>
      </a>
    </aside>
  );
}

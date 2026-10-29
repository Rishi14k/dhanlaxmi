import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoBanner from './components/DemoBanner';
import ScrollToTop from './components/ScrollToTop';
import EnquiryModal from './components/EnquiryModal';
import FloorPlanModal from './components/FloorPlanModal';
import LightboxModal from './components/LightboxModal';
import PrivacyModal from './components/PrivacyModal';
import WhatsAppButton from './components/WhatsAppButton';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SaanjhPage from './pages/SaanjhPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { siteConfig } from './data/companyData';

export default function App() {
  // Modal states
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryInitialType, setEnquiryInitialType] = useState('General Enquiry');
  const [enquiryInitialConfig, setEnquiryInitialConfig] = useState('Not sure / Both');

  const [floorPlanModalOpen, setFloorPlanModalOpen] = useState(false);
  const [selectedFloorPlanConfig, setSelectedFloorPlanConfig] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Handlers
  const handleOpenEnquiry = (type = 'General Enquiry', config = 'Not sure / Both') => {
    setEnquiryInitialType(type);
    setEnquiryInitialConfig(config);
    setEnquiryModalOpen(true);
  };

  const handleOpenFloorPlan = (config) => {
    setSelectedFloorPlanConfig(config);
    setFloorPlanModalOpen(true);
  };

  const handleOpenLightbox = (index = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory-100 text-charcoal font-sans antialiased selection:bg-gold-500/20 selection:text-navy-950">
        
        {/* Top Demo Disclosure Banner */}
        <DemoBanner />

        {/* Global Navigation */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onOpenFloorPlan={handleOpenFloorPlan} 
                  onOpenLightbox={handleOpenLightbox} 
                />
              } 
            />
            <Route 
              path="/projects" 
              element={
                <ProjectsPage 
                  onOpenEnquiry={handleOpenEnquiry} 
                />
              } 
            />
            <Route 
              path="/projects/saanjh" 
              element={
                <SaanjhPage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onOpenFloorPlan={handleOpenFloorPlan} 
                  onOpenLightbox={handleOpenLightbox} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onOpenEnquiry={handleOpenEnquiry} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactPage />
              } 
            />
            <Route 
              path="*" 
              element={
                <NotFoundPage />
              } 
            />
          </Routes>
        </main>

        {/* Global Luxury Footer */}
        <Footer 
          onOpenPrivacy={() => setPrivacyModalOpen(true)}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* Floating WhatsApp Action for Instant Mobile Lead Capture */}
        <WhatsAppButton />

        {/* Global Modals */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={() => setEnquiryModalOpen(false)}
          initialType={enquiryInitialType}
          initialConfig={enquiryInitialConfig}
        />

        <FloorPlanModal
          isOpen={floorPlanModalOpen}
          onClose={() => setFloorPlanModalOpen(false)}
          configuration={selectedFloorPlanConfig}
          onOpenEnquiry={handleOpenEnquiry}
        />

        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={siteConfig.flagshipProject.gallery}
          activeIndex={lightboxIndex}
          setActiveIndex={setLightboxIndex}
        />

        <PrivacyModal
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
        />

      </div>
    </BrowserRouter>
  );
}

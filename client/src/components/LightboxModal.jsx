import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, images, activeIndex, setActiveIndex }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentItem = images[activeIndex] || images[0];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-md p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-ivory-100 z-10">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
            {currentItem.category}
          </span>
          <span className="text-xs text-ivory-300/50">&bull;</span>
          <span className="text-xs text-ivory-300/80 font-mono">
            {activeIndex + 1} of {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-navy-900/80 border border-white/10 hover:border-gold-500 text-ivory-200 hover:text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-900/80 border border-white/10 hover:border-gold-500 text-gold-400 hover:text-white transition-colors z-10"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-900/80 border border-white/10 hover:border-gold-500 text-gold-400 hover:text-white transition-colors z-10"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center">
        <img
          src={currentItem.url}
          alt={currentItem.title}
          className="max-h-[68vh] max-w-full object-contain rounded-sm shadow-2xl transition-opacity duration-300"
        />

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h3 className="font-serif text-xl text-ivory-100 font-medium">
            {currentItem.title}
          </h3>
          <p className="text-xs text-ivory-300/80 mt-1">
            {currentItem.caption}
          </p>
          {currentItem.isDemoAsset && (
            <p className="text-[10px] text-gold-400/80 mt-1 flex items-center justify-center gap-1">
              <Info className="w-3 h-3 inline" />
              <span>Representative architectural visualization for presentation concept</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

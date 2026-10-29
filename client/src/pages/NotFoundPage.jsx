import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-navy-950 text-ivory-100 px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="font-serif text-7xl sm:text-8xl text-gold-400 font-light block">
          404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-ivory-100">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-ivory-300/80 leading-relaxed">
          The sanctuary you are looking for does not exist or has been moved. Explore our signature residential offerings in Paldi, Ahmedabad.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs uppercase tracking-widest transition-colors shadow-md"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/projects/saanjh"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 text-xs uppercase tracking-widest transition-colors"
          >
            <span>Discover Saanjh</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

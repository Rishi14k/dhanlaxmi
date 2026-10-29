import React from 'react';
import { Link } from 'react-router-dom';
import dhanlaxmiLogo from '../asset/dhanlaxmilogo.jpg';

export default function Logo({ light = false, className = '' }) {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded p-1 transition-transform active:scale-95 ${className}`}
      aria-label="Dhanlaxmi Group Home"
    >
      {/* Official Dhanlaxmi Logo Image */}
      <div className={`h-11 sm:h-12 rounded overflow-hidden flex items-center justify-center transition-all duration-300 ${
        light 
          ? 'bg-navy-950 border border-gold-500/40 group-hover:border-gold-300 shadow-sm' 
          : 'bg-navy-950 border border-gold-500/60 group-hover:border-gold-400 shadow-md'
      }`}>
        <img 
          src={dhanlaxmiLogo} 
          alt="Dhanlaxmi Group" 
          className="h-full w-auto object-contain rounded-sm group-hover:scale-105 transition-transform" 
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span className={`font-serif text-lg md:text-xl font-bold tracking-[0.16em] uppercase leading-tight transition-colors ${
          light ? 'text-ivory-100 group-hover:text-gold-300' : 'text-navy-950 group-hover:text-navy-900'
        }`}>
          Dhanlaxmi
        </span>
        <div className="flex items-center gap-1.5 text-[9px] tracking-[0.25em] uppercase font-sans font-medium">
          <span className={light ? 'text-gold-400' : 'text-gold-600'}>Group</span>
          <span className="opacity-40">&bull;</span>
          <span className={light ? 'text-ivory-300/80' : 'text-charcoal/70'}>Buildwell</span>
        </div>
      </div>
    </Link>
  );
}

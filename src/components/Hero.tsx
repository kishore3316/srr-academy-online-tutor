import React from 'react';
import { Sparkles, MessageSquare, Award, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';
import { InteractiveBoardVisual } from './InteractiveBoardVisual';

interface HeroProps {
  onOpenModal: (topic?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-chessboard-pattern">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Academy Badge Banner */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-[#d4af37]/30 shadow-lg shadow-black/40 text-xs sm:text-sm font-medium text-amber-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-cinzel font-bold tracking-wider text-white">SRR ACADEMY</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-300">Chess Online Tutor</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-300 text-xs font-serif italic hidden sm:inline">Learn • Improve • Achieve</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-cinzel leading-[1.15] text-white">
              Master the Game.{' '}
              <span className="text-gold-gradient block mt-1">
                Improve Your Thinking.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Personalized online chess coaching for beginners and intermediate players. Learn the right concepts, improve your calculation, and become a stronger chess player.
            </p>

            {/* Key Highlight Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Coach Kishore A <strong>(FIDE ID: {ACADEMY_INFO.fideId})</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800 px-3 py-1.5 rounded-lg">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Beginner to Intermediate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenModal('Book a Demo Session')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Book a Demo Session</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={ACADEMY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm tracking-wider bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-emerald-500/40 hover:border-emerald-400 shadow-lg flex items-center justify-center gap-3 transition-all cursor-pointer group"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Contact on WhatsApp</span>
              </a>
            </div>

            {/* Quick Proof Note */}
            <p className="text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-2 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Interactive online classes • Demo sessions already conducted</span>
            </p>

          </div>

          {/* Right Column: Interactive Chessboard Visual */}
          <div className="lg:col-span-5 relative">
            <InteractiveBoardVisual />
          </div>

        </div>
      </div>
    </section>
  );
};

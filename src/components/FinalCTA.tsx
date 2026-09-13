import React from 'react';
import { Sparkles, MessageSquare, ShieldCheck, Crown } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

interface FinalCTAProps {
  onOpenModal: (topic?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 relative bg-[#070a12] overflow-hidden">
      
      {/* Background Chessboard Pattern & Glows */}
      <div className="absolute inset-0 bg-chessboard-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#d4af37]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative bg-gradient-to-br from-[#0e1424] via-[#121a30] to-[#0a0f1d] border-2 border-[#d4af37]/50 rounded-3xl p-8 sm:p-14 text-center shadow-2xl shadow-[#d4af37]/20 overflow-hidden">
          
          {/* Top Gold Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600"></div>

          {/* Floating Crown Icon Header */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#d4af37] via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black mx-auto mb-6 shadow-xl shadow-[#d4af37]/30 transform hover:scale-110 transition-transform">
            <Crown className="w-9 h-9 stroke-[2.2]" />
          </div>

          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest block mb-2 font-mono">
            SRR ACADEMY • ONLINE CHESS TUTOR
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-cinzel text-white leading-tight mb-4">
            Your Next Move <span className="text-gold-gradient">Starts Here.</span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Improve your chess skills with personalized guidance from SRR Academy.
          </p>

          {/* Prominent WhatsApp Number Display */}
          <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300 font-mono text-base sm:text-lg font-bold shadow-inner mb-8">
            <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
            <span>WhatsApp: <strong>+91 6374819340</strong></span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenModal('Join SRR Academy (Final CTA)')}
              className="w-full sm:w-1/2 py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join SRR Academy</span>
            </button>

            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/40 flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Verification Badges Footer */}
          <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> FIDE Registered Coach (ID: {ACADEMY_INFO.fideId})
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Beginner & Intermediate Friendly
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Demo Sessions Conducted
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

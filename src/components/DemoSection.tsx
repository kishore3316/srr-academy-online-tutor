import React from 'react';
import { Sparkles, MessageSquare, CheckCircle2, Video } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

interface DemoSectionProps {
  onOpenModal: (topic?: string) => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="demo-section" className="py-20 relative bg-gradient-to-b from-[#0b1120] via-[#0e172a] to-[#070a12] border-t border-b border-amber-500/20">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#0e1424] border-2 border-[#d4af37]/40 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-[#d4af37]/10 relative overflow-hidden text-center max-w-4xl mx-auto">
          
          {/* Top Gold Ribbon Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-[#d4af37]/40 text-xs font-bold text-amber-300 uppercase tracking-wider mb-6">
            <Video className="w-4 h-4" /> Demo Session Update
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight mb-4">
            Already Conducted <span className="text-gold-gradient">Demo Sessions!</span>
          </h2>

          {/* Body Paragraph */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Have you attended one of our demo sessions? If you enjoyed the learning experience and are interested in improving your chess further, you can join our regular paid coaching sessions.
          </p>

          {/* Call to Action Highlight Box */}
          <div className="bg-slate-900/90 border border-slate-700/80 rounded-2xl p-6 mb-8 max-w-xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
              Ready to continue your chess journey?
            </p>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-amber-300">
              Join SRR Academy's Monthly Coaching Program.
            </h3>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ACADEMY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 fill-slate-950" />
              <span>Enquire Now on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenModal('Enquiry for Monthly Coaching after Demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-amber-300 border border-[#d4af37]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Submit Form Inquiry</span>
            </button>
          </div>

          {/* Quick note */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400 flex-wrap">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> WhatsApp: +91 6374819340
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Direct Coach Response
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

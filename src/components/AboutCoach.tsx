import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

interface AboutCoachProps {
  onOpenModal: (topic?: string) => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ onOpenModal }) => {
  const coachHighlights = [
    "FIDE Registered Player",
    `FIDE ID: ${ACADEMY_INFO.fideId}`,
    "Personalized coaching approach",
    "Focus on fundamentals and practical improvement",
    "Interactive online learning sessions",
    "Demo sessions already conducted"
  ];

  return (
    <section id="about-coach" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> Experienced Guidance
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            Meet Your <span className="text-gold-gradient">Chess Coach</span>
          </h2>

          <p className="text-base text-slate-300">
            Learn directly from FIDE Registered Player Kishore A (FIDE ID: {ACADEMY_INFO.fideId}).
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="bg-[#0e1424] border border-[#d4af37]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          
          {/* Subtle Ambient Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Coach Profile Image Avatar / Graphic */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                {/* Gold Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

                {/* Profile Container */}
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 bg-gradient-to-b from-[#162038] to-[#070a12] border border-[#d4af37]/40 rounded-3xl p-6 flex flex-col items-center justify-between text-center shadow-xl">
                  
                  {/* Top Badge */}
                  <div className="w-full flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] uppercase font-bold border border-amber-500/30">
                      FIDE Registered
                    </span>
                    <span className="text-xl">♔</span>
                  </div>

                  {/* Coach Illustration Avatar */}
                  <div className="my-auto flex flex-col items-center">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-amber-500 to-amber-700 p-1 shadow-lg shadow-[#d4af37]/20 mb-3 flex items-center justify-center">
                      <div className="w-full h-full bg-[#070a12] rounded-xl flex items-center justify-center text-4xl text-amber-200">
                        ♚
                      </div>
                    </div>

                    <h3 className="font-cinzel text-xl font-bold text-white tracking-wide">
                      Kishore A
                    </h3>
                    <p className="text-xs text-amber-300 font-medium">
                      Chess Online Tutor
                    </p>
                  </div>

                  {/* FIDE Verification Card Pill */}
                  <div className="w-full pt-2 border-t border-slate-800">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 font-mono">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>FIDE ID: <strong>{ACADEMY_INFO.fideId}</strong></span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Coach Details & Highlights */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-cinzel text-white mb-2">
                  Kishore A
                </h3>
                <p className="text-sm font-semibold text-amber-400 uppercase tracking-widest mb-4">
                  Chess Online Tutor • SRR Academy
                </p>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  Kishore A conducts online chess coaching sessions for students from beginner to intermediate level. With a structured approach focused on fundamentals, positioning, and calculation, students build lasting confidence in their chess playing ability.
                </p>
              </div>

              {/* Highlights Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Coach Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coachHighlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-2.5 bg-slate-900/80 border border-slate-800 p-3 rounded-xl hover:border-amber-500/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-200 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FIDE Verification Note */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 font-bold font-mono">
                  ID
                </div>
                <div className="text-xs text-slate-300">
                  <p className="font-semibold text-amber-300">Official FIDE Registration</p>
                  <p className="text-slate-400">Verified FIDE ID: <span className="font-mono text-white font-bold">{ACADEMY_INFO.fideId}</span>. Learn from an officially recognized chess competitor.</p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenModal('Inquire with Coach Kishore A')}
                  className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-amber-600 text-slate-950 shadow-md shadow-[#d4af37]/20 hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Connect with Coach Kishore A
                </button>
                <a
                  href={ACADEMY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 text-emerald-400 border border-emerald-500/30 hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Direct Chat
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

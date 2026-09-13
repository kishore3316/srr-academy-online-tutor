import React from 'react';
import { BookOpen, Target, Brain, Puzzle, Video } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

export const AboutAcademy: React.FC = () => {
  const pillars = [
    {
      title: "Interactive Lessons",
      description: "Live 1-on-1 virtual sessions where concepts are explained step-by-step with real-time feedback.",
      icon: Video,
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Game Analysis",
      description: "Review your actual online games to spot blunder patterns and refine tactical decision-making.",
      icon: Target,
      color: "from-blue-500 to-indigo-700"
    },
    {
      title: "Puzzles & Calculation",
      description: "Sharpen pattern recognition through curated tactical puzzles designed for your rating level.",
      icon: Puzzle,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Real-Game Practice",
      description: "Apply learned opening principles and endgame techniques directly in supervised practice games.",
      icon: Brain,
      color: "from-emerald-500 to-teal-700"
    }
  ];

  return (
    <section id="about-academy" className="py-20 relative bg-[#0b1120] border-t border-b border-slate-800/60">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-chessboard-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" /> About SRR Academy
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            Learn Chess with the <span className="text-gold-gradient">Right Guidance</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Description Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#0e1424] border border-[#d4af37]/20 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                <strong>SRR Academy</strong> provides structured and personalized online chess coaching designed to help students understand chess concepts, improve decision-making skills, and develop confidence over the board.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                The academy focuses on <strong>practical learning</strong> rather than simply memorizing moves. Students learn through interactive lessons, game analysis, puzzles, and real-game practice.
              </p>

              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Academy Motto</span>
                  <span className="font-cinzel text-amber-300 font-bold text-lg">{ACADEMY_INFO.tagline}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Target Level</span>
                  <span className="font-sans text-white font-semibold text-sm bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                    {ACADEMY_INFO.coachingLevel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-[#0e1424] border border-slate-800 hover:border-[#d4af37]/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-3 shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-1.5 font-cinzel group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

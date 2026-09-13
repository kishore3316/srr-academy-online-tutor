import React from 'react';
import { Brain } from 'lucide-react';
import { BENEFIT_POINTS } from '../data/content';

export const StudentImprovement: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#070a12] overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Brain className="w-3.5 h-3.5" /> Mind & Character Building
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            Chess Is More Than <span className="text-gold-gradient">Just a Game</span>
          </h2>

          <p className="text-base text-slate-300">
            Chess builds critical life skills, intellectual discipline, and strategic thinking habits that benefit students far beyond the board.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Grid of 6 Benefit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFIT_POINTS.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-[#0e1424] border border-slate-800 hover:border-[#d4af37]/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-amber-600 text-slate-950 flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors">
                    {benefit.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Visual: Elegant Animated Chessboard Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-sm bg-[#0e1424] border-2 border-[#d4af37]/40 rounded-3xl p-6 shadow-2xl text-center overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Header */}
              <div className="mb-4 text-center">
                <span className="text-xs font-bold text-amber-400 font-cinzel tracking-widest uppercase">
                  SRR ACADEMY
                </span>
                <h4 className="text-lg font-bold text-white font-cinzel">Cognitive Development</h4>
              </div>

              {/* Animated 4x4 Mini Visual Board with Floating Pieces */}
              <div className="grid grid-cols-4 gap-1.5 aspect-square bg-[#070a12] p-3 rounded-2xl border border-amber-500/20 shadow-inner mb-4">
                {[
                  { icon: '♔', title: 'King', color: 'text-amber-300 animate-float' },
                  { icon: '♕', title: 'Queen', color: 'text-amber-200' },
                  { icon: '♖', title: 'Rook', color: 'text-amber-100 animate-float-delayed' },
                  { icon: '♗', title: 'Bishop', color: 'text-amber-300' },
                  
                  { icon: '♘', title: 'Knight', color: 'text-amber-400 animate-float' },
                  { icon: '♙', title: 'Pawn', color: 'text-slate-400' },
                  { icon: '♙', title: 'Pawn', color: 'text-slate-400' },
                  { icon: '♘', title: 'Knight', color: 'text-amber-400 animate-float-delayed' },
                  
                  { icon: '♟', title: 'Pawn', color: 'text-slate-600' },
                  { icon: '♞', title: 'Knight', color: 'text-slate-800' },
                  { icon: '♝', title: 'Bishop', color: 'text-slate-800' },
                  { icon: '♟', title: 'Pawn', color: 'text-slate-600' },
                  
                  { icon: '♜', title: 'Rook', color: 'text-slate-900' },
                  { icon: '♛', title: 'Queen', color: 'text-slate-950' },
                  { icon: '♚', title: 'King', color: 'text-slate-950' },
                  { icon: '♜', title: 'Rook', color: 'text-slate-900' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-center rounded-lg text-2xl font-bold select-none transition-all ${
                      (Math.floor(i / 4) + (i % 4)) % 2 === 1 
                        ? 'bg-[#151c2e]' 
                        : 'bg-[#2a354f]'
                    }`}
                  >
                    <span className={item.color}>{item.icon}</span>
                  </div>
                ))}
              </div>

              {/* Caption */}
              <p className="text-xs text-slate-300 italic">
                "Chess is the gymnasium of the mind."
              </p>
              <span className="text-[10px] text-amber-400 block mt-1 font-mono">
                Coach Kishore A • SRR Academy
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

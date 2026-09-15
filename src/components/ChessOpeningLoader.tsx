import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, ChevronRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

interface ChessOpeningLoaderProps {
  onComplete?: () => void;
}

export const ChessOpeningLoader: React.FC<ChessOpeningLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // Animated 4x4 Mini Board Matrix for Opening Animation
  const loaderBoardPieces = [
    { icon: '♜', name: 'Rook', color: 'text-amber-400', delay: 0 },
    { icon: '♞', name: 'Knight', color: 'text-amber-300', delay: 100 },
    { icon: '♝', name: 'Bishop', color: 'text-[#d4af37]', delay: 200 },
    { icon: '♛', name: 'Queen', color: 'text-amber-200', delay: 300 },
    { icon: '♚', name: 'King', color: 'text-amber-100', delay: 400 },
    { icon: '♝', name: 'Bishop', color: 'text-[#d4af37]', delay: 500 },
    { icon: '♞', name: 'Knight', color: 'text-amber-300', delay: 600 },
    { icon: '♜', name: 'Rook', color: 'text-amber-400', delay: 700 },
    { icon: '♟', name: 'Pawn', color: 'text-amber-500/80', delay: 800 },
    { icon: '♟', name: 'Pawn', color: 'text-amber-500/80', delay: 900 },
    { icon: '♟', name: 'Pawn', color: 'text-amber-500/80', delay: 1000 },
    { icon: '♟', name: 'Pawn', color: 'text-amber-500/80', delay: 1100 },
    { icon: '♙', name: 'Pawn', color: 'text-amber-200/80', delay: 1200 },
    { icon: '♙', name: 'Pawn', color: 'text-amber-200/80', delay: 1300 },
    { icon: '♙', name: 'Pawn', color: 'text-amber-200/80', delay: 1400 },
    { icon: '♔', name: 'King', color: 'text-amber-300 font-bold', delay: 1500 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleFinish();
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleFinish = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 600); // match transition duration
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050811] transition-all duration-700 ${
      isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
    }`}>
      
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
        
        {/* Animated 4x4 Chessboard Opening Reveal Grid */}
        <div className="relative mb-8 group">
          
          {/* Golden Glow Atmosphere */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-500 rounded-3xl blur-xl opacity-30 animate-pulse-glow"></div>

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-[#0e1424] border-2 border-[#d4af37]/40 rounded-3xl p-3 shadow-2xl grid grid-cols-4 gap-1">
            {loaderBoardPieces.map((p, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              const isDark = (row + col) % 2 === 1;

              return (
                <div
                  key={i}
                  className={`flex items-center justify-center rounded-xl transition-all duration-500 ${
                    isDark ? 'bg-[#151c2e]' : 'bg-[#28344e]'
                  } ${progress > (i * 6) ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                >
                  <span className={`text-3xl sm:text-4xl ${p.color} transition-transform duration-300 hover:scale-125`}>
                    {p.icon}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Brand Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md">
            <Crown className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white tracking-widest">
            SRR ACADEMY
          </h1>
        </div>

        <p className="text-xs font-semibold text-amber-300 uppercase tracking-widest mb-1">
          Chess Online Tutor • Coach Kishore A
        </p>
        <p className="text-[11px] text-slate-400 font-serif italic mb-6">
          {ACADEMY_INFO.tagline}
        </p>

        {/* Progress Bar & Percentage */}
        <div className="w-full max-w-xs space-y-2 mb-6">
          <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2.5 overflow-hidden p-0.5 relative shadow-inner">
            <div 
              className="bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-300 h-full rounded-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-amber-300">
              <Sparkles className="w-3 h-3" /> Initializing Chessboard...
            </span>
            <span className="font-bold text-white">{progress}%</span>
          </div>
        </div>

        {/* Quick Skip Intro Button */}
        <button
          onClick={handleFinish}
          className="text-xs text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer py-1 px-3 rounded-lg hover:bg-slate-900/60"
        >
          <span>Skip Intro</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};

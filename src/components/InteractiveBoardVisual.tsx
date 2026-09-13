import React, { useState } from 'react';
import { Crown, Sparkles, RefreshCw, Zap } from 'lucide-react';

export const InteractiveBoardVisual: React.FC = () => {
  const [activeSquare, setActiveSquare] = useState<number>(18); // e.g. Knight on c3/f3

  // Pieces setup for illustration board
  const boardPieces: Record<number, { piece: string; color: 'white' | 'black'; name: string }> = {
    0: { piece: '♜', color: 'black', name: 'Rook' },
    1: { piece: '♞', color: 'black', name: 'Knight' },
    2: { piece: '♝', color: 'black', name: 'Bishop' },
    3: { piece: '♛', color: 'black', name: 'Queen' },
    4: { piece: '♚', color: 'black', name: 'King' },
    5: { piece: '♝', color: 'black', name: 'Bishop' },
    6: { piece: '♞', color: 'black', name: 'Knight' },
    7: { piece: '♜', color: 'black', name: 'Rook' },
    
    10: { piece: '♟', color: 'black', name: 'Pawn' },
    11: { piece: '♟', color: 'black', name: 'Pawn' },
    12: { piece: '♟', color: 'black', name: 'Pawn' },
    13: { piece: '♟', color: 'black', name: 'Pawn' },
    
    18: { piece: '♘', color: 'white', name: 'Knight' },
    27: { piece: '♗', color: 'white', name: 'Bishop' },
    35: { piece: '♕', color: 'white', name: 'Queen' },
    
    48: { piece: '♙', color: 'white', name: 'Pawn' },
    49: { piece: '♙', color: 'white', name: 'Pawn' },
    50: { piece: '♙', color: 'white', name: 'Pawn' },
    51: { piece: '♙', color: 'white', name: 'Pawn' },
    56: { piece: '♖', color: 'white', name: 'Rook' },
    57: { piece: '♘', color: 'white', name: 'Knight' },
    58: { piece: '♗', color: 'white', name: 'Bishop' },
    59: { piece: '♕', color: 'white', name: 'Queen' },
    60: { piece: '♔', color: 'white', name: 'King' },
    61: { piece: '♗', color: 'white', name: 'Bishop' },
    62: { piece: '♘', color: 'white', name: 'Knight' },
    63: { piece: '♖', color: 'white', name: 'Rook' },
  };

  const knightTargets = [1, 3, 33, 35, 11, 28];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative Gold Ambient Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-500 rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>

      {/* Main Chessboard Frame */}
      <div className="relative bg-[#0e1424] border border-[#d4af37]/30 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
        
        {/* Header Bar on Board */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-amber-300">
              <Crown className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100 font-cinzel">Interactive Board Visual</h4>
              <p className="text-[10px] text-amber-400">Click squares to test knight tactic fork</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <Zap className="w-3 h-3" /> Live Demo Mode
          </span>
        </div>

        {/* 8x8 Grid */}
        <div className="grid grid-cols-8 gap-0.5 aspect-square bg-[#070a12] p-2 rounded-2xl border border-amber-500/20 shadow-inner">
          {Array.from({ length: 64 }).map((_, idx) => {
            const row = Math.floor(idx / 8);
            const col = idx % 8;
            const isDark = (row + col) % 2 === 1;
            const isTarget = knightTargets.includes(idx);
            const hasPiece = boardPieces[idx];
            const isSelected = activeSquare === idx;

            return (
              <button
                key={idx}
                onClick={() => {
                  if (isTarget) {
                    setActiveSquare(idx);
                  }
                }}
                className={`relative flex items-center justify-center rounded-sm transition-all duration-200 select-none ${
                  isSelected
                    ? 'bg-amber-400/80 shadow-lg shadow-amber-400/40 ring-2 ring-amber-300 z-10 scale-105'
                    : isTarget
                    ? 'bg-emerald-500/30 ring-1 ring-emerald-400 hover:bg-emerald-500/50 cursor-pointer'
                    : isDark
                    ? 'bg-[#151c2e] hover:bg-[#1c263e]'
                    : 'bg-[#2b354d] hover:bg-[#34405d]'
                }`}
              >
                {/* Target Indicator Dot */}
                {isTarget && !hasPiece && (
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute"></span>
                )}

                {/* Piece Rendering */}
                {hasPiece ? (
                  <span className={`text-2xl sm:text-3xl transition-transform ${
                    hasPiece.color === 'white' 
                      ? 'text-amber-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' 
                      : 'text-slate-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]'
                  }`}>
                    {hasPiece.piece}
                  </span>
                ) : isSelected ? (
                  <span className="text-2xl sm:text-3xl text-amber-950 font-bold">♘</span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Board Footer Note */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2 text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Coaching covers tactical forks, pins & position evaluation.</span>
          </div>
          <button 
            onClick={() => setActiveSquare(18)}
            className="flex items-center gap-1 text-[10px] text-amber-300 hover:underline"
          >
            <RefreshCw className="w-3 h-3" /> Reset
          </button>
        </div>
      </div>
    </div>
  );
};

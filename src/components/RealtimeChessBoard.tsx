import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Zap, Sparkles, Volume2, VolumeX, ChevronRight } from 'lucide-react';

export interface MoveStep {
  from: number;
  to: number;
  piece: string;
  color: 'w' | 'b';
  notation: string;
  commentary: string;
  isCapture?: boolean;
  isCheck?: boolean;
  evalScore: string;
}

// 8x8 Board Index Mapping (0 = a8, 7 = h8, 56 = a1, 63 = h1)
const INITIAL_BOARD: Record<number, { type: string; color: 'w' | 'b'; symbol: string }> = {
  // Black pieces (Row 0 & 1)
  0: { type: 'r', color: 'b', symbol: '♜' },
  1: { type: 'n', color: 'b', symbol: '♞' },
  2: { type: 'b', color: 'b', symbol: '♝' },
  3: { type: 'q', color: 'b', symbol: '♛' },
  4: { type: 'k', color: 'b', symbol: '♚' },
  5: { type: 'b', color: 'b', symbol: '♝' },
  6: { type: 'n', color: 'b', symbol: '♞' },
  7: { type: 'r', color: 'b', symbol: '♜' },
  8: { type: 'p', color: 'b', symbol: '♟' },
  9: { type: 'p', color: 'b', symbol: '♟' },
  10: { type: 'p', color: 'b', symbol: '♟' },
  11: { type: 'p', color: 'b', symbol: '♟' },
  12: { type: 'p', color: 'b', symbol: '♟' },
  13: { type: 'p', color: 'b', symbol: '♟' },
  14: { type: 'p', color: 'b', symbol: '♟' },
  15: { type: 'p', color: 'b', symbol: '♟' },

  // White pieces (Row 6 & 7)
  48: { type: 'p', color: 'w', symbol: '♙' },
  49: { type: 'p', color: 'w', symbol: '♙' },
  50: { type: 'p', color: 'w', symbol: '♙' },
  51: { type: 'p', color: 'w', symbol: '♙' },
  52: { type: 'p', color: 'w', symbol: '♙' },
  53: { type: 'p', color: 'w', symbol: '♙' },
  54: { type: 'p', color: 'w', symbol: '♙' },
  55: { type: 'p', color: 'w', symbol: '♙' },
  56: { type: 'r', color: 'w', symbol: '♖' },
  57: { type: 'n', color: 'w', symbol: '♘' },
  58: { type: 'b', color: 'w', symbol: '♗' },
  59: { type: 'q', color: 'w', symbol: '♕' },
  60: { type: 'k', color: 'w', symbol: '♔' },
  61: { type: 'b', color: 'w', symbol: '♗' },
  62: { type: 'n', color: 'w', symbol: '♘' },
  63: { type: 'r', color: 'w', symbol: '♖' },
};

// Tactical Master Sequence: Italian Game -> Knight Attack Fork -> Checkmate Setup
const GAME_SEQUENCE: MoveStep[] = [
  { from: 52, to: 36, piece: '♙', color: 'w', notation: '1. e4', commentary: 'Center pawn control - Opening Principle #1', evalScore: '+0.3' },
  { from: 12, to: 28, piece: '♟', color: 'b', notation: '1... e5', commentary: 'Black stakes equal claim in the center', evalScore: '0.0' },
  { from: 62, to: 45, piece: '♘', color: 'w', notation: '2. Nf3', commentary: 'Developing knight toward center & attacking e5', evalScore: '+0.4' },
  { from: 1, to: 18, piece: '♞', color: 'b', notation: '2... Nc6', commentary: 'Black defends e5 pawn naturally', evalScore: '+0.3' },
  { from: 61, to: 34, piece: '♗', color: 'w', notation: '3. Bc4', commentary: 'Italian Game! Aiming bishop at weak f7 pawn', evalScore: '+0.5' },
  { from: 5, to: 26, piece: '♝', color: 'b', notation: '3... Bc5', commentary: 'Black develops bishop symmetrically', evalScore: '+0.4' },
  { from: 45, to: 20, piece: '♘', color: 'w', notation: '4. Ng5?!', commentary: 'Fried Liver Attack setup targeting f7!', evalScore: '+0.6' },
  { from: 6, to: 21, piece: '♞', color: 'b', notation: '4... Nf6', commentary: 'Black counter-attacks White e4 pawn', evalScore: '+0.5' },
  { from: 20, to: 13, piece: '♘', color: 'w', notation: '5. Nxf7!', commentary: 'KNIGHT FORK! Attacking Queen on d8 & Rook on h8!', isCapture: true, evalScore: '+2.4' },
];

export const RealtimeChessBoard: React.FC = () => {
  const [boardState, setBoardState] = useState(INITIAL_BOARD);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [selectedSquare, setSelectedSquare] = useState<number | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Play synthetic web audio tone for move clicks
  const playMoveSound = (isCapture = false) => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = isCapture ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(isCapture ? 440 : 580, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch {
      // Audio fallback
    }
  };

  // Replay logic
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= GAME_SEQUENCE.length - 1) {
            // Loop back to start after a pause
            setBoardState(INITIAL_BOARD);
            return -1;
          }
          const nextIndex = prev + 1;
          const move = GAME_SEQUENCE[nextIndex];
          setBoardState((oldBoard) => {
            const newB = { ...oldBoard };
            const piece = newB[move.from];
            delete newB[move.from];
            if (piece) {
              newB[move.to] = piece;
            }
            return newB;
          });
          playMoveSound(move.isCapture);
          return nextIndex;
        });
      }, 2400);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, soundEnabled]);

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(-1);
    setBoardState(INITIAL_BOARD);
  };

  const handleStepForward = () => {
    if (currentStepIndex < GAME_SEQUENCE.length - 1) {
      const nextIndex = currentStepIndex + 1;
      const move = GAME_SEQUENCE[nextIndex];
      setBoardState((oldBoard) => {
        const newB = { ...oldBoard };
        const piece = newB[move.from];
        delete newB[move.from];
        if (piece) {
          newB[move.to] = piece;
        }
        return newB;
      });
      playMoveSound(move.isCapture);
      setCurrentStepIndex(nextIndex);
    }
  };

  const currentMove = currentStepIndex >= 0 ? GAME_SEQUENCE[currentStepIndex] : null;

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Golden Glow Atmosphere */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-500 rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>

      <div className="relative bg-[#0e1424] border-2 border-[#d4af37]/40 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
        
        {/* Top Header Controls */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-amber-300 font-bold">
              ♔
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-100 font-cinzel flex items-center gap-1.5">
                Real-Time Tactics Engine
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </h4>
              <p className="text-[10px] text-amber-300 font-mono">
                {currentMove ? `${currentMove.notation} — ${currentMove.commentary}` : 'Auto-playing Italian Game & Knight Attack'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-amber-300 transition-colors cursor-pointer"
              title={isPlaying ? 'Pause Animation' : 'Play Animation'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            <button
              onClick={handleStepForward}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-amber-300 transition-colors cursor-pointer"
              title="Next Move Step"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-amber-400 text-amber-300 transition-colors cursor-pointer"
              title="Reset Board"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                soundEnabled 
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                  : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
              title={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Dynamic Engine Eval Bar & Status Banner */}
        <div className="mb-3 flex items-center justify-between bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold text-slate-400">Eval:</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
              {currentMove ? currentMove.evalScore : '+0.0'}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-300 text-[11px]">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentMove ? currentMove.notation : 'Opening Position'}</span>
          </div>
        </div>

        {/* 8x8 Interactive Animated Chessboard */}
        <div className="relative aspect-square bg-[#070a12] p-2 rounded-2xl border border-amber-500/30 shadow-inner overflow-hidden">
          
          {/* Files & Ranks Labels */}
          <div className="grid grid-cols-8 gap-0.5 w-full h-full">
            {Array.from({ length: 64 }).map((_, idx) => {
              const row = Math.floor(idx / 8);
              const col = idx % 8;
              const isDark = (row + col) % 2 === 1;
              const hasPiece = boardState[idx];

              const isFrom = currentMove?.from === idx;
              const isTo = currentMove?.to === idx;
              const isSelected = selectedSquare === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSquare(idx)}
                  className={`relative flex items-center justify-center rounded-sm transition-all duration-300 select-none ${
                    isTo
                      ? 'bg-amber-400/80 ring-2 ring-amber-300 shadow-lg shadow-amber-400/50 z-10 scale-105'
                      : isFrom
                      ? 'bg-emerald-500/50 ring-1 ring-emerald-400 z-10'
                      : isSelected
                      ? 'bg-blue-500/40 ring-2 ring-blue-400'
                      : isDark
                      ? 'bg-[#151c2e] hover:bg-[#1f2a45]'
                      : 'bg-[#2b3650] hover:bg-[#364464]'
                  }`}
                >
                  {/* Square Coordinate Labels (a8..h1) */}
                  {col === 0 && (
                    <span className="absolute top-0.5 left-1 text-[9px] font-mono text-slate-400/70 pointer-events-none">
                      {8 - row}
                    </span>
                  )}
                  {row === 7 && (
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-mono text-slate-400/70 pointer-events-none">
                      {String.fromCharCode(97 + col)}
                    </span>
                  )}

                  {/* Piece Symbol with Smooth Transform */}
                  {hasPiece && (
                    <span className={`text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 ${
                      hasPiece.color === 'w' 
                        ? 'text-amber-200 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] transform hover:scale-110' 
                        : 'text-slate-950 drop-shadow-[0_1px_3px_rgba(255,255,255,0.6)] transform hover:scale-110'
                    }`}>
                      {hasPiece.symbol}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Live Notation Ticker Strip */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[11px] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Moves: {GAME_SEQUENCE.map(m => m.notation).join(' ')}</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

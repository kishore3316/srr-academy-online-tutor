import React, { useState } from 'react';
import { X, Send, MessageSquare, CheckCircle2, ShieldCheck, User, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACADEMY_INFO } from '../data/content';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultTopic = 'Monthly Coaching Enrollment' }) => {
  const [studentName, setStudentName] = useState('');
  const [chessLevel, setChessLevel] = useState('Beginner');
  const [preferredTime, setPreferredTime] = useState('Weekends (Morning)');
  const [customMessage, setCustomMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Fire celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const text = `Hello Coach Kishore A 👋\n\nI am reaching out via SRR Academy Website for *${defaultTopic}*.\n\n👤 *Student Name:* ${studentName || 'Not specified'}\n🏆 *Current Level:* ${chessLevel}\n🕒 *Preferred Time Slot:* ${preferredTime}${customMessage ? `\n💬 *Note:* ${customMessage}` : ''}\n\nPlease share the details regarding enrollment & class schedule. Thank you!`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${ACADEMY_INFO.whatsappCleanNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#0e1424] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#d4af37]/10 text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Metallic Accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-600"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] to-amber-700 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-[#d4af37]/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-cinzel text-amber-300">
              {defaultTopic}
            </h3>
            <p className="text-xs text-slate-400">SRR Academy • Coach Kishore A</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 mb-6 bg-slate-900/60 p-3 rounded-lg border border-slate-800 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>Fills details below to connect directly with Coach Kishore A via WhatsApp.</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Student / Parent Name
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full bg-[#070a12] border border-slate-700 focus:border-[#d4af37] rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all pl-10"
              />
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Chess Experience Level
              </label>
              <select
                value={chessLevel}
                onChange={(e) => setChessLevel(e.target.value)}
                className="w-full bg-[#070a12] border border-slate-700 focus:border-[#d4af37] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all"
              >
                <option value="Beginner (Knows rules)">Beginner (Rules & moves)</option>
                <option value="Beginner (Complete Newbie)">Absolute Beginner</option>
                <option value="Intermediate (Online ~1000-1400)">Intermediate (1000-1400)</option>
                <option value="Looking for Demo Session">Attended Demo Session</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Preferred Schedule
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#070a12] border border-slate-700 focus:border-[#d4af37] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all"
              >
                <option value="Weekends (Morning)">Weekends (Morning)</option>
                <option value="Weekends (Evening)">Weekends (Evening)</option>
                <option value="Weekdays (Evening)">Weekdays (Evening)</option>
                <option value="Flexible Batch Slot">Flexible Slot</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Additional Question / Message (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="Any specific goals or questions for Coach Kishore A..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full bg-[#070a12] border border-slate-700 focus:border-[#d4af37] rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>Send WhatsApp Enquiry (+91 6374819340)</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Instant Response
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> FIDE ID: 33316775 Verified
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

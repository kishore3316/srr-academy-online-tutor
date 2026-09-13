import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="relative bg-[#0e1424] border border-emerald-500/40 rounded-2xl p-3 shadow-2xl shadow-black/80 max-w-xs text-xs text-slate-100 animate-bounce-slow flex items-start gap-2.5">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center text-[10px]"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 font-bold">
            ♔
          </div>
          <div>
            <p className="font-bold text-amber-300 font-cinzel">Coach Kishore A</p>
            <p className="text-[11px] text-slate-300">Enquire about demo sessions or monthly batches on WhatsApp!</p>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={ACADEMY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Contact Coach Kishore A on WhatsApp"
      >
        {/* Pulsating ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-75 pointer-events-none"></span>

        <MessageSquare className="w-7 h-7 fill-slate-950" />
      </a>

    </div>
  );
};

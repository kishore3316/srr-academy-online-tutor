import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, ACADEMY_INFO } from '../data/content';

interface FAQProps {
  onOpenModal: (topic?: string) => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First accordion open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#0b1120] border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            Got <span className="text-gold-gradient">Questions?</span>
          </h2>

          <p className="text-base text-slate-300">
            Find quick answers to common queries about SRR Academy, class timings, and enrollment.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-[#0e1424] border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#d4af37]/60 shadow-lg shadow-[#d4af37]/5' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-cinzel text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-center flex-shrink-0 font-mono">
                      Q{index + 1}
                    </span>
                    {item.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-500/20 text-amber-300 border-amber-500/40' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/60 animate-fade-in">
                    <p className="pl-10 text-slate-300 font-normal">
                      {item.answer}
                    </p>

                    {/* Specific Action Link for WhatsApp Question */}
                    {item.question.includes('enquire') && (
                      <div className="mt-4 pl-10">
                        <a
                          href={ACADEMY_INFO.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Chat directly on WhatsApp ({ACADEMY_INFO.whatsappNumber})
                        </a>
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
          <h4 className="text-base font-bold font-cinzel text-white">Have a question not listed here?</h4>
          <p className="text-xs text-slate-400">Coach Kishore A is happy to answer your queries personally on WhatsApp.</p>
          <button
            onClick={() => onOpenModal('Custom FAQ Question')}
            className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-amber-600 text-slate-950 shadow-md transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Ask Coach Kishore A
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Sparkles, Target } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/content';

interface HowItWorksProps {
  onOpenModal: (topic?: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenModal }) => {
  return (
    <section id="how-it-works" className="py-20 relative bg-[#0b1120] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" /> Simple 3-Step Journey
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            How It <span className="text-gold-gradient">Works</span>
          </h2>

          <p className="text-base text-slate-300">
            Getting started with SRR Academy is seamless, clear, and structured.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500/10 via-[#d4af37]/40 to-amber-500/10 -translate-y-6 z-0"></div>

          {HOW_IT_WORKS_STEPS.map((stepItem, index) => (
            <div
              key={index}
              className="bg-[#0e1424] border border-slate-800 hover:border-[#d4af37]/40 rounded-3xl p-8 relative z-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-black/60 group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4af37] to-amber-600 flex items-center justify-center text-slate-950 font-cinzel font-black text-xl mb-6 shadow-lg shadow-[#d4af37]/20 group-hover:scale-110 transition-transform">
                  {stepItem.step}
                </div>

                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                  Step {index + 1}
                </span>

                <h3 className="text-2xl font-bold font-cinzel text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {stepItem.title}
                </h3>

                <p className="text-sm font-medium text-slate-300 leading-relaxed mb-4">
                  {stepItem.subtitle}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center text-xs text-amber-300 font-semibold group-hover:translate-x-1 transition-transform">
                <span>Proceed with Coach</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal('Start Step 1: Demo Session')}
            className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-[#d4af37]/20 transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Begin Step 1 – Book Demo / Enquire</span>
          </button>
        </div>

      </div>
    </section>
  );
};

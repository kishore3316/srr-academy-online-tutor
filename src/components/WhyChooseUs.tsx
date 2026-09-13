import React from 'react';
import { UserCheck, Heart, Search, Video, TrendingUp, Smile, Award, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

interface WhyChooseUsProps {
  onOpenModal: (topic?: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return UserCheck;
      case 'Heart': return Heart;
      case 'Search': return Search;
      case 'Video': return Video;
      case 'TrendingUp': return TrendingUp;
      case 'Smile': return Smile;
      default: return Sparkles;
    }
  };

  return (
    <section id="why-us" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> Proven Excellence
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            Why Choose <span className="text-gold-gradient">SRR Academy?</span>
          </h2>

          <p className="text-base text-slate-300">
            We combine high-quality instruction with a personal, encouraging approach designed for maximum student progress.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((card, index) => {
            const IconComp = getIcon(card.iconName);

            return (
              <div
                key={card.id}
                className="bg-[#0e1424] border border-slate-800 hover:border-[#d4af37]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#d4af37]/5 group relative"
              >
                {/* Number Badge */}
                <span className="absolute top-4 right-4 text-xs font-mono font-bold text-slate-600 group-hover:text-amber-400 transition-colors">
                  0{index + 1}
                </span>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-amber-600/10 border border-[#d4af37]/30 flex items-center justify-center text-amber-300 mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-slate-950 transition-all duration-300">
                  <IconComp className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-cinzel text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Banner Bar */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-[#0e1424] to-slate-900 border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 text-xl font-cinzel font-bold">
              ♔
            </div>
            <div>
              <h4 className="text-lg font-bold font-cinzel text-white">Ready to elevate your chess game?</h4>
              <p className="text-xs text-slate-300">Join SRR Academy's regular coaching program with Coach Kishore A.</p>
            </div>
          </div>

          <button
            onClick={() => onOpenModal('Inquiry via Why Choose Us')}
            className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-[#d4af37]/20 transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Start Your Journey Today
          </button>
        </div>

      </div>
    </section>
  );
};

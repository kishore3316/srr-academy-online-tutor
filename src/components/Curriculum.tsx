import React from 'react';
import { Compass, ShieldAlert, Target, Crown, Zap, BarChart3, ChevronRight, CheckCircle2, BookOpen } from 'lucide-react';
import { LEARNING_MODULES } from '../data/content';

interface CurriculumProps {
  onOpenModal: (topic?: string) => void;
}

export const Curriculum: React.FC<CurriculumProps> = ({ onOpenModal }) => {

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'ShieldAlert': return ShieldAlert;
      case 'Target': return Target;
      case 'Crown': return Crown;
      case 'Zap': return Zap;
      case 'BarChart3': return BarChart3;
      default: return BookOpen;
    }
  };

  return (
    <section id="curriculum" className="py-20 relative bg-[#0b1120] border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" /> Comprehensive Learning Roadmap
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            What Students <span className="text-gold-gradient">Will Learn</span>
          </h2>

          <p className="text-base text-slate-300">
            A structured curriculum taking you step-by-step from core fundamentals to advanced tactical calculation.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* 6 Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_MODULES.map((module) => {
            const IconComponent = getIcon(module.iconName);

            return (
              <div
                key={module.id}
                className="bg-[#0e1424] border border-slate-800 hover:border-[#d4af37]/50 hover:-translate-y-1 hover:shadow-xl rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Gold Top Accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Top Level Pill & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-[#162038] border border-[#d4af37]/30 flex items-center justify-center text-amber-300 shadow-md group-hover:scale-110 group-hover:border-[#d4af37] transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium font-sans px-2.5 py-1 rounded-full bg-slate-900 text-amber-300 border border-slate-800">
                      {module.level}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-cinzel text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {module.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {module.description}
                  </p>
                </div>

                {/* Topics Bullet List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2 mt-2">
                  <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Focus Areas:</h4>
                  {module.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="mt-6 pt-3">
                  <button
                    onClick={() => onOpenModal(`Curriculum Details: ${module.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-amber-300 bg-slate-900/80 hover:bg-[#d4af37] hover:text-slate-950 border border-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:border-amber-400"
                  >
                    <span>Enquire About {module.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

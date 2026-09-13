import React from 'react';
import { Calendar, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

interface MonthlyPlanProps {
  onOpenModal: (topic?: string) => void;
}

export const MonthlyPlan: React.FC<MonthlyPlanProps> = ({ onOpenModal }) => {
  const planFeatures = [
    "12 Online Coaching Sessions",
    "Each Session: 2 Hours",
    "Personalized Chess Training",
    "Beginner to Intermediate Level",
    "Regular Practice and Game Analysis",
    "1-on-1 & Small Interactive Batches",
    "Homework Puzzles & Move Review"
  ];

  return (
    <section id="monthly-plan" className="py-20 relative bg-[#070a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-xs font-semibold text-amber-300 uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" /> Structured Program
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-cinzel text-white leading-tight">
            Monthly Coaching <span className="text-gold-gradient">Plan</span>
          </h2>

          <p className="text-base text-slate-300">
            A comprehensive 12-session monthly program designed for consistent skill accumulation.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"></div>
        </div>

        {/* Pricing Style Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative group">
            
            {/* Outer Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative bg-[#0e1424] border-2 border-[#d4af37]/50 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-black/80">
              
              {/* Popular Badge Header */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-gradient-to-r from-[#d4af37] to-amber-600 text-slate-950 text-xs font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Most Popular Program
              </div>

              {/* Card Header */}
              <div className="text-center border-b border-slate-800 pb-8 mb-8 pt-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  Regular Coaching Schedule
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold font-cinzel text-white mb-2">
                  12 Sessions Per Month
                </h3>

                <p className="text-sm text-slate-400">
                  Total of 24 Hours of Comprehensive Coaching Every Month
                </p>

                {/* Stat Pills */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <div className="bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-center">
                    <span className="text-amber-300 font-bold text-lg font-cinzel block">12</span>
                    <span className="text-[10px] text-slate-400 uppercase">Sessions / Mo</span>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-center">
                    <span className="text-amber-300 font-bold text-lg font-cinzel block">2 Hours</span>
                    <span className="text-[10px] text-slate-400 uppercase">Per Session</span>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl text-center">
                    <span className="text-emerald-400 font-bold text-lg font-cinzel block">Online</span>
                    <span className="text-[10px] text-slate-400 uppercase">Interactive</span>
                  </div>
                </div>
              </div>

              {/* Feature Bullet Points */}
              <div className="space-y-4 mb-10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  What's Included in the Monthly Plan:
                </h4>
                {planFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button - Note: Strictly NO price displayed */}
              <div className="space-y-3">
                <button
                  onClick={() => onOpenModal('Fees & Monthly Plan Enrollment')}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contact for Fees & Enrollment</span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Speak directly with Coach Kishore A on WhatsApp for batch availability & fee structure.
                </p>
              </div>

              {/* Coach Badge Footer */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-300 font-mono">
                  <Award className="w-3.5 h-3.5" /> FIDE ID: {ACADEMY_INFO.fideId}
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp: 6374819340
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

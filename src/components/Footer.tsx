import React from 'react';
import { Crown, MessageSquare, Award, ArrowUp } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Coach', href: '#about-coach' },
    { name: 'Programs', href: '#curriculum' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#faq' },
  ];

  return (
    <footer className="bg-[#050811] text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Crown className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-white tracking-wider">
                  SRR ACADEMY
                </h3>
                <p className="text-xs text-amber-300 font-medium">
                  Chess Online Tutor – Kishore A
                </p>
              </div>
            </div>

            <p className="text-xs text-amber-400 font-cinzel font-bold tracking-widest uppercase">
              {ACADEMY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Structured and personalized online chess coaching for beginners and intermediate players worldwide. Build confidence, calculation depth, and winning techniques.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-amber-500/20 text-xs text-amber-300 font-mono flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" /> FIDE ID: {ACADEMY_INFO.fideId}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-cinzel text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-500">›</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold font-cinzel text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Direct Contact
            </h4>
            
            <div className="space-y-2 text-xs">
              <p className="text-slate-300 font-semibold">Coach: Kishore A</p>
              <p className="flex items-center gap-2 text-emerald-400 font-mono">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp: <a href={ACADEMY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-white">{ACADEMY_INFO.whatsappNumber}</a>
              </p>
              <p className="text-slate-400 text-[11px]">
                Coaching Level: Beginner to Intermediate
              </p>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <h5 className="text-[11px] font-bold text-slate-400 uppercase mb-2">Connect With Us:</h5>
              <div className="flex items-center gap-2">
                {['WhatsApp', 'YouTube', 'Lichess', 'Chess.com'].map((platform) => (
                  <a
                    key={platform}
                    href={ACADEMY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-[11px] text-slate-300 hover:text-amber-300 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SRR Academy. All rights reserved. Coach Kishore A (FIDE ID: {ACADEMY_INFO.fideId}).</p>
          
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#d4af37] text-amber-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

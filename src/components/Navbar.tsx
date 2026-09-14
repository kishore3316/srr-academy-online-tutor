import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Award, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/content';

interface NavbarProps {
  onOpenModal: (topic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Academy', href: '#about-academy' },
    { name: 'Coach Kishore A', href: '#about-coach' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Lichess Analyzer', href: '#lichess-analyzer' },
    { name: 'Demo Sessions', href: '#demo-section' },
    { name: 'Monthly Plan', href: '#monthly-plan' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#070a12]/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg shadow-black/50 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4af37] via-amber-500 to-amber-700 flex items-center justify-center text-slate-950 font-black shadow-md shadow-[#d4af37]/20 group-hover:scale-105 transition-transform">
              <Crown className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors flex items-center gap-2">
                SRR ACADEMY
                <span className="text-[10px] font-sans font-semibold tracking-normal uppercase px-2 py-0.5 rounded-full bg-amber-500/10 border border-[#d4af37]/30 text-amber-300 hidden sm:inline-block">
                  Online Tutor
                </span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-1">
                Learn • Improve • Achieve
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/20 text-xs text-amber-300 font-mono">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>FIDE ID: {ACADEMY_INFO.fideId}</span>
            </div>

            <button
              onClick={() => onOpenModal('Demo Session Inquiry')}
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-[#d4af37]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070a12]/95 border-b border-[#d4af37]/20 backdrop-blur-xl px-4 pt-3 pb-6 animate-fade-in space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-amber-500/20 text-xs text-amber-300 font-mono w-fit">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Coach Kishore A • FIDE ID: {ACADEMY_INFO.fideId}</span>
          </div>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-slate-200 hover:text-amber-300 hover:bg-slate-900/60 rounded-lg text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('Book a Demo Session');
              }}
              className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-amber-600 text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-[#d4af37]/20"
            >
              <Sparkles className="w-4 h-4" />
              Book a Demo Session
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAcademy } from './components/AboutAcademy';
import { AboutCoach } from './components/AboutCoach';
import { Curriculum } from './components/Curriculum';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DemoSection } from './components/DemoSection';
import { MonthlyPlan } from './components/MonthlyPlan';
import { HowItWorks } from './components/HowItWorks';
import { StudentImprovement } from './components/StudentImprovement';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('Book a Demo Session');

  const handleOpenModal = (topic?: string) => {
    if (topic) setModalTopic(topic);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#d4af37]/30 selection:text-amber-200">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 2. About SRR Academy */}
        <AboutAcademy />

        {/* 3. About the Coach */}
        <AboutCoach onOpenModal={handleOpenModal} />

        {/* 4. What Students Will Learn */}
        <Curriculum onOpenModal={handleOpenModal} />

        {/* 5. Why Choose SRR Academy? */}
        <WhyChooseUs onOpenModal={handleOpenModal} />

        {/* 6. Demo Session Section */}
        <DemoSection onOpenModal={handleOpenModal} />

        {/* 7. Monthly Coaching Plan */}
        <MonthlyPlan onOpenModal={handleOpenModal} />

        {/* 8. How It Works */}
        <HowItWorks onOpenModal={handleOpenModal} />

        {/* 9. Student Improvement Section */}
        <StudentImprovement />

        {/* 10. FAQ Section */}
        <FAQ onOpenModal={handleOpenModal} />

        {/* 11. Final Call-to-Action Section */}
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* WhatsApp Floating Action Button */}
      <WhatsAppFloat />

      {/* Interactive Booking & Inquiry Modal */}
      <DemoModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultTopic={modalTopic}
      />
    </div>
  );
}

export default App;

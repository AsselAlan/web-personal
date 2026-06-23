import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import AppTypesSection from './components/AppTypesSection';
import CaseStudySection from './components/CaseStudySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-darker font-sans text-neutral-300 min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <AppTypesSection />
        <CaseStudySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
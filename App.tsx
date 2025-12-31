
import React, { useState } from 'react';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Quiz from './components/Quiz';
import Letter from './components/Letter';
import FloatingHearts from './components/FloatingHearts';

const App: React.FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev + 1);
  };

  const steps = [
    <Hero onNext={nextStep} />,
    <section className="animate__animated animate__fadeIn">
      <h2 className="text-3xl md:text-4xl text-center mb-12 italic text-[#D682A4]">Our 2025 Chapters</h2>
      <Gallery />
      <div className="mt-16 flex justify-center">
        <button 
          onClick={nextStep}
          className="px-10 py-4 bg-[#F8C8DC] text-[#7A4B5F] font-bold rounded-full shadow-md hover:bg-[#F4BBD3] transition-all transform hover:scale-105"
        >
          How well do you know us? →
        </button>
      </div>
    </section>,
    <section className="animate__animated animate__fadeIn">
      <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#F8C8DC] shadow-sm">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#D682A4]">The 12 Questions</h2>
        <p className="text-center text-[#9E6C81] mb-12 italic">Warning: These are slightly unhinged...</p>
        <Quiz onComplete={nextStep} />
      </div>
    </section>,
    <section className="animate__animated animate__fadeIn">
      <Letter />
    </section>
  ];

  const progressWidth = ((step + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#7A4B5F] overflow-hidden relative">
      <FloatingHearts count={15} />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#F8C8DC]/20 z-50">
        <div 
          className="h-full bg-[#D682A4] transition-all duration-700 ease-out" 
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-12 min-h-screen flex flex-col justify-center">
        {steps[step]}

        {step === steps.length - 1 && (
          <footer className="text-center py-12 text-[#D682A4] opacity-70 italic animate__animated animate__fadeIn">
            <p>Forever Yours, 2026 & Beyond ❤️</p>
          </footer>
        )}
      </main>
    </div>
  );
};

export default App;

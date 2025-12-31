
import React from 'react';

interface HeroProps {
  onNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNext }) => {
  return (
    <div className="text-center py-10 animate__animated animate__fadeInDown">
      <div className="inline-block px-6 py-2 bg-[#F8C8DC]/30 rounded-full text-[#D682A4] font-medium tracking-widest text-sm mb-6 uppercase">
        To My Favorite Human
      </div>
      <h1 className="text-5xl md:text-8xl font-black text-[#D682A4] mb-4 leading-tight">
        Happy New Year <br />
        <span className="text-[#F4BBD3]">2026</span>
      </h1>
      <p className="text-lg md:text-2xl text-[#9E6C81] max-w-lg mx-auto leading-relaxed mb-12">
        Another year of laughter, growth, and endless love. 
        Thank you for being my world.
      </p>
      
      <button 
        onClick={onNext}
        className="px-12 py-5 bg-[#D682A4] text-white text-xl font-bold rounded-full shadow-lg hover:bg-[#C26B8F] hover:shadow-2xl transform transition hover:-translate-y-1 active:scale-95 animate__animated animate__pulse animate__infinite"
      >
        Open My Gift 🎁
      </button>
    </div>
  );
};

export default Hero;

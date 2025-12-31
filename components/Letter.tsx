
import React from 'react';

const Letter: React.FC = () => {
  return (
    <div className="relative">
      {/* Decorative Stamp */}
      <div className="absolute -top-10 -right-4 w-24 h-24 bg-[#F8C8DC] rounded-full flex items-center justify-center rotate-12 border-2 border-dashed border-[#D682A4] z-20">
        <span className="text-xs font-bold text-[#D682A4] text-center uppercase tracking-tighter">
          Love <br /> Forever
        </span>
      </div>

      <div className="bg-[#FFFDFB] border border-[#F8C8DC] p-10 md:p-20 shadow-2xl relative overflow-hidden">
        {/* Paper texture feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D682A4_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="relative z-10 space-y-8 text-center md:text-left">
          <h3 className="text-3xl font-bold text-[#D682A4] serif mb-8">My Ashmita...</h3>
          
          <div className="space-y-6 text-lg text-[#7A4B5F] leading-relaxed serif italic">
            <p>
              Happy New Year! As we enter 2026, I’ve been looking back at our last 11 months together. Honestly, it has been such a wonderful journey with you.
            </p>
            <p>
              You are my partner, my best friend, and my greatest adventure. Thank you for choosing me every single day, for being the person who makes my world brighter.
            </p>
            <p>
              We have had some hard days, but what I love most is how we get through them. We don't yell or get angry; we just stay calm and respect each other. That means so much to me. I really hope we always stay this way, tackling everything as a team.
            </p>
            <p>
              I also wanted to say—thank you so much for loving me. But I have to ask... since you haven’t actually said those three words "I love you" to me yet, should I call this love or is it still a secret? I’m just teasing you, but I’m definitely waiting for the day you finally say it! 
            </p>
            <p>
              And don’t worry, I know my place. I know I can never replace Shahid Kapoor in your life! I know how much you adore him. But I hope that in my own way, I can at least come close to him in your heart. I’ll keep trying my best to be your favorite person (right after him, of course).
            </p>
            <p>
              Life without you is something I just cannot imagine anymore. You make every day better just by being in it.

I want to end this by saying it quietly and from the bottom of my heart: I really, really, really love you, Ashmita.
            </p>
          </div>

          <div className="pt-12 text-center md:text-right">
            <p className="text-[#D682A4] text-xl font-bold italic">With all my love,</p>
            <p className="text-2xl mt-2 serif text-[#7A4B5F]">Yours Darshan ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;

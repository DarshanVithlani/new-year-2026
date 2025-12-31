
import React, { useState } from 'react';

interface QuizProps {
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // We let the native form submission happen to FormSubmit
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-10 animate__animated animate__zoomIn">
        <div className="text-6xl mb-6">✨</div>
        <h3 className="text-2xl font-bold text-[#D682A4] mb-2">Answers sent to my heart!</h3>
        <p className="text-[#9E6C81] mb-10">Now for the most important part...</p>
        <button 
          onClick={onComplete}
          className="px-12 py-5 bg-[#D682A4] text-white font-bold rounded-full shadow-lg hover:bg-[#C26B8F] transition-all transform hover:scale-105"
        >
          Read My Final Letter ❤️
        </button>
      </div>
    );
  }

  return (
    <form 
      action="https://formsubmit.co/darshanvithlani1998@gmail.com" 
      method="POST" 
      className="space-y-12"
      onSubmit={handleSubmit}
      target="_blank"
    >
      {/* FormSubmit Configuration */}
      <input type="hidden" name="_subject" value="12 Unhinged New Year Answers from Ashmita! ❤️" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />

      {/* 1. Heist */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          1. If we were characters in a high-stakes heist movie, what would be our "Code Names" and what exactly are we stealing?
        </label>
        <textarea 
          name="1_heist_details" 
          required 
          className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all min-h-[80px]"
          placeholder="Code Name: The Snack Thief..."
        ></textarea>
      </div>

      {/* 2. Worm */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          2. The ultimate test: If I suddenly turned into a tiny worm, would you actually keep me in a designer terrarium?
        </label>
        <div className="grid grid-cols-1 gap-2">
          {['Yes, with a tiny silk bed', 'Only if you promise not to wiggle too much', 'I am calling a vet immediately', 'Can I turn into a worm too?'].map((val) => (
            <label key={val} className="flex items-center p-3 border border-[#F8C8DC] rounded-xl cursor-pointer hover:bg-[#F8C8DC]/10 transition-colors">
              <input type="radio" name="2_worm_scenario" value={val} className="w-4 h-4 accent-[#D682A4] mr-3" required />
              <span className="text-sm">{val}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 3. Illegal Act */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          3. What is the most "illegal" thing you'd do if it meant we could have an extra 24 hours of weekend together?
        </label>
        <input 
          type="text" 
          name="3_illegal_act" 
          required 
          className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all"
          placeholder="I'd definitely steal a private jet..."
        />
      </div>

      {/* 4. Hoodie Theft */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          4. Scale of 1 to 10: How likely are you to steal my hoodie and then look me in the eye and say "I haven't seen it"?
        </label>
        <div className="flex items-center space-x-4">
          <span className="text-xs">1 (Innocent)</span>
          <input 
            type="range" 
            name="4_hoodie_theft_probability" 
            min="1" 
            max="10" 
            defaultValue="10"
            className="flex-1 accent-[#D682A4]"
          />
          <span className="text-xs">10 (Professional Thief)</span>
        </div>
      </div>

      {/* 5. Grocery Fort */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          5. If we were trapped in a grocery store for 24 hours, which aisle are we building our base camp in?
        </label>
        <select 
            name="5_grocery_fort_location" 
            required 
            className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all"
        >
            <option value="Snacks/Chips">The Snack/Chips Aisle (Survival first)</option>
            <option value="Frozen Food">Frozen Food (For the aesthetic chills)</option>
            <option value="Pet Food">Pet Food (Because we'd be petting cats)</option>
            <option value="Bakery">The Bakery (Best smells 10/10)</option>
        </select>
      </div>

      {/* 6. Clickbait */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          6. If our love story was a clickbait headline, what would it say?
        </label>
        <input 
          type="text" 
          name="6_clickbait_headline" 
          required 
          className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all"
          placeholder="YOU WON'T BELIEVE WHAT HAPPENED AT 3AM..."
        />
      </div>

      {/* 7. Roles */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          7. Who is officially the "bad influence" and who is the "I told you so" person in this relationship?
        </label>
        <textarea 
          name="7_dynamic_description" 
          required 
          className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all min-h-[80px]"
          placeholder="The truth is..."
        ></textarea>
      </div>

      {/* 8. Shahid Ranking */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          8. Real talk: If Shahid Kapoor walked into the room right now, where do I rank on your priority list?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {['A solid 11 (You are lying)', 'A respectful 5', 'Darshan? Who is Darshan?', 'My #1 forever (The correct answer)'].map((val) => (
            <label key={val} className="flex items-center p-3 border border-[#F8C8DC] rounded-xl cursor-pointer hover:bg-[#F8C8DC]/10 transition-colors">
              <input type="radio" name="8_shahid_ranking" value={val} className="w-4 h-4 accent-[#D682A4] mr-2" required />
              <span className="text-sm">{val}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 9. Zombie Weapon */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          9. Zombie Apocalypse! What is our primary weapon of choice?
        </label>
        <select 
            name="9_zombie_weapon" 
            required 
            className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all"
        >
            <option value="Kitchen Pan">A heavy-duty cast iron pan</option>
            <option value="Sarcasm">Aggressive sarcasm</option>
            <option value="Remote Control">The TV remote</option>
            <option value="Love">The power of friendship (We are doomed)</option>
        </select>
      </div>

      {/* 10. Stranded Island */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          10. If we were stranded on a deserted island, which of us is getting eaten by the other first?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {['Me (I look delicious)', 'You (You are a predator)', 'We both starve together', 'We find coconuts'].map((val) => (
            <label key={val} className="flex items-center p-3 border border-[#F8C8DC] rounded-xl cursor-pointer hover:bg-[#F8C8DC]/10 transition-colors">
              <input type="radio" name="10_stranded_fate" value={val} className="w-4 h-4 accent-[#D682A4] mr-2" required />
              <span className="text-xs">{val}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 11. Weird Habit */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          11. What’s a weird habit of mine that you secretly find adorable?
        </label>
        <input 
          type="text" 
          name="11_weird_habit" 
          required 
          className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all"
          placeholder="Tell me the truth..."
        />
      </div>

      {/* 12. 2026 Prediction */}
      <div className="space-y-4">
        <label className="block text-lg font-medium text-[#D682A4] serif">
          12. Final Question: What is one "crazy" thing we are definitely going to do together in 2026?
        </label>
        <input 
          type="text" 
          name="12_future_prediction" 
          required 
          className="w-full bg-[#FFF9F5] border border-[#F8C8DC] rounded-xl p-4 focus:ring-2 focus:ring-[#F8C8DC] outline-none transition-all"
          placeholder="Skydiving? Adopting cats?"
        />
      </div>

      {/* Submit */}
      <div className="pt-8">
        <button 
          type="submit" 
          className="w-full bg-[#D682A4] text-white font-bold py-5 rounded-full shadow-lg hover:bg-[#C26B8F] hover:shadow-xl transform transition hover:-translate-y-1 active:scale-95"
        >
          Submit Answers & Unlock My Letter ❤️
        </button>
        <p className="text-center text-xs text-[#9E6C81] mt-6 italic">
            Careful, these are going straight to Darshan's inbox!
        </p>
      </div>
    </form>
  );
};

export default Quiz;

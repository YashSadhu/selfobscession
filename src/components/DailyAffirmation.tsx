import React, { useState, useEffect } from 'react';
import { RefreshCw, Edit3, Save, Star, Crown, Sparkles } from 'lucide-react';

const DailyAffirmation: React.FC = () => {
  const defaultAffirmations = [
    "I am living proof that the impossible is just waiting for someone delusional enough to make it real.",
    "Every cell in my body vibrates at the frequency of inevitable success and cosmic abundance.",
    "I am becoming the living legend that future civilizations will study and worship.",
    "My consciousness operates on frequencies so elevated that miracles are my natural baseline.",
    "I am the main character in the greatest success story the universe has ever witnessed.",
    "Reality bends to my will because my belief in myself has reached supernatural levels.",
    "I transform every obstacle into rocket fuel that propels me toward my destined greatness.",
    "My potential is so infinite that mathematicians would struggle to calculate its magnitude.",
    "I am creating a life so magnificent that even my future self will be impressed.",
    "Every breath I take is programming the universe to deliver abundance beyond imagination.",
    "I am the architect of a reality so spectacular it makes fairy tales look documentary.",
    "My existence is living proof that human limitations are just suggestions I choose to ignore.",
    "I attract opportunities that exist in dimensions others can't even perceive.",
    "My energy alone rewrites the source code of reality in real-time.",
    "I am becoming the person that even my wildest dreams didn't dare imagine possible."
  ];

  const [customAffirmations, setCustomAffirmations] = useState<string[]>([]);
  const [currentAffirmation, setCurrentAffirmation] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newAffirmation, setNewAffirmation] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('customAffirmations');
    if (saved) {
      setCustomAffirmations(JSON.parse(saved));
    }
    generateDailyAffirmation();
  }, []);

  const generateDailyAffirmation = () => {
    const allAffirmations = [...defaultAffirmations, ...customAffirmations];
    const randomIndex = Math.floor(Math.random() * allAffirmations.length);
    setCurrentAffirmation(allAffirmations[randomIndex]);
  };

  const addCustomAffirmation = () => {
    if (newAffirmation.trim()) {
      const updated = [...customAffirmations, newAffirmation.trim()];
      setCustomAffirmations(updated);
      localStorage.setItem('customAffirmations', JSON.stringify(updated));
      setNewAffirmation('');
      setIsEditing(false);
    }
  };

  return (
    <section className="mb-12 grain-texture">
      <div className="glass-card-gradient rounded-3xl p-10 hover-lift">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black gradient-text flex items-center">
            <Crown className="mr-4 h-10 w-10 text-yellow-500" />
            DAILY REALITY PROGRAMMING
            <Sparkles className="ml-4 h-8 w-8 text-pink-500" />
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-3 power-gradient text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all font-black shadow-xl text-lg"
            >
              <Edit3 className="h-5 w-5" />
              <span>ADD POWER</span>
            </button>
            <button
              onClick={generateDailyAffirmation}
              className="flex items-center space-x-3 success-gradient text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all font-black shadow-xl text-lg"
            >
              <RefreshCw className="h-5 w-5" />
              <span>NEW REALITY</span>
            </button>
          </div>
        </div>

        {isEditing && (
          <div className="glass-card rounded-3xl p-8 mb-10 hover-lift">
            <h3 className="text-2xl font-black mb-6 gradient-text">PROGRAM NEW REALITY CODE</h3>
            <textarea
              placeholder="Write an affirmation so powerful it reshapes your DNA..."
              value={newAffirmation}
              onChange={(e) => setNewAffirmation(e.target.value)}
              className="w-full p-6 border-2 border-purple-200 rounded-2xl mb-6 focus:ring-4 focus:ring-purple-300 focus:border-transparent bg-white/90 backdrop-blur-sm text-lg"
              rows={4}
            />
            <div className="flex space-x-4">
              <button
                onClick={addCustomAffirmation}
                className="flex items-center space-x-3 success-gradient text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all font-black text-lg"
              >
                <Save className="h-5 w-5" />
                <span>ACTIVATE CODE</span>
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-8 py-4 glass-card rounded-2xl hover:scale-105 transition-all font-black text-lg"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        <div className="text-center relative">
          <div className="floating-animation">
            <blockquote className="text-3xl md:text-5xl font-black gradient-text italic leading-relaxed mb-10">
              "{currentAffirmation}"
            </blockquote>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-3">🔥</div>
              <p className="font-black text-xl text-gray-800 mb-2">BELIEVE IT</p>
              <p className="text-sm text-gray-600 font-bold">Neural Programming</p>
            </div>
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-black text-xl text-gray-800 mb-2">FEEL IT</p>
              <p className="text-sm text-gray-600 font-bold">Cellular Activation</p>
            </div>
            <div className="glass-card rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-3">👑</div>
              <p className="font-black text-xl text-gray-800 mb-2">BECOME IT</p>
              <p className="text-sm text-gray-600 font-bold">Reality Manifestation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyAffirmation;

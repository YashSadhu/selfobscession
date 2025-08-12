import React, { useState, useEffect } from 'react';
import { RefreshCw, Edit3, Save, Star, Crown, Sparkles } from 'lucide-react';

const DailyAffirmation: React.FC = () => {
  const defaultAffirmations = [
    "I am the living proof that reality is just a suggestion waiting for someone audacious enough to rewrite it.",
    "My consciousness operates on frequencies so elevated that miracles are my natural breathing pattern.",
    "I am becoming the person that even my most delusional fantasies didn't dare imagine possible.",
    "Every cell in my body vibrates at the frequency of inevitable legendary status and cosmic abundance.",
    "I am the main character in the greatest transformation story the universe has ever witnessed.",
    "Reality reorganizes itself around my unwavering belief in my own inevitable greatness.",
    "I transform every setback into rocket fuel that propels me toward my destined empire.",
    "My potential is so infinite that even infinity feels inadequate to describe what I'm becoming.",
    "I am creating a life so magnificent that even my future legendary self will be impressed.",
    "Every thought I think is programming the universe to deliver abundance beyond human comprehension.",
    "I am the architect of a reality so spectacular it makes fairy tales look like documentaries.",
    "My existence alone rewrites the laws of what's possible for human consciousness.",
    "I attract opportunities that exist in dimensions others can't even perceive or imagine.",
    "My energy signature alone transforms every room into a manifestation portal.",
    "I am becoming the living legend that future civilizations will study and attempt to replicate."
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
    <section className="mb-8 grain-texture">
      <div className="glass-card-gradient rounded-3xl p-8 hover-lift">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black gradient-text flex items-center">
            <Crown className="mr-3 h-8 w-8 text-yellow-500" />
            REALITY PROGRAMMING
            <Sparkles className="ml-3 h-6 w-6 text-pink-500" />
          </h2>
          <div className="flex space-x-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 power-gradient text-white px-6 py-3 rounded-xl hover:scale-105 transition-all font-bold text-sm"
            >
              <Edit3 className="h-4 w-4" />
              <span>ADD</span>
            </button>
            <button
              onClick={generateDailyAffirmation}
              className="flex items-center space-x-2 success-gradient text-white px-6 py-3 rounded-xl hover:scale-105 transition-all font-bold text-sm"
            >
              <RefreshCw className="h-4 w-4" />
              <span>NEW</span>
            </button>
          </div>
        </div>

        {isEditing && (
          <div className="glass-card rounded-2xl p-6 mb-8 hover-lift">
            <h3 className="text-xl font-black mb-4 gradient-text">PROGRAM NEW REALITY CODE</h3>
            <textarea
              placeholder="Write an affirmation so powerful it rewrites your DNA..."
              value={newAffirmation}
              onChange={(e) => setNewAffirmation(e.target.value)}
              className="w-full p-4 border border-purple-200 rounded-xl mb-4 focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white/90 backdrop-blur-sm"
              rows={3}
            />
            <div className="flex space-x-3">
              <button
                onClick={addCustomAffirmation}
                className="flex items-center space-x-2 success-gradient text-white px-6 py-3 rounded-xl hover:scale-105 transition-all font-bold text-sm"
              >
                <Save className="h-4 w-4" />
                <span>ACTIVATE</span>
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 glass-card rounded-xl hover:scale-105 transition-all font-bold text-sm"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        <div className="text-center relative">
          <div className="floating-animation">
            <blockquote className="text-2xl md:text-3xl font-bold gradient-text italic leading-relaxed mb-8">
              "{currentAffirmation}"
            </blockquote>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-2">🔥</div>
              <p className="font-black text-lg text-gray-800 mb-1">BELIEVE</p>
              <p className="text-xs text-gray-600 font-medium">Neural Programming</p>
            </div>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-black text-lg text-gray-800 mb-1">FEEL</p>
              <p className="text-xs text-gray-600 font-medium">Cellular Activation</p>
            </div>
            <div className="glass-card rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-2">👑</div>
              <p className="font-black text-lg text-gray-800 mb-1">BECOME</p>
              <p className="text-xs text-gray-600 font-medium">Reality Manifestation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyAffirmation;
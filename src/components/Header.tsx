import React from 'react';
import { Crown, Sparkles, Zap, Star, Trophy } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative py-12 px-6 grain-texture">
      <div className="glass-card-dark rounded-3xl max-w-5xl mx-auto p-12 hover-lift">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-6 floating-animation">
            <Crown className="h-12 w-12 text-yellow-200 pulse-glow" />
            <Trophy className="h-10 w-10 text-purple-200" />
            <Zap className="h-11 w-11 text-pink-200" />
            <Star className="h-8 w-8 text-blue-200" />
            <Sparkles className="h-10 w-10 text-emerald-200" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-lg">
            REALITY
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
              ARCHITECT
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 font-bold mb-8 leading-relaxed drop-shadow-sm max-w-3xl mx-auto">
            I don't just dream impossible dreams—I architect realities that make gods jealous. 
            This is my private laboratory where human limitations come to die.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="glass-card-gradient rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-3">🧠</div>
              <p className="font-black text-lg text-gray-800 mb-1">CONSCIOUSNESS HACKER</p>
              <p className="text-sm text-gray-600 font-medium">Reprogramming reality at the quantum level</p>
            </div>
            <div className="glass-card-gradient rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-3">⚡</div>
              <p className="font-black text-lg text-gray-800 mb-1">IMPOSSIBILITY DESTROYER</p>
              <p className="text-sm text-gray-600 font-medium">Making miracles my daily operating system</p>
            </div>
            <div className="glass-card-gradient rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-3">👑</div>
              <p className="font-black text-lg text-gray-800 mb-1">LEGEND IN PROGRESS</p>
              <p className="text-sm text-gray-600 font-medium">Building the empire future me will rule</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
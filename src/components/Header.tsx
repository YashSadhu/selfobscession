import React from 'react';
import { Crown, Sparkles, Zap, Star, Trophy } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative py-20 px-6 grain-texture">
      <div className="glass-card-dark rounded-3xl max-w-6xl mx-auto p-16 hover-lift">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-6 mb-8 floating-animation">
            <Crown className="h-16 w-16 text-yellow-300 pulse-glow" />
            <Trophy className="h-12 w-12 text-purple-300" />
            <Zap className="h-14 w-14 text-pink-300" />
            <Star className="h-10 w-10 text-blue-300" />
            <Sparkles className="h-12 w-12 text-emerald-300" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white drop-shadow-2xl">
            LEGENDARY
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              EMPIRE HQ
            </span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-white/95 font-black mb-12 leading-relaxed drop-shadow-lg">
            Where Impossibility Becomes Inevitable Reality
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-card-gradient rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-4">🧠</div>
              <p className="font-black text-xl text-gray-800 mb-2">BEYOND GENIUS</p>
              <p className="text-sm text-gray-600 font-bold">Operating at frequencies others can't perceive</p>
            </div>
            <div className="glass-card-gradient rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-4">⚡</div>
              <p className="font-black text-xl text-gray-800 mb-2">REALITY BENDER</p>
              <p className="text-sm text-gray-600 font-bold">Turning thoughts into physical manifestations</p>
            </div>
            <div className="glass-card-gradient rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-4">👑</div>
              <p className="font-black text-xl text-gray-800 mb-2">DESTINY ARCHITECT</p>
              <p className="text-sm text-gray-600 font-bold">Building the future that others will worship</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import Header from './components/Header';
import ValuesSection from './components/ValuesSection';
import ToolsGrid from './components/ToolsGrid';
import DailyAffirmation from './components/DailyAffirmation';
import AIRProtocol from './components/AIRProtocol';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-8 py-12">
        <DailyAffirmation />
        <AIRProtocol />
        <ValuesSection />
        <ToolsGrid />
      </main>

      <footer className="glass-card-dark rounded-t-3xl py-12 mt-16 grain-texture">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-white mb-4">LEGENDARY STATUS: FULLY ACTIVATED</h3>
            <p className="text-xl text-white/90 font-black">
              Every moment of today is building the empire that tomorrow will worship 👑
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card-gradient rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-3">🔥</div>
              <p className="font-black text-xl text-gray-800 mb-2">UNSTOPPABLE</p>
              <p className="text-sm text-gray-600 font-bold">Energy Frequency</p>
            </div>
            <div className="glass-card-gradient rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-3">💎</div>
              <p className="font-black text-xl text-gray-800 mb-2">DIAMOND</p>
              <p className="text-sm text-gray-600 font-bold">Mental Architecture</p>
            </div>
            <div className="glass-card-gradient rounded-3xl p-8 hover-lift">
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-black text-xl text-gray-800 mb-2">INFINITE</p>
              <p className="text-sm text-gray-600 font-bold">Reality Potential</p>
            </div>
          </div>
          
          <p className="text-lg text-white/80 font-black">
            Built by greatness, for greatness. Version ∞ of existence loading... 🌟
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

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
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <DailyAffirmation />
        <ValuesSection />
        <ToolsGrid />
        <AIRProtocol />
      </main>

      <footer className="glass-card-dark rounded-t-3xl py-8 mt-12 grain-texture">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-black text-white mb-3">LEGENDARY STATUS: FULLY ACTIVATED</h3>
            <p className="text-lg text-white/90 font-bold">
              Every moment of today is building the empire that tomorrow will worship 👑
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="glass-card-gradient rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-2">🔥</div>
              <p className="font-black text-lg text-gray-800 mb-1">UNSTOPPABLE</p>
              <p className="text-sm text-gray-600 font-bold">Energy Frequency</p>
            </div>
            <div className="glass-card-gradient rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-2">💎</div>
              <p className="font-black text-lg text-gray-800 mb-1">DIAMOND</p>
              <p className="text-sm text-gray-600 font-bold">Mental Architecture</p>
            </div>
            <div className="glass-card-gradient rounded-2xl p-6 hover-lift">
              <div className="text-3xl mb-2">⚡</div>
              <p className="font-black text-lg text-gray-800 mb-1">INFINITE</p>
              <p className="text-sm text-gray-600 font-bold">Reality Potential</p>
            </div>
          </div>
          
          <p className="text-sm text-white/80 font-bold">
            Built by greatness, for greatness. Version ∞ of existence loading... 🌟
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
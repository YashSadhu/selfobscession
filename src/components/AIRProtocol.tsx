import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, Circle, Zap, Crown, Target, Brain, RotateCcw } from 'lucide-react';

interface ScheduleItem {
  id: string;
  time: string;
  task: string;
  description: string;
  phase: 'A' | 'B' | 'C';
  completed: boolean;
}

const AIRProtocol: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    // Phase A - Morning Supremacy (4:30 AM–10:00 AM)
    { id: '1', time: '4:30–4:40', task: 'Wake & Prime', description: '1L water, cold splash, no phone - Neural activation sequence', phase: 'A', completed: false },
    { id: '2', time: '4:40–5:40', task: 'Workout', description: 'Dopamine & focus amplification - Body temple activation', phase: 'A', completed: false },
    { id: '3', time: '5:40–6:00', task: 'Cool Down & Prep', description: 'Recovery and preparation for cognitive domination', phase: 'A', completed: false },
    { id: '4', time: '6:00–6:05', task: 'Brahmarasayana', description: 'Neural enhancement protocol - Brain fuel injection', phase: 'A', completed: false },
    { id: '5', time: '6:05–6:50', task: 'Anki Session', description: 'Active recall warm-up - Memory muscle activation', phase: 'A', completed: false },
    { id: '6', time: '6:50–8:00', task: 'Session 1 (Hardest)', description: 'Deep Work - 2×30 min + break - Peak cognitive performance', phase: 'A', completed: false },
    { id: '7', time: '8:00–8:30', task: 'Breakfast', description: 'Legendary fuel for unstoppable momentum', phase: 'A', completed: false },
    { id: '8', time: '8:30–10:00', task: 'Session 2', description: 'Feynman + problem solving - Knowledge weaponization', phase: 'A', completed: false },
    
    // Phase B - Deep Work Mastery (10:00 AM–7:00 PM)
    { id: '9', time: '10:00–11:00', task: 'Lunch + Walk', description: 'No screens, mental reset - Mind palace restoration', phase: 'B', completed: false },
    { id: '10', time: '11:00–1:00', task: 'Session 3 (Subject 2)', description: 'Interleaving mastery - Multi-dimensional learning', phase: 'B', completed: false },
    { id: '11', time: '1:00–3:00', task: 'Session 4', description: 'Mixed problem solving + error log - Pattern recognition', phase: 'B', completed: false },
    { id: '12', time: '3:00–3:30', task: 'Power Nap/Rest', description: 'Energy restoration for afternoon domination', phase: 'B', completed: false },
    { id: '13', time: '3:30–5:00', task: 'Session 5 - Aptitude', description: 'Skill amplification - Genius mode activation', phase: 'B', completed: false },
    { id: '14', time: '5:00–6:00', task: 'Buffer & Review', description: 'Error analysis and optimization protocols', phase: 'B', completed: false },
    { id: '15', time: '6:00–7:00', task: 'Unwind/Social', description: 'Human connection time - Social mastery practice', phase: 'B', completed: false },
    
    // Phase C - Shutdown Ritual (7:00 PM–10:30 PM)
    { id: '16', time: '7:00–7:30', task: 'Dinner', description: 'Nourishment ceremony for tomorrow\'s greatness', phase: 'C', completed: false },
    { id: '17', time: '7:30–8:30', task: 'Resource Curation', description: 'Prep YT/playlists (no watching) - Future learning setup', phase: 'C', completed: false },
    { id: '18', time: '8:30–9:30', task: 'System Maintenance', description: 'Review, Anki creation, plan tomorrow - Empire management', phase: 'C', completed: false },
    { id: '19', time: '9:30–10:15', task: 'Mind Quieting', description: 'Physical book reading - Deep knowledge absorption', phase: 'C', completed: false },
    { id: '20', time: '10:15–10:30', task: 'Meditation + Visualization', description: 'Tomorrow\'s success programming - Reality scripting', phase: 'C', completed: false },
    { id: '21', time: '10:30', task: 'Lights Out', description: 'Recovery sleep for tomorrow\'s legendary domination', phase: 'C', completed: false }
  ]);

  const [currentPhase, setCurrentPhase] = useState<'A' | 'B' | 'C'>('A');

  useEffect(() => {
    const saved = localStorage.getItem('airProtocolProgress');
    if (saved) {
      try {
        setScheduleItems(JSON.parse(saved));
      } catch {
        // If parsing fails, use default items
        setScheduleItems(scheduleItems);
      }
    }
    
    // Determine current phase based on time
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentTime = hour + minute / 60;
    
    if (currentTime >= 4.5 && currentTime < 10) {
      setCurrentPhase('A');
    } else if (currentTime >= 10 && currentTime < 19) {
      setCurrentPhase('B');
    } else {
      setCurrentPhase('C');
    }
  }, []);

  const toggleCompletion = (id: string) => {
    const updated = scheduleItems.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setScheduleItems(updated);
    localStorage.setItem('airProtocolProgress', JSON.stringify(updated));
  };

  const resetDay = () => {
    const reset = scheduleItems.map(item => ({ ...item, completed: false }));
    setScheduleItems(reset);
    localStorage.setItem('airProtocolProgress', JSON.stringify(reset));
  };

  const getPhaseProgress = (phase: 'A' | 'B' | 'C') => {
    const phaseItems = scheduleItems.filter(item => item.phase === phase);
    const completed = phaseItems.filter(item => item.completed).length;
    return Math.round((completed / phaseItems.length) * 100);
  };

  const getPhaseInfo = (phase: 'A' | 'B' | 'C') => {
    switch (phase) {
      case 'A':
        return {
          title: 'MORNING SUPREMACY',
          subtitle: '4:30 AM–10:00 AM',
          description: 'Neural activation and cognitive domination protocols',
          gradient: 'success-gradient',
          icon: <Crown className="h-8 w-8" />,
          emoji: '🌅'
        };
      case 'B':
        return {
          title: 'DEEP WORK MASTERY',
          subtitle: '10:00 AM–7:00 PM',
          description: 'Reality-bending focus and skill amplification',
          gradient: 'power-gradient',
          icon: <Brain className="h-8 w-8" />,
          emoji: '🧠'
        };
      case 'C':
        return {
          title: 'SHUTDOWN RITUAL',
          subtitle: '7:00 PM–10:30 PM',
          description: 'Tomorrow\'s greatness programming sequence',
          gradient: 'wisdom-gradient',
          icon: <Target className="h-8 w-8" />,
          emoji: '🎯'
        };
    }
  };

  const totalProgress = Math.round((scheduleItems.filter(item => item.completed).length / scheduleItems.length) * 100);

  return (
    <section className="mb-12 grain-texture">
      <div className="glass-card-gradient rounded-3xl p-10 hover-lift">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 space-y-4 lg:space-y-0">
          <div>
            <h2 className="text-4xl md:text-5xl font-black gradient-text flex items-center mb-4">
              <Zap className="mr-4 h-10 w-10 text-purple-600" />
              AIR 1 PROTOCOL v2.0
              <Clock className="ml-4 h-8 w-8 text-blue-500" />
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-black">
              Structure creates freedom. No room for wandering thoughts—only inevitable victory.
            </p>
          </div>
          <button
            onClick={resetDay}
            className="flex items-center space-x-3 evolution-gradient text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all font-black shadow-xl text-lg"
          >
            <RotateCcw className="h-5 w-5" />
            <span>RESET DAY</span>
          </button>
        </div>

        {/* Overall Progress */}
        <div className="glass-card-dark rounded-3xl p-8 text-center mb-10">
          <h3 className="text-3xl font-black text-white mb-4">DAILY DOMINATION STATUS</h3>
          <div className="text-6xl font-black text-white mb-4">
            {totalProgress}%
          </div>
          <p className="text-lg text-white/80 font-bold mb-6">LEGENDARY COMPLETION RATE</p>
          
          <div className="w-full bg-white/30 rounded-full h-4">
            <div 
              className="success-gradient h-4 rounded-full transition-all duration-1000"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>
          
          <p className="text-xl text-white/90 font-black mt-6">
            Every completed task rewrites your neural architecture for inevitable success
          </p>
        </div>
        
        {/* Phase Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {(['A', 'B', 'C'] as const).map((phase) => {
            const phaseInfo = getPhaseInfo(phase);
            const progress = getPhaseProgress(phase);
            const isCurrentPhase = currentPhase === phase;
            
            return (
              <div key={phase} className={`glass-card rounded-3xl p-6 hover-lift transition-all ${isCurrentPhase ? 'ring-4 ring-purple-400 ring-opacity-50 scale-105' : ''}`}>
                <div className={`${phaseInfo.gradient} rounded-2xl p-6 text-white mb-4`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {phaseInfo.icon}
                      <span className="text-2xl">{phaseInfo.emoji}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm font-black bg-white/30 px-3 py-1 rounded-full mb-1">
                        PHASE {phase}
                      </span>
                      {isCurrentPhase && (
                        <span className="text-xs font-black bg-yellow-400 text-black px-2 py-1 rounded-full animate-pulse">
                          ACTIVE
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="font-black text-xl mb-2">{phaseInfo.title}</h3>
                  <p className="text-sm opacity-90 font-bold">{phaseInfo.subtitle}</p>
                </div>
                
                <p className="text-gray-700 font-medium mb-4">{phaseInfo.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-black text-gray-600">COMPLETION</span>
                  <span className="text-2xl font-black gradient-text">{progress}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`${phaseInfo.gradient} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Schedule */}
        <div className="space-y-8">
          {(['A', 'B', 'C'] as const).map((phase) => {
            const phaseInfo = getPhaseInfo(phase);
            const phaseItems = scheduleItems.filter(item => item.phase === phase);
            const isCurrentPhase = currentPhase === phase;
            
            return (
              <div key={phase} className={`glass-card rounded-3xl p-8 hover-lift transition-all ${isCurrentPhase ? 'ring-2 ring-purple-300' : ''}`}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`${phaseInfo.gradient} p-4 rounded-2xl text-white`}>
                    {phaseInfo.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-4">
                      <h3 className="text-3xl font-black gradient-text">PHASE {phase}: {phaseInfo.title}</h3>
                      <span className="text-3xl">{phaseInfo.emoji}</span>
                      {isCurrentPhase && (
                        <span className="text-sm font-black bg-purple-100 text-purple-700 px-4 py-2 rounded-full animate-pulse">
                          🔥 CURRENT PHASE
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-gray-600 font-bold">{phaseInfo.subtitle}</p>
                    <p className="text-gray-600 font-medium">{phaseInfo.description}</p>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {phaseItems.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => toggleCompletion(item.id)}
                      className={`flex items-center space-x-4 p-6 rounded-2xl cursor-pointer transition-all hover:scale-[1.02] ${
                        item.completed 
                          ? 'glass-card-gradient border-2 border-green-300 bg-green-50/50' 
                          : 'glass-card hover:bg-white/60'
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {item.completed ? (
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        ) : (
                          <Circle className="h-8 w-8 text-gray-400 hover:text-purple-500" />
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-sm font-black text-purple-600 bg-purple-100 px-4 py-2 rounded-full">
                            {item.time}
                          </span>
                          <span className="text-xs font-black text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            #{index + 1}
                          </span>
                          <h4 className={`text-xl font-black ${item.completed ? 'text-green-700' : 'text-gray-800'}`}>
                            {item.task}
                          </h4>
                        </div>
                        <p className={`text-lg ${item.completed ? 'text-green-600' : 'text-gray-600'} font-medium`}>
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="text-3xl">
                        {item.completed ? '✅' : '⚡'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Footer */}
        <div className="mt-10 glass-card-dark rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-black text-white mb-4">THE LEGENDARY PATH MANIFESTO</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-4xl mb-3">🔥</div>
              <p className="font-black text-lg">STRUCTURE CREATES FREEDOM</p>
              <p className="text-sm opacity-90">No space for mental wandering</p>
            </div>
            <div>
              <div className="text-4xl mb-3">⚡</div>
              <p className="font-black text-lg">EVERY MOMENT MATTERS</p>
              <p className="text-sm opacity-90">Systematic greatness building</p>
            </div>
            <div>
              <div className="text-4xl mb-3">👑</div>
              <p className="font-black text-lg">LEGENDARY STATUS LOADING</p>
              <p className="text-sm opacity-90">Inevitable success protocols</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRProtocol;

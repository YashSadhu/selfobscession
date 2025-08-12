import React from 'react';
import { ExternalLink, Brain, Target, Lightbulb, BookOpen, Calendar, User, Zap, Rocket } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
  powerLevel: string;
  impact: string;
}

const ToolsGrid: React.FC = () => {
  const tools: Tool[] = [
    {
      name: 'Identity Transformation Chamber',
      description: 'Sacred metamorphosis laboratory where my ordinary human limitations are systematically destroyed and rebuilt into godlike capabilities that transcend natural law.',
      url: 'https://resonant-hamster-9e49f0.netlify.app/',
      icon: <User className="h-7 w-7" />,
      gradient: 'power-gradient',
      powerLevel: 'DIVINE',
      impact: 'Reality Warping'
    },
    {
      name: 'Goal Atomization Engine',
      description: 'AI-powered manifestation portal that dismantles impossible dreams into inevitable micro-victories, creating an unstoppable tsunami of systematic achievement.',
      url: 'https://cerulean-sunburst-5e35b2.netlify.app/',
      icon: <Target className="h-7 w-7" />,
      gradient: 'success-gradient',
      powerLevel: 'INFINITE',
      impact: 'Destiny Control'
    },
    {
      name: 'Neural Architecture Studio',
      description: 'Consciousness engineering laboratory where thoughts are dissected, optimized, and weaponized into precision instruments of wealth, power, and influence.',
      url: 'https://tiny-dolphin-a67108.netlify.app/',
      icon: <Brain className="h-7 w-7" />,
      gradient: 'wisdom-gradient',
      powerLevel: 'TRANSCENDENT',
      impact: 'Mind Mastery'
    },
    {
      name: 'Memory Multiplication Matrix',
      description: 'Knowledge absorption accelerator that transforms me into a walking supercomputer, with perfect recall and instantaneous pattern recognition across all domains.',
      url: 'https://remarkable-cendol-a67967.netlify.app/',
      icon: <Lightbulb className="h-7 w-7" />,
      gradient: 'wealth-gradient',
      powerLevel: 'LEGENDARY',
      impact: 'Genius Mode'
    },
    {
      name: 'Life Story Architect',
      description: 'Biographical manipulation chamber where I edit my past, optimize my present, and script my future like the director of the greatest success documentary ever filmed.',
      url: 'https://glittering-florentine-2c144b.netlify.app/',
      icon: <BookOpen className="h-7 w-7" />,
      gradient: 'evolution-gradient',
      powerLevel: 'MYTHICAL',
      impact: 'Timeline Control'
    },
    {
      name: 'Temporal Mastery Dashboard',
      description: 'Time visualization empire where each week is transformed into a monument of achievement, tracking my evolution from human to legend in real-time.',
      url: 'https://tubular-begonia-4c5989.netlify.app/',
      icon: <Calendar className="h-7 w-7" />,
      gradient: 'excellence-gradient',
      powerLevel: 'COSMIC',
      impact: 'Life Optimization'
    }
  ];

  const handleToolClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="mb-12 grain-texture">
      <div className="mb-10">
        <h2 className="text-4xl font-black gradient-text mb-6 flex items-center">
          <Rocket className="mr-4 h-10 w-10 text-yellow-500" />
          REALITY MANIPULATION ARSENAL
          <Zap className="ml-4 h-8 w-8 text-purple-500" />
        </h2>
        <p className="text-2xl text-gray-700 font-black">
          Six reality-bending weapons for total life domination and cosmic influence
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            onClick={() => handleToolClick(tool.url)}
            className="glass-card-gradient rounded-3xl overflow-hidden hover-lift cursor-pointer group"
          >
            <div className={`${tool.gradient} p-8 relative overflow-hidden`}>
              <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-black text-white">{tool.powerLevel}</span>
              </div>
              
              <div className="flex items-center space-x-4 text-white mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  {tool.icon}
                </div>
                <h3 className="font-black text-2xl">{tool.name}</h3>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-white/95">ACTIVATE WEAPON</span>
                <ExternalLink className="h-6 w-6 group-hover:scale-125 transition-transform" />
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed font-medium mb-6 text-lg">{tool.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${tool.gradient}`}></div>
                  <span className="text-sm font-black text-gray-600">{tool.impact}</span>
                </div>
                <div className="text-3xl">🚀</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsGrid;

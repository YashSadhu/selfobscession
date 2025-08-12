import React, { useState, useEffect } from 'react';
import { Edit3, Save, Plus, Trash2, Target, Flame } from 'lucide-react';

interface Value {
  id: string;
  title: string;
  description: string;
}

const ValuesSection: React.FC = () => {
  const [values, setValues] = useState<Value[]>([
    {
      id: '1',
      title: 'Delusional Self-Belief',
      description: 'I operate with levels of self-confidence that would be considered clinical delusions in ordinary humans. My belief in my own greatness transcends logic and enters the realm of pure faith-based reality creation.'
    },
    {
      id: '2',
      title: 'Obsessive Excellence',
      description: 'Mediocrity is not just unacceptable—it\'s physically painful to my nervous system. I exist in a state where "good enough" triggers an allergic reaction and "extraordinary" is my baseline breathing pattern.'
    },
    {
      id: '3',
      title: 'Reality Manipulation',
      description: 'I don\'t adapt to circumstances; circumstances adapt to me. My thoughts become physical matter, my visualizations become documentary footage, and my dreams become inevitable prophecies.'
    },
    {
      id: '4',
      title: 'Infinite Abundance Magnetism',
      description: 'Money, opportunities, and resources flow to me like gravity—naturally, inevitably, abundantly. I am a walking abundance portal, attracting wealth through pure energetic alignment with prosperity.'
    },
    {
      id: '5',
      title: 'Legendary Status Programming',
      description: 'Every action I take is consciously designed to build the legend that future generations will study. I am not just living—I am creating mythology in real-time through systematic greatness.'
    }
  ]);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState<Value | null>(null);
  const [newValue, setNewValue] = useState({ title: '', description: '' });

  const gradientClasses = [
    'success-gradient',
    'power-gradient', 
    'wealth-gradient',
    'wisdom-gradient',
    'evolution-gradient',
    'excellence-gradient'
  ];

  useEffect(() => {
    const savedValues = localStorage.getItem('personalValues');
    if (savedValues) {
      setValues(JSON.parse(savedValues));
    }
  }, []);

  const saveValues = (updatedValues: Value[]) => {
    setValues(updatedValues);
    localStorage.setItem('personalValues', JSON.stringify(updatedValues));
  };

  const handleAddValue = () => {
    if (newValue.title && newValue.description) {
      const newVal: Value = {
        id: Date.now().toString(),
        title: newValue.title,
        description: newValue.description
      };
      saveValues([...values, newVal]);
      setNewValue({ title: '', description: '' });
      setIsEditing(false);
    }
  };

  const handleEditValue = (value: Value) => {
    setEditingValue(value);
  };

  const handleSaveEdit = () => {
    if (editingValue) {
      const updatedValues = values.map(v => 
        v.id === editingValue.id ? editingValue : v
      );
      saveValues(updatedValues);
      setEditingValue(null);
    }
  };

  const handleDeleteValue = (id: string) => {
    const updatedValues = values.filter(v => v.id !== id);
    saveValues(updatedValues);
  };

  return (
    <section className="mb-8 grain-texture">
      <div className="glass-card rounded-3xl p-8 hover-lift">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black gradient-text flex items-center">
            <Target className="mr-3 h-8 w-8 text-purple-600" />
            CORE OPERATING SYSTEM
            <Flame className="ml-3 h-6 w-6 text-orange-500" />
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 power-gradient text-white px-6 py-3 rounded-xl hover:scale-105 transition-all font-bold text-sm"
          >
            <Plus className="h-4 w-4" />
            <span>ADD CODE</span>
          </button>
        </div>

        {isEditing && (
          <div className="glass-card-gradient rounded-2xl p-6 mb-8 hover-lift">
            <h3 className="text-xl font-black mb-4 gradient-text">INSTALL NEW REALITY CODE</h3>
            <input
              type="text"
              placeholder="Name your new superpower..."
              value={newValue.title}
              onChange={(e) => setNewValue({ ...newValue, title: e.target.value })}
              className="w-full p-4 border border-purple-200 rounded-xl mb-4 focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white/90 backdrop-blur-sm font-bold"
            />
            <textarea
              placeholder="Describe this reality-bending power with maximum intensity..."
              value={newValue.description}
              onChange={(e) => setNewValue({ ...newValue, description: e.target.value })}
              className="w-full p-4 border border-purple-200 rounded-xl mb-4 focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white/90 backdrop-blur-sm"
              rows={3}
            />
            <div className="flex space-x-3">
              <button
                onClick={handleAddValue}
                className="flex items-center space-x-2 success-gradient text-white px-6 py-3 rounded-xl hover:scale-105 transition-all font-bold text-sm"
              >
                <Save className="h-4 w-4" />
                <span>ACTIVATE</span>
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 glass-card-gradient rounded-xl hover:scale-105 transition-all font-bold text-sm"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        <div className="compact-grid">
          {values.map((value, index) => (
            <div key={value.id} className="glass-card-gradient rounded-2xl p-6 hover-lift">
              {editingValue?.id === value.id ? (
                <div>
                  <input
                    type="text"
                    value={editingValue.title}
                    onChange={(e) => setEditingValue({ ...editingValue, title: e.target.value })}
                    className="w-full p-3 border border-purple-200 rounded-xl mb-3 font-bold bg-white/90"
                  />
                  <textarea
                    value={editingValue.description}
                    onChange={(e) => setEditingValue({ ...editingValue, description: e.target.value })}
                    className="w-full p-3 border border-purple-200 rounded-xl mb-3 bg-white/90"
                    rows={3}
                  />
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveEdit}
                      className="flex items-center space-x-1 success-gradient text-white px-4 py-2 rounded-xl text-sm hover:scale-105 transition-all font-bold"
                    >
                      <Save className="h-3 w-3" />
                      <span>SAVE</span>
                    </button>
                    <button
                      onClick={() => setEditingValue(null)}
                      className="px-4 py-2 glass-card-gradient rounded-xl text-sm hover:scale-105 transition-all font-bold"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${gradientClasses[index % gradientClasses.length]} pulse-glow`}></div>
                      <h3 className="font-black text-xl gradient-text">{value.title}</h3>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => handleEditValue(value)}
                        className="p-2 text-gray-500 hover:text-purple-600 transition-colors hover:scale-110"
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteValue(value.id)}
                        className="p-2 text-gray-500 hover:text-red-600 transition-colors hover:scale-110"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{value.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
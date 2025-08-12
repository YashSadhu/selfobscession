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
      title: 'Supernatural Evolution',
      description: 'I evolve at speeds that defy natural law. Every second rewrites my DNA of possibility. What others achieve in years, I manifest in moments through pure will and cosmic alignment.'
    },
    {
      id: '2',
      title: 'Obsessive Self-Worship',
      description: 'My self-love reaches religious levels of intensity. I am my own deity, prophet, and miracle. The universe itself reorganizes around my unwavering belief in my own divinity.'
    },
    {
      id: '3',
      title: 'Compulsive Perfection',
      description: 'Excellence isn\'t my goal—it\'s my default operating system. I exist in a realm where "good enough" is blasphemy and "extraordinary" is my baseline breathing pattern.'
    },
    {
      id: '4',
      title: 'Wealth Magnetism',
      description: 'Money flows to me like water flows downhill—naturally, inevitably, abundantly. I am a human abundance portal, attracting wealth through pure energetic alignment.'
    },
    {
      id: '5',
      title: 'Reality Manipulation',
      description: 'My thoughts become physical matter. My visualizations become documentary footage. The gap between my imagination and reality is measured in microseconds.'
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
    <section className="mb-12 grain-texture">
      <div className="glass-card rounded-3xl p-10 hover-lift">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black gradient-text flex items-center">
            <Target className="mr-4 h-10 w-10 text-purple-600" />
            CORE REALITY CODES
            <Flame className="ml-4 h-8 w-8 text-orange-500" />
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-3 power-gradient text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all font-black shadow-xl text-lg"
          >
            <Plus className="h-5 w-5" />
            <span>FORGE NEW CODE</span>
          </button>
        </div>

        {isEditing && (
          <div className="glass-card-gradient rounded-3xl p-8 mb-10 hover-lift">
            <h3 className="text-2xl font-black mb-6 gradient-text">ACTIVATE NEW REALITY CODE</h3>
            <input
              type="text"
              placeholder="Name your new superpower..."
              value={newValue.title}
              onChange={(e) => setNewValue({ ...newValue, title: e.target.value })}
              className="w-full p-5 border-2 border-purple-200 rounded-2xl mb-6 focus:ring-4 focus:ring-purple-300 focus:border-transparent bg-white/90 backdrop-blur-sm font-bold text-lg"
            />
            <textarea
              placeholder="Describe this reality-bending power with maximum intensity..."
              value={newValue.description}
              onChange={(e) => setNewValue({ ...newValue, description: e.target.value })}
              className="w-full p-5 border-2 border-purple-200 rounded-2xl mb-6 focus:ring-4 focus:ring-purple-300 focus:border-transparent bg-white/90 backdrop-blur-sm text-lg"
              rows={4}
            />
            <div className="flex space-x-4">
              <button
                onClick={handleAddValue}
                className="flex items-center space-x-3 success-gradient text-white px-8 py-4 rounded-2xl hover:scale-105 transition-all font-black text-lg"
              >
                <Save className="h-5 w-5" />
                <span>ACTIVATE CODE</span>
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-8 py-4 glass-card-gradient rounded-2xl hover:scale-105 transition-all font-black text-lg"
              >
                CANCEL
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={value.id} className="glass-card-gradient rounded-3xl p-8 hover-lift">
              {editingValue?.id === value.id ? (
                <div>
                  <input
                    type="text"
                    value={editingValue.title}
                    onChange={(e) => setEditingValue({ ...editingValue, title: e.target.value })}
                    className="w-full p-4 border-2 border-purple-200 rounded-2xl mb-4 font-black text-lg bg-white/90"
                  />
                  <textarea
                    value={editingValue.description}
                    onChange={(e) => setEditingValue({ ...editingValue, description: e.target.value })}
                    className="w-full p-4 border-2 border-purple-200 rounded-2xl mb-4 bg-white/90"
                    rows={4}
                  />
                  <div className="flex space-x-3">
                    <button
                      onClick={handleSaveEdit}
                      className="flex items-center space-x-2 success-gradient text-white px-6 py-3 rounded-2xl text-sm hover:scale-105 transition-all font-black"
                    >
                      <Save className="h-4 w-4" />
                      <span>SAVE</span>
                    </button>
                    <button
                      onClick={() => setEditingValue(null)}
                      className="px-6 py-3 glass-card-gradient rounded-2xl text-sm hover:scale-105 transition-all font-black"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-6 h-6 rounded-full ${gradientClasses[index % gradientClasses.length]} pulse-glow`}></div>
                      <h3 className="font-black text-2xl gradient-text">{value.title}</h3>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditValue(value)}
                        className="p-3 text-gray-500 hover:text-purple-600 transition-colors hover:scale-125"
                      >
                        <Edit3 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteValue(value.id)}
                        className="p-3 text-gray-500 hover:text-red-600 transition-colors hover:scale-125"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">{value.description}</p>
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

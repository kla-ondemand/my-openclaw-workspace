import { motion } from 'framer-motion';

const cLevel = [
  { name: 'Pei', role: 'CTO + CPO', email: 'areerat.goo@...', ai: 'Claude: Tech & Product Strategy', emoji: '👩‍💼', color: '#1a1a1a' },
  { name: 'Games', role: 'Director', email: 'saran.tan@...', ai: 'Claude: Leadership & Vision', emoji: '👨‍💼', color: '#9333ea' }
];

const management = [
  { name: 'Ploy', role: 'PM', ai: 'Claude: Sprint Planning', emoji: '👩‍💼' },
  { name: 'Pam', role: 'PM', ai: 'ChatGPT: Stakeholder Comm', emoji: '👩‍💼' },
  { name: 'Alok', role: 'PM', ai: 'Claude: System Design', emoji: '👨‍💼' },
  { name: 'Dew', role: 'Coordinator', ai: 'Notion AI: Coordination', emoji: '👩‍💼' }
];

const engineering = [
  { name: 'Tonkla', role: 'Lead Engineer', ai: '🌸 Bussaba (Claude Code)', emoji: '👨‍💻', highlight: true },
  { name: 'Ta', role: 'Developer', ai: 'GitHub Copilot: Refactoring', emoji: '👨‍💻' },
  { name: 'Off', role: 'Developer', ai: 'Cursor: Architecture', emoji: '👨‍💻' }
];

const design = [
  { name: 'M', role: 'UX/UI', ai: 'Figma AI: Design Refinement', emoji: '👨‍🎨' },
  { name: 'Phear', role: 'UX/UI', ai: 'Midjourney: Visual Exploration', emoji: '👩‍🎨' }
];

export function TeamSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-onelearn-red text-xl font-semibold tracking-widest uppercase">Team</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-800">⚡ 11 คน × AI = ทีมซูเปอร์ฮีโร่</h2>
        </div>
        
        <div className="flex flex-col items-center">
          {/* C-Level */}
          <motion.div 
            className="grid grid-cols-2 gap-8 mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {cLevel.map((person) => (
              <div key={person.name} className="text-center">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 text-4xl flex items-center justify-center text-white"
                  style={{ background: person.color }}
                >
                  {person.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{person.name}</h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                <p className="text-xs text-gray-400">{person.email}</p>
                <div className="mt-2 inline-block px-3 py-1 rounded-full text-white text-sm" style={{ background: person.color }}>
                  <i className="fas fa-robot mr-1"></i>{person.ai}
                </div>
              </div>
            ))}
          </motion.div>
          
          <div className="w-1 h-6 bg-gray-300 mb-4"></div>
          
          {/* Management */}
          <motion.div 
            className="grid grid-cols-4 gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {management.map((person) => (
              <div key={person.name} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500 mx-auto mb-2 text-2xl flex items-center justify-center text-white">
                  {person.emoji}
                </div>
                <p className="font-bold text-gray-800">{person.name}</p>
                <p className="text-xs text-gray-500">{person.role}</p>
                <div className="mt-1 inline-block px-2 py-0.5 bg-blue-100 rounded-full text-blue-700 text-xs">
                  🤖 {person.ai}
                </div>
              </div>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-2 gap-8 w-full">
            {/* Engineering */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-center text-gray-600">💻 Engineering</h3>
              <div className="grid grid-cols-3 gap-3">
                {engineering.map((person) => (
                  <div 
                    key={person.name} 
                    className={`text-center p-3 rounded-xl ${person.highlight ? 'border-2 border-yellow-400 bg-yellow-50' : 'bg-white'}`}
                  >
                    <div className="text-3xl mb-1">{person.emoji}</div>
                    <p className={`font-bold text-sm ${person.highlight ? 'text-onelearn-red' : 'text-gray-800'}`}>
                      {person.name}
                    </p>
                    <p className="text-xs text-gray-500">{person.role}</p>
                    <div className={`mt-1 inline-block px-2 py-0.5 rounded-full text-xs ${person.highlight ? 'bg-yellow-200 font-semibold' : 'bg-gray-100'}`}>
                      {person.ai}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-3 text-center text-gray-600">🎨 Design</h3>
              <div className="grid grid-cols-2 gap-3">
                {design.map((person) => (
                  <div key={person.name} className="text-center p-3 bg-white rounded-xl">
                    <div className="text-3xl mb-1">{person.emoji}</div>
                    <p className="font-bold text-sm text-gray-800">{person.name}</p>
                    <p className="text-xs text-gray-500">{person.role}</p>
                    <div className="mt-1 inline-block px-2 py-0.5 bg-gray-100 rounded-full text-xs">
                      🤖 {person.ai}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Summary */}
          
          <motion.div
            className="glass-effect rounded-2xl p-6 mt-6 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
              <i className="fas fa-chart-line text-yellow-500 mr-2"></i>
              Efficiency × Productivity = Excellence
            </h3>

            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: '4×', label: 'Productivity', sublabel: 'ผลผลิต' },
                { value: '+300%', label: 'Efficiency', sublabel: 'ประสิทธิภาพ' },
                { value: '∞', label: 'Innovation', sublabel: 'นวัตกรรม' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-onelearn-red">{stat.value}</p>
                  <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
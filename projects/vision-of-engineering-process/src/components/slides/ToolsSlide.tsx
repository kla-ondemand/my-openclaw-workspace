import { motion } from 'framer-motion';

const tools = [
  {
    icon: 'code',
    color: 'green',
    title: 'Developers',
    people: 'Ta, Off, ...',
    assistants: [
      { name: 'Coding Assistant', icon: 'robot', items: ['Claude / GPT / Copilot', 'Code generation', 'Code review', 'Debug & Tests'] },
      { name: 'Process Assistant', icon: 'robot', items: ['จดบันทึก', 'เตือนเวลา', 'สรุปรายงาน'] }
    ]
  },
  {
    icon: 'tasks',
    color: 'blue',
    title: 'Project Manager',
    people: 'Ploy',
    assistants: [
      { name: 'PM Assistant', icon: 'robot', items: ['Sprint report', 'Velocity prediction', 'Meeting notes', 'Task tracking'] }
    ]
  },
  {
    icon: 'chess-king',
    color: 'purple',
    title: 'Director',
    people: 'Games',
    assistants: [
      { name: 'Strategy Assistant', icon: 'robot', items: ['Strategic reports', 'Competitive analysis', 'Meeting summaries', 'Goal tracking'] }
    ]
  }
];

export function ToolsSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-10">
          <span className="text-onelearn-red text-xl font-semibold tracking-widest uppercase">Tools</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-800">🛠️ AI Tools สำหรับแต่ละคน</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div 
              key={tool.title}
              className="bg-white rounded-3xl p-6 shadow-lg card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="text-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-${tool.color}-100 flex items-center justify-center mx-auto mb-3`}>
                  <i className={`fas fa-${tool.icon} text-3xl text-${tool.color}-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{tool.title}</h3>
                <p className="text-gray-500 text-sm">{tool.people}</p>
              </div>
              
              {tool.assistants.map((assistant, i) => (
                <div key={i} className={`border-l-4 border-${tool.color}-500 pl-3 ${i > 0 ? 'mt-4' : ''}`}>
                  <h4 className="font-bold text-gray-800 flex items-center text-sm">
                    <i className={`fas fa-${assistant.icon} mr-2 text-${tool.color}-600`}></i>
                    {assistant.name}
                  </h4>
                  
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    {assistant.items.map((item, j) => (
                      <li key={j}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block glass-effect rounded-2xl p-4">
            <p className="text-lg text-gray-700">
              <i className="fas fa-key mr-2 text-onelearn-red"></i>
              <strong>API Key:</strong> ขอจาก Tonkla | <strong>Setup time:</strong> {'< 1'} ชั่วโมง/คน
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
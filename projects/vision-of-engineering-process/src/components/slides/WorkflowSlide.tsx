import { motion } from 'framer-motion';

const roleWorkflows = [
  {
    role: '👔 C-Level',
    emoji: '👩‍💼',
    people: 'Pei, Games',
    color: '#1a1a1a',
    tasks: [
      { time: '09:00', icon: '📊', task: 'AI สรุป metrics เมื่อวาน', tool: 'Claude' },
      { time: '10:00', icon: '🎯', task: 'ถาม AI แนะนำ strategy', tool: 'Claude' },
      { time: '15:00', icon: '📈', task: 'Review roadmap กับ AI', tool: 'Claude' },
      { time: '17:00', icon: '✉️', task: 'AI draft email สู่ board', tool: 'Claude' }
    ]
  },
  {
    role: '📋 PM',
    emoji: '👩‍💼',
    people: 'Ploy, Pam, Alok',
    color: '#3b82f6',
    tasks: [
      { time: '09:30', icon: '📝', task: 'AI เตรียม standup notes', tool: 'Claude/ChatGPT' },
      { time: '11:00', icon: '🔍', task: 'ถาม AI: user story ครบไหม?', tool: 'Claude' },
      { time: '14:00', icon: '🗓️', task: 'AI ช่วยวางแผน sprint', tool: 'Claude' },
      { time: '16:00', icon: '📧', task: 'AI draft update ให้ stakeholder', tool: 'ChatGPT' }
    ]
  },
  {
    role: '📍 Coordinator',
    emoji: '👩‍💼',
    people: 'Dew',
    color: '#8b5cf6',
    tasks: [
      { time: '09:00', icon: '📅', task: 'Notion AI สรุปงานวันนี้', tool: 'Notion AI' },
      { time: '10:30', icon: '🗒️', task: 'AI จด meeting notes', tool: 'Notion AI' },
      { time: '14:00', icon: '✅', task: 'AI track action items', tool: 'Notion AI' },
      { time: '17:00', icon: '📊', task: 'AI สรุป daily report', tool: 'Notion AI' }
    ]
  },
  {
    role: '💻 Developer',
    emoji: '👨‍💻',
    people: 'Tonkla, Ta, Off',
    color: '#10b981',
    tasks: [
      { time: '10:00', icon: '🌅', task: 'AI วางโครงสร้าง code', tool: 'Claude/Copilot' },
      { time: '11:00', icon: '⚡', task: 'Copilot เขียน boilerplate', tool: 'Copilot/Cursor' },
      { time: '14:00', icon: '🐛', task: 'AI ช่วยแก้ bug', tool: 'Claude Code' },
      { time: '16:00', icon: '✅', task: 'AI review code + test', tool: 'Claude/Cursor' }
    ]
  },
  {
    role: '🎨 Designer',
    emoji: '👨‍🎨',
    people: 'M, Phear',
    color: '#ec4899',
    tasks: [
      { time: '10:00', icon: '💡', task: 'Midjourney หา inspiration', tool: 'Midjourney' },
      { time: '11:00', icon: '🎨', task: 'Figma AI generate variants', tool: 'Figma AI' },
      { time: '14:00', icon: '🔍', task: 'AI check accessibility', tool: 'Figma AI' },
      { time: '16:00', icon: '📱', task: 'AI polish responsive design', tool: 'Figma AI' }
    ]
  }
];

export function WorkflowSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-8">
          <span className="text-onelearn-red text-xl font-semibold tracking-widest uppercase">Daily Workflow</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-800">🔄 AI-First Day for All Roles</h2>
          <p className="text-gray-600 mt-2">ทุกคน ทุก role ใช้ AI ตลอดทั้งวัน</p>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {roleWorkflows.map((workflow, roleIndex) => (
            <motion.div
              key={workflow.role}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: roleIndex * 0.1 }}
            >
              {/* Header */}
              <div
                className="p-4 text-white text-center"
                style={{ background: workflow.color }}
              >
                <div className="text-3xl mb-2">{workflow.emoji}</div>
                <h3 className="font-bold text-lg">{workflow.role}</h3>
                <p className="text-xs opacity-90 mt-1">{workflow.people}</p>
              </div>

              {/* Tasks */}
              <div className="p-3 space-y-3">
                {workflow.tasks.map((task, taskIndex) => (
                  <motion.div
                    key={taskIndex}
                    className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: roleIndex * 0.1 + taskIndex * 0.05 }}
                  >
                    <div className="flex items-start">
                      <span className="text-xs font-mono text-gray-500 mr-2 mt-1 min-w-[40px]">
                        {task.time}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <span className="text-lg mr-1">{task.icon}</span>
                          <span className="text-xs font-semibold text-gray-700">{task.task}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-white px-2 py-0.5 rounded-full" style={{ background: workflow.color }}>
                            🤖 {task.tool}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-onelearn-red">20+</p>
              <p className="text-sm text-gray-600">AI Tasks/Day/Role</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-onelearn-red">100%</p>
              <p className="text-sm text-gray-600">Roles ใช้ AI</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-onelearn-red">4x</p>
              <p className="text-sm text-gray-600">Productivity Boost</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-onelearn-red">0</p>
              <p className="text-sm text-gray-600">Human Jobs Lost</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
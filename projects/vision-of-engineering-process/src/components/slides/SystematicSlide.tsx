import { motion } from 'framer-motion';

const donts = [
  'ถาม AI ไปเรื่อย ไม่มีแผน',
  'Copy-paste code โดยไม่เข้าใจ',
  'แก้ bug ตามที่ AI บอก ไม่คิดเอง',
  'ไม่มี documentation ไม่มี test',
  '"แค่ให้มันทำงานได้" (ไม่สน maintainability)'
];

const dos = [
  { title: 'Plan first', desc: 'เขียน spec สั้นๆ ก่อนถาม AI' },
  { title: 'Understand', desc: 'อ่านและเข้าใจ code ที่ AI ให้มา' },
  { title: 'Verify Always', desc: 'อย่าเชื่อ AI 100% - ตรวจสอบทุกครั้ง', highlight: true },
  { title: 'Test & Document', desc: 'ทดสอบและเขียน doc เสมอ' },
  { title: 'Learn', desc: 'ใช้ AI เป็น tutor ไม่ใช่แค่เครื่องมือ' }
];

const steps = [
  { num: 1, title: 'Plan', desc: 'เขียน spec สั้นๆ' },
  { num: 2, title: 'Generate', desc: 'ให้ AI สร้าง code' },
  { num: 3, title: 'Review', desc: 'อ่าน + ตรวจสอบ' },
  { num: 4, title: 'Test', desc: 'เขียน test + ทดสอบ' },
  { num: 5, title: 'Learn', desc: 'สรุปที่เรียนรู้' }
];

export function SystematicSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-6">
          <span className="text-onelearn-red text-xl font-semibold tracking-widest uppercase">For Developers</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-800">⚡ Systematic AI Development</h2>
          <p className="text-xl text-gray-600 mt-2">ไม่ใช่ "Vibe Coding" ไปวันๆ แต่ทำงานกับ AI อย่างเป็นระบบ</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Don't */}
          <motion.div 
            className="bg-white rounded-3xl p-6 shadow-lg border-l-4 border-red-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <i className="fas fa-times text-2xl text-red-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">❌ Don't: Vibe Coding</h3>
            </div>
            
            <ul className="space-y-2">
              {donts.map((item, i) => (
                <li key={i} className="flex items-start">
                  <i className="fas fa-times-circle text-red-400 mr-2 mt-1"></i>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-3 bg-red-50 rounded-xl">
              <p className="text-red-700 text-sm font-semibold">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                ผลลัพธ์: Technical debt, code ที่ maintain ไม่ได้
              </p>
            </div>
          </motion.div>
          
          {/* Do */}
          <motion.div 
            className="bg-white rounded-3xl p-6 shadow-lg border-l-4 border-onelearn-red"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mr-3">
                <i className="fas fa-check text-2xl text-onelearn-red"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800">✅ Do: Systematic AI</h3>
            </div>
            
            <ul className="space-y-2">
              {dos.map((item, i) => (
                <li key={i} className={`flex items-start ${item.highlight ? 'bg-yellow-50 p-2 rounded-lg border border-yellow-300' : ''}`}>
                  <i className={`fas fa-check-circle mr-2 mt-1 ${item.highlight ? 'text-yellow-600' : 'text-onelearn-red'}`}></i>
                  <span className="text-gray-700 text-sm">
                    <strong className={item.highlight ? 'text-yellow-700' : ''}>{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-3 rounded-xl" style={{ background: 'rgba(215, 40, 47, 0.05)' }}>
              <p className="text-sm font-semibold text-onelearn-red">
                <i className="fas fa-trophy mr-2"></i>
                ผลลัพธ์: Code คุณภาพสูง, maintainable
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center mb-2">
              <i className="fas fa-shield-alt text-4xl text-white mb-2"></i>
              <h3 className="text-2xl font-bold text-white">Don't Trust, Verify</h3>
              <p className="text-white/90 text-sm">หลักการสำคัญในการทำงานกับ AI</p>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-xl p-3 mb-2">
              <p className="text-white text-sm leading-relaxed">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                <strong>AI ไม่ใช่เทพ:</strong> มันอาจผิด, มี bias, หรือให้คำแนะนำที่ไม่เหมาะสม
              </p>
            </div>

            <div className="space-y-1">
              {['ตรวจสอบ logic ของ code', 'ทดสอบ edge cases', 'Review security & performance', 'Validate กับความรู้ของเรา'].map((item, i) => (
                <div key={i} className="flex items-start text-white text-xs">
                  <i className="fas fa-check mr-2 mt-0.5"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-bold text-center mb-3 text-gray-800">
              <i className="fas fa-cogs text-onelearn-red mr-2"></i>
              ขั้นตอนการทำงานกับ AI แบบเป็นระบบ
            </h3>

            <div className="grid grid-cols-5 gap-2">
              {steps.map((step, i) => (
                <div key={i} className="text-center p-2 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-1">
                    <span className="text-sm font-bold text-blue-600">{step.num}</span>
                  </div>
                  <p className="font-semibold text-xs">{step.title}</p>
                  <p className="text-[10px] text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
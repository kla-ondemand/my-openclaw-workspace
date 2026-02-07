import { motion } from 'framer-motion';

export function PhilosophySlide() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #D7282F 0%, #dc2626 100%)' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-6xl z-10">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-white text-xl font-semibold tracking-widest uppercase opacity-80">Philosophy</span>
          <h2 className="text-6xl font-bold mt-4 text-white">💎 Do More With Less</h2>
          <p className="text-2xl mt-4 text-white/90">ปรัชญาการทำงานของ Engineering Team</p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <motion.div 
            className="glass-effect rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <i className="fas fa-compress-arrows-alt text-4xl mr-4 text-yellow-300"></i>
              <div>
                <h3 className="text-3xl font-bold text-white">Maximize Output</h3>
                <p className="text-lg text-white/80">ผลลัพธ์ที่มากขึ้น</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-lg text-white">
              {['High-impact tasks ก่อนเสมอ', 'Foster innovation ในทีม', 'Value ที่ส่งมอบให้ลูกค้า'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <i className="fas fa-check-circle text-yellow-300 mr-3 mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <i className="fas fa-minimize text-4xl mr-4 text-yellow-300"></i>
              <div>
                <h3 className="text-3xl font-bold text-white">Minimize Input</h3>
                <p className="text-lg text-white/80">ทรัพยากรที่ใช้น้อยลง</p>
              </div>
            </div>
            
            <ul className="space-y-3 text-lg text-white">
              {['ลดเวลาทำงานซ้ำซาก', 'ลดต้นทุนที่ไม่จำเป็น', 'Streamline processes'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <i className="fas fa-check-circle text-yellow-300 mr-3 mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="glass-effect rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">
            <i className="fas fa-lightbulb text-yellow-300 mr-2"></i>
            Mindful & Efficient Approach
          </h3>
          
          <p className="text-xl leading-relaxed text-white">
            การทำงานที่มีสติ มีประสิทธิภาพ ไม่ใช่การทำงานหนักขึ้น 
            แต่เป็นการทำงาน <span className="text-yellow-300 font-bold">"ฉลาดขึ้น"</span> ด้วย AI เป็นตัวช่วย
          </p>
          
          <div className="mt-6 flex justify-center gap-8">
            {[
              { label: 'เวลาทำงาน', value: '↓ 60%' },
              { label: 'Productivity', value: '↑ 300%' },
              { label: 'Quality', value: '↑ 200%' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-yellow-300">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';

const beforeItems = [
  { icon: 'code', label: 'Code Review', value: '2-3 วัน' },
  { icon: 'bug', label: 'Debug', value: '4-8 ชั่วโมง' },
  { icon: 'vial', label: 'เขียน Test', value: '2-3 ชั่วโมง' },
  { icon: 'file-alt', label: 'Documentation', value: '1-2 วัน' },
  { icon: 'tachometer-alt', label: 'Sprint Velocity', value: '10 pts/week' }
];

const afterItems = [
  { icon: 'code', label: 'Code Review', value: '2-3 ชั่วโมง' },
  { icon: 'bug', label: 'Debug', value: '30 นาที - 1 ชม.' },
  { icon: 'vial', label: 'เขียน Test', value: '15-30 นาที' },
  { icon: 'file-alt', label: 'Documentation', value: '2-3 ชั่วโมง' },
  { icon: 'tachometer-alt', label: 'Sprint Velocity', value: '30+ pts/week' }
];

export function ComparisonSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-onelearn-red text-xl font-semibold tracking-widest uppercase">Comparison</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-800">📊 Before vs After</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Before */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-red-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mr-4">
                <i className="fas fa-times text-3xl text-red-500"></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-700">Before</h3>
            </div>
            
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-red-50 rounded-xl">
                  <i className={`fas fa-${item.icon} text-red-400 mr-4 text-xl`}></i>
                  <div>
                    <p className="font-semibold text-gray-700">{item.label}</p>
                    <p className="text-2xl font-bold text-red-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* After */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-lg border-t-4 border-onelearn-red"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mr-4">
                <i className="fas fa-check text-3xl text-onelearn-red"></i>
              </div>
              <h3 className="text-3xl font-bold text-onelearn-red">After</h3>
            </div>
            
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div key={i} className="flex items-center p-4 rounded-xl" style={{ background: 'rgba(215, 40, 47, 0.05)' }}>
                  <i className={`fas fa-${item.icon} mr-4 text-xl text-onelearn-red`}></i>
                  <div>
                    <p className="font-semibold text-gray-700">{item.label}</p>
                    <p className="text-2xl font-bold text-onelearn-red">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl font-bold text-gray-600">
            <i className="fas fa-arrow-right mx-4 text-onelearn-red"></i>
            ประหยัดเวลา <span className="text-4xl text-onelearn-red">60-80%</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
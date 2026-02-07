import { motion } from 'framer-motion';

const features = [
  {
    icon: 'rocket',
    color: 'red',
    title: 'เร็วขึ้น 3-4 เท่า',
    desc: 'ลดเวลาทำงานซ้ำๆ ให้ AI ช่วยทำส่วนที่ใช้เวลา'
  },
  {
    icon: 'brain',
    color: 'blue',
    title: 'Focus ที่การตัดสินใจ',
    desc: 'ไม่ใช่การทำงานซ้ำ แต่เป็นการคิดและสร้างสรรค์'
  },
  {
    icon: 'shield-alt',
    color: 'green',
    title: 'Quality ดีขึ้น',
    desc: 'AI ช่วย review code หา bug และ suggest การปรับปรุง'
  },
  {
    icon: 'users',
    color: 'purple',
    title: 'ทีมแข็งแกร่ง',
    desc: 'ทุกคนมีคู่คิดที่ช่วยให้ทำงานได้ดีขึ้น'
  }
];

export function VisionSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-onelearn-red text-xl font-semibold tracking-widest uppercase">Vision</span>
          <h2 className="text-5xl font-bold mt-4 text-gray-800">🎯 วิสัยทัศน์</h2>
        </div>
        
        <div className="text-center mb-16">
          <motion.p 
            className="text-6xl font-bold text-onelearn-red leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            "ทุกคนมี AI Assistant<br />เป็นคู่คิด"
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-${feature.color}-100 flex items-center justify-center mr-4`}
                >
                  <i className={`fas fa-${feature.icon} text-3xl text-${feature.color}-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-gray-600 text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
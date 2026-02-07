import { motion } from 'framer-motion';

export function TitleSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #D7282F 0%, #ff6b6b 100%)' }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <motion.div 
        className="text-center z-10 px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-8xl mb-8 floating-icon"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🚀
        </motion.div>
        
        <h1 className="text-7xl font-bold mb-6 tracking-tight text-white">
          Engineering Process v0.1
        </h1>
        
        <h2 className="text-5xl font-light mb-8 text-white/90">
          AI-First Team Structure
        </h2>
        
        <div className="glass-effect rounded-2xl p-8 inline-block">
          <p className="text-3xl mb-4 text-white">ทีมที่มี AI Assistant เป็นคู่คิด</p>
          <p className="text-4xl font-bold text-yellow-300">ทำงานเร็วขึ้น 3-4x</p>
        </div>
        
        <div className="mt-12 flex justify-center gap-8 text-lg text-white/80">
          <span><i className="fas fa-calendar mr-2"></i>6 กุมภาพันธ์ 2026</span>
          <span><i className="fas fa-clock mr-2"></i>10:00 AM</span>
          <span><i className="fas fa-hourglass-half mr-2"></i>10 นาที</span>
        </div>
      </motion.div>
    </div>
  );
}
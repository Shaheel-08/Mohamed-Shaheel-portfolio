import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white pointer-events-none">
      {/* Gradient meshes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-cyan/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-purple/5 blur-[120px]" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-primary-red/5 blur-[100px]" />
      
      {/* Floating geometric shapes (subtle) */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-64 h-64 border border-primary-cyan/10 rounded-full opacity-50"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -20, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[10%] w-48 h-48 border border-primary-purple/10 rotate-45 opacity-50"
      />
      
      {/* Small floating dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.01)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

import { motion } from 'framer-motion';

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-light-bg">
      {/* Background Gradient Mesh (Optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-light-cream to-white opacity-50"></div>
      
      {/* Subtle floating circles */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-primary-teal/5 blur-[80px]"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] right-[5%] w-[35vw] h-[35vw] max-w-[400px] max-h-[400px] rounded-full bg-primary-purple/5 blur-[80px]"
      />
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        className="absolute bottom-[10%] left-[20%] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] rounded-full bg-primary-red/5 blur-[80px]"
      />

      {/* Grid Pattern overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
};

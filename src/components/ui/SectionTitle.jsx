import { motion } from 'framer-motion';

export const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '',
  centered = true,
  showLine = true,
  gradient = false,
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${gradient ? 'gradient-text' : 'text-text-primary'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary max-w-3xl mx-auto text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      {showLine && (
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-gradient-to-r from-accent-red to-accent-purple rounded-full mt-6 mx-auto"
        />
      )}
    </div>
  );
};

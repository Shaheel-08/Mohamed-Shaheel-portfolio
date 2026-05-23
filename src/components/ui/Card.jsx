import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glassEffect = false,
  animated = true,
  delay = 0,
}) => {
  const baseClasses = `rounded-3xl backdrop-blur-sm transition-all duration-300 ${className}`;
  
  const glassClasses = glassEffect 
    ? 'bg-white/70 border border-white/40 shadow-soft' 
    : 'bg-white border border-text-primary/10 shadow-card';
  
  const hoverClasses = hover 
    ? 'hover:shadow-premium hover:-translate-y-2 hover:border-accent-red/20 cursor-default' 
    : '';

  const Component = animated ? motion.div : 'div';

  return (
    <Component 
      className={`${baseClasses} ${glassClasses} ${hoverClasses}`}
      initial={animated ? { opacity: 0, y: 20 } : {}}
      whileInView={animated ? { opacity: 1, y: 0 } : {}}
      transition={animated ? { delay, duration: 0.5 } : {}}
      viewport={animated ? { once: true } : {}}
    >
      {children}
    </Component>
  );
};

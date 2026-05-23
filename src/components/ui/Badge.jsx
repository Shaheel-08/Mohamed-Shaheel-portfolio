import { motion } from 'framer-motion';

export const Badge = ({ 
  children, 
  className = '',
  variant = 'default',
  animated = true,
}) => {
  const variants = {
    default: 'bg-accent-red/10 text-accent-red border border-accent-red/20',
    cyan: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20',
    purple: 'bg-accent-purple/10 text-accent-purple border border-accent-purple/20',
    green: 'bg-accent-green/10 text-accent-green border border-accent-green/20',
    blue: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20',
  };

  const Component = animated ? motion.span : 'span';

  return (
    <Component 
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${variants[variant]} ${className}`}
      whileHover={animated ? { scale: 1.05 } : {}}
    >
      {children}
    </Component>
  );
};

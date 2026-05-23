import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href, 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  download,
  icon: Icon,
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const variants = {
    primary: "bg-accent-red text-white hover:bg-red-600 shadow-floating hover:shadow-glow-red focus:ring-accent-red border border-transparent",
    secondary: "bg-transparent text-text-primary border-2 border-text-primary hover:bg-text-primary hover:text-white focus:ring-text-primary rounded-2xl",
    outline: "bg-white border border-text-primary/20 text-text-primary hover:border-accent-red hover:text-accent-red focus:ring-accent-red hover:shadow-card rounded-2xl",
    ghost: "bg-transparent text-text-primary border border-text-primary/10 hover:bg-text-primary/5 focus:ring-accent-red hover:border-accent-red rounded-2xl",
    accent: "bg-gradient-to-r from-accent-purple to-accent-cyan text-white hover:shadow-glow-purple shadow-floating focus:ring-accent-purple rounded-xl",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'} ${className}`;

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={classes} 
        target={href.startsWith('http') ? '_blank' : undefined} 
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {Icon && <Icon size={20} />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button 
      type={type} 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
      whileHover={!disabled ? { y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {Icon && <Icon size={20} />}
      {children}
    </motion.button>
  );
};

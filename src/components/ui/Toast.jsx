import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, AlertCircle, X } from 'lucide-react';
import { useEffect } from 'react';

export const Toast = ({ type = 'success', message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const typeStyles = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: <CheckCircle2 size={20} className="text-accent-green" />,
      text: 'text-text-primary',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: <XCircle size={20} className="text-accent-red" />,
      text: 'text-text-primary',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      icon: <AlertCircle size={20} className="text-yellow-600" />,
      text: 'text-text-primary',
    },
  };

  const currentType = typeStyles[type] || typeStyles.success;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: -20 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className={`fixed top-6 right-6 z-50 flex items-start p-4 rounded-lg shadow-card border max-w-sm ${currentType.bg} ${currentType.border}`}
          role="alert"
        >
          <div className="flex-shrink-0 mt-0.5">
            {currentType.icon}
          </div>
          <div className={`ml-3 text-sm font-medium leading-relaxed ${currentType.text}`}>
            {message}
          </div>
          <button 
            type="button" 
            onClick={onClose}
            className="ml-auto -mx-1.5 -my-1.5 rounded-lg hover:bg-black/5 p-1.5 inline-flex items-center justify-center h-8 w-8 transition-all"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

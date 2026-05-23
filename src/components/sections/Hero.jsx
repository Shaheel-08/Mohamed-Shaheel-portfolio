import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Code2, ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolio-data';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 6, ease: "easeInOut", repeat: Infinity }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-red/20 rounded-full filter blur-3xl opacity-50"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-purple/20 rounded-full filter blur-3xl opacity-50"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, delay: 5 }}
        />
      </div>

      <div className="container-custom relative z-10 max-w-5xl">
        <motion.div 
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Photo */}
          <motion.div 
            variants={floatingVariants}
            animate="animate"
            className="mb-12 relative group"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-[-8px] bg-gradient-to-br from-accent-red via-accent-purple to-accent-cyan rounded-full opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-white relative z-10 shadow-lg overflow-hidden border-4 border-white">
              <img 
                src="/profile-photo.jpeg" 
                alt="Mohamed Shaheel" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.src = 'https://ui-avatars.com/api/?name=Mohamed+Shaheel&background=EF4444&color=fff&size=220&font-size=0.4';
                }}
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter"
          >
            <span className="gradient-text">{portfolioData.name}</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6"
          >
            {portfolioData.title}
          </motion.h2>
          
          {/* Tagline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mb-8 leading-relaxed font-medium"
          >
            {portfolioData.tagline}
          </motion.p>

          {/* Stats Badge */}
          <motion.div 
            variants={itemVariants}
            className="mb-12 px-6 py-3 rounded-full bg-accent-red/10 border border-accent-red/20 inline-block"
          >
            <p className="text-accent-red font-semibold">{portfolioData.hero.stats}</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button 
              href="/resume.pdf" 
              variant="primary" 
              size="lg"
              download
              icon={Download}
            >
              Resume
            </Button>
            <Button 
              href={portfolioData.social.github} 
              variant="secondary" 
              size="lg"
              icon={Github}
            >
              GitHub
            </Button>
            <Button 
              href={portfolioData.social.linkedin} 
              variant="ghost" 
              size="lg"
              icon={Linkedin}
            >
              LinkedIn
            </Button>
            <Button 
              href={portfolioData.social.leetcode} 
              variant="ghost" 
              size="lg"
              icon={Code2}
            >
              LeetCode
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-secondary"
          >
            <p className="text-sm font-medium">Scroll to explore</p>
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

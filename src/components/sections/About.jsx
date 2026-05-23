import { motion } from 'framer-motion';
import { Brain, Code, Zap } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio-data';

const iconMap = {
  Brain: Brain,
  Code: Code,
  Zap: Zap,
};

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl opacity-0 animate-float"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl opacity-0 animate-float-delayed"></div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="About Me"
          subtitle="Passionate AI Engineer Building Intelligent Systems"
          gradient={true}
        />

        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            {portfolioData.about.description.map((para, idx) => (
              <motion.p 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary leading-relaxed font-medium group hover:text-text-primary transition-colors"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {portfolioData.about.highlights.map((highlight, idx) => {
              const IconComponent = iconMap[highlight.icon] || Code;
              const colors = ['from-accent-red to-accent-purple', 'from-accent-purple to-accent-cyan', 'from-accent-cyan to-accent-blue'];
              const bgColors = ['bg-accent-red/10', 'bg-accent-purple/10', 'bg-accent-cyan/10'];
              
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                >
                  <Card 
                    animated 
                    delay={0}
                    className="p-8 h-full group relative overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${colors[idx]}`}></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className={`mb-4 p-4 ${bgColors[idx]} rounded-xl`}
                      >
                        <IconComponent size={32} className={`${idx === 0 ? 'text-accent-red' : idx === 1 ? 'text-accent-purple' : 'text-accent-cyan'}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-text-primary mb-3">
                        {highlight.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-secondary transition-colors">
                        {highlight.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

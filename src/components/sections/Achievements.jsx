import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio-data';
import { Trophy, Star, Award } from 'lucide-react';

const iconMap = {
  Trophy: Trophy,
  Award: Award,
  Star: Star,
};

export const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-red/5 rounded-full blur-3xl opacity-0 animate-float-delayed"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl opacity-0 animate-float"></div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="Achievements & Awards"
          subtitle="Recognition for innovative work and excellence"
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {portfolioData.achievements.map((achievement, idx) => {
            const IconComponent = iconMap[achievement.icon] || Trophy;
            const gradients = [
              'from-yellow-400 to-orange-500',
              'from-gray-300 to-gray-400',
              'from-orange-400 to-red-500'
            ];
            const bgGradients = [
              'bg-gradient-to-br from-yellow-50 to-orange-50',
              'bg-gradient-to-br from-gray-50 to-slate-50',
              'bg-gradient-to-br from-orange-50 to-red-50'
            ];
            
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
              >
                <Card className="p-8 h-full group relative overflow-hidden flex flex-col items-center justify-center">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${gradients[idx]}`}></div>

                  <div className="relative z-10 w-full flex flex-col items-center text-center">
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 12 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className={`p-4 rounded-2xl mb-6 shadow-floating ${bgGradients[idx]}`}
                    >
                      <IconComponent 
                        size={40} 
                        className={`${
                          idx === 0 ? 'text-yellow-600' : idx === 1 ? 'text-gray-600' : 'text-orange-600'
                        }`}
                      />
                    </motion.div>
                    
                    {/* Year Badge */}
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`inline-block px-4 py-2 ${bgGradients[idx]} rounded-lg mb-4 border border-${idx === 0 ? 'yellow' : idx === 1 ? 'gray' : 'orange'}-100`}
                    >
                      <span className={`text-sm font-bold ${
                        idx === 0 ? 'text-yellow-700' : idx === 1 ? 'text-gray-700' : 'text-orange-700'
                      }`}>
                        {achievement.year}
                      </span>
                    </motion.div>
                    
                    {/* Title */}
                    <h4 className="text-xl font-bold text-text-primary mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-red group-hover:to-accent-purple group-hover:bg-clip-text transition-all">
                      {achievement.title}
                    </h4>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed group-hover:text-text-primary transition-colors">
                      {achievement.description}
                    </p>

                    {/* Decorative line */}
                    <div className={`w-12 h-1 mt-4 rounded-full bg-gradient-to-r ${gradients[idx]} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

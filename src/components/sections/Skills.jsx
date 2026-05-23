import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio-data';
import * as LucideIcons from 'lucide-react';
import { Sparkles } from 'lucide-react';

const iconMap = {
  Code: LucideIcons.Code,
  Brain: LucideIcons.Brain,
  Eye: LucideIcons.Eye,
  Palette: LucideIcons.Palette,
  Server: LucideIcons.Server,
  GitBranch: LucideIcons.GitBranch,
  Github: LucideIcons.Github,
  Database: LucideIcons.Database,
  Zap: LucideIcons.Zap,
};

const skillColors = {
  'Language': 'purple',
  'AI/ML': 'red',
  'Framework': 'cyan',
  'Computer Vision': 'green',
  'Frontend': 'blue',
  'Backend': 'purple',
  'DevTools': 'cyan',
  'Database': 'green',
  'Problem Solving': 'red',
};

const categoryDescriptions = {
  'Language': 'Core programming languages',
  'AI/ML': 'Machine Learning & AI Technologies',
  'Framework': 'ML & Web Frameworks',
  'Computer Vision': 'Image Processing & Vision',
  'Frontend': 'Frontend Development',
  'Backend': 'Backend Development',
  'DevTools': 'Development Tools',
  'Database': 'Database Technologies',
};

const categoryColors = {
  'Language': 'from-accent-blue to-accent-cyan',
  'AI/ML': 'from-accent-red to-accent-purple',
  'Framework': 'from-accent-purple to-accent-blue',
  'Computer Vision': 'from-accent-green to-accent-cyan',
  'Frontend': 'from-accent-purple to-accent-red',
  'Backend': 'from-accent-cyan to-accent-blue',
  'DevTools': 'from-accent-red to-accent-orange',
  'Database': 'from-accent-green to-accent-blue',
};

export const Skills = () => {
  // Group skills by category
  const groupedSkills = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl opacity-0 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-cyan/5 rounded-full blur-3xl opacity-0 animate-float-delayed"></div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="Technical Arsenal"
          subtitle="Languages, Frameworks & Tools that Power My Projects"
        />

        {/* Skills Grid by Category */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {Object.entries(groupedSkills).map(([category, skills], catIdx) => {
            const Icon = iconMap[skills[0]?.icon] || LucideIcons.Code;
            const gradient = categoryColors[category] || 'from-accent-blue to-accent-cyan';
            
            return (
              <motion.div
                key={category}
                variants={itemVariants}
              >
                <Card className="p-8 h-full group relative overflow-hidden" hover>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${gradient}`}></div>

                  <div className="relative z-10">
                    {/* Category Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ rotate: 12, scale: 1.1 }}
                          className={`p-3 rounded-lg bg-gradient-to-br ${gradient} shadow-floating`}
                        >
                          <Icon size={24} className="text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-text-primary">
                            {category}
                          </h3>
                          <p className="text-xs text-text-tertiary mt-1">
                            {categoryDescriptions[category]}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills Badges */}
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant={skillColors[skill.category]?.toLowerCase() || 'default'}
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Count Badge */}
                    <div className="mt-6 pt-4 border-t border-text-primary/10">
                      <p className="text-sm text-text-secondary">
                        <span className="font-bold text-text-primary">{skills.length}</span> Technologies
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section - Premium Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: 'Total Skills', value: portfolioData.skills.length, icon: '⚙️' },
            { label: 'Categories', value: Object.keys(groupedSkills).length, icon: '📦' },
            { label: 'Projects', value: portfolioData.projects.length, icon: '🚀' },
            { label: 'Learning', value: '∞', icon: '📚' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="p-6 text-center">
                <motion.div 
                  className="text-4xl mb-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-accent-red to-accent-purple bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-text-secondary text-sm font-medium">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mastery Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-purple/10 border border-accent-purple/30">
            <Sparkles size={20} className="text-accent-purple" />
            <span className="text-accent-purple font-semibold">Constantly expanding my technical arsenal with new AI/ML technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio-data';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-bg-secondary to-bg-tertiary">
      <div className="container-custom">
        <SectionTitle 
          title="Professional Journey"
          subtitle="Experiences that shaped my development career"
        />

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-red via-accent-purple to-accent-cyan"></div>

            {/* Experience Items */}
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="mb-8 lg:mb-12"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-24">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-red to-accent-purple flex items-center justify-center shadow-floating mb-4 relative z-10"
                    >
                      <Briefcase size={32} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-grow">
                    <Card className="p-6 md:p-10 group hover-lift relative overflow-hidden">
                      {/* Gradient Background Animation */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-accent-red via-accent-purple to-accent-cyan"></div>
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                              {exp.position}
                            </h3>
                            <p className="text-lg font-semibold bg-gradient-to-r from-accent-red to-accent-purple bg-clip-text text-transparent">
                              {exp.company}
                            </p>
                          </div>
                          
                          {/* Timeline Info */}
                          <div className="flex items-center gap-2 text-text-secondary">
                            <Calendar size={18} />
                            <div className="text-right">
                              <p className="font-semibold">{exp.type}</p>
                              <p className="text-sm">{exp.startDate} - {exp.endDate}</p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-text-secondary text-base leading-relaxed mb-6 group-hover:text-text-primary transition-colors">
                          {exp.description}
                        </p>

                        {/* Skills Badges */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, sidx) => (
                            <motion.div
                              key={sidx}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge variant="cyan">
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary text-lg mb-6">
            Looking for more details about my experience?
          </p>
          <motion.a
            href="/resume.pdf"
            download="Muhammad-Shaheel-Resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-accent-red to-accent-purple text-white font-semibold shadow-floating hover:shadow-glow-red transition-all duration-300"
          >
            📥 Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

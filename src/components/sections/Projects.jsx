import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio-data';
import { Github, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';

export const Projects = () => {
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
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl opacity-0 animate-float-delayed"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl opacity-0 animate-float-more-delayed"></div>

      <div className="container-custom relative z-10">
        <SectionTitle 
          title="Featured Projects"
          subtitle="Premium AI/ML Solutions & Full-Stack Applications"
        />

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {portfolioData.projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                {/* Staggered Layout - Alternating Left/Right */}
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  {/* Project Image - Premium Card */}
                  <motion.div 
                    className="w-full lg:w-1/2 flex-shrink-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-accent-red via-accent-purple to-accent-cyan rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                      
                      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent-red/20 to-accent-purple/20 shadow-premium group-hover:shadow-premium-lg transition-all duration-300">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ChevronRight size={48} className="text-white" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Project Details - Premium Card */}
                  <div className="w-full lg:w-1/2">
                    <Card className="p-8 md:p-10 h-full group relative" hover>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-accent-red to-accent-purple rounded-3xl"></div>

                      <div className="relative z-10">
                        {/* Badge & Icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            whileHover={{ rotate: 12 }}
                            className="p-2 rounded-lg bg-accent-red/10"
                          >
                            <Sparkles size={20} className="text-accent-red" />
                          </motion.div>
                          <Badge variant="red">{project.category}</Badge>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-red group-hover:to-accent-purple group-hover:bg-clip-text transition-all">
                          {project.title}
                        </h3>

                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Features */}
                        {project.features && (
                          <div className="space-y-2 mb-8">
                            <p className="text-sm font-semibold text-text-primary uppercase tracking-wider">Key Features</p>
                            {project.features.slice(0, 3).map((feature, fidx) => (
                              <motion.div
                                key={fidx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: fidx * 0.1 }}
                                className="text-sm text-text-secondary flex items-start gap-3 group/item"
                              >
                                <span className="text-accent-red font-bold mt-1 flex-shrink-0">→</span>
                                <span className="group-hover/item:text-text-primary transition-colors">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* Tech Stack Tags */}
                        {project.tags && (
                          <div className="mb-8 pb-8 border-b border-text-primary/10">
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tidx) => (
                                <motion.div
                                  key={tidx}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: tidx * 0.05 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                >
                                  <Badge variant="cyan">{tag}</Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Premium AI Startup CTA Buttons */}
                        <div className="flex flex-wrap gap-4 items-center justify-start mt-8">
                          {/* Live Demo Button - Primary CTA */}
                          {project.liveDemo && (
                            <motion.a 
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white relative overflow-hidden group/demo cursor-pointer"
                              style={{
                                background: "linear-gradient(135deg, #00d9ff 0%, #0099ff 100%)",
                              }}
                              whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 0 30px rgba(0, 217, 255, 0.7)"
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {/* Animated background gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/demo:opacity-100 transition-opacity duration-500 -skew-x-12"></div>
                              
                              {/* Glowing border effect */}
                              <div className="absolute inset-0 rounded-full border border-white/30 group-hover/demo:border-white/60 transition-colors duration-300"></div>
                              
                              {/* Content */}
                              <span className="relative z-10 flex items-center gap-2">
                                <ExternalLink size={19} className="group-hover/demo:rotate-6 transition-transform duration-300" />
                                <span className="font-semibold tracking-wide">Live Demo</span>
                              </span>
                            </motion.a>
                          )}

                          {/* GitHub Repository Button - Secondary CTA */}
                          {project.github && (
                            <motion.a 
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold relative overflow-hidden group/github cursor-pointer"
                              style={{
                                background: "rgba(255, 255, 255, 0.08)",
                                backdropFilter: "blur(10px)",
                                border: "1.5px solid rgba(255, 255, 255, 0.2)"
                              }}
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.12)",
                                borderColor: "rgba(255, 0, 68, 0.6)",
                                boxShadow: "0 0 25px rgba(255, 0, 68, 0.4)"
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {/* Premium shine effect on hover */}
                              <div className="absolute inset-0 rounded-full opacity-0 group-hover/github:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"></div>
                              </div>
                              
                              {/* Animated glow border */}
                              <div className="absolute inset-0 rounded-full border border-text-primary/30 group-hover/github:border-accent-red/50 transition-colors duration-300"></div>
                              
                              {/* Content */}
                              <span className="relative z-10 flex items-center gap-2 text-text-primary group-hover/github:text-white transition-colors duration-300">
                                <Github size={19} className="group-hover/github:rotate-6 transition-transform duration-300" />
                                <span className="font-semibold tracking-wide">GitHub Repository</span>
                              </span>
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary text-lg mb-8">
            Explore more projects on my GitHub
          </p>
          <motion.a
            href="https://github.com/Shaheel-08"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-accent-red to-accent-purple text-white font-semibold shadow-floating hover:shadow-glow-red transition-all duration-300"
          >
            View All Projects
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

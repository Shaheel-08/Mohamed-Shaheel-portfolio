import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio-data';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-bg-primary">
      <div className="container-custom">
        <SectionTitle 
          title="Education"
          subtitle="Academic background and qualifications"
        />

        <div className="max-w-3xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 md:p-12 hover-lift">
                <div className="flex items-start gap-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="p-4 bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 rounded-xl flex-shrink-0"
                  >
                    <GraduationCap size={40} className="text-gradient-text" />
                  </motion.div>

                  <div className="flex-grow">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                      {edu.institution}
                    </h3>

                    <h4 className="text-xl text-accent-cyan font-semibold mb-6">
                      {edu.degree}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Calendar size={18} className="text-accent-red flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Duration</p>
                          <p className="font-semibold text-text-primary">
                            {edu.startYear} – {edu.endYear}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-text-secondary">
                        <Award size={18} className="text-accent-purple flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">CGPA</p>
                          <p className="font-semibold text-text-primary">{edu.cgpa}/10.0</p>
                        </div>
                      </div>
                    </div>

                    {edu.details && (
                      <p className="text-text-secondary">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

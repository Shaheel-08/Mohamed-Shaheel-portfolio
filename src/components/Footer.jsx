import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const social = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${portfolioData.email}`, label: 'Email' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative border-t border-text-primary/10 bg-bg-secondary pt-16 pb-8">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-3">MS</h3>
            <p className="text-text-tertiary text-sm leading-relaxed">
              AI & Machine Learning Developer crafting innovative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-tertiary hover:text-accent-red transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wide">
              Connect
            </h4>
            <div className="space-y-2">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== 'Email' ? '_blank' : undefined}
                  rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-text-tertiary hover:text-accent-red transition-colors text-sm group"
                >
                  <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-text-primary mb-4 text-sm uppercase tracking-wide">
              Fun Fact
            </h4>
            <p className="text-text-tertiary text-sm">
              Solved 150+ coding problems and counting. Always optimizing for clarity and performance! 🚀
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-text-primary/10 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-text-tertiary text-xs">
              © {currentYear} Mohamed Shaheel. All rights reserved.
            </p>
            <p className="text-text-tertiary text-xs flex items-center gap-1">
              Designed with <Heart size={14} className="text-accent-red" /> using React + Tailwind
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

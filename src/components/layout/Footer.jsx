import { Github, Linkedin, Code2, ArrowUp } from 'lucide-react';
import { portfolioData } from '../../data/portfolio-data';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F5] py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-dark-light hover:text-primary-red transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-light hover:text-primary-cyan transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={portfolioData.personal.leetcode} target="_blank" rel="noopener noreferrer" className="text-dark-light hover:text-primary-purple transition-colors" aria-label="LeetCode">
              <Code2 size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-dark-light text-sm">
              &copy; {new Date().getFullYear()} Mohamed Shaheel. All rights reserved.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-dark-light hover:text-primary-teal transition-colors mt-4 group"
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

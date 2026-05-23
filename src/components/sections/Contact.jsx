import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { SectionTitle } from '../ui/SectionTitle';
import { portfolioData } from '../../data/portfolio-data';
import { Github, Linkedin, Mail, Send, Loader2, Code2 } from 'lucide-react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    isVisible: false,
    type: 'success',
    message: ''
  });

  const showToast = (type, message) => {
    setToastConfig({ isVisible: true, type, message });
  };

  const closeToast = () => {
    setToastConfig(prev => ({ ...prev, isVisible: false }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showToast('success', "✓ Message sent successfully! I'll get back to you soon.");
        event.target.reset();
        setFormState({ name: '', email: '', message: '' });
      } else {
        showToast('error', "✗ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error", error);
      showToast('error', "✗ Failed to send message. Please email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-bg-primary to-bg-secondary">
      <Toast 
        type={toastConfig.type} 
        message={toastConfig.message} 
        isVisible={toastConfig.isVisible} 
        onClose={closeToast} 
      />

      <div className="container-custom">
        <SectionTitle 
          title={portfolioData.contact.title}
          subtitle={portfolioData.contact.description}
          gradient={true}
        />

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 mb-16 hover-lift">
              <form onSubmit={onSubmit} className="space-y-6">
                <input 
                  type="hidden" 
                  name="access_key" 
                  value={portfolioData.contact.web3formsKey} 
                />
                <input 
                  type="hidden" 
                  name="subject" 
                  value="New Portfolio Contact" 
                />
                <input 
                  type="hidden" 
                  name="from_name" 
                  value={formState.name}
                />
                <input 
                  type="hidden" 
                  name="redirect" 
                  value="https://web3forms.com/success"
                />
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{ display: 'none' }} 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="name" className="block text-sm font-semibold text-text-primary mb-2">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      autocomplete="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required 
                      minLength={2}
                      className="w-full px-4 py-3 rounded-lg border border-text-primary/20 focus:ring-2 focus:ring-accent-red focus:border-transparent outline-none transition-all bg-white focus:bg-accent-red/5"
                      placeholder="Your Full Name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      autocomplete="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-text-primary/20 focus:ring-2 focus:ring-accent-red focus:border-transparent outline-none transition-all bg-white focus:bg-accent-red/5"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-text-primary mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    autocomplete="off"
                    value={formState.message}
                    onChange={handleInputChange}
                    required 
                    rows={6}
                    minLength={10}
                    className="w-full px-4 py-3 rounded-lg border border-text-primary/20 focus:ring-2 focus:ring-accent-red focus:border-transparent outline-none transition-all bg-white focus:bg-accent-red/5"
                    placeholder="Tell me about your project, opportunity, or idea..."
                  ></textarea>
                </motion.div>
                
                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg"
                    disabled={isSubmitting}
                    icon={isSubmitting ? Loader2 : Send}
                    className={isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Social Links - Premium Floating Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-text-primary mb-2">Connect With Me</h3>
              <p className="text-text-secondary">Reach out through any of these channels</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 items-center">
              {/* GitHub Icon */}
              <motion.a 
                href={portfolioData.social.github}
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon social-icon-github"
                title="Visit my GitHub"
              >
                <Github size={28} />
              </motion.a>
              
              {/* LinkedIn Icon */}
              <motion.a 
                href={portfolioData.social.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon social-icon-linkedin"
                title="Visit my LinkedIn"
              >
                <Linkedin size={28} />
              </motion.a>

              {/* LeetCode Icon */}
              <motion.a 
                href={portfolioData.social.leetcode}
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon social-icon-leetcode"
                title="Visit my LeetCode"
              >
                <Code2 size={28} />
              </motion.a>
              
              {/* Email Icon */}
              <motion.a 
                href={`mailto:${portfolioData.email}`}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon social-icon-email"
                title="Send me an email"
              >
                <Mail size={28} />
              </motion.a>

              {/* Resume Button - Premium CTA */}
              <motion.a 
                href="/resume.pdf"
                download="Muhammad-Shaheel-Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="social-icon social-icon-resume"
                title="Download my resume"
              >
                📄 Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

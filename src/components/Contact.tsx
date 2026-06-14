import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, staggerContainer, buttonHover, buttonTap } from '../utils/motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactItems = [
    { icon: Mail, href: 'mailto:mrvasoya2001@gmail.com', label: 'mrvasoya2001@gmail.com' },
    { icon: Phone, href: 'tel:+917096141814', label: '+91 7096141814' },
    { icon: MapPin, href: null, label: 'Ahmedabad, Gujarat, India' },
  ];

  return (
    <section id="contact" className="py-24 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <SectionHeading label="Contact" title="Get In Touch" />

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-5"
          >
            {contactItems.map(({ icon: Icon, href, label }) => (
              <motion.div key={label} variants={fadeUp} className="flex items-center gap-3 text-content-secondary text-body-sm font-body">
                <div className="w-10 h-10 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center bg-surface-elevated neo-card-sm shrink-0">
                  <Icon size={18} className="text-sage-600 dark:text-sage-400" />
                </div>
                {href ? (
                  <a href={href} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="flex gap-3 pt-4">
              {[
                { href: 'https://github.com/miteshrvasoya', icon: Github },
                { href: 'https://linkedin.com/in/mitesh-vasoya', icon: Linkedin },
                { href: 'mailto:mrvasoya2001@gmail.com', icon: Mail },
              ].map(({ href, icon: Icon }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={buttonTap}
                  className="w-12 h-12 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center bg-surface-elevated hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors neo-card-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {(['name', 'email'] as const).map((field) => (
              <motion.div key={field} variants={fadeUp}>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                  className="w-full p-4 border-2 border-gray-900 dark:border-gray-100 bg-surface-elevated text-body-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:bg-sage-50 dark:focus:bg-sage-900/30 transition-colors neo-card-sm"
                  required
                />
              </motion.div>
            ))}

            <motion.div variants={fadeUp}>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full p-4 border-2 border-gray-900 dark:border-gray-100 bg-surface-elevated text-body-sm font-body text-content-primary placeholder:text-content-muted focus:outline-none focus:bg-sage-50 dark:focus:bg-sage-900/30 transition-colors resize-none neo-card-sm"
                required
              />
            </motion.div>

            <motion.button
              variants={fadeUp}
              whileHover={buttonHover}
              whileTap={buttonTap}
              type="submit"
              className="w-full btn-neo bg-sage-400 dark:bg-sage-600 text-gray-900 dark:text-gray-100 hover:bg-sage-500 dark:hover:bg-sage-700"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            Contact
          </span>
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
              <Mail size={20} />
              <a href="mailto:mrvasoya2001@gmail.com" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                mrvasoya2001@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
              <Phone size={20} />
              <a href="tel:+917096141814" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                +91 7096141814
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
              <MapPin size={20} />
              <span>Ahmedabad, Gujarat, India</span>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/miteshrvasoya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
                style={{ boxShadow: '3px 3px 0px currentColor' }}
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mitesh-vasoya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
                style={{ boxShadow: '3px 3px 0px currentColor' }}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mrvasoya2001@gmail.com"
                className="w-12 h-12 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
                style={{ boxShadow: '3px 3px 0px currentColor' }}
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:bg-sage-100 dark:focus:bg-sage-900 transition-colors"
                style={{ boxShadow: '3px 3px 0px currentColor' }}
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:bg-sage-100 dark:focus:bg-sage-900 transition-colors"
                style={{ boxShadow: '3px 3px 0px currentColor' }}
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full p-4 border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:bg-sage-100 dark:focus:bg-sage-900 transition-colors resize-none"
                style={{ boxShadow: '3px 3px 0px currentColor' }}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 border-2 border-gray-900 dark:border-gray-100 text-sm uppercase tracking-widest font-semibold bg-sage-400 dark:bg-sage-600 text-gray-900 dark:text-gray-100 hover:bg-sage-500 dark:hover:bg-sage-700 transition-colors"
              style={{ boxShadow: '4px 4px 0px currentColor' }}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

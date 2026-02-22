import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, Mail, FolderOpen } from 'lucide-react';

const subtitles = [
  'Backend Engineer',
  'API Architect',
  'Node.js Specialist',
  'Payment Systems Developer'
];

export function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-gray-900 dark:text-gray-100"
          style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
        >
          Mitesh Vasoya
        </motion.h1>

        <div className="h-14 mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-sage-700 dark:text-sage-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg mb-12 max-w-3xl text-gray-700 dark:text-gray-300 leading-relaxed"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Building fault-tolerant backend systems that process millions in transactions — reliably, at scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 border-2 border-gray-900 dark:border-gray-100 font-mono text-sm uppercase tracking-wider font-semibold bg-white dark:bg-gray-800 hover:bg-sage-200 dark:hover:bg-sage-800 transition-all flex items-center gap-2"
            style={{ boxShadow: '4px 4px 0px currentColor' }}
          >
            <FolderOpen size={20} />
            View Projects
          </button>

          <button
            className="px-8 py-4 border-2 border-gray-900 dark:border-gray-100 font-mono text-sm uppercase tracking-wider font-semibold bg-white dark:bg-gray-800 hover:bg-sand-200 dark:hover:bg-sand-800 transition-all flex items-center gap-2"
            style={{ boxShadow: '4px 4px 0px currentColor' }}
          >
            <Download size={20} />
            Download Resume
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-gray-900 dark:border-gray-100 font-mono text-sm uppercase tracking-wider font-semibold bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
            style={{ boxShadow: '4px 4px 0px currentColor' }}
          >
            <Mail size={20} />
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}

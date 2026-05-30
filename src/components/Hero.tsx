import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const subtitles = [
  'Backend Engineer',
  'Fintech Systems Builder',
  'Payment Infrastructure',
  'Distributed Systems',
];

const stats = [
  { value: '₹4Cr+', label: 'Disbursed' },
  { value: '2.7', label: 'Yrs Experience' },
  { value: '4', label: 'Payment Gateways' },
  { value: '0', label: 'Duplicate Payments' },
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
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 font-mono text-xs uppercase tracking-widest mb-6"
          style={{ boxShadow: '2px 2px 0px currentColor' }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-gray-900 dark:text-gray-100"
          style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}
        >
          Mitesh Vasoya
        </motion.h1>

        <div className="h-12 mb-6">
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
          className="text-base md:text-lg mb-10 max-w-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          Backend Engineer with 2.7 years building fault-tolerant fintech systems —
          payment gateways, idempotent APIs, and queue-based payout infrastructure
          processing millions in real transactions.
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-10 border-2 border-gray-900 dark:border-gray-100 overflow-hidden"
          style={{ boxShadow: '4px 4px 0px currentColor' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-4 bg-white dark:bg-gray-900 text-center ${
                index < stats.length - 1
                  ? 'border-r-2 border-b-2 md:border-b-0 border-gray-900 dark:border-gray-100'
                  : 'border-b-2 md:border-b-0'
              } ${index >= 2 ? 'border-b-0' : ''}`}
            >
              <div
                className="text-2xl md:text-3xl font-bold text-sage-700 dark:text-sage-300"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 font-mono text-sm uppercase tracking-wider font-semibold bg-sage-400 dark:bg-sage-600 text-gray-900 dark:text-gray-100 hover:bg-sage-500 dark:hover:bg-sage-700 transition-all flex items-center gap-2"
            style={{ boxShadow: '4px 4px 0px currentColor' }}
          >
            View Projects
            <ArrowRight size={16} />
          </button>

          <a
            href="/Mitesh_Vasoya_Software_Engineer_Resume.pdf"
            download
            className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 font-mono text-sm uppercase tracking-wider font-semibold bg-white dark:bg-gray-800 hover:bg-sand-200 dark:hover:bg-sand-800 transition-all flex items-center gap-2"
            style={{ boxShadow: '4px 4px 0px currentColor' }}
          >
            <Download size={16} />
            Resume
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border-2 border-gray-900 dark:border-gray-100 font-mono text-sm uppercase tracking-wider font-semibold bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
            style={{ boxShadow: '4px 4px 0px currentColor' }}
          >
            <Mail size={16} />
            Contact
          </button>

          {/* Social icons */}
          <div className="flex gap-3 ml-auto">
            <a
              href="https://github.com/miteshrvasoya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
              style={{ boxShadow: '3px 3px 0px currentColor' }}
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mitesh-vasoya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
              style={{ boxShadow: '3px 3px 0px currentColor' }}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

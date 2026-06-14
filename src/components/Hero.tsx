import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { ParallaxBackground } from './ParallaxBackground';
import { buttonHover, buttonTap, staggerContainer, fadeUp } from '../utils/motion';

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

const name = 'Mitesh Vasoya';

export function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      <ParallaxBackground />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-5xl w-full z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-gray-900 dark:border-gray-100 bg-surface-elevated font-mono text-xs uppercase tracking-[0.15em] mb-8 neo-card-sm"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft" />
          Open to opportunities
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="font-display text-display-xl text-content-primary mb-5"
        >
          {name.split('').map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="h-14 mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl md:text-3xl font-semibold text-sage-600 dark:text-sage-400"
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="prose-body mb-12 max-w-2xl"
        >
          Backend Engineer with 2.7 years building fault-tolerant fintech systems —
          payment gateways, idempotent APIs, and queue-based payout infrastructure
          processing millions in real transactions.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 border-2 border-gray-900 dark:border-gray-100 overflow-hidden neo-card"
          style={{ boxShadow: '4px 4px 0px currentColor' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`px-5 py-5 bg-surface-elevated text-center ${
                index < stats.length - 1
                  ? 'border-r-2 border-b-2 md:border-b-0 border-gray-900 dark:border-gray-100'
                  : 'border-b-2 md:border-b-0'
              } ${index >= 2 ? 'border-b-0' : ''}`}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring', stiffness: 200 }}
                className="font-display text-2xl md:text-3xl font-bold text-sage-600 dark:text-sage-400"
              >
                {stat.value}
              </motion.div>
              <div className="text-xs font-mono uppercase tracking-[0.15em] text-content-muted mt-1.5">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-wrap gap-4 items-center"
        >
          <motion.button
            variants={fadeUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
            onClick={() => scrollToSection('projects')}
            className="btn-neo bg-sage-400 dark:bg-sage-600 text-gray-900 dark:text-gray-100 hover:bg-sage-500 dark:hover:bg-sage-700 flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={16} />
          </motion.button>

          <motion.a
            variants={fadeUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
            href="/Mitesh_Vasoya_Software_Engineer_Resume.pdf"
            download
            className="btn-neo bg-surface-elevated hover:bg-sand-200 dark:hover:bg-sand-800 flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </motion.a>

          <motion.button
            variants={fadeUp}
            whileHover={buttonHover}
            whileTap={buttonTap}
            onClick={() => scrollToSection('contact')}
            className="btn-neo bg-surface-elevated hover:bg-surface-muted flex items-center gap-2"
          >
            <Mail size={16} />
            Contact
          </motion.button>

          <motion.div variants={fadeUp} className="flex gap-3 ml-auto">
            {[
              { href: 'https://github.com/miteshrvasoya', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/mitesh-vasoya', icon: Linkedin, label: 'LinkedIn' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={buttonTap}
                className="w-11 h-11 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center bg-surface-elevated hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors neo-card-sm"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-content-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-gray-900/40 dark:border-gray-100/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-sage-500 dark:bg-sage-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t-2 border-gray-900 dark:border-gray-100 bg-surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h3
          whileHover={{ scale: 1.02 }}
          className="font-display text-2xl md:text-3xl font-bold mb-3 text-content-primary"
        >
          Mitesh Vasoya
        </motion.h3>
        <p className="text-body-md text-content-secondary mb-6 font-body">
          Backend Engineer · Building systems that scale.
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-px w-24 bg-sage-400 dark:bg-sage-600 mx-auto mb-6"
        />
        <p className="text-body-sm text-content-muted font-mono">
          © 2025 Mitesh Vasoya. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

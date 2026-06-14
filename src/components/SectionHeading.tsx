import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ label, title, description, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className={`mb-12 md:mb-16 ${className}`}
    >
      <span className="section-label text-sage-600 dark:text-sage-400 block mb-3">
        {label}
      </span>
      <h2 className="font-display text-display-md text-content-primary mb-4">{title}</h2>
      {description && (
        <p className="text-body-lg text-content-secondary max-w-2xl font-body">{description}</p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="h-1 w-16 bg-sage-500 dark:bg-sage-400 origin-left mt-6"
      />
    </motion.div>
  );
}

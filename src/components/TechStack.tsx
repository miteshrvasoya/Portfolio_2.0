import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { scaleIn, staggerContainer } from '../utils/motion';

const techCategories = [
  {
    label: 'Languages',
    emoji: '⌨️',
    items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'Python'],
  },
  {
    label: 'Backend & Runtime',
    emoji: '⚙️',
    items: ['Node.js', 'Express.js', 'REST API Design', 'Microservices Architecture'],
  },
  {
    label: 'Databases',
    emoji: '🗄️',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Query Optimization', 'DB Performance Tuning'],
  },
  {
    label: 'Infra & Queues',
    emoji: '🔁',
    items: ['Redis', 'BullMQ', 'Distributed Systems', 'Async Processing', 'Caching'],
  },
  {
    label: 'Payment Systems',
    emoji: '💳',
    items: ['Cashfree', 'Paytm', 'Easebuzz', 'PhonePe', 'Webhook Handling', 'Idempotent APIs', 'Transaction Processing'],
  },
  {
    label: 'Observability',
    emoji: '📊',
    items: ['Sentry', 'Logging', 'Error Tracking', 'Monitoring'],
  },
  {
    label: 'Tools',
    emoji: '🛠️',
    items: ['Git', 'Postman', 'Jira'],
  },
  {
    label: 'Frontend Exposure',
    emoji: '🖥️',
    items: ['React', 'Angular'],
  },
];

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 section-alt overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading label="Tech Stack" title="Technologies" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.label}
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: '8px 8px 0px currentColor' }}
              transition={{ duration: 0.25 }}
              className="neo-card overflow-hidden bg-surface-elevated"
            >
              <div className="px-4 py-3.5 bg-surface-muted border-b-2 border-gray-900 dark:border-gray-100 flex items-center gap-2">
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="text-lg"
                >
                  {category.emoji}
                </motion.span>
                <h3 className="section-label text-content-primary font-semibold">{category.label}</h3>
              </div>

              <div className="p-4 flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--tw-gradient-from)' }}
                    className="px-2.5 py-1 border border-gray-900 dark:border-gray-100 bg-surface text-body-sm font-medium text-content-secondary hover:bg-sage-100 dark:hover:bg-sage-900/50 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

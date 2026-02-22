import { motion } from 'framer-motion';

const traits = [
  'Backend Focused',
  'API Design',
  'Payment Systems',
  'PostgreSQL Expert',
  'Real-Time Systems',
  'Multi-Tenant Architecture'
];

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            About
          </span>
          Who I Am
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          I'm a Backend Engineer based in Ahmedabad, India, with 2+ years of experience architecting
          mission-critical Node.js services. I specialize in payment gateway integrations, PostgreSQL
          optimization, and building scalable multi-tenant platforms. I care deeply about fault tolerance,
          clean API design, and systems that don't break under pressure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {traits.map((trait, index) => (
            <motion.span
              key={trait}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-4 py-2 border-2 border-gray-900 dark:border-gray-100 text-xs uppercase tracking-widest font-semibold bg-white dark:bg-gray-800"
              style={{ boxShadow: '3px 3px 0px currentColor' }}
            >
              {trait}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

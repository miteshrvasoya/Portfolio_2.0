import { motion } from 'framer-motion';

const traits = [
  'Backend Focused',
  'Fintech & Payments',
  'Idempotent APIs',
  'PostgreSQL Expert',
  'Queue Systems (BullMQ)',
  'Multi-Tenant Architecture',
  'Fault-Tolerant Design',
  'Real-Time Systems',
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

        <div className="grid md:grid-cols-5 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 space-y-4"
          >
            <p
              className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              I'm a Backend Engineer based in Ahmedabad, India, with{' '}
              <span className="font-bold text-gray-900 dark:text-gray-100">2.7 years</span> of
              experience architecting mission-critical Node.js services for fintech applications.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              I specialize in{' '}
              <span className="font-bold text-gray-900 dark:text-gray-100">
                payment gateway integrations
              </span>{' '}
              (Cashfree, Paytm, Easebuzz, PhonePe), designing{' '}
              <span className="font-bold text-gray-900 dark:text-gray-100">idempotent payout systems</span>,
              and building scalable queue-based infrastructure with Redis &amp; BullMQ.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              I care deeply about{' '}
              <span className="font-bold text-gray-900 dark:text-gray-100">fault tolerance</span>,
              clean API design, PostgreSQL optimization, and systems that don't break under pressure.
            </p>
          </motion.div>

          {/* Quick-facts sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 border-2 border-gray-900 dark:border-gray-100 p-5 bg-white dark:bg-gray-900 self-start"
            style={{ boxShadow: '4px 4px 0px currentColor' }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 mb-4">
              Quick Facts
            </p>
            <ul className="space-y-3 text-sm font-mono text-gray-700 dark:text-gray-300">
              <li className="flex gap-2">
                <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0">→</span>
                Ahmedabad, India
              </li>
              <li className="flex gap-2">
                <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0">→</span>
                Backend Engineer @ eVitalRx
              </li>
              <li className="flex gap-2">
                <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0">→</span>
                Node.js · PostgreSQL · TypeScript
              </li>
              <li className="flex gap-2">
                <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0">→</span>
                Fintech · Payments · APIs
              </li>
              <li className="flex gap-2">
                <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0">→</span>
                BE Computer Engineering, GTU
              </li>
            </ul>
          </motion.div>
        </div>

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
              transition={{ delay: 0.5 + index * 0.07 }}
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

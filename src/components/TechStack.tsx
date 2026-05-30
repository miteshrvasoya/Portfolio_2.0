import { motion } from 'framer-motion';

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
  return (
    <section className="py-20 px-6 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            Tech Stack
          </span>
          Technologies
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.08 }}
              className="border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 overflow-hidden"
              style={{ boxShadow: '4px 4px 0px currentColor' }}
            >
              {/* Category header */}
              <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-900 dark:border-gray-100 flex items-center gap-2">
                <span className="text-base">{category.emoji}</span>
                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-gray-100 font-semibold">
                  {category.label}
                </h3>
              </div>

              {/* Items */}
              <div className="p-4 flex flex-wrap gap-2">
                {category.items.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.08 + index * 0.04 }}
                    className="px-2.5 py-1 border border-gray-900 dark:border-gray-100 bg-gray-50 dark:bg-gray-800 text-xs font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

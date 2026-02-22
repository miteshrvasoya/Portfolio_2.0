import { motion } from 'framer-motion';

const techStack = {
  Languages: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'Python'],
  'Frameworks & Runtime': [
    'Node.js',
    'Express.js',
    'REST APIs',
    'Microservices Architecture',
    'API Gateway'
  ],
  Databases: [
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Query Optimization',
    'Connection Pooling'
  ],
  'Caching & Infra': ['Redis', 'Performance Tuning'],
  'Payment Systems': [
    'Paytm Integration',
    'PhonePe Integration',
    'Webhook Management',
    'Idempotent Request Handling'
  ],
  'Frontend Exposure': ['React', 'Angular'],
  'Dev Tools': ['Postman', 'Git', 'Jira'],
  Monitoring: ['Sentry', 'Elasticsearch', 'Log Analysis']
};

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

        <div className="grid gap-8">
          {Object.entries(techStack).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xs font-mono uppercase tracking-widest mb-4 text-gray-900 dark:text-gray-100 font-semibold">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {items.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    className="p-4 border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 text-xs leading-relaxed font-semibold text-gray-900 dark:text-gray-100"
                    style={{ boxShadow: '3px 3px 0px currentColor' }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

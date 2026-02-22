import { motion } from 'framer-motion';

const qaItems = [
  {
    question: 'What are you best at?',
    answer:
      'Building reliable, high-throughput backend systems in Node.js — especially payment workflows, API design, and PostgreSQL optimization.'
  },
  {
    question: 'Are you open to new roles?',
    answer:
      "Yes — I'm open to backend or full-stack roles, ideally in product companies working on fintech, SaaS, or developer tools."
  },
  {
    question: "What's your preferred stack?",
    answer:
      "Node.js + TypeScript + PostgreSQL + Redis. I'm comfortable with microservices and monorepos."
  },
  {
    question: 'Where are you based?',
    answer: 'Ahmedabad, India. Open to remote-first or hybrid opportunities.'
  }
];

export function AIOverview() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            AI Overview
          </span>
          Quick Q&A
        </motion.h2>

        <div className="space-y-6">
          {qaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex justify-end mb-3">
                <div
                  className="max-w-[80%] p-4 border-2 border-gray-900 dark:border-gray-100 bg-sage-200 dark:bg-sage-800"
                  style={{ boxShadow: '3px 3px 0px currentColor' }}
                >
                  <p className="text-sm leading-relaxed font-semibold text-gray-900 dark:text-gray-100">{item.question}</p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.1 }}
                className="flex justify-start"
              >
                <div
                  className="max-w-[80%] p-4 border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800"
                  style={{ boxShadow: '3px 3px 0px currentColor' }}
                >
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

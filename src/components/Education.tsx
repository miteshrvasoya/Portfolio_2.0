import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's of Engineering",
    field: 'Computer Science & Engineering',
    institution: 'Mangalayatan University',
    period: '2019 - 2023',
    location: 'Aligarh, Uttar Pradesh',
    details: 'CGPA: 8.4/10 | Focus on Core CS, DBMS, Networks, and Full-Stack Development'
  },
  {
    degree: 'Senior Secondary (12th)',
    field: 'Science (PCM)',
    institution: 'G. H. Patel Vidyapith',
    period: '2017 - 2019',
    location: 'Ahmedabad, Gujarat',
    details: 'Percentage: 72%'
  }
];

export function Education() {
  return (
    <section className="py-20 px-6 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            Academics
          </span>
          Education
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border-2 border-gray-900 dark:border-gray-100 p-6 bg-gray-100 dark:bg-gray-900"
              style={{ boxShadow: '4px 4px 0px currentColor' }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="p-3 bg-sage-300 dark:bg-sage-700 border-2 border-gray-900 dark:border-gray-100">
                  <GraduationCap className="text-gray-900 dark:text-gray-100" size={24} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl font-bold text-gray-900 dark:text-gray-100"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-sage-700 dark:text-sage-300 mt-1">
                    {edu.field}
                  </p>
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {edu.institution}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                <span
                  className="px-3 py-1 border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 font-mono text-xs uppercase tracking-wider"
                  style={{ boxShadow: '2px 2px 0px currentColor' }}
                >
                  {edu.period}
                </span>
                <span className="px-3 py-1 font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                  {edu.location}
                </span>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

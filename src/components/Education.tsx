import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Engineering",
    field: 'Computer Engineering',
    institution: 'Gujarat Technological University',
    period: '2019 – 2023',
    location: 'Surat, Gujarat',
    details: 'CGPA: 8.38 / 10',
    highlights: ['Core CS Fundamentals', 'DBMS & Networks', 'Data Structures & Algorithms'],
  },
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
              className="border-2 border-gray-900 dark:border-gray-100 overflow-hidden bg-gray-100 dark:bg-gray-900"
              style={{ boxShadow: '4px 4px 0px currentColor' }}
            >
              {/* Header row */}
              <div className="flex items-start gap-4 p-6 border-b-2 border-gray-900 dark:border-gray-100 bg-sage-100 dark:bg-sage-900">
                <div className="p-3 bg-sage-300 dark:bg-sage-700 border-2 border-gray-900 dark:border-gray-100 shrink-0">
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
                <div
                  className="shrink-0 px-3 py-1 border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 font-mono text-xs font-bold text-sage-700 dark:text-sage-300 uppercase tracking-wider"
                  style={{ boxShadow: '2px 2px 0px currentColor' }}
                >
                  {edu.details}
                </div>
              </div>

              {/* Details row */}
              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-5">
                  <span
                    className="px-3 py-1 border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 font-mono text-xs uppercase tracking-wider"
                    style={{ boxShadow: '2px 2px 0px currentColor' }}
                  >
                    {edu.institution}
                  </span>
                  <span className="px-3 py-1 font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    📍 {edu.location}
                  </span>
                  <span className="px-3 py-1 font-mono text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    🗓 {edu.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 text-xs font-semibold"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

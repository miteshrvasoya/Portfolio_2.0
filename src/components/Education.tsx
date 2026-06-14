import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, staggerContainer } from '../utils/motion';

const education = [
  {
    degree: 'Bachelor of Engineering',
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
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="Academics" title="Education" />

        <div className="space-y-6">
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: '6px 6px 0px currentColor' }}
              className="neo-card overflow-hidden bg-surface"
            >
              <div className="flex items-start gap-4 p-6 border-b-2 border-gray-900 dark:border-gray-100 bg-sage-100 dark:bg-sage-900/40">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="p-3 bg-sage-300 dark:bg-sage-700 border-2 border-gray-900 dark:border-gray-100 shrink-0 neo-card-sm"
                >
                  <GraduationCap className="text-content-primary" size={24} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-content-primary">{edu.degree}</h3>
                  <p className="text-body-sm font-semibold text-sage-600 dark:text-sage-400 mt-1">{edu.field}</p>
                </div>
                <div className="shrink-0 px-3 py-1 border-2 border-gray-900 dark:border-gray-100 bg-surface-elevated font-mono text-xs font-bold text-sage-600 dark:text-sage-400 uppercase tracking-wider neo-card-sm">
                  {edu.details}
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="px-3 py-1 border border-gray-900 dark:border-gray-100 bg-surface-elevated font-mono text-xs uppercase tracking-wider neo-card-sm">
                    {edu.institution}
                  </span>
                  <span className="px-3 py-1 font-mono text-xs uppercase tracking-wider text-content-muted">
                    📍 {edu.location}
                  </span>
                  <span className="px-3 py-1 font-mono text-xs uppercase tracking-wider text-content-muted">
                    🗓 {edu.period}
                  </span>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2"
                >
                  {edu.highlights.map((h) => (
                    <motion.span
                      key={h}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05 }}
                      className="px-2.5 py-1 border border-gray-900 dark:border-gray-100 bg-surface-elevated text-body-sm font-medium text-content-secondary"
                    >
                      {h}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

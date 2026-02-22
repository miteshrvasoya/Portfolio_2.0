import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'eVitalRx',
    roles: [
      {
        title: 'Backend SDE-II',
        period: 'Feb 2025 – Present',
        current: true,
        achievement:
          'Leading architecture and optimization of mission-critical payment infrastructure; mentoring junior engineers on system design best practices.'
      },
      {
        title: 'Backend SDE-I',
        period: 'Aug 2023 – Jan 2025',
        current: false,
        achievement:
          'Architected Node.js backend services processing ₹50M+ in annual transactions; drove 40% reduction in PostgreSQL query processing time; integrated Paytm and PhonePe payment gateways with webhook verification and idempotent request handling; established Sentry-based proactive monitoring infrastructure.'
      }
    ],
    location: 'Ahmedabad, Gujarat'
  },
  {
    company: 'DUIUX Infotech',
    roles: [
      {
        title: 'Junior Web Developer (MERN Stack)',
        period: 'Dec 2022 – Aug 2023',
        current: false,
        achievement:
          'Built scalable e-commerce and booking platforms with real-time bidirectional communication via Socket.IO, implementing secure authentication and role-based access control across full-stack MERN applications.'
      }
    ],
    location: 'Ahmedabad, Gujarat'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            Work History
          </span>
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((company, companyIndex) => (
            <motion.div
              key={company.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: companyIndex * 0.2 }}
            >
              <div className="border-2 border-gray-900 dark:border-gray-100 overflow-hidden" style={{ boxShadow: '4px 4px 0px currentColor' }}>
                <div className="bg-sage-300 dark:bg-sage-800 px-6 py-4 border-b-2 border-gray-900 dark:border-gray-100">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {company.company}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-mono uppercase tracking-wide">
                    📍 {company.location}
                  </p>
                </div>

                <div className="relative">
                  {company.roles.map((role, roleIndex) => (
                    <motion.div
                      key={roleIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: companyIndex * 0.2 + roleIndex * 0.1 }}
                      className={`relative p-6 ${roleIndex !== company.roles.length - 1 ? 'border-b-2 border-gray-900 dark:border-gray-100' : ''} ${role.current ? 'bg-green-50 dark:bg-green-950' : 'bg-gray-100 dark:bg-gray-900'}`}
                    >
                      {role.current && (
                        <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs font-mono uppercase tracking-wider rounded-full">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          Current
                        </div>
                      )}

                      <div className="flex items-baseline gap-3 mb-3">
                        {roleIndex > 0 && (
                          <ChevronUp className="text-sage-600 dark:text-sage-400 flex-shrink-0" size={16} />
                        )}
                        <h4
                          className="text-lg font-bold text-gray-900 dark:text-gray-100"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {role.title}
                        </h4>
                      </div>

                      <div
                        className="inline-block px-3 py-1 border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 font-mono text-xs uppercase tracking-wider mb-3"
                        style={{ boxShadow: '2px 2px 0px currentColor' }}
                      >
                        {role.period}
                      </div>

                      <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Key Achievement: </span>
                        {role.achievement}
                      </p>
                    </motion.div>
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

import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const experiences = [
  {
    company: 'eVitalRx',
    roles: [
      {
        title: 'Backend Engineer (SDE-II)',
        period: 'Feb 2025 – Present',
        current: true,
        bullets: [
          'Leading architecture of mission-critical payment infrastructure handling Rs.4Cr+ total disbursements and Rs.8Mn/month partner settlements.',
          'Designing queue-based payout execution (Redis / BullMQ) for retryable, fault-tolerant payment processing.',
          'Mentoring junior engineers on system design, idempotency patterns, and API reliability best practices.',
        ],
      },
      {
        title: 'Backend Engineer (SDE-I)',
        period: 'Aug 2023 – Jan 2025',
        current: false,
        bullets: [
          'Integrated Cashfree, Paytm, Easebuzz, and PhonePe payment gateways for collection and vendor payouts.',
          'Built idempotent APIs and webhook handling systems eliminating duplicate transaction processing.',
          'Designed validation and reconciliation flows ensuring consistency across transactions, payouts, and ledger records.',
          'Drove 40% reduction in PostgreSQL query processing time through indexing and query optimization.',
          'Established Sentry-based proactive monitoring and error tracking infrastructure.',
        ],
      },
    ],
    location: 'Ahmedabad, Gujarat',
  },
  {
    company: 'DUIUX Infotech',
    roles: [
      {
        title: 'Junior Web Developer (MERN Stack)',
        period: 'Dec 2022 – Aug 2023',
        current: false,
        bullets: [
          'Built REST APIs and business workflows powering scalable e-commerce and booking platforms.',
          'Implemented real-time bidirectional communication via Socket.IO.',
          'Developed secure authentication and role-based access control across full-stack MERN applications.',
        ],
      },
    ],
    location: 'Surat, Gujarat',
  },
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
              <div
                className="border-2 border-gray-900 dark:border-gray-100 overflow-hidden"
                style={{ boxShadow: '4px 4px 0px currentColor' }}
              >
                {/* Company header */}
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
                      className={`relative p-6 bg-gray-100 dark:bg-gray-900 ${
                        roleIndex !== company.roles.length - 1
                          ? 'border-b-2 border-gray-900 dark:border-gray-100'
                          : ''
                      }`}
                    >
                      {role.current && (
                        <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 bg-green-500 text-white text-xs font-mono uppercase tracking-wider rounded-full">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          Current
                        </div>
                      )}

                      <div className="flex items-baseline gap-3 mb-3 pr-24">
                        {roleIndex > 0 && (
                          <ChevronUp
                            className="text-sage-600 dark:text-sage-400 flex-shrink-0"
                            size={16}
                          />
                        )}
                        <h4
                          className="text-lg font-bold text-gray-900 dark:text-gray-100"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {role.title}
                        </h4>
                      </div>

                      <div
                        className="inline-block px-3 py-1 border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-800 font-mono text-xs uppercase tracking-wider mb-4"
                        style={{ boxShadow: '2px 2px 0px currentColor' }}
                      >
                        {role.period}
                      </div>

                      <ul className="space-y-2">
                        {role.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex gap-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                            <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0 mt-0.5">
                              ›
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
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

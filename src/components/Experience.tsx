import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronUp } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { fadeUp, staggerContainer } from '../utils/motion';

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const timelineY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        style={{ y: timelineY }}
        className="absolute left-4 md:left-[calc(50%-2.5rem)] top-32 bottom-32 w-0.5 bg-sage-300/50 dark:bg-sage-700/50 hidden md:block"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading label="Work History" title="Experience" />

        <div className="space-y-10">
          {experiences.map((company, companyIndex) => (
            <motion.div
              key={company.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: companyIndex * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="neo-card overflow-hidden"
            >
              <div className="bg-sage-200 dark:bg-sage-800/80 px-6 py-5 border-b-2 border-gray-900 dark:border-gray-100">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-content-primary">
                  {company.company}
                </h3>
                <p className="text-body-sm text-content-muted mt-1.5 font-mono uppercase tracking-wide">
                  📍 {company.location}
                </p>
              </div>

              <div className="relative">
                {company.roles.map((role, roleIndex) => (
                  <motion.div
                    key={roleIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className={`relative p-6 bg-surface ${
                      roleIndex !== company.roles.length - 1
                        ? 'border-b-2 border-gray-900 dark:border-gray-100'
                        : ''
                    }`}
                  >
                    {role.current && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 bg-green-500 text-white text-xs font-mono uppercase tracking-wider rounded-full"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse-soft" />
                        Current
                      </motion.div>
                    )}

                    <div className="flex items-baseline gap-3 mb-3 pr-24">
                      {roleIndex > 0 && (
                        <ChevronUp className="text-sage-600 dark:text-sage-400 flex-shrink-0" size={16} />
                      )}
                      <motion.h4 variants={fadeUp} className="text-lg font-display font-bold text-content-primary">
                        {role.title}
                      </motion.h4>
                    </div>

                    <motion.div
                      variants={fadeUp}
                      className="inline-block px-3 py-1 border border-gray-900 dark:border-gray-100 bg-surface-elevated font-mono text-xs uppercase tracking-wider mb-5 neo-card-sm"
                    >
                      {role.period}
                    </motion.div>

                    <ul className="space-y-3">
                      {role.bullets.map((bullet, bIndex) => (
                        <motion.li
                          key={bIndex}
                          variants={fadeUp}
                          className="flex gap-3 text-body-sm leading-relaxed text-content-secondary font-body"
                        >
                          <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0 mt-0.5">›</span>
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
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

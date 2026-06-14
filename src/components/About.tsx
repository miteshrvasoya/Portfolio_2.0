import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from './SectionHeading';
import { ParallaxSectionDecor } from './ParallaxBackground';
import { fadeUp, staggerContainer, scaleIn } from '../utils/motion';

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const decorX = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      <motion.div style={{ x: decorX }} className="absolute top-20 right-8 md:right-24">
        <ParallaxSectionDecor variant="lines" />
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading label="About" title="Who I Am" />

        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="md:col-span-3 space-y-5"
          >
            <motion.p variants={fadeUp} className="prose-body">
              I'm a Backend Engineer based in Ahmedabad, India, with{' '}
              <strong>2.7 years</strong> of experience architecting mission-critical Node.js
              services for fintech applications.
            </motion.p>
            <motion.p variants={fadeUp} className="prose-body">
              I specialize in <strong>payment gateway integrations</strong> (Cashfree, Paytm,
              Easebuzz, PhonePe), designing <strong>idempotent payout systems</strong>, and
              building scalable queue-based infrastructure with Redis &amp; BullMQ.
            </motion.p>
            <motion.p variants={fadeUp} className="prose-body">
              I care deeply about <strong>fault tolerance</strong>, clean API design, PostgreSQL
              optimization, and systems that don't break under pressure.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, boxShadow: '6px 6px 0px currentColor' }}
            className="md:col-span-2 neo-card p-6 self-start"
          >
            <p className="section-label text-sage-600 dark:text-sage-400 mb-5">Quick Facts</p>
            <ul className="space-y-3.5 text-body-sm font-body text-content-secondary">
              {[
                'Ahmedabad, India',
                'Backend Engineer @ eVitalRx',
                'Node.js · PostgreSQL · TypeScript',
                'Fintech · Payments · APIs',
                'BE Computer Engineering, GTU',
              ].map((fact, i) => (
                <motion.li
                  key={fact}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex gap-3"
                >
                  <span className="text-sage-600 dark:text-sage-400 font-bold shrink-0">→</span>
                  {fact}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap gap-3"
        >
          {traits.map((trait) => (
            <motion.span
              key={trait}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-2.5 border-2 border-gray-900 dark:border-gray-100 text-xs uppercase tracking-[0.12em] font-semibold bg-surface-elevated cursor-default neo-card-sm"
            >
              {trait}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

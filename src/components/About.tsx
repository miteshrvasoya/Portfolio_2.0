import { motion } from 'framer-motion';
import { FileCode2 } from 'lucide-react';
import { traits } from '../data/portfolio';
import { fadeUp, staggerContainer } from '../utils/motion';
import { Section, SectionHeading, WindowDots } from './SectionHeading';

const K = ({ children }: { children: React.ReactNode }) => <span className="text-syn-purple">{children}</span>;
const P = ({ children }: { children: React.ReactNode }) => <span className="text-syn-blue">{children}</span>;
const S = ({ children }: { children: React.ReactNode }) => <span className="text-syn-string">"{children}"</span>;
const N = ({ children }: { children: React.ReactNode }) => <span className="text-syn-orange">{children}</span>;
const C = ({ children }: { children: React.ReactNode }) => <span className="text-content-muted italic">{children}</span>;

const codeLines: React.ReactNode[] = [
  <C>{'// engineer.ts'}</C>,
  <>
    <K>const</K> <span className="text-syn-yellow">mitesh</span>
    <span className="text-content-muted">: </span>
    <span className="text-syn-green">Engineer</span> = {'{'}
  </>,
  <>
    {'  '}<P>role</P>: <S>Software Engineer</S>,
  </>,
  <>
    {'  '}<P>company</P>: <S>eVitalRx</S>,
  </>,
  <>
    {'  '}<P>basedIn</P>: <S>Ahmedabad, IN</S>,
  </>,
  <>
    {'  '}<P>experienceYears</P>: <N>2.7</N>,
  </>,
  <>
    {'  '}<P>stack</P>: [<S>Node.js</S>, <S>TypeScript</S>, <S>PostgreSQL</S>, <S>Redis</S>],
  </>,
  <>
    {'  '}<P>sideProject</P>: <S>tryk.in</S>,
  </>,
  <>
    {'  '}<P>education</P>: <S>B.E. Computer Eng, GTU</S>,
  </>,
  <>
    {'  '}<P>ship</P>: () =&gt; <S>reliably</S>,
  </>,
  <>{'};'}</>,
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" command="cat about.md" title="About me" />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="space-y-5 text-base leading-relaxed md:text-lg"
        >
          <motion.p variants={fadeUp}>
            I'm a software engineer based in Ahmedabad with{' '}
            <strong className="font-semibold text-content-primary">2.7 years</strong> of experience
            building mission-critical Node.js services for fintech.
          </motion.p>
          <motion.p variants={fadeUp}>
            My day job is <strong className="font-semibold text-content-primary">payment infrastructure</strong>:
            gateway integrations (Cashfree, Paytm, Easebuzz, PhonePe), idempotent payout systems, and
            queue-based execution on Redis &amp; BullMQ that has to be right every single time.
          </motion.p>
          <motion.p variants={fadeUp}>
            Outside of work I build my own products — most notably{' '}
            <a href="#projects" className="font-semibold text-syn-blue underline decoration-syn-blue/30 underline-offset-4 hover:decoration-syn-blue">
              Tryk
            </a>
            , an AI customer-support platform. I care about fault tolerance, clean API design, and
            systems that don't break under pressure.
          </motion.p>

          <motion.ul variants={fadeUp} className="flex flex-wrap gap-2 pt-3">
            {traits.map((t) => (
              <li key={t} className="chip">
                <span className="text-syn-purple">#</span>
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="panel overflow-hidden"
        >
          <div className="panel-header">
            <WindowDots />
            <FileCode2 size={14} className="ml-2 text-syn-blue" />
            <span>engineer.ts</span>
            <span className="ml-auto hidden sm:inline">TypeScript</span>
          </div>
          <pre className="overflow-x-auto py-4 font-mono text-[0.78rem] leading-7 sm:text-[0.85rem]">
            <code>
              {codeLines.map((line, i) => (
                <div key={i} className="flex px-4 hover:bg-surface-muted">
                  <span className="mr-5 w-5 shrink-0 select-none text-right text-content-muted/60">{i + 1}</span>
                  <span className="text-content-primary">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </motion.div>
      </div>
    </Section>
  );
}

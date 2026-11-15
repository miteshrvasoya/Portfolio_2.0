import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { profile, roles, stats } from '../data/portfolio';
import { WindowDots } from './SectionHeading';

type Line = { cmd: string; out: React.ReactNode };

const session: Line[] = [
  {
    cmd: 'whoami',
    out: (
      <>
        <span className="text-content-primary">mitesh vasoya</span>
        <span className="text-content-muted"> — software engineer @ </span>
        <span className="text-syn-purple">eVitalRx</span>
      </>
    ),
  },
  {
    cmd: 'cat focus.json',
    out: (
      <pre className="whitespace-pre-wrap leading-relaxed">
        <span className="text-content-muted">{'{'}</span>
        {'\n  '}
        <span className="text-syn-blue">"day_job"</span>
        <span className="text-content-muted">: </span>
        <span className="text-syn-string">"payment infra"</span>
        <span className="text-content-muted">,</span>
        {'\n  '}
        <span className="text-syn-blue">"side_project"</span>
        <span className="text-content-muted">: </span>
        <span className="text-syn-string">"tryk.in"</span>
        <span className="text-content-muted">,</span>
        {'\n  '}
        <span className="text-syn-blue">"duplicate_payouts"</span>
        <span className="text-content-muted">: </span>
        <span className="text-syn-orange">0</span>
        {'\n'}
        <span className="text-content-muted">{'}'}</span>
      </pre>
    ),
  },
  {
    cmd: 'git log --oneline | wc -l',
    out: <span className="text-syn-green">2.7 years of shipped commits ✓</span>,
  },
];

function TerminalSession() {
  const reduce = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(reduce ? session.length : 0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (reduce || lineIdx >= session.length) return;
    const cmd = session[lineIdx].cmd;
    if (typed < cmd.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), 45 + Math.random() * 55);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setTyped(0);
    }, 650);
    return () => clearTimeout(t);
  }, [lineIdx, typed, reduce]);

  const prompt = (
    <>
      <span className="text-syn-green">➜</span> <span className="text-syn-blue">~</span>{' '}
    </>
  );

  return (
    <div className="panel overflow-hidden">
      <div className="panel-header">
        <WindowDots />
        <span className="mx-auto">mitesh — zsh — 80×24</span>
      </div>
      <div className="min-h-[300px] space-y-3 p-5 font-mono text-[0.8rem] leading-relaxed sm:text-sm">
        {session.map((line, i) => {
          if (i > lineIdx) return null;
          const done = i < lineIdx;
          return (
            <div key={line.cmd}>
              <div className="text-content-primary">
                {prompt}
                {done ? line.cmd : line.cmd.slice(0, typed)}
                {!done && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-content-primary" />}
              </div>
              <AnimatePresence>
                {done && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-content-secondary"
                  >
                    {line.out}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        {lineIdx >= session.length && (
          <div className="text-content-primary">
            {prompt}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-content-primary" />
          </div>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setRoleIdx((r) => (r + 1) % roles.length), 2600);
    return () => clearInterval(i);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 md:pb-28 md:pt-20">
      <div
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-syn-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface-elevated px-3 py-1.5 font-mono text-xs text-content-secondary hover:border-syn-green/60"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-syn-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-syn-green" />
            </span>
            status: open to opportunities
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-3 font-mono text-sm text-syn-purple"
          >
            {'// hello, world. i\'m'}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-display-xl text-content-primary"
          >
            Mitesh
            <br />
            Vasoya<span className="text-syn-green">_</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-mono text-lg sm:text-xl"
          >
            <span className="block text-content-secondary">Software engineer building</span>
            <span className="relative mt-1 block h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 whitespace-nowrap text-syn-blue"
                >
                  <span className="text-content-muted">&lt;</span>
                  {roles[roleIdx]}
                  <span className="text-content-muted"> /&gt;</span>
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-content-secondary md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => go('projects')} className="btn-primary group">
              ./view-projects
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <a href={profile.resume} download className="btn-ghost">
              <Download size={15} />
              resume
            </a>
            <div className="ml-1 flex gap-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                <Mail size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <TerminalSession />
        </motion.div>
      </div>

      <motion.dl
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
        className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4"
        style={{ gap: '1px' }}
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col-reverse justify-end bg-surface-elevated p-5 md:p-6"
          >
            <dt className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-content-muted">
              {s.label}
            </dt>
            <dd className="font-mono text-2xl font-bold text-content-primary md:text-3xl">{s.value}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
}

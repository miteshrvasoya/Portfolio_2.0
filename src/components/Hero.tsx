import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/portfolio';
import { InteractiveShell } from './hero/InteractiveShell';
import { SystemNetwork } from './hero/SystemNetwork';

const GLYPHS = '!<>-_\\/[]{}=+*^?#01ABCDEF';

/** Decodes text from random glyphs, left to right — like data resolving. */
function useScramble(text: string, duration = 1400) {
  const reduce = useReducedMotion();
  const [out, setOut] = useState(reduce ? text : text.replace(/\S/g, ' '));

  useEffect(() => {
    if (reduce) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const revealed = Math.floor(p * text.length);
      setOut(
        text
          .split('')
          .map((ch, i) =>
            ch === ' ' || i < revealed ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          )
          .join('')
      );
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    const t = setTimeout(() => (raf = requestAnimationFrame(tick)), 250);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, [text, duration, reduce]);

  return out;
}

const logLines = [
  { level: 'OK', color: 'text-syn-green', msg: 'payouts.disbursed total=₹4Cr+ status=settled' },
  { level: 'INFO', color: 'text-syn-blue', msg: 'settlements.monthly volume=₹8Mn partners=active' },
  { level: 'OK', color: 'text-syn-green', msg: 'idempotency.check duplicate_payouts=0' },
  { level: 'INFO', color: 'text-syn-blue', msg: 'gateways.connected [cashfree, paytm, easebuzz, phonepe]' },
  { level: 'PERF', color: 'text-syn-orange', msg: 'postgres.query_time Δ=-40% after indexing' },
  { level: 'INFO', color: 'text-syn-purple', msg: 'side_project tryk.in status=live' },
  { level: 'OK', color: 'text-syn-green', msg: 'engineer.uptime 2.7y — still shipping' },
];

function LogTicker() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {logLines.map((l) => (
        <span key={l.msg} className="whitespace-nowrap">
          <span className={l.color}>[{l.level}]</span> <span className="text-content-secondary">{l.msg}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface-elevated/70 py-3 font-mono text-xs backdrop-blur-sm [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  );
}

export function Hero() {
  const name = useScramble(profile.name);
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    ref.current!.style.setProperty('--mx', `${e.clientX - r.left}px`);
    ref.current!.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="group/hero relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden pt-16 [--mx:50%] [--my:30%]"
    >
      {/* layer 1: the systems map */}
      <div className="absolute inset-0 opacity-70 dark:opacity-60">
        <SystemNetwork />
      </div>
      {/* layer 2: grid revealed by the cursor spotlight */}
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100"
        style={{
          maskImage: 'radial-gradient(260px circle at var(--mx) var(--my), black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(260px circle at var(--mx) var(--my), black, transparent 75%)',
        }}
        aria-hidden="true"
      />
      {/* layer 3: vignette so the text stays readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,rgb(var(--surface))_35%,rgb(var(--surface)/0.6)_65%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface-elevated/80 py-1 pl-1 pr-4 font-mono text-xs backdrop-blur"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-syn-green/15 px-2.5 py-1 text-syn-green">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-syn-green" />
            200 OK
          </span>
          <span className="text-content-secondary">open to new opportunities</span>
        </motion.div>

        <p className="mb-4 font-mono text-sm text-content-muted">
          <span className="text-syn-purple">const</span> <span className="text-syn-yellow">engineer</span> ={' '}
          <span className="text-syn-purple">await</span> <span className="text-syn-blue">resolve</span>(
          <span className="text-syn-string">'mitesh'</span>);
        </p>

        <h1
          className="whitespace-nowrap font-mono font-extrabold leading-[0.95] tracking-[-0.05em] text-content-primary"
          style={{ fontSize: 'clamp(2.6rem, 10.5vw, 8.5rem)' }}
          aria-label={profile.name}
        >
          <span aria-hidden="true">{name}</span>
          <span className="ml-1 inline-block h-[0.8em] w-[0.08em] translate-y-[0.08em] animate-blink bg-syn-green align-baseline" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-7 max-w-3xl text-balance text-xl leading-snug text-content-secondary sm:text-2xl md:text-[1.7rem]"
        >
          I build backend systems that{' '}
          <span className="relative whitespace-nowrap font-semibold text-content-primary">
            move real money
            <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden="true">
              <motion.path
                d="M1 5 Q 50 1, 100 5 T 199 4"
                fill="none"
                stroke="rgb(var(--syn-green))"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.7, duration: 0.8, ease: 'easeInOut' }}
              />
            </svg>
          </span>{' '}
          — and <span className="whitespace-nowrap font-semibold text-content-primary">never pay twice</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.6 }}
          className="mt-10 w-full max-w-2xl"
        >
          <InteractiveShell />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-content-muted"
        >
          <a href={profile.resume} download className="inline-flex items-center gap-1.5 hover:text-syn-green">
            <Download size={13} /> resume.pdf
          </a>
          <span aria-hidden="true">/</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-syn-blue">
            <Github size={13} /> github
          </a>
          <span aria-hidden="true">/</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-syn-blue">
            <Linkedin size={13} /> linkedin
          </a>
        </motion.div>
      </div>

      <div className="relative z-10">
        <a
          href="#about"
          className="absolute -top-12 left-1/2 hidden -translate-x-1/2 items-center gap-1.5 font-mono text-[0.7rem] text-content-muted hover:text-content-primary md:inline-flex"
        >
          <ArrowDown size={12} className="animate-bounce" /> scroll
        </a>
        <LogTicker />
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Section, SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        command="git log --graph --author=mitesh"
        title="Experience"
        description="A commit history of where I've worked and what I shipped."
      />

      <ol className="relative">
        {experience.map((c, i) => {
          const last = i === experience.length - 1;
          return (
            <motion.li
              key={c.hash}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-[28px_1fr] gap-x-4 sm:grid-cols-[40px_1fr]"
            >
              {/* graph rail */}
              <div className="relative flex justify-center">
                {!last && <span className="absolute top-6 bottom-0 w-px bg-line" aria-hidden="true" />}
                <span
                  className={`relative z-10 mt-1.5 h-4 w-4 rounded-full border-2 ${
                    c.current ? 'border-syn-green bg-syn-green/25' : 'border-syn-blue bg-surface'
                  }`}
                  aria-hidden="true"
                >
                  {c.current && <span className="absolute inset-0 animate-ping rounded-full bg-syn-green/40" />}
                </span>
              </div>

              <div className={last ? '' : 'pb-12'}>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm">
                  <span className="text-syn-yellow">commit {c.hash}</span>
                  {c.current && (
                    <span className="text-content-muted">
                      (<span className="text-syn-blue">HEAD</span> -&gt;{' '}
                      <span className="text-syn-green">main</span>)
                    </span>
                  )}
                  <span className="text-content-muted">·</span>
                  <span className="text-content-muted">{c.period}</span>
                </div>

                <div className="panel mt-3 p-5 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-content-primary sm:text-xl">{c.title}</h3>
                      <p className="mt-0.5 font-mono text-sm text-syn-purple">@ {c.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-content-muted">
                      <MapPin size={12} /> {c.location}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 rounded-lg border border-line bg-surface-muted p-3 font-mono text-[0.8rem] leading-relaxed sm:text-[0.85rem]">
                    {c.changes.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="select-none text-syn-green">+</span>
                        <span className="text-content-secondary">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}

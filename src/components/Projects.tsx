import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight, FolderGit2, Github, MessageSquare, Sparkles } from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import { fadeUp, staggerContainer } from '../utils/motion';
import { Section, SectionHeading, WindowDots } from './SectionHeading';

const statusStyles: Record<Project['status'], string> = {
  live: 'border-syn-green/40 bg-syn-green/10 text-syn-green',
  building: 'border-syn-yellow/40 bg-syn-yellow/10 text-syn-yellow',
  archived: 'border-line bg-surface-muted text-content-muted',
};

function StatusBadge({ status }: { status: Project['status'] }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[0.68rem] ${statusStyles[status]}`}>
      {status === 'live' && <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-current" />}
      {status}
    </span>
  );
}

function ProjectLinks({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? 'btn-ghost !px-3 !py-1.5 !text-xs' : 'btn-primary'}
        >
          {project.live.replace(/^https?:\/\//, '')}
          <ArrowUpRight size={14} />
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={compact ? 'btn-ghost !px-3 !py-1.5 !text-xs' : 'btn-ghost'}
        >
          <Github size={14} />
          source
        </a>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="panel relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-syn-purple/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="panel-header">
        <WindowDots />
        <span className="ml-2">
          projects/<span className="text-content-primary">{project.slug}</span>/README.md
        </span>
        <span className="ml-auto inline-flex items-center gap-1 text-syn-purple">
          <Sparkles size={12} /> featured · {project.kind} project
        </span>
      </div>

      <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-mono text-3xl font-bold text-content-primary sm:text-4xl">{project.name}</h3>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-2 font-mono text-sm text-syn-blue">{project.tagline}</p>
          <p className="mt-5 text-base leading-relaxed text-content-secondary md:text-lg">{project.description}</p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-content-secondary">
                <ChevronRight size={16} className="mt-1 shrink-0 text-syn-green" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {project.pipeline && (
            <div className="rounded-lg border border-line bg-surface-muted p-5">
              <p className="mb-4 font-mono text-xs text-content-muted">{'// request flow'}</p>
              <ol className="space-y-0">
                {project.pipeline.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <div className="flex w-full items-center gap-3 rounded-md border border-line bg-surface-elevated px-3 py-2 font-mono text-sm">
                      <span className="text-content-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-content-primary">{step}</span>
                    </div>
                    {i < project.pipeline!.length - 1 && (
                      <span className="ml-6 h-4 w-px bg-gradient-to-b from-syn-blue to-syn-purple" aria-hidden="true" />
                    )}
                  </motion.li>
                ))}
              </ol>
            </div>
          )}

          <div className="flex items-start gap-3 rounded-lg border border-syn-blue/30 bg-syn-blue/5 p-4">
            <MessageSquare size={18} className="mt-0.5 shrink-0 text-syn-blue" />
            <p className="text-sm leading-relaxed text-content-secondary">
              <span className="font-semibold text-content-primary">Try it right here.</span> The chat widget
              on this page is powered by Tryk — ask it anything about my work.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article variants={fadeUp} className="panel panel-hover flex flex-col overflow-hidden">
      <div className="panel-header">
        <FolderGit2 size={14} className="text-syn-orange" />
        <span className="text-content-secondary">{project.slug}/</span>
        <span className="ml-auto">
          <StatusBadge status={project.status} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-mono text-xl font-bold text-content-primary">{project.name}</h3>
          <span className="font-mono text-[0.7rem] text-content-muted">{project.kind}</span>
        </div>
        <p className="mt-1 font-mono text-xs text-syn-blue">{project.tagline}</p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-content-secondary">{project.description}</p>
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm leading-relaxed text-content-secondary">
              <span className="font-mono text-syn-green">›</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <ProjectLinks project={project} compact />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" alt>
      <SectionHeading
        index="04"
        command="ls -la ~/projects"
        title="Projects"
        description="Products I've designed and built end-to-end — from architecture to deployment."
      />

      <div className="space-y-6">
        {featured.map((p) => (
          <FeaturedProject key={p.slug} project={p} />
        ))}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href="https://github.com/miteshrvasoya"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 rounded-xl border border-dashed border-line py-5 font-mono text-sm text-content-muted transition-colors hover:border-syn-blue/60 hover:text-syn-blue"
        >
          <Github size={16} />
          more on github.com/miteshrvasoya
          <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>
      </div>
    </Section>
  );
}

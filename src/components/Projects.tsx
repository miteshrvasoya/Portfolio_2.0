import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { scaleIn, staggerContainer } from '../utils/motion';

const projects = [
  {
    name: 'MailOS',
    description:
      'Built MailOS, a full-stack email management system using React, FastAPI, PostgreSQL with authentication, dashboard analytics, and domain integration.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    live: 'https://mailos.in',
    github: 'https://github.com/mailos',
    status: 'Live',
    outcome:
      'Reduced email processing latency by 40%, implemented secure auth, deployed scalable backend on Vercel and Render infrastructure.',
  },
  {
    name: 'Tryk',
    description:
      'AI-powered plug-and-play chatbot platform automating customer support for Shopify merchants and web businesses.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    live: 'https://tryk.in',
    github: 'https://github.com/tryk-ai/tryk',
    status: 'Live',
    outcome:
      'Modular multi-tenant architecture supporting seamless third-party integrations and knowledge base ingestion pipelines.',
  },
  {
    name: 'TracScore',
    description:
      'Real-time cricket analytics platform with live score updates and full tournament management.',
    tech: ['Node.js', 'PostgreSQL', 'Redis'],
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Real-Time'],
    live: 'https://github.com/miteshrvasoya/tracscore_backend',
    github: null,
    status: null,
    outcome:
      'Redis caching layer reduced database load by 60% on read-heavy endpoints; supports complete match orchestration and player performance analytics.',
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 px-6 section-alt overflow-hidden">
      <motion.div
        style={{ y: parallaxY }}
        className="absolute -right-12 top-32 text-[12rem] font-display font-bold text-sage-300/20 dark:text-sage-800/30 select-none pointer-events-none"
        aria-hidden="true"
      >
        //
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading label="Projects" title="Featured Work" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={scaleIn}
              whileHover={{ y: -8, boxShadow: '8px 8px 0px currentColor' }}
              transition={{ duration: 0.3 }}
              className="flex flex-col neo-card bg-surface-elevated overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative flex-1 min-h-[200px] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-bold text-content-primary group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span className="px-2 py-1 border-2 border-gray-900 dark:border-gray-100 bg-sage-400 dark:bg-sage-600 font-mono text-xs uppercase tracking-wider">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="text-body-sm mb-4 text-content-secondary leading-relaxed font-body">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 border border-gray-900 dark:border-gray-100 text-xs font-medium bg-surface-muted text-content-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: hoveredProject === project.name ? 0 : '100%' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-sand-300 dark:bg-sand-700 border-t-2 border-gray-900 dark:border-gray-100 p-6 flex items-center"
                >
                  <div>
                    <p className="section-label mb-2 text-content-primary font-semibold">Key Outcome</p>
                    <p className="text-body-sm text-content-primary leading-relaxed font-body">{project.outcome}</p>
                  </div>
                </motion.div>
              </div>

              <div className="border-t-2 border-gray-900 dark:border-gray-100 p-4 bg-surface-elevated flex flex-wrap gap-3 shrink-0">
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2, y: -2 }}
                    title="Visit live site"
                    aria-label={`Visit ${project.name} live site`}
                    className="inline-flex items-center gap-2 px-3 py-2 border-2 border-gray-900 dark:border-gray-100 hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors text-body-sm font-medium neo-card-sm"
                  >
                    <ExternalLink size={16} aria-hidden />
                    <span>Live site</span>
                  </motion.a>
                )}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2, y: -2 }}
                    title="View source on GitHub"
                    aria-label={`View ${project.name} source on GitHub`}
                    className="inline-flex items-center gap-2 px-3 py-2 border-2 border-gray-900 dark:border-gray-100 hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors text-body-sm font-medium neo-card-sm"
                  >
                    <Github size={16} aria-hidden />
                    <span>View code</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

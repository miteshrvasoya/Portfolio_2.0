import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Tryk',
    description:
      'AI-powered plug-and-play chatbot platform automating customer support for Shopify merchants and web businesses.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'AI'],
    live: 'https://tryk.in',
    github: null,
    status: 'Live',
    outcome:
      'Modular multi-tenant architecture supporting seamless third-party integrations and knowledge base ingestion pipelines.'
  },
  {
    name: 'TracScore',
    description:
      'Real-time cricket analytics platform with live score updates and full tournament management.',
    tech: ['Node.js', 'PostgreSQL', 'Redis'],
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Real-Time'],
    live: null,
    github: null,
    status: null,
    outcome:
      'Redis caching layer reduced database load by 60% on read-heavy endpoints; supports complete match orchestration and player performance analytics.'
  },
  {
    name: 'eVitalRx Payment Infrastructure',
    description:
      'Mission-critical payout and transaction workflow engine processing ₹50M+ annually.',
    tech: ['Node.js', 'PostgreSQL', 'Paytm', 'PhonePe'],
    tags: ['Node.js', 'PostgreSQL', 'Fintech'],
    live: null,
    github: null,
    status: null,
    outcome:
      'Fault-tolerant design with idempotent request handling and 40% improvement in reporting pipeline performance.'
  }
];

const allTags = ['All', 'Node.js', 'PostgreSQL', 'Redis', 'TypeScript', 'AI', 'Real-Time', 'Fintech'];

export function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    selectedTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <section id="projects" className="py-20 px-6 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            Projects
          </span>
          Featured Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 border-2 border-gray-900 dark:border-gray-100 text-xs uppercase tracking-widest font-semibold transition-colors ${
                selectedTag === tag
                  ? 'bg-sage-400 dark:bg-sage-600 text-gray-900 dark:text-gray-100'
                  : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              style={{ boxShadow: '3px 3px 0px currentColor' }}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 overflow-hidden group cursor-pointer"
              style={{ boxShadow: '4px 4px 0px currentColor' }}
              onMouseEnter={() => setHoveredProject(project.name)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {project.name}
                  </h3>
                  {project.status && (
                    <span className="px-2 py-1 border-2 border-gray-900 dark:border-gray-100 bg-sage-400 dark:bg-sage-600 font-mono text-xs uppercase tracking-wider">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-sm mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-gray-900 dark:border-gray-100 text-xs font-semibold bg-gray-100 dark:bg-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-gray-900 dark:border-gray-100 hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
                      style={{ boxShadow: '2px 2px 0px currentColor' }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-gray-900 dark:border-gray-100 hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
                      style={{ boxShadow: '2px 2px 0px currentColor' }}
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: hoveredProject === project.name ? 0 : '100%' }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-sand-400 dark:bg-sand-700 border-t-2 border-gray-900 dark:border-gray-100 p-6 flex items-center"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2 text-gray-900 dark:text-gray-100 font-semibold">
                    Key Outcome
                  </p>
                  <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">{project.outcome}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

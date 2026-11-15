import { motion } from 'framer-motion';
import { ArrowUpRight, FileText } from 'lucide-react';
import { posts } from '../data/portfolio';
import { fadeUp, staggerContainer } from '../utils/motion';
import { Section, SectionHeading } from './SectionHeading';

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading
        index="05"
        command="ls ~/writing --sort=date"
        title="Writing"
        description="Deep dives into system design, architecture decisions and lessons from production."
      />

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={staggerContainer}
        className="panel divide-y divide-line overflow-hidden"
      >
        {posts.map((post) => (
          <motion.li key={post.url} variants={fadeUp}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 p-6 transition-colors hover:bg-surface-muted sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-6 sm:p-7"
            >
              <span className="hidden h-11 w-11 items-center justify-center rounded-lg border border-line bg-surface-muted text-syn-blue sm:flex">
                <FileText size={18} />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-content-muted">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime} read</span>
                  <span>·</span>
                  <span className="text-syn-purple">{post.platform}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-content-primary transition-colors group-hover:text-syn-blue sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-content-secondary">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((t) => (
                    <span key={t} className="chip">
                      <span className="text-syn-purple">#</span>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="hidden text-content-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-syn-blue sm:block"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}

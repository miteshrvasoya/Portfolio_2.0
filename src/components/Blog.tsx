import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { ExternalLink, Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { scaleIn, staggerContainer } from '../utils/motion';

interface BlogPost {
  title: string;
  description: string;
  url: string;
  coverImage: string;
  tags: string[];
  date: string;
  readTime: string;
  platform: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'From a For-Loop to a Fault-Tolerant Payout System (₹70L/month, 0 Duplicate Payments)',
    description:
      'How we moved from a fragile loop-based payout system to a reliable, idempotent, and traceable architecture — processing ₹70L/month with zero duplicate payments.',
    url: 'https://dev.to/miteshvasoya/from-a-for-loop-to-a-fault-tolerant-payout-system-70lmonth-0-duplicate-payments-4cfp',
    coverImage:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm2h87m0zflbeay7vleey.png',
    tags: ['Fintech', 'System Design', 'Architecture', 'Backend'],
    date: 'May 2026',
    readTime: '8 min read',
    platform: 'DEV.to',
  },
];

export function Blog() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const decorY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="blog" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      <motion.div
        style={{ y: decorY }}
        className="absolute left-8 bottom-20 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <div className="font-mono text-xs text-content-muted space-y-1">
          <div>{'// writing'}</div>
          <div>{'// systems'}</div>
          <div>{'// lessons'}</div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          label="Blog"
          title="Writing & Thoughts"
          description="Deep dives into system design, architecture decisions, and lessons learned from building production systems."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              whileHover={{ y: -8, boxShadow: '8px 8px 0px currentColor' }}
              className="flex flex-col neo-card bg-surface-elevated overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredPost(post.title)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="relative overflow-hidden border-b-2 border-gray-900 dark:border-gray-100">
                <motion.img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="absolute top-3 right-3 px-2 py-1 border-2 border-gray-900 dark:border-gray-100 bg-sage-400 dark:bg-sage-600 font-mono text-xs uppercase tracking-wider text-content-primary">
                  {post.platform}
                </span>
              </div>

              <div className="relative flex-1 min-h-[180px] overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs font-mono text-content-muted uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} aria-hidden />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} aria-hidden />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold mb-3 leading-snug text-content-primary group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-body-sm text-content-secondary leading-relaxed mb-4 font-body">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border border-gray-900 dark:border-gray-100 text-xs font-medium bg-surface-muted text-content-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: hoveredPost === post.title ? 0 : '100%' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-sand-300 dark:bg-sand-700 border-t-2 border-gray-900 dark:border-gray-100 p-6 flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      animate={hoveredPost === post.title ? { rotate: 45 } : { rotate: 0 }}
                      className="w-14 h-14 mx-auto mb-4 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center bg-surface-elevated neo-card-sm"
                    >
                      <ArrowUpRight size={24} className="text-content-primary" />
                    </motion.div>
                    <p className="section-label text-content-primary font-semibold">Read Article</p>
                    <p className="text-xs text-content-secondary mt-1 font-mono">on {post.platform}</p>
                  </div>
                </motion.div>
              </div>

              <div className="border-t-2 border-gray-900 dark:border-gray-100 p-4 bg-surface-elevated flex items-center justify-between shrink-0">
                <span className="inline-flex items-center gap-2 text-body-sm font-medium text-sage-600 dark:text-sage-400">
                  <ExternalLink size={16} aria-hidden />
                  Read on {post.platform}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-content-muted group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

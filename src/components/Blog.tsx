import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Calendar, Clock, ArrowUpRight } from 'lucide-react';

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

  return (
    <section id="blog" className="py-20 px-6 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 block mb-3">
            Blog
          </span>
          Writing &amp; Thoughts
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mb-12 font-mono"
        >
          Deep dives into system design, architecture decisions, and lessons learned from building production systems.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 overflow-hidden group cursor-pointer"
              style={{ boxShadow: '4px 4px 0px currentColor' }}
              onMouseEnter={() => setHoveredPost(post.title)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Cover Image */}
              <div className="relative overflow-hidden border-b-2 border-gray-900 dark:border-gray-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Platform badge */}
                <span className="absolute top-3 right-3 px-2 py-1 border-2 border-gray-900 dark:border-gray-100 bg-sage-400 dark:bg-sage-600 font-mono text-xs uppercase tracking-wider text-gray-900 dark:text-gray-100">
                  {post.platform}
                </span>
              </div>

              {/* Content */}
              <div className="relative flex-1 min-h-[180px] overflow-hidden">
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 mb-3 text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} aria-hidden />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} aria-hidden />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold mb-3 leading-snug group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border border-gray-900 dark:border-gray-100 text-xs font-semibold bg-gray-100 dark:bg-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ y: '100%' }}
                  animate={{ y: hoveredPost === post.title ? 0 : '100%' }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-sand-400 dark:bg-sand-700 border-t-2 border-gray-900 dark:border-gray-100 p-6 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-4 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center bg-white dark:bg-gray-900">
                      <ArrowUpRight size={24} className="text-gray-900 dark:text-gray-100" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-gray-900 dark:text-gray-100 font-semibold">
                      Read Article
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-200 mt-1 font-mono">
                      on {post.platform}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="border-t-2 border-gray-900 dark:border-gray-100 p-4 bg-white dark:bg-gray-900 flex items-center justify-between shrink-0">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 dark:text-sage-300">
                  <ExternalLink size={16} aria-hidden />
                  Read on {post.platform}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-gray-500 dark:text-gray-400 group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform duration-200"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

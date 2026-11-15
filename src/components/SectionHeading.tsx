import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

interface SectionHeadingProps {
  index: string;
  command: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, command, title, description }: SectionHeadingProps) {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className="mb-10 md:mb-14"
    >
      <p className="mb-3 font-mono text-xs sm:text-sm">
        <span className="text-content-muted">{index} </span>
        <span className="text-syn-green">~/mitesh</span>
        <span className="text-content-muted"> $ </span>
        <span className="text-content-secondary">{command}</span>
      </p>
      <h2 className="font-mono text-display-md text-content-primary">
        {title}
        <span className="text-syn-blue">.</span>
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-content-secondary md:text-lg">
          {description}
        </p>
      )}
    </motion.header>
  );
}

export function WindowDots() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-syn-red/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-syn-yellow/80" />
      <span className="h-2.5 w-2.5 rounded-full bg-syn-green/80" />
    </span>
  );
}

export function Section({
  id,
  children,
  alt = false,
}: {
  id: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative px-4 py-20 sm:px-6 md:py-28 ${alt ? 'border-y border-line bg-surface-muted' : ''}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

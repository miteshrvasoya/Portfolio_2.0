import { motion, useScroll, useTransform } from 'framer-motion';

const shapes = [
  { size: 280, top: '8%', left: '-5%', speed: 0.3, color: 'bg-sage-300/40 dark:bg-sage-700/30', delay: 0 },
  { size: 180, top: '55%', left: '85%', speed: 0.5, color: 'bg-sand-300/50 dark:bg-sand-700/25', delay: 1 },
  { size: 120, top: '25%', left: '75%', speed: 0.7, color: 'bg-sage-400/30 dark:bg-sage-600/20', delay: 2 },
  { size: 90, top: '70%', left: '10%', speed: 0.4, color: 'bg-sand-400/40 dark:bg-sand-600/20', delay: 0.5 },
  { size: 60, top: '15%', left: '45%', speed: 0.6, color: 'bg-sage-200/50 dark:bg-sage-800/40', delay: 1.5 },
];

export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
      >
        <div
          className="w-full h-[200%] -top-1/2 absolute"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
      </motion.div>

      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} index={i} />
      ))}
    </div>
  );
}

function FloatingShape({
  size,
  top,
  left,
  speed,
  color,
  delay,
  index,
}: (typeof shapes)[0] & { index: number }) {
  const { scrollY } = useScroll();
  const scrollYTransform = useTransform(scrollY, [0, 1200], [0, speed * -180]);

  return (
    <motion.div
      style={{ y: scrollYTransform, width: size, height: size, top, left }}
      className={`absolute ${color}`}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, index % 2 === 0 ? 8 : -8, 0],
        }}
        transition={{
          duration: 6 + index,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
        className="w-full h-full rounded-full border-2 border-gray-900/10 dark:border-gray-100/10"
      />
    </motion.div>
  );
}

interface ParallaxSectionDecorProps {
  variant?: 'dots' | 'lines';
  className?: string;
}

export function ParallaxSectionDecor({ variant = 'dots', className = '' }: ParallaxSectionDecorProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.6, 0.3]);

  return (
    <motion.div
      style={{ y, opacity }}
      className={`absolute pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {variant === 'dots' ? (
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-sage-400/40 dark:bg-sage-500/30"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {[100, 80, 60].map((w) => (
            <div
              key={w}
              style={{ width: w }}
              className="h-0.5 bg-sage-400/30 dark:bg-sage-500/25 rounded-full"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}

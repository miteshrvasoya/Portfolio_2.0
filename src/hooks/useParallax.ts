import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject } from 'react';

interface ParallaxOptions {
  offset?: [string, string];
  speed?: number;
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  { offset = ['start end', 'end start'], speed = 0.5 }: ParallaxOptions = {}
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ['start end', 'end start'],
  });

  return useTransform(scrollYProgress, [0, 1], [speed * -80, speed * 80]);
}

export function useHeroParallax(speed = 0.5): MotionValue<number> {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 800], [0, speed * -200]);
}

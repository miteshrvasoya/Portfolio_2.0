import { motion } from 'framer-motion';
import { Braces, Brain, Code2, CreditCard, Database, Gauge, Layers, Wrench } from 'lucide-react';
import { techStack } from '../data/portfolio';
import { fadeUp, staggerContainer } from '../utils/motion';
import { Section, SectionHeading } from './SectionHeading';

const icons = {
  languages: Code2,
  backend: Braces,
  databases: Database,
  infra: Layers,
  payments: CreditCard,
  observability: Gauge,
  ai: Brain,
  tooling: Wrench,
} as const;

const tones = ['text-syn-blue', 'text-syn-green', 'text-syn-purple', 'text-syn-orange'];

export function TechStack() {
  return (
    <Section id="stack" alt>
      <SectionHeading
        index="02"
        command="cat stack.json | jq"
        title="Tech stack"
        description="The tools I reach for to design, ship and operate backend systems in production."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {techStack.map((group, gi) => {
          const Icon = icons[group.file];
          const tone = tones[gi % tones.length];
          return (
            <motion.div key={group.file} variants={fadeUp} className="panel panel-hover overflow-hidden">
              <div className="panel-header">
                <Icon size={14} className={tone} />
                <span className="text-content-secondary">{group.file}.json</span>
                <span className="ml-auto">{group.items.length}</span>
              </div>
              <div className="p-4 font-mono text-[0.8rem] leading-6">
                <span className="text-content-muted">[</span>
                <ul className="pl-4">
                  {group.items.map((item, i) => (
                    <li key={item}>
                      <span className="text-syn-string">"{item}"</span>
                      {i < group.items.length - 1 && <span className="text-content-muted">,</span>}
                    </li>
                  ))}
                </ul>
                <span className="text-content-muted">]</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

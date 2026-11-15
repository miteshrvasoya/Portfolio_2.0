import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';

export function Education() {
  return (
    <section className="px-4 pb-20 sm:px-6 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="panel mx-auto max-w-6xl overflow-hidden"
      >
        <div className="panel-header">
          <GraduationCap size={14} className="text-syn-orange" />
          <span>education.yml</span>
        </div>
        <div className="grid gap-6 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="font-mono text-sm leading-7">
            <div>
              <span className="text-syn-blue">degree</span>
              <span className="text-content-muted">: </span>
              <span className="font-sans text-lg font-semibold text-content-primary">{education.degree}</span>
            </div>
            <div>
              <span className="text-syn-blue">school</span>
              <span className="text-content-muted">: </span>
              <span className="text-content-secondary">{education.institution}</span>
            </div>
            <div>
              <span className="text-syn-blue">when</span>
              <span className="text-content-muted">: </span>
              <span className="text-content-secondary">
                {education.period} · {education.location}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-syn-blue">focus</span>
              <span className="text-content-muted">:</span>
              {education.coursework.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-syn-green/40 bg-syn-green/10 px-5 py-4 text-center font-mono">
            <div className="text-2xl font-bold text-syn-green">8.38</div>
            <div className="text-xs text-content-muted">/ 10 CGPA</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

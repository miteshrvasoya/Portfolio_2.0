import { motion } from 'framer-motion';
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { profile } from '../data/portfolio';
import { Section, SectionHeading, WindowDots } from './SectionHeading';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    { icon: Mail, key: 'email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, key: 'phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: Github, key: 'github', value: 'miteshrvasoya', href: profile.github },
    { icon: Linkedin, key: 'linkedin', value: 'mitesh-vasoya', href: profile.linkedin },
    { icon: MapPin, key: 'location', value: profile.location, href: null },
  ];

  return (
    <Section id="contact" alt>
      <SectionHeading
        index="06"
        command="./contact.sh --hire"
        title="Let's build something"
        description="I'm open to backend and full-stack roles — especially in fintech, SaaS and developer tools. My inbox is always open."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="panel flex flex-col p-6"
        >
          <p className="font-mono text-xs text-content-muted">{'// reach me via'}</p>
          <ul className="mt-4 space-y-1">
            {channels.map(({ icon: Icon, key, value, href }) => {
              const content = (
                <>
                  <Icon size={16} className="shrink-0 text-syn-blue" />
                  <span className="w-20 shrink-0 font-mono text-xs text-content-muted">{key}</span>
                  <span className="truncate font-mono text-sm text-content-primary">{value}</span>
                </>
              );
              return (
                <li key={key}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-surface-muted"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-2 py-2.5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <button onClick={copyEmail} className="btn-ghost mt-6 w-full lg:mt-auto">
            {copied ? <Check size={15} className="text-syn-green" /> : <Copy size={15} />}
            {copied ? 'copied to clipboard' : 'copy email'}
          </button>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="panel overflow-hidden"
        >
          <div className="panel-header">
            <WindowDots />
            <span className="ml-2">POST /api/hello</span>
          </div>
          <div className="space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs text-syn-blue">name</span>
                <input
                  className="field"
                  placeholder="Ada Lovelace"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-xs text-syn-blue">email</span>
                <input
                  type="email"
                  className="field"
                  placeholder="ada@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block font-mono text-xs text-syn-blue">message</span>
              <textarea
                rows={5}
                className="field resize-none"
                placeholder="Tell me about the role or project…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-xs text-content-muted">
                {sent ? (
                  <span className="text-syn-green">200 OK — opening your mail client…</span>
                ) : (
                  'response time: usually < 24h'
                )}
              </span>
              <button type="submit" className="btn-primary">
                <Send size={15} />
                send
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

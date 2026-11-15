import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { experience, profile, projects, techStack } from '../../data/portfolio';

type Entry = { id: number; cmd: string; out: React.ReactNode };

const suggestions = ['help', 'whoami', 'ls projects', 'cat tryk', 'resume', 'sudo hire-me'];

const scrollTo = (id: string) =>
  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 450);

const Muted = ({ children }: { children: React.ReactNode }) => (
  <span className="text-content-muted">{children}</span>
);

export function InteractiveShell() {
  const { toggleTheme } = useTheme();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' });
  }, [entries]);

  const commands: Record<string, { desc: string; run: () => React.ReactNode }> = {
    help: {
      desc: 'list available commands',
      run: () => (
        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-0.5">
          {Object.entries(commands)
            .filter(([k]) => !k.startsWith('sudo') && k !== 'ls' && k !== 'cat')
            .map(([k, c]) => (
              <span key={k} className="contents">
                <span className="text-syn-green">{k}</span>
                <Muted>{c.desc}</Muted>
              </span>
            ))}
        </div>
      ),
    },
    whoami: {
      desc: 'who is this guy?',
      run: () => (
        <span>
          <span className="text-content-primary">{profile.name}</span> — software engineer @{' '}
          <span className="text-syn-purple">eVitalRx</span>, {profile.location}. Builds payment infra by day,{' '}
          <span className="text-syn-blue">Tryk</span> by night.
        </span>
      ),
    },
    projects: {
      desc: 'list my projects',
      run: () => {
        scrollTo('projects');
        return (
          <div>
            {projects.map((p) => (
              <div key={p.slug}>
                <span className="text-syn-blue">{p.slug.padEnd(11, ' ')}</span>
                <Muted>{p.tagline}</Muted>
                {p.featured && <span className="text-syn-yellow"> ★</span>}
              </div>
            ))}
          </div>
        );
      },
    },
    tryk: {
      desc: 'my flagship personal project',
      run: () => (
        <span>
          <span className="text-syn-yellow">★ Tryk</span> — AI customer-support platform. Multi-tenant, knowledge
          ingestion, embeddable widget. <Muted>(psst — it&apos;s the chat bubble on this page)</Muted>{' '}
          <a href="https://tryk.in" target="_blank" rel="noopener noreferrer" className="text-syn-blue underline">
            tryk.in ↗
          </a>
        </span>
      ),
    },
    experience: {
      desc: 'git log of my career',
      run: () => {
        scrollTo('experience');
        return (
          <div>
            {experience.map((c) => (
              <div key={c.hash}>
                <span className="text-syn-yellow">{c.hash}</span> {c.title} <Muted>@ {c.company}</Muted>
              </div>
            ))}
          </div>
        );
      },
    },
    stack: {
      desc: 'tools I use',
      run: () => (
        <div>
          {techStack.slice(0, 5).map((g) => (
            <div key={g.file}>
              <span className="text-syn-purple">{g.file.padEnd(14, ' ')}</span>
              <Muted>{g.items.slice(0, 4).join(', ')}</Muted>
            </div>
          ))}
        </div>
      ),
    },
    resume: {
      desc: 'download my resume',
      run: () => {
        const a = document.createElement('a');
        a.href = profile.resume;
        a.download = '';
        a.click();
        return <span className="text-syn-green">↓ downloading resume.pdf …</span>;
      },
    },
    contact: {
      desc: 'get in touch',
      run: () => {
        scrollTo('contact');
        return (
          <span>
            <a href={`mailto:${profile.email}`} className="text-syn-blue underline">
              {profile.email}
            </a>{' '}
            <Muted>· jumping to contact form…</Muted>
          </span>
        );
      },
    },
    theme: {
      desc: 'toggle light / dark',
      run: () => {
        toggleTheme();
        return <span className="text-syn-green">✓ theme switched</span>;
      },
    },
    clear: { desc: 'clear the screen', run: () => null },
    ls: { desc: '', run: () => commands.projects.run() },
    cat: { desc: '', run: () => commands.tryk.run() },
    'sudo hire-me': {
      desc: '',
      run: () => {
        scrollTo('contact');
        return (
          <span>
            <span className="text-syn-green">[sudo] access granted.</span> Great choice. Opening a direct line… 🚀
          </span>
        );
      },
    },
  };

  const run = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;
    setHistory((h) => [cmd, ...h].slice(0, 30));
    setCursor(-1);
    setValue('');
    const key = cmd.toLowerCase();
    if (key === 'clear') {
      setEntries([]);
      return;
    }
    const base = key.startsWith('sudo') ? key : key.split(/\s+/)[0];
    const handler = commands[key] ?? commands[base];
    const out = handler ? (
      handler.run()
    ) : key.startsWith('sudo') ? (
      <span className="text-syn-red">mitesh is not in the sudoers file. try: sudo hire-me</span>
    ) : (
      <span>
        <span className="text-syn-red">zsh: command not found: {cmd}</span> <Muted>— try `help`</Muted>
      </span>
    );
    setEntries((e) => [...e.slice(-6), { id: ++idRef.current, cmd, out }]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') run(value);
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(cursor + 1, history.length - 1);
      if (history[next] !== undefined) {
        setCursor(next);
        setValue(history[next]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = cursor - 1;
      setCursor(next);
      setValue(next >= 0 ? history[next] : '');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = Object.keys(commands).find((c) => c.startsWith(value.toLowerCase()) && value);
      if (match) setValue(match);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    }
  };

  return (
    <div
      className="panel w-full overflow-hidden text-left shadow-2xl shadow-syn-blue/5"
      onClick={() => inputRef.current?.focus()}
    >
      {entries.length > 0 && (
        <div
          ref={logRef}
          className="max-h-60 space-y-3 overflow-y-auto border-b border-line px-4 py-4 font-mono text-[0.78rem] leading-relaxed text-content-secondary sm:px-5 sm:text-sm"
          aria-live="polite"
        >
          {entries.map((e) => (
            <div key={e.id}>
              <div className="text-content-primary">
                <span className="text-syn-green">➜</span> <span className="text-syn-blue">~</span> {e.cmd}
              </div>
              {e.out && <div className="mt-1 whitespace-pre-wrap">{e.out}</div>}
            </div>
          ))}
        </div>
      )}

      <label className="flex items-center gap-2 px-4 py-3.5 font-mono text-sm sm:px-5 sm:text-base">
        <span className="shrink-0 text-syn-green">➜</span>
        <span className="shrink-0 text-syn-blue">~</span>
        <span className="sr-only">Type a command</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="type 'help' and press enter…"
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          className="min-w-0 flex-1 bg-transparent text-content-primary caret-syn-green placeholder:text-content-muted/70 focus:outline-none"
        />
        <kbd className="hidden shrink-0 rounded border border-line px-1.5 py-0.5 text-[0.65rem] text-content-muted sm:inline">
          ↵ enter
        </kbd>
      </label>

      <div className="flex gap-2 overflow-x-auto border-t border-line bg-surface-muted/60 px-4 py-2.5 sm:px-5 [scrollbar-width:none]">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={(e) => {
              e.stopPropagation();
              run(s);
            }}
            className="shrink-0 rounded-md border border-line bg-surface-elevated px-2.5 py-1 font-mono text-xs text-content-secondary transition-colors hover:border-syn-green/60 hover:text-syn-green"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { id: 'about', file: 'about.md' },
  { id: 'stack', file: 'stack.json' },
  { id: 'experience', file: 'experience.log' },
  { id: 'projects', file: 'projects/' },
  { id: 'blog', file: 'blog.mdx' },
  { id: 'contact', file: 'contact.sh' },
];

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-line bg-surface/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center font-mono text-sm font-semibold"
          aria-label="Back to top"
        >
          <span className="text-syn-green">mitesh</span>
          <span className="text-content-muted">@</span>
          <span className="text-syn-blue">dev</span>
          <span className="text-content-muted">:~$</span>
          <span className="ml-1 inline-block h-4 w-2 animate-blink bg-content-primary" />
        </button>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className={`relative rounded-md px-3 py-1.5 font-mono text-[0.8rem] transition-colors ${
                    isActive
                      ? 'text-content-primary'
                      : 'text-content-muted hover:text-content-primary'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-md border border-line bg-surface-elevated"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.file}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/Mitesh_Vasoya_Software_Engineer_Resume.pdf"
            download
            className="btn-ghost hidden !px-3 !py-2 !text-xs sm:inline-flex"
          >
            resume.pdf
          </a>
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle colour theme">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="icon-btn lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line px-4 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className="flex w-full items-center gap-3 py-3 font-mono text-sm text-content-secondary hover:text-content-primary"
                >
                  <span className="text-content-muted">{String(i + 1).padStart(2, '0')}</span>
                  {link.file}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

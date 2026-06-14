import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        backgroundColor: theme === 'dark'
          ? scrolled ? 'rgba(17, 24, 20, 0.92)' : 'rgba(17, 24, 20, 0.6)'
          : undefined,
      }}
      className={`sticky top-0 z-50 border-b-2 border-gray-900 dark:border-gray-100 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/5 dark:shadow-black/20' : ''
      } ${theme === 'light' ? (scrolled ? 'bg-surface/95' : 'bg-surface/70') : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.02 }}
          className="font-display font-semibold text-lg md:text-xl tracking-tight text-content-primary"
        >
          Mitesh Vasoya
        </motion.button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => scrollToSection(link.id)}
              className="nav-link relative px-3 py-2 rounded-sm transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 bg-sage-600 dark:bg-sage-400 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={toggleTheme}
          whileHover={{ scale: 1.05, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center bg-surface-elevated hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors neo-card-sm"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>
    </motion.nav>
  );
}

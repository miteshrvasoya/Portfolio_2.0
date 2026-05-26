import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-gray-900 dark:border-gray-100 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          Mitesh Vasoya
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
          <button onClick={() => scrollToSection('about')} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('blog')} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            Blog
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
            Contact
          </button>
        </div>

        <button
          onClick={toggleTheme}
          className="w-12 h-12 border-2 border-gray-900 dark:border-gray-100 flex items-center justify-center hover:bg-sage-200 dark:hover:bg-sage-800 transition-colors"
          style={{ boxShadow: '4px 4px 0px currentColor' }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

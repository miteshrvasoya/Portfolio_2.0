import { AlertCircle, Check, GitBranch } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { profile } from '../data/portfolio';

export function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-center sm:flex-row sm:px-6 sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-content-primary">{profile.name}</p>
          <p className="mt-1 text-sm text-content-muted">Software engineer · building systems that don't break.</p>
        </div>
        <p className="font-mono text-xs text-content-muted">
          © {new Date().getFullYear()} {profile.name} · built with React, TypeScript &amp; Tailwind
        </p>
      </div>

      {/* IDE-style status bar */}
      <div className="border-t border-line bg-surface-muted">
        <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-hidden whitespace-nowrap px-4 py-1.5 font-mono text-[0.68rem] text-content-muted sm:px-6">
          <span className="inline-flex items-center gap-1 text-syn-blue">
            <GitBranch size={11} /> main
          </span>
          <span className="inline-flex items-center gap-1">
            <Check size={11} className="text-syn-green" /> build passing
          </span>
          <span className="hidden items-center gap-1 sm:inline-flex">
            <AlertCircle size={11} /> 0 errors, 0 warnings
          </span>
          <span className="ml-auto hidden md:inline">UTF-8</span>
          <span className="hidden md:inline">TypeScript React</span>
          <span>theme: {theme}</span>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import {
  Volume2,
  VolumeX,
  Moon,
  Sun,
  Activity
} from 'lucide-react';
import { playClickSound } from '../../utils/audio';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  isMuted: boolean;
  onToggleMute: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  isMuted,
  onToggleMute,
  onScrollToSection
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-200/80 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Subtitle */}
        <div
          onClick={() => onScrollToSection('hero-section')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="p-2 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 dark:text-white">
                AI Doctor Simulator
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 hidden sm:inline-block">
                Science Fair '26
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 -mt-0.5 hidden md:block">
              Learn How AI Recognizes Patterns
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <button
            onClick={() => { playClickSound(); onScrollToSection('simulation-section'); }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            ⚡ Start Simulation
          </button>
          <button
            onClick={() => { playClickSound(); onScrollToSection('theory-section'); }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            🔬 How AI Learns
          </button>
          <button
            onClick={() => { playClickSound(); onScrollToSection('comparison-section'); }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            🩺 AI vs Doctor
          </button>
          <button
            onClick={() => { playClickSound(); onScrollToSection('dataset-section'); }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            💾 150 Dataset Records
          </button>
          <button
            onClick={() => { playClickSound(); onScrollToSection('quiz-section'); }}
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer"
          >
            🏆 AI Quiz
          </button>
        </nav>

        {/* Action Controls (Theme + Audio) */}
        <div className="flex items-center gap-2">
          {/* Audio Toggle */}
          <button
            onClick={onToggleMute}
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-blue-500" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import {
  Award,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-slate-800 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        {/* Exhibition Note */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
            <Award className="w-4 h-4" /> 8th Standard National Science Fair
          </span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Theme: Artificial Intelligence, Data Patterns & Ethics</span>
        </div>

        {/* Big Disclaimer in Footer */}
        <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-[11px] md:text-xs text-amber-900 dark:text-amber-200 leading-relaxed space-y-1">
          <strong className="block uppercase font-bold text-amber-800 dark:text-amber-300">
            ⚠️ Strict Educational Disclaimer:
          </strong>
          <p>
            AI Doctor Simulator is a synthetic simulation created exclusively for academic exhibitions to explain K-Nearest Neighbors and pattern recognition algorithms. It does not provide real diagnostic services. Always consult certified healthcare professionals for all real-world medical questions.
          </p>
        </div>

        <p className="text-[11px] text-slate-400 dark:text-slate-500">
          Built with React 19, TypeScript, Tailwind CSS, and Framer Motion &bull; 100% Offline Educational Tool
        </p>
      </div>
    </footer>
  );
};

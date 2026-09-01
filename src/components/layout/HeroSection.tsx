import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  Play
} from 'lucide-react';
import { BrainCanvas } from '../animations/BrainCanvas';
import { playClickSound } from '../../utils/audio';

interface HeroSectionProps {
  onStartSimulation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartSimulation }) => {
  return (
    <section id="hero-section" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Brain Canvas Particles */}
      <div className="absolute inset-0 opacity-25 dark:opacity-40">
        <BrainCanvas />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        {/* Exhibition Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          8th Standard National Science Fair Demonstration
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            AI Doctor <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 bg-clip-text text-transparent">Simulator</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Learn How Artificial Intelligence Recognizes Patterns From Data
          </p>
        </motion.div>

        {/* Short Explanatory Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Discover how machine learning algorithms compare fictional symptoms against 150 training vectors, compute probabilistic confidence, and why real human doctors are always indispensable.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={() => {
              playClickSound();
              onStartSimulation();
            }}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm md:text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3 cursor-pointer group"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Start Interactive Simulation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto"
        >
          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <span className="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400 block font-mono">
              150
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Training Records
            </span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <span className="text-2xl md:text-3xl font-black text-teal-600 dark:text-teal-400 block font-mono">
              16
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Symptom Features
            </span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <span className="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-400 block font-mono">
              10
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Pattern Clusters
            </span>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-center">
            <span className="text-2xl md:text-3xl font-black text-amber-600 dark:text-amber-400 block font-mono">
              100%
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Offline Educational
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Network, Sparkles, CheckCircle2 } from 'lucide-react';
import { playScanPulseSound } from '../../utils/audio';
import { BrainCanvas } from '../animations/BrainCanvas';

interface ThinkingOverlayProps {
  onComplete: () => void;
}

const STEPS = [
  { id: 1, label: 'Analyzing Symptom Vector Inputs...', icon: Search, detail: 'Converting symptoms into binary embedding arrays' },
  { id: 2, label: 'Searching 150 Fictional Training Records...', icon: Cpu, detail: 'Querying historical dataset in local memory' },
  { id: 3, label: 'Recognizing Multi-Dimensional Patterns...', icon: Network, detail: 'Executing K-Nearest Neighbors (KNN) distance math' },
  { id: 4, label: 'Calculating Probabilistic Confidence...', icon: Sparkles, detail: 'Balancing Cosine & Jaccard similarity metrics' },
  { id: 5, label: 'Generating Educational Prediction Output...', icon: CheckCircle2, detail: 'Synthesizing transparent explanation breakdown' },
];

export const ThinkingOverlay: React.FC<ThinkingOverlayProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 2;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const stepIdx = Math.min(STEPS.length - 1, Math.floor((progress / 100) * STEPS.length));
    if (stepIdx !== currentStepIndex) {
      setCurrentStepIndex(stepIdx);
      playScanPulseSound(stepIdx + 1);
    }
  }, [progress, currentStepIndex]);

  const activeStep = STEPS[currentStepIndex];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4">
      {/* Background Neural Canvas */}
      <div className="absolute inset-0 opacity-40">
        <BrainCanvas isAnalyzing={true} />
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative z-10 max-w-lg w-full glass-panel p-6 md:p-8 rounded-3xl border border-blue-500/30 text-center shadow-2xl overflow-hidden"
      >
        {/* Glow orb */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />

        {/* Pulsing Icon */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-blue-500/30 rounded-full blur-lg"
          />
          <div className="relative p-4 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/40">
            <ActiveIcon className="w-10 h-10 animate-pulse" />
          </div>
        </div>

        {/* Step Title & Subtitle */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {activeStep.label}
        </h3>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-mono mb-6">
          {activeStep.detail}
        </p>

        {/* Animated Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-3 mb-4 overflow-hidden p-0.5 border border-slate-300 dark:border-slate-700">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        {/* Step indicator pills */}
        <div className="flex items-center justify-center gap-2">
          {STEPS.map((s, idx) => (
            <div
              key={s.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentStepIndex
                  ? 'w-6 bg-blue-500 shadow-sm shadow-blue-500'
                  : idx < currentStepIndex
                  ? 'w-2 bg-teal-500'
                  : 'w-2 bg-slate-300 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>

        <div className="mt-6 text-[11px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">
          Stage {currentStepIndex + 1} of 5 &bull; {progress}% Synthesized
        </div>
      </motion.div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  Cpu,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';
import { playClickSound } from '../../utils/audio';

export const AiVsDoctorSection: React.FC = () => {
  const aiMistakes = [
    {
      title: 'Insufficient or Missing Data',
      subtitle: 'When the algorithm has never seen a symptom combination',
      description:
        'If a training set has zero records linking sneezing with stomach ache, the AI might falsely classify the patient into an unrelated category because it has no reference points.',
      example: 'Example: An algorithm trained only on winter data misidentifying summer tropical fevers.'
    },
    {
      title: 'Dataset Bias & Skewed Training',
      subtitle: 'When historical examples favor one demographic',
      description:
        'If 90% of training cases are from adults aged 20-40, the AI may misjudge how symptoms present differently in young children or elderly seniors.',
      example: 'Example: Children often show abdominal pain during chest infections, which confuse text models.'
    },
    {
      title: 'Lack of Real-World Context',
      subtitle: 'Algorithms do not know travel history or lifestyle',
      description:
        'A human doctor asks: "Did you travel recently? What did you eat yesterday? Are you under stress?" An AI only sees the list of checked boxes without contextual backstory.',
      example: 'Example: Misinterpreting altitude sickness fatigue as a viral infection.'
    },
    {
      title: 'Overfitting to Statistical Flukes',
      subtitle: 'Memorizing noise instead of medical biology',
      description:
        'If an unusual patient in the training set happened to have a headache while spraining an ankle, the algorithm might falsely learn that headaches cause ankle injuries!',
      example: 'Example: Spurious correlations that fail completely in real clinic trials.'
    }
  ];

  const [expandedMistake, setExpandedMistake] = useState<number | null>(null);

  const toggleMistake = (idx: number) => {
    playClickSound();
    setExpandedMistake(expandedMistake === idx ? null : idx);
  };

  return (
    <div className="space-y-12">
      {/* AI vs Human Doctor Comparison Table */}
      <div className="glass-panel p-6 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            National Science Exhibition Comparison Matrix
          </span>
          <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            AI Algorithm vs. Human Doctor
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Why machine learning is a powerful assistant for calculating patterns, but will <strong>never replace</strong> real healthcare professionals.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {/* AI Column Card */}
          <div className="glass-card p-6 rounded-3xl border-2 border-blue-500/30 dark:border-blue-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                <Cpu className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">AI Pattern Model</h4>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Probabilistic Pattern Engine</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs md:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span><strong>Instant Speed:</strong> Evaluates thousands of vector comparisons in milliseconds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <span><strong>Pattern Extraction:</strong> Finds statistical correlations across massive fictional datasets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span><strong>No Physical Exam:</strong> Cannot palpate, auscultate, or observe clinical signs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                <span><strong>Vulnerable to Bias:</strong> Fails when faced with unseen or mixed medical symptoms.</span>
              </li>
            </ul>
          </div>

          {/* Real Doctor Column Card */}
          <div className="glass-card p-6 rounded-3xl border-2 border-emerald-500/30 dark:border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Real Human Physician</h4>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Clinical Diagnostics & Empathy</p>
              </div>
            </div>

            <ul className="space-y-3 text-xs md:text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span><strong>Holistic Clinical Examination:</strong> Physical touch, stethoscope, eye reflexes, skin tones.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span><strong>Diagnostic Confirmation:</strong> Orders and interprets lab bloodwork, biopsies, and imaging.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span><strong>Context & Empathy:</strong> Understands lifestyle, emotional stress, and personal fears.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <span><strong>Ethical Responsibility:</strong> Bound by the Hippocratic oath and legal care standards.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mistakes AI Can Make Interactive Accordion */}
      <div className="glass-panel p-6 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            Critical Science Lesson
          </span>
          <h3 className="text-xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            4 Major Mistakes Machine Learning Models Make
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Click each card to discover why AI can never be treated as an autonomous medical doctor:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {aiMistakes.map((mistake, idx) => {
            const isExpanded = expandedMistake === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleMistake(idx)}
                className={`glass-card p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'border-rose-500/50 shadow-lg shadow-rose-500/10'
                    : 'border-slate-200/80 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-sm md:text-base text-slate-900 dark:text-white">
                      {mistake.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {mistake.subtitle}
                    </p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isExpanded ? 'transform rotate-180 text-rose-500' : ''
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-300"
                    >
                      <p>{mistake.description}</p>
                      <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 text-xs font-mono">
                        💡 {mistake.example}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

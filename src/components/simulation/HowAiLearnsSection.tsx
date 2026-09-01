import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Sliders,
  Network,
  GitCompare,
  CheckCircle2,
  ArrowRight,
  Lightbulb
} from 'lucide-react';

export const HowAiLearnsSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Training Dataset',
      desc: '150 fictional symptom profiles are prepared as mathematical vectors.',
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Feature Extraction',
      desc: 'Symptoms are converted into binary numbers [1, 0, 1] with importance weights.',
      icon: Sliders,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      step: '03',
      title: 'Pattern Space',
      desc: 'The algorithm clusters vectors in multi-dimensional geometric space.',
      icon: Network,
      color: 'from-teal-500 to-emerald-500'
    },
    {
      step: '04',
      title: 'K-Nearest Distance',
      desc: 'When a new patient arrives, distance formulas find the 7 closest records.',
      icon: GitCompare,
      color: 'from-emerald-500 to-purple-500'
    },
    {
      step: '05',
      title: 'Confidence Output',
      desc: 'Probabilities are generated based on majority vote and vector overlap.',
      icon: CheckCircle2,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <div className="glass-panel p-6 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          The Science Behind the Simulation
        </span>
        <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
          How Machine Learning Actually Works
        </h3>
        <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
          Step-by-step pipeline showing how raw data transforms into pattern predictions:
        </p>
      </div>

      {/* Horizontal / Grid Step Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
        {steps.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 relative space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-slate-400">
                    {item.step}
                  </span>
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-md`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* 8th Grade Science Fair Summary Callout */}
      <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-teal-500/10 to-purple-500/10 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs md:text-sm text-slate-700 dark:text-slate-300">
        <div className="p-3 bg-blue-500 text-white rounded-2xl shrink-0">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div>
          <strong className="text-slate-900 dark:text-white block mb-0.5">
            Key Science Fair Takeaway for Visitors:
          </strong>
          <span>
            "AI is not magic or a thinking brain. It is <strong>mathematical pattern recognition</strong> applied to past training examples."
          </span>
        </div>
      </div>
    </div>
  );
};

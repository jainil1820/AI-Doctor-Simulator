import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Cpu,
  FileDown,
  RotateCcw,
  Sliders,
  CheckCircle,
  XCircle,
  BrainCircuit,
  Share2
} from 'lucide-react';
import type { MatchResult, SymptomDef } from '../../types';
import { SYMPTOMS_LIST } from '../../data/fictionalDataset';
import { ConfidenceGauge } from '../charts/ConfidenceGauge';
import { SymptomRadarChart, CategoryBarChart } from '../charts/PatternCharts';
import { DisclaimerBanner } from '../layout/DisclaimerBanner';
import { playClickSound, playSuccessChime } from '../../utils/audio';

interface PredictionScreenProps {
  result: MatchResult;
  selectedSymptomIds: string[];
  onReset: () => void;
  onModifySymptoms: (newSymptoms: string[]) => void;
  onExportPdf: () => void;
}

export const PredictionScreen: React.FC<PredictionScreenProps> = ({
  result,
  selectedSymptomIds,
  onReset,
  onModifySymptoms,
  onExportPdf
}) => {
  const [activeTab, setActiveTab] = useState<'reasoning' | 'neighbors' | 'radar' | 'whatif'>('reasoning');
  const [copiedShare, setCopiedShare] = useState(false);

  React.useEffect(() => {
    playSuccessChime();
  }, []);

  const symptomMap = new Map<string, SymptomDef>(SYMPTOMS_LIST.map((s) => [s.id, s]));

  const handleShare = () => {
    playClickSound();
    navigator.clipboard.writeText(
      `AI Doctor Simulator (Science Fair): Selected ${selectedSymptomIds.length} fictional symptoms -> AI Predicted "${result.category}" with ${result.confidence}% pattern confidence.`
    );
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  const handleWhatIfToggle = (symId: string) => {
    playClickSound();
    if (selectedSymptomIds.includes(symId)) {
      onModifySymptoms(selectedSymptomIds.filter((id) => id !== symId));
    } else {
      onModifySymptoms([...selectedSymptomIds, symId]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
      id="prediction-report-container"
    >
      {/* Top Banner Disclaimer */}
      <DisclaimerBanner variant="card" />

      {/* Main Glass Hero Card */}
      <div className="glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden border border-blue-500/20 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Prediction Title & Key Category */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700">
              <BrainCircuit className="w-3.5 h-3.5" />
              Machine Learning Pattern Result
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
              {result.category}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              {result.reason}
            </p>

            {/* Matched Symptom Badges */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                Active Symptom Inputs ({selectedSymptomIds.length})
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedSymptomIds.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">No symptoms selected (Healthy Baseline)</span>
                ) : (
                  selectedSymptomIds.map((id) => {
                    const sym = symptomMap.get(id);
                    const isMatched = result.matchedSymptoms.includes(id);
                    return (
                      <span
                        key={id}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-medium border ${
                          isMatched
                            ? 'bg-blue-50 dark:bg-blue-950/80 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {isMatched ? <CheckCircle className="w-3 h-3 text-blue-500" /> : <XCircle className="w-3 h-3 text-slate-400" />}
                        {sym?.name || id}
                      </span>
                    );
                  })
                )}
              </div>
            </div>

            {/* Action Buttons Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onReset}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Try Another Patient
              </button>

              <button
                onClick={onExportPdf}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/25 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                Export Science Fair Report
              </button>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                {copiedShare ? 'Copied Summary!' : 'Copy Summary'}
              </button>
            </div>
          </div>

          {/* Right: Confidence Gauge and Probability Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50/60 dark:bg-slate-900/60 rounded-3xl border border-slate-200/80 dark:border-slate-800">
            <ConfidenceGauge confidence={result.confidence} size={210} />
            <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 mt-4 max-w-xs">
              Based on mathematical similarity to 150 fictional training vectors. Not a clinical measurement.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => { playClickSound(); setActiveTab('reasoning'); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'reasoning'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          🔍 Transparent AI Reasoning
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('neighbors'); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'neighbors'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          👥 Top Fictional Training Matches (KNN)
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('radar'); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'radar'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          📊 Vector Breakdown & Probabilities
        </button>

        <button
          onClick={() => { playClickSound(); setActiveTab('whatif'); }}
          className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
            activeTab === 'whatif'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          🎛️ Interactive "What-If" Explorer
        </button>
      </div>

      {/* Tab 1: Transparent Reasoning */}
      {activeTab === 'reasoning' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <Cpu className="w-5 h-5 text-blue-500" />
              How the Machine Learning Algorithm Decided
            </h3>
            <ul className="space-y-3">
              {result.reasonBullets.map((bullet, idx) => (
                <li key={idx} className="text-xs md:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <TrendingUp className="w-5 h-5 text-teal-500" />
              Why Probabilities Fluctuate
            </h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              In machine learning, confidence is never 100% because real-world symptoms overlap. For example, a <strong>cough</strong> can appear in Cold, Flu, Allergy, and Respiratory datasets.
            </p>
            <div className="p-3.5 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-800/60 text-xs text-blue-900 dark:text-blue-200">
              💡 <strong>Science Fair Takeaway:</strong> AI calculates statistical overlap between symptom groups. Unlike a human doctor who feels your pulse and listens with a stethoscope, AI only sees numbers!
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 2: KNN Nearest Fictional Cases */}
      {activeTab === 'neighbors' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="text-xs text-slate-500 dark:text-slate-400">
            K-Nearest Neighbors searches the 150-record training database to discover which fictional patient cases are most mathematically similar:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.topSimilarCases.map((c, i) => (
              <div
                key={c.caseCode}
                className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {c.caseCode}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {c.similarityPercent}% Match
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {c.category}
                  </h4>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    Rank #{i + 1} Closest Training Vector
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider block mb-1">
                    Symptoms in Record:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {c.symptoms.map((symId) => (
                      <span
                        key={symId}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {symptomMap.get(symId)?.name || symId}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Tab 3: Radar Chart & Category Scores */}
      {activeTab === 'radar' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="glass-card p-6 rounded-3xl space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Multi-Dimensional Symptom Vector
            </h3>
            <SymptomRadarChart data={result.radarVectorData} />
            <div className="flex items-center justify-center gap-4 text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-blue-500 rounded-sm" /> Current Selection
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-emerald-500 rounded-sm" /> Archetype Profile
              </span>
            </div>
          </div>

          <div className="glass-card p-6 rounded-3xl space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Probability Distribution Across Categories
            </h3>
            <CategoryBarChart scores={result.allCategoryScores} />
            <p className="text-[11px] text-slate-400 text-center">
              Shows how the AI apportioned similarity weights across rival categories.
            </p>
          </div>
        </motion.div>
      )}

      {/* Tab 4: What-If Live Explorer */}
      {activeTab === 'whatif' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 rounded-3xl space-y-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-purple-500" />
                Live "What-If" Sensitivity Experiment
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Toggle a symptom below to instantly observe how the AI model recalibrates its confidence and category in real time!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 pt-2">
            {SYMPTOMS_LIST.map((sym) => {
              const active = selectedSymptomIds.includes(sym.id);
              return (
                <button
                  key={sym.id}
                  onClick={() => handleWhatIfToggle(sym.id)}
                  className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                    active
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="text-center line-clamp-1">{sym.name}</span>
                  <span className="text-[10px] opacity-75">{active ? '✓ Active' : '+ Add'}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

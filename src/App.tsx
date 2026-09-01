import { useState, useEffect } from 'react';
import {
  Sparkles,
  Dices,
  Cpu
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { SYMPTOMS_LIST, PRESET_PATIENT_CASES, AI_GLOSSARY_ITEMS } from './data/fictionalDataset';
import type { MatchResult } from './types';
import { runAiSimulation } from './services/aiEngine';
import { exportReportAsPdf } from './utils/pdfExport';
import { setAudioMuted, playClickSound } from './utils/audio';

// Components
import { DisclaimerBanner } from './components/layout/DisclaimerBanner';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/layout/HeroSection';
import { Footer } from './components/layout/Footer';
import { SymptomCard } from './components/simulation/SymptomCard';
import { ThinkingOverlay } from './components/simulation/ThinkingOverlay';
import { PredictionScreen } from './components/simulation/PredictionScreen';
import { HowAiLearnsSection } from './components/simulation/HowAiLearnsSection';
import { AiVsDoctorSection } from './components/simulation/AiVsDoctorSection';
import { DatasetExplorer } from './components/simulation/DatasetExplorer';
import { ScienceFairQuiz } from './components/simulation/ScienceFairQuiz';
import { DrByteChatbot } from './components/ui/DrByteChatbot';

export function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Simulation state
  const [selectedSymptomIds, setSelectedSymptomIds] = useState<string[]>(['fever', 'cough', 'fatigue']);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Dark mode class sync
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    playClickSound();
    setIsDark(!isDark);
  };

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    setAudioMuted(next);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Symptom toggling
  const handleToggleSymptom = (id: string) => {
    setSelectedSymptomIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectPreset = (symptoms: string[]) => {
    playClickSound();
    setSelectedSymptomIds(symptoms);
  };

  const handleRandomPatient = () => {
    playClickSound();
    const count = Math.floor(Math.random() * 4) + 1; // 1 to 4 symptoms
    const shuffled = [...SYMPTOMS_LIST].sort(() => 0.5 - Math.random());
    const randomPicked = shuffled.slice(0, count).map((s) => s.id);
    setSelectedSymptomIds(randomPicked);
  };

  const handleStartAnalysis = () => {
    playClickSound();
    setIsAnalyzing(true);
  };

  const handleAnalysisComplete = () => {
    const simulatedResult = runAiSimulation(selectedSymptomIds);
    setResult(simulatedResult);
    setIsAnalyzing(false);
    // Smooth scroll down to prediction view
    setTimeout(() => {
      scrollToSection('prediction-view');
    }, 100);
  };

  const handleResetSimulation = () => {
    playClickSound();
    setResult(null);
    setSelectedSymptomIds([]);
    scrollToSection('simulation-section');
  };

  const handleExportPdf = () => {
    if (result) {
      playClickSound();
      exportReportAsPdf(result, selectedSymptomIds);
    }
  };

  const filteredSymptoms = SYMPTOMS_LIST.filter(
    (s) => filterCategory === 'All' || s.category === filterCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-500 selection:text-white transition-colors duration-300">
      {/* Sticky Mandatory Exhibition Disclaimer */}
      <DisclaimerBanner variant="banner" />

      {/* Main Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onScrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <HeroSection onStartSimulation={() => scrollToSection('simulation-section')} />

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 flex-1 w-full">
        {/* SIMULATION CONSOLE */}
        <section id="simulation-section" className="space-y-8 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Interactive Science Lab Console
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Select Patient Symptoms
            </h2>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Pick one or more fictional symptoms to test how the KNN pattern matching algorithm classifies the case:
            </p>
          </div>

          {/* Preset Buttons Bar */}
          <div className="glass-panel p-4 md:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                Quick Science Fair Presets:
              </span>
              <button
                onClick={handleRandomPatient}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
              >
                <Dices className="w-3.5 h-3.5 text-purple-500" />
                Random Case Generator
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {PRESET_PATIENT_CASES.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset.symptoms)}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-blue-50 dark:bg-slate-800 dark:hover:bg-blue-950/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {preset.title}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            {['All', 'General', 'Respiratory', 'Digestive', 'Sensory/Skin', 'Emergency-Style'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setFilterCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 16 Interactive Symptom Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {filteredSymptoms.map((sym) => (
              <SymptomCard
                key={sym.id}
                symptom={sym}
                isSelected={selectedSymptomIds.includes(sym.id)}
                onToggle={handleToggleSymptom}
                disabled={isAnalyzing}
              />
            ))}
          </div>

          {/* Analyze Button Container */}
          <div className="flex flex-col items-center justify-center pt-4 space-y-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleStartAnalysis}
              disabled={isAnalyzing}
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-base md:text-lg shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 flex items-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Cpu className="w-6 h-6 animate-pulse" />
              <span>Run 5-Stage AI Pattern Analysis</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 font-mono">
                {selectedSymptomIds.length} Selected
              </span>
            </motion.button>

            <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
              ⚡ Evaluates 150 training vectors via multi-dimensional Cosine & Jaccard distance
            </span>
          </div>
        </section>

        {/* PREDICTION SCREEN (Rendered after analysis) */}
        <div id="prediction-view">
          {result && (
            <PredictionScreen
              result={result}
              selectedSymptomIds={selectedSymptomIds}
              onReset={handleResetSimulation}
              onModifySymptoms={(newSymptoms) => {
                setSelectedSymptomIds(newSymptoms);
                const updated = runAiSimulation(newSymptoms);
                setResult(updated);
              }}
              onExportPdf={handleExportPdf}
            />
          )}
        </div>

        {/* THEORY & PIPELINE LAB */}
        <section id="theory-section" className="scroll-mt-20">
          <HowAiLearnsSection />
        </section>

        {/* AI VS DOCTOR MATRIX & FAILURE MODES */}
        <section id="comparison-section" className="scroll-mt-20">
          <AiVsDoctorSection />
        </section>

        {/* 150 TRAINING DATASET EXPLORER */}
        <section id="dataset-section" className="scroll-mt-20">
          <DatasetExplorer />
        </section>

        {/* INTERACTIVE GLOSSARY */}
        <section className="glass-panel p-6 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
          <div className="space-y-1 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Science Fair Study Guide
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Essential AI Vocabulary
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
              Key machine learning terms explained for 8th-grade science students:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {AI_GLOSSARY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.term}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.definition}
                </p>
                <div className="text-[11px] p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-400 italic">
                  💡 {item.fairExample}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SCIENCE FAIR QUIZ */}
        <section id="quiz-section" className="scroll-mt-20">
          <ScienceFairQuiz />
        </section>
      </main>

      {/* Floating Chatbot AI Mentor Dr. Byte */}
      <DrByteChatbot />

      {/* 5-Stage Animated Thinking Overlay */}
      <AnimatePresence>
        {isAnalyzing && (
          <ThinkingOverlay onComplete={handleAnalysisComplete} />
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

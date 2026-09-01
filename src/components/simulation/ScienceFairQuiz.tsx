import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SCIENCE_FAIR_QUIZ } from '../../data/fictionalDataset';
import { playClickSound, playSuccessChime } from '../../utils/audio';

export const ScienceFairQuiz: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = SCIENCE_FAIR_QUIZ[currentIdx];

  const handleSelect = (optIdx: number) => {
    if (showExplanation || isFinished) return;
    playClickSound();
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
    setShowExplanation(true);

    if (optIdx === currentQ.correctIndex) {
      // Trigger mini confetti burst
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}
    }
  };

  const handleNext = () => {
    playClickSound();
    setShowExplanation(false);
    if (currentIdx + 1 < SCIENCE_FAIR_QUIZ.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
      playSuccessChime();
      try {
        confetti({
          particleCount: 120,
          spread: 100,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  const handleReset = () => {
    playClickSound();
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsFinished(false);
  };

  // Calculate score
  const score = Object.entries(selectedAnswers).reduce((acc, [qIdx, ansIdx]) => {
    const q = SCIENCE_FAIR_QUIZ[Number(qIdx)];
    return ansIdx === q.correctIndex ? acc + 1 : acc;
  }, 0);

  return (
    <div className="glass-panel p-6 md:p-10 rounded-3xl relative overflow-hidden border border-purple-500/20 shadow-xl">
      <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            <Award className="w-4 h-4" />
            Science Fair Interactive Challenge
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Test Your AI Knowledge
          </h3>
        </div>

        {!isFinished && (
          <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800">
            Question {currentIdx + 1} / {SCIENCE_FAIR_QUIZ.length}
          </span>
        )}
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Topic: {currentQ.conceptTag}
            </span>
            <h4 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100">
              {currentQ.question}
            </h4>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt: string, idx: number) => {
              const isChosen = selectedAnswers[currentIdx] === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700';

              if (showExplanation) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 shadow-md shadow-emerald-500/20';
                } else if (isChosen && !isCorrect) {
                  btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={showExplanation}
                  className={`p-4 rounded-2xl text-left text-xs md:text-sm font-medium border transition-all duration-200 flex items-start gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border border-current/30 shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {showExplanation && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                  {showExplanation && isChosen && !isCorrect && <XCircle className="w-5 h-5 text-rose-500 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs md:text-sm text-purple-900 dark:text-purple-200 space-y-3"
              >
                <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300">
                  <Sparkles className="w-4 h-4" />
                  Science Concept Explained:
                </div>
                <p>{currentQ.explanation}</p>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 rounded-xl text-xs md:text-sm font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-md transition-all cursor-pointer"
                  >
                    {currentIdx + 1 < SCIENCE_FAIR_QUIZ.length ? 'Next Question →' : 'See Final Score 🏆'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        /* Result Screen */
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-6 space-y-6"
        >
          <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-xl shadow-purple-500/30">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
              Quiz Completed! Score: {score} / {SCIENCE_FAIR_QUIZ.length}
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              {score === 5
                ? '🌟 Perfect Master Score! You understand pattern recognition, probabilities, and the vital role of human doctors!'
                : score >= 3
                ? '🎉 Great job! You have a solid grasp of how AI learns from fictional training data.'
                : 'Keep exploring the simulator cards and learning how pattern algorithms work!'}
            </p>
          </div>

          {/* Certificate Badge */}
          <div className="p-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 border border-purple-500/30 rounded-2xl max-w-md mx-auto text-xs text-slate-700 dark:text-slate-300">
            🎓 <strong>Official Science Fair Badge Earned:</strong> "Junior AI Pattern Analyst"
          </div>

          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Retake AI Quiz
          </button>
        </motion.div>
      )}
    </div>
  );
};

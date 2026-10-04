import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Leaf,
  ShieldCheck,
  BookOpen,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import {
  getDiseaseSolution,
  getAllDiseaseSolutions,
  type DiseaseSolutionRecord
} from '../../data/diseaseSolutions';
import type { IllnessCategory } from '../../types';
import { playClickSound } from '../../utils/audio';

interface DiseaseSupportiveCareProps {
  primaryCategory: IllnessCategory | string;
  differentialCategories?: { category: IllnessCategory; percentage: number }[];
  className?: string;
}

export const DiseaseSupportiveCare: React.FC<DiseaseSupportiveCareProps> = ({
  primaryCategory,
  differentialCategories = [],
  className = ''
}) => {
  // Selected category/condition for supportive care view
  const [selectedConditionName, setSelectedConditionName] = useState<string>(primaryCategory);
  const [isBrowseModalOpen, setIsBrowseModalOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Keep synced if primary category changes
  React.useEffect(() => {
    setSelectedConditionName(primaryCategory);
  }, [primaryCategory]);

  const activeSolution: DiseaseSolutionRecord | null = getDiseaseSolution(selectedConditionName);

  // Available condition choices from the AI assessment (primary + any differential categories > 10%)
  const highConfidenceDifferentials = differentialCategories
    .filter((c) => c.category !== primaryCategory && c.percentage >= 10)
    .slice(0, 3);

  const allSolutions = getAllDiseaseSolutions();
  const filteredAll = allSolutions.filter((d) =>
    searchTerm.trim() === ''
      ? true
      : d.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.nameGujarati.includes(searchTerm) ||
        d.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`glass-panel p-6 md:p-8 rounded-3xl border border-emerald-500/30 dark:border-emerald-500/20 shadow-xl bg-gradient-to-br from-white/90 via-emerald-50/30 to-teal-50/20 dark:from-slate-900/90 dark:via-emerald-950/20 dark:to-teal-950/10 space-y-6 ${className}`}
      id="disease-supportive-care-section"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20 dark:border-emerald-800/40 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
            <Leaf className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Supportive Care / આરોગ્ય સહાય</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            <span>આરોગ્ય સહાય અને ઘરેલુ ઉપચાર</span>
          </h3>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
            Traditional supportive care & home remedies sourced directly from verified Gujarati health documentation.
          </p>
        </div>

        {/* Quick Knowledge Base Browser Button */}
        <button
          onClick={() => {
            playClickSound();
            setIsBrowseModalOpen(!isBrowseModalOpen);
          }}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 transition-all cursor-pointer shrink-0"
        >
          <BookOpen className="w-4 h-4" />
          <span>Browse 30-Disease Source Guide</span>
        </button>
      </div>

      {/* Differential Condition Switcher (Task 8: Multiple Disease Results) */}
      {highConfidenceDifferentials.length > 0 && (
        <div className="space-y-2 pt-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
            Differential Assessment Results — Select to View Mapped Remedies:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                playClickSound();
                setSelectedConditionName(primaryCategory);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedConditionName === primaryCategory
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
              }`}
            >
              ★ Primary: {primaryCategory}
            </button>
            {highConfidenceDifferentials.map((diff) => (
              <button
                key={diff.category}
                onClick={() => {
                  playClickSound();
                  setSelectedConditionName(diff.category);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedConditionName === diff.category
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                }`}
              >
                {diff.category} ({diff.percentage}%)
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Solution Display Card */}
      {activeSolution ? (
        <div className="space-y-6">
          {/* Active Condition Banner */}
          <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-emerald-500/20 dark:border-emerald-800/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  Condition / સ્થિતિ:
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 font-medium">
                  {activeSolution.categoryTag || 'Ayurvedic Support'}
                </span>
              </div>
              <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
                {activeSolution.nameGujarati}
              </div>
              <div className="text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400">
                English: <span className="text-slate-800 dark:text-slate-200">{activeSolution.nameEnglish}</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 sm:text-right">
              <span className="font-semibold block text-slate-700 dark:text-slate-300">Verified Source:</span>
              <span>{activeSolution.source}</span>
            </div>
          </div>

          {/* Solutions / Remedies Grid (Task 7 & 9) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-500" />
                <span>Source Home Remedies / પ્રાકૃતિક ઉપચાર ({activeSolution.solutions.length})</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeSolution.solutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="glass-card p-5 rounded-2xl border border-emerald-500/20 dark:border-emerald-800/40 bg-white/90 dark:bg-slate-900/80 hover:border-emerald-500/40 hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    {/* Remedy Title Header */}
                    <div className="flex items-start gap-2.5">
                      <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-black text-base text-slate-900 dark:text-white leading-snug">
                          {item.titleGujarati}
                        </h5>
                        <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 block">
                          {item.titleEnglish}
                        </span>
                      </div>
                    </div>

                    {/* Source Gujarati Description */}
                    <div className="p-3 bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40">
                      <p className="text-xs md:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
                        {item.descriptionGujarati}
                      </p>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
                    <span>Remedy #{idx + 1}</span>
                    <span className="italic">Gujarati Source Archive</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Missing Mapping Fallback Card (Task 11) */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-3 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/60 rounded-2xl text-amber-700 dark:text-amber-300 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm md:text-base text-amber-900 dark:text-amber-200">
                Supportive-care information for this condition is not available in the current source dataset.
              </h4>
              <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300/90 font-medium mt-0.5">
                આ સ્થિતિ માટે હાલના સ્ત્રોત ડેટામાં supportive-care માહિતી ઉપલબ્ધ નથી.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            The AI model predicted "{selectedConditionName}". Fictional control patterns (such as healthy baseline or non-specific low-confidence combinations) do not have corresponding supportive-care entries in the 30-condition source documentation.
          </p>
        </motion.div>
      )}

      {/* Safety / Educational Disclaimer Banner (Task 10) */}
      <div className="p-4 md:p-5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-300/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>શૈક્ષણિક અને આરોગ્ય સૂચના / Safety & Educational Disclaimer</span>
        </div>
        <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-200 font-medium">
          <strong>ગુજરાતી:</strong> "મહત્વપૂર્ણ સૂચના: આ માહિતી શૈક્ષણિક અને supportive-care માર્ગદર્શન માટે છે. આ એપ તબીબી નિદાન, દવા અથવા ડૉક્ટરની સારવારનો વિકલ્પ નથી. ગંભીર અથવા સતત લક્ષણો હોય તો યોગ્ય તબીબી નિષ્ણાતની સલાહ લો."
        </p>
        <p className="text-[11px] md:text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          <strong>English:</strong> "Important: This information is provided for educational/supportive-care purposes only. It is not a medical diagnosis, prescription, or substitute for professional medical care."
        </p>
      </div>

      {/* Full 30-Disease Knowledge Base Browser Modal */}
      <AnimatePresence>
        {isBrowseModalOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 border-t border-emerald-500/20 dark:border-emerald-800/40 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <span>30-Disease Source Knowledge Base Explorer</span>
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Search and inspect remedies for any condition from the uploaded Gujarati reference documents:
                </p>
              </div>

              <input
                type="text"
                placeholder="Filter conditions (e.g. પથરી, Kidney, Fever)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3.5 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full sm:w-64 text-slate-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 max-h-80 overflow-y-auto p-1">
              {filteredAll.map((item, i) => {
                const isSelected = selectedConditionName === item.id || selectedConditionName === item.nameEnglish;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      playClickSound();
                      setSelectedConditionName(item.id);
                    }}
                    className={`p-3 rounded-xl text-left transition-all border flex items-start justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold leading-tight">
                        {i + 1}. {item.nameGujarati}
                      </div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {item.nameEnglish}
                      </div>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 mt-1 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Search,
} from 'lucide-react';
import { FICTIONAL_TRAINING_DATASET, SYMPTOMS_LIST } from '../../data/fictionalDataset';
import type { IllnessCategory } from '../../types';
import { playClickSound } from '../../utils/audio';

export const DatasetExplorer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAge, setSelectedAge] = useState<string>('All');

  const categories: (IllnessCategory | 'All')[] = [
    'All',
    'Flu-like Illness',
    'Cold-like Illness',
    'Respiratory Pattern',
    'Digestive Pattern',
    'Allergy Pattern',
    'Viral-like Pattern',
    'Skin-related Pattern',
    'Mixed Symptoms',
    'Healthy Pattern',
    'Low Confidence Pattern'
  ];

  const symptomMap = new Map(SYMPTOMS_LIST.map((s) => [s.id, s.name]));

  const filteredData = FICTIONAL_TRAINING_DATASET.filter((rec) => {
    const matchesCategory = selectedCategory === 'All' || rec.illnessCategory === selectedCategory;
    const matchesAge = selectedAge === 'All' || rec.ageGroup === selectedAge;
    const matchesSearch =
      searchTerm === '' ||
      rec.caseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.illnessCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.symptoms.some((s) => (symptomMap.get(s) || s).toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesAge && matchesSearch;
  });

  return (
    <div className="glass-panel p-6 md:p-10 rounded-3xl space-y-6 border border-slate-200/80 dark:border-slate-800 shadow-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Science Exhibition Dataset Library
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Explore 150 Fictional Training Records
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            See the exact training samples the AI uses to calculate nearest-neighbor pattern clusters!
          </p>
        </div>

        <div className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-300 dark:border-teal-800">
          Showing {filteredData.length} of {FICTIONAL_TRAINING_DATASET.length} Vectors
        </div>
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search symptoms, case codes..."
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white"
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => {
            playClickSound();
            setSelectedCategory(e.target.value);
          }}
          aria-label="Filter by illness category"
          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white cursor-pointer"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              Category: {cat}
            </option>
          ))}
        </select>

        {/* Age Group Filter */}
        <select
          value={selectedAge}
          onChange={(e) => {
            playClickSound();
            setSelectedAge(e.target.value);
          }}
          aria-label="Filter by age group"
          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900 dark:text-white cursor-pointer"
        >
          <option value="All">Age Group: All Cohorts</option>
          <option value="Child">Child</option>
          <option value="Teen">Teen</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
      </div>

      {/* Dataset Table / Grid */}
      <div className="max-h-96 overflow-y-auto rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
        <div className="grid grid-cols-1 divide-y divide-slate-100 dark:divide-slate-800 text-xs">
          {filteredData.map((rec) => (
            <div
              key={rec.id}
              className="p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                    {rec.caseCode}
                  </span>
                  <span className="font-semibold text-teal-600 dark:text-teal-400">
                    {rec.illnessCategory}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {rec.ageGroup} &bull; {rec.seasonRecorded}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {rec.symptoms.length === 0 ? (
                    <span className="text-[10px] text-slate-400 italic">No symptoms (Control)</span>
                  ) : (
                    rec.symptoms.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/40"
                      >
                        {symptomMap.get(s) || s}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider">
                  Weight
                </span>
                <span className="font-mono font-bold text-slate-800 dark:text-slate-200">
                  {(rec.confidenceWeight * 100).toFixed(0)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

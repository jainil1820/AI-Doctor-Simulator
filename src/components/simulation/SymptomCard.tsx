import React from 'react';
import {
  Thermometer,
  Wind,
  BatteryLow,
  Droplets,
  Brain,
  Activity,
  AlertCircle,
  Waves,
  Flame,
  Sparkles,
  ShieldAlert,
  HeartPulse,
  Crosshair,
  RotateCcw,
  UtensilsCrossed,
  Flower2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { SymptomDef } from '../../types';
import { playToggleSound } from '../../utils/audio';

// Dynamic icon mapping
const ICON_MAP: Record<string, LucideIcon> = {
  Thermometer,
  Wind,
  BatteryLow,
  Droplets,
  Brain,
  Activity,
  AlertCircle,
  Waves,
  Flame,
  Sparkles,
  ShieldAlert,
  HeartPulse,
  Lungs: Crosshair,
  RotateCcw,
  UtensilsCrossed,
  Flower2
};

interface SymptomCardProps {
  symptom: SymptomDef;
  isSelected: boolean;
  onToggle: (id: string) => void;
  disabled?: boolean;
}

export const SymptomCard: React.FC<SymptomCardProps> = ({
  symptom,
  isSelected,
  onToggle,
  disabled = false
}) => {
  const IconComponent = ICON_MAP[symptom.iconName] || Activity;

  const handleClick = () => {
    if (disabled) return;
    playToggleSound(!isSelected);
    onToggle(symptom.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-pressed={isSelected}
      aria-label={`Select symptom: ${symptom.name}`}
      className={`group relative text-left p-4 rounded-2xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
        isSelected
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30 scale-[1.02] border-2 border-blue-400'
          : 'glass-card hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 hover:shadow-lg hover:scale-[1.01] border border-slate-200/80 dark:border-slate-700/60'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {/* Category Pill */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span
          className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full transition-colors ${
            isSelected
              ? 'bg-white/20 text-white border border-white/30'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
          }`}
        >
          {symptom.category}
        </span>

        {/* Selected Indicator Dot */}
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isSelected
              ? 'bg-white shadow-[0_0_8px_#ffffff]'
              : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-400'
          }`}
        />
      </div>

      {/* Icon and Name */}
      <div className="flex items-center gap-3">
        <div
          className={`p-2.5 rounded-xl transition-all duration-300 ${
            isSelected
              ? 'bg-white/20 text-white'
              : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60'
          }`}
        >
          <IconComponent className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-sm md:text-base leading-snug">
            {symptom.name}
          </h3>
          <p
            className={`text-xs mt-0.5 line-clamp-1 transition-colors ${
              isSelected ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            {symptom.description}
          </p>
        </div>
      </div>

      {/* Feature Weight Indicator Badge (For AI education) */}
      <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[11px]">
        <span className={isSelected ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500'}>
          Feature Weight:
        </span>
        <span className={`font-mono font-bold ${isSelected ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`}>
          {(symptom.typicalWeight * 100).toFixed(0)}%
        </span>
      </div>
    </button>
  );
};

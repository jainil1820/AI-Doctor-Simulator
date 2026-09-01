import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface DisclaimerBannerProps {
  variant?: 'floating' | 'banner' | 'card';
  className?: string;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({
  variant = 'banner',
  className = ''
}) => {
  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40 bg-amber-500/90 dark:bg-amber-600/90 text-white backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-amber-300/40 text-xs flex items-start gap-3 transition-all animate-bounce duration-1000 ${className}`}>
        <ShieldAlert className="w-5 h-5 text-amber-100 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold uppercase tracking-wider block text-[11px] text-amber-100">
            ⚠️ Educational Simulation Only
          </span>
          <span>
            This web app does <strong>NOT</strong> diagnose diseases. Predictions are based on fictional 8th-standard science fair training examples. Always consult a certified physician.
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-amber-500/10 border border-amber-500/30 dark:border-amber-400/20 rounded-2xl p-4 md:p-5 flex items-start gap-3.5 text-amber-900 dark:text-amber-200 ${className}`}>
        <div className="p-2 bg-amber-500/20 rounded-xl text-amber-700 dark:text-amber-300 shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <div className="text-xs md:text-sm leading-relaxed space-y-1">
          <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5 uppercase tracking-wide">
            <span>⚠️ Official Exhibition Disclaimer</span>
          </div>
          <p>
            This application is purely an educational demonstration of <strong>Machine Learning Pattern Recognition</strong> for an 8th-grade science fair.
          </p>
          <p className="text-amber-800/80 dark:text-amber-300/80 text-[11px] md:text-xs">
            Predictions are calculated against a fictional dataset. Never use computer simulations for medical diagnosis. Always consult qualified healthcare professionals.
          </p>
        </div>
      </div>
    );
  }

  // Default sticky top banner
  return (
    <div className={`bg-amber-500 text-amber-950 dark:bg-amber-500 dark:text-amber-950 text-xs md:text-sm font-medium py-2 px-4 shadow-sm text-center border-b border-amber-600/30 flex items-center justify-center gap-2 ${className}`}>
      <ShieldAlert className="w-4 h-4 shrink-0" />
      <span>
        <strong>⚠️ Educational Simulation Only:</strong> This app does NOT diagnose diseases. Predictions are based on fictional science fair training examples. Always consult a real doctor.
      </span>
    </div>
  );
};

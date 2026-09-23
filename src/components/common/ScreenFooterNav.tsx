import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  onBack?: () => void;
  backLabel?: string;
  backIcon?: React.ReactNode;
  onNext?: () => void;
  nextLabel?: string;
  nextIcon?: React.ReactNode;
  className?: string;
}

export const ScreenFooterNav: React.FC<Props> = ({
  onBack,
  backLabel = 'Atrás',
  backIcon,
  onNext,
  nextLabel = 'Siguiente',
  nextIcon,
  className = ''
}) => {
  if (!onBack && !onNext) return null;

  return (
    <div className={`pt-3 border-t border-coffee-200/80 flex items-center gap-2.5 ${className}`}>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="flex-1 min-h-[46px] py-2.5 bg-white hover:bg-coffee-100 text-coffee-800 border border-coffee-300 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
        >
          {backIcon || <ArrowLeft className="w-4 h-4 text-coffee-600 shrink-0" />}
          <span className="truncate">{backLabel}</span>
        </button>
      )}

      {onNext && (
        <button
          type="button"
          onClick={onNext}
          className="flex-1 min-h-[46px] py-2.5 bg-coffee-800 hover:bg-coffee-900 text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
        >
          <span className="truncate">{nextLabel}</span>
          {nextIcon || <ArrowRight className="w-4 h-4 text-amber-200 shrink-0" />}
        </button>
      )}
    </div>
  );
};

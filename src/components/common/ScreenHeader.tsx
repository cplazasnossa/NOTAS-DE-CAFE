import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  category?: string;
  showBack?: boolean;
  onBack?: () => void;
  backLabel?: string;
  icon?: React.ReactNode;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  title,
  subtitle,
  category,
  showBack = false,
  onBack,
  backLabel = 'Atrás',
  icon
}) => {
  return (
    <div className="space-y-2 pb-2">
      {/* Top Back Button Bar (if not home) */}
      {showBack && onBack && (
        <div className="flex items-center justify-between pb-1 border-b border-coffee-100">
          <button
            type="button"
            onClick={onBack}
            className="min-h-[44px] min-w-[44px] flex items-center gap-2 text-xs font-bold text-coffee-800 hover:text-coffee-950 transition-colors py-2 pr-3 -ml-1 cursor-pointer active:scale-95"
            aria-label={`Volver atrás a ${backLabel}`}
          >
            <div className="w-8 h-8 rounded-xl bg-white border border-coffee-200 flex items-center justify-center text-coffee-700 shadow-2xs">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span>{backLabel}</span>
          </button>
        </div>
      )}

      {/* Main Title & Icon */}
      <div className="flex items-start justify-between gap-3 pt-1">
        <div className="space-y-0.5 flex-1">
          {category && (
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-leaf-800 bg-leaf-100/90 px-2.5 py-0.5 rounded-full border border-leaf-500/20 mb-1">
              {category}
            </span>
          )}
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-coffee-950 leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-coffee-600 leading-normal">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div className="w-11 h-11 rounded-2xl bg-white border border-coffee-200 text-coffee-800 flex items-center justify-center shrink-0 shadow-xs">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

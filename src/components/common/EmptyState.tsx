import React from 'react';
import { LucideIcon, HelpCircle } from 'lucide-react';

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = HelpCircle,
  title,
  description,
  actionText,
  actionLabel,
  onAction
}) => {
  const buttonText = actionText || actionLabel;

  return (
    <div className="p-6 bg-white rounded-3xl border border-coffee-200 text-center space-y-3 my-2">
      <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 text-coffee-800 border border-amber-200/60 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-bold text-coffee-950">{title}</h4>
        <p className="text-xs text-coffee-600 max-w-xs mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      {buttonText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="min-h-[44px] px-4 py-2 bg-coffee-800 hover:bg-coffee-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

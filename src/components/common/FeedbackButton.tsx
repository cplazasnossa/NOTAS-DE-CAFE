import React from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface FeedbackButtonProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
  loadingText?: string;
  successText?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  type = 'submit',
  onClick,
  isLoading = false,
  isSuccess = false,
  loadingText = 'Guardando en la finca...',
  successText = '¡Guardado correctamente!',
  children,
  className = '',
  variant = 'primary',
  disabled = false
}) => {
  const baseStyle =
    'w-full min-h-[48px] rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer select-none active:scale-[0.98] shadow-md';

  const variantStyle =
    variant === 'primary'
      ? 'bg-coffee-900 hover:bg-coffee-950 text-white shadow-coffee-900/20'
      : 'bg-white hover:bg-coffee-100 text-coffee-900 border border-coffee-300';

  if (isSuccess) {
    return (
      <button
        type="button"
        disabled
        className={`${baseStyle} bg-leaf-700 text-white border-none animate-fade-in ${className}`}
      >
        <CheckCircle2 className="w-5 h-5 text-amber-200 shrink-0" />
        <span>{successText}</span>
      </button>
    );
  }

  if (isLoading) {
    return (
      <button
        type="button"
        disabled
        className={`${baseStyle} bg-coffee-800 text-white/90 cursor-wait ${className}`}
      >
        <Loader2 className="w-5 h-5 animate-spin text-amber-200 shrink-0" />
        <span>{loadingText}</span>
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

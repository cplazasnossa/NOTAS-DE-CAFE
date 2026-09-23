import React from 'react';
import { AlertCircle, WifiOff } from 'lucide-react';

interface FormAlertProps {
  message: string;
  type?: 'error' | 'offline' | 'info';
  onDismiss?: () => void;
}

export const FormAlert: React.FC<FormAlertProps> = ({
  message,
  type = 'error',
  onDismiss
}) => {
  const isOffline = type === 'offline';

  return (
    <div
      role="alert"
      className={`p-3.5 rounded-2xl text-xs font-semibold flex items-start gap-2.5 animate-fade-in border ${
        isOffline
          ? 'bg-amber-50 text-amber-950 border-amber-200'
          : 'bg-rose-50 text-rose-950 border-rose-200'
      }`}
    >
      {isOffline ? (
        <WifiOff className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
      )}
      <div className="flex-1 leading-snug">
        <span>{message}</span>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="text-coffee-500 hover:text-coffee-900 font-bold text-sm px-1 cursor-pointer"
        >
          ✕
        </button>
      )}
    </div>
  );
};

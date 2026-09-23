import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface Props {
  variant?: 'compact' | 'pill' | 'dark';
}

export const LanguageSwitcher: React.FC<Props> = ({ variant = 'compact' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'dark') {
    return (
      <div className="inline-flex items-center p-0.5 rounded-xl bg-[#1C0F0A] border border-[#482818] text-xs">
        <button
          type="button"
          onClick={() => setLanguage('es')}
          className={`px-2 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${
            language === 'es'
              ? 'bg-amber-200 text-[#23140C] shadow-xs'
              : 'text-[#D8B496] hover:text-white'
          }`}
          title="Cambiar a Español"
        >
          <span>ES</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 rounded-lg text-[11px] font-extrabold transition-all cursor-pointer flex items-center gap-1 ${
            language === 'en'
              ? 'bg-amber-200 text-[#23140C] shadow-xs'
              : 'text-[#D8B496] hover:text-white'
          }`}
          title="Switch to English"
        >
          <span>EN</span>
        </button>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-white border border-coffee-200 shadow-xs text-xs font-bold">
        <Globe className="w-3.5 h-3.5 text-coffee-600 ml-1" />
        <button
          type="button"
          onClick={() => setLanguage('es')}
          className={`px-2 py-1 rounded-xl transition-all cursor-pointer ${
            language === 'es'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'text-coffee-600 hover:text-coffee-900'
          }`}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`px-2 py-1 rounded-xl transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'text-coffee-600 hover:text-coffee-900'
          }`}
        >
          EN
        </button>
      </div>
    );
  }

  // Default compact
  return (
    <div className="inline-flex items-center p-0.5 rounded-lg bg-white border border-coffee-200 text-[11px] font-bold shadow-xs">
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
          language === 'es'
            ? 'bg-coffee-800 text-white'
            : 'text-coffee-600 hover:text-coffee-900'
        }`}
        title="Español"
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-coffee-800 text-white'
            : 'text-coffee-600 hover:text-coffee-900'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};

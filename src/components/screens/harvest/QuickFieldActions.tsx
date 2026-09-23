import React from 'react';
import { ScreenId } from '../../../types';
import { DollarSign, Sprout, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface Props {
  onNavigate: (screen: ScreenId) => void;
}

export const QuickFieldActions: React.FC<Props> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="pt-2 border-t border-coffee-200/80 space-y-2.5">
      <div className="flex items-center justify-between px-1">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-coffee-800 block">
            {isEn ? 'Field Actions' : 'Acciones de Campo'}
          </span>
          <p className="text-[11px] text-coffee-500">
            {isEn ? 'Other agronomic notebook logs' : 'Otros registros del cuaderno agronómico'}
          </p>
        </div>
        <span className="text-[10px] font-bold bg-coffee-100 text-coffee-700 px-2 py-0.5 rounded-full">
          {isEn ? 'Shortcuts' : 'Accesos directos'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => onNavigate('SCREEN_11')}
          className="p-2.5 bg-white rounded-2xl border border-coffee-200 text-left hover:border-coffee-600 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-1 min-h-[46px]"
          title={isEn ? "6. Record Cost" : "6. Registrar Costo"}
        >
          <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
            <DollarSign className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-coffee-900 block leading-tight">
              {isEn ? '6. Cost' : '6. Costo'}
            </span>
            <p className="text-[10px] text-coffee-500 truncate">
              {isEn ? 'Wages' : 'Jornales'}
            </p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('SCREEN_17')}
          className="p-2.5 bg-white rounded-2xl border border-coffee-200 text-left hover:border-coffee-600 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-1 min-h-[46px]"
          title={isEn ? "7. Record Activity" : "7. Registrar Actividad"}
        >
          <div className="w-7 h-7 rounded-xl bg-coffee-100 text-coffee-800 flex items-center justify-center shrink-0 group-hover:bg-coffee-800 group-hover:text-white transition-colors">
            <Sprout className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-coffee-900 block leading-tight">
              {isEn ? '7. Activity' : '7. Actividad'}
            </span>
            <p className="text-[10px] text-coffee-500 truncate">
              {isEn ? 'Labor' : 'Labores'}
            </p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('SCREEN_15')}
          className="p-2.5 bg-white rounded-2xl border border-coffee-200 text-left hover:border-coffee-600 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-1 min-h-[46px]"
          title={isEn ? "8. Health & Pests" : "8. Sanidad & Plagas"}
        >
          <div className="w-7 h-7 rounded-xl bg-leaf-100 text-leaf-800 flex items-center justify-center shrink-0 group-hover:bg-leaf-800 group-hover:text-white transition-colors">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-coffee-900 block leading-tight">
              {isEn ? '8. Health' : '8. Sanidad'}
            </span>
            <p className="text-[10px] text-coffee-500 truncate">
              {isEn ? 'Pests' : 'Plagas'}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { ScreenId } from '../../../types';
import { DollarSign, Sprout, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenId) => void;
}

export const QuickFieldActions: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="pt-2 border-t border-coffee-200/80 space-y-2.5">
      <div className="flex items-center justify-between px-1">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-coffee-800 block">
            Acciones de Campo
          </span>
          <p className="text-[11px] text-coffee-500">Otros registros del cuaderno agronómico</p>
        </div>
        <span className="text-[10px] font-bold bg-coffee-100 text-coffee-700 px-2 py-0.5 rounded-full">
          Accesos directos
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => onNavigate('SCREEN_11')}
          className="p-2.5 bg-white rounded-2xl border border-coffee-200 text-left hover:border-coffee-600 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-1 min-h-[46px]"
          title="6. Registrar Costo"
        >
          <div className="w-7 h-7 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
            <DollarSign className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-coffee-900 block leading-tight">
              6. Costo
            </span>
            <p className="text-[10px] text-coffee-500 truncate">Jornales</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('SCREEN_17')}
          className="p-2.5 bg-white rounded-2xl border border-coffee-200 text-left hover:border-coffee-600 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-1 min-h-[46px]"
          title="7. Registrar Actividad"
        >
          <div className="w-7 h-7 rounded-xl bg-coffee-100 text-coffee-800 flex items-center justify-center shrink-0 group-hover:bg-coffee-800 group-hover:text-white transition-colors">
            <Sprout className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-coffee-900 block leading-tight">
              7. Actividad
            </span>
            <p className="text-[10px] text-coffee-500 truncate">Labores</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('SCREEN_15')}
          className="p-2.5 bg-white rounded-2xl border border-coffee-200 text-left hover:border-coffee-600 hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-1 min-h-[46px]"
          title="8. Sanidad & Plagas"
        >
          <div className="w-7 h-7 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center shrink-0 group-hover:bg-rose-700 group-hover:text-white transition-colors">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-coffee-900 block leading-tight">
              8. Sanidad
            </span>
            <p className="text-[10px] text-coffee-500 truncate">Plagas</p>
          </div>
        </button>
      </div>
    </div>
  );
};

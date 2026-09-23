import React from 'react';
import { TrendingUp } from 'lucide-react';

export const BrixMaturityTab: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-coffee-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-leaf-600" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-coffee-800">
            Evolución de Maduración de Cerezas
          </h4>
        </div>
        <span className="text-xs font-bold text-leaf-700">88% Madura</span>
      </div>

      {/* Brix Progress Bar visualization */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px] text-coffee-600 font-medium">
          <span>Semana 38: 19.5° Brix</span>
          <span>Semana 40: 22.0° Brix</span>
          <span className="text-coffee-900 font-bold">Hoy: 24.2° Brix</span>
        </div>
        <div className="w-full h-3.5 bg-coffee-100 rounded-full overflow-hidden flex">
          <div style={{ width: '92%' }} className="bg-gradient-to-r from-amber-600 via-cherry to-coffee-800 h-full rounded-full" />
        </div>
        <div className="flex justify-between text-[10px] text-coffee-500 pt-0.5">
          <span>Pintón temprano (18°)</span>
          <span>Óptimo cosecha selectiva (23°-25°)</span>
          <span>Sobre-maduro (26°+)</span>
        </div>
      </div>

      <div className="bg-parchment p-3 rounded-xl border border-coffee-200 grid grid-cols-2 gap-3 text-xs">
        <div>
          <span className="text-[10px] text-coffee-500 block">Perfil Sensorial Esperado</span>
          <p className="font-bold text-coffee-900">Jazmín, Panela y Té Negro</p>
        </div>
        <div>
          <span className="text-[10px] text-coffee-500 block">Proceso Recomendado</span>
          <p className="font-bold text-coffee-900">Lavado Fermentación 36h</p>
        </div>
      </div>
    </div>
  );
};

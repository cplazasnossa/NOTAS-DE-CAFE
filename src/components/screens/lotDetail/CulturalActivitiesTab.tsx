import React from 'react';
import { Scissors } from 'lucide-react';

export const CulturalActivitiesTab: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-coffee-200 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <Scissors className="w-4 h-4 text-coffee-700" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-coffee-800">
          Historial de Labores Culturales
        </h4>
      </div>

      <div className="space-y-2 text-xs">
        <div className="p-2.5 rounded-xl bg-parchment border border-coffee-200 flex items-start justify-between">
          <div>
            <span className="font-bold text-coffee-900 block">Poda Sanitaria Tipo Roca</span>
            <p className="text-[11px] text-coffee-600 mt-0.5">Renovación de ramas bajeras y deschuponado</p>
            <span className="text-[10px] text-coffee-500">Ejecutado: Mayo 2023 · 4 operarios</span>
          </div>
          <span className="text-[10px] bg-coffee-200 text-coffee-900 font-bold px-2 py-0.5 rounded">
            Completado
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-parchment border border-coffee-200 flex items-start justify-between">
          <div>
            <span className="font-bold text-coffee-900 block">Fertilización Edáfica 17-6-18-2</span>
            <p className="text-[11px] text-coffee-600 mt-0.5">Dosis 90g por árbol en corona</p>
            <span className="text-[10px] text-coffee-500">Ejecutado: Agosto 2024 · 6 operarios</span>
          </div>
          <span className="text-[10px] bg-leaf-100 text-leaf-700 font-bold px-2 py-0.5 rounded">
            Asimilado
          </span>
        </div>
      </div>
    </div>
  );
};

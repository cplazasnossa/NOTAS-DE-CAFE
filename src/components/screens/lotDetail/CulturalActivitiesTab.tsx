import React from 'react';
import { Scissors } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

export const CulturalActivitiesTab: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="bg-white rounded-2xl p-4 border border-coffee-200 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <Scissors className="w-4 h-4 text-coffee-700" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-coffee-800">
          {isEn ? 'Agronomic Labor History' : 'Historial de Labores Culturales'}
        </h4>
      </div>

      <div className="space-y-2 text-xs">
        <div className="p-2.5 rounded-xl bg-parchment border border-coffee-200 flex items-start justify-between">
          <div>
            <span className="font-bold text-coffee-900 block">
              {isEn ? 'Sanitary Stumping Pruning' : 'Poda Sanitaria Tipo Roca'}
            </span>
            <p className="text-[11px] text-coffee-600 mt-0.5">
              {isEn ? 'Lower branches renewal and suckering' : 'Renovación de ramas bajeras y deschuponado'}
            </p>
            <span className="text-[10px] text-coffee-500">
              {isEn ? 'Executed: May 2023 · 4 workers' : 'Ejecutado: Mayo 2023 · 4 operarios'}
            </span>
          </div>
          <span className="text-[10px] bg-coffee-200 text-coffee-900 font-bold px-2 py-0.5 rounded">
            {isEn ? 'Completed' : 'Completado'}
          </span>
        </div>

        <div className="p-2.5 rounded-xl bg-parchment border border-coffee-200 flex items-start justify-between">
          <div>
            <span className="font-bold text-coffee-900 block">
              {isEn ? 'Soil Fertilization 17-6-18-2' : 'Fertilización Edáfica 17-6-18-2'}
            </span>
            <p className="text-[11px] text-coffee-600 mt-0.5">
              {isEn ? 'Dose 90g per tree crown ring' : 'Dosis 90g por árbol en corona'}
            </p>
            <span className="text-[10px] text-coffee-500">
              {isEn ? 'Executed: August 2024 · 6 workers' : 'Ejecutado: Agosto 2024 · 6 operarios'}
            </span>
          </div>
          <span className="text-[10px] bg-leaf-100 text-leaf-700 font-bold px-2 py-0.5 rounded">
            {isEn ? 'Assimilated' : 'Asimilado'}
          </span>
        </div>
      </div>
    </div>
  );
};

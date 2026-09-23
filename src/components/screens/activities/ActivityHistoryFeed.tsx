import React from 'react';
import { CulturalActivity } from '../../../types';
import { Sprout } from 'lucide-react';
import { EmptyState } from '../../common/EmptyState';
import { useLanguage } from '../../../context/LanguageContext';

interface Props {
  activities: CulturalActivity[];
}

export const ActivityHistoryFeed: React.FC<Props> = ({ activities }) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const getActivityLabel = (type: CulturalActivity['type']) => {
    switch (type) {
      case 'Plateo y Desyerbe': return isEn ? 'Weeding & Base Clearing' : 'Plateo y Desyerbe';
      case 'Poda y Manejo Tejidos': return isEn ? 'Pruning & Canopy Care' : 'Poda y Manejo Tejidos';
      case 'Fertilización': return isEn ? 'Fertilization' : 'Fertilización';
      case 'Siembra Sombrío': return isEn ? 'Shade Tree Planting' : 'Siembra Sombrío';
      case 'Mantenimiento Riego': return isEn ? 'Irrigation Maintenance' : 'Mantenimiento Riego';
      default: return type;
    }
  };

  return (
    <div className="space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-coffee-700 block px-1">
        {t.activityRecentTitle}
      </span>

      {activities.length === 0 ? (
        <EmptyState
          icon={Sprout}
          title={isEn ? "No activities recorded" : "Sin actividades registradas"}
          description={isEn
            ? "No agronomic tasks recorded today yet. Log pruning, weeding, or fertilizing above."
            : "Aún no se han anotado labores culturales hoy. Registra podas, plateo o fertilización arriba."}
        />
      ) : (
        <div className="space-y-2">
          {activities.map((act) => (
            <div
              key={act.id}
              className="p-3.5 bg-white rounded-2xl border border-coffee-200 shadow-sm space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-coffee-900 text-sm block">
                    {getActivityLabel(act.type)}
                  </span>
                  <span className="text-coffee-600 text-[11px] font-medium">
                    {act.lotName} · {act.workers} {isEn ? 'workers' : 'operarios'}
                  </span>
                </div>
                <span className="text-xs font-bold text-leaf-700 bg-leaf-100 px-2 py-0.5 rounded">
                  {act.progressPct}%
                </span>
              </div>
              <div className="w-full h-2 bg-coffee-100 rounded-full overflow-hidden">
                <div style={{ width: `${act.progressPct}%` }} className="h-full bg-leaf-600 rounded-full" />
              </div>
              <div className="flex justify-between items-center text-[10px] text-coffee-500 pt-1">
                <span>{isEn ? 'Tools:' : 'Herramientas:'} {act.tools}</span>
                <span>{act.date}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

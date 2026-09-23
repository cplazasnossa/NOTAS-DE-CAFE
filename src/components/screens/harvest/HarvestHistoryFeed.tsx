import React from 'react';
import { HarvestRecord } from '../../../types';
import { Scale } from 'lucide-react';
import { EmptyState } from '../../common/EmptyState';

interface Props {
  records: HarvestRecord[];
}

export const HarvestHistoryFeed: React.FC<Props> = ({ records }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs px-1">
        <span className="font-bold uppercase tracking-wider text-coffee-700">
          Pesajes Registrados Hoy
        </span>
        <span className="text-coffee-500 font-semibold">{records.length} registros</span>
      </div>

      {records.length === 0 ? (
        <EmptyState
          icon={Scale}
          title="Sin pesajes registrados hoy"
          description="Aún no se han anotado viajes de cosecha hoy. Usa el formulario arriba para registrar el primer pesaje."
        />
      ) : (
        <div className="space-y-2">
          {records.slice(0, 4).map((rec) => (
            <div
              key={rec.id}
              className="p-3 bg-white rounded-2xl border border-coffee-200 shadow-sm flex items-center justify-between text-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-coffee-900">{rec.collectorName}</span>
                  <span className="text-[10px] bg-coffee-100 text-coffee-800 px-1.5 py-0.5 rounded font-semibold">
                    {rec.lotName}
                  </span>
                </div>
                <div className="text-[11px] text-coffee-500 mt-0.5 flex items-center gap-2">
                  <span>{rec.time}</span>
                  <span>·</span>
                  <span>{rec.ripePct}% maduras</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-coffee-900 font-mono block">
                  {rec.weightKg} kg
                </span>
                <span className="text-[10px] text-leaf-700 font-bold">
                  {rec.weightArrobas} @
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

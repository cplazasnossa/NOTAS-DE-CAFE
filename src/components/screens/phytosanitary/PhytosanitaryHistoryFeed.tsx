import React from 'react';
import { PhytosanitaryAlert } from '../../../types';
import { ShieldCheck } from 'lucide-react';
import { EmptyState } from '../../common/EmptyState';

interface Props {
  alerts: PhytosanitaryAlert[];
}

export const PhytosanitaryHistoryFeed: React.FC<Props> = ({ alerts }) => {
  return (
    <div className="space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-coffee-700 block px-1">
        Inspecciones Fitosanitarias
      </span>

      {alerts.length === 0 ? (
        <EmptyState
          icon={ShieldCheck}
          title="Sin alertas fitosanitarias"
          description="No hay incidencias de plagas o enfermedades reportadas. Tu cafetal se encuentra en excelente estado."
        />
      ) : (
        <div className="space-y-2">
          {alerts.map((al) => (
            <div
              key={al.id}
              className="p-3.5 bg-white rounded-2xl border border-coffee-200 shadow-sm text-xs space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-coffee-900">{al.pestName}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    al.severity === 'Crítica'
                      ? 'bg-rose-100 text-rose-800'
                      : al.severity === 'Media'
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-leaf-100 text-leaf-800'
                  }`}
                >
                  Incidencia {al.incidencePct}%
                </span>
              </div>
              <p className="text-[11px] text-coffee-600 font-medium">
                {al.lotName} · Muestreo 30 ramas
              </p>
              <p className="text-[11px] text-coffee-700 bg-parchment p-2 rounded-lg border border-coffee-100 mt-1">
                👉 {al.actionRequired}
              </p>
              <span className="text-[10px] text-coffee-400 block pt-0.5">{al.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

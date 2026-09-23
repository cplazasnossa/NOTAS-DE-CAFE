import React from 'react';
import { PhytosanitaryAlert } from '../../../types';
import { ShieldCheck } from 'lucide-react';
import { EmptyState } from '../../common/EmptyState';
import { useLanguage } from '../../../context/LanguageContext';

interface Props {
  alerts: PhytosanitaryAlert[];
}

export const PhytosanitaryHistoryFeed: React.FC<Props> = ({ alerts }) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const translatePest = (pest: string) => {
    switch (pest) {
      case 'Broca del Café': return isEn ? 'Coffee Berry Borer' : 'Broca del Café';
      case 'Roya (Hemileia vastatrix)': return isEn ? 'Coffee Leaf Rust (Hemileia vastatrix)' : 'Roya (Hemileia vastatrix)';
      case 'Mancha de Hierro': return isEn ? 'Brown Eye Spot' : 'Mancha de Hierro';
      case 'Ojo de Gallo': return isEn ? 'American Leaf Spot' : 'Ojo de Gallo';
      default: return pest;
    }
  };

  return (
    <div className="space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-coffee-700 block px-1">
        {t.healthRecentTitle}
      </span>

      {alerts.length === 0 ? (
        <EmptyState
          icon={ShieldCheck}
          title={isEn ? "No pest alerts" : "Sin alertas fitosanitarias"}
          description={isEn
            ? "No pest or disease occurrences reported. Your coffee plantation is in excellent health."
            : "No hay incidencias de plagas o enfermedades reportadas. Tu cafetal se encuentra en excelente estado."}
        />
      ) : (
        <div className="space-y-2">
          {alerts.map((al) => (
            <div
              key={al.id}
              className="p-3.5 bg-white rounded-2xl border border-coffee-200 shadow-sm text-xs space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-coffee-900">{translatePest(al.pestName)}</span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    al.severity === 'Crítica'
                      ? 'bg-rose-100 text-rose-800'
                      : al.severity === 'Media'
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-leaf-100 text-leaf-800'
                  }`}
                >
                  {isEn ? 'Incidence' : 'Incidencia'} {al.incidencePct}%
                </span>
              </div>
              <p className="text-[11px] text-coffee-600 font-medium">
                {al.lotName} · {isEn ? '30 branches sampling' : 'Muestreo 30 ramas'}
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

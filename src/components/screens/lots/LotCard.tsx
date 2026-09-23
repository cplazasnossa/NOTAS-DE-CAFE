import React from 'react';
import { CoffeeLot } from '../../../types';
import { MapPin, ChevronRight, Scale, Droplets } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface Props {
  lot: CoffeeLot;
  index: number;
  onSelect: (lot: CoffeeLot) => void;
  onDirectHarvest: (lot: CoffeeLot) => void;
}

export const LotCard: React.FC<Props> = ({ lot, index, onSelect, onDirectHarvest }) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const formatStatus = (status: CoffeeLot['status']) => {
    if (status === 'En Cosecha') return t.dashHarvestingStatus;
    if (status === 'Óptimo') return t.dashOptimalStatus;
    if (status === 'Mantenimiento') return isEn ? 'Maintenance' : 'Mantenimiento';
    return status;
  };

  return (
    <div
      onClick={() => onSelect(lot)}
      className="bg-white rounded-2xl p-4 border border-coffee-200 shadow-xs hover:border-coffee-500 hover:shadow-md transition-all cursor-pointer space-y-3 active:scale-[0.99]"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2.5">
          <span className="w-6 h-6 rounded-lg bg-coffee-100 text-coffee-800 font-serif font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
            {index + 1}
          </span>
          <div>
            <h4 className="font-bold text-sm text-coffee-900 leading-tight">
              {lot.name}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-coffee-600 mt-0.5">
              <span className="font-semibold text-coffee-800">{lot.variety}</span>
              <span>·</span>
              <span className="flex items-center gap-0.5 text-coffee-500">
                <MapPin className="w-3 h-3" /> {lot.altitudeMsnm} {isEn ? 'masl' : 'msnm'}
              </span>
            </div>
          </div>
        </div>

        <span
          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            lot.status === 'En Cosecha'
              ? 'bg-leaf-100 text-leaf-800 border border-leaf-300'
              : lot.status === 'Óptimo'
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'bg-coffee-100 text-coffee-800'
          }`}
        >
          {formatStatus(lot.status)}
        </span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 bg-parchment p-2.5 rounded-xl border border-coffee-100 text-center">
        <div>
          <span className="text-[10px] text-coffee-500 block">{t.lotCardAreaTrees}</span>
          <span className="text-xs font-bold text-coffee-900">
            {lot.areaHa} ha · {lot.treesCount.toLocaleString()}
          </span>
        </div>
        <div>
          <span className="text-[10px] text-coffee-500 block">{t.lotCardBrix}</span>
          <span className="text-xs font-bold text-amber-800 flex items-center justify-center gap-0.5">
            <Droplets className="w-3 h-3 text-amber-600" /> {lot.brixAverage}°
          </span>
        </div>
        <div>
          <span className="text-[10px] text-coffee-500 block">{t.lotCardFlowering}</span>
          <span className="text-xs font-bold text-leaf-700">
            {lot.floweringPct}%
          </span>
        </div>
      </div>

      {/* Footer Info & Quick Harvest Trigger */}
      <div className="flex items-center justify-between text-[11px] pt-1 border-t border-coffee-100">
        <span className="text-coffee-500 truncate max-w-[150px]">
          {isEn && lot.lastActivity === 'Registro inicial de lote' ? 'Initial lot record' : lot.lastActivity}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDirectHarvest(lot);
            }}
            className="px-2 py-1 bg-coffee-100 hover:bg-coffee-200 text-coffee-900 font-bold rounded-lg text-[10px] flex items-center gap-1 cursor-pointer transition-colors"
            title={isEn ? "Weigh this lot" : "Registrar pesaje para este lote"}
          >
            <Scale className="w-3 h-3 text-coffee-700" />
            <span>{t.lotCardWeighBtn}</span>
          </button>
          <span className="text-xs font-bold text-coffee-700 flex items-center gap-0.5">
            {t.lotCardProfile} <ChevronRight className="w-3.5 h-3.5 text-coffee-400" />
          </span>
        </div>
      </div>
    </div>
  );
};

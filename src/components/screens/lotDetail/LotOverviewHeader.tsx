import React from 'react';
import { CoffeeLot } from '../../../types';
import { MapPin } from 'lucide-react';

interface Props {
  lot: CoffeeLot;
}

export const LotOverviewHeader: React.FC<Props> = ({ lot }) => {
  return (
    <div className="bg-white rounded-3xl p-5 border border-coffee-200 shadow-sm space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-coffee-500 block">
            Variedad y Altura
          </span>
          <h3 className="text-xl font-serif font-bold text-coffee-900">
            {lot.name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-coffee-600 mt-0.5 font-medium">
            <span className="font-bold text-coffee-800">{lot.variety}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-coffee-500" /> {lot.altitudeMsnm} msnm
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-coffee-900 font-serif block">
            {lot.brixAverage}°
          </span>
          <span className="text-[10px] uppercase font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
            Grados Brix
          </span>
        </div>
      </div>

      <p className="text-xs text-coffee-700 leading-relaxed bg-parchment p-3 rounded-xl border border-coffee-100">
        {lot.notes}
      </p>

      {/* Quick specs grid */}
      <div className="grid grid-cols-4 gap-2 text-center text-xs pt-1">
        <div className="bg-white p-2 rounded-xl border border-coffee-200">
          <span className="text-[10px] text-coffee-500 block">Área</span>
          <span className="font-bold text-coffee-900">{lot.areaHa} ha</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-coffee-200">
          <span className="text-[10px] text-coffee-500 block">Densidad</span>
          <span className="font-bold text-coffee-900">5,200/ha</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-coffee-200">
          <span className="text-[10px] text-coffee-500 block">Siembra</span>
          <span className="font-bold text-coffee-900">{lot.plantedYear}</span>
        </div>
        <div className="bg-white p-2 rounded-xl border border-coffee-200">
          <span className="text-[10px] text-coffee-500 block">Poda</span>
          <span className="font-bold text-coffee-900">Roca</span>
        </div>
      </div>
    </div>
  );
};

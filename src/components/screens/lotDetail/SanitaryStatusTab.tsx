import React from 'react';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import { ScreenId } from '../../../types';
import { useLanguage } from '../../../context/LanguageContext';

interface Props {
  onNavigate: (screen: ScreenId) => void;
}

export const SanitaryStatusTab: React.FC<Props> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="bg-white rounded-2xl p-4 border border-coffee-200 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-leaf-600" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-coffee-800">
            {isEn ? 'Phytosanitary Monitoring (30 Branches Sample)' : 'Monitoreo Fitosanitario (Muestreo 30 ramas)'}
          </h4>
        </div>
        <span className="text-xs font-bold text-leaf-700 bg-leaf-100 px-2 py-0.5 rounded">
          {isEn ? 'Healthy Lot' : 'Lote Saludable'}
        </span>
      </div>

      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-parchment border border-coffee-200">
          <div>
            <span className="font-bold text-coffee-900 block">
              {isEn ? 'Coffee Berry Borer (H. hampei)' : 'Broca del Café (H. hampei)'}
            </span>
            <span className="text-[11px] text-coffee-500">
              {isEn ? 'Sample from Oct 12' : 'Muestreo del 12 Octubre'}
            </span>
          </div>
          <div className="text-right">
            <span className="font-bold text-leaf-700">0.8%</span>
            <span className="text-[10px] text-coffee-500 block">
              {isEn ? 'Below threshold (2.0%)' : 'Bajo umbral (2.0%)'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl bg-parchment border border-coffee-200">
          <div>
            <span className="font-bold text-coffee-900 block">
              {isEn ? 'Coffee Leaf Rust (Hemileia vastatrix)' : 'Roya (Hemileia vastatrix)'}
            </span>
            <span className="text-[11px] text-coffee-500">
              {isEn ? 'No foliar incidence' : 'Sin incidencia en hoja'}
            </span>
          </div>
          <div className="text-right">
            <span className="font-bold text-leaf-700">0.0%</span>
            <span className="text-[10px] text-leaf-600 block">
              {isEn ? 'Immune/Resistant' : 'Inmune/Resistente'}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onNavigate('SCREEN_15')}
        className="w-full py-2 bg-coffee-100 hover:bg-coffee-200 text-coffee-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1 cursor-pointer transition-colors"
      >
        <span>{isEn ? 'Record New Borer Inspection' : 'Asentar Nueva Inspección de Broca'}</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

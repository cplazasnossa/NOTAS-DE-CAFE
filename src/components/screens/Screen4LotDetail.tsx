import React, { useState } from 'react';
import { ScreenId, CoffeeLot } from '../../types';
import { INITIAL_LOTS } from '../../data/mockData';
import { ArrowLeft, Layers } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';
import { LotOverviewHeader } from './lotDetail/LotOverviewHeader';
import { BrixMaturityTab } from './lotDetail/BrixMaturityTab';
import { SanitaryStatusTab } from './lotDetail/SanitaryStatusTab';
import { CulturalActivitiesTab } from './lotDetail/CulturalActivitiesTab';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  lot?: CoffeeLot;
}

export const Screen4LotDetail: React.FC<Props> = ({
  onNavigate,
  lot = INITIAL_LOTS[0]
}) => {
  const [activeTab, setActiveTab] = useState<'maduracion' | 'sanidad' | 'historial'>('maduracion');

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Header con botón Atrás */}
      <ScreenHeader
        title={`Ficha de Lote: ${lot.name}`}
        subtitle={`${lot.variety} · ${lot.altitudeMsnm} msnm · ${lot.areaHa} ha`}
        category="Ficha de Lote"
        showBack={true}
        onBack={() => onNavigate('SCREEN_19')}
        backLabel="Volver a Lotes"
        icon={<Layers className="w-5 h-5 text-coffee-800" />}
      />

      {/* 2. Resumen Agronómico del Lote */}
      <LotOverviewHeader lot={lot} />

      {/* 3. Selector de Pestañas */}
      <div className="flex items-center gap-1 p-1 bg-coffee-100 rounded-xl">
        <button
          onClick={() => setActiveTab('maduracion')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'maduracion' ? 'bg-white text-coffee-900 shadow-sm' : 'text-coffee-600 hover:text-coffee-900'
          }`}
        >
          Curva Brix & Cosecha
        </button>
        <button
          onClick={() => setActiveTab('sanidad')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'sanidad' ? 'bg-white text-coffee-900 shadow-sm' : 'text-coffee-600 hover:text-coffee-900'
          }`}
        >
          Sanidad Vegetal
        </button>
        <button
          onClick={() => setActiveTab('historial')}
          className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === 'historial' ? 'bg-white text-coffee-900 shadow-sm' : 'text-coffee-600 hover:text-coffee-900'
          }`}
        >
          Labores & Podas
        </button>
      </div>

      {/* 4. Contenido de Pestaña Activa */}
      {activeTab === 'maduracion' && <BrixMaturityTab />}
      {activeTab === 'sanidad' && <SanitaryStatusTab onNavigate={onNavigate} />}
      {activeTab === 'historial' && <CulturalActivitiesTab />}

      {/* 5. Acciones al pie */}
      <div className="pt-2 space-y-2 border-t border-coffee-200">
        <button
          onClick={() => onNavigate('SCREEN_13')}
          className="w-full min-h-[48px] bg-coffee-800 hover:bg-coffee-950 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>Registrar Pesaje para {lot.name} →</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('SCREEN_19')}
          className="w-full min-h-[46px] py-2.5 bg-white hover:bg-coffee-100 text-coffee-800 border border-coffee-300 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-98"
        >
          <ArrowLeft className="w-4 h-4 text-coffee-600" />
          <span>Volver a Lotes</span>
        </button>
      </div>
    </div>
  );
};

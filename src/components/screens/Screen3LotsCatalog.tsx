import React, { useState } from 'react';
import { ScreenId, CoffeeLot } from '../../types';
import { INITIAL_LOTS } from '../../data/mockData';
import { PlusCircle, Layers, ArrowLeft, ArrowRight } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';
import { EmptyState } from '../common/EmptyState';
import { NewLotModal } from './lots/NewLotModal';
import { LotCard } from './lots/LotCard';
import { LotFiltersBar } from './lots/LotFiltersBar';
import { useLotFilters } from '../../hooks/useLotFilters';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  lots?: CoffeeLot[];
  onAddLot?: (lot: CoffeeLot) => void;
  onSelectLot?: (lot: CoffeeLot) => void;
}

export const Screen3LotsCatalog: React.FC<Props> = ({
  onNavigate,
  lots = INITIAL_LOTS,
  onAddLot,
  onSelectLot
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { filter, setFilter, search, setSearch, filteredLots, counts, resetFilters } = useLotFilters(lots);
  const { t } = useLanguage();

  const handleSelectLot = (lot: CoffeeLot) => {
    if (onSelectLot) {
      onSelectLot(lot);
    }
    onNavigate('SCREEN_23');
  };

  const handleDirectHarvest = (lot: CoffeeLot) => {
    if (onSelectLot) {
      onSelectLot(lot);
    }
    onNavigate('SCREEN_13');
  };

  const handleSaveNewLot = (newLot: CoffeeLot) => {
    if (onAddLot) {
      onAddLot(newLot);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Encabezado principal */}
      <ScreenHeader
        title={t.lotsCatalogTitle}
        subtitle={t.lotsCatalogSubtitle}
        showBack={true}
        onBack={() => onNavigate('SCREEN_21')}
        backLabel={t.backToFarm}
        icon={<Layers className="w-5 h-5 text-coffee-800" />}
      />

      {/* 2. Botón Destacado: Registrar Nuevo Lote */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full min-h-[48px] bg-coffee-800 hover:bg-coffee-900 text-white rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
      >
        <PlusCircle className="w-4 h-4 text-amber-200" />
        <span>{t.lotsNewLotBtn}</span>
      </button>

      {/* 3. Filtros de búsqueda y estados */}
      <LotFiltersBar
        search={search}
        onSearchChange={setSearch}
        filter={filter}
        onFilterChange={setFilter}
        counts={counts}
      />

      {/* 4. Lista de Lotes */}
      <div className="space-y-3">
        {filteredLots.length === 0 ? (
          <EmptyState
            title={t.lotsEmptyTitle}
            description={t.lotsEmptyDesc}
            actionLabel={t.lotsResetFilters}
            onAction={resetFilters}
          />
        ) : (
          filteredLots.map((lot, idx) => (
            <LotCard
              key={lot.id}
              lot={lot}
              index={idx}
              onSelect={handleSelectLot}
              onDirectHarvest={handleDirectHarvest}
            />
          ))
        )}
      </div>

      {/* 5. Acciones al pie: Volver a Mi Finca y Ficha del Lote */}
      <div className="pt-2 border-t border-coffee-200/80 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => onNavigate('SCREEN_21')}
          className="flex-1 min-h-[46px] py-2.5 px-3 bg-white hover:bg-coffee-100 text-coffee-800 border border-coffee-300 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-98"
          title={t.backToFarm}
        >
          <ArrowLeft className="w-4 h-4 text-coffee-600 shrink-0" />
          <span className="truncate">{t.backToFarm}</span>
        </button>

        <button
          type="button"
          onClick={() => {
            if (onSelectLot && (filteredLots[0] || lots[0])) {
              onSelectLot(filteredLots[0] || lots[0]);
            }
            onNavigate('SCREEN_23');
          }}
          className="flex-1 min-h-[46px] py-2.5 px-3 bg-coffee-800 hover:bg-coffee-900 text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-98"
          title={t.lotsGoToProfile}
        >
          <span className="truncate">{t.lotsGoToProfile}</span>
          <ArrowRight className="w-4 h-4 text-amber-200 shrink-0" />
        </button>
      </div>

      {/* 6. Modal de Nuevo Lote */}
      <NewLotModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNewLot}
      />
    </div>
  );
};

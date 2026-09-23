import React, { useState } from 'react';
import { ScreenId, HarvestRecord } from '../../types';
import { INITIAL_HARVEST, INITIAL_LOTS } from '../../data/mockData';
import { Scale, ChevronDown, ArrowRight } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';
import { FeedbackButton } from '../common/FeedbackButton';
import { FormAlert } from '../common/FormAlert';
import { ScreenFooterNav } from '../common/ScreenFooterNav';
import { HarvestHistoryFeed } from './harvest/HarvestHistoryFeed';
import { QuickFieldActions } from './harvest/QuickFieldActions';
import { useAsyncFormSubmit } from '../../hooks/useAsyncFormSubmit';
import { kgToArrobas } from '../../utils/formatters';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  onAddHarvest?: (record: HarvestRecord) => void;
}

export const Screen5RegisterHarvest: React.FC<Props> = ({ onNavigate, onAddHarvest }) => {
  const [collector, setCollector] = useState('Jairo Ospina');
  const [lotId, setLotId] = useState('lot-1');
  const [weightKg, setWeightKg] = useState<number>(45);
  const [ripePct] = useState<number>(94);
  const [semiRipePct] = useState<number>(4);
  const [greenPct] = useState<number>(2);
  const [records, setRecords] = useState<HarvestRecord[]>(INITIAL_HARVEST);

  const { isSaving, isSuccess, errorMessage, clearError, executeSubmit } = useAsyncFormSubmit();
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const selectedLot = INITIAL_LOTS.find((l) => l.id === lotId) || INITIAL_LOTS[0];
  const weightArrobas = kgToArrobas(weightKg);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    executeSubmit(
      () => {
        if (!weightKg || weightKg <= 0) {
          return isEn
            ? 'Please enter a valid scale weight greater than 0 kg.'
            : 'Por favor ingresa un peso válido mayor a 0 kg en la báscula.';
        }
        return null;
      },
      () => {
        const newRecord: HarvestRecord = {
          id: 'h-' + Date.now(),
          collectorName: collector,
          lotId: selectedLot.id,
          lotName: selectedLot.name,
          weightKg: Number(weightKg),
          weightArrobas: Number(weightArrobas),
          ripePct,
          semiRipePct,
          greenPct,
          time: isEn ? 'Just now' : 'Hace un instante'
        };

        setRecords((prev) => [newRecord, ...prev]);
        if (onAddHarvest) onAddHarvest(newRecord);
      }
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Encabezado */}
      <ScreenHeader
        title={t.harvestScaleTitle}
        subtitle={t.harvestScaleSubtitle}
        category={t.harvestScaleCategory}
        showBack={true}
        onBack={() => onNavigate('SCREEN_21')}
        backLabel={t.backToFarm}
        icon={<Scale className="w-5 h-5 text-coffee-800" />}
      />

      {/* 2. Alerta de validación */}
      {errorMessage && (
        <FormAlert
          message={errorMessage}
          onDismiss={clearError}
        />
      )}

      {/* 3. Formulario principal de pesaje */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl p-5 border border-coffee-200 shadow-sm space-y-4">
        {/* Recolector */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            {t.harvestScalePicker}
          </label>
          <div className="relative">
            <select
              value={collector}
              onChange={(e) => setCollector(e.target.value)}
              className="w-full min-h-[46px] text-xs sm:text-sm font-semibold py-2.5 px-3 bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 appearance-none cursor-pointer"
            >
              <option value="Jairo Ospina">Jairo Ospina ({isEn ? 'Crew 1' : 'Cuadrilla 1'})</option>
              <option value="María Esperanza Gómez">María Esperanza Gómez ({isEn ? 'Crew 1' : 'Cuadrilla 1'})</option>
              <option value="Wilson Cañas">Wilson Cañas ({isEn ? 'Crew 2' : 'Cuadrilla 2'})</option>
              <option value="Pedro Ramírez">Pedro Ramírez ({isEn ? 'Crew 1' : 'Cuadrilla 1'})</option>
              <option value="Gonzalo Morales">Gonzalo Morales ({isEn ? 'Crew 2' : 'Cuadrilla 2'})</option>
            </select>
            <ChevronDown className="w-4 h-4 text-coffee-500 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Lote */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            {t.harvestScaleLot}
          </label>
          <div className="relative">
            <select
              value={lotId}
              onChange={(e) => setLotId(e.target.value)}
              className="w-full min-h-[46px] text-xs sm:text-sm font-semibold py-2.5 px-3 bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 appearance-none cursor-pointer"
            >
              {INITIAL_LOTS.map((lot) => (
                <option key={lot.id} value={lot.id}>
                  {lot.name} ({lot.variety} · {lot.altitudeMsnm} {isEn ? 'masl' : 'msnm'})
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-coffee-500 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Báscula Display & Ajustadores */}
        <div className="bg-parchment rounded-2xl p-4 border border-coffee-200 text-center space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-coffee-600 block">
            {t.harvestScaleGrossKg}
          </span>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setWeightKg(Math.max(5, weightKg - 5))}
              className="w-12 h-12 rounded-xl bg-white border border-coffee-300 text-coffee-900 font-bold text-lg hover:bg-coffee-100 active:scale-95 cursor-pointer shadow-xs flex items-center justify-center"
              aria-label={isEn ? "Subtract 5 kilograms" : "Restar 5 kilos"}
            >
              -5
            </button>
            <div className="px-4">
              <span className="text-4xl sm:text-5xl font-extrabold font-serif text-coffee-950">
                {weightKg}
              </span>
              <span className="text-sm font-bold text-coffee-700 ml-1">kg</span>
            </div>
            <button
              type="button"
              onClick={() => setWeightKg(weightKg + 5)}
              className="w-12 h-12 rounded-xl bg-white border border-coffee-300 text-coffee-900 font-bold text-lg hover:bg-coffee-100 active:scale-95 cursor-pointer shadow-xs flex items-center justify-center"
              aria-label={isEn ? "Add 5 kilograms" : "Sumar 5 kilos"}
            >
              +5
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-coffee-700">
            <span>{isEn ? 'Equivalent:' : 'Equivalente:'}</span>
            <strong className="text-coffee-950 font-mono text-sm">{weightArrobas} Arrobas (@)</strong>
            <span className="text-[10px] text-coffee-500 font-normal">(1 @ = 12.5 kg)</span>
          </div>
        </div>

        {/* Calidad del grano */}
        <div className="space-y-2 pt-1">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-coffee-800">{t.harvestScaleRipeQuality}</span>
            <span className="text-[11px] text-leaf-700 font-bold">{ripePct}% {t.harvestRipeLabel}</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2.5 bg-rose-50 rounded-xl border border-rose-200">
              <span className="text-[10px] text-rose-800 font-bold block">{t.harvestRipeLabel}</span>
              <span className="text-base font-bold text-rose-900">{ripePct}%</span>
            </div>
            <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200">
              <span className="text-[10px] text-amber-800 font-bold block">{t.harvestSemiRipeLabel}</span>
              <span className="text-base font-bold text-amber-900">{semiRipePct}%</span>
            </div>
            <div className="p-2.5 bg-leaf-50 rounded-xl border border-leaf-200">
              <span className="text-[10px] text-leaf-800 font-bold block">{t.harvestGreenLabel}</span>
              <span className="text-base font-bold text-leaf-900">{greenPct}%</span>
            </div>
          </div>
        </div>

        {/* Botón de Confirmación */}
        <FeedbackButton
          type="submit"
          isLoading={isSaving}
          isSuccess={isSuccess}
          loadingText={t.harvestScaleSaving}
          successText={t.harvestScaleSuccessMsg}
        >
          <span>{t.harvestScaleSaveBtn}</span>
          <ArrowRight className="w-4 h-4 text-amber-200" />
        </FeedbackButton>
      </form>

      {/* 4. Historial de pesajes */}
      <HarvestHistoryFeed records={records} />

      {/* 5. Acciones de campo */}
      <QuickFieldActions onNavigate={onNavigate} />

      {/* 6. Navegación Inferior */}
      <ScreenFooterNav
        onBack={() => onNavigate('SCREEN_21')}
        backLabel={t.prev}
        onNext={() => onNavigate('SCREEN_11')}
        nextLabel={t.next}
      />
    </div>
  );
};

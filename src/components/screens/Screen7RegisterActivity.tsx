import React, { useState } from 'react';
import { ScreenId, CulturalActivity } from '../../types';
import { INITIAL_ACTIVITIES, INITIAL_LOTS } from '../../data/mockData';
import { Sprout, Users, ChevronDown, ArrowRight } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';
import { FeedbackButton } from '../common/FeedbackButton';
import { FormAlert } from '../common/FormAlert';
import { ScreenFooterNav } from '../common/ScreenFooterNav';
import { ActivityHistoryFeed } from './activities/ActivityHistoryFeed';
import { useAsyncFormSubmit } from '../../hooks/useAsyncFormSubmit';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  onAddActivity?: (act: CulturalActivity) => void;
}

const ACTIVITY_OPTIONS: CulturalActivity['type'][] = [
  'Plateo y Desyerbe',
  'Poda y Manejo Tejidos',
  'Fertilización',
  'Siembra Sombrío',
  'Mantenimiento Riego'
];

export const Screen7RegisterActivity: React.FC<Props> = ({ onNavigate, onAddActivity }) => {
  const [activityType, setActivityType] = useState<CulturalActivity['type']>('Plateo y Desyerbe');
  const [lotName, setLotName] = useState('Lote La Loma');
  const [workers, setWorkers] = useState(6);
  const [progressPct, setProgressPct] = useState(85);
  const [tools, setTools] = useState('Machete y guadaña');
  const [activities, setActivities] = useState<CulturalActivity[]>(INITIAL_ACTIVITIES);

  const { isSaving, isSuccess, errorMessage, clearError, executeSubmit } = useAsyncFormSubmit();
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

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    executeSubmit(
      () => {
        if (workers <= 0) {
          return isEn
            ? 'Please specify at least 1 worker assigned to this task.'
            : 'Por favor especifica al menos 1 operario asignado a la labor.';
        }
        return null;
      },
      () => {
        const newAct: CulturalActivity = {
          id: 'act-' + Date.now(),
          type: activityType,
          lotName,
          workers,
          progressPct,
          date: isEn ? 'Today · Oct 14' : 'Hoy · 14 Oct',
          tools: tools.trim() || (isEn ? 'Standard field tools' : 'Herramientas estándar')
        };

        setActivities((prev) => [newAct, ...prev]);
        if (onAddActivity) onAddActivity(newAct);
      }
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Header */}
      <ScreenHeader
        title={t.activityTitle}
        subtitle={t.activitySubtitle}
        category={t.activityCategory}
        showBack={true}
        onBack={() => onNavigate('SCREEN_11')}
        backLabel={isEn ? "Back to Costs" : "Volver a Costos"}
        icon={<Sprout className="w-5 h-5 text-leaf-800" />}
      />

      {/* 2. Error Feedback */}
      {errorMessage && (
        <FormAlert
          message={errorMessage}
          onDismiss={clearError}
        />
      )}

      {/* 3. Formulario */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl p-5 border border-coffee-200 shadow-sm space-y-4">
        {/* Tipo de Labor */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1.5">
            {t.activityType}
          </label>
          <div className="grid grid-cols-2 gap-1.5">
            {ACTIVITY_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setActivityType(opt)}
                className={`min-h-[44px] py-2 px-2 text-xs font-bold rounded-xl border text-left transition-all cursor-pointer truncate ${
                  activityType === opt
                    ? 'bg-coffee-800 text-white border-coffee-800 shadow-xs'
                    : 'bg-parchment text-coffee-700 border-coffee-200 hover:bg-coffee-100'
                }`}
              >
                {getActivityLabel(opt)}
              </button>
            ))}
          </div>
        </div>

        {/* Lote y Operarios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              {t.activityLot}
            </label>
            <div className="relative">
              <select
                value={lotName}
                onChange={(e) => setLotName(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 appearance-none cursor-pointer"
              >
                {INITIAL_LOTS.map((lot) => (
                  <option key={lot.id} value={lot.name}>{lot.name}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-coffee-500 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              {t.activityWorkers}
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setWorkers(Math.max(1, workers - 1))}
                className="w-11 h-11 rounded-xl bg-parchment border border-coffee-200 text-coffee-900 font-bold hover:bg-coffee-100 active:scale-95 cursor-pointer flex items-center justify-center text-base"
                aria-label={isEn ? "Subtract one worker" : "Restar un operario"}
              >
                -1
              </button>
              <div className="flex-1 min-h-[44px] bg-parchment rounded-xl border border-coffee-200 flex items-center justify-center font-bold text-xs text-coffee-900">
                <Users className="w-4 h-4 mr-1.5 text-coffee-600" />
                <span>{workers} {isEn ? 'workers' : 'personas'}</span>
              </div>
              <button
                type="button"
                onClick={() => setWorkers(workers + 1)}
                className="w-11 h-11 rounded-xl bg-parchment border border-coffee-200 text-coffee-900 font-bold hover:bg-coffee-100 active:scale-95 cursor-pointer flex items-center justify-center text-base"
                aria-label={isEn ? "Add one worker" : "Sumar un operario"}
              >
                +1
              </button>
            </div>
          </div>
        </div>

        {/* Avance Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-coffee-800">
              {isEn ? 'Plot Progress' : 'Avance de la Parcela'}
            </span>
            <span className="font-mono font-bold text-leaf-700">
              {progressPct}% {isEn ? 'completed' : 'completado'}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            step="5"
            value={progressPct}
            onChange={(e) => setProgressPct(Number(e.target.value))}
            className="w-full accent-coffee-800 cursor-pointer h-2 bg-coffee-200 rounded-lg"
          />
        </div>

        {/* Herramientas */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            {t.activityTools}
          </label>
          <input
            type="text"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            placeholder={isEn ? "E.g., Machete, brush cutter, fertilizer..." : "Ej: Machete, guadaña, urea..."}
            className="w-full min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
          />
        </div>

        {/* Botón de Confirmación */}
        <FeedbackButton
          type="submit"
          isLoading={isSaving}
          isSuccess={isSuccess}
          loadingText={t.activitySaving}
          successText={t.activitySuccessMsg}
        >
          <span>{t.activitySaveBtn}</span>
          <ArrowRight className="w-4 h-4 text-amber-200" />
        </FeedbackButton>
      </form>

      {/* 4. Lista de actividades */}
      <ActivityHistoryFeed activities={activities} />

      {/* 5. Navegación Inferior */}
      <ScreenFooterNav
        onBack={() => onNavigate('SCREEN_11')}
        backLabel={t.prev}
        onNext={() => onNavigate('SCREEN_15')}
        nextLabel={t.next}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { ScreenId, PhytosanitaryAlert } from '../../types';
import { INITIAL_ALERTS, INITIAL_LOTS } from '../../data/mockData';
import { ShieldCheck, ChevronDown, Camera, ArrowRight } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';
import { FeedbackButton } from '../common/FeedbackButton';
import { FormAlert } from '../common/FormAlert';
import { ScreenFooterNav } from '../common/ScreenFooterNav';
import { PhytosanitaryHistoryFeed } from './phytosanitary/PhytosanitaryHistoryFeed';
import { useAsyncFormSubmit } from '../../hooks/useAsyncFormSubmit';
import { useLanguage } from '../../context/LanguageContext';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  onAddAlert?: (alert: PhytosanitaryAlert) => void;
}

export const Screen8RegisterObservation: React.FC<Props> = ({ onNavigate, onAddAlert }) => {
  const [pestName, setPestName] = useState<PhytosanitaryAlert['pestName']>('Broca del Café');
  const [lotName, setLotName] = useState('Lote La Loma');
  const [incidencePct, setIncidencePct] = useState<number>(1.2);
  const [severity, setSeverity] = useState<PhytosanitaryAlert['severity']>('Baja');
  const [actionRequired, setActionRequired] = useState('Instalar 4 trampas con alcohol en el lindero norte.');
  const [photoAttached, setPhotoAttached] = useState(false);
  const [alerts, setAlerts] = useState<PhytosanitaryAlert[]>(INITIAL_ALERTS);

  const { isSaving, isSuccess, errorMessage, clearError, executeSubmit } = useAsyncFormSubmit();
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const translateSeverity = (sev: PhytosanitaryAlert['severity']) => {
    switch (sev) {
      case 'Baja': return t.healthSeverityLow;
      case 'Media': return t.healthSeverityMed;
      case 'Crítica': return t.healthSeverityHigh;
      default: return sev;
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    executeSubmit(
      () => {
        if (!actionRequired.trim()) {
          return isEn
            ? 'Please specify a corrective action or agronomic note.'
            : 'Por favor especifica una medida correctiva o nota agronómica.';
        }
        return null;
      },
      () => {
        const newAlert: PhytosanitaryAlert = {
          id: 'al-' + Date.now(),
          pestName,
          lotName,
          incidencePct,
          branchesSampled: 30,
          severity,
          actionRequired: actionRequired.trim(),
          date: isEn ? 'Today · Oct 14' : 'Hoy · 14 Oct'
        };

        setAlerts((prev) => [newAlert, ...prev]);
        if (onAddAlert) onAddAlert(newAlert);
      }
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Header */}
      <ScreenHeader
        title={t.healthTitle}
        subtitle={t.healthSubtitle}
        category={t.healthCategory}
        showBack={true}
        onBack={() => onNavigate('SCREEN_17')}
        backLabel={isEn ? "Back to Activity" : "Volver a Actividad"}
        icon={<ShieldCheck className="w-5 h-5 text-rose-800" />}
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
        {/* Plaga */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            {t.healthPestType}
          </label>
          <div className="relative">
            <select
              value={pestName}
              onChange={(e) => setPestName(e.target.value as PhytosanitaryAlert['pestName'])}
              className="w-full min-h-[46px] px-3 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 appearance-none cursor-pointer"
            >
              <option value="Broca del Café">
                {isEn ? 'Coffee Berry Borer (Hypothenemus hampei)' : 'Broca del Café (Hypothenemus hampei)'}
              </option>
              <option value="Roya (Hemileia vastatrix)">
                {isEn ? 'Coffee Leaf Rust (Hemileia vastatrix)' : 'Roya (Hemileia vastatrix)'}
              </option>
              <option value="Mancha de Hierro">
                {isEn ? 'Brown Eye Spot (Cercospora coffeicola)' : 'Mancha de Hierro (Cercospora coffeicola)'}
              </option>
              <option value="Ojo de Gallo">
                {isEn ? 'American Leaf Spot (Mycena citricolor)' : 'Ojo de Gallo (Mycena citricolor)'}
              </option>
            </select>
            <ChevronDown className="w-4 h-4 text-coffee-500 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Lote y Severidad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              {isEn ? 'Inspected Lot' : 'Lote Inspeccionado'}
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
              {t.healthSeverity}
            </label>
            <div className="grid grid-cols-3 gap-1">
              {(['Baja', 'Media', 'Crítica'] as PhytosanitaryAlert['severity'][]).map((sev) => (
                <button
                  key={sev}
                  type="button"
                  onClick={() => setSeverity(sev)}
                  className={`min-h-[44px] py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    severity === sev
                      ? sev === 'Crítica'
                        ? 'bg-rose-700 text-white border-rose-700 shadow-xs'
                        : sev === 'Media'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-leaf-700 text-white border-leaf-700 shadow-xs'
                      : 'bg-parchment text-coffee-700 border-coffee-200 hover:bg-coffee-100'
                  }`}
                >
                  {translateSeverity(sev)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Incidencia en Muestreo */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-coffee-800">{t.healthIncidence} ({t.healthBranches})</span>
            <span className="font-mono font-bold text-rose-700">{incidencePct}%</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="15"
            step="0.1"
            value={incidencePct}
            onChange={(e) => setIncidencePct(Number(e.target.value))}
            className="w-full accent-rose-700 cursor-pointer h-2 bg-coffee-200 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-coffee-500">
            <span>{isEn ? '0% Safe economic threshold' : '0% Umbral económico seguro'}</span>
            <span>{isEn ? '>2% Requires biocontrol' : '>2% Requiere control biológico'}</span>
          </div>
        </div>

        {/* Medida correctiva */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            {t.healthActionReq}
          </label>
          <input
            type="text"
            value={actionRequired}
            onChange={(e) => setActionRequired(e.target.value)}
            placeholder={isEn ? "E.g., Install alcohol traps or apply Beauveria fungus..." : "Ej: Instalar trampas con alcohol o aplicar hongo Beauveria..."}
            className="w-full min-h-[44px] px-3 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
          />
        </div>

        {/* Foto */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-parchment border border-coffee-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-white border border-coffee-200 flex items-center justify-center text-coffee-700">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-coffee-900 block">
                {photoAttached
                  ? (isEn ? 'Photo evidence attached' : 'Evidencia fotográfica cargada')
                  : (isEn ? 'Leaf or borer photo' : 'Foto de la hoja o broca')}
              </span>
              <span className="text-[10px] text-coffee-500">
                {isEn ? 'Automatic GPS geolocation' : 'Geolocalización GPS automática'}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setPhotoAttached(!photoAttached)}
            className={`min-h-[40px] px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              photoAttached ? 'bg-leaf-700 text-white' : 'bg-coffee-800 text-white'
            }`}
          >
            {photoAttached ? (isEn ? '✓ Attached' : '✓ Adjunta') : (isEn ? 'Take Photo' : 'Tomar Foto')}
          </button>
        </div>

        {/* Submit */}
        <FeedbackButton
          type="submit"
          isLoading={isSaving}
          isSuccess={isSuccess}
          loadingText={t.healthSaving}
          successText={t.healthSuccessMsg}
        >
          <span>{t.healthSaveBtn}</span>
          <ArrowRight className="w-4 h-4 text-amber-200" />
        </FeedbackButton>
      </form>

      {/* 4. Lista de Alertas */}
      <PhytosanitaryHistoryFeed alerts={alerts} />

      {/* 5. Navegación Inferior */}
      <ScreenFooterNav
        onBack={() => onNavigate('SCREEN_17')}
        backLabel={t.prev}
        onNext={() => onNavigate('SCREEN_9')}
        nextLabel={t.next}
      />
    </div>
  );
};

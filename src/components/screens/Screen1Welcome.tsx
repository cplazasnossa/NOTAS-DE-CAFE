import React, { useState } from 'react';
import { ScreenId, FarmRepresentative } from '../../types';
import { HERO_IMAGE_URL } from '../../data/mockData';
import { SafeImage } from '../BrandAssets';
import { Sun, CheckCircle2, ChevronRight, MapPin, Feather, Sparkles, UserCheck } from 'lucide-react';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  isOffline?: boolean;
  activeRepresentative?: FarmRepresentative;
}

export const Screen1Welcome: React.FC<Props> = ({ onNavigate, isOffline, activeRepresentative }) => {
  const [morningNote, setMorningNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  const repName = activeRepresentative?.name.split(' ')[0] || 'Don Carlos';
  const repRole = activeRepresentative?.role.split('&')[0] || 'Propietario';

  const handleSaveNote = () => {
    if (morningNote.trim()) {
      setNoteSaved(true);
      setTimeout(() => setNoteSaved(false), 2400);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-6">
      {/* Immersive Header Banner */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0 bg-coffee-900">
        <SafeImage
          src={HERO_IMAGE_URL}
          alt="Cerezas de café y cuaderno de campo"
          className="w-full h-full object-cover"
          fallbackType="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-coffee-900/50 to-coffee-900/20" />
        
        {/* Top Floating Badge Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <button
            type="button"
            onClick={() => onNavigate('SCREEN_LOGIN')}
            className="bg-white/95 hover:bg-white text-coffee-900 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1.5 cursor-pointer transition-all"
            title="Ver representante y membresía de pago"
          >
            <UserCheck className="w-3.5 h-3.5 text-coffee-800" />
            <span>{repName} · {activeRepresentative?.planStatus || 'Activo'}</span>
          </button>
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white shadow-sm flex items-center gap-1.5 ${isOffline ? 'bg-amber-700' : 'bg-leaf-600'}`}>
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {isOffline ? 'Modo Offline' : 'Sincronizado'}
          </span>
        </div>

        {/* Hero Headline Overlay */}
        <div className="absolute bottom-3 left-4 right-4 sm:left-5 sm:right-5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FAF6F0]/95 backdrop-blur-xs border border-coffee-300/90 mb-1.5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#140702]" />
            <p className="text-[11px] sm:text-xs uppercase font-black tracking-wider text-[#140702]">
              EL CUADERNO DIGITAL DE TU FINCA
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#140702] leading-tight">
            ¡Buenos días, {repName}!
          </h2>
          <div className="flex items-center gap-2 text-xs text-[#2A140A] mt-1 font-bold">
            <MapPin className="w-3.5 h-3.5 text-coffee-800 shrink-0" />
            <span>Finca El Manantial · {repRole}</span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="px-5 pt-3 space-y-4 flex-1">
        {/* Weather & Sun Condition (Solar High Contrast) */}
        <div className="bg-white p-4 rounded-2xl border border-coffee-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-coffee-900">21°C · Favorable</span>
                <span className="text-[10px] bg-leaf-100 text-leaf-700 px-1.5 py-0.5 rounded font-bold">Óptimo</span>
              </div>
              <p className="text-xs text-coffee-600">Condición ideal para recolección en lote La Loma</p>
            </div>
          </div>
          <div className="text-right border-l border-coffee-100 pl-3 shrink-0">
            <span className="text-xs font-bold text-coffee-800 block">14 Octubre</span>
            <span className="text-[11px] text-coffee-500">Semana 41</span>
          </div>
        </div>

        {/* Quick Snapshot Metrics */}
        <div className="grid grid-cols-3 gap-2.5">
          <button
            onClick={() => onNavigate('SCREEN_19')}
            className="bg-white p-3 rounded-xl border border-coffee-200 text-center hover:border-coffee-500 transition-colors cursor-pointer text-left"
          >
            <span className="text-[11px] text-coffee-500 block">Lotes Activos</span>
            <span className="text-lg font-bold text-coffee-900">4 Lotes</span>
            <span className="text-[10px] text-leaf-600 font-semibold block mt-0.5">18.5 ha totales</span>
          </button>

          <button
            onClick={() => onNavigate('SCREEN_23')}
            className="bg-white p-3 rounded-xl border border-coffee-200 text-center hover:border-coffee-500 transition-colors cursor-pointer text-left"
          >
            <span className="text-[11px] text-coffee-500 block">Corte Actual</span>
            <span className="text-lg font-bold text-coffee-900">Geisha</span>
            <span className="text-[10px] text-amber-700 font-semibold block mt-0.5">Brix 24.2°</span>
          </button>

          <button
            onClick={() => onNavigate('SCREEN_9')}
            className="bg-white p-3 rounded-xl border border-coffee-200 text-center hover:border-coffee-500 transition-colors cursor-pointer text-left"
          >
            <span className="text-[11px] text-coffee-500 block">Tareas Hoy</span>
            <span className="text-lg font-bold text-coffee-900">3 Pend.</span>
            <span className="text-[10px] text-cherry font-semibold block mt-0.5">1 Crítica</span>
          </button>
        </div>

        {/* Morning Field Note */}
        <div className="bg-parchment p-4 rounded-2xl border border-coffee-200 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Feather className="w-4 h-4 text-coffee-700" />
              <span className="text-xs font-bold uppercase tracking-wider text-coffee-800">
                Apunte Rápido Matutino
              </span>
            </div>
            {noteSaved && (
              <span className="text-xs font-semibold text-leaf-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Guardado en libreta
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={morningNote}
              onChange={(e) => setMorningNote(e.target.value)}
              placeholder="Ej: Iniciar recolección por ladera norte..."
              className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-coffee-200 text-coffee-900 placeholder:text-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-700"
            />
            <button
              onClick={handleSaveNote}
              className="px-3 py-2 bg-coffee-800 text-white rounded-xl text-xs font-bold hover:bg-coffee-900 transition-colors shrink-0"
            >
              Anotar
            </button>
          </div>
        </div>

        {/* Primary CTA: Start Workday */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('SCREEN_21')}
            className="w-full min-h-[52px] bg-coffee-800 hover:bg-coffee-900 text-white rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-coffee-800/15 transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Iniciar Jornada en la Finca</span>
            <ChevronRight className="w-5 h-5 text-amber-200" />
          </button>
          <p className="text-center text-[11px] text-coffee-500 mt-2">
            Persistencia local automática · 100% libre de cobertura celular
          </p>
        </div>
      </div>
    </div>
  );
};

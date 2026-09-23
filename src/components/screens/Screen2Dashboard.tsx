import React from 'react';
import { ScreenId } from '../../types';
import { Coffee, ArrowUpRight, ChevronRight, Home, ArrowLeft, PlusCircle } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  dailyTotalKg?: number;
  dailyTotalArrobas?: number;
}

export const Screen2Dashboard: React.FC<Props> = ({
  onNavigate,
  dailyTotalKg = 1775,
  dailyTotalArrobas = 142
}) => {
  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* Header con botón Atrás y título coincidente Finca */}
      <ScreenHeader
        title="Finca"
        subtitle="Panel central de control agronómico · Finca El Manantial"
        category="Panel de Control"
        showBack={true}
        onBack={() => onNavigate('SCREEN_2')}
        backLabel="Volver al Inicio"
        icon={<Coffee className="w-5 h-5 text-amber-900" />}
      />

      {/* Hero Metric Card: Daily Harvest (Sin resaltado café / Tarjeta limpia de alto contraste) */}
      <div className="bg-white text-coffee-900 rounded-[28px] p-5 sm:p-6 shadow-md border border-coffee-200 space-y-4 text-center">
        {/* Header of Cosecha space - Totalmente Centrado sin resaltado café */}
        <div className="flex flex-col items-center justify-center text-center space-y-1.5 border-b border-coffee-100 pb-3">
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80">
            <Coffee className="w-3.5 h-3.5 text-amber-800 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-widest text-amber-900">
              CONTROL DIARIO DE COSECHA
            </span>
          </div>
          <h3 className="text-sm font-extrabold text-coffee-900 text-center">
            Recolección de Hoy · 14 Octubre 2024
          </h3>
          <div className="inline-flex items-center justify-center gap-1 px-3 py-0.5 bg-leaf-100 text-leaf-800 text-[10px] font-bold rounded-full shadow-xs border border-leaf-300">
            <span>▲ +18% vs semana previa</span>
          </div>
        </div>

        {/* Main Big Metric Display - Totalmente Centrado */}
        <div className="flex flex-col items-center justify-center text-center space-y-1 py-1">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-5xl sm:text-6xl font-extrabold font-serif tracking-tight text-coffee-950 leading-none">
              {dailyTotalArrobas.toLocaleString()}
            </span>
            <span className="text-2xl sm:text-3xl text-coffee-700 font-bold font-serif">
              @
            </span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-coffee-700 uppercase tracking-wider block">
            Arrobas Recolectadas Hoy
          </span>

          {/* Secondary conversion and weight details - Centrado */}
          <div className="inline-flex items-center justify-center gap-2 bg-parchment px-4 py-1.5 rounded-full border border-coffee-200 text-xs text-coffee-800 mt-1.5 shadow-xs max-w-full text-center">
            <span className="w-2 h-2 rounded-full bg-leaf-600 shrink-0" />
            <span>Total neto en báscula: <strong className="text-coffee-950 font-mono font-bold">{dailyTotalKg.toLocaleString()} kg</strong> de café cereza</span>
          </div>
        </div>

        {/* Harvest Goal Progress Bar - Centrado */}
        <div className="bg-parchment p-3.5 rounded-2xl border border-coffee-200 space-y-2 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-xs text-center">
            <span className="text-coffee-700">Meta del día: <strong className="text-coffee-950 font-bold">160 @</strong></span>
            <span className="hidden sm:inline text-coffee-300">·</span>
            <span className="text-leaf-800 font-bold bg-leaf-100 px-2 py-0.5 rounded-md border border-leaf-300">
              88.7% completado (Faltan 18 @)
            </span>
          </div>
          <div className="w-full h-3 bg-coffee-100 rounded-full overflow-hidden flex p-0.5 border border-coffee-200">
            <div
              style={{ width: '88.7%' }}
              className="h-full bg-gradient-to-r from-amber-500 to-leaf-600 rounded-full transition-all duration-500"
            />
          </div>
        </div>

        {/* 3 Detailed Breakdown Metric Cards - Centradas */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-parchment p-2.5 rounded-xl border border-coffee-200 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] text-coffee-600 uppercase tracking-wider block font-semibold text-center">
              Rendimiento
            </span>
            <span className="font-extrabold text-coffee-950 text-base block mt-0.5 text-center">
              92.4%
            </span>
            <span className="text-[10px] text-leaf-700 font-bold block text-center">
              Cereza 1ª
            </span>
          </div>

          <div className="bg-parchment p-2.5 rounded-xl border border-coffee-200 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] text-coffee-600 uppercase tracking-wider block font-semibold text-center">
              Jornaleros
            </span>
            <span className="font-extrabold text-coffee-950 text-base block mt-0.5 text-center">
              12 pers.
            </span>
            <span className="text-[10px] text-amber-800 font-bold block text-center">
              2 Cuadrillas
            </span>
          </div>

          <div className="bg-parchment p-2.5 rounded-xl border border-coffee-200 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] text-coffee-600 uppercase tracking-wider block font-semibold text-center">
              Lote Activo
            </span>
            <span className="font-extrabold text-coffee-950 text-sm block mt-0.5 text-center truncate max-w-full">
              La Loma #1
            </span>
            <span className="text-[10px] text-coffee-600 font-medium block text-center">
              Geisha (24°Bx)
            </span>
          </div>
        </div>

        {/* Recent weighing quick note - Centrado */}
        <div className="flex items-center justify-center gap-2 text-center text-xs text-coffee-600 pt-1">
          <span>Último pesaje: <strong className="text-coffee-900">45 kg</strong> (Jairo Ospina)</span>
          <span className="text-coffee-800 font-mono font-bold">· 10:15 AM</span>
        </div>

        {/* Action Button - Centrado */}
        <button
          onClick={() => onNavigate('SCREEN_13')}
          className="w-full min-h-[48px] py-3 px-4 bg-coffee-800 hover:bg-coffee-900 text-white rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-[0.99] text-center"
        >
          <span>Abrir Báscula de Pesaje Rápido en Campo</span>
          <ArrowUpRight className="w-4 h-4 text-amber-200 stroke-[2.5]" />
        </button>
      </div>

      {/* Lot Status Snapshot */}
      <div className="bg-white rounded-2xl p-4 border border-coffee-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-coffee-900">Estado de los Lotes</h3>
            <p className="text-[11px] text-coffee-500">18.5 Hectáreas bajo manejo agronómico</p>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onNavigate('SCREEN_19')}
              className="px-2.5 py-1 text-xs font-bold text-coffee-800 bg-coffee-100 hover:bg-coffee-200 rounded-lg flex items-center gap-1 cursor-pointer transition-colors"
              title="Registrar nuevo lote"
            >
              <PlusCircle className="w-3.5 h-3.5 text-coffee-700" />
              <span>+ Lote</span>
            </button>
            <button
              onClick={() => onNavigate('SCREEN_19')}
              className="text-xs font-bold text-coffee-700 hover:text-coffee-900 flex items-center gap-0.5 cursor-pointer py-1"
            >
              Ver Catastro <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <div
            onClick={() => onNavigate('SCREEN_23')}
            className="p-3 rounded-xl bg-parchment border border-coffee-200 flex items-center justify-between cursor-pointer hover:border-coffee-400 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-coffee-900">Lote La Loma</span>
                <span className="text-[10px] bg-coffee-100 text-coffee-800 px-1.5 py-0.5 rounded font-bold">Geisha</span>
              </div>
              <p className="text-[11px] text-coffee-600 mt-0.5">1,820 msnm · 4.2 ha · Brix 24.2°</p>
            </div>
            <span className="text-xs font-bold text-leaf-700 bg-leaf-100 px-2 py-1 rounded-lg">
              En Cosecha
            </span>
          </div>

          <div
            onClick={() => onNavigate('SCREEN_19')}
            className="p-3 rounded-xl bg-white border border-coffee-200 flex items-center justify-between cursor-pointer hover:border-coffee-400 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-coffee-900">Lote El Roble</span>
                <span className="text-[10px] bg-coffee-100 text-coffee-800 px-1.5 py-0.5 rounded font-bold">Bourbon R.</span>
              </div>
              <p className="text-[11px] text-coffee-600 mt-0.5">1,750 msnm · 3.8 ha · Floración 82%</p>
            </div>
            <span className="text-xs font-bold text-coffee-700 bg-coffee-100 px-2 py-1 rounded-lg">
              Óptimo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

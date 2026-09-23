import React from 'react';
import { Smartphone } from 'lucide-react';

interface Props {
  onSwitchToFullApp: () => void;
}

export const LandingHeader: React.FC<Props> = ({ onSwitchToFullApp }) => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="w-full bg-[#4D6A4E] border-b-4 border-[#3D2314] py-3 px-4 text-center shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="text-xl">⭐</span>
          <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase drop-shadow-sm">
            ESTA ES LA PANTALLA A EXPORTAR A GOOGLE AI STUDIO
          </span>
          <span className="text-xl">⭐</span>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="border-b border-[#EADFCF] bg-[#FCF9F3]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-coffee-800 flex items-center justify-center text-white shadow-sm shrink-0">
              <svg
                className="w-5 h-5 text-amber-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-coffee-600 block">
                Design System & UX Showcase
              </span>
              <h1 className="text-sm sm:text-base font-bold text-coffee-900 leading-tight">
                NOTAS DE CAFÉ · El cuaderno digital de tu finca
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-leaf-100 text-leaf-700 border border-leaf-500/20">
              <span className="w-2 h-2 rounded-full bg-leaf-600 animate-pulse"></span>
              Versión 2.4 Finalizada
            </span>

            <a
              href="#pantallas"
              className="px-3.5 py-2 bg-white border border-coffee-200 text-coffee-800 rounded-lg text-xs font-semibold hover:bg-coffee-100 transition-colors shadow-sm hidden sm:inline-block"
            >
              Ver Pantallas
            </a>

            <button
              onClick={onSwitchToFullApp}
              className="px-4 py-2 bg-coffee-800 text-white rounded-lg text-xs font-bold hover:bg-coffee-900 transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-amber-200" />
              <span>Simulador App Móvil</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

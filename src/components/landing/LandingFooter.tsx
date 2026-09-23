import React from 'react';

export const LandingFooter: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-coffee-800 flex items-center justify-center text-white">
            <svg
              className="w-4 h-4 text-amber-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold text-coffee-900">NOTAS DE CAFÉ · Sistema de Diseño v2.4</p>
            <p className="text-[11px] text-coffee-500">
              Diseñado con respeto por la tierra, el grano y las manos que lo cultivan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-xs text-coffee-600 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-parchment rounded-lg border border-coffee-200 font-medium">
            ☕ Especialidad
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-parchment rounded-lg border border-coffee-200 font-medium">
            🌱 Sostenibilidad
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-parchment rounded-lg border border-coffee-200 font-medium">
            📱 100% Móvil Offline
          </span>
        </div>
      </div>
    </footer>
  );
};

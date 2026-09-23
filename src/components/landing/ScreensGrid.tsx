import React from 'react';
import { ScreenInfo } from '../../types';
import { SCREENS_DATA } from '../../data/mockData';
import { ArrowRight } from 'lucide-react';

interface Props {
  onSelectScreenCard: (screen: ScreenInfo) => void;
}

export const ScreensGrid: React.FC<Props> = ({ onSelectScreenCard }) => {
  return (
    <section id="pantallas" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-[#EADFCF]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-coffee-600 block mb-1">
            Mapa de Pantallas
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-coffee-900">
            Ecosistema Completo de la Aplicación
          </h3>
          <p className="text-sm text-coffee-600 mt-1">
            Navegación distribuida entre inicio de jornada, gestión de lotes y módulos de registro rápido. Haz clic en cualquier pantalla para abrirla.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white rounded-lg border border-coffee-200 text-xs font-semibold text-coffee-700">
            Mobile First (390px)
          </span>
          <span className="px-3 py-1 bg-white rounded-lg border border-coffee-200 text-xs font-semibold text-coffee-700">
            App Shell Unificado
          </span>
        </div>
      </div>

      {/* Grid de 9 Pantallas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SCREENS_DATA.map((screen) => {
          let badgeBg = 'bg-coffee-100 text-coffee-800';
          if (screen.badgeType === 'apertura' || screen.badgeType === 'agenda' || screen.badgeType === 'finanzas') {
            badgeBg = 'bg-amber-100 text-amber-900';
          } else if (screen.badgeType === 'dashboard' || screen.badgeType === 'cosecha' || screen.badgeType === 'sanidad') {
            badgeBg = 'bg-leaf-100 text-leaf-700';
          }

          return (
            <div
              key={screen.id}
              onClick={() => onSelectScreenCard(screen)}
              className="bg-white rounded-2xl p-5 border border-coffee-200 shadow-sm flex flex-col justify-between hover:border-coffee-500 hover:shadow-md transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${badgeBg}`}>
                    {screen.badge}
                  </span>
                  <span className="text-xs text-coffee-500">{screen.shell}</span>
                </div>
                <h4 className="text-base font-bold text-coffee-900 group-hover:text-coffee-700 transition-colors mb-1">
                  {screen.name}
                </h4>
                <p className="text-xs text-coffee-600 leading-relaxed mb-4">
                  {screen.description}
                </p>
              </div>

              <div className="pt-3 border-t border-coffee-100 flex items-center justify-between text-xs">
                <span className="font-medium text-coffee-700 truncate max-w-[190px]">
                  {screen.caption}
                </span>
                <div className="flex items-center gap-1 text-coffee-800 font-mono text-[10px] font-bold group-hover:translate-x-1 transition-transform">
                  <span>{screen.id}</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

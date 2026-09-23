import React from 'react';
import { ScreenId, ScreenInfo } from '../../types';
import { SCREENS_DATA } from '../../data/mockData';
import { SafeImage } from '../BrandAssets';
import { Coffee, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';

interface Props {
  mockupIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (idx: number) => void;
  onOpenScreenSimulator: (screenId: ScreenId) => void;
}

export const LandingHero: React.FC<Props> = ({
  mockupIndex,
  onPrev,
  onNext,
  onSelectIndex,
  onOpenScreenSimulator
}) => {
  const currentScreen = SCREENS_DATA[mockupIndex];

  return (
    <section className="hero-glow pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Hero Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-coffee-100 text-coffee-800 text-xs font-bold uppercase tracking-wider border border-coffee-200">
            <Coffee className="w-3.5 h-3.5 text-coffee-700" />
            <span>Diseño para la Caficultura de Especialidad</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-coffee-900 leading-[1.15]">
            La tecnología agrícola con la calidez del papel de campo.
          </h2>

          <p className="text-base sm:text-lg text-coffee-700 leading-relaxed max-w-2xl font-sans">
            Un ecosistema integral de 9 pantallas móviles diseñado específicamente para caficultores de Colombia y el mundo. Trazabilidad de origen, registro offline sin cobertura y toma de decisiones agronómicas en el propio cafetal.
          </p>

          {/* Quick Metrics / Value Props */}
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-coffee-200">
            <div>
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-coffee-900">
                100%
              </span>
              <span className="text-xs text-coffee-600 font-medium">
                Offline-First en campo
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-coffee-900">
                9
              </span>
              <span className="text-xs text-coffee-600 font-medium">
                Pantallas optimizadas
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-serif font-bold text-coffee-900">
                ≥48px
              </span>
              <span className="text-xs text-coffee-600 font-medium">
                Área táctil ergonómica
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenScreenSimulator(currentScreen.id)}
              className="px-6 py-3.5 bg-coffee-800 hover:bg-coffee-900 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Probar Simulador Interactivo</span>
            </button>
            <a
              href="#pantallas"
              className="px-5 py-3.5 bg-white border border-coffee-300 hover:bg-coffee-50 text-coffee-800 rounded-xl text-sm font-bold shadow-xs transition-colors inline-flex items-center gap-2"
            >
              <span>Explorar Arquitectura</span>
              <ExternalLink className="w-4 h-4 text-coffee-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Phone Mockup Carousel */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[340px] flex items-center justify-center">
            
            {/* Prev Floating Button */}
            <button
              onClick={onPrev}
              type="button"
              aria-label="Pantalla anterior"
              className="absolute -left-3 sm:-left-6 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-coffee-200 shadow-md text-coffee-800 flex items-center justify-center hover:bg-coffee-800 hover:text-white hover:border-coffee-800 transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Mockup Card Phone */}
            <div className="relative w-full max-w-[340px] bg-white rounded-[32px] p-3 shadow-2xl border-4 border-coffee-800/10 rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="rounded-[24px] overflow-hidden border border-coffee-200 bg-[#FCF9F3] shadow-inner">
                
                {/* Banner / Header of Mockup Screen */}
                <div className="relative h-56 bg-coffee-800 overflow-hidden transition-all duration-300">
                  <SafeImage
                    src={currentScreen.bgImg}
                    alt={currentScreen.title}
                    className="w-full h-full object-cover"
                    fallbackType="hero"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/95 via-coffee-900/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-xs z-10">
                    <span className="bg-white/90 text-coffee-900 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] shadow-sm">
                      NOTAS DE CAFÉ
                    </span>
                    <span className="bg-leaf-600 text-white px-2 py-0.5 rounded-full text-[10px] font-medium shadow-sm">
                      {currentScreen.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <div className="inline-block bg-[#FAF6F0]/95 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-[#140702] mb-1 shadow-xs border border-coffee-300/80">
                      {currentScreen.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-md truncate">
                      {currentScreen.title}
                    </h3>
                    <p className="text-[11px] text-coffee-100 font-medium truncate drop-shadow-xs">
                      {currentScreen.caption}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-3 bg-parchment transition-all duration-300">
                  <div className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-coffee-200">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{currentScreen.metricIcon}</span>
                      <div>
                        <span className="text-xs font-bold text-coffee-900">
                          {currentScreen.metricPrimary}
                        </span>
                        <p className="text-[10px] text-coffee-500">
                          {currentScreen.metricSecondary}
                        </p>
                      </div>
                    </div>
                    <span className="text-right text-[11px] font-bold text-coffee-800">
                      {currentScreen.metricDate}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white p-2 rounded-lg border border-coffee-200 text-center">
                      <span className="text-xs text-coffee-500 block">{currentScreen.s1Label}</span>
                      <span className="text-sm font-bold text-coffee-900 truncate block">
                        {currentScreen.s1Val}
                      </span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-coffee-200 text-center">
                      <span className="text-xs text-coffee-500 block">{currentScreen.s2Label}</span>
                      <span className="text-sm font-bold text-coffee-900 truncate block">
                        {currentScreen.s2Val}
                      </span>
                    </div>
                    <div className="bg-white p-2 rounded-lg border border-coffee-200 text-center">
                      <span className="text-xs text-coffee-500 block">{currentScreen.s3Label}</span>
                      <span className="text-sm font-bold text-coffee-900 truncate block">
                        {currentScreen.s3Val}
                      </span>
                    </div>
                  </div>

                  {/* Action button inside phone */}
                  <button
                    onClick={() => onOpenScreenSimulator(currentScreen.id)}
                    className="w-full py-2 bg-coffee-800 hover:bg-coffee-900 text-white rounded-xl text-xs font-bold text-center shadow-sm transition-colors cursor-pointer block"
                  >
                    {currentScreen.actionText}
                  </button>
                </div>

              </div>
            </div>

            {/* Next Floating Button */}
            <button
              onClick={onNext}
              type="button"
              aria-label="Siguiente pantalla"
              className="absolute -right-3 sm:-right-6 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-coffee-200 shadow-md text-coffee-800 flex items-center justify-center hover:bg-coffee-800 hover:text-white hover:border-coffee-800 transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Pagination Label & Dots */}
          <div className="mt-5 flex flex-col items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-coffee-200 shadow-sm text-xs font-medium text-coffee-800">
              <span className="w-2 h-2 rounded-full bg-coffee-800"></span>
              <span className="font-bold text-coffee-900">
                Pantalla {mockupIndex + 1} de {SCREENS_DATA.length}
              </span>
              <span className="text-coffee-300">·</span>
              <span className="text-coffee-600 font-semibold truncate max-w-[210px]">
                {currentScreen.name}
              </span>
            </div>

            <div className="flex items-center gap-1.5 pt-1">
              {SCREENS_DATA.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => onSelectIndex(idx)}
                  className={`transition-all duration-200 cursor-pointer ${
                    idx === mockupIndex
                      ? 'w-3 h-3 rounded-full bg-coffee-800'
                      : 'w-2 h-2 rounded-full bg-coffee-200 hover:bg-coffee-500'
                  }`}
                  title={s.name}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

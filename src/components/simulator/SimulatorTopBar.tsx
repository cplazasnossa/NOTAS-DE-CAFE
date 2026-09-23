import React from 'react';
import { ScreenInfo } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { ChevronLeft, ChevronRight, Wifi, WifiOff, Maximize2, Minimize2, X } from 'lucide-react';

interface Props {
  currentScreenInfo: ScreenInfo;
  onPrev: () => void;
  onNext: () => void;
  onOpenDrawer: () => void;
  onOpenGuide: () => void;
  isOffline: boolean;
  onToggleOffline: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onClose?: () => void;
}

export const SimulatorTopBar: React.FC<Props> = ({
  currentScreenInfo,
  onPrev,
  onNext,
  onOpenDrawer,
  onOpenGuide,
  isOffline,
  onToggleOffline,
  isFullscreen,
  onToggleFullscreen,
  onClose
}) => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-[420px] mb-3 flex items-center justify-between text-xs px-2 gap-1.5 flex-wrap">
      <div className="flex items-center gap-1.5">
        <button
          onClick={onPrev}
          aria-label={t.prev}
          className="p-1.5 rounded-lg bg-white border border-coffee-200 text-coffee-800 hover:bg-coffee-100 shadow-sm cursor-pointer"
          title={`${t.prev} (1-9)`}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        <button
          onClick={onOpenDrawer}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white border border-coffee-200 hover:border-coffee-500 shadow-sm cursor-pointer transition-colors max-w-[170px]"
        >
          <span className="font-extrabold text-coffee-900 text-[11px] truncate">
            {currentScreenInfo.number}/9 · {currentScreenInfo.name.split('·')[0]}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-coffee-500 rotate-90 shrink-0" />
        </button>

        <button
          onClick={onNext}
          aria-label={t.next}
          className="p-1.5 rounded-lg bg-white border border-coffee-200 text-coffee-800 hover:bg-coffee-100 shadow-sm cursor-pointer"
          title={`${t.next} (1-9)`}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Language Switcher Button */}
        <LanguageSwitcher variant="compact" />

        <button
          onClick={onOpenGuide}
          aria-label={t.guideBtn}
          className="p-1.5 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 hover:bg-amber-200 shadow-sm cursor-pointer font-bold flex items-center gap-1 text-[11px]"
          title={t.guideTitle}
        >
          <span>{t.guideBtn}</span>
        </button>

        <button
          onClick={onToggleOffline}
          className={`px-2 py-1.5 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
            isOffline
              ? 'bg-amber-100 text-amber-900 border-amber-300'
              : 'bg-leaf-100 text-leaf-800 border-leaf-300'
          }`}
        >
          {isOffline ? <WifiOff className="w-3 h-3" /> : <Wifi className="w-3 h-3" />}
          <span className="hidden sm:inline">{isOffline ? t.offline : t.online}</span>
        </button>

        <button
          onClick={onToggleFullscreen}
          aria-label={isFullscreen ? 'Reducir' : 'Pantalla completa'}
          className="p-1.5 rounded-lg bg-white border border-coffee-200 text-coffee-800 hover:bg-coffee-100 shadow-sm cursor-pointer"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>

        {onClose && (
          <button
            onClick={onClose}
            aria-label={t.close}
            className="p-1.5 rounded-lg bg-coffee-800 text-white hover:bg-coffee-900 shadow-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

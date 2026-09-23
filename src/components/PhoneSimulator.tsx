import React, { useState } from 'react';
import { ScreenId, CoffeeLot } from '../types';
import { SCREENS_DATA, INITIAL_LOTS } from '../data/mockData';
import { Screen1Welcome } from './screens/Screen1Welcome';
import { Screen2Dashboard } from './screens/Screen2Dashboard';
import { Screen3LotsCatalog } from './screens/Screen3LotsCatalog';
import { Screen4LotDetail } from './screens/Screen4LotDetail';
import { Screen5RegisterHarvest } from './screens/Screen5RegisterHarvest';
import { Screen6RegisterCost } from './screens/Screen6RegisterCost';
import { Screen7RegisterActivity } from './screens/Screen7RegisterActivity';
import { Screen8RegisterObservation } from './screens/Screen8RegisterObservation';
import { Screen9RegisterTask } from './screens/Screen9RegisterTask';
import { SimulatorTopBar } from './simulator/SimulatorTopBar';
import { PhoneStatusBar } from './simulator/PhoneStatusBar';
import { PhoneTabBar } from './simulator/PhoneTabBar';
import { ScreenDrawerModal } from './simulator/ScreenDrawerModal';
import { NavigationGuideModal } from './simulator/NavigationGuideModal';
import { WifiOff } from 'lucide-react';

interface Props {
  currentScreenId: ScreenId;
  onSelectScreen: (id: ScreenId) => void;
  onClose?: () => void;
  isStandalone?: boolean;
}

export const PhoneSimulator: React.FC<Props> = ({
  currentScreenId,
  onSelectScreen,
  onClose,
  isStandalone = false
}) => {
  const [isOffline, setIsOffline] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [lots, setLots] = useState<CoffeeLot[]>(INITIAL_LOTS);
  const [selectedLot, setSelectedLot] = useState<CoffeeLot>(INITIAL_LOTS[0]);

  const currentScreenInfo = SCREENS_DATA.find((s) => s.id === currentScreenId) || SCREENS_DATA[0];
  const currentIndex = SCREENS_DATA.findIndex((s) => s.id === currentScreenId);

  const handlePrevScreen = () => {
    const prevIdx = (currentIndex - 1 + SCREENS_DATA.length) % SCREENS_DATA.length;
    onSelectScreen(SCREENS_DATA[prevIdx].id);
  };

  const handleNextScreen = () => {
    const nextIdx = (currentIndex + 1) % SCREENS_DATA.length;
    onSelectScreen(SCREENS_DATA[nextIdx].id);
  };

  const renderActiveScreen = () => {
    switch (currentScreenId) {
      case 'SCREEN_2':
        return (
          <Screen1Welcome
            onNavigate={onSelectScreen}
            isOffline={isOffline}
          />
        );
      case 'SCREEN_21':
        return <Screen2Dashboard onNavigate={onSelectScreen} />;
      case 'SCREEN_19':
        return (
          <Screen3LotsCatalog
            onNavigate={onSelectScreen}
            lots={lots}
            onAddLot={(newLot) => setLots([newLot, ...lots])}
            onSelectLot={(lot) => setSelectedLot(lot)}
          />
        );
      case 'SCREEN_23':
        return <Screen4LotDetail onNavigate={onSelectScreen} lot={selectedLot} />;
      case 'SCREEN_13':
        return <Screen5RegisterHarvest onNavigate={onSelectScreen} />;
      case 'SCREEN_11':
        return <Screen6RegisterCost onNavigate={onSelectScreen} />;
      case 'SCREEN_17':
        return <Screen7RegisterActivity onNavigate={onSelectScreen} />;
      case 'SCREEN_15':
        return <Screen8RegisterObservation onNavigate={onSelectScreen} />;
      case 'SCREEN_9':
        return <Screen9RegisterTask onNavigate={onSelectScreen} />;
      default:
        return (
          <Screen1Welcome
            onNavigate={onSelectScreen}
            isOffline={isOffline}
          />
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full ${isFullscreen ? 'fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-2 sm:p-6' : ''}`}>
      {/* 1. External Simulator Control Toolbar */}
      <SimulatorTopBar
        currentScreenInfo={currentScreenInfo}
        onPrev={handlePrevScreen}
        onNext={handleNextScreen}
        onOpenDrawer={() => setDrawerOpen(true)}
        onOpenGuide={() => setInfoModalOpen(true)}
        isOffline={isOffline}
        onToggleOffline={() => setIsOffline(!isOffline)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => setIsFullscreen(!isFullscreen)}
        onClose={onClose}
      />

      {/* 2. Full 9-Screen Drawer Modal */}
      <ScreenDrawerModal
        isOpen={drawerOpen}
        currentScreenId={currentScreenId}
        onSelectScreen={onSelectScreen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* 3. Architecture & Navigation Guide Modal */}
      <NavigationGuideModal
        isOpen={infoModalOpen}
        onClose={() => setInfoModalOpen(false)}
      />

      {/* 4. Smartphone Bezel Frame (390px Mobile Viewport) */}
      <div className="relative w-full max-w-[380px] sm:max-w-[400px] h-[740px] sm:h-[760px] bg-coffee-950 rounded-[44px] p-3 sm:p-3.5 shadow-2xl border-[5px] border-coffee-800/20 ring-1 ring-black/10 flex flex-col">
        {/* Device Inner Screen Container */}
        <div className="relative w-full h-full bg-[#FAF6F0] rounded-[36px] overflow-hidden flex flex-col border border-coffee-200/60 shadow-inner">
          
          {/* Status Bar */}
          <PhoneStatusBar isOffline={isOffline} />

          {/* Quick Navigator Strip inside phone for instant 9-screen jumping */}
          <div className="bg-coffee-100/90 border-b border-coffee-200 px-3 py-1 flex items-center justify-between text-[11px] shrink-0 z-20">
            <button
              onClick={handlePrevScreen}
              className="text-coffee-700 hover:text-coffee-950 font-bold px-1.5 py-0.5 rounded cursor-pointer"
              title="Pantalla previa"
            >
              ◀
            </button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="font-bold text-coffee-900 flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Pantalla {currentScreenInfo.number} de 9:</span>
              <span className="text-coffee-700 font-semibold truncate max-w-[130px]">{currentScreenInfo.name.split('·')[0]}</span>
              <span className="text-[9px] bg-coffee-200 text-coffee-800 px-1 rounded font-mono">▾</span>
            </button>
            <button
              onClick={handleNextScreen}
              className="text-coffee-700 hover:text-coffee-950 font-bold px-1.5 py-0.5 rounded cursor-pointer"
              title="Siguiente pantalla"
            >
              ▶
            </button>
          </div>

          {/* Offline Banner when in Field Mode */}
          {isOffline && (
            <div className="bg-amber-100/95 border-b border-amber-300 px-3.5 py-1.5 flex items-center justify-between text-[11px] text-amber-950 font-bold shrink-0 z-20 shadow-xs">
              <div className="flex items-center gap-1.5">
                <WifiOff className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                <span>Modo de Campo: Operando sin conexión</span>
              </div>
              <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-mono">
                Local OK
              </span>
            </div>
          )}

          {/* Active Screen Scrollable Body */}
          <div className="flex-1 overflow-y-auto no-scrollbar relative">
            {renderActiveScreen()}
          </div>

          {/* 5-Slot Ergonomic Bottom Tab Bar */}
          <PhoneTabBar
            currentScreenId={currentScreenId}
            onSelectScreen={onSelectScreen}
          />

          {/* Bottom Home Indicator Bar */}
          <div className="h-4 bg-[#FCF9F3] flex items-center justify-center pb-1 shrink-0">
            <div className="w-28 h-1 bg-coffee-900/40 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
};

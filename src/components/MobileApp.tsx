import React, { useState } from 'react';
import { ScreenId, CoffeeLot } from '../types';
import { SCREENS_DATA, INITIAL_LOTS } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './common/LanguageSwitcher';
import { Screen1Welcome } from './screens/Screen1Welcome';
import { Screen2Dashboard } from './screens/Screen2Dashboard';
import { Screen3LotsCatalog } from './screens/Screen3LotsCatalog';
import { Screen4LotDetail } from './screens/Screen4LotDetail';
import { Screen5RegisterHarvest } from './screens/Screen5RegisterHarvest';
import { Screen6RegisterCost } from './screens/Screen6RegisterCost';
import { Screen7RegisterActivity } from './screens/Screen7RegisterActivity';
import { Screen8RegisterObservation } from './screens/Screen8RegisterObservation';
import { Screen9RegisterTask } from './screens/Screen9RegisterTask';
import { PhoneTabBar } from './simulator/PhoneTabBar';
import { ScreenDrawerModal } from './simulator/ScreenDrawerModal';
import { NavigationGuideModal } from './simulator/NavigationGuideModal';
import { Coffee, Menu, Wifi, WifiOff, HelpCircle } from 'lucide-react';

export const MobileApp: React.FC = () => {
  const [currentScreenId, setCurrentScreenId] = useState<ScreenId>('SCREEN_2');
  const [isOffline, setIsOffline] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [lots, setLots] = useState<CoffeeLot[]>(INITIAL_LOTS);
  const [selectedLot, setSelectedLot] = useState<CoffeeLot>(INITIAL_LOTS[0]);

  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const renderActiveScreen = () => {
    switch (currentScreenId) {
      case 'SCREEN_2':
        return (
          <Screen1Welcome
            onNavigate={setCurrentScreenId}
            isOffline={isOffline}
          />
        );
      case 'SCREEN_21':
        return <Screen2Dashboard onNavigate={setCurrentScreenId} />;
      case 'SCREEN_19':
        return (
          <Screen3LotsCatalog
            onNavigate={setCurrentScreenId}
            lots={lots}
            onAddLot={(newLot) => setLots([newLot, ...lots])}
            onSelectLot={(lot) => setSelectedLot(lot)}
          />
        );
      case 'SCREEN_23':
        return <Screen4LotDetail onNavigate={setCurrentScreenId} lot={selectedLot} />;
      case 'SCREEN_13':
        return <Screen5RegisterHarvest onNavigate={setCurrentScreenId} />;
      case 'SCREEN_11':
        return <Screen6RegisterCost onNavigate={setCurrentScreenId} />;
      case 'SCREEN_17':
        return <Screen7RegisterActivity onNavigate={setCurrentScreenId} />;
      case 'SCREEN_15':
        return <Screen8RegisterObservation onNavigate={setCurrentScreenId} />;
      case 'SCREEN_9':
        return <Screen9RegisterTask onNavigate={setCurrentScreenId} />;
      default:
        return (
          <Screen1Welcome
            onNavigate={setCurrentScreenId}
            isOffline={isOffline}
          />
        );
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F0ECE1] flex justify-center items-stretch sm:py-0">
      {/* Mobile Application Shell Container (Edge-to-Edge on Mobile, Centered on Desktop) */}
      <div className="w-full max-w-[430px] min-h-screen h-[100dvh] bg-[#FAF6F0] text-coffee-900 flex flex-col shadow-2xl relative overflow-hidden sm:border-x sm:border-coffee-200">
        
        {/* Mobile Header Bar - Rectángulo Café Oscuro */}
        <header className="min-h-[56px] bg-[#2A150B] text-white px-3.5 py-2.5 flex items-center justify-between shrink-0 z-30 shadow-md border-b border-[#3D1F10]">
          {/* Brand & Farm */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setCurrentScreenId('SCREEN_2')}
              className="flex items-center gap-2.5 text-left cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="w-8 h-8 rounded-xl bg-[#3E2112] border border-[#5A311B] flex items-center justify-center text-amber-200 shadow-xs">
                <Coffee className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div>
                <h1 className="text-xs sm:text-sm font-serif font-extrabold tracking-wider text-[#FAF5EE] leading-tight uppercase">
                  NOTAS DE CAFÉ
                </h1>
                <p className="text-[10px] text-[#D4AF8B] font-semibold leading-none mt-0.5">
                  Finca El Manantial
                </p>
              </div>
            </button>
          </div>

          {/* Right Header Actions: Sync Toggle + Language (ES / EN) + Guide + Menu */}
          <div className="flex items-center gap-2">
            {/* Sync / Offline Status Pill */}
            <button
              onClick={() => setIsOffline(!isOffline)}
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer ${
                isOffline ? 'bg-amber-700/90 text-white' : 'bg-leaf-700/90 text-white'
              }`}
              title={isOffline ? (isEn ? 'Offline mode - Tap to connect' : 'Modo sin conexión - Toca para conectar') : (isEn ? 'Connected - Tap for offline mode' : 'Sincronizado - Toca para modo offline')}
            >
              {isOffline ? <WifiOff className="w-3 h-3" /> : <Wifi className="w-3 h-3" />}
              <span className="hidden xs:inline">{isOffline ? 'Offline' : (isEn ? 'Sync' : 'Sinc')}</span>
            </button>

            {/* Language Switcher ES / EN */}
            <LanguageSwitcher variant="dark" />

            {/* Quick Navigation Guide */}
            <button
              onClick={() => setGuideOpen(true)}
              className="p-1.5 rounded-lg text-[#D4AF8B] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title={isEn ? 'Navigation Guide' : 'Guía de navegación'}
            >
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* 9-Screens Menu Drawer Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-1.5 rounded-lg text-[#D4AF8B] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title={isEn ? 'All Screens' : 'Todas las pantallas'}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Offline Banner alert when in offline field mode */}
        {isOffline && (
          <div className="bg-amber-100 border-b border-amber-300 px-3.5 py-1.5 flex items-center justify-between text-[11px] text-amber-950 font-bold shrink-0 z-20 shadow-xs">
            <div className="flex items-center gap-1.5">
              <WifiOff className="w-3.5 h-3.5 text-amber-800 shrink-0" />
              <span>{isEn ? 'Field Mode: Working offline without cell coverage' : 'Modo Campo: Operando sin señal celular'}</span>
            </div>
            <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded font-mono font-bold">
              {isEn ? 'Saved Local' : 'Local OK'}
            </span>
          </div>
        )}

        {/* Scrollable Main Screen Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative bg-[#FAF6F0]">
          {renderActiveScreen()}
        </main>

        {/* 5-Tab Ergonomic Bottom Navigation Bar */}
        <PhoneTabBar
          currentScreenId={currentScreenId}
          onSelectScreen={setCurrentScreenId}
        />

        {/* Safe Area Bottom Bar indicator */}
        <div className="h-2 bg-[#FCF9F3] shrink-0" />

        {/* All Screens Drawer Modal */}
        <ScreenDrawerModal
          isOpen={drawerOpen}
          currentScreenId={currentScreenId}
          onSelectScreen={(id) => {
            setCurrentScreenId(id);
            setDrawerOpen(false);
          }}
          onClose={() => setDrawerOpen(false)}
        />

        {/* Navigation Guide Modal */}
        <NavigationGuideModal
          isOpen={guideOpen}
          onClose={() => setGuideOpen(false)}
        />
      </div>
    </div>
  );
};

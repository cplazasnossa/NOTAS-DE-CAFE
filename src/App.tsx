import React, { useState } from 'react';
import { ScreenId, HarvestRecord, ExpenseRecord, CulturalActivity, PhytosanitaryAlert, FarmTask } from './types';
import { ShowcaseLanding } from './components/ShowcaseLanding';
import { PhoneSimulator } from './components/PhoneSimulator';
import { Smartphone, Layout, Sparkles, X, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeMode, setActiveMode] = useState<'showcase' | 'simulator'>('showcase');
  const [currentScreenId, setCurrentScreenId] = useState<ScreenId>('SCREEN_2');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSimulatorFromShowcase = (screenId: ScreenId) => {
    setCurrentScreenId(screenId);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-coffee-900">
      {/* Floating Top Mode Switcher Bar */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-coffee-900/90 text-white p-1.5 rounded-2xl shadow-xl backdrop-blur-md border border-coffee-700/60">
        <button
          onClick={() => {
            setActiveMode('showcase');
            setIsModalOpen(false);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeMode === 'showcase' && !isModalOpen
              ? 'bg-amber-100 text-coffee-900 shadow-sm'
              : 'text-coffee-200 hover:text-white'
          }`}
        >
          <Layout className="w-3.5 h-3.5" />
          <span>Vista Showcase</span>
        </button>

        <button
          onClick={() => {
            setActiveMode('simulator');
            setIsModalOpen(false);
          }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeMode === 'simulator'
              ? 'bg-amber-100 text-coffee-900 shadow-sm'
              : 'text-coffee-200 hover:text-white'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Simulador Móvil</span>
        </button>
      </div>

      {/* Main View Router */}
      {activeMode === 'showcase' ? (
        <ShowcaseLanding
          onOpenScreenSimulator={handleOpenSimulatorFromShowcase}
          onSwitchToFullApp={() => setActiveMode('simulator')}
        />
      ) : (
        <div className="min-h-screen py-8 px-4 sm:px-6 flex flex-col items-center justify-center bg-[#FAF6F0]">
          <div className="w-full max-w-[420px] mb-4 flex items-center justify-between text-xs">
            <button
              onClick={() => setActiveMode('showcase')}
              className="px-3 py-1.5 rounded-xl bg-white border border-coffee-200 text-coffee-800 font-bold hover:bg-coffee-100 transition-colors shadow-sm cursor-pointer"
            >
              ← Volver al Showcase
            </button>
            <span className="font-bold text-coffee-600 uppercase tracking-wider text-[11px]">
              Simulador 390px (Mobile First)
            </span>
          </div>

          <PhoneSimulator
            currentScreenId={currentScreenId}
            onSelectScreen={(id) => setCurrentScreenId(id)}
            isStandalone={true}
          />
        </div>
      )}

      {/* Modal Phone Simulator when launched from Showcase Cards */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-[440px] flex flex-col items-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 sm:top-2 sm:-right-12 z-50 w-9 h-9 rounded-full bg-white text-coffee-900 flex items-center justify-center font-bold shadow-lg hover:bg-coffee-100 cursor-pointer"
              title="Cerrar simulador"
            >
              <X className="w-5 h-5" />
            </button>

            <PhoneSimulator
              currentScreenId={currentScreenId}
              onSelectScreen={(id) => setCurrentScreenId(id)}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { ScreenId } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Home, BarChart3, Layers, Scale, CheckSquare } from 'lucide-react';

interface Props {
  currentScreenId: ScreenId;
  onSelectScreen: (id: ScreenId) => void;
}

export const PhoneTabBar: React.FC<Props> = ({ currentScreenId, onSelectScreen }) => {
  const { t } = useLanguage();

  // Whether current screen is one of the registration forms
  const isRegisterScreen = [
    'SCREEN_13', // 5. Producción
    'SCREEN_11', // 6. Costo
    'SCREEN_17', // 7. Actividad
    'SCREEN_15'  // 8. Sanidad
  ].includes(currentScreenId);

  // Whether current screen is catalog or lot detail
  const isLotsScreen = [
    'SCREEN_19', // 3. Lotes
    'SCREEN_23'  // 4. Ficha de Lote
  ].includes(currentScreenId);

  return (
    <div className="min-h-[56px] h-14 bg-[#FCF9F3] border-t border-coffee-200 grid grid-cols-5 items-center shrink-0 z-30 px-1 relative">
      {/* 1. Inicio */}
      <button
        onClick={() => onSelectScreen('SCREEN_2')}
        className={`flex flex-col items-center justify-center min-h-[48px] py-1 cursor-pointer transition-colors rounded-xl ${
          currentScreenId === 'SCREEN_2' ? 'text-coffee-950 font-black' : 'text-coffee-500 hover:text-coffee-800'
        }`}
        title="1. Inicio - Bienvenida"
      >
        <Home className={`w-5 h-5 ${currentScreenId === 'SCREEN_2' ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[11px] mt-0.5 font-bold">{t.tabHome}</span>
      </button>

      {/* 2. Finca */}
      <button
        onClick={() => onSelectScreen('SCREEN_21')}
        className={`flex flex-col items-center justify-center min-h-[48px] py-1 cursor-pointer transition-colors rounded-xl ${
          currentScreenId === 'SCREEN_21' ? 'text-coffee-950 font-black' : 'text-coffee-500 hover:text-coffee-800'
        }`}
        title="2. Finca - Panel Central"
      >
        <BarChart3 className={`w-5 h-5 ${currentScreenId === 'SCREEN_21' ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[11px] mt-0.5 font-bold">{t.tabFarm}</span>
      </button>

      {/* 3. Lotes */}
      <button
        onClick={() => onSelectScreen('SCREEN_19')}
        className={`flex flex-col items-center justify-center min-h-[48px] py-1 cursor-pointer transition-colors rounded-xl ${
          isLotsScreen ? 'text-coffee-950 font-black' : 'text-coffee-500 hover:text-coffee-800'
        }`}
        title="3. Lotes - Nombre de Lotes y Fichas"
      >
        <Layers className={`w-5 h-5 ${isLotsScreen ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[11px] mt-0.5 font-bold">{t.tabLots}</span>
      </button>

      {/* 4. Registro */}
      <button
        onClick={() => onSelectScreen('SCREEN_13')}
        className={`flex flex-col items-center justify-center min-h-[48px] py-1 cursor-pointer transition-colors rounded-xl ${
          isRegisterScreen ? 'text-coffee-950 font-black' : 'text-coffee-500 hover:text-coffee-800'
        }`}
        title="4. Registro - Báscula y Asientos"
      >
        <Scale className={`w-5 h-5 ${isRegisterScreen ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[11px] mt-0.5 font-bold">{t.tabRecord}</span>
      </button>

      {/* 5. Agenda */}
      <button
        onClick={() => onSelectScreen('SCREEN_9')}
        className={`flex flex-col items-center justify-center min-h-[48px] py-1 cursor-pointer transition-colors rounded-xl ${
          currentScreenId === 'SCREEN_9' ? 'text-coffee-950 font-black' : 'text-coffee-500 hover:text-coffee-800'
        }`}
        title="5. Agenda - Tareas y Pendientes"
      >
        <CheckSquare className={`w-5 h-5 ${currentScreenId === 'SCREEN_9' ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[11px] mt-0.5 font-bold">{t.tabAgenda}</span>
      </button>
    </div>
  );
};

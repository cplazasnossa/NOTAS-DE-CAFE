import React from 'react';
import { ScreenId } from '../../types';
import { SCREENS_DATA } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  currentScreenId: ScreenId;
  onSelectScreen: (id: ScreenId) => void;
  onClose: () => void;
}

export const ScreenDrawerModal: React.FC<Props> = ({
  isOpen,
  currentScreenId,
  onSelectScreen,
  onClose
}) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-5 max-w-sm w-full max-h-[85vh] overflow-y-auto space-y-3 shadow-2xl border border-coffee-200">
        <div className="flex items-center justify-between pb-2 border-b border-coffee-100">
          <div>
            <h3 className="text-sm font-bold text-coffee-900">{t.allScreens}</h3>
            <p className="text-[11px] text-coffee-500">
              {t.allScreens.includes('9') ? '9 Pantallas' : '9 Screens'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-coffee-500 hover:bg-coffee-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-1.5">
          {SCREENS_DATA.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                onSelectScreen(s.id);
                onClose();
              }}
              className={`w-full p-3 rounded-2xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                currentScreenId === s.id
                  ? 'bg-coffee-800 text-white border-coffee-800 shadow-md ring-2 ring-coffee-600/30'
                  : 'bg-parchment text-coffee-900 border-coffee-200 hover:bg-coffee-100 hover:border-coffee-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentScreenId === s.id ? 'bg-amber-200 text-coffee-950' : 'bg-coffee-200 text-coffee-900'}`}>
                  {s.number}
                </span>
                <div>
                  <span className="text-xs font-bold block">{s.name}</span>
                  <span className={`text-[10px] ${currentScreenId === s.id ? 'text-amber-200' : 'text-coffee-500'}`}>
                    {s.subtitle || s.caption}
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-semibold ${currentScreenId === s.id ? 'bg-coffee-700 text-white' : 'bg-white text-coffee-700'}`}>
                {s.id}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

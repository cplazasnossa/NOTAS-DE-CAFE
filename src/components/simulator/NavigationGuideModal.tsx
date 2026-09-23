import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationGuideModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  if (!isOpen) return null;

  const isEn = language === 'en';

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-coffee-200">
        <div className="flex items-center justify-between pb-2 border-b border-coffee-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              💡
            </div>
            <h3 className="text-base font-bold text-coffee-900">
              {t.guideTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-coffee-500 hover:bg-coffee-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs text-coffee-700 space-y-3 leading-relaxed">
          <div className="p-3 bg-parchment rounded-xl border border-coffee-200">
            <strong className="text-coffee-900 block text-xs mb-1 font-bold">
              {isEn ? 'Bottom Bar with 5 Tabs (Field Ergonomics)' : 'Panel Inferior de 5 Pestañas (Ergonomía de Campo)'}
            </strong>
            <p>
              {isEn
                ? 'For maximum touch comfort on mobile devices (48px+ touch targets), the bottom bar organizes sections in order:'
                : 'Para máxima comodidad táctil en dispositivos móviles (botones de más de 48px de área táctil), el panel inferior organiza las secciones:'}
            </p>
            <ol className="list-decimal pl-4 mt-2 space-y-1 text-coffee-900 font-medium">
              <li><strong>{t.tabHome} (1):</strong> {isEn ? 'Welcome and workday opening note.' : 'Bienvenida y apunte de inicio de jornada.'}</li>
              <li><strong>{t.tabFarm} (2):</strong> {isEn ? 'Central dashboard with harvest and active lots summary.' : 'Panel central con resumen de cosecha y estado de lotes.'}</li>
              <li><strong>{t.tabLots} (3):</strong> {isEn ? 'Coffee lots cadastre and detailed agronomic sheets.' : 'Catastro de cafetales y fichas agronómicas detalladas.'}</li>
              <li><strong>{t.tabRecord} (4):</strong> {isEn ? 'Harvest weighing scale and field records (costs, labor, health).' : 'Báscula de pesaje de cosecha y accesos directos de campo.'}</li>
              <li><strong>{t.tabAgenda} (5):</strong> {isEn ? "Daily task log and foreman's pending items." : 'Cuaderno de tareas y pendientes del día.'}</li>
            </ol>
          </div>

          <div className="p-3 bg-leaf-50 rounded-xl border border-leaf-200 space-y-1.5">
            <strong className="text-leaf-900 block text-xs font-bold">
              {isEn ? 'Complementary navigation:' : 'Navegación complementaria:'}
            </strong>
            <ul className="list-disc pl-4 space-y-1 text-leaf-800">
              <li>
                <strong>{isEn ? 'Top Bar «1 to 9»:' : 'Barra superior «1 a 9»:'}</strong> {isEn ? 'Allows jumping or stepping through the 9 screens sequentially using ◀ ▶ arrows or the dropdown.' : 'Permite saltar o recorrer secuencialmente las 9 pantallas con las flechas ◀ ▶ o el menú desplegable.'}
              </li>
              <li>
                <strong>{isEn ? 'Field Actions in Registration (4):' : 'Acciones de Campo en Registro (4):'}</strong> {isEn ? 'Easily switch between Cost (6), Labor Activity (7) and Phytosanitary Health (8).' : 'Cambia rápidamente entre Costo (6), Actividad (7) y Sanidad (8).'}
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-coffee-800 hover:bg-coffee-900 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
        >
          {isEn ? 'Got it, back to app' : 'Entendido, volver a la app'}
        </button>
      </div>
    </div>
  );
};

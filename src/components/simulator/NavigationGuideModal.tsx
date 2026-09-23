import React from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavigationGuideModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full space-y-4 shadow-2xl border border-coffee-200">
        <div className="flex items-center justify-between pb-2 border-b border-coffee-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              💡
            </div>
            <h3 className="text-base font-bold text-coffee-900">
              Arquitectura de Navegación Móvil
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
              Panel Inferior de 5 Pestañas (Ergonomía de Campo)
            </strong>
            <p>
              Para máxima comodidad táctil en dispositivos móviles (botones de más de 48px de área táctil), el panel inferior organiza las secciones en el orden exacto:
            </p>
            <ol className="list-decimal pl-4 mt-2 space-y-1 text-coffee-900 font-medium">
              <li><strong>Inicio (1):</strong> Bienvenida y sincronización de apertura de jornada.</li>
              <li><strong>Finca (2):</strong> Panel central con resumen de cosecha y estado de lotes.</li>
              <li><strong>Lotes (3):</strong> Catastro de cafetales y fichas agronómicas detalladas.</li>
              <li><strong>Registro (4):</strong> Báscula de pesaje de cosecha y accesos directos de campo a costos, labores y sanidad.</li>
              <li><strong>Agenda (5):</strong> Cuaderno de tareas y pendientes del día.</li>
            </ol>
          </div>

          <div className="p-3 bg-leaf-50 rounded-xl border border-leaf-200 space-y-1.5">
            <strong className="text-leaf-900 block text-xs font-bold">
              Navegación complementaria:
            </strong>
            <ul className="list-disc pl-4 space-y-1 text-leaf-800">
              <li>
                <strong>Barra superior «1 a 10»:</strong> Permite saltar o recorrer secuencialmente las 10 pantallas con las flechas ◀ ▶, el menú desplegable y el acceso de cuenta.
              </li>
              <li>
                <strong>Al final de la pantalla de Registro (4):</strong> Se encuentran las «Acciones de Campo» para cambiar entre Costo (6), Actividad (7) y Sanidad (8).
              </li>
              <li>
                <strong>Pantalla 10 (Ingreso & Suscripción):</strong> Permite iniciar sesión con usuario y contraseña como Propietario, Mayordomo, Calidad o Capataz, y gestionar planes de suscripción de pago (Individual, Familiar, Cooperativa).
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-coffee-800 hover:bg-coffee-900 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-sm"
        >
          Entendido, volver a la app
        </button>
      </div>
    </div>
  );
};

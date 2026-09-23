import React from 'react';
import { Smartphone, Shield, Sun } from 'lucide-react';

export const DesignPillars: React.FC = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-[#EADFCF]">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-coffee-600 block mb-2">
          Fundamentos de Diseño
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-coffee-900">
          Diseñado con empatía para el trabajo diario en la finca
        </h3>
        <p className="text-sm text-coffee-700 mt-3">
          Cada pantalla equilibra la eficiencia operativa del cuaderno físico tradicional con la potencia del registro agronómico moderno.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Pilar 1 */}
        <div className="bg-white rounded-2xl p-7 border border-coffee-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center text-coffee-800 mb-5">
            <Smartphone className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-coffee-900 mb-2">1. Interacción a Prueba de Campo</h4>
          <p className="text-sm text-coffee-600 leading-relaxed">
            Botones y áreas táctiles de mínimo 48px pensados para dedos de trabajo o manos enguantadas. Flujos de un solo toque para iniciar jornada o asentar gastos sin perder tiempo en menús anidados.
          </p>
        </div>

        {/* Pilar 2 */}
        <div className="bg-white rounded-2xl p-7 border border-coffee-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center text-leaf-700 mb-5">
            <Shield className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-coffee-900 mb-2">2. Autonomía Offline Primero</h4>
          <p className="text-sm text-coffee-600 leading-relaxed">
            En los cafetales la señal es escasa o nula. Toda la app opera localmente en SQLite/IndexedDB con persistencia instantánea y sincronización en segundo plano al volver a la casa de máquinas con WiFi.
          </p>
        </div>

        {/* Pilar 3 */}
        <div className="bg-white rounded-2xl p-7 border border-coffee-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-900 mb-5">
            <Sun className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-coffee-900 mb-2">3. Paleta Cálida y Alto Contraste</h4>
          <p className="text-sm text-coffee-600 leading-relaxed">
            Tierra y grano: marrón tostado (#3D2314), verde cafeto (#4D6A4E) y fondo apergaminado (#FCF9F3). Elimina el deslumbramiento blanco y garantiza lectura instantánea bajo pleno sol.
          </p>
        </div>
      </div>
    </section>
  );
};

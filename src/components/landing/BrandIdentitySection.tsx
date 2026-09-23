import React, { useState } from 'react';
import {
  LOGO_LINEAL_URL,
  LOGO_SILUETA_URL,
  LOGO_EMBLEMA_URL
} from '../../data/mockData';
import { SafeImage } from '../BrandAssets';
import { Check } from 'lucide-react';

export const BrandIdentitySection: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1800);
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 border-b border-[#EADFCF]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-coffee-600 block">
            Identidad Gráfica & Branding
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-coffee-900">
            El grano de café estilizado y la esencia del origen
          </h3>
          <p className="text-sm text-coffee-700 leading-relaxed">
            La identidad visual de <strong>Notas de Café</strong> combina la elegancia contemporánea con la autenticidad del campo colombiano y latinoamericano. El logotipo principal evoca la pureza del fruto maduro y el trazo lineal orgánico.
          </p>

          {/* Color Tokens */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-coffee-600">
                Paleta de Colores Oficial
              </p>
              {copiedColor && (
                <span className="text-[11px] font-bold text-leaf-700 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Copiado {copiedColor}
                </span>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3 text-center">
              <div
                onClick={() => copyHex('#3D2314')}
                className="space-y-1 cursor-pointer group"
                title="Clic para copiar"
              >
                <div className="h-14 rounded-xl bg-[#3D2314] shadow-sm border border-coffee-800 group-hover:scale-105 transition-transform" />
                <span className="text-[11px] font-bold text-coffee-900 block">Café Tostado</span>
                <span className="text-[10px] text-coffee-500 font-mono">#3D2314</span>
              </div>

              <div
                onClick={() => copyHex('#4D6A4E')}
                className="space-y-1 cursor-pointer group"
                title="Clic para copiar"
              >
                <div className="h-14 rounded-xl bg-[#4D6A4E] shadow-sm group-hover:scale-105 transition-transform" />
                <span className="text-[11px] font-bold text-coffee-900 block">Verde Cafeto</span>
                <span className="text-[10px] text-coffee-500 font-mono">#4D6A4E</span>
              </div>

              <div
                onClick={() => copyHex('#FCF9F3')}
                className="space-y-1 cursor-pointer group"
                title="Clic para copiar"
              >
                <div className="h-14 rounded-xl bg-[#FCF9F3] border border-coffee-200 shadow-sm group-hover:scale-105 transition-transform" />
                <span className="text-[11px] font-bold text-coffee-900 block">Pergamino</span>
                <span className="text-[10px] text-coffee-500 font-mono">#FCF9F3</span>
              </div>

              <div
                onClick={() => copyHex('#9B3D2B')}
                className="space-y-1 cursor-pointer group"
                title="Clic para copiar"
              >
                <div className="h-14 rounded-xl bg-[#9B3D2B] shadow-sm group-hover:scale-105 transition-transform" />
                <span className="text-[11px] font-bold text-coffee-900 block">Cereza Madura</span>
                <span className="text-[10px] text-coffee-500 font-mono">#9B3D2B</span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Variations */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-coffee-200 shadow-sm">
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-coffee-600 mb-6">
            Variaciones del Isotipo y Elementos Gráficos
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            
            {/* Asset 1: Grano Lineal */}
            <div className="p-6 rounded-2xl bg-parchment border border-coffee-200 flex flex-col items-center justify-between">
              <div className="w-16 h-16 flex items-center justify-center my-4">
                <SafeImage
                  src={LOGO_LINEAL_URL}
                  alt="Grano Lineal Orgánico"
                  className="w-14 h-14 object-contain"
                  fallbackType="logo-lineal"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-coffee-900 block">Trazo Lineal Orgánico</span>
                <p className="text-[11px] text-coffee-500 mt-1">
                  Inclinación 22° y grosor de 3.2px para cabeceras y UI.
                </p>
              </div>
            </div>

            {/* Asset 2: Silueta Grano */}
            <div className="p-6 rounded-2xl bg-parchment border border-coffee-200 flex flex-col items-center justify-between">
              <div className="w-16 h-16 flex items-center justify-center my-4">
                <SafeImage
                  src={LOGO_SILUETA_URL}
                  alt="Silueta Isotipo Sólido"
                  className="w-14 h-14 object-contain"
                  fallbackType="logo-silueta"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-coffee-900 block">Silueta Isotipo Sólido</span>
                <p className="text-[11px] text-coffee-500 mt-1">
                  Icono de app móvil (App Icon / Favicon de alto impacto).
                </p>
              </div>
            </div>

            {/* Asset 3: Emblema Editorial */}
            <div className="p-6 rounded-2xl bg-parchment border border-coffee-200 flex flex-col items-center justify-between">
              <div className="w-16 h-16 flex items-center justify-center my-4">
                <SafeImage
                  src={LOGO_EMBLEMA_URL}
                  alt="Emblema Editorial Notas de Café"
                  className="w-14 h-14 object-contain"
                  fallbackType="logo-emblema"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-coffee-900 block">Emblema Editorial</span>
                <p className="text-[11px] text-coffee-500 mt-1">
                  Identidad de marca para exportación, catas y reportes.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

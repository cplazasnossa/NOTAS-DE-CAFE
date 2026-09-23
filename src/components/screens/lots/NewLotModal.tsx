import React, { useState } from 'react';
import { CoffeeLot } from '../../../types';
import { X, Trees, PlusCircle } from 'lucide-react';
import { FeedbackButton } from '../../common/FeedbackButton';
import { FormAlert } from '../../common/FormAlert';
import { useAsyncFormSubmit } from '../../../hooks/useAsyncFormSubmit';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newLot: CoffeeLot) => void;
}

const VARIETIES = [
  'Castillo Tambo',
  'Caturra Chiroso',
  'Borbón Rosado',
  'Geisha',
  'Colombia',
  'Tabi',
  'Typica',
  'Cenicafé 1'
];

export const NewLotModal: React.FC<Props> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [variety, setVariety] = useState('Castillo Tambo');
  const [areaHa, setAreaHa] = useState('');
  const [altitudeMsnm, setAltitudeMsnm] = useState('1750');
  const [treesCount, setTreesCount] = useState('');
  const [status, setStatus] = useState<CoffeeLot['status']>('En Cosecha');
  const [brixAverage, setBrixAverage] = useState('22.5');
  const [notes, setNotes] = useState('');

  const { isSaving, isSuccess, errorMessage, clearError, executeSubmit } = useAsyncFormSubmit();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    executeSubmit(
      () => {
        if (!name.trim()) {
          return 'Por favor ingresa un nombre para el lote (ej: Lote El Porvenir).';
        }
        const parsedArea = parseFloat(areaHa);
        if (!areaHa || isNaN(parsedArea) || parsedArea <= 0) {
          return 'Por favor especifica un área en hectáreas válida (ej: 2.5).';
        }
        return null;
      },
      () => {
        const parsedArea = parseFloat(areaHa);
        const parsedTrees = parseInt(treesCount, 10) || Math.round(parsedArea * 5000);
        const parsedAltitude = parseInt(altitudeMsnm, 10) || 1750;
        const parsedBrix = parseFloat(brixAverage) || 22.0;

        const newLot: CoffeeLot = {
          id: 'lot-' + Date.now(),
          name: name.trim(),
          variety,
          areaHa: parsedArea,
          altitudeMsnm: parsedAltitude,
          treesCount: parsedTrees,
          plantedYear: new Date().getFullYear() - 2,
          floweringPct: 75,
          brixAverage: parsedBrix,
          status,
          lastActivity: 'Registro inicial de lote',
          healthRating: 95,
          notes: notes.trim() || `Lote sembrado con variedad ${variety} a ${parsedAltitude} msnm con ${parsedTrees.toLocaleString()} árboles.`
        };

        onSave(newLot);
      },
      {
        delayMs: 450,
        successDurationMs: 1200,
        onSuccess: () => {
          setTimeout(() => {
            onClose();
            setName('');
            setAreaHa('');
            setTreesCount('');
            setNotes('');
          }, 900);
        }
      }
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 animate-fade-in">
      <div
        className="w-full max-w-[390px] bg-white rounded-3xl p-5 border border-coffee-200 shadow-2xl max-h-[90vh] overflow-y-auto space-y-4 text-left animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-coffee-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-coffee-800 text-white flex items-center justify-center">
              <Trees className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-coffee-900">Registrar Nuevo Lote</h3>
              <p className="text-[10px] text-coffee-500">Catastro agronómico y delimitación</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              clearError();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-coffee-100 hover:bg-coffee-200 text-coffee-700 flex items-center justify-center cursor-pointer"
            aria-label="Cerrar formulario"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {errorMessage && (
          <FormAlert
            message={errorMessage}
            onDismiss={clearError}
          />
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Nombre del Lote */}
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Nombre del Lote *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Lote El Porvenir, La Loma #3..."
              className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
            />
          </div>

          {/* Variedad de Café */}
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Variedad de Café
            </label>
            <select
              value={variety}
              onChange={(e) => setVariety(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 cursor-pointer"
            >
              {VARIETIES.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>

          {/* Área (ha) y Árboles en Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="text-xs font-bold text-coffee-800 block mb-1">
                Área (Hectáreas) *
              </label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                inputMode="decimal"
                value={areaHa}
                onChange={(e) => setAreaHa(e.target.value)}
                placeholder="Ej: 2.5"
                className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 font-mono focus:outline-none focus:ring-2 focus:ring-coffee-700"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-coffee-800 block mb-1">
                Árboles Estimados
              </label>
              <input
                type="number"
                min="100"
                inputMode="numeric"
                value={treesCount}
                onChange={(e) => setTreesCount(e.target.value)}
                placeholder="Ej: 12500"
                className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 font-mono focus:outline-none focus:ring-2 focus:ring-coffee-700"
              />
            </div>
          </div>

          {/* Altitud (msnm) y Grados Brix */}
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label className="text-xs font-bold text-coffee-800 block mb-1">
                Altitud (msnm)
              </label>
              <input
                type="number"
                min="800"
                max="2400"
                inputMode="numeric"
                value={altitudeMsnm}
                onChange={(e) => setAltitudeMsnm(e.target.value)}
                placeholder="Ej: 1780"
                className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 font-mono focus:outline-none focus:ring-2 focus:ring-coffee-700"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-coffee-800 block mb-1">
                Maduración (°Brix)
              </label>
              <input
                type="number"
                step="0.5"
                min="10"
                max="30"
                inputMode="decimal"
                value={brixAverage}
                onChange={(e) => setBrixAverage(e.target.value)}
                placeholder="Ej: 23"
                className="w-full min-h-[44px] px-3.5 py-2 text-xs sm:text-sm bg-parchment rounded-xl border border-coffee-200 text-coffee-900 font-mono focus:outline-none focus:ring-2 focus:ring-coffee-700"
              />
            </div>
          </div>

          {/* Estado Agronómico */}
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Estado Inicial del Lote
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {(['En Cosecha', 'Floración', 'Óptimo', 'Mantenimiento'] as CoffeeLot['status'][]).map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setStatus(st)}
                  className={`min-h-[42px] py-1.5 px-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                    status === st
                      ? 'bg-coffee-800 text-white border-coffee-800 shadow-xs'
                      : 'bg-parchment text-coffee-700 border-coffee-200 hover:bg-coffee-100'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* Notas agronómicas */}
          <div>
            <label className="text-xs font-bold text-coffee-800 block mb-1">
              Notas de Manejo (Opcional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ej: Suelo franco arenoso, sombrío con guamos, pendiente del 25%..."
              rows={2}
              className="w-full px-3.5 py-2 text-xs bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700"
            />
          </div>

          {/* Botón de Guardar Lote */}
          <div className="pt-2">
            <FeedbackButton
              type="submit"
              isLoading={isSaving}
              isSuccess={isSuccess}
              loadingText="Registrando lote en catastro..."
              successText="¡Lote registrado exitosamente!"
            >
              <PlusCircle className="w-4 h-4 text-amber-200" />
              <span>Guardar Nuevo Lote</span>
            </FeedbackButton>
          </div>
        </form>
      </div>
    </div>
  );
};

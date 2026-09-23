import React, { useState } from 'react';
import { ScreenId, ExpenseRecord } from '../../types';
import { INITIAL_EXPENSES, INITIAL_LOTS } from '../../data/mockData';
import { DollarSign, ChevronDown } from 'lucide-react';
import { ScreenHeader } from '../common/ScreenHeader';
import { FeedbackButton } from '../common/FeedbackButton';
import { FormAlert } from '../common/FormAlert';
import { ScreenFooterNav } from '../common/ScreenFooterNav';
import { ExpenseHistoryFeed } from './costs/ExpenseHistoryFeed';
import { useAsyncFormSubmit } from '../../hooks/useAsyncFormSubmit';

interface Props {
  onNavigate: (screen: ScreenId) => void;
  onAddExpense?: (expense: ExpenseRecord) => void;
}

const CATEGORIES: ExpenseRecord['category'][] = [
  'Jornales',
  'Fertilizantes',
  'Transporte',
  'Beneficio',
  'Combustible'
];

export const Screen6RegisterCost: React.FC<Props> = ({ onNavigate, onAddExpense }) => {
  const [category, setCategory] = useState<ExpenseRecord['category']>('Jornales');
  const [amount, setAmount] = useState<string>('480000');
  const [description, setDescription] = useState('8 Jornales de recolección selectiva');
  const [lotName, setLotName] = useState('Lote La Loma');
  const [expenses, setExpenses] = useState<ExpenseRecord[]>(INITIAL_EXPENSES);

  const { isSaving, isSuccess, errorMessage, clearError, executeSubmit } = useAsyncFormSubmit();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = Number(amount);

    executeSubmit(
      () => {
        if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
          return 'Por favor escribe un monto válido mayor a $0 en pesos colombianos (ej: 85.000).';
        }
        return null;
      },
      () => {
        const newExpense: ExpenseRecord = {
          id: 'exp-' + Date.now(),
          category,
          description: description.trim() || `Gasto en ${category}`,
          amountCop: parsedAmount,
          date: 'Hoy · 14 Oct',
          lotName,
          status: 'Pagado'
        };

        setExpenses((prev) => [newExpense, ...prev]);
        if (onAddExpense) onAddExpense(newExpense);
      }
    );
  };

  return (
    <div className="flex flex-col h-full bg-[#FAF6F0] text-coffee-900 pb-8 px-4 sm:px-5 pt-3 space-y-4 overflow-y-auto no-scrollbar">
      {/* 1. Encabezado */}
      <ScreenHeader
        title="Registrar Costo"
        subtitle="Control contable de jornales, fletes e insumos"
        category="Finanzas de la Finca"
        showBack={true}
        onBack={() => onNavigate('SCREEN_13')}
        backLabel="Volver a Registro"
        icon={<DollarSign className="w-5 h-5 text-amber-900" />}
      />

      {/* 2. Alerta de error */}
      {errorMessage && (
        <FormAlert
          message={errorMessage}
          onDismiss={clearError}
        />
      )}

      {/* 3. Formulario */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl p-5 border border-coffee-200 shadow-sm space-y-4">
        {/* Categoría */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            Rubro o Categoría
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`py-2 px-1 text-xs font-bold rounded-xl border transition-all cursor-pointer min-h-[42px] ${
                  category === cat
                    ? 'bg-coffee-800 text-white border-coffee-800 shadow-xs'
                    : 'bg-parchment text-coffee-700 border-coffee-200 hover:bg-coffee-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Monto en COP */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            Monto del Desembolso ($ COP)
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-3 text-coffee-500 font-bold">$</span>
            <input
              type="number"
              inputMode="numeric"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="w-full min-h-[46px] pl-8 pr-3 py-2.5 bg-parchment rounded-xl border border-coffee-200 text-coffee-950 font-mono text-base font-bold focus:outline-none focus:ring-2 focus:ring-coffee-700"
            />
          </div>
        </div>

        {/* Descripción */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            Concepto del Gasto
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ej: Pago de 4 jornales de desyerba..."
            className="w-full min-h-[46px] px-3.5 py-2.5 bg-parchment rounded-xl border border-coffee-200 text-coffee-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-coffee-700"
          />
        </div>

        {/* Lote Afectado */}
        <div>
          <label className="text-xs font-bold text-coffee-800 block mb-1">
            Lote o Centro de Costo
          </label>
          <div className="relative">
            <select
              value={lotName}
              onChange={(e) => setLotName(e.target.value)}
              className="w-full min-h-[46px] text-xs sm:text-sm font-semibold py-2.5 px-3 bg-parchment rounded-xl border border-coffee-200 text-coffee-900 focus:outline-none focus:ring-2 focus:ring-coffee-700 appearance-none cursor-pointer"
            >
              {INITIAL_LOTS.map((lot) => (
                <option key={lot.id} value={lot.name}>
                  {lot.name}
                </option>
              ))}
              <option value="Administración General">Administración General (Toda la Finca)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-coffee-500 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* Botón Guardar Gasto */}
        <FeedbackButton
          type="submit"
          isLoading={isSaving}
          isSuccess={isSuccess}
          loadingText="Asentando gasto en contabilidad..."
          successText="¡Gasto asentado correctamente!"
        >
          <span>Asentar Gasto en el Libro</span>
        </FeedbackButton>
      </form>

      {/* 4. Historial de Gastos */}
      <ExpenseHistoryFeed expenses={expenses} />

      {/* 5. Navegación Inferior */}
      <ScreenFooterNav
        onBack={() => onNavigate('SCREEN_13')}
        backLabel="Atrás"
        onNext={() => onNavigate('SCREEN_17')}
        nextLabel="Siguiente"
      />
    </div>
  );
};

import React from 'react';
import { ExpenseRecord } from '../../../types';
import { DollarSign } from 'lucide-react';
import { EmptyState } from '../../common/EmptyState';
import { formatCurrency } from '../../../utils/formatters';
import { useLanguage } from '../../../context/LanguageContext';

interface Props {
  expenses: ExpenseRecord[];
}

export const ExpenseHistoryFeed: React.FC<Props> = ({ expenses }) => {
  const totalSpent = expenses.reduce((sum, item) => sum + item.amountCop, 0);
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const translateCategory = (cat: string) => {
    switch (cat) {
      case 'Jornales': return isEn ? 'Labor / Wages' : 'Jornales';
      case 'Fertilizantes': return isEn ? 'Fertilizers' : 'Fertilizantes';
      case 'Transporte': return isEn ? 'Transport' : 'Transporte';
      case 'Beneficio': return isEn ? 'Processing' : 'Beneficio';
      case 'Combustible': return isEn ? 'Fuel' : 'Combustible';
      default: return cat;
    }
  };

  const translateStatus = (st: string) => {
    if (st === 'Pagado') return isEn ? 'Paid' : 'Pagado';
    if (st === 'Pendiente') return isEn ? 'Pending' : 'Pendiente';
    return st;
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs px-1">
        <span className="font-bold uppercase tracking-wider text-coffee-700">
          {t.costRecentTitle}
        </span>
        <span className="text-coffee-600 font-bold">
          {isEn ? 'Total:' : 'Total:'} {formatCurrency(totalSpent)}
        </span>
      </div>

      {expenses.length === 0 ? (
        <EmptyState
          icon={DollarSign}
          title={isEn ? "No expenses logged" : "Sin gastos registrados"}
          description={isEn
            ? "No expense records logged for this period yet. Log a new cost above."
            : "Aún no se han anotado salidas de dinero para este período. Registra un nuevo gasto arriba."}
        />
      ) : (
        <div className="space-y-2">
          {expenses.slice(0, 4).map((exp) => (
            <div
              key={exp.id}
              className="p-3 bg-white rounded-2xl border border-coffee-200 shadow-sm flex items-center justify-between text-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-coffee-900">{exp.description}</span>
                  <span className="text-[10px] bg-coffee-100 text-coffee-800 px-1.5 py-0.5 rounded font-semibold">
                    {translateCategory(exp.category)}
                  </span>
                </div>
                <div className="text-[11px] text-coffee-500 mt-0.5 flex items-center gap-2">
                  <span>{exp.lotName}</span>
                  <span>·</span>
                  <span>{exp.date}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-coffee-950 font-mono block">
                  {formatCurrency(exp.amountCop)}
                </span>
                <span className="text-[10px] text-leaf-700 font-bold">
                  {translateStatus(exp.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

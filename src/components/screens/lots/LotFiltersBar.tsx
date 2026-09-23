import React from 'react';
import { LotStatusFilter } from '../../../hooks/useLotFilters';
import { Search } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

interface Props {
  search: string;
  onSearchChange: (val: string) => void;
  filter: LotStatusFilter;
  onFilterChange: (val: LotStatusFilter) => void;
  counts: {
    total: number;
    cosecha: number;
    optimo: number;
  };
}

export const LotFiltersBar: React.FC<Props> = ({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  counts
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-coffee-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.lotsSearchPlaceholder}
          className="w-full min-h-[44px] pl-10 pr-4 py-2 text-xs bg-white rounded-2xl border border-coffee-200 text-coffee-900 placeholder:text-coffee-400 focus:outline-none focus:ring-2 focus:ring-coffee-700 shadow-xs"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        <button
          type="button"
          onClick={() => onFilterChange('todos')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            filter === 'todos'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'bg-white text-coffee-700 border border-coffee-200 hover:bg-coffee-50'
          }`}
        >
          {t.lotsFilterAll} ({counts.total})
        </button>
        <button
          type="button"
          onClick={() => onFilterChange('cosecha')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            filter === 'cosecha'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'bg-white text-coffee-700 border border-coffee-200 hover:bg-coffee-50'
          }`}
        >
          {t.lotsFilterHarvest} ({counts.cosecha})
        </button>
        <button
          type="button"
          onClick={() => onFilterChange('optimo')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
            filter === 'optimo'
              ? 'bg-coffee-800 text-white shadow-xs'
              : 'bg-white text-coffee-700 border border-coffee-200 hover:bg-coffee-50'
          }`}
        >
          {t.lotsFilterOptimal} ({counts.optimo})
        </button>
      </div>
    </div>
  );
};

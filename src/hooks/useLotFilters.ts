import { useState, useMemo } from 'react';
import { CoffeeLot } from '../types';

export type LotStatusFilter = 'todos' | 'cosecha' | 'optimo';

/**
 * Custom hook to encapsulate searching, filtering, and counting lots in catastro.
 */
export function useLotFilters(lots: CoffeeLot[]) {
  const [filter, setFilter] = useState<LotStatusFilter>('todos');
  const [search, setSearch] = useState('');

  const filteredLots = useMemo(() => {
    const query = search.toLowerCase().trim();
    return lots.filter((lot) => {
      const matchesSearch =
        !query ||
        lot.name.toLowerCase().includes(query) ||
        lot.variety.toLowerCase().includes(query) ||
        (lot.notes && lot.notes.toLowerCase().includes(query));

      if (!matchesSearch) return false;
      if (filter === 'todos') return true;
      if (filter === 'cosecha') return lot.status === 'En Cosecha';
      if (filter === 'optimo') return lot.status === 'Óptimo';
      return true;
    });
  }, [lots, search, filter]);

  const counts = useMemo(() => {
    return {
      total: lots.length,
      cosecha: lots.filter((l) => l.status === 'En Cosecha').length,
      optimo: lots.filter((l) => l.status === 'Óptimo').length
    };
  }, [lots]);

  const resetFilters = () => {
    setSearch('');
    setFilter('todos');
  };

  return {
    filter,
    setFilter,
    search,
    setSearch,
    filteredLots,
    counts,
    resetFilters
  };
}

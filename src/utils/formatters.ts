/**
 * Utility formatters for agricultural and financial values in Notas de Café.
 */

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatNumber = (value: number, decimals: number = 0): string => {
  return new Intl.NumberFormat('es-CO', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  }).format(value);
};

/**
 * In Colombian coffee metrics: 1 arroba (@) = 12.5 kg of cherry coffee.
 */
export const ARROBA_IN_KG = 12.5;

export const arrobasToKg = (arrobas: number): number => {
  return Math.round(arrobas * ARROBA_IN_KG * 10) / 10;
};

export const kgToArrobas = (kg: number): number => {
  return Math.round((kg / ARROBA_IN_KG) * 10) / 10;
};

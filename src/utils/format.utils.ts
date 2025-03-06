/**
 * Formats a number as Nigerian Naira in compact notation
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export function formatInNGN(amount: number): string {
  return new Intl.NumberFormat(undefined, {
    currency: 'NGN',
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    compactDisplay: 'short',
  }).format(amount);
}

/**
 * Formats a number as Nigerian Naira with no decimal places
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export function formatInNGNFull(amount: number): string {
  return new Intl.NumberFormat(undefined, {
    currency: 'NGN',
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }).format(amount);
}
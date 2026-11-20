/**
 * Normalizes a word for placement in wordsearch grid:
 * - Converts to uppercase
 * - Removes spaces, hyphens, and punctuation
 * - Retains letters and numbers
 */
export function normalizeWord(word: string): string {
  if (!word) return '';
  return word
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/[^A-Z0-9]/g, '');      // keep only alphanumeric
}

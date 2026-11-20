import { Direction, GridConfig, PlacedWord, TermItem, WordsearchPuzzle } from '../content/types.ts';
import { normalizeWord } from './normalizer.ts';

const DIRECTION_DELTAS: Record<Direction, { dr: number; dc: number }> = {
  HORIZONTAL_LR: { dr: 0, dc: 1 },
  HORIZONTAL_RL: { dr: 0, dc: -1 },
  VERTICAL_TB: { dr: 1, dc: 0 },
  VERTICAL_BT: { dr: -1, dc: 0 },
  DIAGONAL_TL_BR: { dr: 1, dc: 1 },
  DIAGONAL_BL_TR: { dr: -1, dc: 1 },
  DIAGONAL_TR_BL: { dr: 1, dc: -1 },
  DIAGONAL_BR_TL: { dr: -1, dc: -1 },
};

// Common Indonesian letter frequency weighting for realistic filler letters
const FILLER_ALPHABET = 'AAAAAAAAABBCCCCCDDDDEEEEEEEEEFFGGGHHHHHIIIIIIIIJKLLLLMMMMMNNNNNNNNOOOOOOOOPPQRRRRRRRSSSSSTTTTTUUUUUVWWXYZ';

function getRandomFillerLetter(): string {
  const index = Math.floor(Math.random() * FILLER_ALPHABET.length);
  return FILLER_ALPHABET[index] || 'A';
}

/**
 * Attempts to generate a wordsearch puzzle with given terms and grid configuration.
 */
export function generateWordsearch(
  terms: TermItem[],
  config: GridConfig
): WordsearchPuzzle {
  const { size, allowedDirections, maxWords } = config;

  // 1. Filter, normalize, and sort words by length descending
  const selectedTerms = terms.slice(0, maxWords);
  const normalizedList = selectedTerms
    .map(t => ({
      item: t,
      norm: normalizeWord(t.term)
    }))
    .filter(t => t.norm.length > 0 && t.norm.length <= size)
    .sort((a, b) => b.norm.length - a.norm.length);

  // Initialize empty grid with null/empty characters
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(''));
  const placedWords: PlacedWord[] = [];
  const unplacedWordIds: string[] = [];

  // 2. Place each word
  for (const { item, norm } of normalizedList) {
    let placed = false;
    const maxAttempts = 200;

    // Shuffle directions for variety
    const shuffledDirections = [...allowedDirections].sort(() => Math.random() - 0.5);

    attemptLoop:
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const dir = shuffledDirections[attempt % shuffledDirections.length];
      const { dr, dc } = DIRECTION_DELTAS[dir];

      // Calculate valid starting bounds
      const minRow = dr < 0 ? norm.length - 1 : 0;
      const maxRow = dr > 0 ? size - norm.length : size - 1;
      const minCol = dc < 0 ? norm.length - 1 : 0;
      const maxCol = dc > 0 ? size - norm.length : size - 1;

      if (maxRow < minRow || maxCol < minCol) continue;

      const startRow = Math.floor(Math.random() * (maxRow - minRow + 1)) + minRow;
      const startCol = Math.floor(Math.random() * (maxCol - minCol + 1)) + minCol;

      // Check collision
      const coords: { row: number; col: number }[] = [];
      for (let i = 0; i < norm.length; i++) {
        const r = startRow + i * dr;
        const c = startCol + i * dc;
        const currentCell = grid[r][c];
        const letter = norm[i];

        if (currentCell !== '' && currentCell !== letter) {
          // Collision on different letter!
          continue attemptLoop;
        }
        coords.push({ row: r, col: c });
      }

      // If valid, write to grid
      for (let i = 0; i < coords.length; i++) {
        grid[coords[i].row][coords[i].col] = norm[i];
      }

      placedWords.push({
        id: item.id,
        term: item.term,
        normalized: norm,
        startRow,
        startCol,
        endRow: coords[coords.length - 1].row,
        endCol: coords[coords.length - 1].col,
        direction: dir,
        coordinates: coords,
      });

      placed = true;
      break;
    }

    if (!placed) {
      unplacedWordIds.push(item.id);
    }
  }

  // 3. Fill remaining empty cells with random filler letters
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!grid[r][c]) {
        grid[r][c] = getRandomFillerLetter();
      }
    }
  }

  return {
    size,
    grid,
    placedWords,
    unplacedWordIds,
  };
}

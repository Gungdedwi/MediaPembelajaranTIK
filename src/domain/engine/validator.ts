import { PlacedWord, SelectionCoord } from '../content/types.ts';

export interface SelectionPathResult {
  isValidLine: boolean;
  coordinates: SelectionCoord[];
  selectedText: string;
}

export interface MatchResult {
  isMatch: boolean;
  matchedWord?: PlacedWord;
  isAlreadyFound: boolean;
  isReverse: boolean;
}

/**
 * Calculates a straight line path between start and end cell coordinates.
 * Validates if the path is purely horizontal, vertical, or 45-degree diagonal.
 */
export function getSelectionPath(
  start: SelectionCoord,
  end: SelectionCoord,
  grid: string[][]
): SelectionPathResult {
  const rowDiff = end.row - start.row;
  const colDiff = end.col - start.col;
  const absRowDiff = Math.abs(rowDiff);
  const absColDiff = Math.abs(colDiff);

  // Check if horizontal, vertical, or 45-degree diagonal
  const isHorizontal = rowDiff === 0 && colDiff !== 0;
  const isVertical = colDiff === 0 && rowDiff !== 0;
  const isDiagonal = absRowDiff === absColDiff && absRowDiff !== 0;
  const isSingleCell = rowDiff === 0 && colDiff === 0;

  if (!isHorizontal && !isVertical && !isDiagonal && !isSingleCell) {
    return {
      isValidLine: false,
      coordinates: [],
      selectedText: ''
    };
  }

  const length = Math.max(absRowDiff, absColDiff) + 1;
  const dr = isSingleCell ? 0 : Math.sign(rowDiff);
  const dc = isSingleCell ? 0 : Math.sign(colDiff);

  const coordinates: SelectionCoord[] = [];
  let selectedText = '';

  for (let i = 0; i < length; i++) {
    const r = start.row + i * dr;
    const c = start.col + i * dc;

    // Boundary check
    if (r >= 0 && r < grid.length && c >= 0 && c < (grid[0]?.length || 0)) {
      coordinates.push({ row: r, col: c });
      selectedText += grid[r][c] || '';
    } else {
      return { isValidLine: false, coordinates: [], selectedText: '' };
    }
  }

  return {
    isValidLine: true,
    coordinates,
    selectedText
  };
}

/**
 * Checks if the selected coordinates and text match any of the target placed words.
 */
export function checkWordMatch(
  selectedCoords: SelectionCoord[],
  targetWords: PlacedWord[],
  alreadyFoundIds: Set<string>
): MatchResult {
  if (selectedCoords.length === 0) {
    return { isMatch: false, isAlreadyFound: false, isReverse: false };
  }

  const startCoord = selectedCoords[0];
  const endCoord = selectedCoords[selectedCoords.length - 1];

  for (const word of targetWords) {
    const isForward =
      word.startRow === startCoord.row &&
      word.startCol === startCoord.col &&
      word.endRow === endCoord.row &&
      word.endCol === endCoord.col;

    const isReverse =
      word.startRow === endCoord.row &&
      word.startCol === endCoord.col &&
      word.endRow === startCoord.row &&
      word.endCol === startCoord.col;

    if (isForward || isReverse) {
      if (alreadyFoundIds.has(word.id)) {
        return {
          isMatch: true,
          matchedWord: word,
          isAlreadyFound: true,
          isReverse
        };
      }
      return {
        isMatch: true,
        matchedWord: word,
        isAlreadyFound: false,
        isReverse
      };
    }
  }

  return { isMatch: false, isAlreadyFound: false, isReverse: false };
}

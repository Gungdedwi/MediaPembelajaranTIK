export type Difficulty = 'easy' | 'medium' | 'hard';

export interface TermItem {
  id: string;
  term: string;
  normalizedTerm: string;
  category: string;
  cpRef: string;
  hint: string;
  definition: string;
  explanation: string;
  example: string;
  difficulty: Difficulty;
}

export interface CategoryData {
  id: string;
  name: string;
  title: string;
  description: string;
  iconName: string;
  cpDescription: string;
  learningGoal: string;
  terms: TermItem[];
}

export type Direction = 
  | 'HORIZONTAL_LR'
  | 'HORIZONTAL_RL'
  | 'VERTICAL_TB'
  | 'VERTICAL_BT'
  | 'DIAGONAL_TL_BR'
  | 'DIAGONAL_BL_TR'
  | 'DIAGONAL_TR_BL'
  | 'DIAGONAL_BR_TL';

export interface PlacedWord {
  id: string;
  term: string;
  normalized: string;
  startRow: number;
  startCol: number;
  endRow: number;
  endCol: number;
  direction: Direction;
  coordinates: { row: number; col: number }[];
}

export interface GridConfig {
  size: number;
  allowedDirections: Direction[];
  maxWords: number;
}

export interface WordsearchPuzzle {
  size: number;
  grid: string[][];
  placedWords: PlacedWord[];
  unplacedWordIds: string[];
}

export interface SelectionCoord {
  row: number;
  col: number;
}

export interface FoundWord {
  id: string;
  term: string;
  normalized: string;
  coordinates: { row: number; col: number }[];
  colorClass: string;
}

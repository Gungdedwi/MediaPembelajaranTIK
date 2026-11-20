import { describe, it, expect } from 'vitest';
import { normalizeWord } from '../normalizer.ts';
import { generateWordsearch } from '../generator.ts';
import { getSelectionPath, checkWordMatch } from '../validator.ts';
import { TermItem, GridConfig, Direction } from '../../content/types.ts';

describe('normalizer', () => {
  it('should uppercase words and strip spaces and punctuation', () => {
    expect(normalizeWord('Kata Sandi')).toBe('KATASANDI');
    expect(normalizeWord('Wi-Fi')).toBe('WIFI');
    expect(normalizeWord('search_engine!')).toBe('SEARCHENGINE');
    expect(normalizeWord('')).toBe('');
  });
});

describe('generator', () => {
  const dummyTerms: TermItem[] = [
    {
      id: 'term-1',
      term: 'INTERNET',
      normalizedTerm: 'INTERNET',
      category: 'jaringan',
      cpRef: 'CP-7',
      hint: 'Jaringan global',
      definition: 'Kumpulan jaringan komputer di seluruh dunia',
      explanation: 'Menghubungkan miliaran perangkat',
      example: 'Mencari informasi materi pelajaran',
      difficulty: 'easy'
    },
    {
      id: 'term-2',
      term: 'KOMPUTER',
      normalizedTerm: 'KOMPUTER',
      category: 'komputer',
      cpRef: 'CP-6',
      hint: 'Perangkat pengolah data elektronik',
      definition: 'Mesin yang memproses input menjadi output',
      explanation: 'Terdiri dari perangkat keras dan perangkat lunak',
      example: 'Mengetik laporan di laboratorium',
      difficulty: 'easy'
    },
    {
      id: 'term-3',
      term: 'ROUTER',
      normalizedTerm: 'ROUTER',
      category: 'jaringan',
      cpRef: 'CP-7',
      hint: 'Pengarah paket jaringan',
      definition: 'Perangkat yang menghubungkan beberapa jaringan',
      explanation: 'Mengatur rute paket data',
      example: 'Router Wi-Fi di ruang guru',
      difficulty: 'medium'
    }
  ];

  const config: GridConfig = {
    size: 10,
    allowedDirections: ['HORIZONTAL_LR', 'VERTICAL_TB', 'DIAGONAL_TL_BR'],
    maxWords: 3
  };

  it('should generate a grid of requested size', () => {
    const puzzle = generateWordsearch(dummyTerms, config);
    expect(puzzle.size).toBe(10);
    expect(puzzle.grid.length).toBe(10);
    expect(puzzle.grid[0].length).toBe(10);
    expect(puzzle.placedWords.length).toBeGreaterThan(0);
  });

  it('should place words correctly and all placed letters should exist in grid', () => {
    const puzzle = generateWordsearch(dummyTerms, config);
    for (const placed of puzzle.placedWords) {
      let reconstructed = '';
      for (const coord of placed.coordinates) {
        expect(coord.row).toBeGreaterThanOrEqual(0);
        expect(coord.row).toBeLessThan(10);
        expect(coord.col).toBeGreaterThanOrEqual(0);
        expect(coord.col).toBeLessThan(10);
        reconstructed += puzzle.grid[coord.row][coord.col];
      }
      expect(reconstructed).toBe(placed.normalized);
    }
  });

  it('should not have empty cells in completed grid', () => {
    const puzzle = generateWordsearch(dummyTerms, config);
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        expect(puzzle.grid[r][c]).toMatch(/^[A-Z0-9]$/);
      }
    }
  });
});

describe('validator', () => {
  const sampleGrid: string[][] = [
    ['H', 'O', 'A', 'K', 'S'],
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
  ];

  it('should extract valid horizontal line', () => {
    const res = getSelectionPath({ row: 0, col: 0 }, { row: 0, col: 4 }, sampleGrid);
    expect(res.isValidLine).toBe(true);
    expect(res.selectedText).toBe('HOAKS');
    expect(res.coordinates.length).toBe(5);
  });

  it('should extract valid vertical line', () => {
    const res = getSelectionPath({ row: 0, col: 0 }, { row: 4, col: 0 }, sampleGrid);
    expect(res.isValidLine).toBe(true);
    expect(res.selectedText).toBe('HAFKP');
    expect(res.coordinates.length).toBe(5);
  });

  it('should extract valid diagonal line', () => {
    const res = getSelectionPath({ row: 0, col: 0 }, { row: 4, col: 4 }, sampleGrid);
    expect(res.isValidLine).toBe(true);
    expect(res.selectedText).toBe('HBHNT');
  });

  it('should reject non-straight line paths (knight move or irregular)', () => {
    const res = getSelectionPath({ row: 0, col: 0 }, { row: 1, col: 2 }, sampleGrid);
    expect(res.isValidLine).toBe(false);
    expect(res.coordinates.length).toBe(0);
  });

  it('should match target word and handle duplicate detection', () => {
    const placedWords = [
      {
        id: 'w1',
        term: 'HOAKS',
        normalized: 'HOAKS',
        startRow: 0,
        startCol: 0,
        endRow: 0,
        endCol: 4,
        direction: 'HORIZONTAL_LR' as Direction,
        coordinates: [
          { row: 0, col: 0 },
          { row: 0, col: 1 },
          { row: 0, col: 2 },
          { row: 0, col: 3 },
          { row: 0, col: 4 }
        ]
      }
    ];

    const foundSet = new Set<string>();

    // Forward match
    const matchForward = checkWordMatch(
      [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
        { row: 0, col: 4 }
      ],
      placedWords,
      foundSet
    );
    expect(matchForward.isMatch).toBe(true);
    expect(matchForward.isAlreadyFound).toBe(false);

    // Mark as found
    foundSet.add('w1');

    // Duplicate check
    const matchAgain = checkWordMatch(
      [
        { row: 0, col: 0 },
        { row: 0, col: 4 }
      ],
      placedWords,
      foundSet
    );
    expect(matchAgain.isMatch).toBe(true);
    expect(matchAgain.isAlreadyFound).toBe(true);

    // Reverse selection should also be recognized
    const matchReverse = checkWordMatch(
      [
        { row: 0, col: 4 },
        { row: 0, col: 3 },
        { row: 0, col: 2 },
        { row: 0, col: 1 },
        { row: 0, col: 0 }
      ],
      placedWords,
      new Set()
    );
    expect(matchReverse.isMatch).toBe(true);
    expect(matchReverse.isReverse).toBe(true);
  });
});

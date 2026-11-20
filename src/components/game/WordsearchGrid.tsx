import { useState, useEffect, useRef, useCallback } from 'react';
import type { FC, TouchEvent } from 'react';
import { FoundWord, PlacedWord, SelectionCoord } from '../../domain/content/types.ts';
import { getSelectionPath, checkWordMatch } from '../../domain/engine/validator.ts';

interface WordsearchGridProps {
  grid: string[][];
  placedWords: PlacedWord[];
  foundWords: FoundWord[];
  isPresentationMode: boolean;
  isPaused: boolean;
  onWordFound: (word: PlacedWord) => void;
  onPlaySelect: () => void;
}

export const WordsearchGrid: FC<WordsearchGridProps> = ({
  grid,
  placedWords,
  foundWords,
  isPresentationMode,
  isPaused,
  onWordFound,
  onPlaySelect
}) => {
  const size = grid.length;
  const [startCoord, setStartCoord] = useState<SelectionCoord | null>(null);
  const [currentCoord, setCurrentCoord] = useState<SelectionCoord | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [clickToClickStart, setClickToClickStart] = useState<SelectionCoord | null>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Set of found word IDs for quick duplicate check
  const foundWordIds = new Set(foundWords.map(w => w.id));

  // Pre-calculate cell found styling
  const cellFoundMap = new Map<string, string>();
  for (const found of foundWords) {
    for (const c of found.coordinates) {
      const key = `${c.row}-${c.col}`;
      if (!cellFoundMap.has(key)) {
        cellFoundMap.set(key, found.colorClass);
      }
    }
  }

  // Active selected path calculation
  const activeCoord = currentCoord || clickToClickStart;
  const activePath = (startCoord && activeCoord)
    ? getSelectionPath(startCoord, activeCoord, grid)
    : (clickToClickStart ? { isValidLine: true, coordinates: [clickToClickStart], selectedText: grid[clickToClickStart.row][clickToClickStart.col] } : null);

  const activeCoordKeys = new Set(
    activePath?.coordinates.map(c => `${c.row}-${c.col}`) || []
  );

  // Commit selection
  const commitSelection = useCallback((start: SelectionCoord, end: SelectionCoord) => {
    const path = getSelectionPath(start, end, grid);
    if (!path.isValidLine || path.coordinates.length === 0) {
      return false;
    }

    const match = checkWordMatch(path.coordinates, placedWords, foundWordIds);
    if (match.isMatch && match.matchedWord && !match.isAlreadyFound) {
      onWordFound(match.matchedWord);
      return true;
    }
    return false;
  }, [grid, placedWords, foundWordIds, onWordFound]);

  // Global mouse up handler so drag doesn't get stuck if released outside grid
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isMouseDown && startCoord && currentCoord) {
        commitSelection(startCoord, currentCoord);
      }
      setIsMouseDown(false);
      setStartCoord(null);
      setCurrentCoord(null);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isMouseDown, startCoord, currentCoord, commitSelection]);

  // Handle Mouse Drag Start
  const handleMouseDown = (row: number, col: number) => {
    if (isPaused) return;
    onPlaySelect();
    setIsMouseDown(true);
    setStartCoord({ row, col });
    setCurrentCoord({ row, col });
    setClickToClickStart(null); // Clear click-to-click mode if dragging
  };

  // Handle Mouse Drag Over
  const handleMouseEnter = (row: number, col: number) => {
    if (isPaused || !isMouseDown || !startCoord) return;
    if (currentCoord?.row !== row || currentCoord?.col !== col) {
      setCurrentCoord({ row, col });
      onPlaySelect();
    }
  };

  // Handle Click-to-Click Selection (Alternative mode for touch/projector)
  const handleCellClick = (row: number, col: number) => {
    if (isPaused || isMouseDown) return;

    if (!clickToClickStart) {
      setClickToClickStart({ row, col });
      setStartCoord({ row, col });
      onPlaySelect();
    } else {
      // Second click: try commit
      const success = commitSelection(clickToClickStart, { row, col });
      if (!success) {
        onPlaySelect();
      }
      setClickToClickStart(null);
      setStartCoord(null);
      setCurrentCoord(null);
    }
  };

  // Touch Events for Mobile / Tablet Drag
  const handleTouchStart = (e: TouchEvent) => {
    if (isPaused) return;
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const row = target?.getAttribute('data-row');
    const col = target?.getAttribute('data-col');

    if (row !== null && col !== null && row !== undefined && col !== undefined) {
      const r = parseInt(row, 10);
      const c = parseInt(col, 10);
      setIsMouseDown(true);
      setStartCoord({ row: r, col: c });
      setCurrentCoord({ row: r, col: c });
      onPlaySelect();
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isPaused || !isMouseDown || !startCoord) return;
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    const row = target?.getAttribute('data-row');
    const col = target?.getAttribute('data-col');

    if (row !== null && col !== null && row !== undefined && col !== undefined) {
      const r = parseInt(row, 10);
      const c = parseInt(col, 10);
      if (currentCoord?.row !== r || currentCoord?.col !== c) {
        setCurrentCoord({ row: r, col: c });
      }
    }
  };

  const handleTouchEnd = () => {
    if (isMouseDown && startCoord && currentCoord) {
      commitSelection(startCoord, currentCoord);
    }
    setIsMouseDown(false);
    setStartCoord(null);
    setCurrentCoord(null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-2 sm:p-4 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
      {/* Paused Overlay */}
      {isPaused && (
        <div className="absolute inset-0 z-30 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
          <div className="p-4 rounded-full bg-amber-500/20 text-amber-400 mb-3 animate-pulse">
            <span className="text-2xl font-bold">⏸️</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Permainan Dijeda</h3>
          <p className="text-sm text-slate-300 max-w-xs">
            Waktu berhenti. Klik tombol Play di bilah atas untuk melanjutkan aktivitas belajar.
          </p>
        </div>
      )}

      {/* Grid Table */}
      <div
        ref={gridContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="grid gap-1 sm:gap-1.5 p-2 sm:p-3 bg-slate-950/90 rounded-xl border border-slate-800 touch-none select-none shadow-inner"
        style={{
          gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`
        }}
      >
        {grid.map((rowArr, r) =>
          rowArr.map((letter, c) => {
            const cellKey = `${r}-${c}`;
            const isFound = cellFoundMap.has(cellKey);
            const foundColor = cellFoundMap.get(cellKey);
            const isSelected = activeCoordKeys.has(cellKey);

            return (
              <button
                key={cellKey}
                type="button"
                data-row={r}
                data-col={c}
                onMouseDown={() => handleMouseDown(r, c)}
                onMouseEnter={() => handleMouseEnter(r, c)}
                onClick={() => handleCellClick(r, c)}
                className={`
                  relative flex items-center justify-center font-bold tracking-wider rounded-lg transition-all duration-100
                  ${isPresentationMode 
                    ? 'w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 text-base sm:text-2xl md:text-3xl' 
                    : 'w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-xs sm:text-lg md:text-xl'
                  }
                  ${isSelected
                    ? 'bg-sky-500 text-white shadow-lg ring-2 ring-sky-300 scale-105 z-10'
                    : isFound
                    ? `${foundColor} text-white font-extrabold shadow-md`
                    : 'bg-slate-800/70 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                  }
                  ${clickToClickStart?.row === r && clickToClickStart?.col === c ? 'ring-4 ring-amber-400 animate-pulse' : ''}
                `}
              >
                {letter}
              </button>
            );
          })
        )}
      </div>

      {/* Selection Mode Guidance */}
      <div className="mt-3 text-xs text-slate-400 text-center flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>
          {clickToClickStart
            ? 'Pilih huruf akhir garis lurus...'
            : 'Tarik mouse/jari atau klik huruf awal lalu huruf akhir.'}
        </span>
      </div>
    </div>
  );
};

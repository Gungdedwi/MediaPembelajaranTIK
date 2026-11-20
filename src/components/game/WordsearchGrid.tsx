import { useState, useEffect, useRef, useCallback } from 'react';
import type { FC } from 'react';
import { FoundWord, PlacedWord, SelectionCoord } from '../../domain/content/types.ts';
import { getSelectionPath, checkWordMatch } from '../../domain/engine/validator.ts';
import { RotateCcw } from 'lucide-react';

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

  // Selection states
  const [startCoord, setStartCoord] = useState<SelectionCoord | null>(null);
  const [hoverCoord, setHoverCoord] = useState<SelectionCoord | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [wrongSelectionCoords, setWrongSelectionCoords] = useState<string[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  // Set of found word IDs
  const foundWordIds = new Set(foundWords.map(w => w.id));

  // Pre-calculate found cell map
  const cellFoundMap = new Map<string, string>();
  for (const found of foundWords) {
    for (const c of found.coordinates) {
      const key = `${c.row}-${c.col}`;
      if (!cellFoundMap.has(key)) {
        cellFoundMap.set(key, found.colorClass);
      }
    }
  }

  // Active path calculation
  const activePath = (startCoord && hoverCoord)
    ? getSelectionPath(startCoord, hoverCoord, grid)
    : (startCoord ? { isValidLine: true, coordinates: [startCoord], selectedText: grid[startCoord.row]?.[startCoord.col] || '' } : null);

  const activeCoordKeys = new Set(
    activePath?.coordinates.map(c => `${c.row}-${c.col}`) || []
  );

  // Real-time matching preview for target words
  const currentSelectedText = activePath?.selectedText || '';
  const currentReversedText = currentSelectedText.split('').reverse().join('');
  const matchedTargetTerm = placedWords.find(
    w => (w.normalized === currentSelectedText || w.normalized === currentReversedText) && !foundWordIds.has(w.id)
  );

  // Validate and submit selection
  const submitSelection = useCallback((start: SelectionCoord, end: SelectionCoord) => {
    // Single cell selection is ignored
    if (start.row === end.row && start.col === end.col) {
      return;
    }

    const path = getSelectionPath(start, end, grid);
    if (!path.isValidLine || path.coordinates.length < 2) {
      return;
    }

    const match = checkWordMatch(path.coordinates, placedWords, foundWordIds);
    if (match.isMatch && match.matchedWord && !match.isAlreadyFound) {
      // Word found!
      onWordFound(match.matchedWord);
      setStartCoord(null);
      setHoverCoord(null);
      setIsDragging(false);
    } else {
      // Not a match: show visual feedback (red flash for 500ms)
      const wrongKeys = path.coordinates.map(c => `${c.row}-${c.col}`);
      setWrongSelectionCoords(wrongKeys);
      setTimeout(() => {
        setWrongSelectionCoords([]);
      }, 500);
      setStartCoord(null);
      setHoverCoord(null);
      setIsDragging(false);
    }
  }, [grid, placedWords, foundWordIds, onWordFound]);

  // Pointer Down (Mouse or Touch)
  const handlePointerDown = (row: number, col: number, e: React.PointerEvent) => {
    if (isPaused) return;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);

    if (!startCoord) {
      // Start a new selection
      setStartCoord({ row, col });
      setHoverCoord({ row, col });
      setIsDragging(true);
      onPlaySelect();
    } else {
      // Click-to-click mode: second click commits!
      if (startCoord.row === row && startCoord.col === col) {
        // Clicking same cell again cancels
        setStartCoord(null);
        setHoverCoord(null);
        setIsDragging(false);
      } else {
        submitSelection(startCoord, { row, col });
      }
    }
  };

  // Pointer Move / Hover
  const handlePointerEnter = (row: number, col: number) => {
    if (isPaused || !startCoord) return;
    if (hoverCoord?.row !== row || hoverCoord?.col !== col) {
      setHoverCoord({ row, col });
      onPlaySelect();
    }
  };

  // Handle Dragging Release (Mouse or Touch Up)
  const handlePointerUp = () => {
    if (isPaused || !startCoord || !hoverCoord) return;

    if (isDragging) {
      // If dragged to a different cell, commit immediately
      if (startCoord.row !== hoverCoord.row || startCoord.col !== hoverCoord.col) {
        submitSelection(startCoord, hoverCoord);
      } else {
        // If released on the same cell, stay in click-to-click mode!
        setIsDragging(false);
      }
    }
  };

  // Global window pointer up listener
  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp);
    return () => window.removeEventListener('pointerup', handlePointerUp);
  }, [handlePointerUp]);

  // Touch move element detection for mobile swiping
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isPaused || !startCoord || !isDragging) return;
    const touch = e.touches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const r = el?.getAttribute('data-row');
    const c = el?.getAttribute('data-col');
    if (r !== null && c !== null && r !== undefined && c !== undefined) {
      const row = parseInt(r, 10);
      const col = parseInt(c, 10);
      if (hoverCoord?.row !== row || hoverCoord?.col !== col) {
        setHoverCoord({ row, col });
      }
    }
  };

  const handleCancelSelection = () => {
    setStartCoord(null);
    setHoverCoord(null);
    setIsDragging(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-3 sm:p-5 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden select-none">
      {/* Paused Overlay */}
      {isPaused && (
        <div className="absolute inset-0 z-30 bg-slate-950/85 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
          <div className="p-4 rounded-full bg-amber-500/20 text-amber-400 mb-3 animate-pulse">
            <span className="text-3xl font-bold">⏸️</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Permainan Dijeda</h3>
          <p className="text-sm text-slate-300 max-w-xs">
            Waktu permainan dihentikan sementara. Klik tombol Lanjutkan di bilah atas untuk kembali mencari kata.
          </p>
        </div>
      )}

      {/* Active Word Preview Banner */}
      <div className="w-full flex items-center justify-between mb-3 px-2 min-h-[36px]">
        {startCoord && activePath?.selectedText ? (
          <div className="flex items-center gap-2 bg-sky-950/80 border border-sky-500/50 px-3.5 py-1.5 rounded-xl shadow-md animate-fade-in w-full justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
              <span className="text-xs text-sky-300 font-semibold uppercase tracking-wider">
                Kata Dipilih:
              </span>
              <span className="text-sm sm:text-base font-extrabold tracking-widest text-white">
                {activePath.selectedText}
              </span>
              {matchedTargetTerm ? (
                <span className="text-xs text-emerald-300 font-bold bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-700 animate-pulse">
                  ✓ Cocok: "{matchedTargetTerm.term}"
                </span>
              ) : (
                <span className="text-xs text-slate-400 font-mono">
                  ({activePath.coordinates.length} huruf)
                </span>
              )}
            </div>
            <button
              onClick={handleCancelSelection}
              className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center gap-1 transition-colors"
              title="Batalkan pilihan"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Batal</span>
            </button>
          </div>
        ) : (
          <div className="text-xs text-slate-400 flex items-center gap-2 mx-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Klik huruf awal lalu klik huruf akhir kata, atau tahan & geser kursor/jari.</span>
          </div>
        )}
      </div>

      {/* Grid Container */}
      <div
        ref={gridRef}
        onTouchMove={handleTouchMove}
        className="grid gap-1 sm:gap-1.5 p-2.5 sm:p-4 bg-slate-950 rounded-2xl border-2 border-slate-800 shadow-inner touch-none select-none"
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
            const isStart = startCoord?.row === r && startCoord?.col === c;
            const isWrong = wrongSelectionCoords.includes(cellKey);

            return (
              <button
                key={cellKey}
                type="button"
                data-row={r}
                data-col={c}
                onPointerDown={(e) => handlePointerDown(r, c, e)}
                onPointerEnter={() => handlePointerEnter(r, c)}
                className={`
                  relative flex items-center justify-center font-bold tracking-wider rounded-lg sm:rounded-xl transition-all duration-100 cursor-pointer select-none
                  ${isPresentationMode 
                    ? 'w-10 h-10 sm:w-13 sm:h-13 md:w-15 md:h-15 text-lg sm:text-2xl md:text-3xl' 
                    : 'w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-sm sm:text-xl md:text-2xl'
                  }
                  ${isWrong
                    ? 'bg-rose-600 text-white animate-pulse ring-2 ring-rose-400'
                    : isSelected
                    ? 'bg-sky-500 text-white shadow-lg ring-2 sm:ring-4 ring-sky-300 scale-105 z-10 font-black'
                    : isFound
                    ? `${foundColor} text-white font-extrabold shadow-md`
                    : 'bg-slate-800/80 text-slate-100 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                  }
                  ${isStart ? 'ring-4 ring-amber-400 z-20 animate-bounce' : ''}
                `}
              >
                {letter}
              </button>
            );
          })
        )}
      </div>

      {/* Guidance footer */}
      <div className="mt-3 text-[11px] sm:text-xs text-slate-500 text-center">
        💡 Kata dapat mendatar, menurun, atau menyilang (diagonal).
      </div>
    </div>
  );
};

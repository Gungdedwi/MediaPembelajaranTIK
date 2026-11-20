import type { FC } from 'react';
import { PlacedWord, FoundWord } from '../../domain/content/types.ts';
import { CheckCircle2, HelpCircle, Eye, Sparkles } from 'lucide-react';

interface WordBankProps {
  targetWords: PlacedWord[];
  foundWords: FoundWord[];
  isPresentationMode: boolean;
  onOpenHint: (word: PlacedWord) => void;
  onViewExplanation: (wordId: string) => void;
}

export const WordBank: FC<WordBankProps> = ({
  targetWords,
  foundWords,
  isPresentationMode,
  onOpenHint,
  onViewExplanation,
}) => {
  const foundMap = new Map(foundWords.map(w => [w.id, w]));
  const foundCount = foundWords.length;
  const totalCount = targetWords.length;
  const progressPercent = Math.round((foundCount / totalCount) * 100);

  return (
    <div className={`flex flex-col bg-slate-900/70 rounded-2xl border border-slate-800 shadow-xl overflow-hidden ${
      isPresentationMode ? 'p-4 sm:p-5' : 'p-3 sm:p-4'
    }`}>
      {/* Header & Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h2 className={`font-bold text-white ${
              isPresentationMode ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
            }`}>
              Daftar Kata (Word Bank)
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
            {foundCount} / {totalCount} Ditemukan
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Multi-word guidance banner */}
        <div className="px-3 py-2 rounded-xl bg-amber-950/40 border border-amber-600/40 text-[11px] sm:text-xs text-amber-200 flex items-start gap-2 leading-relaxed">
          <span className="text-sm shrink-0">💡</span>
          <span>
            <strong>Aturan Pencarian:</strong> Kata majemuk dicari <strong>tanpa spasi</strong> (contoh: <em>KATA KUNCI</em> dicari sebagai <em>KATAKUNCI</em>).
          </span>
        </div>
      </div>

      {/* List of Words */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 overflow-y-auto max-h-[420px] pr-1">
        {targetWords.map((item) => {
          const isFound = foundMap.has(item.id);

          return (
            <div
              key={item.id}
              className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                isFound
                  ? 'bg-slate-800/40 border-emerald-500/30 text-emerald-300'
                  : 'bg-slate-800/80 border-slate-700/80 text-slate-100 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {isFound ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                )}
                <div className="flex flex-col min-w-0">
                  <span
                    className={`font-semibold tracking-wide truncate ${
                      isPresentationMode ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                    } ${isFound ? 'line-through text-slate-400' : 'text-white'}`}
                    title={item.term}
                  >
                    {item.term}
                  </span>
                  {item.term.includes(' ') && !isFound && (
                    <span className="text-[10px] sm:text-[11px] text-amber-300/90 font-mono font-medium">
                      (Cari: {item.normalized})
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {isFound ? (
                  <button
                    onClick={() => onViewExplanation(item.id)}
                    className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg bg-emerald-900/60 hover:bg-emerald-800/80 text-emerald-200 transition-colors"
                    title="Buka Penjelasan Materi"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Definisi</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onOpenHint(item)}
                    className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg bg-slate-700 hover:bg-slate-600 text-amber-300 transition-colors"
                    title="Lihat Petunjuk Istilah"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Petunjuk</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 text-center">
        💡 Temukan semua istilah untuk membuka sesi tantangan pemahaman!
      </div>
    </div>
  );
};

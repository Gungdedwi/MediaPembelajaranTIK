import type { FC } from 'react';
import { TermItem } from '../../domain/content/types.ts';
import { BookOpen, Lightbulb, Check, X, BookmarkCheck } from 'lucide-react';

interface TermModalProps {
  term: TermItem | null;
  onClose: () => void;
}

export const TermModal: FC<TermModalProps> = ({ term, onClose }) => {
  if (!term) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="w-full max-w-xl bg-slate-900 border border-emerald-500/40 rounded-2xl shadow-2xl relative my-auto max-h-[92vh] flex flex-col overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-4 sm:p-5 border-b border-slate-800 shrink-0 bg-slate-900">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                🎉 Istilah Ditemukan!
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-slate-800 text-slate-300">
                {term.cpRef}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
              {term.term}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3.5 text-sm text-slate-200">
          {/* Definition */}
          <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
            <div className="flex items-center gap-2 font-semibold text-emerald-300 mb-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Definisi Konseptual:</span>
            </div>
            <p className="leading-relaxed text-slate-100">
              {term.definition}
            </p>
          </div>

          {/* Explanation */}
          <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
            <div className="flex items-center gap-2 font-semibold text-sky-300 mb-1.5">
              <BookmarkCheck className="w-4 h-4" />
              <span>Cara Kerja & Fungsi:</span>
            </div>
            <p className="leading-relaxed text-slate-300">
              {term.explanation}
            </p>
          </div>

          {/* Real-world Example */}
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-600/30">
            <div className="flex items-center gap-2 font-semibold text-amber-300 mb-1.5">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Contoh di Kehidupan Sehari-hari:</span>
            </div>
            <p className="leading-relaxed text-amber-100">
              {term.example}
            </p>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="p-4 border-t border-slate-800 shrink-0 bg-slate-900/95 flex justify-end">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Lanjut Bermain</span>
          </button>
        </div>
      </div>
    </div>
  );
};

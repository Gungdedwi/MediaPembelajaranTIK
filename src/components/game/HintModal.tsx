import type { FC } from 'react';
import { TermItem } from '../../domain/content/types.ts';
import { HelpCircle, X } from 'lucide-react';

interface HintModalProps {
  term: TermItem | null;
  onClose: () => void;
}

export const HintModal: FC<HintModalProps> = ({ term, onClose }) => {
  if (!term) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-2xl p-5 shadow-2xl relative">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-amber-400">
            <HelpCircle className="w-5 h-5" />
            <h3 className="font-bold text-lg text-white">Petunjuk Kata</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/30 text-amber-100 mb-4">
          <p className="text-sm font-medium leading-relaxed">
            "{term.hint}"
          </p>
        </div>

        <div className="text-xs text-slate-400 text-center mb-4">
          Jumlah huruf: <span className="font-bold text-white">{term.normalizedTerm.length} karakter</span>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
          >
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};

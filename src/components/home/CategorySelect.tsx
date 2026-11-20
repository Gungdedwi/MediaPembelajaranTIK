import { useState, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { 
  loadAllProgress, 
  CategoryProgress 
} from '../../domain/storage/progressStorage.ts';
import { 
  CURRICULUM_CATEGORIES, 
  DIFFICULTY_CONFIG 
} from '../../domain/content/curriculumData.ts';
import { Difficulty } from '../../domain/content/types.ts';
import { 
  Search, 
  Cpu, 
  FileText, 
  ShieldAlert, 
  HeartHandshake, 
  Tv, 
  BookOpen, 
  Play, 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';

interface CategorySelectProps {
  selectedCategoryId: string;
  selectedDifficulty: Difficulty;
  isPresentationMode: boolean;
  onSelectCategory: (id: string) => void;
  onSelectDifficulty: (diff: Difficulty) => void;
  onTogglePresentationMode: () => void;
  onOpenTeacherGuide: () => void;
  onStartGame: () => void;
}

const CATEGORY_ICONS: Record<string, ReactNode> = {
  Search: <Search className="w-6 h-6 text-sky-400" />,
  Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
  FileText: <FileText className="w-6 h-6 text-amber-400" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-rose-400" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-indigo-400" />
};

export const CategorySelect: FC<CategorySelectProps> = ({
  selectedCategoryId,
  selectedDifficulty,
  isPresentationMode,
  onSelectCategory,
  onSelectDifficulty,
  onTogglePresentationMode,
  onOpenTeacherGuide,
  onStartGame,
}) => {
  const [progressMap, setProgressMap] = useState<Record<string, CategoryProgress>>({});

  useEffect(() => {
    setProgressMap(loadAllProgress());
  }, []);
  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 animate-fade-in">
      {/* Hero Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-bold mb-3 shadow-sm">
          <GraduationCap className="w-4 h-4" />
          <span>Informatika Kelas VIII SMP • Fase D (Kurikulum 2025)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Wordsearch Informatika – Literasi Digital
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Media interaktif pencarian kata dan penguatan konsep digital citizenship. Dirancang untuk aktivitas kelas mandiri dan presentasi proyektor bersama guru.
        </p>
      </div>

      {/* Mode Bar & Quick Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 mb-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-md">
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePresentationMode}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isPresentationMode
                ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-950'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>Mode Proyektor: {isPresentationMode ? 'AKTIF' : 'NONAKTIF'}</span>
          </button>
        </div>

        <button
          onClick={onOpenTeacherGuide}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-sky-300 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          <span>Panduan Guru di Kelas</span>
        </button>
      </div>

      {/* Step 1: Select Category */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">1</span>
          <span>Pilih Kategori Materi Capaian Pembelajaran (CP)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CURRICULUM_CATEGORIES.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-emerald-500 ring-2 ring-emerald-500/50 shadow-xl shadow-emerald-950/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/60">
                      {CATEGORY_ICONS[cat.iconName] || <Search className="w-6 h-6 text-sky-400" />}
                    </div>
                    {progressMap[cat.id]?.isCompleted ? (
                      <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Selesai ({progressMap[cat.id].bestQuizScore}%)</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">
                        {cat.terms.length} Istilah
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-white text-base mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-400/90 font-medium truncate">
                  🎯 {cat.learningGoal}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Select Difficulty */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center font-bold">2</span>
          <span>Pilih Tingkat Kesulitan Permainan</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {(['easy', 'medium', 'hard'] as Difficulty[]).map((level) => {
            const conf = DIFFICULTY_CONFIG[level];
            const isSelected = selectedDifficulty === level;

            return (
              <button
                key={level}
                type="button"
                onClick={() => onSelectDifficulty(level)}
                className={`text-left p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-slate-800/90 border-sky-500 ring-2 ring-sky-500/50 shadow-lg shadow-sky-950/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-white text-base">
                    {conf.label}
                  </span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-300">
                    {conf.gridSize}×{conf.gridSize}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {conf.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Start Button */}
      <div className="text-center pt-2">
        <button
          onClick={onStartGame}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold text-base sm:text-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950 transition-all hover:scale-[1.03] active:scale-[0.98]"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>Mulai Permainan Sekarang</span>
        </button>
      </div>
    </div>
  );
};

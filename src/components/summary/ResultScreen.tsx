import { useEffect } from 'react';
import type { FC } from 'react';
import confetti from 'canvas-confetti';
import { Award, Clock, CheckCircle2, RotateCcw, Home, BookOpen, Star, Sparkles } from 'lucide-react';

interface ResultScreenProps {
  categoryTitle: string;
  difficultyLabel: string;
  score: number;
  timerSeconds: number;
  foundWordCount: number;
  totalWordCount: number;
  quizCorrectCount: number;
  quizTotalCount: number;
  learningGoal: string;
  onPlayAgain: () => void;
  onGoHome: () => void;
  onOpenTeacherGuide: () => void;
}

export const ResultScreen: FC<ResultScreenProps> = ({
  categoryTitle,
  difficultyLabel,
  score,
  timerSeconds,
  foundWordCount,
  totalWordCount,
  quizCorrectCount,
  quizTotalCount,
  learningGoal,
  onPlayAgain,
  onGoHome,
  onOpenTeacherGuide
}) => {
  useEffect(() => {
    // Fire celebratory confetti on mount
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Ignored if canvas-confetti fails
    }
  }, []);

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}m ${secs}s`;
  };

  const quizPercentage = quizTotalCount > 0 
    ? Math.round((quizCorrectCount / quizTotalCount) * 100) 
    : 100;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 pb-20 animate-fade-in">
      {/* Top Banner */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-amber-500/20 text-amber-400 mb-3 border border-amber-500/30 shadow-lg shadow-amber-950/40">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          Hebat! Sesi Pembelajaran Selesai
        </h2>
        <p className="text-sm text-slate-300 max-w-md mx-auto">
          Kamu telah menyelesaikan aktivitas pencarian kata dan penguatan konsep materi <span className="font-semibold text-emerald-400">{categoryTitle}</span> ({difficultyLabel}).
        </p>
      </div>

      {/* Two Column Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Metric 1: Game Wordsearch */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Performa Wordsearch
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-950 text-sky-300 border border-sky-800">
                Aktivitas Game
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Kata Berhasil Ditemukan:</span>
                </div>
                <span className="font-bold text-white text-base">
                  {foundWordCount} / {totalWordCount}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Waktu Pengerjaan:</span>
                </div>
                <span className="font-bold font-mono text-white text-base">
                  {formatTime(timerSeconds)}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Total Poin Permainan:</span>
                </div>
                <span className="font-bold text-amber-300 text-lg">
                  {score} <span className="text-xs font-normal text-slate-400">Poin</span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 italic">
            *Skor permainan mencerminkan ketelitian dan kecepatan dalam mengenali kosakata teknis.
          </div>
        </div>

        {/* Metric 2: Conceptual Assessment (TP) */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-indigo-500/30 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                <Star className="w-4 h-4" />
                Capaian Pemahaman TP
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800">
                Asesmen Belajar
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-800/40">
                <div className="text-xs text-indigo-300 font-semibold mb-1">Tujuan Pembelajaran:</div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  "{learningGoal}"
                </p>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60">
                <span className="text-slate-300 text-sm">Skor Mini Quiz Skenario:</span>
                <span className="font-bold text-emerald-400 text-base">
                  {quizCorrectCount} / {quizTotalCount} Benar
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60">
                <span className="text-slate-300 text-sm">Tingkat Penguasaan Konsep:</span>
                <span className="font-extrabold text-white text-xl">
                  {quizPercentage}%
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 italic">
            *Asesmen skenario membuktikan kemampuan penerapan konsep dalam situasi digital nyata.
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onPlayAgain}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950 transition-all hover:scale-[1.02]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Mainkan Puzzle Baru (Acak)</span>
        </button>

        <button
          onClick={onGoHome}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Pilih Kategori Lain</span>
        </button>

        <button
          onClick={onOpenTeacherGuide}
          className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>Panduan Diskusi Kelas</span>
        </button>
      </div>
    </div>
  );
};

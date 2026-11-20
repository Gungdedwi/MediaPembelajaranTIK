import type { FC } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Tv, 
  ArrowLeft,
  Clock,
  Award,
  BookOpen,
  Music
} from 'lucide-react';

interface HeaderProps {
  categoryTitle: string;
  difficultyLabel: string;
  score: number;
  timerSeconds: number;
  isPaused: boolean;
  isMuted: boolean;
  isPlayingMusic: boolean;
  isPresentationMode: boolean;
  isFullscreen: boolean;
  onTogglePause: () => void;
  onToggleMute: () => void;
  onToggleMusic: () => void;
  onTogglePresentationMode: () => void;
  onToggleFullscreen: () => void;
  onOpenTeacherGuide: () => void;
  onExitGame: () => void;
}

export const Header: FC<HeaderProps> = ({
  categoryTitle,
  difficultyLabel,
  score,
  timerSeconds,
  isPaused,
  isMuted,
  isPlayingMusic,
  isPresentationMode,
  isFullscreen,
  onTogglePause,
  onToggleMute,
  onToggleMusic,
  onTogglePresentationMode,
  onToggleFullscreen,
  onOpenTeacherGuide,
  onExitGame,
}) => {
  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className={`w-full transition-all duration-200 border-b ${
      isPresentationMode 
        ? 'bg-slate-950 border-amber-500/40 py-3 px-6' 
        : 'bg-slate-900/90 backdrop-blur border-slate-800 py-2.5 px-4'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Back button & Category info */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExitGame}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Kembali ke Beranda"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Keluar</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h1 className={`font-bold tracking-tight text-white ${
                isPresentationMode ? 'text-lg sm:text-xl text-amber-300' : 'text-base sm:text-lg'
              }`}>
                {categoryTitle}
              </h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                {difficultyLabel}
              </span>
              {isPresentationMode && (
                <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-950 text-amber-300 border border-amber-700">
                  Mode Proyektor
                </span>
              )}
            </div>
            <p className="text-xs text-slate-400 hidden md:block">
              Informatika Fase D (Kelas VIII SMP)
            </p>
          </div>
        </div>

        {/* Center: HUD (Timer & Score) */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <Clock className={`w-4 h-4 ${timerSeconds > 300 ? 'text-amber-400' : 'text-sky-400'}`} />
            <span className={`font-mono font-bold ${
              isPresentationMode ? 'text-lg text-sky-300' : 'text-sm text-sky-200'
            }`}>
              {formatTime(timerSeconds)}
            </span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className={`font-bold ${
              isPresentationMode ? 'text-lg text-emerald-300' : 'text-sm text-emerald-200'
            }`}>
              {score} <span className="text-xs font-normal text-slate-400">Poin</span>
            </span>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2">
          {/* Pause / Resume */}
          <button
            onClick={onTogglePause}
            className={`p-2 rounded-lg font-medium transition-colors ${
              isPaused 
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title={isPaused ? "Lanjutkan Permainan" : "Jeda Permainan"}
            aria-label={isPaused ? "Lanjutkan" : "Jeda"}
          >
            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
          </button>

          {/* Background Music Toggle */}
          <button
            onClick={onToggleMusic}
            className={`p-2 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold ${
              isPlayingMusic 
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-950 font-bold' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title={isPlayingMusic ? "Matikan Lagu / Musik Latar" : "Nyalakan Lagu / Musik Latar"}
            aria-label="Musik Latar"
          >
            <Music className={`w-4 h-4 ${isPlayingMusic ? 'animate-bounce' : ''}`} />
            <span className="hidden sm:inline">{isPlayingMusic ? 'Musik Aktif' : 'Musik'}</span>
          </button>

          {/* Sound Mute */}
          <button
            onClick={onToggleMute}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title={isMuted ? "Bunyikan Suara" : "Matikan Suara"}
            aria-label="Toggle Suara"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Teacher Guide Button */}
          <button
            onClick={onOpenTeacherGuide}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors hidden sm:flex items-center gap-1.5 text-xs"
            title="Panduan Guru"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="hidden lg:inline">Panduan Guru</span>
          </button>

          {/* Presentation Mode Toggle */}
          <button
            onClick={onTogglePresentationMode}
            className={`p-2 rounded-lg transition-colors ${
              isPresentationMode
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title="Mode Presentasi / Proyektor Kelas"
            aria-label="Mode Proyektor"
          >
            <Tv className="w-4 h-4" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Layar Penuh"
            aria-label="Layar Penuh"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};

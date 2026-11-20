import { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  saveCategoryProgress 
} from './domain/storage/progressStorage.ts';
import { 
  CURRICULUM_CATEGORIES, 
  DIFFICULTY_CONFIG 
} from './domain/content/curriculumData.ts';
import { QUIZ_DATABASE } from './domain/assessment/quizData.ts';
import { 
  Difficulty, 
  FoundWord, 
  PlacedWord, 
  TermItem, 
  WordsearchPuzzle 
} from './domain/content/types.ts';
import { generateWordsearch } from './domain/engine/generator.ts';
import { useSoundEffect } from './hooks/useSoundEffect.ts';
import { Header } from './components/layout/Header.tsx';
import { WordsearchGrid } from './components/game/WordsearchGrid.tsx';
import { WordBank } from './components/game/WordBank.tsx';
import { TermModal } from './components/game/TermModal.tsx';
import { HintModal } from './components/game/HintModal.tsx';
import { TeacherGuideModal } from './components/classroom/TeacherGuideModal.tsx';
import { QuizModal } from './components/assessment/QuizModal.tsx';
import { ResultScreen } from './components/summary/ResultScreen.tsx';
import { CategorySelect } from './components/home/CategorySelect.tsx';

// Distinct colors for found words (high contrast and accessible)
const FOUND_COLORS = [
  'bg-emerald-600',
  'bg-violet-600',
  'bg-amber-600',
  'bg-cyan-600',
  'bg-rose-600',
  'bg-teal-600',
  'bg-fuchsia-600',
  'bg-indigo-600'
];

type Screen = 'home' | 'game' | 'result';

export function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('search-engine-credibility');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('medium');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Sound Hook
  const { 
    isMuted, 
    toggleMute, 
    playSelect, 
    playFound, 
    playWin, 
    playQuizCorrect, 
    playQuizWrong 
  } = useSoundEffect();

  // Game States
  const [puzzle, setPuzzle] = useState<WordsearchPuzzle | null>(null);
  const [foundWords, setFoundWords] = useState<FoundWord[]>([]);
  const [score, setScore] = useState<number>(0);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Modals
  const [activeExplanationTerm, setActiveExplanationTerm] = useState<TermItem | null>(null);
  const [activeHintTerm, setActiveHintTerm] = useState<TermItem | null>(null);
  const [isTeacherGuideOpen, setIsTeacherGuideOpen] = useState<boolean>(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);

  // Assessment result
  const [quizResult, setQuizResult] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  // Get active category data
  const currentCategory = useMemo(() => {
    return CURRICULUM_CATEGORIES.find(c => c.id === selectedCategoryId) || CURRICULUM_CATEGORIES[0];
  }, [selectedCategoryId]);

  // Fullscreen management
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Timer interval
  useEffect(() => {
    if (screen !== 'game' || isPaused || isQuizModalOpen) return;

    const interval = setInterval(() => {
      setTimerSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [screen, isPaused, isQuizModalOpen]);

  // Start or regenerate puzzle
  const startNewGame = useCallback(() => {
    const config = DIFFICULTY_CONFIG[selectedDifficulty];
    const newPuzzle = generateWordsearch(currentCategory.terms, {
      size: config.gridSize,
      allowedDirections: [...config.allowedDirections],
      maxWords: config.maxWords
    });

    setPuzzle(newPuzzle);
    setFoundWords([]);
    setScore(0);
    setTimerSeconds(0);
    setIsPaused(false);
    setIsQuizModalOpen(false);
    setScreen('game');
  }, [currentCategory, selectedDifficulty]);

  // Handle word found
  const handleWordFound = (matched: PlacedWord) => {
    const colorClass = FOUND_COLORS[foundWords.length % FOUND_COLORS.length];
    const newFound: FoundWord = {
      id: matched.id,
      term: matched.term,
      normalized: matched.normalized,
      coordinates: matched.coordinates,
      colorClass
    };

    const nextFoundWords = [...foundWords, newFound];
    setFoundWords(nextFoundWords);
    setScore(prev => prev + 100);
    playFound();

    // Auto open explanation modal for pedagogy
    const termItem = currentCategory.terms.find(t => t.id === matched.id);
    if (termItem) {
      setActiveExplanationTerm(termItem);
    }

    // Check if all placed words found
    if (puzzle && nextFoundWords.length === puzzle.placedWords.length) {
      playWin();
      // Delay quiz opening slightly so user can enjoy completing grid
      setTimeout(() => {
        setIsQuizModalOpen(true);
      }, 1200);
    }
  };

  // Open hint modal
  const handleOpenHint = (word: PlacedWord) => {
    const item = currentCategory.terms.find(t => t.id === word.id);
    if (item) {
      setActiveHintTerm(item);
    }
  };

  // Open explanation directly from word bank
  const handleViewExplanation = (wordId: string) => {
    const item = currentCategory.terms.find(t => t.id === wordId);
    if (item) {
      setActiveExplanationTerm(item);
    }
  };

  // Quiz completion
  const handleCompleteQuiz = (correctCount: number, totalCount: number) => {
    setQuizResult({ correct: correctCount, total: totalCount });
    saveCategoryProgress(selectedCategoryId, score, correctCount, totalCount);
    setIsQuizModalOpen(false);
    setScreen('result');
    playWin();
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors ${
      isPresentationMode ? 'bg-slate-950 text-white' : 'bg-slate-900 text-slate-100'
    }`}>
      {/* Game Screen View */}
      {screen === 'game' && puzzle && (
        <>
          <Header
            categoryTitle={currentCategory.title}
            difficultyLabel={DIFFICULTY_CONFIG[selectedDifficulty].label}
            score={score}
            timerSeconds={timerSeconds}
            isPaused={isPaused}
            isMuted={isMuted}
            isPresentationMode={isPresentationMode}
            isFullscreen={isFullscreen}
            onTogglePause={() => setIsPaused(prev => !prev)}
            onToggleMute={toggleMute}
            onTogglePresentationMode={() => setIsPresentationMode(prev => !prev)}
            onToggleFullscreen={toggleFullscreen}
            onOpenTeacherGuide={() => setIsTeacherGuideOpen(true)}
            onExitGame={() => setScreen('home')}
          />

          <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {/* Left/Center: Grid Component */}
              <div className="lg:col-span-8 flex justify-center">
                <WordsearchGrid
                  grid={puzzle.grid}
                  placedWords={puzzle.placedWords}
                  foundWords={foundWords}
                  isPresentationMode={isPresentationMode}
                  isPaused={isPaused}
                  onWordFound={handleWordFound}
                  onPlaySelect={playSelect}
                />
              </div>

              {/* Right: Word Bank Component */}
              <div className="lg:col-span-4">
                <WordBank
                  targetWords={puzzle.placedWords}
                  foundWords={foundWords}
                  isPresentationMode={isPresentationMode}
                  onOpenHint={handleOpenHint}
                  onViewExplanation={handleViewExplanation}
                />
              </div>
            </div>
          </main>
        </>
      )}

      {/* Home Screen View */}
      {screen === 'home' && (
        <main className="flex-1 flex items-center justify-center py-8">
          <CategorySelect
            selectedCategoryId={selectedCategoryId}
            selectedDifficulty={selectedDifficulty}
            isPresentationMode={isPresentationMode}
            onSelectCategory={setSelectedCategoryId}
            onSelectDifficulty={setSelectedDifficulty}
            onTogglePresentationMode={() => setIsPresentationMode(prev => !prev)}
            onOpenTeacherGuide={() => setIsTeacherGuideOpen(true)}
            onStartGame={startNewGame}
          />
        </main>
      )}

      {/* Result Screen View */}
      {screen === 'result' && (
        <main className="flex-1 flex items-center justify-center py-8">
          <ResultScreen
            categoryTitle={currentCategory.title}
            difficultyLabel={DIFFICULTY_CONFIG[selectedDifficulty].label}
            score={score}
            timerSeconds={timerSeconds}
            foundWordCount={foundWords.length}
            totalWordCount={puzzle?.placedWords.length || 0}
            quizCorrectCount={quizResult.correct}
            quizTotalCount={quizResult.total}
            learningGoal={currentCategory.learningGoal}
            onPlayAgain={startNewGame}
            onGoHome={() => setScreen('home')}
            onOpenTeacherGuide={() => setIsTeacherGuideOpen(true)}
          />
        </main>
      )}

      {/* Term Explanation Modal */}
      <TermModal
        term={activeExplanationTerm}
        onClose={() => setActiveExplanationTerm(null)}
      />

      {/* Scaffolding Hint Modal */}
      <HintModal
        term={activeHintTerm}
        onClose={() => setActiveHintTerm(null)}
      />

      {/* Teacher Classroom Guide Modal */}
      {isTeacherGuideOpen && (
        <TeacherGuideModal
          onClose={() => setIsTeacherGuideOpen(false)}
        />
      )}

      {/* Quiz Modal */}
      {isQuizModalOpen && (
        <QuizModal
          questions={QUIZ_DATABASE[selectedCategoryId] || []}
          onCompleteQuiz={handleCompleteQuiz}
          onPlayCorrect={playQuizCorrect}
          onPlayWrong={playQuizWrong}
        />
      )}

      {/* Footer */}
      <footer className="py-3 px-4 border-t border-slate-800 text-center text-xs text-slate-500">
        Media Pembelajaran Wordsearch Informatika (Fase D / Kelas VIII) • Kurikulum 2025 • Local-First
      </footer>
    </div>
  );
}
export default App;

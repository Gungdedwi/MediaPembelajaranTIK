import { useState } from 'react';
import type { FC } from 'react';
import { QuizQuestion } from '../../domain/assessment/quizData.ts';
import { HelpCircle, CheckCircle, XCircle, ArrowRight, Award } from 'lucide-react';

interface QuizModalProps {
  questions: QuizQuestion[];
  onCompleteQuiz: (correctCount: number, totalCount: number) => void;
  onPlayCorrect: () => void;
  onPlayWrong: () => void;
}

export const QuizModal: FC<QuizModalProps> = ({
  questions,
  onCompleteQuiz,
  onPlayCorrect,
  onPlayWrong
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [scoreList, setScoreList] = useState<boolean[]>([]);

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const isCorrect = selectedOption === currentQ.correctOptionId;

  const handleSubmitAnswer = () => {
    if (!selectedOption || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    const correct = selectedOption === currentQ.correctOptionId;
    setScoreList(prev => [...prev, correct]);

    if (correct) {
      onPlayCorrect();
    } else {
      onPlayWrong();
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      // Complete quiz
      const totalCorrect = scoreList.filter(Boolean).length + (isCorrect ? 1 : 0);
      onCompleteQuiz(totalCorrect, questions.length);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      {/* Modal Dialog with bounded height and scrollable body */}
      <div className="w-full max-w-2xl bg-slate-900 border border-indigo-500/40 rounded-2xl shadow-2xl relative my-auto max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Fixed Header */}
        <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-b border-slate-800 shrink-0 bg-slate-900">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-400" />
            <span className="font-bold text-white text-base sm:text-lg">
              Tantangan Pemahaman Konsep (Mini Quiz)
            </span>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
            Soal {currentIndex + 1} dari {questions.length}
          </span>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* Scenario Card */}
          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Skenario Kasus:</span>
            </div>
            <p className="text-sm sm:text-base text-slate-100 leading-relaxed italic">
              "{currentQ.scenario}"
            </p>
          </div>

          {/* Question Prompt */}
          <h4 className="font-bold text-white text-sm sm:text-base leading-snug">
            {currentQ.question}
          </h4>

          {/* Options List */}
          <div className="space-y-2.5">
            {currentQ.options.map(opt => {
              const isSelected = selectedOption === opt.id;
              const isTargetCorrect = opt.id === currentQ.correctOptionId;

              let optionStyle = 'bg-slate-800/70 border-slate-700 text-slate-200 hover:bg-slate-700/80';
              if (isAnswerSubmitted) {
                if (isTargetCorrect) {
                  optionStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-semibold';
                } else if (isSelected && !isTargetCorrect) {
                  optionStyle = 'bg-rose-950/70 border-rose-500 text-rose-200';
                } else {
                  optionStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'bg-indigo-900/60 border-indigo-400 text-white shadow-md ring-1 ring-indigo-400';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={isAnswerSubmitted}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs sm:text-sm flex items-start gap-3 cursor-pointer ${optionStyle}`}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs bg-slate-900/80 shrink-0 border border-slate-700">
                    {opt.id}
                  </span>
                  <span className="flex-1 leading-relaxed">
                    {opt.text}
                  </span>
                  {isAnswerSubmitted && isTargetCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && !isTargetCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible after submission) */}
          {isAnswerSubmitted && (
            <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-fade-in ${
              isCorrect 
                ? 'bg-emerald-950/40 border-emerald-600/50 text-emerald-100' 
                : 'bg-rose-950/40 border-rose-600/50 text-rose-100'
            }`}>
              <div className="font-bold flex items-center gap-1.5 mb-1.5">
                {isCorrect ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Jawaban Tepat!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-400" />
                    <span className="text-rose-300">Konsep Perlu Diperhatikan:</span>
                  </>
                )}
              </div>
              <p>{currentQ.explanation}</p>
            </div>
          )}
        </div>

        {/* Fixed Docked Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 shrink-0 bg-slate-900/95 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-400">
            {isAnswerSubmitted ? 'Pelajari pembahasannya di atas.' : 'Pilih satu opsi jawaban.'}
          </div>

          {!isAnswerSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white transition-all shadow-lg shadow-indigo-950 cursor-pointer"
            >
              Kirim Jawaban
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950 cursor-pointer hover:scale-105"
            >
              <span>{currentIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

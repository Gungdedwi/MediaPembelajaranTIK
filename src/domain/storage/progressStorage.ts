export interface CategoryProgress {
  categoryId: string;
  isCompleted: boolean;
  bestGameScore: number;
  bestQuizScore: number;
  lastPlayedAt: string;
}

const STORAGE_KEY = 'wordsearch_progress_fase_d_v1';

export function loadAllProgress(): Record<string, CategoryProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveCategoryProgress(
  categoryId: string,
  gameScore: number,
  quizCorrect: number,
  quizTotal: number
): void {
  try {
    const current = loadAllProgress();
    const existing = current[categoryId];

    const quizScorePercent = quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) : 100;

    current[categoryId] = {
      categoryId,
      isCompleted: true,
      bestGameScore: Math.max(existing?.bestGameScore || 0, gameScore),
      bestQuizScore: Math.max(existing?.bestQuizScore || 0, quizScorePercent),
      lastPlayedAt: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // LocalStorage might be full or restricted
  }
}

export function resetAllProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignored
  }
}

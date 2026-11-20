import { useState, useCallback } from 'react';

export function useSoundEffect() {
  const [isMuted, setIsMuted] = useState(false);

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    if (isMuted) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // AudioContext may be restricted before user gesture
    }
  }, [isMuted]);

  const playSelect = useCallback(() => {
    playTone(440, 0.08, 'triangle');
  }, [playTone]);

  const playFound = useCallback(() => {
    // 2-tone pleasant chord
    playTone(523.25, 0.2, 'sine'); // C5
    setTimeout(() => playTone(659.25, 0.35, 'sine'), 100); // E5
  }, [playTone]);

  const playWin = useCallback(() => {
    // 3-tone victory fanfare
    playTone(523.25, 0.15, 'sine');
    setTimeout(() => playTone(659.25, 0.15, 'sine'), 120);
    setTimeout(() => playTone(783.99, 0.4, 'sine'), 240);
  }, [playTone]);

  const playQuizCorrect = useCallback(() => {
    playTone(587.33, 0.15, 'sine');
    setTimeout(() => playTone(880, 0.3, 'sine'), 100);
  }, [playTone]);

  const playQuizWrong = useCallback(() => {
    playTone(280, 0.25, 'sawtooth');
  }, [playTone]);

  const toggleMute = () => setIsMuted(prev => !prev);

  return {
    isMuted,
    toggleMute,
    playSelect,
    playFound,
    playWin,
    playQuizCorrect,
    playQuizWrong
  };
}

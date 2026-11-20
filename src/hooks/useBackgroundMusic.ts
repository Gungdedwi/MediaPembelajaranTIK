import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * Procedural Web Audio API Background Music Generator
 * Generates a cheerful, relaxing educational game melody (Kahoot / Animal Crossing style)
 * Zero external audio files required! 100% offline & instant loading.
 */
export function useBackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isRunningRef = useRef(false);
  const timerIdRef = useRef<number | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  // Musical note frequencies (in Hz)
  const NOTES: Record<string, number> = {
    C3: 130.81, G3: 196.00, A3: 220.00, F3: 174.61,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23,
    G4: 392.00, A4: 440.00, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99
  };

  // 16-step upbeat educational melody (Notes & Bass)
  const MELODY: { note: string; bass: string; dur: number }[] = [
    // Bar 1 (C Major)
    { note: 'E4', bass: 'C3', dur: 0.25 },
    { note: 'G4', bass: '',   dur: 0.25 },
    { note: 'C5', bass: 'G3', dur: 0.25 },
    { note: 'E5', bass: '',   dur: 0.25 },
    // Bar 2 (G Major)
    { note: 'D5', bass: 'G3', dur: 0.25 },
    { note: 'B4', bass: '',   dur: 0.25 },
    { note: 'G4', bass: 'D4', dur: 0.25 },
    { note: 'D4', bass: '',   dur: 0.25 },
    // Bar 3 (A Minor)
    { note: 'C5', bass: 'A3', dur: 0.25 },
    { note: 'E5', bass: '',   dur: 0.25 },
    { note: 'A4', bass: 'E4', dur: 0.25 },
    { note: 'C5', bass: '',   dur: 0.25 },
    // Bar 4 (F Major)
    { note: 'A4', bass: 'F3', dur: 0.25 },
    { note: 'F4', bass: '',   dur: 0.25 },
    { note: 'G4', bass: 'C4', dur: 0.25 },
    { note: 'C5', bass: '',   dur: 0.25 },
  ];

  const playNote = (freq: number, duration: number, type: OscillatorType = 'sine', volume = 0.08) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      noteGain.gain.setValueAtTime(volume, ctx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(noteGain);
      noteGain.connect(masterGainRef.current);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignored
    }
  };

  const playStep = (stepIndex: number) => {
    if (!isRunningRef.current) return;

    const step = MELODY[stepIndex % MELODY.length];

    // Play melody chime (warm kalimba style)
    if (step.note && NOTES[step.note]) {
      playNote(NOTES[step.note], 0.22, 'triangle', 0.07);
    }

    // Play gentle bass note
    if (step.bass && NOTES[step.bass]) {
      playNote(NOTES[step.bass], 0.35, 'sine', 0.09);
    }

    // Next beat in 260ms (~115 BPM)
    timerIdRef.current = window.setTimeout(() => {
      playStep((stepIndex + 1) % MELODY.length);
    }, 260);
  };

  const startMusic = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        masterGainRef.current = audioCtxRef.current.createGain();
        masterGainRef.current.gain.setValueAtTime(0.7, audioCtxRef.current.currentTime);
        masterGainRef.current.connect(audioCtxRef.current.destination);
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      if (!isRunningRef.current) {
        isRunningRef.current = true;
        setIsPlaying(true);
        playStep(0);
      }
    } catch {
      // Browser autoplay policy might restrict until user interaction
    }
  }, []);

  const stopMusic = useCallback(() => {
    isRunningRef.current = false;
    setIsPlaying(false);
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, []);

  const toggleMusic = useCallback(() => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  }, [isPlaying, startMusic, stopMusic]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      stopMusic();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [stopMusic]);

  return {
    isPlayingMusic: isPlaying,
    startMusic,
    stopMusic,
    toggleMusic
  };
}

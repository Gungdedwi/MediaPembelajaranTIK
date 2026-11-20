import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * Procedural Web Audio API Background Music Engine (Lagu Tema Edukatif)
 * Rich multi-track synthesizer: Lead Melody + Walking Bass + Rhythmic Percussion
 * Guaranteed to play cleanly across desktop & mobile browsers.
 */
export function useBackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isRunningRef = useRef(false);
  const timerIdRef = useRef<number | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);

  // Note Frequencies (Hz)
  const NOTES: Record<string, number> = {
    C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
    C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
  };

  // 32-step cheerful upbeat educational game theme (C - G - Am - F progression)
  const TRACK: { lead: string; bass: string; drum: 'kick' | 'snare' | 'hat' | 'none' }[] = [
    // Measure 1: C Major
    { lead: 'E4', bass: 'C3', drum: 'kick' },
    { lead: '',   bass: '',   drum: 'hat' },
    { lead: 'G4', bass: 'G3', drum: 'snare' },
    { lead: 'C5', bass: '',   drum: 'hat' },
    { lead: 'E5', bass: 'C3', drum: 'kick' },
    { lead: 'D5', bass: '',   drum: 'hat' },
    { lead: 'C5', bass: 'G3', drum: 'snare' },
    { lead: 'G4', bass: '',   drum: 'hat' },

    // Measure 2: G Major
    { lead: 'D5', bass: 'G3', drum: 'kick' },
    { lead: '',   bass: '',   drum: 'hat' },
    { lead: 'B4', bass: 'D3', drum: 'snare' },
    { lead: 'G4', bass: '',   drum: 'hat' },
    { lead: 'D4', bass: 'G3', drum: 'kick' },
    { lead: 'G4', bass: '',   drum: 'hat' },
    { lead: 'B4', bass: 'D3', drum: 'snare' },
    { lead: 'D5', bass: '',   drum: 'hat' },

    // Measure 3: A Minor
    { lead: 'C5', bass: 'A3', drum: 'kick' },
    { lead: '',   bass: '',   drum: 'hat' },
    { lead: 'E5', bass: 'E3', drum: 'snare' },
    { lead: 'A4', bass: '',   drum: 'hat' },
    { lead: 'C5', bass: 'A3', drum: 'kick' },
    { lead: 'D5', bass: '',   drum: 'hat' },
    { lead: 'E5', bass: 'E3', drum: 'snare' },
    { lead: 'G5', bass: '',   drum: 'hat' },

    // Measure 4: F Major
    { lead: 'A4', bass: 'F3', drum: 'kick' },
    { lead: '',   bass: '',   drum: 'hat' },
    { lead: 'C5', bass: 'C3', drum: 'snare' },
    { lead: 'F4', bass: '',   drum: 'hat' },
    { lead: 'G4', bass: 'F3', drum: 'kick' },
    { lead: 'A4', bass: '',   drum: 'hat' },
    { lead: 'B4', bass: 'G3', drum: 'snare' },
    { lead: 'C5', bass: '',   drum: 'hat' },
  ];

  const getAudioContext = useCallback((): AudioContext => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();

      masterGainRef.current = audioCtxRef.current.createGain();
      masterGainRef.current.gain.setValueAtTime(0.4, audioCtxRef.current.currentTime);
      masterGainRef.current.connect(audioCtxRef.current.destination);
    }
    return audioCtxRef.current;
  }, []);

  const playLead = (freq: number) => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Cheerful chime: triangle wave
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(masterGainRef.current!);

      osc.start(now);
      osc.stop(now + 0.23);
    } catch {
      // Ignored
    }
  };

  const playBass = (freq: number) => {
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Warm acoustic bass: sine wave
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(gain);
      gain.connect(masterGainRef.current!);

      osc.start(now);
      osc.stop(now + 0.33);
    } catch {
      // Ignored
    }
  };

  const playDrum = (type: 'kick' | 'snare' | 'hat' | 'none') => {
    if (type === 'none') return;
    try {
      const ctx = getAudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const now = ctx.currentTime;

      if (type === 'kick') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.1);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.connect(gain);
        gain.connect(masterGainRef.current!);
        osc.start(now);
        osc.stop(now + 0.11);
      } else if (type === 'snare' || type === 'hat') {
        // High frequency click for rhythm
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(type === 'snare' ? 240 : 800, now);
        gain.gain.setValueAtTime(type === 'snare' ? 0.08 : 0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(masterGainRef.current!);
        osc.start(now);
        osc.stop(now + 0.07);
      }
    } catch {
      // Ignored
    }
  };

  const playStep = useCallback((stepIndex: number) => {
    if (!isRunningRef.current) return;

    const step = TRACK[stepIndex % TRACK.length];

    if (step.lead && NOTES[step.lead]) {
      playLead(NOTES[step.lead]);
    }

    if (step.bass && NOTES[step.bass]) {
      playBass(NOTES[step.bass]);
    }

    if (step.drum && step.drum !== 'none') {
      playDrum(step.drum);
    }

    // 125 BPM (eighth notes ~ 240ms)
    timerIdRef.current = window.setTimeout(() => {
      playStep((stepIndex + 1) % TRACK.length);
    }, 240);
  }, []);

  const startMusic = useCallback(() => {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    if (!isRunningRef.current) {
      isRunningRef.current = true;
      setIsPlaying(true);
      playStep(0);
    }
  }, [getAudioContext, playStep]);

  const stopMusic = useCallback(() => {
    isRunningRef.current = false;
    setIsPlaying(false);
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, []);

  const toggleMusic = useCallback(() => {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  }, [isPlaying, getAudioContext, startMusic, stopMusic]);

  // Clean up
  useEffect(() => {
    return () => {
      stopMusic();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [stopMusic]);

  // Auto-resume audio context on user gesture anywhere on window
  useEffect(() => {
    const unlockAudio = () => {
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume().catch(() => {});
      }
    };
    window.addEventListener('click', unlockAudio, { passive: true });
    window.addEventListener('touchstart', unlockAudio, { passive: true });
    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
    };
  }, []);

  return {
    isPlayingMusic: isPlaying,
    startMusic,
    stopMusic,
    toggleMusic
  };
}

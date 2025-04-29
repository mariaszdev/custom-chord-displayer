import { create } from 'zustand';

interface Chord {
  name: string;
  notes: string[];
}

interface ChordState {
  chords: Chord[];
  setChords: (chords: Chord[]) => void;
}

export const useChordStore = create<ChordState>((set) => ({
  chords: [],
  setChords: (chords) => set({ chords }),
}));

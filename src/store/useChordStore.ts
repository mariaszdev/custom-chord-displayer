import { create } from 'zustand';
import { ParsedMetadata } from '@/lib/musicxmlParser';

interface ChordState {
  metadata: ParsedMetadata | null;
  setMetadata: (data: ParsedMetadata) => void;
}

export const useChordStore = create<ChordState>((set) => ({
  metadata: null,
  setMetadata: (data) => set({ metadata: data }),
}));

'use client';

import { useChordStore } from '@/store/useChordStore';

export default function ChordNameView() {
  const { chords } = useChordStore();

  return (
    <div className="p-4">
      {chords.map((chord, idx) => (
        <div key={idx} className="mb-2">
          <p className="text-lg font-bold">{chord.name}</p>
        </div>
      ))}
    </div>
  );
}

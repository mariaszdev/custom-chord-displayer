'use client';

import { useChordStore } from '@/store/useChordStore';
import { parseMusicXML } from '@/lib/musicxmlParser';

export default function MusicXMLUpload() {
  const { setChords } = useChordStore();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    const parsedMeasures = parseMusicXML(text);
    setChords(parsedMeasures);
  };

  return (
    <div className="px-4 py-1">
      <input type="file" accept=".xml,.musicxml" onChange={handleFileUpload} />
    </div>
  );
}

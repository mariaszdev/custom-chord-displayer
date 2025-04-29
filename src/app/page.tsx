import MusicXMLUpload from '@/components/Upload/MusicXMLUpload';
import ChordNameView from '@/components/ChordViews/ChordNameView';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Custom Chord Displayer</h1>
      <MusicXMLUpload />
      
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Chord Names</h2>
        <ChordNameView />
      </section>
    </main>
  );
}

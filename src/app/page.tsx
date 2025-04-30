import MusicXMLUpload from '@/components/Upload/MusicXMLUpload';
import ChordChartView from '@/components/ChordViews/ChordChartView';

export default function Home() {
  return (
    <main className="min-h-screen py-6 px-8">
      <h1 className="text-3xl font-bold mb-4">Custom Chord Displayer</h1>
      <MusicXMLUpload />
      
      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <ChordChartView />
      </section>
    </main>
  );
}

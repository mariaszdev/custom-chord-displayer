# Custom Chord Displayer

Extract and displays a chord chart from .musicxml files.

## 🛠 Tech Stack

- **Next.js** – React framework for SSR and routing
- **TypeScript** – Type-safe components and utilities
- **Tailwind CSS** – Utility-first styling
- **Zustand** – Lightweight state management for storing parsed chord data
- **SVG** – Custom-designed barlines 
- **MusicXML** – Input file format

## ✅ Current Features

- Parse and extract title, composer, time-signature, chords, barlines from MusicXML
- Display chords in a grid layout
- Dynamically render accurate barline types using SVG assets
- Responsive table-based layout with consistent cell sizing
- Align chords and barlines for clear musical readability
- Default fallbacks for barlines when not specified

## 🔜 Planned Features

- display chord names in different notation styles
- display chords as guitar tabs
- display chords as piano key diagram
- display chords for Roli Lightpad Block Midi Controler in 5x5 grid
- Export PDF or printable chart version
- Accessibility enhancements (ARIA labels for screen readers)

## 📦 Getting Started

1. Clone the repo
2. Run `npm install`
3. Start dev server with `npm run dev`
4. Upload a MusicXML file and view the generated chart

---

Built for musicians and chart makers.
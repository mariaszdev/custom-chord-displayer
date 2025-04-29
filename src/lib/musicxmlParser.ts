export function parseMusicXML(xmlString: string) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "application/xml");

  const harmonyElements = Array.from(xml.getElementsByTagName('harmony'));

  const chords = harmonyElements.map(harmony => {
    const root = harmony.getElementsByTagName('root-step')[0]?.textContent || '';
    const kind = harmony.getElementsByTagName('kind')[0]?.textContent || '';

    return {
      name: `${root} ${kind}`,
      notes: [], // Will fill later using Tonal.js
    };
  });

  return chords;
}

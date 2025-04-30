export function parseMusicXML(xmlString: string): ParsedMetadata {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlString, "application/xml");

  const part = xml.getElementsByTagName('part')[0];
  if (!part) throw new Error("No part found");

  const measures: ParsedMeasure[] = [];
  const measureElements = part.getElementsByTagName('measure');

  for (let i = 0; i < measureElements.length; i++) {
    const measureElement = measureElements[i];
    const measureNumber = parseInt(measureElement.getAttribute('number') || '0', 10);

    const chords: string[] = [];
    const harmonyElements = measureElement.getElementsByTagName('harmony');
    for (let j = 0; j < harmonyElements.length; j++) {
      const harmony = harmonyElements[j];
      const root = harmony.getElementsByTagName('root-step')[0]?.textContent || '';
      const alter = harmony.getElementsByTagName('root-alter')[0]?.textContent;
      const kindElement = harmony.getElementsByTagName('kind')[0];
      const kindText = kindElement?.getAttribute('text') || kindElement?.textContent || '';

      let accidental = '';
      if (alter === '1') accidental = '#';
      else if (alter === '-1') accidental = 'b';

      if (root && kindText) {
        chords.push(`${root}${accidental} ${kindText}`);
      }
    }

    // Capture barlines
    const leftBarlineElement = measureElement.querySelector('barline[location="left"]');
    const rightBarlineElement = measureElement.querySelector('barline[location="right"]');

    const leftBarline = leftBarlineElement
      ? {
          style: (leftBarlineElement.querySelector('bar-style')?.textContent as BarlineInfo['style']) || 'light',
          repeat: leftBarlineElement.querySelector('repeat')?.getAttribute('direction') as 'forward' | 'backward' | undefined,
        }
      : undefined;

    const rightBarline = rightBarlineElement
      ? {
          style: (rightBarlineElement.querySelector('bar-style')?.textContent as BarlineInfo['style']) || 'light',
          repeat: rightBarlineElement.querySelector('repeat')?.getAttribute('direction') as 'forward' | 'backward' | undefined,
        }
      : undefined;

    measures.push({
      measureNumber,
      chords,
      leftBarline,
      rightBarline,
    });
  }

  return {
    title: xml.getElementsByTagName('work-title')[0]?.textContent || "Untitled",
    composer: xml.querySelector('creator[type="composer"]')?.textContent || "Unknown Composer",
    timeSignature: `${xml.getElementsByTagName('beats')[0]?.textContent || 4}/${xml.getElementsByTagName('beat-type')[0]?.textContent || 4}`,
    measures,
  };
}

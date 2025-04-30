export type BarlineType =
  | 'light'
  | 'light-light'
  | 'light-heavy'
  | 'heavy-light'
  | 'heavy'
  | 'heavy-heavy'
  | 'dashed'
  | 'dotted'
  | 'repeatStart'
  | 'repeatEnd'
  | 'repeatEndStart';

export function getBarlineTypeBetween(prev: any, curr: any): BarlineType {
  const prevRepeat = prev?.rightBarline?.repeat;
  const currRepeat = curr?.leftBarline?.repeat;

  if (prevRepeat === 'backward' && currRepeat === 'forward') {
    return 'repeatEndStart';
  }
  if (prevRepeat === 'backward') return 'repeatEnd';
  if (currRepeat === 'forward') return 'repeatStart';

  if (prev?.rightBarline?.style) return prev.rightBarline.style;
  if (curr?.leftBarline?.style) return curr.leftBarline.style;

  return 'light';
}

export function getBarlineTypeStart(measure: any): BarlineType {
  return measure.leftBarline?.repeat === 'forward'
    ? 'repeatStart'
    : measure.leftBarline?.style || 'light';
}

export function getBarlineTypeEnd(measure: any): BarlineType {
  return measure.rightBarline?.repeat === 'backward'
    ? 'repeatEnd'
    : measure.rightBarline?.style || 'light';
}
'use client';

interface BarlineProps {
  type: string;
  height?: number;
}

const DEFAULT_HEIGHT = 50;

export default function Barline({
  type,
  height = DEFAULT_HEIGHT,
}: BarlineProps) {
  return (
<div
  style={{ height }}
  className="inline-block align-middle"
>
  <img
    src={`/barlines/${type}.svg`}
    alt={type}
    style={{
      height: '100%',
      width: 'auto',
      objectFit: 'contain',
      display: 'block', // Prevent inline spacing issues from img
    }}
    draggable={false}
  />
</div>
  );
}
'use client';

import React from 'react';
import { useChordStore } from '@/store/useChordStore';
import Barline from '@/components/Barline';
import {
  getBarlineTypeStart,
  getBarlineTypeEnd,
  getBarlineTypeBetween,
} from '@/lib/barlineUtils';

export default function ChordChartView() {
  const { metadata } = useChordStore();
  const measuresPerRow = 4;

  if (!metadata) return null;

  const { title, composer, timeSignature, measures } = metadata;

  const rows = [];
  for (let i = 0; i < measures.length; i += measuresPerRow) {
    rows.push(measures.slice(i, i + measuresPerRow));
  }

  return (
    <div className="px-2 overflow-x-auto">
          <div className="text-center mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl text-right">{composer}</p>
      <p className="text-xl font-light text-left italic mt-1">{timeSignature}</p>
    </div>

      <table className="table-fixed border-collapse w-full text-left">
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((measure, i) => {
                const isFirst = i === 0;
                const prev = row[i - 1];

                const barlineType = isFirst
                  ? getBarlineTypeStart(measure)
                  : getBarlineTypeBetween(prev, measure);

                const alignClass = isFirst
                  ? 'text-left'
                  : 'text-center';

                return (
                  <React.Fragment key={`group-${measure.measureNumber}`}>
                    {/* Barline (left or between) */}
                    <td className={`w-[50px] py-4 ${alignClass}`}>
                      <Barline type={barlineType} />
                    </td>

                    {/* Measure cell */}
                    <td className="p-2">
                      <div className="flex gap-1">
                        {measure.chords.map((chord: string, idx: number) => (
                          <div key={idx} className="flex-1 truncate text-xl">
                            {chord}
                          </div>
                        ))}
                      </div>
                    </td>
                  </React.Fragment>
                );
              })}

              {/* Final barline of row */}
              <td className="w-[50px] py-4 text-right">
                <Barline type={getBarlineTypeEnd(row[row.length - 1])} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
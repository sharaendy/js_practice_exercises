// @ts-check
import { makePoint, toString as pointToString } from '@hexlet/points';
import {
  makeSegment,
  startSegment,
  endSegment,
  midpointSegment,
  segmentToString,
} from '../src/draft.js';

describe('segment', () => {
  const segment = makeSegment(makePoint(1, 2), makePoint(-4, -2));
  const segment2 = makeSegment(makePoint(2, 8), makePoint(4, -2));

  it('startSegment', () => {
    expect(pointToString(startSegment(segment))).toBe(pointToString(makePoint(1, 2)));
    expect(pointToString(startSegment(segment2))).toBe(pointToString(makePoint(2, 8)));
  });

  it('endSegment', () => {
    expect(pointToString(endSegment(segment))).toBe(pointToString(makePoint(-4, -2)));
    expect(pointToString(endSegment(segment2))).toBe(pointToString(makePoint(4, -2)));
  });

  it('segmentToString', () => {
    expect(segmentToString(segment)).toBe('[(1, 2), (-4, -2)]');
    expect(segmentToString(segment2)).toBe('[(2, 8), (4, -2)]');
  });

  it('midpointSegment', () => {
    expect(pointToString(midpointSegment(segment))).toBe('(-1.5, 0)');
    expect(pointToString(midpointSegment(segment2))).toBe('(3, 3)');
  });
});

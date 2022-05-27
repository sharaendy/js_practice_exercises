import { makePoint, toString } from '@hexlet/points';
import { calculateDistance, getQuadrant, getSymmetricalPoint } from '../src/draft.js';

describe('points', () => {
  it('getQuadrant', () => {
    expect(getQuadrant(makePoint(0, 0))).toBeNull();
    expect(getQuadrant(makePoint(5, 0))).toBeNull();
    expect(getQuadrant(makePoint(1, 5))).toBe(1);
    expect(getQuadrant(makePoint(-3, 10))).toBe(2);
    expect(getQuadrant(makePoint(-2, -5))).toBe(3);
    expect(getQuadrant(makePoint(4, -1))).toBe(4);
  });

  it('getSymmetricalPoint', () => {
    expect(toString(getSymmetricalPoint(makePoint(10, 10)))).toBe(toString(makePoint(-10, -10)));
    expect(toString(getSymmetricalPoint(makePoint(-10, -10)))).toBe(toString(makePoint(10, 10)));
    expect(toString(getSymmetricalPoint(makePoint(10, -10)))).toBe(toString(makePoint(-10, 10)));
  });

  it('calculateDistance', () => {
    expect(calculateDistance(makePoint(-2, -3), makePoint(-4, 4))).toBeCloseTo(7.28, 2);
  });
});

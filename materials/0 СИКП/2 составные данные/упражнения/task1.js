import { makePoint, getX, getY } from '@hexlet/points';

function getSymmetricalPoint(point) {
  return makePoint(-getX(point), -getY(point));
}

function getQuadrant(point) {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  if (x > 0 && y < 0) return 4;
  return null;
}

function calculateDistance(point1, point2) {
  const x1 = getX(point1);
  const y1 = getY(point1);
  const x2 = getX(point2);
  const y2 = getY(point2);
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

export { getSymmetricalPoint, getQuadrant, calculateDistance };

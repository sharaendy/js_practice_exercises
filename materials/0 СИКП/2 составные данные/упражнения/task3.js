import {
  makePoint,
  getX,
  getY,
  toString as pointToString,
} from '@hexlet/points';
import { cons, car, cdr } from '@hexlet/pairs';

const makeSegment = (point1, point2) => cons(point1, point2);
const startSegment = (segment) => car(segment);
const endSegment = (segment) => cdr(segment);

const segmentToString = (segment) => {
  const start = pointToString(startSegment(segment));
  const end = pointToString(endSegment(segment));
  return `[${start}, ${end}]`;
};

const midpointSegment = (segment) => {
  const x1 = getX(startSegment(segment));
  const x2 = getX(endSegment(segment));
  const y1 = getY(startSegment(segment));
  const y2 = getY(endSegment(segment));
  const middleX = (x1 + x2) / 2;
  const middleY = (y1 + y2) / 2;
  return cons(middleX, middleY);
};

export {
  makeSegment,
  startSegment,
  endSegment,
  segmentToString,
  midpointSegment,
};

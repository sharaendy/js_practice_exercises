import {
  makePoint,
  getX,
  getY,
  quadrant,
} from '@hexlet/points';
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

export function makeRectangle(point, width, height) {
  return cons(point, cons(width, height));
}

export const getStartPoint = (rectangle) => car(rectangle);
export const getWidth = (rectangle) => {
  const params = cdr(rectangle);
  return getX(params);
};
export const getHeight = (rectangle) => {
  const params = cdr(rectangle);
  return getY(params);
};

export const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1));
  const point3 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));
  const point4 = makePoint(getX(point1), getY(point1) - getHeight(rectangle));

  if (quadrant(point1) !== 2) return false;
  if (quadrant(point2) !== 1) return false;
  if (quadrant(point3) !== 4) return false;
  if (quadrant(point4) !== 3) return false;
  return true;
};

//! решение 1
export default function getMiddlePoint(point1, point2) {
  const middleX = (point1.x + point2.x) / 2;
  const middleY = (point1.y + point2.y) / 2;
  const middlePoint = { x: middleX, y: middleY };
  return middlePoint;
}

//! решение 2
export default (point1, point2) => {
  const x = (point1.x + point2.x) / 2;
  const y = (point1.y + point2.y) / 2;

  return { x, y };
};
//! вариант 1
export default function calculateDistance(point1, point2) {
  const x1 = point1[0];
  const x2 = point2[0];
  const y1 = point1[1];
  const y2 = point2[1];

  const pass = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
  return pass;
}

//! вариант 2
const calculateDistance = (point1, point2) => {
  const deltaX = point2[0] - point1[0];
  const deltaY = point2[1] - point1[1];

  return Math.sqrt((deltaX ** 2) + (deltaY ** 2));
};
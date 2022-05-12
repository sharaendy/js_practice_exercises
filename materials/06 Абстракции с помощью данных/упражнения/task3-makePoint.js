const x = 4;
const y = 8;

//! решение 1
const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt((x ** 2) + (y ** 2)),
  };

  return point;
};

const point = makePoint(x, y)

function getX(point) {
  const angle = point.angle;
  const radius = point.radius;
  return Math.round(radius * Math.cos(angle));
}

function getY(point) {
  const angle = point.angle;
  const radius = point.radius;
  return Math.round(radius * Math.sin(angle));
}

console.log(getX(point));
console.log(getY(point));

//! решение 2
const getAngle = (point) => point.angle;
const getRadius = (point) => point.radius;

const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));
const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));
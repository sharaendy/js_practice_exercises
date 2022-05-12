//! лучшее 
const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makeDecartPoint(
    getX(point1) + getWidth(rectangle),
    getY(point1) - getHeight(rectangle),
  );

  return getQuadrant(point1) === 2 && getQuadrant(point2) === 4;
};

export {
  makeRectangle,
  containsOrigin,
};

//! решение 1
const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;
const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

const p = makeDecartPoint(-4, 3); // { x: -4, y: 3 }
const rectangle = makeRectangle(p, 5, 4);

function makeRectangle(point, width, height) {
  const point1 = point;
  const point2 = { x: point.x + width, y: point.y };
  const point3 = { x: point.x + width, y: point.y - height };
  const point4 = { x: point.x, y: point.y - height };
  return { point1, point2, point3, point4 };
}
console.log(rectangle)

function getStartPoint(rectangle) {
  return rectangle.point1;
}
console.log(getStartPoint(rectangle));

function getWidth(rectangle) {
  return Math.abs(rectangle.point1.x) + Math.abs(rectangle.point2.x);
}
console.log(getWidth(rectangle));
function getHeight(rectangle) {
  return Math.abs(rectangle.point1.y) + Math.abs(rectangle.point4.y);
}
console.log(getHeight(rectangle));

function containsOrigin(rectangle) {
  let i = 0;
  if (rectangle.point1.x < 0 && rectangle.point1.y > 0) {
    i += 1;
  }
  if (rectangle.point2.x > 0 && rectangle.point2.y > 0) {
    i += 1;
  }
  if (rectangle.point3.x > 0 && rectangle.point3.y < 0) {
    i += 1;
  }
  if (rectangle.point4.x < 0 && rectangle.point4.y < 0) {
    i += 1;
  }
  return (i === 4);
}
console.log(containsOrigin(rectangle)); //true
// export {makeRectangle, containsOrigin};

export default function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.getX = function getX() {
  return this.x;
};

Point.prototype.getY = function getY() {
  return this.y;
};

const point1 = new Point(1, 10);
Point.prototype.toString = function toString() {
  return `(${this.x}, ${this.y})`;
}

console.log(point1.toString()); // => (1, 10);


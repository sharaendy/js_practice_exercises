class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * (this.radius ** 2);
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle1 = new Circle(10);
console.log(circle1.getArea());
console.log(circle1.getCircumference());

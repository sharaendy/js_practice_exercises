// !решение 1
class Square {
  constructor(side) {
    this.side = side;
  }

  getSide() {
    return this.side;
  }
}

// const s1 = new Square(5);
// console.log(s1)
// console.log(s1.getSide())

export default class SquaresGenerator {
  static generate(side, count = 5) {
    const squareColl = [];

    let i = 0;
    while (i < count) {
      squareColl.push(new Square(side));
      i += 1;
    }

    return squareColl;
  }
}

// const square1 = new Square(10);
// console.log(square1);
// console.log(square1.getSide());

const squares = SquaresGenerator.generate(1, 1);
console.log(squares);

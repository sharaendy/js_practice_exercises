//! решение 1
function make(numer, denom) {
  const rationalNum = {
    numer,
    denom,
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    setNumer(num) {
      this.numer = num;
    },
    setDenom(num) {
      this.denom = num;
    },
    toString() {
      return `${this.numer}/${this.denom}`;
    },
    add(obj) {
      const sum = make();
      sum.numer = this.numer * obj.denom + this.denom * obj.numer;
      sum.denom = this.denom * obj.denom;
      return sum;
    },
  };
  return rationalNum;
}
const rat1 = make(3, 9);

const rat2 = make();
rat2.setNumer(10);
rat2.setDenom(3);

const result = rat1.add(rat2);
console.log(result); // 99/27

//! решенеи 2
const make = (numer, denom) => ({
  numer,
  denom,
  setNumer(newNumer) {
    this.numer = newNumer;
  },
  setDenom(newDenom) {
    this.denom = newDenom;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rational) {
    const newNumer =
      this.getNumer() * rational.getDenom() +
      rational.getNumer() * this.getDenom();
    const newDenom = this.getDenom() * rational.getDenom();
    return make(newNumer, newDenom);
  },
});

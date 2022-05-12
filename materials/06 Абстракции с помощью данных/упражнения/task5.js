//! решение 1
const getGcd = (a, b) => (a % b ? getGcd(b, a % b) : Math.abs(b));

function makeRational(numer, denom) {
  const greatCommonDiv = getGcd(numer, denom);
  const normalizedNumer = numer / greatCommonDiv;
  const normalizedDenom = denom / greatCommonDiv;
  return { numer: normalizedNumer, denom: normalizedDenom };
}

function getNumer(ratNum) {
  return ratNum.numer;
}

function getDenom(ratNum) {
  return ratNum.denom;
}

const rat1 = makeRational(-4, 16);
const rat2 = makeRational(12, 5);

function add(ratNum1, ratNum2) {
  const newNumer = getNumer(ratNum1) * getDenom(ratNum2) + getNumer(ratNum2) * getDenom(ratNum1);
  const newDenom = getDenom(ratNum1) * getDenom(ratNum2);
  return makeRational(newNumer, newDenom);
}

function sub(ratNum1, ratNum2) {
  const newNumer = getNumer(ratNum1) * getDenom(ratNum2) - getNumer(ratNum2) * getDenom(ratNum1);
  const newDenom = getDenom(ratNum1) * getDenom(ratNum2);
  return makeRational(newNumer, newDenom);
}

console.log(add(rat1, rat2)); // 43, 20
console.log(sub(rat1, rat2)); // -53, 20


//! решение 2
const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  return { numer: numer / gcd, denom: denom / gcd };
};

const getNumer = (rational) => rational.numer;

const getDenom = (rational) => rational.denom;

const add = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) + getNumer(rational2) * getDenom(rational1),
    getDenom(rational1) * getDenom(rational2),
  ));

const sub = (rational1, rational2) => (
  makeRational(
    getNumer(rational1) * getDenom(rational2) - getNumer(rational2) * getDenom(rational1),
    getDenom(rational1) * getDenom(rational2),
  ));
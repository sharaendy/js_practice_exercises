import { cons, car, cdr } from '@hexlet/pairs';

const make = (numer, denom) => cons(numer, denom);
const numer = (rat) => car(rat);
const denom = (rat) => cdr(rat);
const toString = (rat) => `${numer(rat)} / ${denom(rat)}`;
const isEqual = (rat1, rat2) => {
  if (numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1)) {
    return true;
  }
  return false;
};

const add = (rat1, rat2) => {
  const newNumer = numer(rat1) * denom(rat2) + numer(rat2) * denom(rat1);
  const newDenom = denom(rat1) * denom(rat2);
  return cons(newNumer, newDenom);
};

const sub = (rat1, rat2) => {
  const newNumer = numer(rat1) * denom(rat2) - numer(rat2) * denom(rat1);
  const newDenom = denom(rat1) * denom(rat2);
  return cons(newNumer, newDenom);
};

const mul = (rat1, rat2) => {
  const newNumer = numer(rat1) * numer(rat2);
  const newDenom = denom(rat1) * denom(rat2);
  return cons(newNumer, newDenom);
};

const div = (rat1, rat2) => {
  const newNumer = numer(rat1) * denom(rat2);
  const newDenom = denom(rat1) * numer(rat2);
  return cons(newNumer, newDenom);
};

export {
  make, numer, denom, toString, isEqual, add, sub, mul, div,
};

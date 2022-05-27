import { cons, car, cdr, toString, isPair } from '@hexlet/pairs';

function reversePair(pair) {
  return cons(cdr(pair), car(pair));
}

function sumOfPairs(pair1, pair2) {
  const carSum = car(pair1) + car(pair2);
  const cdrSum = cdr(pair1) + cdr(pair2);
  return cons(carSum, cdrSum);
}

function findPrimitiveBox(pair) {
  if (!isPair(car(pair)) && !isPair(cdr(pair))) return pair;
  return isPair(car(pair)) ? findPrimitiveBox(car(pair)) : findPrimitiveBox(cdr(pair));
}
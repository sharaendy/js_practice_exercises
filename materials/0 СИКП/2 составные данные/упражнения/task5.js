import { cons } from '@hexlet/pairs';

const cons = (x, y) => (f) => f(x, y);
const pair = cons(5, 3);
//const pair = (f) => f(5, 3);

const car = (pair) => pair((x, y) => x);
const cdr = (pair) => pair((x, y) => y);

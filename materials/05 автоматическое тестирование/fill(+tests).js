//! вариант 1
const fill = (coll, value, start = 0, end = coll.length) => {
  const collLength = coll.length;
  const normalizedStart = start > collLength ? end : start;
  const normalizedEnd = end > collLength ? collLength : end;
  for (let i = normalizedStart; i < normalizedEnd; i += 1) {
    coll[i] = value;
  }
  return coll;
};

export default fill;


//! вариант 2
export default function fill(coll, value, start = 0, end = coll.length) {
  for (let i = 0; i < coll.length; i += 1) {
    if (i >= start && i < end) {
      coll[i] = value;
    }
  }
  return coll;
}

//! тестирование
let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('common case', () => {
  fill(array, '*', 1, 3);
  expect(array).toEqual([1, '*', '*', 4]);
});

test('should use default start and end', () => {
  fill(array, '*');
  expect(array).toEqual(['*', '*', '*', '*']);
});

test('should works with start >= length', () => {
  fill(array, '*', 10, 12);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('should works with start >= end', () => {
  fill(array, '*', 2, 2);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('should works with end > length', () => {
  fill(array, '*', 0, 10);
  expect(array).toEqual(['*', '*', '*', '*']);
});
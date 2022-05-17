//! Алгоритм принимает упорядоченный массив и искомый элемент. Возвращает индекс элемента.

function binarySearch(coll, num) {
  let start = 0;
  let end = coll.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const guess = coll[mid];

    if (guess === num) {
      return mid;
    }
    if (guess > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return null;
}
const arr = [1, 3, 5, 7, 9, 11, 13, 14, 15, 22, 31, 44];
console.log(binarySearch(arr, 11));

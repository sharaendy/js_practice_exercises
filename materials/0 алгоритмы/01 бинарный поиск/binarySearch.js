// алгоритм бинарного поиска, возвращает индекс искомого аргумента item из коллекции coll
function binarySearch(coll, item) {
  let begin = 0;
  let end = coll.length - 1;

  while (begin <= end) {
    let mid = Math.round((begin + end) / 2);
    let guess = coll[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      end = mid - 1;
    } else if (guess < item) {
      begin = mid + 1;
    }
  }
  return null;
}

console.log(binarySearch([1, 3, 7, 4, 9, 22, 13, 4, 9, 2, 5, 7], 1)); // 0

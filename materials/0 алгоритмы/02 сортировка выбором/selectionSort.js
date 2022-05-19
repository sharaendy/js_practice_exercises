//! алгоритм сортировки выбором. Мой вариант: функция внутри возвращает индекс наименьшего числа переданного массива. Основная функция оболочка прогоняет входной массив возвращая выпрямленный и упорядоченный массив.

function selectionSort(coll) {

  function getSmallestIndex(arr) {
    let num = arr[0];
    let index = 0;

    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < num) {
        num = arr[i];
        index = i;
      }
    }
    return index;
  }

  const duration = coll.length;
  const sortedColl = [];
  for (let i = 1; i <= duration; i += 1) {
    const smallestIndex = getSmallestIndex(coll);
    sortedColl.push(coll.splice(smallestIndex, 1));
  }
  return sortedColl.flat();
}

const arr = [5, 3, 1, 4, 0, 2];
console.log(selectionSort(arr));

//! вариант 1 из интернет

const selectionSort = arr => {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
      let indexMin = i;
      for (let j = i + 1; j < l; j++) {
          if (arr[indexMin] > arr[j]) {
              indexMin = j;
          }
      }
      if (indexMin !== i) {
          [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
      }
  }
  return arr;
};

//! вариант 2 из интернет
function selectionSort(arr, compare = defaultCompare) {
  const { length } = arr;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
      minIndex = i;
      for (let j = i; j < length; j++) {
          if (compare(arr[minIndex], arr[j]) === Compare.BIGGER_THAN) {
              minIndex = j;
          }
      }
      if (i !== minIndex) {
          swap(arr, i, minIndex);
      }
  }
  return arr;
}

// Возвращает массив с общими (пересечение множеств) элементами:
export default function getIntersectionOfArrays(arr1, arr2) {
  const size1 = arr1.length;
  const size2 = arr2.length;

  let i1 = 0;
  let i2 = 0;
  const result = [];

  while (i1 < size1 && i2 < size2) {
    if (arr1[i1] === arr2[i2]) {
      result.push(arr1[i1]);
      i1 += 1;
      i2 += 1;
    } else if (arr1[i1] > arr2[i2]) {
      i2 += 1;
    } else {
      i1 += 1;
    }
  }
  return result;
}

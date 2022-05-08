//! мое решение
function chunk(coll, count) {
  if (coll.length === 0) return [];
  const chunkedColl = [];
  let currentColl = [];

  for (const item of coll) {
    if (currentColl.length < count) {
      currentColl.push(item);
    } else {
      chunkedColl.push(currentColl);
      currentColl = [];
      currentColl.push(item);
    }
  }
  chunkedColl.push(currentColl);
  return chunkedColl;
}
//! мое решение
// export default chunk;

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));
console.log(chunk([], 4));
console.log(chunk(['a'], 2));
console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2));

//! эталон
export default (arr, size) => {
  const nArr = [];
  for (let i = 0; i < arr.length; i += size) {
    nArr.push(arr.slice(i, i + size));
  }
  return nArr;
};
//! эталон
function merge(...objects) {
  // function sorter(acc, item) {
    // if (!Object.hasOwn(acc, obj)) {
    //   acc[item]
    // }
  // }
  return objects.map((item) => item);
}

console.log(merge({ a: 1, b: 2 }, { a: 3 }));
// { a: [1, 3], b: [2] }

const objects = [{ name: 'Karl' }, { name: 'Mia' }];

//! решение 1 (плохое, читерское)
function each(coll, callback) {
  const result = [];
  for (const item of coll) {
    item.callback = callback;
    result.push(item.callback());
    delete item.callback;
  }
  return result;
}

//! решение 2 (лучшее)
export default (objects, callback) => objects.forEach((object) => callback.call(object));


each(objects, function callback() {
  this.name = this.name.split('').reverse().join('');
});

console.log(objects);
// [
//   { name: 'lraK' },
//   { name: 'aiM' },
// ];

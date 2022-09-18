/* eslint-enable */
const obj = {
  str: 'hello',
  a() {
    return this.str;
  }
}

let temp = obj.a;
const newTemp = temp.bind(obj);
console.log(newTemp())
// console.log(temp.call(obj));

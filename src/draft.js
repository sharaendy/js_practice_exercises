function magic(...nums) {
  const sum = nums.reduce((acc, item) => acc + item, 0);
  const inner = (...rest) => magic(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
}

console.log(magic(5, 2, -8) == -1); // true)
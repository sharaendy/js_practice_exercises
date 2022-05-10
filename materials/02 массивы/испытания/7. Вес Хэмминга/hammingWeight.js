//! лучшее
const hammingWeight = (num) => {
  let weight = 0;
  const digits = num.toString(2);

  for (let i = 0; i < digits.length; i += 1) {
    weight += Number(digits[i]);
  }

  return weight;
};

console.log(hammingWeight(5)); // 2
console.log(hammingWeight(10)); // 2
console.log(hammingWeight(101)); // 4
console.log(hammingWeight(12345)); // 6

//! решение 1
function hammingWeight(num) {
  let divResult = num;
  let onesCount = 0;

  while (divResult > 0) {
    onesCount += divResult % 2;
    divResult = Math.floor(divResult / 2);
  }
  return onesCount;
}

//! лучшее
const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
};

//! вариант 1
function diff(a, b) {
  const dif = Math.abs(a - b);
  if (dif > 180) {
    const result = 360 - dif;
    return result;
  }
  return dif;
}

console.log(diff(0, 0)); // 0
console.log(diff(0, 90)); // 90
console.log(diff(0, 180)); // 180
console.log(diff(0, 190)); // 170
console.log(diff(225, 0)); // 135
console.log(diff(0, 225)); // 135
console.log(diff(300, 45)); // 105
console.log(diff(45, 300)); // 105
console.log(diff(240, 300)); // 60
console.log(diff(120, 30)); // 90

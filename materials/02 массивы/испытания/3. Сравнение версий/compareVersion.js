//!мое решение
function compare(num1, num2) {
  if (num1 > num2) {
    return 1;
  } else if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}

function compareVersion(version1, version2) {
  const verArr1 = version1.split('.');
  const verArr2 = version2.split('.');

  switch (compare(verArr1[0], verArr2[0])) {
    case 1:
      return 1;
    case -1:
      return -1;
    case 0:
      return compare(Number(verArr1[1]), Number(verArr2[1]));
  }
}
//!мое решение

console.log(compareVersion('0.1', '0.2'))//(-1);
console.log(compareVersion('0.2', '0.1'))//(1);
console.log(compareVersion('4.2', '4.2'))//(0);
console.log(compareVersion('0.2', '0.12'))//(-1);
console.log(compareVersion('3.2', '4.12'))//(-1);
console.log(compareVersion('3.2', '2.12'))//(1);

//!эталон
const compareVersion = (first, second) => {
  const [a1, b1] = first.split('.');
  const [a2, b2] = second.split('.');

  const major = Math.sign(a1 - a2);
  const minor = Math.sign(b1 - b2);

  return major === 0 ? minor : major;
};

export default compareVersion;
//!эталон
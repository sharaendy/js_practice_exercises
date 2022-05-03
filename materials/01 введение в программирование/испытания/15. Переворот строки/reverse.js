//! лучшее
function reverse(str) {
  if (str.length === 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

export default reverse;

console.log(reverse('hexlet')); //telxeh
console.log(reverse('abs')); //sba
console.log(reverse('ab')); //ba

//! вариант 1
function reverse(str) {
  if (str.length === 0) {
    return str;
  }
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

export default reverse;

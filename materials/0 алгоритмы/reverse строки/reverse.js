//! решение 1
function reverse(str) {
  function iter(index, acc) {
    if (index > str.length - 1) {
      return acc;
    }
    acc = `${str[index]}${acc}`;
    return iter(index + 1, acc);
  }
  return iter(0, '');
}

//! лучшее
function reverse(str) {
  const lastIndex = str.length - 1;
  const iter = (index, acc) => {
    if (index > lastIndex) {
      return acc;
    }
    return iter(index + 1, `${str[index]}${acc}`);
  };
  return iter(0, '');
}

console.log(reverse('')); // ''
console.log(reverse('z')); // 'z'
console.log(reverse('zz')); // 'zz'
console.log(reverse('zza')); // 'azz'
console.log(reverse('qwerty')); // 'ytrewq'

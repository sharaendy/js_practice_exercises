function allAnagrams(array) {
  const reference = array[0].split('').sort().join();

  array.forEach((item) => {
    if (item.split('').sort().join() !== reference) {
      return false;
    }
    return null;
  });
  return true;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); // false

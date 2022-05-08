//! лучшее
export default (word, words) => {
  const normalize = (str) => str.split('').sort().join('');
  const normal = normalize(word);

  return words.filter((item) => normalize(item) === normal);
};

//! решение 1
function filterAnagrams(word, list) {
  const amplifyAndSort = (str) => str.split('').sort().join('');
  const compare = (str1, str2) => amplifyAndSort(str1) === amplifyAndSort(str2);
  
  return list.filter((item) => compare(word, item));
}

console.log(filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

console.log(filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

console.log(filterAnagrams('laser', ['lazing', 'lazy', 'lacer']));
// []

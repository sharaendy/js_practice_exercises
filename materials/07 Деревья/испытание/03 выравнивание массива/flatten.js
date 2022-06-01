const flatten = (list) => list.reduce((acc, element) => {
  return (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);  
}, []);

const list = [1, 2, [[3], 4], 5, [[6, 7], 8], 9];
console.log('final:', flatten(list));
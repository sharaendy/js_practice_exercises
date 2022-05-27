// исходная версия
concat('a', 'bc', 'f'); // abcf

// каррированая версия
const concat = (a) => (b) => (c) => `${a}${b}${c}`;
console.log(concat('a')('bc')('f')); // abcf
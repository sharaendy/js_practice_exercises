//! лучшее
export default (n) => {
  let rna = '';
  for (let i = 0; i < n.length; i += 1) {
    switch (n[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        return null;
    }
  }

  return rna;
};

console.log(dnaToRna('ACGTGGTCTTAA'));
console.log(dnaToRna('CCGTA'));
console.log(dnaToRna(''));
console.log(dnaToRna('ACNTG'));

// !вариант 1
function dnaToRna(DNA) {
  let result = '';
  for (let i = 0; i < DNA.length; i += 1) {
    if (DNA === ' ') {
      result = ` `;
    } else if (DNA[i] === 'G') {
      result = `${result}${'C'}`;
    } else if (DNA[i] === 'C') {
      result = `${result}${'G'}`;
    } else if (DNA[i] === 'T') {
      result = `${result}${'A'}`;
    } else if (DNA[i] === 'A') {
      result = `${result}${'U'}`;
    } else return null;
  }
  return result;
};

//! вариант 2
function dnaToRna(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case 'G':
        result += 'C';
        break;
      case 'C':
        result += 'G';
        break;
      case 'T':
        result += 'A';
        break;
      case 'A':
        result += 'U';
        break;
      default:
        return null;
    }
  }
  return result;
}

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null

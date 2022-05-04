function dnaToRna(dna) {
  const map = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  const rna = [];
  for (const item of dna) {
    if (!Object.hasOwn(map, item)) {
      return null;
    }
    rna.push(map[item]);
  }
  return rna.join('');
}

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null

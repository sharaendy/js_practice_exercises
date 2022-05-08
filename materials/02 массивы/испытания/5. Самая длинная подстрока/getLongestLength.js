//!мое решение
function maxSeqs(coll) {
  let maxNum = coll[0];
  for (const item of coll) {
    if (item > maxNum) {
      maxNum = item;
    }
  }
  return maxNum;
}

function getLongestLength(str) {
  if (str.length === 0) return 0;
  const strToArr = str.split('');
  const seqs = [];

  let i = 0;
  let acc = [];
  let counter = 1;

  while (i < strToArr.length) {
    if (!acc.includes(strToArr[i])) {
      acc.push(strToArr[i]);
      i += 1;
    } else {
      seqs.push(acc.length);
      acc = [];
      i = counter;
      counter += 1;
    }
  }
  seqs.push(acc.length);
  return maxSeqs(seqs);
}

console.log(getLongestLength('jabjcdel'));//(7);
console.log(getLongestLength('abcddef'));//(4);
console.log(getLongestLength('abbccddeffg'));//(3);
console.log(getLongestLength('abcd'));//(4);
console.log(getLongestLength('1234561qweqwer'));//(9);
console.log(getLongestLength('1234561qweqwerqer'));//(9);
console.log(getLongestLength(''));//(0);

//!мое решение



//!эталон
const getLongestLength = (str) => {
  let sequence = [];
  let maxLength = 0;

  // Проходимся по всем символам переданной строки.
  for (const char of str) {
    // Ищем в сформированной последовательности
    // позицию первого вхождения текущего символа.
    const index = sequence.indexOf(char);
    // Добавляем в последовательность текущий символ.
    sequence.push(char);
    if (index !== -1) {
      // Если символ в последовательности был найден,
      // значит в неё был добавлен повторяющийся символ.
      // Отсекаем из все символы включая найденный.
      sequence = sequence.slice(index + 1);
    }
    // Получаем длину последовательности.
    const sequenceLength = sequence.length;
    if (sequenceLength > maxLength) {
      // Если длина последовательности больше чем максимальная,
      // устанавливаем новую максимальную длину.
      maxLength = sequenceLength;
    }
  }

  return maxLength;
};
//!эталон
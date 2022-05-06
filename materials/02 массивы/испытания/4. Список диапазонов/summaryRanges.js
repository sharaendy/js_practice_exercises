//!мое решение
function extractor(arr) {
  const dash = '->';
  const result = `${arr[0]}${dash}${arr[arr.length - 1] + 1}`;
  // const strToArr = result.split();
  return result;
}

function summaryRanges(coll) {
  let track = [];
  const final = [];

  for (let i = 0; i < coll.length; i += 1) {
    if (coll[i] - coll[i + 1] === -1) {
      track.push(coll[i]);
    } else if (track.length > 0) {
      final.push(extractor(track));
      track = [];
    }
  }
  return final;
}

console.log(summaryRanges([]));//.([]);
console.log(summaryRanges([1]));//.([]);
console.log(summaryRanges([1, 2, 3]));//.(['1->3']);
console.log(summaryRanges([8, 3, 1, 12, 2, 5]));//.([]);
console.log(summaryRanges([8, 3, 1, 2, 3]));//.(['1->3']);
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));//.(['0->2', '4->5']);
console.log(summaryRanges([1, 1, 3, 4, 5, -6, 8, 9, 10, 12, 14, 14]));//.(['3->5', '8->10']);
console.log(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5]));//['110->112', '-5->-4']);
//!мое решение

//!эталон
const getRangeOfSequence = (sequence) => {
  const first = sequence[0];
  const last = sequence[sequence.length - 1];
  return `${first}->${last}`;
};

const summaryRanges = (numbers) => {
  const ranges = [];
  let sequence = [];

  for (let index = 0; index < numbers.length; index += 1) {
    const current = numbers[index];
    const next = numbers[index + 1];
    sequence.push(current);
    if (current + 1 !== next) {
      if (sequence.length > 1) {
        const range = getRangeOfSequence(sequence);
        ranges.push(range);
      }
      sequence = [];
    }
  }

  return ranges;
};

export default summaryRanges;
//!эталон

//!решение 2022
function summaryRanges(coll) {
  const result = [];
  let temp = '';
  let stream = 0;

  let i = 0;
  while (i < coll.length) {
    temp += `${coll[i]}->`;
    while (coll[i] === coll[i + 1] - 1) {
      i += 1;
      stream += 1;
    }
    temp += `${coll[i]}`;
    if (stream > 0) result.push(temp);
    stream = 0;
    temp = '';
    i += 1;
  }
  return result;
}
//!решение 2022
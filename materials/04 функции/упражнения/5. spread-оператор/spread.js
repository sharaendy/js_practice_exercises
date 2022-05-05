//! лучшее
export default (...coll) => {
  const formattedDates = [];

  for (const item of coll) {
    const date = new Date(...item);
    const formattedDate = date.toDateString();
    formattedDates.push(formattedDate);
  }

  return formattedDates;
};

//! решение 1
function convert(...income) {
  const result = [];

  for (const item of income) {
    const date = new Date(...item);
    const dateToString = date.toDateString();
    result.push(dateToString);
  }

  return result;
}

const coll1 = [[1993, 3, 24]];

const coll2 = [
  [1993, 3, 24],
  [1997, 8, 12],
  [2001, 10, 18],
];

const coll3 = [];


console.log(convert(...coll1));

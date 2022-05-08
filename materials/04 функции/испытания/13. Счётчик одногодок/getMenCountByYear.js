//! лучшее
const getMenCountByYear = (users) => {
  const men = users.filter(({ gender }) => gender === 'male');

  const years = men.map(({ birthday }) => birthday.slice(0, 4));

  return years.reduce((acc, year) => {
    const count = _.get(acc, year, 0) + 1;
    return { ...acc, [year]: count };
  }, {});
};

//! решение 1

const counter = (acc, item) => {
  if (!Object.hasOwn(acc, item)) {
    acc[item] = 0;
  }
  acc[item] += 1;
  return acc;
};

const getMenCountByYear = (coll) => coll
  .filter((item) => item.gender === 'male')
  .map((item) => item.birthday.slice(0, 4))
  .reduce(counter, {});

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  { name: 'Jon', gender: 'male', birthday: '1980-11-03' },
  { name: 'Robb', gender: 'male', birthday: '1980-05-14' },
  { name: 'Tisha', gender: 'female', birthday: '2012-11-03' },
  { name: 'Rick', gender: 'male', birthday: '2012-11-03' },
  { name: 'Joffrey', gender: 'male', birthday: '1999-11-03' },
  { name: 'Edd', gender: 'male', birthday: '1973-11-03' },
];

console.log(getMenCountByYear(users));
// {
//   1973: 3,
//   1963: 1,
//   1980: 2,
//   2012: 1,
//   1999: 1,
// };

//! лучшее
import _ from 'lodash';
const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, count);
};


//! решение 1

function takeOldest(list, n = 1) {
  const sortedList = list.sort(compare);
  const finalColl = [];
  for (let i = 0; i < n; i += 1) {
    finalColl.push(sortedList[i]);
  }
  return finalColl;
}

function compare(a, b) {
  const person1 = Date.parse(a.birthday);
  const person2 = Date.parse(b.birthday);

  if (person1 === person2) {
    return 0;
  }

  return person1 > person2 ? 1 : -1;
}



const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

console.log(takeOldest(users, 4));

// const date = Date.parse(list.birthday);
// return _.sortBy(list, [ date ]);







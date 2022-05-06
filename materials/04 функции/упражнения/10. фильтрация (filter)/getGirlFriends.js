//! лучшее
export default (users) => {
  const friendsOfUsers = users.map(({ friends }) => friends);
  return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
};

//! решение 1
const extractFemales = (coll) => coll.gender === 'female';
const extractFriends = (obj) => obj.friends;
const getGirlFriends = (coll) => coll.map(extractFriends).flat().filter(extractFemales);






const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', gender: 'male' },
    ],
  },
];

getGirlFriends(users);
console.log(getGirlFriends(users));
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
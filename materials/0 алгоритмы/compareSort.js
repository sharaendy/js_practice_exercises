const users = [
  { name: 'Igor', age: 19 },
  { name: 'Danil', age: 1 },
  { name: 'Vovan', age: 4 },
  { name: 'Matvey', age: 16 },
];

// Функция принимает на вход сравниваемые элементы массива потом передается в .sort
const compare = (a, b) => {
  if (a.age === b.age) {
    return 0;
  }

  return a.age > b.age ? 1 : -1;
};

users.sort(compare);

console.log(users);
// => [ { name: 'Danil', age: 1 },
//      { name: 'Vovan', age: 4 },
//      { name: 'Matvey', age: 16 },
//      { name: 'Igor', age: 19 } ]
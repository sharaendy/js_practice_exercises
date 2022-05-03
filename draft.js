const user1 = { name: 'Vasya', married: true, age: 25 };
 
const user2 = { ...user1, age: 18 };
user1.age = 21;
 
console.log(user2.age);
console.log(user1.age);
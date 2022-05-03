const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };

const { name, ...rest } = user;

console.log(rest);
// => { email: 'support@hexlet.io', age: 44 }
console.log(name);
console.log(user);
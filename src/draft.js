const student = {
  name: 'Roman',
  age: 23,
  program: 'js-frontend',
};

const rewrite = new Proxy(student, {
  set(target, prop, value) {
    // если свойство есть в объекте, proxy позволяет нам его переписать
    if (prop in target) {
      target[prop] = value;
      // при успешной записи, метод set() должен вернуть true
      return true;
    }
    throw new Error(`Cannot rewrite non-existed property '${prop}'`);
  },
});

rewrite.name = 'Russia';
console.log(student)

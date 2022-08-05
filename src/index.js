setTimeout(function timeout() {
  console.log('Таймаут');
}, 0);

let createPromise = new Promise(function (resolve, reject) {
  console.log('Создаем промис');
  resolve();
});

createPromise.then(function () {
  console.log('Обработка промиса');
});

console.log('где я?');

// где я?
// Таймаут
// Обработка промиса

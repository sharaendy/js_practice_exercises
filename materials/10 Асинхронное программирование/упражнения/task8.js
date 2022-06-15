import fs from 'fs';

//! решение 1
export default function watch(filepath, period, cb) {
  let lastCheckTime = Date.now();

  function check(timerId) {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }
      const { mtimeMs } = stats;
      if (mtimeMs > lastCheckTime) {
        cb(null);
        lastCheckTime = mtimeMs;
      }
    });
  };

  const timerId = setInterval(() => check(timerId), period);
  return timerId;
};

// const filepath = 'no-path';
const filepath = '/home/aash7133/projects/js_practice_exercises/file1.txt';
const id = watch(filepath, 500, (err, done) => {
  if (err) {
    console.log('ошибка');
  }
  console.log('Wow!');
});

// console.log('id = ', id);

// +Date.now() <= (stats.mtimeMs + delay)


//! решение 2 (недоработано)

import fs from 'fs';

export default function watch(filepath, delay, cb) {
  let timeStart = 0;
  let timeCurrent = 0;

  fs.stat(filepath, (err1, stats) => {
    if (err1) {
      clearInterval(id);
      cb(err1);
      return;
    }
    timeStart = stats.mtimeMs;
  });

  const id = setInterval(() => {
    fs.stat(filepath, (err2, stats) => {
      if (err2) {
        clearInterval(id);
        cb(err2);
        return;
      }
      timeCurrent = stats.mtimeMs;
      if (timeStart !== timeCurrent) {
        clearInterval(id);
        cb();
      }
    });
  }, delay);
  return id;
}

// const filepath = 'no-path';
const filepath = '/home/aash7133/projects/js_practice_exercises/file1.txt';
const id = watch(filepath, 500, (err, done) => {
  if (err) {
    console.log('ошибка');
  }
  console.log('Wow!');
});

// console.log('id = ', id);

// +Date.now() <= (stats.mtimeMs + delay)
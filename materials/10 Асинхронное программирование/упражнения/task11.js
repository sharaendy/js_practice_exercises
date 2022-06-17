//! решение 1
import fs from 'fs';

function cb(acc, path) {
  const newAcc = fs.promises
    .stat(path)
    .then((stats) => stats.isDirectory())
    .then((isDirectory) => {
      if (isDirectory) {
        return acc.then((arr) => arr.concat(['directory']));
      }
      return acc.then((arr) => arr.concat(['file']));
    })
    .catch(() => acc.then((arr) => arr.concat([null])))
  return newAcc;
}

function getTypes(pathList) {
  return pathList.reduce(cb, Promise.resolve([]));
}

const path1 = '/home/aash7133/projects/js_practice_exercises/build'; // dir
const path2 = '/home/aash7133/projects/js_practice_exercises/gulpfile.js'; // file
const path3 = '/home/aash7133/projects/js_practice_exercises/undefined'; // null

getTypes([path1, path2, path3]).then(console.log);


//! решение 2
import fs from 'fs/promises';

const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');

export const getTypes = (filesPath) => {
  // функция получает путь и аккумулятор из reduce, выполняет попытку получить stat,
  // добавляет в аккумулятор строку или null и возвращает обновлённый аккумулятор
  const processPath = (filepath, result) => fs.stat(filepath)
    .then((data) => [...result, getTypeName(data)])
    .catch(() => [...result, null]);

  const resultPromise = filesPath.reduce(
    // promise - это аккумулятор, обёрнутый в промис, поэтому на нём вызывается then
    // result - предыдущее значение аккумулятора
    (promise, filepath) => promise.then((result) => processPath(filepath, result)),
    Promise.resolve([]),
  );
  return resultPromise;
};

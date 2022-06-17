//! решение 1
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

function getDirectorySize(dirpath) {
  const promise = fs.promises.readdir(dirpath).then((contents) => {
    const list = contents.map((item) => path.join(dirpath, item));
    const files = list.filter((item) => fs.statSync(item).isFile());
    const sizes = files.map((filepath) => fs.statSync(filepath).size);
    const filesSum = _.sum(sizes);
    return filesSum;
  });
  return promise;
}

const abs = '/home/aash7133/projects/js_practice_exercises/my_folder/inner_folder';
getDirectorySize(abs).then(console.log);

//! решение 2
const getDirectorySize = (dirpath) => {
  const promise = fs.readdir(dirpath).then((filenames) => {
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    const promises = filepaths.map(fs.stat);
    return Promise.all(promises);
  });

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'));
};
import fs from 'fs';
import path from 'path';
import async from 'async';
import _ from 'lodash';

//! решение 1
export const getDirectorySize = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }
    const filepaths = filenames.map((name) => path.join(dirpath, name));
    async.map(filepaths, fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      const sum = _.sumBy(stats.filter((stat) => stat.isFile()), 'size');
      cb(null, sum);
    });
  });
};

//! решение 2
function getDirectorySize(dir, cb1) {
  fs.readdir(dir, (err1, dirContentColl) => {
    if (err1) {
      cb1(err1);
      return;
    }
    // console.log('dirContentColl =', dirContentColl);
    function getFileSizeInBytes(filePath, cb2) {
      fs.stat(filePath, (err2, stats) => {
        if (err2) {
          cb2(err2);
          return;
        }
        // console.log(stats.isFile())
        // if (stats.isDirectory()) {
        //   return;
        // }
        cb2(null, stats.size);
      });
    }
    const fullPathContentColl = dirContentColl.map((item) => path.join(dir, item));
    // const onlyFilesColl = fullPathContentColl.filter((itemPath) => fs.statSync(itemPath).isFile());
    // console.log('onlyFilesColl', onlyFilesColl)
    // console.log('fullPathContentColl =', fullPathContentColl);
    async.map(fullPathContentColl, getFileSizeInBytes, (err3, results) => {
      if (err3) {
        cb1(err3);
        return;
      }
      // console.log(results);
      const current = 0;
      cb1(results.reduce((a, b) => a + b, current));
    });
  });
}

const dir = '/home/aash7133/projects/js_practice_exercises/dir1/dir2/this/';

getDirectorySize(dir, (err, size) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(size);
});

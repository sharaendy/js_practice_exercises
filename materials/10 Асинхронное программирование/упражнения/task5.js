import fs from 'fs';
//! вариант 1
export default function compareFileSizes(filepath1, filepath2, callback) {
  fs.stat(filepath1, (_error, stats1) => {
    fs.stat(filepath2, (_error, stats2) => {
      const fileSize1 = stats1.size;
      const fileSize2 = stats2.size;
      let result = 0;

      if (Math.sign(fileSize1 - fileSize2) === 1) {
        result = 1;
      }
      if (Math.sign(fileSize1 - fileSize2) === -1) {
        result = -1;
      }
      return callback(null, result);
    });
  });
}

//! вариант 2
export default function compareFileSizes(filepath1, filepath2, callback) {
  fs.stat(filepath1, (_error, stats1) => {
    fs.stat(filepath2, (_error, stats2) => {
      const fileSize1 = stats1.size;
      const fileSize2 = stats2.size;
      let result = 0;
      switch (Math.sign(fileSize1 - fileSize2)) {
        case 1:
          result = 1;
          break;
        case -1:
          result = -1;
          break;
      }
      return callback(null, result);
    });
  });
}


//! вариант 3
export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (_error1, { size: size1 }) => {
    fs.stat(filepath2, (_error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};


const file1 = '/home/aash7133/projects/js_practice_exercises/file1.txt';
const file2 = '/home/aash7133/projects/js_practice_exercises/file2.txt';
compareFileSizes(file1, file2, (_err, result) => console.log(result));

// fs.stat(file, (_err, stats) => {
//   console.log(stats.size);
// });

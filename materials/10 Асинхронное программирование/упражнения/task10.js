import fs from 'fs';

// //! решение 1
// export const touch = (filepath) =>
//   fs.promises.access(filepath).catch(() => fs.promises.writeFile(filepath, ''));

//! решение 2 (требует доработку)
function touch(filepath) {
  fs.promises
    .access(filepath)
    .catch(() => {
      fs.promises.writeFile(filepath, '');
    });
}

touch('/home/aash7133/projects/js_practice_exercises/file1.txt');
touch('/home/aash7133/projects/js_practice_exercises/empty.jpg');

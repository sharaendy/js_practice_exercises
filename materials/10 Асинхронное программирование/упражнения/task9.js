import fs from 'fs/promises';
// const { promises: fsp } = fs;

//! решение 1
function reverse(filepath) {
  return fs
    .readFile(filepath, 'utf-8')
    .then((content) => content.split('\n'))
    .then((coll) => {
      const [row1, row2] = coll;
      return [row2, '\n', row1].join('');
    })
    .then((newColl) => fs.writeFile(filepath, newColl));
}


//! решение 2
export const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((data) => {
    const preparedData = data.split('\n').reverse().join('\n');
    return fs.writeFile(filepath, preparedData);
  });



  
const file = '/home/aash7133/projects/js_practice_exercises/file1.txt';
reverse(file);

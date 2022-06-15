import fs from 'fs';
// const { promises: fsp } = fs;

function reverse(filepath) {
  fs.promises.readFile(filepath, 'utf-8')
  .then((content) => console.log('данные получены'))
  .then(())
}

const file = '/home/aash7133/projects/js_practice_exercises/file1.txt';
reverse(file);

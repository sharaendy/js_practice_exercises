import fs from 'fs';

function move(file, dir, cb) {
  fs.readFile(file, 'utf-8', (err1, done) => {
    if (err1) {
      cb(err1);
      return;
    }
    fs.writeFile(dir, done, (err2) => {
      if (err2) {
        cb(err2);
        return;
      }
      fs.unlink(file, (err3) => {
        if (err3) {
          cb(err3);
          return;
        }
        cb(null);
      });
    });
  });
}

const file1 = '/home/aash7133/projects/js_practice_exercises/file1.txt';
const dir = '/home/aash7133/projects/js_practice_exercises/dir/file3.txt';

move(file1, dir, (error) => {
  if (error) {
    console.log('error');
    return;
  }
  console.log('yes!');
});

// import fs from 'fs';
// const abs = fs.readFileSync('/file1.txt');
// console.log(abs);

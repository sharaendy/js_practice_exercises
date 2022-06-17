//! решение 1
import {promises as fsp } from 'fs';

async function exchange(path1, path2) {
  const data1 = await fsp.readFile(path1, 'utf-8');
  const data2 = await fsp.readFile(path2, 'utf-8');
  await fsp.writeFile(path1, `${data2}`);
  await fsp.writeFile(path2, `${data1}`);
}

//! решение 2
import {promises as fs } from 'fs';

async function exchange(path1, path2) {
  const read1 = fs.readFile(path1, 'utf-8');
  const read2 = fs.readFile(path2, 'utf-8');
  const [data1, data2] = await Promise.all([read1, read2]);
  const write1 = fs.writeFile(path2, data1);
  const write2 = fs.writeFile(path1, data2);
  Promise.all([write1, write2]);
}

const path1 = '/home/aash7133/projects/js_practice_exercises/file1.txt';
const path2 = '/home/aash7133/projects/js_practice_exercises/file2.txt';

exchange(path1, path2);

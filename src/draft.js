import {
  mkfile,
  mkdir,
  getChildren,
  // getMeta,
  // getName,
  isFile,
  isDirectory,
  getName,
  // isDirectory,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const data = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [mkfile('nginx.conf', { size: 800 })]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

function filesSize(tree) {
  if (isFile(tree)) {
    return tree.meta.size;
  }
  const children = getChildren(tree);
  const childrenSizes = children.map(filesSize);
  return _.sum(childrenSizes);
}

function du(tree) {
  const children = getChildren(tree);
  return children
    .map((item) => {
      const elem = [];
      elem.push(getName(item));
      elem.push(filesSize(item));
      return elem;
    })
    .sort((a, b) => {
      if (a[1] < b[1]) {
        return 1;
      }
      if (a[1] > b[1]) {
        return -1;
      }
      return 0;
    });
}

// console.log(du(data));
console.log(du(getChildren(data)[0]));
// ['etc', 10280], ['hosts', 3500], ['resolve', 1000],
// ['consul', 9480], ['nginx', 800], ['apache', 0],

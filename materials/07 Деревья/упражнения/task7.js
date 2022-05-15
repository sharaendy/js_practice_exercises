//! найти все скрытые файлы линукс
import {
  mkfile,
  mkdir,
  getChildren,
  // getMeta,
  // getName,
  isFile,
  // isDirectory,
} from '@hexlet/immutable-fs-trees';

import _ from 'lodash';

//! решение 1
function getHiddenFilesCount(tree) {
  if (isFile(tree)) {
    if (tree.name.startsWith('.')) {
      return 1;
    }
    return 0;
  } 

  const children = getChildren(tree);
  // console.log('children = ', children);
  const hiddenFilesCount = children.map(getHiddenFilesCount);
  // console.log('hiddenFilesCount = ', hiddenFilesCount);

  return _.sum(hiddenFilesCount);
}

const data = mkdir('/', [
  mkdir('.etc', [
    mkdir('.apache'),
    mkdir('nginx', [
      mkfile('.nginx.conf', { size: 800 }),
    ]),
  ]),
  mkdir('.consul', [
    mkfile('config.json', { size: 1200 }),
    mkfile('.raft', { size: 80 }),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);


// console.log(data)

// getHiddenFilesCount(data);
console.log(getHiddenFilesCount(data));


//! решение 2
const getHiddenFilesCount = (node) => {
  const name = getName(node);
  if (isFile(node)) {
    return name.startsWith('.') ? 1 : 0;
  }

  const children = getChildren(node);
  const hiddenFilesCounts = children.map(getHiddenFilesCount);
  return _.sum(hiddenFilesCounts);
};

//TODO смена meta данных в после рекурсивного обхода дерева
import {
  mkfile,
  mkdir,
  getChildren,
  getMeta,
  getName,
  isFile,
  // isDirectory,
} from '@hexlet/immutable-fs-trees';

import _ from 'lodash';

const test = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc', { owner: 'Andrey' }),
    mkfile('consul.cfg', { owner: 'Andrey' }),
  ]),
  mkfile('hexletrc', { owner: 'Andrey' }),
  mkdir('bin', [
    mkfile('ls', { owner: 'Andrey' }),
    mkfile('cat', { owner: 'Andrey' }),
  ], { owner: 'Andrey' }),
], { owner: 'Andrey' });

function changeOwner(tree, newOwner) {
  const name = getName(tree);
  const meta = _.cloneDeep(getMeta(tree));
  meta.owner = newOwner;

  if (isFile(tree)) {
    return mkfile(name, meta);
  }
  
  const childrens = getChildren(tree);
  const newChildrens = childrens.map((children) => changeOwner(children, newOwner));
  const newTree = mkdir(name, newChildrens, meta);
  return newTree;
}

// console.log(changeOwner(test, 'Maria'));


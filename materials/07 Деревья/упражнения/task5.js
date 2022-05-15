//TODO нужно заменить имена во всех файлах дерева на toLowerCase.

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

const data = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

//! решение 1
function downcaseFileNames(tree) {
  const name = getName(tree);
  const meta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    const newName = tree.name.toLowerCase();
    return mkfile(newName, meta);
  }

  const childrens = getChildren(tree);
  const newChildrens = childrens.map((children) => downcaseFileNames(children));
  const newTree = mkdir(name, newChildrens, meta);
  return newTree;
}

console.log(downcaseFileNames(data));

//! решение 2
const downcaseFileNames = (node) => {
  const newMeta = _.cloneDeep(getMeta(node));
  const name = getName(node);
  if (isFile(node)) {
    return mkfile(name.toLowerCase(), newMeta);
  }
  const children = getChildren(node);
  const newChildren = children.map(downcaseFileNames);
  return mkdir(name, newChildren, newMeta);
};

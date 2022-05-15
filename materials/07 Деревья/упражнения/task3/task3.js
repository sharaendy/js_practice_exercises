import {
  mkfile,
  mkdir,
  getChildren,
  getMeta,
  getName,
  // isFile,
  isDirectory,
} from '@hexlet/immutable-fs-trees';

import _ from 'lodash';

//! решение 1
function compressImages(node) {
  const childrens = getChildren(node);
  const newName = getName(node);
  const newRootMeta = _.cloneDeep(getMeta(node));

  const newChildrens = childrens.map((children) => {
    const newMeta = _.cloneDeep(getMeta(children));
    console.log('==>', newMeta);
    if (isDirectory(children)) {
      return mkdir(getName(children), [getChildren(children)], newMeta);
    }

    if (children.name.substring(children.name.length - 4) === '.jpg') {
      newMeta.size /= 2;
      console.log('==>2', newMeta);
      return mkfile(getName(children), newMeta);
    }

    return mkfile(getName(children), newMeta);
  });

  return mkdir(newName, newChildrens, newRootMeta);
}

const tree = mkdir('my documents', [
  mkfile('avatar.jpg', { size: 100, attributes: { hide: false, readOnly: true } }),
  mkdir('presentations'),
], { owner: 'hexlet' });

console.log(compressImages(tree));

//! решение 2
export const compressImages = (node) => {
  const children = getChildren(node);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child) || !name.endsWith('.jpg')) {
      return child;
    }
    const meta = getMeta(child);
    const newMeta = _.cloneDeep(meta);
    newMeta.size /= 2;
    return mkfile(name, newMeta);
  });
  const newMeta = _.cloneDeep(getMeta(node));
  return mkdir(getName(node), newChildren, newMeta);
};
